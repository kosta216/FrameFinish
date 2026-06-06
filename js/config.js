/* FrameFinish Website — zentrale Konfiguration
 * ---------------------------------------------
 * Alles, was du nach dem Klonen anpassen musst, steht HIER an einer Stelle.
 * Diese Datei wird vor allen anderen Skripten geladen (siehe HTML <head>).
 */
window.FF_CONFIG = {
  // ── Kontaktformular (Web3Forms) ──────────────────────────────────────
  // 1) Hol dir einen kostenlosen Access-Key auf https://web3forms.com
  //    (E-Mail eingeben → Key kommt per Mail). Deine Ziel-Adresse bleibt
  //    dort hinterlegt und ist NIE im Quelltext der Seite sichtbar.
  // 2) Key hier eintragen:
  web3formsKey: '9349253b-d2b2-4959-8f4f-21dac4e75426',

  // ── Kill-Switch ──────────────────────────────────────────────────────
  // Auf false setzen + committen, um das Formular vorübergehend komplett
  // abzuschalten (zeigt dann einen Hinweis statt der Felder). So kannst du
  // den E-Mail-Eingang jederzeit "ausschalten", ohne etwas zu löschen.
  formEnabled: true,

  // ── Rate-Limit (clientseitig) ────────────────────────────────────────
  // Maximale Absendungen pro Zeitfenster, pro Browser (localStorage).
  // Schützt vor versehentlichem Mehrfach-Senden und einfachem Spam.
  // Hinweis: rein clientseitig => technisch umgehbar. Für harten Schutz
  // später auf einen Cloudflare-Worker umstellen (Endpunkt unten).
  rateLimitMax: 5,
  rateLimitWindowMs: 60 * 60 * 1000, // 1 Stunde

  // ── Sprache ──────────────────────────────────────────────────────────
  // 'de' | 'en' | 'auto' (auto = Browsersprache, Fallback de)
  defaultLang: 'auto',

  // ── Versand-Endpunkt ─────────────────────────────────────────────────
  // Standard = Web3Forms. Für einen späteren Cloudflare-Worker einfach
  // diese URL auf deinen Worker zeigen lassen (gleiches JSON-Format).
  submitEndpoint: 'https://api.web3forms.com/submit',
};
