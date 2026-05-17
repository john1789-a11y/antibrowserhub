import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { browsers, getBrowserBySlug, getAllBrowserSlugs } from "@/data/browsers";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBrowserSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const browser = getBrowserBySlug(slug);
  if (!browser) return {};
  return {
    title: `${browser.name} Review — Is It Worth It in 2026?`,
    description: `${browser.name} review: ${browser.tagline}. Rating: ${browser.rating.overall}/5. Starting from ${browser.pricing.startingPrice}. Read our in-depth analysis.`,
  };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const browser = getBrowserBySlug(slug);
  if (!browser) notFound();

  const ratingCategories = [
    { label: "Fingerprint Quality", value: browser.rating.fingerprint },
    { label: "Performance", value: browser.rating.performance },
    { label: "Usability", value: browser.rating.usability },
    { label: "Pricing Value", value: browser.rating.pricing },
    { label: "Support", value: browser.rating.support },
  ];

  const otherBrowsers = browsers.filter((b) => b.id !== browser.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "SoftwareApplication", name: browser.name, applicationCategory: "BrowserApplication", operatingSystem: browser.platforms.join(", ") },
    reviewRating: { "@type": "Rating", ratingValue: browser.rating.overall, bestRating: 5 },
    author: { "@type": "Organization", name: "AntiBrowserHub" },
    publisher: { "@type": "Organization", name: "AntiBrowserHub" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="review-hero">
        <div className="container">
          <div className="review-hero-inner">
            <div className="review-logo" style={{ background: browser.color }}>
              {browser.name.charAt(0)}
            </div>
            <div className="review-hero-info">
              <h1>{browser.name} Review</h1>
              <p>{browser.tagline}</p>
              <div className="review-meta">
                <span>⭐ {browser.rating.overall}/5</span>
                <span>💰 From {browser.pricing.startingPrice}</span>
                <span>📅 Updated 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="review-content-grid">
            <div className="review-main">
              <h2>Overview</h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: 32, lineHeight: 1.8 }}>
                {browser.description}
              </p>

              <h2>Detailed Ratings</h2>
              <div className="rating-bars">
                {ratingCategories.map((cat) => (
                  <div key={cat.label} className="rating-bar-item">
                    <div className="rating-bar-header">
                      <span className="rating-bar-label">{cat.label}</span>
                      <span className="rating-bar-value">{cat.value}/5</span>
                    </div>
                    <div className="rating-bar-track">
                      <div className="rating-bar-fill" style={{ width: `${(cat.value / 5) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pros-cons">
                <div className="pros-list">
                  <h3>✅ Pros</h3>
                  <ul>
                    {browser.pros.map((p) => (<li key={p}>👍 {p}</li>))}
                  </ul>
                </div>
                <div className="cons-list">
                  <h3>❌ Cons</h3>
                  <ul>
                    {browser.cons.map((c) => (<li key={c}>👎 {c}</li>))}
                  </ul>
                </div>
              </div>

              <h2>Key Features</h2>
              <div className="features-grid" style={{ marginTop: 20 }}>
                {browser.features.map((f) => (
                  <div key={f} className="feature-card" style={{ padding: 20 }}>
                    <h3 className="feature-title" style={{ fontSize: "0.95rem" }}>{f}</h3>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: 48 }}>Pricing Plans</h2>
              <div className="browser-grid" style={{ marginTop: 20 }}>
                {browser.pricing.plans.map((plan) => (
                  <div key={plan.name} className="feature-card">
                    <h3 className="feature-title">{plan.name}</h3>
                    <p style={{ fontSize: "1.5rem", fontWeight: 800, margin: "8px 0", background: "var(--gradient-hero)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {plan.price}
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 12 }}>{plan.profiles}</p>
                    <ul style={{ listStyle: "none" }}>
                      {plan.features.map((f) => (
                        <li key={f} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", padding: "4px 0" }}>✓ {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: 48 }}>Other Browsers You Might Like</h2>
              <div className="browser-grid" style={{ marginTop: 20 }}>
                {otherBrowsers.map((b) => (
                  <Link key={b.id} href={`/reviews/${b.slug}`} className="feature-card" style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 8, background: b.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800 }}>
                        {b.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="feature-title" style={{ marginBottom: 0 }}>{b.name}</h3>
                        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>⭐ {b.rating.overall}/5</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="review-sidebar">
              <div className="sidebar-card">
                <h3>Quick Facts</h3>
                <div className="sidebar-item">
                  <span className="sidebar-item-label">Overall Rating</span>
                  <span className="sidebar-item-value">⭐ {browser.rating.overall}/5</span>
                </div>
                <div className="sidebar-item">
                  <span className="sidebar-item-label">Starting Price</span>
                  <span className="sidebar-item-value">{browser.pricing.startingPrice}</span>
                </div>
                <div className="sidebar-item">
                  <span className="sidebar-item-label">Free Plan</span>
                  <span className="sidebar-item-value">{browser.pricing.free ? `✓ ${browser.pricing.freeProfiles} profiles` : "✗ No"}</span>
                </div>
                <div className="sidebar-item">
                  <span className="sidebar-item-label">API Support</span>
                  <span className="sidebar-item-value">{browser.hasAPI ? "✓ Yes" : "✗ No"}</span>
                </div>
                <div className="sidebar-item">
                  <span className="sidebar-item-label">Team Features</span>
                  <span className="sidebar-item-value">{browser.hasTeamFeatures ? "✓ Yes" : "✗ No"}</span>
                </div>
                <div className="sidebar-item">
                  <span className="sidebar-item-label">Platforms</span>
                  <span className="sidebar-item-value" style={{ textTransform: "capitalize" }}>{browser.platforms.join(", ")}</span>
                </div>
                <div className="sidebar-item">
                  <span className="sidebar-item-label">Founded</span>
                  <span className="sidebar-item-value">{browser.foundedYear}</span>
                </div>
                <a href={browser.affiliateUrl} target="_blank" rel="noopener noreferrer" className="sidebar-cta">
                  Try {browser.name} Free →
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
