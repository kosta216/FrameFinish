/* FrameFinish Website — Support-Formular
 * --------------------------------------
 * Versand über Web3Forms (siehe config.js). Schutzmechanismen:
 *  - Kill-Switch: FF_CONFIG.formEnabled === false  => Formular aus.
 *  - Rate-Limit: max FF_CONFIG.rateLimitMax pro Zeitfenster, pro Browser.
 *  - Honeypot: verstecktes Feld "botcheck"; von Bots ausgefüllt => verworfen.
 * Die Ziel-E-Mail steht NICHT hier, sondern im Web3Forms-Dashboard.
 */
(function () {
  'use strict';

  var RATE_KEY = 'ff_form_sends';

  function cfg() { return window.FF_CONFIG || {}; }

  function recentSends() {
    var now = Date.now();
    var win = cfg().rateLimitWindowMs || 3600000;
    var list;
    try { list = JSON.parse(localStorage.getItem(RATE_KEY) || '[]'); }
    catch (e) { list = []; }
    return list.filter(function (ts) { return now - ts < win; });
  }

  function rateLimited() {
    return recentSends().length >= (cfg().rateLimitMax || 5);
  }

  function recordSend() {
    var list = recentSends();
    list.push(Date.now());
    localStorage.setItem(RATE_KEY, JSON.stringify(list));
  }

  function setStatus(box, key, kind) {
    box.textContent = window.t(key);
    box.className = 'form-status ' + (kind || '');
    box.style.display = 'block';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('support-form');
    if (!form) return;

    var statusBox = document.getElementById('form-status');
    var disabledBox = document.getElementById('form-disabled');
    var submitBtn = form.querySelector('[type="submit"]');

    // Kill-Switch
    if (cfg().formEnabled === false) {
      form.style.display = 'none';
      if (disabledBox) {
        disabledBox.style.display = 'block';
        disabledBox.textContent = window.t('support.disabled');
      }
      return;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot: echtes Feld leer, Bot füllt es => verwerfen (stilles OK).
      var honey = form.querySelector('[name="botcheck"]');
      if (honey && honey.checked) return;

      // form.elements[...] statt form.name: bei <form> ist .name die
      // Element-eigene name-Property, nicht das Eingabefeld.
      var name = form.elements['name'].value.trim();
      var email = form.elements['email'].value.trim();
      var subject = form.elements['subject'].value.trim();
      var message = form.elements['message'].value.trim();

      if (!name || !email || !subject || !message) {
        setStatus(statusBox, 'support.required', 'error');
        return;
      }
      if (rateLimited()) {
        setStatus(statusBox, 'support.rateLimited', 'error');
        return;
      }

      var origLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = window.t('support.sending');
      setStatus(statusBox, 'support.sending', '');

      var payload = {
        access_key: cfg().web3formsKey,
        subject: '[FrameFinish] ' + subject,
        from_name: name,
        name: name,
        email: email,
        message: message,
        // Web3Forms-Honeypot (serverseitig zusätzlich):
        botcheck: false,
      };

      fetch(cfg().submitEndpoint || 'https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          if (res.ok && res.d && res.d.success) {
            recordSend();
            form.reset();
            setStatus(statusBox, 'support.success', 'success');
          } else {
            setStatus(statusBox, 'support.error', 'error');
          }
        })
        .catch(function () {
          setStatus(statusBox, 'support.error', 'error');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = origLabel;
        });
    });
  });
})();
