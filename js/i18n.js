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

    'theme.toLight': 'Zu hellem Design wechseln',
    'theme.toDark': 'Zu dunklem Design wechseln',

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
    'features.all': 'Alle Funktionen ansehen',
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

    // ── Tour / Funktionsseite (features.html) ──────────────────────────
    'tour.metaTitle': 'Funktionen — FrameFinish',
    'tour.metaDescription':
      'Alle Funktionen von FrameFinish im Detail: Aufnahme mit Stoppuhr-Sync, frame-genaue Auswertung, Ranglisten, Export, iCloud-Sync und mehr.',
    'tour.eyebrow': 'Funktionen',
    'tour.title': 'Alle Funktionen im Überblick',
    'tour.subtitle':
      'Von der Gruppe bis zur fertigen Rangliste — jede Funktion einfach erklärt. Die Geräte-Vorschauen sind Platzhalter; deine echten Screenshots setzt du später ein.',
    'tour.note': 'Für iPhone & iPad · funktioniert offline · Daten bleiben bei dir',
    'tour.shotHint': 'Screenshot hier einsetzen',

    'tour.g1.title': 'Gruppen, Mitglieder & Läufe',
    'tour.g1.lead':
      'Lege Klassen oder Trainingsgruppen an, verwalte Teilnehmende mit Startnummer und definiere wiederverwendbare Lauf-Vorlagen.',
    'tour.g1.b1': 'Gruppen anlegen, umbenennen und löschen — z. B. „Klasse 7a“ oder „Sprintgruppe“.',
    'tour.g1.b2': 'Mitglieder mit Name und Startnummer: einzeln, als Massen-Anlage oder mit automatischen Nummern.',
    'tour.g1.b3': 'Lauf-Vorlagen mit Name und optionaler Distanz (100 m, 3000 m, Marathon …) — einmal anlegen, überall nutzen.',
    'tour.g1.b4': 'Eine Vorlage pro Gruppe als Lauf-Instanz mit eigenem Namen anhängen — die Vorlage bleibt unverändert.',
    'tour.g1.shotTitle': 'Gruppen-Detail',
    'tour.g1.shot': 'Zeige hier das Gruppen-Detail mit der Mitgliederliste und den angehängten Läufen.',

    'tour.g2.title': 'Aufnahme mit Stoppuhr-Sync',
    'tour.g2.lead':
      'Filme den Zieleinlauf in hoher Bildrate und starte die Messung genau dann, wenn der Lauf losgeht.',
    'tour.g2.b1': 'Live-Vorschau über die Rückkamera in hoher Bildrate.',
    'tour.g2.b2': 'Stoppuhr-Pre-Arm: Stoppuhr starten, erst später aufnehmen — der Versatz wird automatisch erfasst.',
    'tour.g2.b3': 'Direkt-Aufnahme: ohne Vorlauf, Aufnahmestart = Stoppuhr-Start.',
    'tour.g2.b4': 'Mikrofon-Startsignal: ein lauter Ton (Startschuss, Klatschen) startet die Stoppuhr automatisch.',
    'tour.g2.b5': 'Wasserwaage: warnt, wenn das Gerät über deinen eingestellten Winkel hinaus gekippt ist.',
    'tour.g2.b6': 'Auto-FPS: liest die echte Bildrate der Kamera; sonst 30 fps als Rückfall.',
    'tour.g2.shotTitle': 'Aufnahme-Screen',
    'tour.g2.shot': 'Zeige hier die Kamera-Ansicht mit laufender Stoppuhr, Mikrofon-Pegel und Wasserwaage.',

    'tour.g3.title': 'Frame-genaue Auswertung',
    'tour.g3.lead':
      'Spule das Video Bild für Bild und markiere für jede Person exakt den Moment des Zieleinlaufs — auf die Hundertstelsekunde.',
    'tour.g3.b1': 'Frame-Stepping: −30 s / −10 s / −10 f / −1 f / +1 f / +10 f / +10 s / +30 s, per Tasten oder Tastatur.',
    'tour.g3.b2': 'Wiedergabegeschwindigkeit 0,25× bis 4× für die exakte Stelle.',
    'tour.g3.b3': 'Audio-Wellenform: macht den Startschuss sichtbar, damit du den Startframe sicher findest.',
    'tour.g3.b4': 'Offset-Modi: Start im Video setzen oder Vorlaufzeit der Stoppuhr in Min/Sek/Millisekunden eingeben.',
    'tour.g3.b5': 'Ziel markieren: Person wählen, Übertritt antippen — Frame, Zeit und Ziel-Standbild werden gespeichert.',
    'tour.g3.b6': 'Neuberechnung nach Offset-Änderung; Ergebnisliste pro Person mit Sprung zum jeweiligen Frame.',
    'tour.g3.shotTitle': 'Auswertung (Review)',
    'tour.g3.shot': 'Zeige hier den Review-Screen mit Video, Wellenform-Leiste, Frame-Steppern und Athletenliste — auf dem iPad besonders übersichtlich.',

    'tour.g4.title': 'Ranglisten, Schüler-Modus & Archiv',
    'tour.g4.lead':
      'Sieh Ergebnisse als saubere Rangliste, blende Zeiten für die Klasse aus und finde jede Aufnahme im Archiv wieder.',
    'tour.g4.b1': 'Rangliste pro Lauf mit Bestzeit über alle Durchgänge, sortierbar nach Zeit oder Name.',
    'tour.g4.b2': 'Schüler-Modus: blendet alle Zeiten aus und sperrt die Anzeige — fair für den Unterricht.',
    'tour.g4.b3': 'Athlet-Detail: alle Versuche einer Person in einem Lauf, die Bestzeit hervorgehoben.',
    'tour.g4.b4': 'Einzel-Versuch mit Ziel-Standbild und Sprung zurück zur Original-Aufnahme.',
    'tour.g4.b5': 'Video-Archiv: alle Aufnahmen pro Lauf ansehen, neu auswerten oder in den Papierkorb legen.',
    'tour.g4.shotTitle': 'Rangliste',
    'tour.g4.shot': 'Zeige hier die Rangliste mit Podium und Ergebnistabelle.',

    'tour.g5.title': 'Export, PDF, Video & Backup',
    'tour.g5.lead':
      'Teile Ergebnisse in jedem Format — von der CSV-Tabelle bis zum annotierten Video — und sichere alle Daten als Backup.',
    'tour.g5.b1': 'CSV-Export der Rangliste in der angezeigten Sortierung.',
    'tour.g5.b2': 'PDF-Druck der gestylten Rangliste.',
    'tour.g5.b3': 'Annotiertes Video: Name und Zeit fest ins Video eingebrannt.',
    'tour.g5.b4': 'Vollständiges ZIP-Backup mit allen Daten und Videos.',
    'tour.g5.b5': 'JSON-Export/-Import (ohne Videos) sowie Wiederherstellen per Ersetzen oder Zusammenführen.',
    'tour.g5.shotTitle': 'Export-Menü',
    'tour.g5.shot': 'Zeige hier die Rangliste mit geöffnetem Export-Menü (CSV / PDF / Video).',

    'tour.g6.title': 'iCloud-Sync, Anmeldung & Offline',
    'tour.g6.lead':
      'FrameFinish läuft komplett offline. Wer mag, synchronisiert optional über die eigene iCloud — du behältst die Kontrolle.',
    'tour.g6.b1': 'Optionale Synchronisierung über dein eigenes Apple-Konto (iCloud).',
    'tour.g6.b2': '„Sign in with Apple“ für die Anmeldung — ohne separates Passwort.',
    'tour.g6.b3': 'Offline-First: Aufnahmen und Ergebnisse bleiben auf dem Gerät, solange du nicht synchronisierst.',
    'tour.g6.b4': 'Du entscheidest, was hochgeladen wird; kein Werbe-Tracking, kein Datenverkauf.',
    'tour.g6.b5': 'Konto und zugehörige Daten jederzeit direkt in der App löschbar.',
    'tour.g6.shotTitle': 'Konto & Sync',
    'tour.g6.shot': 'Zeige hier die Konto-/Sync-Einstellungen mit „Sign in with Apple“ und dem Sync-Status.',

    'tour.g7.title': 'Papierkorb & Wiederherstellung',
    'tour.g7.lead':
      'Nichts ist sofort weg: Gelöschtes landet zuerst im Papierkorb und lässt sich mit allen Unter-Einträgen zurückholen.',
    'tour.g7.b1': 'Soft-Delete für Gruppen, Mitglieder, Läufe, Aufnahmen und Ergebnisse — inklusive aller Unter-Einträge.',
    'tour.g7.b2': 'Wiederherstellen bringt einen Eintrag samt Kindern zurück in den aktiven Bestand.',
    'tour.g7.b3': 'Endgültiges Löschen einzeln oder „alles leeren“, wenn du sicher bist.',
    'tour.g7.shotTitle': 'Papierkorb',
    'tour.g7.shot': 'Zeige hier den Papierkorb mit wiederherstellbaren Einträgen.',

    'tour.g8.title': 'Einstellungen & Bedienkomfort',
    'tour.g8.lead':
      'Passe FrameFinish an deinen Alltag an — von der Sprache über den Schüler-Modus bis zu Tastatur-Kürzeln auf dem iPad.',
    'tour.g8.b1': 'Sprache (Deutsch/Englisch) und Erscheinungsbild (hell, dunkel, System).',
    'tour.g8.b2': 'Schüler-Modus, Presenter-Taps (sichtbares Tipp-Feedback für den Beamer) und Toast-Hinweise mit Position.',
    'tour.g8.b3': 'Mikrofon-Empfindlichkeit, Neigungs-Schwelle und Auto-FPS feinjustieren.',
    'tour.g8.b4': 'Schnellzugriff: häufige Schalter direkt im Kopfbereich.',
    'tour.g8.b5': 'Onboarding-Anleitung auf der Startseite und Tooltips an kniffligen Stellen.',
    'tour.g8.b6': 'iPad: Tastatur-Kürzel und Trackpad-Unterstützung für schnelleres Arbeiten.',
    'tour.g8.shotTitle': 'Einstellungen',
    'tour.g8.shot': 'Zeige hier die Einstellungen mit Erscheinungsbild und Schüler-Modus.',

    'tour.cta.title': 'Bereit, es auszuprobieren?',
    'tour.cta.body': 'FrameFinish ist gerade in der geschlossenen Beta. Melde dich über das Support-Formular, wenn du dabei sein möchtest.',
    'tour.cta.button': 'Zum Support-Formular',

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
      'FrameFinish hat in der aktuellen Version kein Konto und kein Anmeldeverfahren. Die App wird ohne Registrierung genutzt; es wird keine E-Mail-Adresse oder Kennung verarbeitet. Ein optionales Konto — ausschließlich über deine Apple-ID („Sign in with Apple“) — ist für eine spätere Version geplant.',
    'privacy.cloud.title': '3. Cloud-Synchronisierung (noch nicht verfügbar)',
    'privacy.cloud.body':
      'Diese Version von FrameFinish synchronisiert keine Daten in eine Cloud. Aufnahmen, Ziel-Standbilder, Namen/Startnummern und Zeiten bleiben ausschließlich lokal auf deinem Gerät. Eine optionale Synchronisierung ist für eine spätere Version geplant und läuft dann ausschließlich über deine eigene, private iCloud (Apple) — nicht über Google und nicht über eigene Server des FrameFinish-Anbieters.',
    'privacy.thirdparty.title': '4. Weitergabe an Dritte',
    'privacy.thirdparty.body':
      'Eine Weitergabe deiner Inhalte an Dritte findet nicht statt. FrameFinish enthält keine Werbe-, Analyse- oder Tracking-SDKs von Drittanbietern.',
    'privacy.crash.title': '5. Fehler- und Absturzdiagnose',
    'privacy.crash.body':
      'FrameFinish nutzt keinen Drittanbieter-Dienst zur Fehler- oder Absturzdiagnose. Es werden keine Diagnosedaten an externe Anbieter übertragen.',
    'privacy.website.title': '6. Diese Website',
    'privacy.website.body':
      'Die Seite wird über GitHub Pages bereitgestellt; dabei kann der Hoster technisch notwendige Zugriffsdaten (z. B. IP-Adresse) verarbeiten. Das Kontaktformular nutzt den Dienst Web3Forms, um deine Nachricht per E-Mail zuzustellen. Die von dir eingegebenen Angaben (Name, E-Mail, Nachricht) werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.',
    'privacy.rights.title': '7. Deine Rechte',
    'privacy.rights.body':
      'Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung sowie auf Datenübertragbarkeit und Widerspruch. App-Daten kannst du direkt in der App löschen (z. B. über den Papierkorb). Für weitere Anliegen kontaktiere uns über das Support-Formular.',
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
    'labels.row3.type': 'Nutzerinhalte (Namen, Zeiten)',
    'labels.row3.purpose': 'App-Funktion',
    'labels.row3.linked': 'Nein (nur lokal auf dem Gerät)',
    'labels.row3.tracking': 'Nein',
    'labels.note': 'FrameFinish erfasst aktuell keine Daten: keine Konto-/Anmeldedaten, kein Cloud-Upload, kein Werbe-Tracking, kein Verkauf von Daten.',

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

    'theme.toLight': 'Switch to light mode',
    'theme.toDark': 'Switch to dark mode',

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
    'features.all': 'See all features',
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

    // ── Tour / features page (features.html) ───────────────────────────
    'tour.metaTitle': 'Features — FrameFinish',
    'tour.metaDescription':
      'All FrameFinish features in detail: recording with stopwatch sync, frame-accurate marking, rankings, export, iCloud sync and more.',
    'tour.eyebrow': 'Features',
    'tour.title': 'Every feature at a glance',
    'tour.subtitle':
      'From the group to the finished ranking — every feature explained simply. The device previews are placeholders; drop in your real screenshots later.',
    'tour.note': 'For iPhone & iPad · works offline · your data stays with you',
    'tour.shotHint': 'Place screenshot here',

    'tour.g1.title': 'Groups, members & races',
    'tour.g1.lead':
      'Create classes or training groups, manage participants with bib numbers, and define reusable race templates.',
    'tour.g1.b1': 'Create, rename and delete groups — e.g. “Class 7a” or “sprint squad”.',
    'tour.g1.b2': 'Members with name and bib number: one by one, in bulk, or with automatic numbers.',
    'tour.g1.b3': 'Race templates with a name and optional distance (100 m, 3000 m, marathon …) — create once, reuse everywhere.',
    'tour.g1.b4': 'Attach a template to a group as a race instance with its own name — the template stays unchanged.',
    'tour.g1.shotTitle': 'Group detail',
    'tour.g1.shot': 'Show the group detail here, with the member list and the attached races.',

    'tour.g2.title': 'Recording with stopwatch sync',
    'tour.g2.lead':
      'Film the finish at a high frame rate and start timing exactly when the race begins.',
    'tour.g2.b1': 'Live preview from the rear camera at a high frame rate.',
    'tour.g2.b2': 'Stopwatch pre-arm: start the stopwatch, record later — the offset is captured automatically.',
    'tour.g2.b3': 'Direct recording: no lead time, recording start = stopwatch start.',
    'tour.g2.b4': 'Microphone start signal: a loud sound (gun, clap) starts the stopwatch automatically.',
    'tour.g2.b5': 'Level indicator: warns when the device is tilted beyond your chosen angle.',
    'tour.g2.b6': 'Auto FPS: reads the camera’s real frame rate; otherwise falls back to 30 fps.',
    'tour.g2.shotTitle': 'Recording screen',
    'tour.g2.shot': 'Show the camera view here, with the running stopwatch, microphone level and level indicator.',

    'tour.g3.title': 'Frame-accurate marking',
    'tour.g3.lead':
      'Step through the video frame by frame and mark the exact finish moment for each person — to the hundredth of a second.',
    'tour.g3.b1': 'Frame stepping: −30 s / −10 s / −10 f / −1 f / +1 f / +10 f / +10 s / +30 s, via buttons or keyboard.',
    'tour.g3.b2': 'Playback speed 0.25× to 4× for the exact spot.',
    'tour.g3.b3': 'Audio waveform: makes the starting gun visible so you can find the start frame reliably.',
    'tour.g3.b4': 'Offset modes: set the start inside the video, or enter the stopwatch lead time in min/sec/milliseconds.',
    'tour.g3.b5': 'Mark finish: pick a person, tap the crossing — frame, time and finish-line still are saved.',
    'tour.g3.b6': 'Recompute after offset changes; per-person result list with a jump to each frame.',
    'tour.g3.shotTitle': 'Review screen',
    'tour.g3.shot': 'Show the review screen here, with the video, waveform strip, frame steppers and athlete list — especially clear on iPad.',

    'tour.g4.title': 'Rankings, student mode & archive',
    'tour.g4.lead':
      'See results as a clean ranking, hide times for the class, and find every recording again in the archive.',
    'tour.g4.b1': 'Ranking per race with the best time across all runs, sortable by time or name.',
    'tour.g4.b2': 'Student mode: hides all times and locks the display — fair for the classroom.',
    'tour.g4.b3': 'Athlete detail: every attempt of one person in a race, the best time highlighted.',
    'tour.g4.b4': 'Single attempt with the finish-line still and a jump back to the source recording.',
    'tour.g4.b5': 'Video archive: watch every recording per race, re-mark it, or move it to the trash.',
    'tour.g4.shotTitle': 'Ranking',
    'tour.g4.shot': 'Show the ranking here, with the podium and results table.',

    'tour.g5.title': 'Export, PDF, video & backup',
    'tour.g5.lead':
      'Share results in any format — from a CSV table to an annotated video — and back up all your data.',
    'tour.g5.b1': 'CSV export of the ranking in the displayed order.',
    'tour.g5.b2': 'PDF print of the styled ranking.',
    'tour.g5.b3': 'Annotated video: name and time burned into the video.',
    'tour.g5.b4': 'Full ZIP backup with all data and videos.',
    'tour.g5.b5': 'JSON export/import (without videos) plus restore by replacing or merging.',
    'tour.g5.shotTitle': 'Export menu',
    'tour.g5.shot': 'Show the ranking here with the export menu open (CSV / PDF / video).',

    'tour.g6.title': 'iCloud sync, sign-in & offline',
    'tour.g6.lead':
      'FrameFinish runs fully offline. If you want, sync optionally via your own iCloud — you stay in control.',
    'tour.g6.b1': 'Optional sync via your own Apple account (iCloud).',
    'tour.g6.b2': '“Sign in with Apple” for sign-in — no separate password.',
    'tour.g6.b3': 'Offline-first: recordings and results stay on the device until you sync.',
    'tour.g6.b4': 'You decide what gets uploaded; no advertising tracking, no data selling.',
    'tour.g6.b5': 'Delete your account and its data anytime, right in the app.',
    'tour.g6.shotTitle': 'Account & sync',
    'tour.g6.shot': 'Show the account/sync settings here, with “Sign in with Apple” and the sync status.',

    'tour.g7.title': 'Trash & recovery',
    'tour.g7.lead':
      'Nothing disappears instantly: deleted items go to the trash first and can be restored with all their sub-entries.',
    'tour.g7.b1': 'Soft delete for groups, members, races, recordings and results — including all sub-entries.',
    'tour.g7.b2': 'Restore brings an entry and its children back into the live data.',
    'tour.g7.b3': 'Permanent delete one by one or “empty all” when you’re sure.',
    'tour.g7.shotTitle': 'Trash',
    'tour.g7.shot': 'Show the trash here, with restorable entries.',

    'tour.g8.title': 'Settings & convenience',
    'tour.g8.lead':
      'Tune FrameFinish to your day — from language and student mode to keyboard shortcuts on iPad.',
    'tour.g8.b1': 'Language (German/English) and appearance (light, dark, system).',
    'tour.g8.b2': 'Student mode, presenter taps (visible tap feedback for the projector) and toast notices with position.',
    'tour.g8.b3': 'Fine-tune microphone sensitivity, tilt threshold and auto FPS.',
    'tour.g8.b4': 'Quick access: frequent toggles right in the header.',
    'tour.g8.b5': 'Onboarding guide on the home screen and tooltips at tricky spots.',
    'tour.g8.b6': 'iPad: keyboard shortcuts and trackpad support for faster work.',
    'tour.g8.shotTitle': 'Settings',
    'tour.g8.shot': 'Show the settings here, with appearance and student mode.',

    'tour.cta.title': 'Ready to try it?',
    'tour.cta.body': 'FrameFinish is in closed beta right now. Reach out via the support form if you’d like to take part.',
    'tour.cta.button': 'Go to the support form',

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
      'FrameFinish currently has no account and no sign-in feature. The app is used without registration; no e-mail address or identifier is processed. An optional account — exclusively via your Apple ID (“Sign in with Apple”) — is planned for a future version.',
    'privacy.cloud.title': '3. Cloud sync (not yet available)',
    'privacy.cloud.body':
      'This version of FrameFinish does not sync any data to a cloud. Recordings, finish-line stills, participant names/bib numbers and times stay exclusively on your device. Optional sync is planned for a future version and will run exclusively through your own private iCloud (Apple) — not through Google, and not through servers operated by the FrameFinish provider.',
    'privacy.thirdparty.title': '4. Sharing with third parties',
    'privacy.thirdparty.body':
      'Your content is not shared with third parties. FrameFinish contains no third-party advertising, analytics, or tracking SDKs.',
    'privacy.crash.title': '5. Error & crash diagnostics',
    'privacy.crash.body':
      'FrameFinish does not use any third-party crash or error diagnostics service. No diagnostic data is sent to external providers.',
    'privacy.website.title': '6. This website',
    'privacy.website.body':
      'The site is served via GitHub Pages; the host may process technically necessary access data (e.g. IP address). The contact form uses the Web3Forms service to deliver your message by e-mail. The details you enter (name, e-mail, message) are used solely to handle your request.',
    'privacy.rights.title': '7. Your rights',
    'privacy.rights.body':
      'You have the right to access, rectification, erasure and restriction of processing, as well as data portability and objection. You can delete app data directly in the app (e.g. via the trash). For other matters, contact us via the support form.',
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
    'labels.row3.type': 'User content (names, times)',
    'labels.row3.purpose': 'App functionality',
    'labels.row3.linked': 'No (device only)',
    'labels.row3.tracking': 'No',
    'labels.note': 'FrameFinish currently collects no data: no account/sign-in data, no cloud upload, no advertising tracking, no data selling.',

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
