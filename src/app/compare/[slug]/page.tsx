import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllComparisonSlugs,
  getComparisonBySlug,
  getComparisonRows,
  getComparisonVerdict,
} from "@/data/comparisons";
import { browsers } from "@/data/browsers";
import Breadcrumb from "@/components/Breadcrumb";
import BrowserLogo from "@/components/BrowserLogo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pair = getComparisonBySlug(slug);
  if (!pair) return {};
  const { browserA, browserB } = pair;
  return {
    title: `${browserA.name} vs ${browserB.name} — Detailed Comparison 2026`,
    description: `${browserA.name} vs ${browserB.name}: Compare features, pricing, fingerprint quality, and performance side by side. Find out which antidetect browser is right for you in 2026.`,
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const pair = getComparisonBySlug(slug);
  if (!pair) notFound();

  const { browserA: a, browserB: b } = pair;
  const rows = getComparisonRows(a, b);
  const verdict = getComparisonVerdict(a, b);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${a.name} vs ${b.name} — Comparison 2026`,
    description: `Detailed comparison of ${a.name} and ${b.name} antidetect browsers.`,
    author: { "@type": "Organization", name: "AntiBrowserHub" },
    publisher: { "@type": "Organization", name: "AntiBrowserHub" },
    datePublished: "2026-01-15",
    dateModified: "2026-05-23",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[
            { label: "Compare", href: "/compare" },
            { label: `${a.name} vs ${b.name}`, href: `/compare/${slug}` },
          ]} />
          <Link
            href="/compare"
            style={{
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              marginBottom: 16,
              display: "inline-block",
            }}
          >
            ← Back to Compare All
          </Link>
          <h1>
            {a.name} vs {b.name}
          </h1>
          <p>
            A detailed, side-by-side comparison of {a.name} and {b.name} —
            covering features, pricing, fingerprint quality, and overall value.
            Updated for 2026.
          </p>
        </div>
      </section>

      {/* Quick Stats Cards */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div
            className="browser-grid"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginBottom: 40,
            }}
          >
            {[a, b].map((browser) => (
              <div key={browser.id} className="feature-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <BrowserLogo slug={browser.slug} name={browser.name} color={browser.color} size={48} />
                  <div>
                    <h2 style={{ fontSize: "1.2rem", marginBottom: 2 }}>
                      {browser.name}
                    </h2>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      ⭐ {browser.rating.overall}/5 — From{" "}
                      {browser.pricing.startingPrice}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {browser.tagline}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 16,
                  }}
                >
                  {browser.platforms.map((p: string) => (
                    <span
                      key={p}
                      className="feature-tag"
                      style={{ textTransform: "capitalize" }}
                    >
                      {p}
                    </span>
                  ))}
                  {browser.pricing.free && (
                    <span className="feature-tag">
                      🆓 {browser.pricing.freeProfiles} Free
                    </span>
                  )}
                  {browser.hasAPI && (
                    <span className="feature-tag">API</span>
                  )}
                </div>
                <Link
                  href={`/reviews/${browser.slug}`}
                  className="card-cta"
                  style={{ fontSize: "0.8rem" }}
                >
                  Read Full Review →
                </Link>
              </div>
            ))}
          </div>

          {/* Verdict Box */}
          <div
            className="review-cta-box"
            style={{ marginBottom: 40, textAlign: "left" }}
          >
            <h3>
              🏆 Our Verdict: {a.name} vs {b.name}
            </h3>
            <p>{verdict}</p>
          </div>

          {/* Overview Comparison Table */}
          <h2
            className="section-title"
            style={{ textAlign: "left", marginBottom: 20 }}
          >
            Overview Comparison
          </h2>
          <div className="comparison-table-wrap" style={{ marginBottom: 40 }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ minWidth: 160 }}>Feature</th>
                  <th>{a.name}</th>
                  <th>{b.name}</th>
                </tr>
              </thead>
              <tbody>
                {rows.overview.map((row) => (
                  <tr key={row.label}>
                    <td style={{ fontWeight: 500 }}>{row.label}</td>
                    <td>{row.a}</td>
                    <td>{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rating Comparison */}
          <h2
            className="section-title"
            style={{ textAlign: "left", marginBottom: 20 }}
          >
            Rating Breakdown
          </h2>
          <div className="comparison-table-wrap" style={{ marginBottom: 40 }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ minWidth: 160 }}>Category</th>
                  <th>{a.name}</th>
                  <th>{b.name}</th>
                  <th>Winner</th>
                </tr>
              </thead>
              <tbody>
                {rows.ratings.map((row) => (
                  <tr key={row.label}>
                    <td style={{ fontWeight: 500 }}>{row.label}</td>
                    <td
                      style={{
                        fontWeight: row.winA ? 700 : 400,
                        color: row.winA ? "var(--color-cyan)" : undefined,
                      }}
                    >
                      {row.a}
                    </td>
                    <td
                      style={{
                        fontWeight: row.winB ? 700 : 400,
                        color: row.winB ? "var(--color-cyan)" : undefined,
                      }}
                    >
                      {row.b}
                    </td>
                    <td>
                      {row.winA
                        ? `🏆 ${a.name}`
                        : row.winB
                        ? `🏆 ${b.name}`
                        : "🤝 Tie"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Feature Comparison */}
          <h2
            className="section-title"
            style={{ textAlign: "left", marginBottom: 20 }}
          >
            Feature Comparison
          </h2>
          <div className="comparison-table-wrap" style={{ marginBottom: 40 }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ minWidth: 160 }}>Feature</th>
                  <th>{a.name}</th>
                  <th>{b.name}</th>
                </tr>
              </thead>
              <tbody>
                {rows.features.map((row) => (
                  <tr key={row.label}>
                    <td style={{ fontWeight: 500 }}>{row.label}</td>
                    <td>
                      {row.a === "✓" ? (
                        <span className="check">✓</span>
                      ) : row.a === "✗" ? (
                        <span className="cross">✗</span>
                      ) : (
                        row.a
                      )}
                    </td>
                    <td>
                      {row.b === "✓" ? (
                        <span className="check">✓</span>
                      ) : row.b === "✗" ? (
                        <span className="cross">✗</span>
                      ) : (
                        row.b
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing Comparison */}
          <h2
            className="section-title"
            style={{ textAlign: "left", marginBottom: 20 }}
          >
            Pricing Comparison
          </h2>
          <div
            className="browser-grid"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginBottom: 40,
            }}
          >
            {[a, b].map((browser) => (
              <div key={browser.id} className="feature-card">
                <h3
                  className="feature-title"
                  style={{
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <BrowserLogo slug={browser.slug} name={browser.name} color={browser.color} size={24} style={{ display: "inline-flex" }} />
                  {browser.name} Pricing
                </h3>
                {browser.pricing.plans.map((plan: { name: string; price: string; profiles: string; features: string[] }) => (
                  <div
                    key={plan.name}
                    style={{
                      padding: "12px 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <strong style={{ fontSize: "0.9rem" }}>
                        {plan.name}
                      </strong>
                      <span
                        style={{
                          fontWeight: 700,
                          color: "var(--color-cyan)",
                        }}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginTop: 4,
                      }}
                    >
                      {plan.profiles}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Pros & Cons Side by Side */}
          <h2
            className="section-title"
            style={{ textAlign: "left", marginBottom: 20 }}
          >
            Pros & Cons
          </h2>
          <div
            className="browser-grid"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginBottom: 40,
            }}
          >
            {[a, b].map((browser) => (
              <div key={browser.id}>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <BrowserLogo slug={browser.slug} name={browser.name} color={browser.color} size={24} style={{ display: "inline-flex" }} />
                  {browser.name}
                </h3>
                <div className="pros-list" style={{ marginBottom: 16 }}>
                  <h4 style={{ fontSize: "0.9rem", marginBottom: 8 }}>
                    ✅ Pros
                  </h4>
                  <ul>
                    {browser.pros.slice(0, 5).map((p: string) => (
                      <li key={p} style={{ fontSize: "0.85rem" }}>
                        👍 {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cons-list">
                  <h4 style={{ fontSize: "0.9rem", marginBottom: 8 }}>
                    ❌ Cons
                  </h4>
                  <ul>
                    {browser.cons.slice(0, 4).map((c: string) => (
                      <li key={c} style={{ fontSize: "0.85rem" }}>
                        👎 {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 20,
            }}
          >
            {[a, b].map((browser) => (
              <div
                key={browser.id}
                className="review-cta-box"
                style={{ textAlign: "center" }}
              >
                <h3>Try {browser.name}</h3>
                <p style={{ fontSize: "0.88rem" }}>
                  {browser.pricing.free
                    ? `Start with ${browser.pricing.freeProfiles} free profiles — no credit card required.`
                    : `Plans start from ${browser.pricing.startingPrice}.`}
                </p>
                <a
                  href={browser.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ margin: "8px auto 0" }}
                >
                  Visit {browser.name} →
                </a>
              </div>
            ))}
          </div>

          {/* Other Comparisons */}
          <div style={{ marginTop: 48 }}>
            <h2
              className="section-title"
              style={{ textAlign: "left", marginBottom: 20 }}
            >
              More Comparisons
            </h2>
            <div
              className="browser-grid"
              style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
            >
              {(() => {
                const related = browsers
                  .filter((br) => br.id !== a.id && br.id !== b.id)
                  .slice(0, 6);

                const links: { href: string; label: string }[] = [];
                // Each browser in pair vs other browsers
                for (const browser of [a, b]) {
                  for (const br of related.slice(0, 3)) {
                    const [s1, s2] = browser.slug < br.slug ? [browser.slug, br.slug] : [br.slug, browser.slug];
                    const href = `/compare/${s1}-vs-${s2}`;
                    if (!links.find((l) => l.href === href)) {
                      links.push({ href, label: `${browser.name} vs ${br.name}` });
                    }
                  }
                }

                return links.slice(0, 6).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="feature-card"
                    style={{
                      textDecoration: "none",
                      padding: "16px 20px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    ⚖️ {item.label}
                  </Link>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
