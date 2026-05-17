import type { Metadata } from "next";
import Link from "next/link";
import { browsers } from "@/data/browsers";

export const metadata: Metadata = {
  title: "Compare Antidetect Browsers — Full Feature & Pricing Comparison 2026",
  description:
    "Side-by-side comparison of the best antidetect browsers in 2026. Compare MoreLogin, AdsPower, GoLogin, Multilogin, Dolphin Anty, and Octo Browser on features, pricing, fingerprint quality, and more.",
};

const comparisonCategories = [
  {
    title: "🔒 Fingerprint & Security",
    rows: [
      { label: "Browser Engine", values: ["Chromium + Firefox", "SunBrowser + FlowerBrowser", "Orbita (Chromium)", "Mimic + Stealthfox", "Chromium", "Chromium"] },
      { label: "Canvas Fingerprint", values: ["ML-based real data", "Noise injection", "Custom generation", "Advanced spoofing", "Basic masking", "Auto mode"] },
      { label: "WebGL Fingerprint", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: "WebRTC Protection", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: "Timezone / Geolocation", values: ["Auto-match proxy", "Auto-match proxy", "Auto-match proxy", "Auto-match proxy", "Auto-match proxy", "Auto-match proxy"] },
      { label: "Mobile Fingerprints", values: ["✓ Android/iOS", "✓ Android", "✓ Android", "✓", "✗", "✗"] },
      { label: "Data Breach History", values: ["None", "Reported 2023", "None", "None", "Reported 2023", "None"] },
      { label: "2FA Support", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: "Profile Encryption", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    ],
  },
  {
    title: "💼 Features & Usability",
    rows: [
      { label: "Free Plan", values: ["✓ 2 profiles", "✓ 2 profiles", "✓ 3 profiles", "✗ None", "✓ 10 profiles", "✗ None"] },
      { label: "Free Trial", values: ["✓ Lifetime free", "✓ Limited", "✓ 7-day trial", "✗ Contact sales", "✓ Limited", "✗ Paid only"] },
      { label: "API Access", values: ["REST + Local API", "Local API", "REST API", "REST API", "API", "API"] },
      { label: "Team Collaboration", values: ["✓ Advanced", "✓ Advanced", "✓ Profile sharing", "✓ Team mgmt", "✓ Basic", "✓ Limited seats"] },
      { label: "Cookie Import/Export", values: ["✓", "✓ Cookie Robot", "✓", "✓", "✓ Cookie Robot", "✓ Import only"] },
      { label: "Bulk Operations", values: ["✓ Create/Open/Delete", "✓ Extensive", "✓ Basic", "✓ Basic", "✓ Basic", "✗ Limited"] },
      { label: "Profile Folders/Tags", values: ["✓", "✓ Groups", "✓ Folders", "✓", "✓", "✗"] },
      { label: "Built-in Proxies", values: ["✓ Proxy store", "✓ Partner proxies", "✓ Free + Paid", "✗", "✗", "✓ 3 providers"] },
      { label: "RPA / No-code Automation", values: ["✗", "✓ Built-in RPA", "✗", "✗", "✓ Scenarios", "✗"] },
      { label: "Extension Support", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: "Cloud Phone", values: ["✓", "✗", "✓ Cloud Android", "✗", "✗", "✗"] },
    ],
  },
  {
    title: "🖥️ Platform & Access",
    rows: [
      { label: "Windows", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: "macOS", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: "Linux", values: ["✓", "✗", "✓", "✓", "✓", "✓ Beta"] },
      { label: "Web Version", values: ["✗", "✗", "✓ Full web access", "✗", "✗", "✗"] },
      { label: "Mobile App", values: ["✗ Coming soon", "✗", "✓ Android", "✗", "✗", "✗"] },
      { label: "Cloud Profile Launch", values: ["✗", "✗", "✓", "✗", "✗", "✗"] },
    ],
  },
  {
    title: "🤖 Automation Support",
    rows: [
      { label: "Playwright", values: ["✓", "✗", "✓", "✓", "✗", "✗"] },
      { label: "Selenium", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: "Puppeteer", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: "Built-in RPA", values: ["✗", "✓", "✗", "✗", "✓", "✗"] },
      { label: "MCP Support", values: ["✓", "✗", "✓", "✗", "✗", "✗"] },
    ],
  },
  {
    title: "💰 Pricing (Monthly)",
    rows: [
      { label: "Entry Plan", values: ["$9 / 10 profiles", "$5.4 / 10 profiles", "$24 / 100 profiles", "€99 / 100 profiles", "$89 / 100 profiles", "€29 / 10 profiles"] },
      { label: "100 Profiles Plan", values: ["~$40 / 150 profiles", "$30 / 100 profiles", "$24 / 100 profiles", "€99 / 100 profiles", "$89 / 100 profiles", "€79 / 100 profiles"] },
      { label: "Team Plan", values: ["$80 / 400 profiles", "Contact", "$99 / 300 profiles", "€199 / 300 profiles", "$159 / 300 profiles", "€169 / 350 profiles"] },
      { label: "Annual Discount", values: ["✓ Up to 50%", "✓ Available", "✓ 50%", "✓ Available", "✓ Available", "✓ 10-30%"] },
      { label: "Extra Profiles Purchase", values: ["✓ Flexible", "✓", "✓", "✓ Limited", "✓", "✓ Limited"] },
      { label: "Extra Team Seats", values: ["✓ Flexible", "✓", "✓ 10-20 included", "✓ Limited", "✓", "✓ Limited (1-8)"] },
    ],
  },
  {
    title: "📞 Support & Community",
    rows: [
      { label: "Live Chat", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: "Telegram Community", values: ["✓ Active", "✓ Active", "✓", "✓", "✓ Active", "✓ RU-focused"] },
      { label: "Documentation", values: ["✓ Extensive", "✓ Good", "✓ Good", "✓ Good", "✓ Basic", "✓ Video tutorials"] },
      { label: "Languages", values: ["EN, CN +more", "EN, CN +more", "EN +8 languages", "EN +more", "EN, RU +more", "EN, RU"] },
      { label: "Founded", values: ["2021", "2019", "2019", "2015", "2021", "2020"] },
      { label: "Headquarters", values: ["Singapore", "Hong Kong", "USA", "EU", "EU", "Belarus"] },
    ],
  },
];

const verdicts = [
  {
    scenario: "🛒 E-commerce & Multi-store",
    recommended: "MoreLogin",
    reason: "Best value for managing 100+ store profiles with strong fingerprint protection and bulk operations. Starting at $9/mo with API access.",
    browsers: ["MoreLogin", "AdsPower", "GoLogin"],
  },
  {
    scenario: "📱 Social Media Management",
    recommended: "AdsPower",
    reason: "Built-in RPA automation tools make repetitive social media tasks effortless. Great for managing multiple accounts across platforms.",
    browsers: ["AdsPower", "MoreLogin", "Dolphin Anty"],
  },
  {
    scenario: "💰 Affiliate Marketing",
    recommended: "Dolphin Anty",
    reason: "Generous free plan (10 profiles), built-in cookie robot, and no-code automation scenarios tailored for affiliate workflows.",
    browsers: ["Dolphin Anty", "AdsPower", "GoLogin"],
  },
  {
    scenario: "🏢 Enterprise & Large Teams",
    recommended: "Multilogin",
    reason: "Industry pioneer with the strongest fingerprint technology (Mimic + Stealthfox). Both Chromium and Firefox engines for maximum compatibility.",
    browsers: ["Multilogin", "MoreLogin", "GoLogin"],
  },
  {
    scenario: "💻 Developers & Automation",
    recommended: "MoreLogin",
    reason: "Comprehensive REST + Local API, Playwright/Selenium/Puppeteer support, and MCP integration for AI agent workflows.",
    browsers: ["MoreLogin", "GoLogin", "Multilogin"],
  },
  {
    scenario: "🌐 Remote / Mobile Access",
    recommended: "GoLogin",
    reason: "Only browser offering a full web version and Android app. Cloud-based profile launching means you can work from any device.",
    browsers: ["GoLogin"],
  },
  {
    scenario: "💎 Best UI & Security",
    recommended: "Octo Browser",
    reason: "Cleanest interface in the market with zero data breach history. Great for users who prioritize UI and security over price.",
    browsers: ["Octo Browser", "GoLogin"],
  },
  {
    scenario: "🆓 Best Free Plan",
    recommended: "Dolphin Anty",
    reason: "10 free profiles forever — the most generous free tier. MoreLogin offers 2 lifetime free profiles, GoLogin offers 3.",
    browsers: ["Dolphin Anty", "GoLogin", "MoreLogin"],
  },
];

export default function ComparePage() {
  const browserNames = browsers.map((b) => b.name);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Comprehensive Comparison</span>
          <h1>Compare Antidetect Browsers</h1>
          <p>
            Side-by-side comparison of {browsers.length} leading antidetect browsers across 50+ features,
            pricing plans, and real-world performance data — updated for 2026.
          </p>
        </div>
      </section>

      {/* Quick Overview Table */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 8 }}>Quick Overview</h2>
          <p className="section-subtitle" style={{ marginBottom: 32, textAlign: "left", maxWidth: "100%" }}>
            A snapshot of each browser&apos;s overall rating, pricing, and key highlights.
          </p>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Browser</th>
                  <th>Rating</th>
                  <th>Starting Price</th>
                  <th>Free Plan</th>
                  <th>Best For</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {browsers.map((b) => (
                  <tr key={b.id}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: b.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>
                          {b.name.charAt(0)}
                        </div>
                        <strong>{b.name}</strong>
                      </div>
                    </td>
                    <td><span style={{ fontWeight: 700, color: "var(--color-cyan)" }}>⭐ {b.rating.overall}</span></td>
                    <td>{b.pricing.startingPrice}</td>
                    <td>{b.pricing.free ? <span className="check">✓ {b.pricing.freeProfiles} profiles</span> : <span className="cross">✗ No</span>}</td>
                    <td style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{b.tagline}</td>
                    <td><Link href={`/reviews/${b.slug}`} className="card-cta" style={{ fontSize: "0.75rem", padding: "6px 12px" }}>Review →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Tables */}
      {comparisonCategories.map((category) => (
        <section key={category.title} className="section" style={{ paddingTop: 20, paddingBottom: 20 }}>
          <div className="container">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 20 }}>{category.title}</h2>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th style={{ minWidth: 180 }}>Feature</th>
                    {browserNames.map((name) => (
                      <th key={name}>{name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {category.rows.map((row) => (
                    <tr key={row.label}>
                      <td style={{ fontWeight: 500 }}>{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i}>
                          {val === "✓" ? <span className="check">✓</span> :
                           val === "✗" ? <span className="cross">✗</span> :
                           val.startsWith("✓") ? <span className="check">{val}</span> :
                           val.startsWith("✗") ? <span className="cross">{val}</span> :
                           val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* Recommendation Verdicts */}
      <section className="section comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Recommendations</span>
            <h2 className="section-title">Which Browser Is Best For You?</h2>
            <p className="section-subtitle">
              Our expert recommendations based on specific use cases and needs.
            </p>
          </div>
          <div className="browser-grid">
            {verdicts.map((v) => (
              <div key={v.scenario} className="feature-card">
                <h3 className="feature-title" style={{ fontSize: "1.05rem", marginBottom: 12 }}>{v.scenario}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: "0.78rem", padding: "4px 10px", borderRadius: 100, background: "rgba(99,102,241,0.15)", color: "var(--color-indigo)", fontWeight: 600 }}>
                    🏆 {v.recommended}
                  </span>
                </div>
                <p className="feature-desc">{v.reason}</p>
                <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {v.browsers.map((name) => {
                    const b = browsers.find((br) => br.name === name);
                    return b ? (
                      <Link key={name} href={`/reviews/${b.slug}`} className="feature-tag" style={{ cursor: "pointer" }}>
                        {name}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 60%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Need More Detail?</h2>
          <p className="section-subtitle" style={{ marginBottom: 32 }}>
            Read our in-depth individual reviews for comprehensive analysis including real-world fingerprint test results.
          </p>
          <div className="hero-actions">
            <Link href="/reviews" className="btn-primary">Browse All Reviews →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
