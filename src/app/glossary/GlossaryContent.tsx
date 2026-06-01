"use client";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import Breadcrumb from "@/components/Breadcrumb";

interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  related?: string[];
}

const terms: GlossaryTerm[] = [
  {
    term: "Antidetect Browser",
    slug: "antidetect-browser",
    definition: "A specialized web browser designed to create isolated browser profiles, each with unique fingerprints, cookies, and browsing data. Used for managing multiple online accounts without detection or linking. Popular antidetect browsers include MoreLogin, AdsPower, GoLogin, Multilogin, and Dolphin Anty.",
    related: ["Browser Fingerprint", "Browser Profile"],
  },
  {
    term: "Browser Fingerprint",
    slug: "browser-fingerprint",
    definition: "A collection of technical attributes from your browser and device that websites use to uniquely identify you. Includes Canvas hash, WebGL renderer, User Agent, screen resolution, installed fonts, timezone, and dozens of other parameters. Even without cookies, a fingerprint can identify you with 90%+ accuracy.",
    related: ["Canvas Fingerprint", "WebGL Fingerprint"],
  },
  {
    term: "Browser Profile",
    slug: "browser-profile",
    definition: "An isolated browser environment within an antidetect browser. Each profile has its own unique fingerprint, cookies, cache, local storage, and browsing history. Profiles operate independently — like separate computers in a single application.",
    related: ["Antidetect Browser"],
  },
  {
    term: "Canvas Fingerprint",
    slug: "canvas-fingerprint",
    definition: "A fingerprinting technique that uses the HTML5 Canvas element to draw invisible graphics. The way your GPU, drivers, and OS render these graphics produces a unique hash. Advanced antidetect browsers use ML-based canvas fingerprinting to generate authentic, non-detectable fingerprints.",
    related: ["Browser Fingerprint", "WebGL Fingerprint"],
  },
  {
    term: "WebGL Fingerprint",
    slug: "webgl-fingerprint",
    definition: "Fingerprinting via WebGL (Web Graphics Library) that reveals your GPU model, vendor, and rendering capabilities. The 'Unmasked Renderer' and 'Unmasked Vendor' strings are particularly identifying. Example: 'ANGLE (NVIDIA, NVIDIA GeForce GTX 1660 SUPER)'.",
    related: ["Canvas Fingerprint", "Browser Fingerprint"],
  },
  {
    term: "WebRTC",
    slug: "webrtc",
    definition: "Web Real-Time Communication — a browser technology for peer-to-peer audio/video/data streaming. WebRTC can leak your real local and public IP addresses, even when using a VPN or proxy. Antidetect browsers typically block or mask WebRTC to prevent IP leaks.",
    related: ["IP Leak", "Proxy"],
  },
  {
    term: "User Agent",
    slug: "user-agent",
    definition: "A string that identifies your browser, operating system, and device to websites. Example: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'. Antidetect browsers customize the User Agent per profile.",
    related: ["Browser Fingerprint"],
  },
  {
    term: "Residential Proxy",
    slug: "residential-proxy",
    definition: "A proxy server that routes traffic through real residential IP addresses assigned by ISPs to homeowners. Residential proxies are the most trusted proxy type for antidetect browser use because they appear as genuine home internet connections. Cost: $5-15/GB.",
    related: ["ISP Proxy", "Datacenter Proxy", "Proxy"],
  },
  {
    term: "ISP Proxy",
    slug: "isp-proxy",
    definition: "A static residential proxy — a datacenter-hosted IP that is registered to a real Internet Service Provider. Combines the speed of datacenter proxies with the trust of residential IPs. Ideal for long-term account management. Cost: $2-5/IP/month.",
    related: ["Residential Proxy", "Proxy"],
  },
  {
    term: "Datacenter Proxy",
    slug: "datacenter-proxy",
    definition: "A proxy hosted in a data center with IP addresses from hosting providers (not ISPs). Fast and cheap, but more likely to be detected and blocked by platforms. Not recommended for sensitive accounts (Amazon, Facebook). Cost: $1-3/IP.",
    related: ["Residential Proxy", "ISP Proxy"],
  },
  {
    term: "Cookie Import",
    slug: "cookie-import",
    definition: "The ability to import browser cookies into an antidetect browser profile. This is essential for transferring logged-in sessions, using aged/pre-warmed accounts, or migrating accounts between devices without re-authentication.",
    related: ["Browser Profile"],
  },
  {
    term: "RPA (Robotic Process Automation)",
    slug: "rpa",
    definition: "Visual, no-code automation tools built into some antidetect browsers (like AdsPower and Dolphin Anty). RPA allows you to automate repetitive tasks such as account registration, content posting, and data collection using drag-and-drop workflow builders.",
    related: ["Automation", "Antidetect Browser"],
  },
  {
    term: "Browser Automation",
    slug: "browser-automation",
    definition: "Programmatically controlling browser profiles using frameworks like Selenium, Puppeteer, or Playwright. Antidetect browsers expose APIs (REST or Local) that return WebSocket endpoints for connecting automation frameworks to launched profiles.",
    related: ["RPA", "Local API"],
  },
  {
    term: "Local API",
    slug: "local-api",
    definition: "A REST API running on your local machine (e.g., localhost:40000) that allows programmatic control of antidetect browser profiles. Operations include creating, starting, stopping, and deleting profiles. Used by developers for automation workflows.",
    related: ["Browser Automation"],
  },
  {
    term: "Sybil Attack / Sybil Detection",
    slug: "sybil-detection",
    definition: "In crypto/DeFi, a Sybil attack involves creating many fake identities to manipulate a system (e.g., farming airdrops). Sybil detection systems analyze browser fingerprints, IP addresses, wallet funding patterns, and transaction timing to identify linked accounts.",
    related: ["Browser Fingerprint", "Antidetect Browser"],
  },
  {
    term: "Account Farming",
    slug: "account-farming",
    definition: "The process of creating and 'warming up' multiple accounts over time by simulating real user activity. This includes browsing, engaging with content, and gradually building account trust before using them for advertising, marketing, or airdrop farming.",
    related: ["Antidetect Browser", "RPA"],
  },
  {
    term: "Fingerprint Noise Injection",
    slug: "fingerprint-noise",
    definition: "A fingerprint spoofing technique that adds random noise to Canvas, WebGL, and Audio fingerprints. While simple, this approach can sometimes be detected because the random noise pattern itself is identifiable. ML-based fingerprinting (used by MoreLogin) is considered more advanced.",
    related: ["Canvas Fingerprint", "Browser Fingerprint"],
  },
  {
    term: "IP Leak",
    slug: "ip-leak",
    definition: "When your real IP address is exposed despite using a proxy or VPN. Common causes include WebRTC leaks, DNS leaks, or browser API calls that bypass proxy settings. Always test for IP leaks using tools like BrowserLeaks or IPLeak.net.",
    related: ["WebRTC", "Proxy"],
  },
  {
    term: "Proxy",
    slug: "proxy",
    definition: "A server that acts as an intermediary between your browser and the internet. In antidetect browser usage, each browser profile should have its own dedicated proxy to ensure unique IP addresses. Types include residential, ISP, datacenter, and mobile proxies.",
    related: ["Residential Proxy", "ISP Proxy", "Datacenter Proxy"],
  },
  {
    term: "Multi-Account Management",
    slug: "multi-account-management",
    definition: "The practice of operating multiple accounts on the same platform (Amazon stores, Facebook ad accounts, social media profiles, etc.) using antidetect browsers and proxies to prevent account linking and bans.",
    related: ["Antidetect Browser", "Browser Profile"],
  },
];

const ui: Record<string, Record<string, string>> = {
  title: {
    en: "Antidetect Browser Glossary",
    zh: "指纹浏览器术语表",
    ru: "Глоссарий антидетект-браузеров",
    ja: "アンチ検出ブラウザ用語集",
    fr: "Glossaire des navigateurs anti-détection",
    de: "Antidetect-Browser Glossar",
  },
  subtitle: {
    en: "Key terms and definitions for antidetect browsers, fingerprinting, proxies, and multi-account management.",
    zh: "指纹浏览器、指纹技术、代理和多账号管理的关键术语和定义。",
    ru: "Ключевые термины и определения для антидетект-браузеров, фингерпринтинга, прокси и управления мультиаккаунтами.",
    ja: "アンチ検出ブラウザ、フィンガープリント、プロキシ、マルチアカウント管理の主要用語と定義。",
    fr: "Termes clés et définitions pour les navigateurs anti-détection, le fingerprinting, les proxies et la gestion multi-comptes.",
    de: "Schlüsselbegriffe und Definitionen für Antidetect-Browser, Fingerprinting, Proxies und Multi-Account-Management.",
  },
  label: {
    en: "Glossary",
    zh: "术语表",
    ru: "Глоссарий",
    ja: "用語集",
    fr: "Glossaire",
    de: "Glossar",
  },
  termsCount: { en: "terms defined", zh: "个术语", ru: "терминов", ja: "用語", fr: "termes définis", de: "Begriffe definiert" },
  relatedTerms: { en: "Related:", zh: "相关：", ru: "Связанные:", ja: "関連：", fr: "Liés :", de: "Verwandt:" },
  learnMore: {
    en: "Want to learn more?",
    zh: "想了解更多？",
    ru: "Хотите узнать больше?",
    ja: "もっと知りたいですか？",
    fr: "Vous voulez en savoir plus ?",
    de: "Möchten Sie mehr erfahren?",
  },
  guidesBtn: { en: "Read Our Guides →", zh: "阅读教程 →", ru: "Читать руководства →", ja: "ガイドを読む →", fr: "Lire nos guides →", de: "Unsere Anleitungen →" },
};

const ix = (m: Record<string, string>, locale: string) => m[locale] || m.en;

export default function GlossaryContent() {
  const { locale } = useI18n();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[{ label: ix(ui.label, locale), href: "/glossary" }]} />
          <span className="section-label">{ix(ui.label, locale)}</span>
          <h1>{ix(ui.title, locale)}</h1>
          <p>{ix(ui.subtitle, locale)}</p>
          <div style={{ marginTop: 12, fontSize: "0.85rem", color: "var(--text-muted)" }}>
            {terms.length} {ix(ui.termsCount, locale)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {/* A-Z quick nav */}
          <div className="glossary-nav">
            {Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).sort().map((letter) => (
              <a key={letter} href={`#letter-${letter}`} className="glossary-nav-letter">{letter}</a>
            ))}
          </div>

          {/* Terms grouped by letter */}
          {Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).sort().map((letter) => (
            <div key={letter} id={`letter-${letter}`} style={{ marginBottom: 32 }}>
              <h2 className="glossary-letter">{letter}</h2>
              {terms.filter((t) => t.term[0].toUpperCase() === letter).map((t) => (
                <div key={t.slug} id={t.slug} className="glossary-item">
                  <h3 className="glossary-term">{t.term}</h3>
                  <p className="glossary-def">{t.definition}</p>
                  {t.related && t.related.length > 0 && (
                    <div className="glossary-related">
                      <span>{ix(ui.relatedTerms, locale)} </span>
                      {t.related.map((r, idx) => {
                        const relTerm = terms.find((x) => x.term === r);
                        return (
                          <span key={r}>
                            {relTerm ? (
                              <a href={`#${relTerm.slug}`} className="glossary-related-link">{r}</a>
                            ) : r}
                            {idx < (t.related?.length || 0) - 1 ? ", " : ""}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* CTA */}
          <div className="review-cta-box" style={{ textAlign: "center", marginTop: 48 }}>
            <h3>{ix(ui.learnMore, locale)}</h3>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/guides" className="btn-primary">{ix(ui.guidesBtn, locale)}</Link>
              <Link href="/tools/fingerprint-check" className="btn-secondary">Fingerprint Checker →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
