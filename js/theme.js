/* FrameFinish Website — Hell/Dunkel-Umschaltung
 * ----------------------------------------------
 * Vorauswahl folgt dem System (prefers-color-scheme). Tippt der Nutzer den
 * Umschalter, wird die Wahl ('light'|'dark') in localStorage gemerkt und über
 * <html data-theme="…"> erzwungen. Erneut tippen wechselt; die Systemwahl
 * bleibt der Ausgangspunkt. Dieses Skript liegt im <head> und läuft vor dem
 * ersten Paint, damit es nicht flackert.
 */
(function () {
  var KEY = 'ff_theme';
  var root = document.documentElement;

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Aktiv = manuelle Wahl, sonst System
  function effectiveTheme() {
    var saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return systemPrefersDark() ? 'dark' : 'light';
  }

  // Früh anwenden (nur bei manueller Wahl ein Attribut setzen; ohne Wahl
  // übernimmt die CSS-Media-Query die Systemfarbe von selbst).
  var saved = localStorage.getItem(KEY);
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  function updateMeta(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    meta.setAttribute('content', theme === 'dark' ? '#14181f' : '#fbfbf6');
  }

  function updateToggles(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      var toLight = theme === 'dark';
      btn.setAttribute('aria-label', window.t ? window.t(toLight ? 'theme.toLight' : 'theme.toDark') : (toLight ? 'Switch to light mode' : 'Switch to dark mode'));
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    });
  }

  window.setTheme = function (theme) {
    if (theme !== 'light' && theme !== 'dark') return;
    localStorage.setItem(KEY, theme);
    root.setAttribute('data-theme', theme);
    updateMeta(theme);
    updateToggles(theme);
  };

  window.toggleTheme = function () {
    window.setTheme(effectiveTheme() === 'dark' ? 'light' : 'dark');
  };

  document.addEventListener('DOMContentLoaded', function () {
    var current = effectiveTheme();
    updateMeta(current);
    updateToggles(current);
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', window.toggleTheme);
    });
    // Folgt dem System, solange der Nutzer nichts manuell gewählt hat
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if (!localStorage.getItem(KEY)) {
          var t = effectiveTheme();
          updateMeta(t);
          updateToggles(t);
        }
      });
    }
  });
})();
