export interface Guide {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: string;
  publishDate: string;
}

export const guides: Guide[] = [
  {
    title: "Getting Started with Antidetect Browsers",
    slug: "getting-started",
    excerpt: "A beginner-friendly guide to understanding what antidetect browsers are, how they work, and which one is right for you.",
    category: "Beginner",
    readTime: "8 min read",
    publishDate: "2026-05-01",
    content: `## What is an Antidetect Browser?

An antidetect browser is a specialized web browser designed to manage multiple online identities by creating unique **browser fingerprints** for each profile. Unlike regular browsers that expose your real digital fingerprint, antidetect browsers mask or replace these identifiers, making each browser profile appear as a completely different user on a different device.

## Why Do You Need One?

If you manage multiple accounts on platforms like Amazon, Facebook, Google, or any other service, you've likely encountered account bans or restrictions. This happens because platforms use **browser fingerprinting** to detect when multiple accounts are operated by the same person.

Browser fingerprinting collects information such as:
- **Canvas fingerprint** — how your GPU renders graphics
- **WebGL data** — 3D graphics capabilities
- **Screen resolution** — display dimensions
- **Installed fonts** — available system fonts
- **User Agent** — browser and OS information
- **Timezone & Language** — locale settings
- **Hardware concurrency** — CPU core count

An antidetect browser creates unique combinations of these parameters for each profile, making every account appear to come from a different device.

## How Do Antidetect Browsers Work?

1. **Profile Creation** — You create a new browser profile with a unique set of fingerprint parameters
2. **Fingerprint Configuration** — The browser assigns (or you customize) fingerprint values for Canvas, WebGL, fonts, screen size, etc.
3. **Proxy Assignment** — You assign a proxy (residential, datacenter, or ISP) to give each profile a unique IP address
4. **Isolated Environment** — Each profile runs in its own isolated container with separate cookies, cache, and local storage
5. **Undetectable Browsing** — The combination of unique fingerprint + unique IP makes each profile appear as a genuinely different user

## Choosing the Right Antidetect Browser

Here are the key factors to consider:

| Factor | What to Look For |
|--------|-----------------|
| **Fingerprint Quality** | ML-based fingerprints > random noise injection |
| **Browser Engines** | Chromium + Firefox support is ideal |
| **Free Plan** | Test before committing — look for generous free tiers |
| **Team Features** | Role-based permissions, profile sharing, audit logs |
| **Automation** | API support (REST/Local), Selenium, Puppeteer, Playwright |
| **Pricing** | Compare per-profile cost across different plan tiers |

## Quick Start Steps

1. **Sign up** for an antidetect browser (most offer free plans)
2. **Download and install** the desktop application
3. **Create your first profile** using default fingerprint settings
4. **Add a proxy** (residential proxies recommended for best results)
5. **Launch the profile** and visit [BrowserLeaks](https://browserleaks.com) to verify your fingerprint
6. **Create additional profiles** as needed for your accounts

## Next Steps

Once you're comfortable with basic profile creation, explore:
- [How to Set Up Proxies](/guides/proxy-setup) — detailed proxy configuration guide
- [Fingerprint Testing](/guides/fingerprint-testing) — verify your setup with testing tools
- [Browser Automation](/guides/automation-guide) — automate workflows with code`,
  },
  {
    title: "How to Set Up Proxies with Your Antidetect Browser",
    slug: "proxy-setup",
    excerpt: "Step-by-step guide to configuring residential, datacenter, and ISP proxies with popular antidetect browsers.",
    category: "Setup",
    readTime: "6 min read",
    publishDate: "2026-05-03",
    content: `## Why Proxies Are Essential

An antidetect browser handles your **browser fingerprint**, but your **IP address** is equally important. Without a proxy, all your profiles share the same IP — an obvious red flag for any platform.

## Types of Proxies

### Residential Proxies
- **Best for**: Social media, e-commerce, ad accounts
- **Detection risk**: Very low (real residential IPs)
- **Cost**: Higher ($5-15/GB)
- **Speed**: Moderate

### Datacenter Proxies
- **Best for**: Web scraping, bulk operations
- **Detection risk**: Medium (known datacenter IP ranges)
- **Cost**: Low ($1-3/GB or fixed monthly)
- **Speed**: Fast

### ISP Proxies
- **Best for**: Long-term accounts, high-value operations
- **Detection risk**: Very low (static residential IPs)
- **Cost**: Highest ($2-5/IP/month)
- **Speed**: Fast

### Mobile Proxies
- **Best for**: Mobile-focused platforms (Instagram, TikTok)
- **Detection risk**: Lowest (shared mobile carrier IPs)
- **Cost**: High ($20-50/month)
- **Speed**: Varies

## Proxy Configuration Steps

### Step 1: Choose a Proxy Provider

Popular providers that work well with antidetect browsers:
- **Bright Data** — largest proxy network
- **Oxylabs** — enterprise-grade reliability
- **Smartproxy** — good balance of price/quality
- **IPRoyal** — budget-friendly residential proxies
- **922 Proxy** — affordable rotating proxies

### Step 2: Get Your Proxy Credentials

Your provider will give you:
- **Host/IP**: e.g., \`proxy.example.com\`
- **Port**: e.g., \`8080\`
- **Username**: your account username
- **Password**: your account password
- **Protocol**: HTTP, HTTPS, or SOCKS5

### Step 3: Configure in Your Antidetect Browser

In most antidetect browsers, proxy setup follows this flow:
1. Open the profile settings
2. Navigate to the Proxy section
3. Select the protocol (HTTP/SOCKS5)
4. Enter Host, Port, Username, Password
5. Click "Check Proxy" to verify connectivity
6. Save the profile

### Step 4: Verify Your Setup

After launching the profile with the proxy:
1. Visit [whatismyipaddress.com](https://whatismyipaddress.com) to confirm IP change
2. Check that the IP location matches your intended region
3. Ensure timezone and language in the profile match the proxy location

## Best Practices

- **One proxy per profile** — never share proxies between profiles
- **Match location data** — ensure timezone, language, and geolocation match the proxy country
- **Use sticky sessions** — for account management, use the same IP consistently
- **Rotate for scraping** — for data collection, use rotating proxies
- **Monitor proxy health** — regularly check proxy speed and uptime`,
  },
  {
    title: "Antidetect Browser Automation: API & Code Examples by Platform",
    slug: "automation-guide",
    excerpt: "Real API endpoints and working code examples for automating MoreLogin, AdsPower, GoLogin, Multilogin, Dolphin Anty, and Octo Browser with Playwright, Selenium, and Puppeteer.",
    category: "API",
    readTime: "15 min read",
    publishDate: "2026-05-05",
    content: `## Why Automate Antidetect Browsers?

Automation allows you to scale from managing a few accounts to hundreds or thousands:
- **Scale operations** — create, launch, and manage profiles programmatically
- **Save time** — automate repetitive tasks like login, posting, data collection
- **Reduce errors** — eliminate human mistakes in multi-account workflows
- **Run 24/7** — schedule tasks to run automatically

All major antidetect browsers expose a **Local API** that lets you control profiles programmatically and connect automation frameworks (Playwright, Selenium, Puppeteer) to launched browser instances.

---

## MoreLogin

**API Base URL:** \`http://127.0.0.1:40000\`
**API Docs:** [guide.morelogin.com](https://guide.morelogin.com)

MoreLogin's Local API lets you create, start, stop profiles and connects seamlessly with Puppeteer, Selenium, and Playwright.

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const BASE = 'http://127.0.0.1:40000';

async function main() {
  // 1. Create a browser profile
  const createResp = await axios.post(BASE + '/api/env/create/quick', {
    name: 'automation-profile'
  });
  const envId = createResp.data.data.envId;
  console.log('Created profile:', envId);

  // 2. Start the profile
  const startResp = await axios.post(BASE + '/api/env/start', {
    envId: envId
  });
  const { debugPort } = startResp.data.data;
  console.log('Debug port:', debugPort);

  // 3. Connect Puppeteer
  const browser = await puppeteer.connect({
    browserWSEndpoint: 'ws://127.0.0.1:' + debugPort,
    defaultViewport: null
  });

  // 4. Automate
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  console.log('Page title:', await page.title());

  // 5. Cleanup
  await browser.disconnect();
  await axios.post(BASE + '/api/env/close', { envId });
  console.log('Profile closed.');
}

main().catch(console.error);
\`\`\`

### Python + Selenium

\`\`\`python
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

BASE = "http://127.0.0.1:40000"

# 1. Create a browser profile
resp = requests.post(f"{BASE}/api/env/create/quick", json={
    "name": "automation-profile"
})
env_id = resp.json()["data"]["envId"]
print(f"Created profile: {env_id}")

# 2. Start the profile
resp = requests.post(f"{BASE}/api/env/start", json={
    "envId": env_id
})
data = resp.json()["data"]
debug_port = data["debugPort"]
webdriver_path = data["webdriver"]
print(f"Debug port: {debug_port}, WebDriver: {webdriver_path}")

# 3. Connect Selenium
options = Options()
options.debugger_address = f"127.0.0.1:{debug_port}"
service = Service(executable_path=webdriver_path)
driver = webdriver.Chrome(service=service, options=options)

# 4. Automate
driver.get("https://www.google.com")
print(f"Page title: {driver.title}")

# 5. Cleanup
driver.quit()
requests.post(f"{BASE}/api/env/close", json={"envId": env_id})
print("Profile closed.")
\`\`\`

### Key API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/env/create/quick | POST | Quick create a profile |
| /api/env/start | POST | Start a profile (returns debugPort) |
| /api/env/close | POST | Close a profile |
| /api/env/page | POST | List all profiles |
| /api/env/updateProxy/batch | POST | Batch update proxy settings |

---

## AdsPower

**API Base URL:** \`http://local.adspower.com:50325\`
**API Docs:** [localapi-doc-en.adspower.com](https://localapi-doc-en.adspower.com/docs/overview)

AdsPower uses a Local API that runs alongside the desktop application.

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const BASE = 'http://local.adspower.com:50325';

async function main() {
  // 1. Create a profile
  const createResp = await axios.post(BASE + '/api/v1/user/create', {
    group_id: '0',
    user_proxy_config: {
      proxy_soft: 'no_proxy'
    }
  });
  const profileId = createResp.data.data.id;
  console.log('Created profile:', profileId);

  // 2. Start the profile
  const startResp = await axios.get(
    BASE + '/api/v1/browser/start?user_id=' + profileId
  );
  const { ws } = startResp.data.data;
  console.log('WebSocket endpoint:', ws.puppeteer);

  // 3. Connect Puppeteer
  const browser = await puppeteer.connect({
    browserWSEndpoint: ws.puppeteer,
    defaultViewport: null
  });

  // 4. Automate
  const page = (await browser.pages())[0];
  await page.goto('https://www.google.com');
  console.log('Page title:', await page.title());

  // 5. Cleanup
  await browser.disconnect();
  await axios.get(BASE + '/api/v1/browser/stop?user_id=' + profileId);
  console.log('Profile closed.');
}

main().catch(console.error);
\`\`\`

### Python + Selenium

\`\`\`python
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

BASE = "http://local.adspower.com:50325"

# 1. Start the profile
resp = requests.get(f"{BASE}/api/v1/browser/start?user_id=YOUR_PROFILE_ID")
data = resp.json()["data"]
selenium_address = data["ws"]["selenium"]
webdriver_path = data["webdriver"]

# 2. Connect Selenium
options = Options()
options.debugger_address = selenium_address
service = Service(executable_path=webdriver_path)
driver = webdriver.Chrome(service=service, options=options)

# 3. Automate
driver.get("https://www.google.com")
print(f"Page title: {driver.title}")

# 4. Cleanup
driver.quit()
requests.get(f"{BASE}/api/v1/browser/stop?user_id=YOUR_PROFILE_ID")
\`\`\`

### Key API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/v1/user/create | POST | Create a new profile |
| /api/v1/browser/start | GET | Start a profile (returns WS endpoint) |
| /api/v1/browser/stop | GET | Stop a profile |
| /api/v1/browser/active | GET | Check browser status |
| /api/v1/user/list | GET | List all profiles |
| /api/v1/user/delete | POST | Delete a profile |

---

## GoLogin

**API Base URL:** \`https://api.gologin.com\`
**Automation Port:** Profile-specific debugging port

GoLogin provides both a cloud REST API and local debugging ports.

### Node.js + Playwright

\`\`\`javascript
const { chromium } = require('playwright');
const axios = require('axios');

const API_TOKEN = 'YOUR_API_TOKEN';
const BASE = 'https://api.gologin.com';

async function main() {
  // 1. Start profile via API
  const startResp = await axios.post(
    BASE + '/browser/start-profile',
    { profileId: 'YOUR_PROFILE_ID' },
    { headers: { Authorization: 'Bearer ' + API_TOKEN } }
  );
  const { wsUrl } = startResp.data;
  console.log('WebSocket URL:', wsUrl);

  // 2. Connect Playwright
  const browser = await chromium.connectOverCDP(wsUrl);
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();

  // 3. Automate
  await page.goto('https://www.google.com');
  console.log('Page title:', await page.title());
  await page.screenshot({ path: 'screenshot.png' });

  // 4. Cleanup
  await browser.close();
}

main().catch(console.error);
\`\`\`

### Key API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /browser/profiles | GET | List all profiles |
| /browser/start-profile | POST | Start a profile |
| /browser/stop-profile | POST | Stop a profile |
| /browser/fingerprint | GET | Get fingerprint settings |
| /browser/proxy | PUT | Update proxy settings |

---

## Multilogin

**API Base URL:** \`https://api.multilogin.com\` / \`http://127.0.0.1:35000\`
**Requires:** Active subscription + API token

Multilogin provides both a cloud API and local automation interface.

### Node.js + Playwright

\`\`\`javascript
const { chromium } = require('playwright');
const axios = require('axios');

const MLX_BASE = 'https://api.multilogin.com';
const TOKEN = 'YOUR_API_TOKEN';

async function main() {
  // 1. Start a profile
  const resp = await axios.post(
    MLX_BASE + '/profile/start',
    {
      profileId: 'YOUR_PROFILE_ID',
      browserType: 'mimic'  // or 'stealthfox'
    },
    { headers: { Authorization: 'Bearer ' + TOKEN } }
  );
  const { port } = resp.data;

  // 2. Connect Playwright via CDP
  const browser = await chromium.connectOverCDP(
    'http://127.0.0.1:' + port
  );
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();

  // 3. Automate
  await page.goto('https://www.google.com');
  console.log('Title:', await page.title());

  // 4. Cleanup
  await browser.close();
}

main().catch(console.error);
\`\`\`

### Key API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /profile/start | POST | Start a profile |
| /profile/stop | POST | Stop a profile |
| /profile/create | POST | Create a new profile |
| /profile/remove | DELETE | Delete a profile |

---

## Dolphin Anty

**API Base URL:** \`http://localhost:3001\`
**API Docs:** [Dolphin Anty Documentation](https://dolphin-anty.com/docs)

Dolphin Anty exposes a local API for profile automation.

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const BASE = 'http://localhost:3001';

async function main() {
  // 1. Start the profile
  const startResp = await axios.get(
    BASE + '/v1.0/browser_profiles/' + 'YOUR_PROFILE_ID' + '/start?automation=1'
  );
  const { wsEndpoint, port } = startResp.data.automation;
  console.log('WS Endpoint:', wsEndpoint);

  // 2. Connect Puppeteer
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsEndpoint,
    defaultViewport: null
  });

  // 3. Automate
  const page = (await browser.pages())[0];
  await page.goto('https://www.google.com');
  console.log('Title:', await page.title());

  // 4. Cleanup
  await browser.disconnect();
  await axios.get(
    BASE + '/v1.0/browser_profiles/' + 'YOUR_PROFILE_ID' + '/stop'
  );
}

main().catch(console.error);
\`\`\`

### Key API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /v1.0/browser_profiles | GET | List profiles |
| /v1.0/browser_profiles/:id/start | GET | Start a profile |
| /v1.0/browser_profiles/:id/stop | GET | Stop a profile |
| /v1.0/browser_profiles | POST | Create a profile |
| /v1.0/browser_profiles/:id | PATCH | Update a profile |

---

## Octo Browser

**API Base URL:** \`http://localhost:58888\`
**API Docs:** [Octo Browser Documentation](https://docs.octobrowser.net)

Octo Browser provides a local REST API for automation integration.

### Node.js + Puppeteer

\`\`\`javascript
const axios = require('axios');
const puppeteer = require('puppeteer');
const BASE = 'http://localhost:58888';

async function main() {
  // 1. Start the profile
  const startResp = await axios.post(BASE + '/api/profiles/start', {
    uuid: 'YOUR_PROFILE_UUID',
    headless: false,
    debug_port: true
  });
  const { ws_endpoint } = startResp.data;

  // 2. Connect Puppeteer
  const browser = await puppeteer.connect({
    browserWSEndpoint: ws_endpoint,
    defaultViewport: null
  });

  // 3. Automate
  const page = (await browser.pages())[0];
  await page.goto('https://www.google.com');
  console.log('Title:', await page.title());

  // 4. Cleanup
  await browser.disconnect();
  await axios.post(BASE + '/api/profiles/stop', {
    uuid: 'YOUR_PROFILE_UUID'
  });
}

main().catch(console.error);
\`\`\`

### Key API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/profiles/start | POST | Start a profile |
| /api/profiles/stop | POST | Stop a profile |
| /api/profiles | GET | List profiles |
| /api/profiles | POST | Create a profile |

---

## Automation Comparison

| Feature | MoreLogin | AdsPower | GoLogin | Multilogin | Dolphin Anty | Octo Browser |
|---------|-----------|----------|---------|------------|-------------|--------------|
| API Type | Local REST | Local REST | Cloud REST | Cloud + Local | Local REST | Local REST |
| Default Port | 40000 | 50325 | Cloud | 35000 | 3001 | 58888 |
| Puppeteer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Selenium | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Playwright | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| CLI Tool | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| MCP Support | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |
| RPA Builder | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ |

## Best Practices

- **Add random delays** between actions (500-3000ms) to mimic human behavior
- **Use page.waitForSelector()** instead of fixed timeouts
- **Handle errors gracefully** — profiles can disconnect unexpectedly
- **Always close profiles** after automation to free resources
- **Batch operations** — when managing many profiles, use batch APIs where available
- **Save session data** — export cookies after successful logins for reuse`,
  },
  {
    title: "Fingerprint Testing: How to Verify Your Browser Setup",
    slug: "fingerprint-testing",
    excerpt: "Use CreepJS, BrowserLeaks, and Pixelscan to verify your antidetect browser fingerprint configuration.",
    category: "Testing",
    readTime: "7 min read",
    publishDate: "2026-05-07",
    content: `## Why Test Your Fingerprint?

Setting up an antidetect browser profile is just the first step. You need to **verify** that your fingerprint is actually working correctly. A misconfigured profile can leak your real identity or produce inconsistent data that flags your account.

## Essential Testing Tools

### 1. BrowserLeaks (browserleaks.com)
The most comprehensive fingerprint testing suite. Check:
- **Canvas Fingerprint** — should show a unique hash per profile
- **WebGL Report** — GPU information should match your profile settings
- **Fonts** — number and list of fonts should vary between profiles
- **WebRTC** — should not leak your real IP address
- **Audio Context** — should show unique audio fingerprint

### 2. CreepJS (abrahamjuliot.github.io/creepjs)
Advanced detection testing that checks for:
- Fingerprint **consistency** — all parameters should tell a coherent story
- **Lies detected** — flags when parameters appear tampered with
- **Trust Score** — overall assessment of how "real" your browser looks

### 3. Pixelscan (pixelscan.net)
Quick visual check that evaluates:
- IP/Timezone consistency
- Browser/OS consistency
- WebRTC leak status
- Overall detection risk level

### 4. IPHey (iphey.com)
Focused specifically on:
- IP reputation score
- Browser fingerprint uniqueness
- Proxy detection

## What to Check

### ✅ Canvas Fingerprint
Each profile should have a **different** Canvas hash. If two profiles show the same hash, your antidetect browser isn't properly spoofing Canvas.

### ✅ WebGL Renderer
The GPU renderer string should:
- Match a real GPU model
- Be consistent with the OS you're spoofing
- Differ between profiles (ideally)

### ✅ WebRTC
**Critical check!** WebRTC can leak your real IP even behind a proxy. Verify:
- No local IP leak
- Public IP matches your proxy IP
- No ICE candidate leaks

### ✅ Timezone & Language
Must match your proxy location:
- If proxy is in New York, timezone should be America/New_York
- Language should include en-US
- Geolocation (if enabled) should match

### ✅ Screen Resolution
Should be a common resolution for the spoofed OS:
- Windows: 1920x1080, 1366x768
- macOS: 1440x900, 2560x1440
- Avoid unusual resolutions like 1234x567

## Red Flags to Watch For

| Issue | What It Means |
|-------|--------------|
| Same Canvas hash across profiles | Canvas spoofing not working |
| WebRTC leaking real IP | WebRTC protection disabled |
| Timezone mismatch with IP | Profile/proxy location mismatch |
| "Lies detected" in CreepJS | Fingerprint parameters are inconsistent |
| Low trust score | Multiple parameters look artificial |

## Testing Workflow

1. **Create a new profile** with default settings
2. **Assign a proxy** matching your desired location
3. **Launch the profile** and visit BrowserLeaks
4. **Check each section** — Canvas, WebGL, WebRTC, Fonts
5. **Visit CreepJS** — check trust score and lies
6. **Fix any issues** — adjust profile settings
7. **Re-test** until all checks pass
8. **Save the profile** — it's ready for use`,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
