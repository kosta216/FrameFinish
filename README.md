# FrameFinish — Website (GitHub Pages)

Statische Marketing- + Rechtsseite für **FrameFinish**: Landingpage,
Datenschutz (DSGVO + Apple-„App Privacy"-Tabelle), Impressum (als Bild)
und ein Support-Kontaktformular (versteckte Ziel-E-Mail, Rate-Limit,
abschaltbar). Zweisprachig DE/EN. Kein Build-Schritt, kein Framework —
reines HTML/CSS/JS, direkt GitHub-Pages-tauglich.

```
framefinish-website/
├── index.html        Landingpage (Hero, Funktionen, Ablauf, Zielgruppen, CTA)
├── privacy.html      Datenschutz + Daten-Übersicht (App-Store-Labels)
├── impressum.html    Impressum (bindet assets/impressum.png als Bild ein)
├── support.html      Kontaktformular (Web3Forms)
├── css/style.css     Design-System
├── js/config.js      ⟵ HIER konfigurieren (Key, An/Aus, Rate-Limit, Sprache)
├── js/i18n.js        Alle Texte DE + EN
├── js/form.js        Formular-Logik (Versand, Rate-Limit, Kill-Switch)
├── js/main.js        Header/Menü/Jahr
└── assets/           favicon.svg + (dein) impressum.png + Screenshots
```

---

## 1. Pflicht-Konfiguration (vor dem Live-Gang)

### a) Kontaktformular aktivieren — Web3Forms-Key
1. Auf <https://web3forms.com> deine **Ziel-E-Mail** eingeben → du bekommst
   einen **Access Key** per Mail (kostenlos, kein Account nötig).
2. In **`js/config.js`** bei `web3formsKey` eintragen.

> Die Ziel-E-Mail steht dadurch **nicht** im Quelltext der Seite — sie liegt
> nur bei Web3Forms. Bots finden keine Adresse zum Abgreifen.

### b) Impressum als Bild ablegen
- Exportiere deine Impressums-Angaben (Name, Anschrift, Kontakt) als
  **Bild** und speichere es als **`assets/impressum.png`**.
- Solange die Datei fehlt, zeigt `impressum.html` automatisch einen
  Platzhalter. Sobald sie da ist, erscheint dein Bild — ohne Code-Änderung.
- Als Bild, **damit Adress-Bots die Angaben nicht auslesen** können.

Das war das Minimum. Der Rest unten ist optional.

---

## 2. Auf GitHub Pages veröffentlichen

1. Neues **public Repository** auf GitHub anlegen, z. B. `framefinish-website`.
2. Diesen Ordner-Inhalt hineinlegen / pushen:
   ```bash
   cd framefinish-website
   git init
   git add .
   git commit -m "FrameFinish website"
   git branch -M main
   git remote add origin https://github.com/DEIN-USER/framefinish-website.git
   git push -u origin main
   ```
3. Im Repo: **Settings → Pages → Source: „Deploy from a branch" → Branch
   `main` / `/ (root)` → Save**.
4. Nach ~1 Min ist die Seite live unter:
   ```
   https://DEIN-USER.github.io/framefinish-website/
   ```

> `index.html` liegt im Root und alle Pfade sind **relativ** → die Seite
> funktioniert sowohl unter `…github.io/framefinish-website/` als auch
> später unter einer eigenen Domain ohne Änderung.

---

## 3. Diese URLs trägst du bei Apple ein (App Store Connect)

| ASC-Feld | URL |
|---|---|
| **Privacy Policy URL** | `https://DEIN-USER.github.io/framefinish-website/privacy.html` |
| **Support URL** | `https://DEIN-USER.github.io/framefinish-website/support.html` |
| Marketing URL (optional) | `https://DEIN-USER.github.io/framefinish-website/` |

(Für External-TestFlight ist die Privacy-Policy-URL Pflicht; Support-URL ist
schon beim App-Record nötig.)

---

## 4. Konfiguration im Detail (`js/config.js`)

| Schlüssel | Bedeutung |
|---|---|
| `web3formsKey` | Dein Web3Forms Access Key. |
| `formEnabled` | `false` setzen + committen ⇒ **Formular aus** (zeigt Hinweis). So „schaltest du den E-Mail-Eingang ab". |
| `rateLimitMax` | Max. Absendungen pro Zeitfenster pro Browser (Standard **5**). |
| `rateLimitWindowMs` | Zeitfenster in ms (Standard **1 h**). |
| `defaultLang` | `'auto'` (Browsersprache), `'de'` oder `'en'`. |
| `submitEndpoint` | Standard Web3Forms; später auf einen eigenen Cloudflare-Worker umstellbar. |

**E-Mail-Eingang vorübergehend abschalten:** `formEnabled: false` → commit/push.
**Wieder an:** zurück auf `true`.

> Das Rate-Limit ist **clientseitig** (localStorage) — fängt versehentliches
> Mehrfach-Senden und simple Bots ab, ist aber technisch umgehbar. Web3Forms
> hat zusätzlich serverseitigen Spam-/Honeypot-Schutz. Für ein **hartes**,
> nicht umgehbares Limit siehe Abschnitt 7.

---

## 5. Texte & Sprache anpassen (`js/i18n.js`)

- Alle sichtbaren Texte stehen zentral in `FF_I18N.de` und `FF_I18N.en`.
- Im HTML wird per `data-i18n="schlüssel"` referenziert — Text nur in der
  i18n-Datei ändern, nie im HTML.
- Sprach-Umschalter sitzt im Header (Wahl wird im Browser gemerkt).

## 6. Logo & Screenshots ersetzen

- **Logo/Favicon:** `assets/favicon.svg` (auch als Header-Mark inline in den
  HTMLs). Eigenes Logo? SVG ersetzen + ggf. das inline-`<svg class="brand-mark">`.
- **Hero-Screenshot:** In `index.html` der Block `.mockup-screen` — ersetze
  den Platzhalter-Text durch `<img src="assets/screenshot.png" alt="…">`.

---

## 7. Später: harter Schutz + eigene Domain (optional)

- **Eigene Domain:** Datei `CNAME` mit deiner Domain anlegen (z. B.
  `framefinish.app`), DNS bei deinem Registrar auf GitHub Pages zeigen lassen,
  in Settings → Pages → Custom domain eintragen.
- **Server-seitiges Rate-Limit / Kill-Switch:** einen Cloudflare Worker
  bauen (zählt Anfragen pro IP, echtes max 5/h, harter An/Aus-Schalter über
  eine Variable), E-Mail-Versand z. B. via Resend-API. Dann in `config.js`
  nur `submitEndpoint` auf den Worker zeigen lassen — das Formular bleibt
  unverändert.

---

## Hinweis zum Markennamen
Sichtbarer Produktname: **FrameFinish**. Die internen technischen IDs der
App (`app.frametime`, `iCloud.app.frametime`) bleiben davon unberührt — das
betrifft nur die App, nicht diese Website.
