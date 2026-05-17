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
    title: "Browser Automation with Playwright & Selenium",
    slug: "automation-guide",
    excerpt: "Learn how to automate browser profiles using Playwright and Selenium with complete code examples.",
    category: "API",
    readTime: "12 min read",
    publishDate: "2026-05-05",
    content: `## Why Automate Antidetect Browsers?

Automation allows you to:
- **Scale operations** — manage hundreds of profiles programmatically
- **Save time** — automate repetitive tasks like login, posting, data collection
- **Reduce errors** — eliminate human mistakes in multi-account workflows
- **Run 24/7** — schedule tasks to run automatically

## Automation Frameworks

### Playwright (Recommended)
Modern, fast, and supports multiple browsers. Best choice for new projects.

### Selenium
Industry standard with the largest ecosystem. Best for existing projects.

### Puppeteer
Chrome/Chromium focused. Good for Chrome-specific automation.

## Getting Started with Playwright

### Install Playwright

\`\`\`bash
npm init -y
npm install playwright
\`\`\`

### Connect to an Antidetect Browser Profile

Most antidetect browsers expose a **debugging port** when launching profiles via API. Here's how to connect:

\`\`\`javascript
const { chromium } = require('playwright');

async function main() {
  // Step 1: Launch profile via the antidetect browser's API
  const response = await fetch('http://localhost:PORT/api/v1/browser/start?profile_id=YOUR_PROFILE_ID');
  const data = await response.json();
  
  // Step 2: Connect Playwright to the debugging port
  const browser = await chromium.connectOverCDP(data.ws_endpoint);
  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();
  
  // Step 3: Automate!
  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshot.png' });
  
  // Step 4: Close when done
  await browser.close();
}

main();
\`\`\`

## Getting Started with Selenium

### Install Selenium

\`\`\`bash
pip install selenium
\`\`\`

### Connect to an Antidetect Browser Profile

\`\`\`python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests

# Step 1: Launch profile via API
response = requests.get('http://localhost:PORT/api/v1/browser/start?profile_id=YOUR_PROFILE_ID')
data = response.json()

# Step 2: Connect Selenium
chrome_options = Options()
chrome_options.debugger_address = data['debug_address']
driver = webdriver.Chrome(options=chrome_options)

# Step 3: Automate!
driver.get('https://example.com')
driver.save_screenshot('screenshot.png')

# Step 4: Close when done
driver.quit()
\`\`\`

## Common Automation Tasks

### Auto-Login
\`\`\`javascript
await page.goto('https://platform.com/login');
await page.fill('#email', 'user@example.com');
await page.fill('#password', 'your-password');
await page.click('#login-button');
await page.waitForNavigation();
\`\`\`

### Data Scraping
\`\`\`javascript
await page.goto('https://target-site.com/products');
const products = await page.$$eval('.product-card', cards =>
  cards.map(card => ({
    title: card.querySelector('.title')?.textContent,
    price: card.querySelector('.price')?.textContent,
  }))
);
console.log(products);
\`\`\`

## Best Practices

- **Add random delays** between actions to mimic human behavior
- **Use page.waitForSelector()** instead of fixed timeouts
- **Handle errors gracefully** — profiles can disconnect unexpectedly
- **Rotate user agents** within natural parameters
- **Save session data** — export cookies after successful logins`,
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
