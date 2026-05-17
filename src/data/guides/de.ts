// German translations for guide content
export const deGuides: Record<string, string> = {
  "getting-started": `## Was ist ein Antidetect-Browser?

Ein Antidetect-Browser ist ein spezialisierter Webbrowser, der mehrere Online-Identitäten verwaltet, indem er für jedes Profil einzigartige **Browser-Fingerprints** erstellt. Im Gegensatz zu normalen Browsern maskieren Antidetect-Browser diese Identifikatoren.

## Warum brauchen Sie einen?

Wenn Sie mehrere Konten auf Amazon, Facebook oder Google verwalten, sind Ihnen wahrscheinlich Kontosperren begegnet. Plattformen verwenden **Browser-Fingerprinting**, um Multi-Accounting zu erkennen.

Erfasste Informationen:
- **Canvas-Fingerprint** — GPU-Grafikrendering
- **WebGL-Daten** — 3D-Grafikfähigkeiten
- **Bildschirmauflösung** — Displaygröße
- **Installierte Schriftarten** — verfügbare Systemschriftarten
- **User Agent** — Browser- und OS-Informationen
- **Zeitzone und Sprache** — Lokalisierungseinstellungen

## Wie funktionieren sie?

1. **Profilerstellung** — Profil mit einzigartigen Fingerprint-Parametern
2. **Konfiguration** — Canvas, WebGL, Schriftarten, Bildschirmgröße
3. **Proxy-Zuweisung** — einzigartige IP für jedes Profil
4. **Isolierte Umgebung** — separate Cookies, Cache und Speicher
5. **Unerkennbares Surfen** — einzigartiger Fingerprint + einzigartige IP

## Auswahlkriterien

| Faktor | Worauf achten |
|--------|-------------|
| **Fingerprint-Qualität** | ML-basiert > Zufallsrauschen |
| **Browser-Engines** | Chromium + Firefox ideal |
| **Kostenloser Plan** | Vor dem Kauf testen |
| **Team-Funktionen** | Rollenberechtigungen |
| **Automatisierung** | API, Selenium, Puppeteer, Playwright |
| **Preis** | Kosten pro Profil vergleichen |

## Schnellstart

1. **Registrieren** Sie sich bei einem Antidetect-Browser
2. **Laden Sie die App herunter** und installieren Sie sie
3. **Erstellen Sie Ihr erstes Profil** mit Standardeinstellungen
4. **Fügen Sie einen Proxy hinzu** (Residential empfohlen)
5. **Starten Sie das Profil** und prüfen Sie auf [BrowserLeaks](https://browserleaks.com)

## Nächste Schritte

- [Proxy-Einrichtung](/guides/proxy-setup) — detaillierte Anleitung
- [Fingerprint-Test](/guides/fingerprint-testing) — Einstellungen überprüfen
- [Automatisierung](/guides/automation-guide) — mit Code automatisieren`,

  "proxy-setup": `## Warum Proxies unverzichtbar sind

Der Antidetect-Browser verarbeitet Ihren **Browser-Fingerprint**, aber Ihre **IP-Adresse** ist ebenso wichtig. Ohne Proxy teilen alle Profile dieselbe IP.

## Proxy-Typen

### Residential Proxies
- **Ideal für**: Social Media, E-Commerce
- **Erkennungsrisiko**: sehr gering
- **Kosten**: höher ($5-15/GB)

### Datacenter Proxies
- **Ideal für**: Scraping, Massenoperationen
- **Erkennungsrisiko**: mittel
- **Kosten**: gering ($1-3/GB)

### ISP Proxies
- **Ideal für**: Langzeitkonten
- **Erkennungsrisiko**: sehr gering
- **Kosten**: am höchsten ($2-5/IP/Monat)

## Einrichtungsschritte

### Schritt 1: Anbieter wählen
- **Bright Data**, **Oxylabs**, **Smartproxy**, **IPRoyal**

### Schritt 2: Zugangsdaten erhalten
- **Host/IP**, **Port**, **Benutzername**, **Passwort**, **Protokoll**

### Schritt 3: Im Browser konfigurieren
1. Profileinstellungen öffnen
2. Proxy-Bereich aufrufen
3. Protokoll auswählen
4. Daten eingeben
5. "Proxy prüfen" klicken
6. Profil speichern

## Best Practices

- **Ein Proxy pro Profil**
- **Standortdaten abgleichen** — Zeitzone, Sprache, Geolokation
- **Statische Sitzungen** — für Kontoverwaltung
- **Rotation** — für Datensammlung`,

  "automation-guide": `## Warum automatisieren?

Automatisierung ermöglicht die Skalierung von wenigen Konten auf Hunderte:
- **Skalierung** — Profile programmatisch erstellen und verwalten
- **Zeitersparnis** — repetitive Aufgaben automatisieren
- **Fehlerreduzierung** — menschliche Fehler eliminieren
- **24/7 Betrieb** — Aufgaben automatisch planen

---

## MoreLogin

**API-URL:** \`http://127.0.0.1:40000\`
**Dokumentation:** [guide.morelogin.com](https://guide.morelogin.com)

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const BASE = 'http://127.0.0.1:40000';

async function main() {
  const createResp = await axios.post(BASE + '/api/env/create/quick', { name: 'automation-profile' });
  const envId = createResp.data.data.envId;
  const startResp = await axios.post(BASE + '/api/env/start', { envId });
  const browser = await puppeteer.connect({ browserWSEndpoint: startResp.data.data.wsEndpoint });
  const page = (await browser.pages())[0];
  await page.goto('https://browserleaks.com/canvas');
  console.log('Title:', await page.title());
  await axios.post(BASE + '/api/env/stop', { envId });
}
main();
\`\`\`

## Automatisierungsvergleich

| Funktion | MoreLogin | AdsPower | GoLogin | Multilogin | Dolphin Anty | Octo Browser |
|----------|-----------|----------|---------|------------|-------------|-------------|
| Playwright | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ |
| Selenium | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Puppeteer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Lokale API | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| MCP | ✓ | ✗ | ✓ | ✗ | ✗ | ✗ |`,

  "fingerprint-testing": `## Warum Fingerprints testen

Nach der Einrichtung müssen Sie **überprüfen, ob Ihre Einstellungen funktionieren**.

## Empfohlene Tools

### 1. CreepJS
**URL**: [abrahamjuliot.github.io/creepjs](https://abrahamjuliot.github.io/creepjs/)

Umfassender Test: Canvas, WebGL, Audio, Schriftarten, Inkonsistenzen.

### 2. BrowserLeaks
**URL**: [browserleaks.com](https://browserleaks.com/)

Einzelne Tests: Canvas, WebGL, WebRTC, Schriftarten.

### 3. Pixelscan
**URL**: [pixelscan.net](https://pixelscan.net/)

Inkonsistenzerkennung: Browser vs OS, Zeitzone vs IP.

## Checkliste

| Prüfung | Kriterium | Tool |
|---------|----------|------|
| Canvas | Einzigartig pro Profil | BrowserLeaks |
| WebGL | Passt zu OS/GPU | BrowserLeaks |
| WebRTC | Kein IP-Leak | BrowserLeaks |
| Zeitzone | Passt zum Proxy | Pixelscan |
| Sprache | Passt zum Land | Pixelscan |

## Fehlerbehebung

### WebRTC-Leak
**Lösung**: WebRTC deaktivieren oder "Ersetzen"-Modus

### Zeitzonenabweichung
**Lösung**: Automatische Proxy-Übereinstimmung

### Identische Canvas-Fingerprints
**Lösung**: Canvas-Rauschen oder ML-Modus aktivieren`,
};
