/* FrameFinish Website — Zweisprachigkeit (DE/EN)
 * ----------------------------------------------
 * Jeder sichtbare Text steht hier zentral in DE + EN. Im HTML markierst du
 * ein Element mit  data-i18n="schluessel"  (für Textinhalt) oder
 * data-i18n-attr="placeholder:schluessel"  (für Attribute wie placeholder).
 * Der Umschalter im Header ruft setLang('de'|'en') auf; die Wahl wird in
 * localStorage gemerkt. Texte ändern = nur dieses Objekt bearbeiten.
 */
window.FF_I18N = {
  de: {
    'meta.title': 'FrameFinish — Zeitmessung. Frame-genau.',
    'meta.description':
      'Frame-genaue Sport-Zeitmessung für Lehrkräfte und Trainer:innen. Aufnehmen, die Ziellinie Bild für Bild auswerten, Rangliste exportieren.',

    'nav.features': 'Funktionen',
    'nav.how': 'So funktioniert’s',
    'nav.audience': 'Für wen',
    'nav.privacy': 'Datenschutz',
    'nav.support': 'Support',
    'nav.cta': 'Beta testen',
    'nav.home': 'Start',

    'hero.badge': 'Bald im App Store · jetzt als Beta',
    'hero.title': 'Zeitmessung. Frame-genau.',
    'hero.subtitle':
      'FrameFinish verwandelt dein iPhone oder iPad in eine präzise Ziellinien-Kamera. Lauf aufnehmen, Bild für Bild den Zieleinlauf markieren, Zeiten als Rangliste exportieren — ganz ohne teure Lichtschranke.',
    'hero.ctaPrimary': 'An der Beta teilnehmen',
    'hero.ctaSecondary': 'Funktionen ansehen',
    'hero.note': 'Für iPhone & iPad · funktioniert offline · Daten bleiben bei dir',
    'hero.mockup': 'App-Screenshot hier einsetzen',

    'features.title': 'Alles für den präzisen Zieleinlauf',
    'features.subtitle':
      'Gebaut für den Schul- und Vereinsalltag — schnell, robust und ohne Zusatzhardware.',
    'features.f1.title': 'Frame-genaue Auswertung',
    'features.f1.body':
      'Spule das Video Bild für Bild und markiere exakt den Moment, in dem jede Person die Ziellinie überquert — auf die Hundertstelsekunde.',
    'features.f2.title': 'Gruppen & Athlet:innen',
    'features.f2.body':
      'Lege Klassen oder Trainingsgruppen an, verwalte Teilnehmende mit Startnummer und erfasse beliebig viele Läufe pro Person.',
    'features.f3.title': 'Aufnahme mit Auto-Start',
    'features.f3.body':
      'Nimm in hoher Bildrate auf und starte die Messung automatisch per Startsignal über das Mikrofon — Hände frei für die Stoppuhr im Kopf.',
    'features.f4.title': 'Rangliste & Export',
    'features.f4.body':
      'Sieh die Ergebnisse als Rangliste, exportiere als PDF oder CSV — oder als annotiertes Video mit eingebranntem Namen und Zeit.',
    'features.f5.title': 'Cloud-Sync',
    'features.f5.body':
      'Optionale Synchronisierung über deine iCloud — Daten erscheinen sicher auf deinen Geräten. Du entscheidest, was hochgeladen wird.',
    'features.f6.title': 'Offline & datensparsam',
    'features.f6.body':
      'Die App läuft vollständig offline. Deine Aufnahmen und Ergebnisse bleiben auf dem Gerät, solange du nichts synchronisierst.',

    'how.title': 'In drei Schritten zur Zeit',
    'how.s1.title': 'Aufnehmen',
    'how.s1.body': 'Wähle Gruppe und Lauf, filme den Zieleinlauf in hoher Bildrate.',
    'how.s2.title': 'Markieren',
    'how.s2.body': 'Gehe Bild für Bild zur Ziellinie und tippe pro Person den Übertritt an.',
    'how.s3.title': 'Auswerten',
    'how.s3.body': 'Rangliste ablesen, Zeiten teilen, als PDF/CSV oder Video exportieren.',

    'audience.title': 'Gemacht für die Praxis',
    'audience.a1.title': 'Lehrkräfte',
    'audience.a1.body': 'Bundesjugendspiele und Sportunterricht fair und nachvollziehbar messen.',
    'audience.a2.title': 'Trainer:innen',
    'audience.a2.body': 'Sprint- und Laufzeiten im Training sauber dokumentieren und vergleichen.',
    'audience.a3.title': 'Vereine',
    'audience.a3.body': 'Kleine Wettkämpfe ohne Lichtschranken-Budget frame-genau auswerten.',

    'cta.title': 'Sei bei der Beta dabei',
    'cta.body': 'FrameFinish ist aktuell in der geschlossenen Testphase. Schreib uns über das Support-Formular, wenn du als Tester:in dabei sein möchtest.',
    'cta.button': 'Zum Support-Formular',

    'footer.tagline': 'Frame-genaue Sport-Zeitmessung.',
    'footer.product': 'Produkt',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutz',
    'footer.impressum': 'Impressum',
    'footer.support': 'Support',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.disclaimer': 'Apple, App Store und iCloud sind Marken von Apple Inc.',

    // Datenschutz
    'privacy.title': 'Datenschutzerklärung',
    'privacy.updated': 'Stand: ',
    'privacy.intro':
      'Diese Erklärung informiert darüber, welche Daten die App FrameFinish und diese Website verarbeiten. Wir haben FrameFinish bewusst datensparsam gebaut: Deine Aufnahmen und Ergebnisse bleiben standardmäßig auf deinem Gerät.',
    'privacy.controller.title': '1. Verantwortlicher',
    'privacy.controller.body': 'Verantwortlich im Sinne der DSGVO ist die im Impressum genannte Person. Siehe ',
    'privacy.controller.link': 'Impressum',
    'privacy.app.title': '2. Welche Daten die App verarbeitet',
    'privacy.app.local.title': 'Lokal auf dem Gerät',
    'privacy.app.local.body':
      'Video-Aufnahmen, Standbilder der Ziellinie, Namen/Startnummern der Teilnehmenden sowie gemessene Zeiten werden auf deinem Gerät gespeichert. Ohne aktivierte Cloud-Synchronisierung verlassen diese Daten dein Gerät nicht.',
    'privacy.app.permissions.title': 'Berechtigungen',
    'privacy.app.permissions.body':
      'Kamera (zum Aufnehmen), Mikrofon (optionaler Startsignal-Trigger), Fotomediathek (optionaler Export). Die Berechtigungen werden nur für die jeweilige Funktion genutzt.',
    'privacy.app.account.title': 'Konto & Anmeldung',
    'privacy.app.account.body':
      'Für die optionale Cloud-Funktion meldest du dich mit „Sign in with Apple“ oder Google an. Dabei wird eine Kennung bzw. E-Mail-Adresse verarbeitet, um deine Daten deinem Konto zuzuordnen. Du kannst Konto und zugehörige Daten jederzeit in der App unter Einstellungen löschen.',
    'privacy.cloud.title': '3. Cloud-Synchronisierung (optional)',
    'privacy.cloud.body':
      'Wenn du die Synchronisierung aktivierst, werden deine Daten in deiner eigenen iCloud (Apple) bzw. Google Drive gespeichert. Apple bzw. Google handeln dabei als Auftragsverarbeiter. Es werden keine Daten auf eigenen Servern des Anbieters von FrameFinish gespeichert.',
    'privacy.thirdparty.title': '4. Weitergabe an Dritte',
    'privacy.thirdparty.body':
      'Eine Weitergabe deiner Inhalte an Dritte findet nicht statt — außer an die von dir gewählten Plattformdienste (Apple/Google) als technische Infrastruktur der von dir aktivierten Cloud-Funktion.',
    'privacy.crash.title': '5. Fehler- und Absturzdiagnose',
    'privacy.crash.body':
      'Zur Stabilitätsverbesserung kann die App anonyme Absturzberichte über den Dienst Sentry senden. Diese enthalten technische Fehlerdaten, jedoch keine personenbezogenen Inhalte (keine Namen, keine E-Mail, keine IP-zuordnung). Diese Funktion ist standardmäßig deaktiviert und wird erst mit einer späteren Version aktiv.',
    'privacy.website.title': '6. Diese Website',
    'privacy.website.body':
      'Die Seite wird über GitHub Pages bereitgestellt; dabei kann der Hoster technisch notwendige Zugriffsdaten (z. B. IP-Adresse) verarbeiten. Das Kontaktformular nutzt den Dienst Web3Forms, um deine Nachricht per E-Mail zuzustellen. Die von dir eingegebenen Angaben (Name, E-Mail, Nachricht) werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.',
    'privacy.rights.title': '7. Deine Rechte',
    'privacy.rights.body':
      'Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung sowie auf Datenübertragbarkeit und Widerspruch. Konto- und App-Daten kannst du direkt in der App löschen. Für weitere Anliegen kontaktiere uns über das Support-Formular.',
    'privacy.contact.title': '8. Kontakt',
    'privacy.contact.body': 'Datenschutzanfragen richtest du bitte über das ',
    'privacy.contact.link': 'Support-Formular',

    // Apple Nutrition Labels
    'labels.title': 'Daten-Übersicht (App-Store-Angaben)',
    'labels.subtitle': 'Diese Übersicht entspricht den „App Privacy“-Angaben im App Store.',
    'labels.col.type': 'Datenart',
    'labels.col.purpose': 'Zweck',
    'labels.col.linked': 'Mit dir verknüpft',
    'labels.col.tracking': 'Tracking',
    'labels.row1.type': 'Kamera-/Videoaufnahmen',
    'labels.row1.purpose': 'App-Funktion (Zeitmessung)',
    'labels.row1.linked': 'Nein (bleibt auf dem Gerät)',
    'labels.row1.tracking': 'Nein',
    'labels.row2.type': 'Kontakt (E-Mail bei Anmeldung)',
    'labels.row2.purpose': 'App-Funktionalität / Konto',
    'labels.row2.linked': 'Ja',
    'labels.row2.tracking': 'Nein',
    'labels.row3.type': 'Nutzerinhalte (Namen, Zeiten)',
    'labels.row3.purpose': 'App-Funktion',
    'labels.row3.linked': 'Ja (bei aktiver Cloud)',
    'labels.row3.tracking': 'Nein',
    'labels.row4.type': 'Diagnose (Abstürze)',
    'labels.row4.purpose': 'App-Stabilität',
    'labels.row4.linked': 'Nein (anonym)',
    'labels.row4.tracking': 'Nein',
    'labels.note': 'FrameFinish betreibt kein Werbe-Tracking und verkauft keine Daten.',

    // Impressum
    'impressum.title': 'Impressum',
    'impressum.intro': 'Angaben gemäß § 5 DDG / § 5 TMG:',
    'impressum.imageAlt': 'Impressum-Angaben (als Bild)',
    'impressum.placeholder': 'Lege deine Impressum-Angaben als Bild unter assets/impressum.png ab — sie erscheinen dann automatisch hier. (Als Bild, damit Adress-Bots sie nicht auslesen können.)',
    'impressum.contactNote': 'Aus Spam-Schutz-Gründen wird die Kontaktmöglichkeit über das ',
    'impressum.contactLink': 'Support-Formular',
    'impressum.contactNote2': ' bereitgestellt.',

    // Support
    'support.title': 'Support & Kontakt',
    'support.subtitle':
      'Frage, Feedback oder Interesse an der Beta? Schreib uns — wir melden uns per E-Mail zurück. Deine Nachricht geht direkt an unser Postfach; eine Adresse musst du nicht kennen.',
    'support.name': 'Name',
    'support.namePlaceholder': 'Dein Name',
    'support.email': 'Deine E-Mail (für die Antwort)',
    'support.emailPlaceholder': 'name@beispiel.de',
    'support.subject': 'Betreff',
    'support.subjectPlaceholder': 'Worum geht es?',
    'support.message': 'Nachricht',
    'support.messagePlaceholder': 'Deine Nachricht …',
    'support.send': 'Nachricht senden',
    'support.sending': 'Wird gesendet …',
    'support.success': 'Danke! Deine Nachricht wurde gesendet. Wir antworten per E-Mail.',
    'support.error': 'Senden fehlgeschlagen. Bitte versuche es später erneut.',
    'support.disabled': 'Das Kontaktformular ist gerade vorübergehend deaktiviert. Bitte versuche es später erneut.',
    'support.rateLimited': 'Du hast in kurzer Zeit mehrere Nachrichten gesendet. Bitte warte etwas und versuche es dann erneut.',
    'support.privacyHint': 'Mit dem Absenden stimmst du der Verarbeitung deiner Angaben zur Bearbeitung der Anfrage zu (siehe Datenschutz).',
    'support.required': 'Bitte fülle alle Felder aus.',

    'lang.switch': 'EN',
  },

  en: {
    'meta.title': 'FrameFinish — Timing. Frame-accurate.',
    'meta.description':
      'Frame-accurate sports timing for teachers and coaches. Record, mark the finish line frame by frame, export the ranking.',

    'nav.features': 'Features',
    'nav.how': 'How it works',
    'nav.audience': 'Who it’s for',
    'nav.privacy': 'Privacy',
    'nav.support': 'Support',
    'nav.cta': 'Join the beta',
    'nav.home': 'Home',

    'hero.badge': 'Coming to the App Store · beta now',
    'hero.title': 'Timing. Frame-accurate.',
    'hero.subtitle':
      'FrameFinish turns your iPhone or iPad into a precise finish-line camera. Record the race, mark each finish frame by frame, export times as a ranking — no expensive light barrier required.',
    'hero.ctaPrimary': 'Join the beta',
    'hero.ctaSecondary': 'See features',
    'hero.note': 'For iPhone & iPad · works offline · your data stays with you',
    'hero.mockup': 'Place app screenshot here',

    'features.title': 'Everything for a precise finish',
    'features.subtitle':
      'Built for everyday school and club use — fast, robust, no extra hardware.',
    'features.f1.title': 'Frame-accurate marking',
    'features.f1.body':
      'Step through the video frame by frame and mark the exact moment each person crosses the finish line — down to the hundredth of a second.',
    'features.f2.title': 'Groups & athletes',
    'features.f2.body':
      'Create classes or training groups, manage participants with bib numbers, and record any number of attempts per person.',
    'features.f3.title': 'Recording with auto-start',
    'features.f3.body':
      'Record at high frame rate and start timing automatically from a start signal via the microphone — hands free.',
    'features.f4.title': 'Ranking & export',
    'features.f4.body':
      'See results as a ranking, export to PDF or CSV — or as an annotated video with the name and time burned in.',
    'features.f5.title': 'Cloud sync',
    'features.f5.body':
      'Optional sync via your own iCloud — your data appears securely across your devices. You decide what gets uploaded.',
    'features.f6.title': 'Offline & data-light',
    'features.f6.body':
      'The app runs fully offline. Your recordings and results stay on the device until you choose to sync.',

    'how.title': 'Three steps to the time',
    'how.s1.title': 'Record',
    'how.s1.body': 'Pick a group and race, film the finish at a high frame rate.',
    'how.s2.title': 'Mark',
    'how.s2.body': 'Step to the finish line frame by frame and tap each person’s crossing.',
    'how.s3.title': 'Evaluate',
    'how.s3.body': 'Read the ranking, share times, export as PDF/CSV or video.',

    'audience.title': 'Made for real-world use',
    'audience.a1.title': 'Teachers',
    'audience.a1.body': 'Measure school sports days fairly and transparently.',
    'audience.a2.title': 'Coaches',
    'audience.a2.body': 'Cleanly document and compare sprint and run times in training.',
    'audience.a3.title': 'Clubs',
    'audience.a3.body': 'Run small competitions frame-accurately without a light-barrier budget.',

    'cta.title': 'Be part of the beta',
    'cta.body': 'FrameFinish is currently in closed testing. Reach out via the support form if you’d like to be a tester.',
    'cta.button': 'Go to the support form',

    'footer.tagline': 'Frame-accurate sports timing.',
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.impressum': 'Imprint',
    'footer.support': 'Support',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': 'Apple, App Store and iCloud are trademarks of Apple Inc.',

    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: ',
    'privacy.intro':
      'This policy explains which data the FrameFinish app and this website process. FrameFinish is built to be data-light: by default, your recordings and results stay on your device.',
    'privacy.controller.title': '1. Controller',
    'privacy.controller.body': 'The controller under the GDPR is the person named in the imprint. See ',
    'privacy.controller.link': 'Imprint',
    'privacy.app.title': '2. Data the app processes',
    'privacy.app.local.title': 'Locally on the device',
    'privacy.app.local.body':
      'Video recordings, finish-line stills, participant names/bib numbers and measured times are stored on your device. Without cloud sync enabled, this data never leaves your device.',
    'privacy.app.permissions.title': 'Permissions',
    'privacy.app.permissions.body':
      'Camera (recording), microphone (optional start-signal trigger), photo library (optional export). Permissions are used only for their respective feature.',
    'privacy.app.account.title': 'Account & sign-in',
    'privacy.app.account.body':
      'For the optional cloud feature you sign in with “Sign in with Apple” or Google. An identifier or e-mail address is processed to link your data to your account. You can delete your account and its data anytime in the app’s settings.',
    'privacy.cloud.title': '3. Cloud sync (optional)',
    'privacy.cloud.body':
      'If you enable sync, your data is stored in your own iCloud (Apple) or Google Drive. Apple/Google act as processors. No data is stored on the FrameFinish provider’s own servers.',
    'privacy.thirdparty.title': '4. Sharing with third parties',
    'privacy.thirdparty.body':
      'Your content is not shared with third parties — except with the platform services you choose (Apple/Google) as the technical infrastructure of the cloud feature you enabled.',
    'privacy.crash.title': '5. Error & crash diagnostics',
    'privacy.crash.body':
      'To improve stability, the app may send anonymous crash reports via the Sentry service. These contain technical error data but no personal content (no names, no e-mail, no IP linkage). This feature is off by default and only becomes active in a later version.',
    'privacy.website.title': '6. This website',
    'privacy.website.body':
      'The site is served via GitHub Pages; the host may process technically necessary access data (e.g. IP address). The contact form uses the Web3Forms service to deliver your message by e-mail. The details you enter (name, e-mail, message) are used solely to handle your request.',
    'privacy.rights.title': '7. Your rights',
    'privacy.rights.body':
      'You have the right to access, rectification, erasure and restriction of processing, as well as data portability and objection. You can delete account and app data directly in the app. For other matters, contact us via the support form.',
    'privacy.contact.title': '8. Contact',
    'privacy.contact.body': 'Please direct privacy requests via the ',
    'privacy.contact.link': 'support form',

    'labels.title': 'Data overview (App Store privacy)',
    'labels.subtitle': 'This overview mirrors the “App Privacy” details in the App Store.',
    'labels.col.type': 'Data type',
    'labels.col.purpose': 'Purpose',
    'labels.col.linked': 'Linked to you',
    'labels.col.tracking': 'Tracking',
    'labels.row1.type': 'Camera / video recordings',
    'labels.row1.purpose': 'App functionality (timing)',
    'labels.row1.linked': 'No (stays on device)',
    'labels.row1.tracking': 'No',
    'labels.row2.type': 'Contact (e-mail at sign-in)',
    'labels.row2.purpose': 'App functionality / account',
    'labels.row2.linked': 'Yes',
    'labels.row2.tracking': 'No',
    'labels.row3.type': 'User content (names, times)',
    'labels.row3.purpose': 'App functionality',
    'labels.row3.linked': 'Yes (with cloud on)',
    'labels.row3.tracking': 'No',
    'labels.row4.type': 'Diagnostics (crashes)',
    'labels.row4.purpose': 'App stability',
    'labels.row4.linked': 'No (anonymous)',
    'labels.row4.tracking': 'No',
    'labels.note': 'FrameFinish runs no advertising tracking and sells no data.',

    'impressum.title': 'Imprint',
    'impressum.intro': 'Information pursuant to § 5 DDG / § 5 TMG (German law):',
    'impressum.imageAlt': 'Imprint details (as image)',
    'impressum.placeholder': 'Place your imprint details as an image at assets/impressum.png — they will then appear here automatically. (As an image so address bots cannot scrape them.)',
    'impressum.contactNote': 'For spam-protection reasons, contact is provided via the ',
    'impressum.contactLink': 'support form',
    'impressum.contactNote2': '.',

    'support.title': 'Support & Contact',
    'support.subtitle':
      'A question, feedback, or interested in the beta? Write to us — we’ll reply by e-mail. Your message goes straight to our inbox; you don’t need to know an address.',
    'support.name': 'Name',
    'support.namePlaceholder': 'Your name',
    'support.email': 'Your e-mail (for the reply)',
    'support.emailPlaceholder': 'name@example.com',
    'support.subject': 'Subject',
    'support.subjectPlaceholder': 'What’s it about?',
    'support.message': 'Message',
    'support.messagePlaceholder': 'Your message …',
    'support.send': 'Send message',
    'support.sending': 'Sending …',
    'support.success': 'Thanks! Your message was sent. We’ll reply by e-mail.',
    'support.error': 'Sending failed. Please try again later.',
    'support.disabled': 'The contact form is temporarily disabled. Please try again later.',
    'support.rateLimited': 'You’ve sent several messages in a short time. Please wait a bit and try again.',
    'support.privacyHint': 'By sending, you agree to your details being processed to handle the request (see Privacy).',
    'support.required': 'Please fill in all fields.',

    'lang.switch': 'DE',
  },
};

/* ── Engine ─────────────────────────────────────────────────────────── */
(function () {
  function resolveInitialLang() {
    var saved = localStorage.getItem('ff_lang');
    if (saved === 'de' || saved === 'en') return saved;
    var cfg = (window.FF_CONFIG && window.FF_CONFIG.defaultLang) || 'auto';
    if (cfg === 'de' || cfg === 'en') return cfg;
    var nav = (navigator.language || 'de').toLowerCase();
    return nav.indexOf('de') === 0 ? 'de' : 'en';
  }

  window.FF_LANG = resolveInitialLang();

  window.t = function (key) {
    var dict = window.FF_I18N[window.FF_LANG] || window.FF_I18N.de;
    return dict[key] != null ? dict[key] : key;
  };

  window.applyI18n = function () {
    document.documentElement.lang = window.FF_LANG;

    // Textinhalte
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = window.t(el.getAttribute('data-i18n'));
    });

    // Attribute, z.B. data-i18n-attr="placeholder:support.namePlaceholder"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length === 2) el.setAttribute(bits[0].trim(), window.t(bits[1].trim()));
      });
    });

    // <title> + meta description
    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) document.title = window.t(titleEl.getAttribute('data-i18n'));
    var descEl = document.querySelector('meta[name="description"]');
    if (descEl && descEl.getAttribute('data-i18n')) {
      descEl.setAttribute('content', window.t(descEl.getAttribute('data-i18n')));
    }

    // Umschalter-Beschriftung
    document.querySelectorAll('[data-lang-toggle]').forEach(function (el) {
      el.textContent = window.t('lang.switch');
    });
  };

  window.setLang = function (lang) {
    if (lang !== 'de' && lang !== 'en') return;
    window.FF_LANG = lang;
    localStorage.setItem('ff_lang', lang);
    window.applyI18n();
  };

  window.toggleLang = function () {
    window.setLang(window.FF_LANG === 'de' ? 'en' : 'de');
  };

  document.addEventListener('DOMContentLoaded', window.applyI18n);
})();
