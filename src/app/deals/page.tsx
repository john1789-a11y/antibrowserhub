import type { Metadata } from "next";
import Link from "next/link";
import { browsers } from "@/data/browsers";

export const metadata: Metadata = {
  title: "Antidetect Browser Deals & Discounts — Exclusive Coupon Codes 2026",
  description:
    "Exclusive discount codes and deals for the best antidetect browsers in 2026. Save on MoreLogin, AdsPower, GoLogin, Multilogin, and more.",
};

interface Deal {
  browserName: string;
  browserSlug: string;
  color: string;
  dealType: "coupon" | "free" | "discount";
  title: string;
  description: string;
  code?: string;
  discount: string;
  affiliateUrl: string;
  expiry: string;
  verified: boolean;
}

const deals: Deal[] = [
  {
    browserName: "MoreLogin",
    browserSlug: "morelogin",
    color: "#6366f1",
    dealType: "free",
    title: "Free Plan — 2 Profiles Forever",
    description: "Get started with MoreLogin's free plan including 2 browser profiles, ML Canvas fingerprinting, and full API access.",
    discount: "FREE",
    affiliateUrl: "https://www.morelogin.com/?ref=antibrowserhub",
    expiry: "No expiry",
    verified: true,
  },
  {
    browserName: "MoreLogin",
    browserSlug: "morelogin",
    color: "#6366f1",
    dealType: "discount",
    title: "Annual Plan — Up to 50% Off",
    description: "Save up to 50% when you choose an annual subscription on any MoreLogin plan.",
    discount: "50% OFF",
    affiliateUrl: "https://www.morelogin.com/?ref=antibrowserhub",
    expiry: "Ongoing",
    verified: true,
  },
  {
    browserName: "AdsPower",
    browserSlug: "adspower",
    color: "#3b82f6",
    dealType: "free",
    title: "Free Plan — 2 Profiles",
    description: "AdsPower offers 2 free browser profiles with built-in RPA automation tools.",
    discount: "FREE",
    affiliateUrl: "https://www.adspower.com/?ref=antibrowserhub",
    expiry: "No expiry",
    verified: true,
  },
  {
    browserName: "GoLogin",
    browserSlug: "gologin",
    color: "#10b981",
    dealType: "free",
    title: "Free Plan — 3 Profiles",
    description: "GoLogin provides 3 free cloud-based browser profiles with web access.",
    discount: "FREE",
    affiliateUrl: "https://gologin.com/?ref=antibrowserhub",
    expiry: "No expiry",
    verified: true,
  },
  {
    browserName: "GoLogin",
    browserSlug: "gologin",
    color: "#10b981",
    dealType: "discount",
    title: "Annual Plan — 50% Off",
    description: "Get 50% off any GoLogin plan when you pay annually. Best deal in the market.",
    discount: "50% OFF",
    affiliateUrl: "https://gologin.com/?ref=antibrowserhub",
    expiry: "Ongoing",
    verified: true,
  },
  {
    browserName: "Dolphin Anty",
    browserSlug: "dolphin-anty",
    color: "#f59e0b",
    dealType: "free",
    title: "Forever Free — 10 Profiles",
    description: "The most generous free plan in the market — 10 browser profiles forever with Cookie Robot.",
    discount: "10 FREE",
    affiliateUrl: "https://dolphin-anty.com/?ref=antibrowserhub",
    expiry: "No expiry",
    verified: true,
  },
  {
    browserName: "Incogniton",
    browserSlug: "incogniton",
    color: "#2563eb",
    dealType: "free",
    title: "Free Starter — 10 Profiles",
    description: "Incogniton offers 10 free profiles with Selenium integration and basic fingerprint management.",
    discount: "10 FREE",
    affiliateUrl: "https://incogniton.com/?ref=antibrowserhub",
    expiry: "No expiry",
    verified: true,
  },
  {
    browserName: "Hidemyacc",
    browserSlug: "hidemyacc",
    color: "#06b6d4",
    dealType: "discount",
    title: "Starting at Just $15/mo",
    description: "The most affordable antidetect browser starting at only $15/month for 30 profiles with automation.",
    discount: "$15/mo",
    affiliateUrl: "https://hidemyacc.com/?ref=antibrowserhub",
    expiry: "Ongoing",
    verified: true,
  },
  {
    browserName: "Undetectable",
    browserSlug: "undetectable",
    color: "#f97316",
    dealType: "free",
    title: "Free Plan + Unlimited Local Profiles",
    description: "5 free cloud profiles plus unlimited local profiles on all plans — including free.",
    discount: "UNLIMITED",
    affiliateUrl: "https://undetectable.io/?ref=antibrowserhub",
    expiry: "No expiry",
    verified: true,
  },
  {
    browserName: "Kameleo",
    browserSlug: "kameleo",
    color: "#22c55e",
    dealType: "free",
    title: "Free Plan — 2 Concurrent Browsers",
    description: "Get started with mobile emulation and Docker support. 2 concurrent browsers with 300 minutes.",
    discount: "FREE",
    affiliateUrl: "https://kameleo.io/?ref=antibrowserhub",
    expiry: "No expiry",
    verified: true,
  },
];

export default function DealsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Antidetect Browser Deals & Discounts",
    description: "Exclusive discount codes and deals for antidetect browsers.",
    itemListElement: deals.map((deal, idx) => ({
      "@type": "Offer",
      position: idx + 1,
      name: `${deal.browserName} — ${deal.title}`,
      description: deal.description,
      url: deal.affiliateUrl,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="container">
          <span className="section-label">Exclusive Offers</span>
          <h1>Antidetect Browser Deals & Discounts</h1>
          <p>
            Exclusive coupon codes, free plans, and discounts for the best antidetect browsers.
            All deals verified and updated for 2026.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          {/* Free Plans Section */}
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: 8 }}>
            🆓 Free Plans
          </h2>
          <p className="section-subtitle" style={{ textAlign: "left", maxWidth: "100%", marginBottom: 24 }}>
            Get started without spending a dime. These browsers offer generous free tiers.
          </p>
          <div className="browser-grid" style={{ marginBottom: 48 }}>
            {deals
              .filter((d) => d.dealType === "free")
              .map((deal) => (
                <div key={`${deal.browserSlug}-${deal.title}`} className="feature-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: deal.color,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "white", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0,
                      }}
                    >
                      {deal.browserName.charAt(0)}
                    </div>
                    <div>
                      <strong>{deal.browserName}</strong>
                      {deal.verified && (
                        <span style={{ fontSize: "0.7rem", color: "var(--color-green)", marginLeft: 6 }}>
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        marginLeft: "auto", padding: "4px 12px", borderRadius: 100,
                        background: "rgba(16,185,129,0.15)", color: "var(--color-green)",
                        fontSize: "0.75rem", fontWeight: 700,
                      }}
                    >
                      {deal.discount}
                    </span>
                  </div>
                  <h3 className="feature-title" style={{ fontSize: "0.95rem", marginBottom: 8 }}>{deal.title}</h3>
                  <p className="feature-desc" style={{ fontSize: "0.82rem", marginBottom: 12 }}>{deal.description}</p>
                  {deal.code && (
                    <div style={{
                      padding: "8px 16px", borderRadius: 8,
                      background: "var(--bg-card)", border: "1px dashed var(--border)",
                      fontFamily: "monospace", fontSize: "0.9rem", fontWeight: 700,
                      textAlign: "center", marginBottom: 12, letterSpacing: 2,
                    }}>
                      {deal.code}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <a href={deal.affiliateUrl} target="_blank" rel="noopener noreferrer" className="card-cta" style={{ fontSize: "0.78rem" }}>
                      Get Deal →
                    </a>
                    <Link href={`/reviews/${deal.browserSlug}`} style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                      Read Review
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* Discount Deals Section */}
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: 8 }}>
            🏷️ Discounts & Savings
          </h2>
          <p className="section-subtitle" style={{ textAlign: "left", maxWidth: "100%", marginBottom: 24 }}>
            Save more with these exclusive discount codes and annual plan savings.
          </p>
          <div className="browser-grid" style={{ marginBottom: 48 }}>
            {deals
              .filter((d) => d.dealType === "discount" || d.dealType === "coupon")
              .map((deal) => (
                <div key={`${deal.browserSlug}-${deal.title}`} className="feature-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: deal.color,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "white", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0,
                      }}
                    >
                      {deal.browserName.charAt(0)}
                    </div>
                    <div>
                      <strong>{deal.browserName}</strong>
                      {deal.verified && (
                        <span style={{ fontSize: "0.7rem", color: "var(--color-green)", marginLeft: 6 }}>
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        marginLeft: "auto", padding: "4px 12px", borderRadius: 100,
                        background: "rgba(239,68,68,0.15)", color: "#ef4444",
                        fontSize: "0.75rem", fontWeight: 700,
                      }}
                    >
                      {deal.discount}
                    </span>
                  </div>
                  <h3 className="feature-title" style={{ fontSize: "0.95rem", marginBottom: 8 }}>{deal.title}</h3>
                  <p className="feature-desc" style={{ fontSize: "0.82rem", marginBottom: 12 }}>{deal.description}</p>
                  {deal.code && (
                    <div style={{
                      padding: "8px 16px", borderRadius: 8,
                      background: "var(--bg-card)", border: "1px dashed var(--border)",
                      fontFamily: "monospace", fontSize: "0.9rem", fontWeight: 700,
                      textAlign: "center", marginBottom: 12, letterSpacing: 2,
                    }}>
                      {deal.code}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <a href={deal.affiliateUrl} target="_blank" rel="noopener noreferrer" className="card-cta" style={{ fontSize: "0.78rem" }}>
                      Get Deal →
                    </a>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                      Expires: {deal.expiry}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Compare Section */}
          <div className="review-cta-box" style={{ textAlign: "center" }}>
            <h3>Not sure which browser to choose?</h3>
            <p>Compare features, pricing, and performance side by side.</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/compare" className="btn-primary">Compare All Browsers →</Link>
              <Link href="/reviews" className="btn-secondary">Browse Reviews</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
