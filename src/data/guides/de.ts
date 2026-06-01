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

  "best-for-amazon": `## Warum benötigen Amazon-Verkäufer Antidetect-Browser?

Amazon ist äußerst streng bei der Erkennung von **Mehrfachkonten**. Sie verwenden eine Kombination aus Browser-Fingerprinting, IP-Tracking, Cookies und Verhaltensanalysen. Wenn Sie beim Betrieb mehrerer Stores erwischt werden, kann Amazon alle verknüpften Konten dauerhaft sperren.

Ein Antidetect-Browser erstellt **vollständig isolierte Browserumgebungen** für jedes Amazon-Verkäuferkonto, wodurch eine Verknüpfung unmöglich wird.

## Unsere Empfehlungen

### 1. MoreLogin — Beste Gesamtbewertung
- ML-basiertes Canvas-Fingerprinting erzeugt authentische Fingerprints.
- Automatische Anpassung von Zeitzone, Sprache und Standort an den Proxy.
- Ab **5,4 $/Monat** für 10 Profile.

### 2. AdsPower — Bestes für Automatisierung
- Integrierte RPA-Automatisierung für die Verwaltung von Listings und Lagerbeständen.
- Über 50 konfigurierbare Fingerprint-Parameter.

### 3. GoLogin — Bestes für Remote-Teams
- Cloud-basierter Web-Zugriff zur Verwaltung der Stores von jedem Gerät aus.
- Kostenlose integrierte Proxies und Android-App.

## Setup-Empfehlungen für Amazon
1. **Ein Profil pro Store**: Niemals Profile teilen.
2. **Dedizierter statischer ISP-Proxy**: Verwenden Sie feste Wohnsitz-IPs für beste Ergebnisse.
3. **Getrennte Zahlungsmethoden**: Nutzen Sie verschiedene Bankkonten und Kreditkarten.`,

  "best-for-facebook-ads": `## Warum benötigen Facebook-Werbetreibende Antidetect-Browser?

Meta (Facebook) hat hoch entwickelte Erkennungssysteme. Das Betreiben mehrerer Werbekonten im selben Browser führt fast immer zur Sperrung des gesamten Netzwerks.

## Unsere Empfehlungen

### 1. AdsPower — Das beste Tool für Facebook-Ads
- **RPA-Automatisierungs-Builder** für die Konto-Erwärmung, Posting und Anzeigenverwaltung.
- **Cookie Robot** für automatisisiertes Session-Management.
- Ab **5,4 $/Monat** für 10 Profile.

### 2. Dolphin Anty — Bestes für Affiliate-Marketer
- **10 Profile dauerhaft kostenlos**.
- Szenario-Automatisierung über einen visuellen Builder.
- Unterstützung von Mobil-Fingerprints (iOS/Android).

### 3. MoreLogin — Bestes Preis-Leistungs-Verhältnis
- ML-basiertes Canvas-Spoofing.
- Fenstersynchronisator zur gleichzeitigen manuellen Steuerung mehrerer Konten.

## Facebook Werbekonto Erwärmungs-Strategie
- **Tag 1-3**: Normale Interaktion (Feed scrollen, Videos ansehen, Gruppen beitreten).
- **Tag 4-7**: Beiträge liken, kommentieren, teilen.
- **Tag 8-14**: Business Page erstellen und Business Manager (BM) einrichten.
- **Tag 15+**: Zahlungsmethode hinzufügen, kleine Kampagne starten (5-10 $/Tag).`,

  "best-free-antidetect-browser": `## Funktionieren kostenlose Antidetect-Browser wirklich?

Ja! Mehrere renommierte Browser bieten kostenlose Pläne mit echtem Schutz. Diese sind ideal für Tests, persönliche Nutzung oder kleinere Projekte.

## Vergleich der kostenlosen Tarife

| Browser | Kostenlose Profile | Wichtigste Funktionen | Einschränkungen |
|---------|---------------------|----------------------|-----------------|
| **Dolphin Anty** | 10 | Echte Fingerprints, Basis-Automatisierung | Keine API |
| **Incogniton** | 10 | Synchronisierung, Selenium-Integration | Keine erweiterten Fingerprints |
| **Undetectable** | 5 Cloud + ∞ Lokal | Unbegrenzte lokale Profile! | Cloud limitiert auf 5 |
| **GoLogin** | 3 | Web-Zugriff, Cloud-Profile | Eingeschränkte Funktionen |
| **MoreLogin** | 2 | Alle Features freigeschaltet (inkl. API) | Nur 2 Profile |
| **AdsPower** | 2 | Basis-Spoofing, SunBrowser | Eingeschränkte Automatisierung |

## Unsere Empfehlung

- **Meiste kostenlose Profile**: **Dolphin Anty** (10) oder **Incogniton** (10).
- **Unbegrenzte lokale Profile**: **Undetectable** (lokal unbegrenzt).
- **Beste Qualität und API-Zugriff**: **MoreLogin** (alle Features im kostenlosen Tarif freigeschaltet).`,

  "best-for-affiliate-marketing": `## Warum benötigen Affiliate-Marketer Antidetect-Browser?

Affiliate-Marketing erfordert die Verwaltung vieler Konten bei Google, Facebook, TikTok und Affiliate-Netzwerken. Eine Sperre führt zum Verlust wertvoller Kampagnen und Einnahmen.

## Unsere Top-Empfehlungen

### 1. Dolphin Anty — Von Affiliates für Affiliates entwickelt
- Speziell für Traffic-Arbitrage und Affiliate-Marketing optimiert.
- Szenario-Automatisierung, mobile Fingerprints und 10 kostenlose Profile.

### 2. AdsPower — Bestes für Skalierung
- RPA-Vorlagen für automatische Kontoregistrierung und -erwärmung.
- Synchronisator für die gleichzeitige Ausführung von Aktionen in mehreren Fenstern.

### 3. MoreLogin — Unschlagbarer Preis
- ML-basierte Fingerprints ab **5,4 $/Monat** für 10 Profile.

## Affiliate-Marketing Workflow
1. **Vorbereitung**: Profile erstellen, Wohnsitz-Proxies zuweisen, Cookies importieren.
2. **Konto-Erwärmung**: Automatisierte Aktivitäten für mehr Vertrauen.
3. **Kampagnen starten**: Verteilung der Kampagnen auf mehrere Werbekonten.`,

  "best-for-web-scraping": `## Warum Web Scraping mit Antidetect-Browsern durchführen?

Moderne Websites verwenden fortschrittliche Anti-Bot-Systeme (Cloudflare, CAPTCHAs). Klassische Headless-Frameworks (Puppeteer, Playwright) werden schnell blockiert. Antidetect-Browser bieten eine **authentische Umgebung**, die Bot-Erkennungen umgeht.

## Empfohlene Lösungen

### 1. MoreLogin — Beste Scraping-API
- Vollwertige REST & lokale API auch im kostenlosen Tarif enthalten.
- Exzellente Unterstützung für Playwright, Puppeteer und Selenium.

### 2. GoLogin — Cloud-basiertes Scraping
- Profile auf GoLogin-Servern in der Cloud ausführen und lokale Ressourcen schonen.
- Linux-Unterstützung für Server-Bereitstellungen.

### 3. Multilogin — Enterprise-Qualität
- Fingerprint-Modifikationen direkt auf Engine-Ebene (Stealthfox / Mimic).
- Sehr hohe Stabilität im Headless-Betrieb für Großprojekte.`,

  "best-for-tiktok": `## Warum TikTok-Marketing spezielle Tools erfordert

TikTok ist eine mobile App und prüft daher gezielt Mobil-Fingerprints, GPS-Standorte, Gerätetypen und die Qualität der Proxy-IPs (Wohnsitz- oder Mobil-IPs bevorzugt).

## Die besten Browser für TikTok

### 1. AdsPower — Beste Anzeigen-Automatisierung
- Spezielle RPA-Vorlagen für TikTok Ads-Erstellung und Budgetverwaltung.

### 2. Dolphin Anty — Bestes für Creator-Netzwerke
- Simulation echter Mobil-Fingerprints (Android/iOS) zur Umgehung von In-App-Checks.
- 10 kostenlose Profile für den Start Ihres Netzwerks.

### 3. MoreLogin — TikTok Shop und Cloud-Phones
- Echte virtuelle Android-Telefone (Cloud Phone) direkt im Browser steuern.
- Hervorragendes Canvas-Spoofing.`,

  "best-for-crypto-airdrop": `## Warum benötigen Krypto-Nutzer Antidetect-Browser?

Für Airdrop Farming und DeFi-Interaktionen ist die Verwaltung vieler Wallets nötig. Projekte nutzen Sybil-Erkennungen. Wenn mehrere Wallets vom selben Gerät oder IP-Adresse interagieren, werden sie von der Verteilung ausgeschlossen.

## Empfohlene Browser

### 1. MoreLogin — Bester Airdrop-Browser
- **Synchronisator**: Eine Aktion im Hauptfenster wird automatisch in 50+ anderen Fenstern ausgeführt.
- Einfache Masseninstallation von Erweiterungen (MetaMask, Phantom, Keplr).
- Günstiger Preis ab **5,4 $/Monat**.

### 2. AdsPower — Strukturierte Wallet-Verwaltung
- Kennzeichnung und Gruppierung von Hunderten Wallets nach Projekten oder Fortschritten.

## Airdrop Farming Best Practices
1. **Eine Wallet pro Profil**: Niemals Seed-Phrasen in mehreren Profilen nutzen.
2. **Dedizierte Wohnsitz-Proxies**: Jede Wallet benötigt eine eigene IP-Adresse.
3. **Transaktions-Trennung**: Senden Sie Gasgebühren nicht von einer einzigen Wallet an alle anderen. Verwenden Sie Sub-Accounts von Börsen (z. B. OKX).`,

  "cheapest-antidetect-browser": `## Preisergleich der Antidetect-Browser (2026)

Der günstigste Browser hängt von der Anzahl der benötigten Profile ab:

| Browser | Kostenlos | 10 Profile | 50 Profile | 100 Profile | Preis/Profil (100) |
|---------|-----------|------------|------------|-------------|--------------------|
| **MoreLogin** | 2 | 5,4 $/mo | Custom | Custom | ~$0.15 - 0.30 |
| **AdsPower** | 2 | 5,4 $/mo | ~$20/mo | $30/mo | $0.30 |
| **GoLogin** | 3 | $24/mo | $24/mo | $24/mo | $0.24 |
| **Dolphin Anty** | 10 | $89/mo | $89/mo | $89/mo | $0.89 |
| **Multilogin** | 0 | €99/mo | €99/mo | €99/mo | €0.99 |

## Preis-Leistungs-Sieger

- **Unter 10 Profilen**: **Dolphin Anty** (10 kostenlose Profile).
- **10 bis 100 Profile**: **MoreLogin** oder **AdsPower** (10 Profile für nur 5,4 $/Monat).
- **Über 100 Profile**: **GoLogin** (Pauschalpreis von 24 $/Monat für 100 Profile ist unschlagbar).`,

  "avoid-amazon-suspension": `## Wie erkennt Amazon verknüpfte Konten?

Amazon prüft verschiedene Ebenen:
1. **Browser-Fingerprint**: Canvas, WebGL, installierte Schriftarten, Auflösungen.
2. **Netzwerk**: IP-Qualität, DNS- und WebRTC-Leaks.
3. **Registrierungsdaten**: Telefonnummern, E-Mail-Adressen, Bankkonten, Kreditkarten.
4. **Verhalten**: Ähnliche Produktbilder, zeitgleiche Preisänderungen.

## Schutz-Anleitung in Schritten

### Schritt 1: Isolierte Profile erstellen
Nutzen Sie **MoreLogin** oder **AdsPower** mit automatisch generierten Fingerprints.

### Schritt 2: Statische ISP-Proxies
Verwenden Sie ausschließlich dedizierte statische Wohnsitz-Proxies (ISP). Vermeiden Sie Rechenzentrums-IPs.

### Schritt 3: Verifizierung
Starten Sie das Profil und prüfen Sie auf [browserleaks.com](https://browserleaks.com) und [pixelscan.net](https://pixelscan.net) auf Konsistenz.

### Schritt 4: Daten-Trennung
- Verwenden Sie getrennte Auszahlungskonten.
- Schreiben Sie individuelle Produktbeschreibungen und nutzen Sie unterschiedliche Bilder.`,

  "multiple-facebook-accounts": `## Mehrere Facebook-Werbekonten sicher verwalten

Sperrungen bei Facebook entstehen meist durch Hardware- oder Netzwerküberschneidungen.

### Empfohlene Struktur

\`\`\`
Profil A ──> Facebook-Konto A ──> BM A ──> Werbekonto A
Profil B ──> Facebook-Konto B ──> BM B ──> Werbekonto B
\`\`\`

Jedes Profil benötigt einen dedizierten Wohnsitz-Proxy, isolierte Cookies und eine eigene Kreditkarte.

### Erwärmungs-Regeln für Konten
- **Anmeldung**: Nach dem ersten Login das Konto für 24 Stunden ruhen lassen.
- **Interaktionen**: In der ersten Woche wie ein normaler Nutzer interagieren, ohne den Werbeanzeigenmanager zu öffnen.
- **Zahlungsmethode**: Erst in der zweiten Woche die Kreditkarte hinzufügen.
- **Start**: Zuerst kleine Kampagnen für Beitragsinteraktionen schalten, um die ersten Zahlungen erfolgreich abzuwickeln.`,

  "chromium-vs-firefox-kernel": `## Browser-Kernels: Chromium oder Firefox?

Die meisten Antidetect-Browser basieren auf Chromium (MoreLogin, AdsPower SunBrowser, GoLogin). Einige unterstützen Firefox-basierte Engines (Stealthfox bei Multilogin, FlowerBrowser bei AdsPower).

## Kernel-Vergleich

| Kriterium | Chromium | Firefox |
|-----------|----------|---------|
| **Marktanteil** | ~65 % (Standard, fällt nicht auf) | ~7 % (geringer) |
| **Maskierung** | Wird oft gezielter geprüft | Anderes Verhalten, umgeht spezielle Erkennungen |
| **Erweiterungen** | Volle Unterstützung für Chrome Store | Eingeschränkt auf Firefox-Addons |
| **Automatisierung** | Puppeteer, Playwright, Selenium | Playwright, Selenium |
| **Ressourcen** | Höherer RAM-Bedarf | Geringerer RAM-Bedarf |

## Was sollte man wählen?

1. **Für Standard-Aufgaben (E-Commerce, Krypto, Social Media)**: Wählen Sie **Chromium** für beste Kompatibilität und einfache Erweiterungsnutzung.
2. **Für schwierige Websites**: Testen Sie **Firefox** als Alternative, um Chromium-spezifische Bot-Erkennungen zu umgehen.
3. **Diversifikation**: Nutzen Sie z. B. 70 % Chromium- und 30 % Firefox-Profile.`,
};
