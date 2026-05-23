import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { browsers, getBrowserBySlug, getAllBrowserSlugs } from "@/data/browsers";
import ReviewTOC from "./ReviewTOC";
import Breadcrumb from "@/components/Breadcrumb";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBrowserSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const browser = getBrowserBySlug(slug);
  if (!browser) return {};
  return {
    title: `${browser.name} Review 2026 — Features, Pricing & Honest Analysis`,
    description: `In-depth ${browser.name} review: ${browser.tagline}. Rating: ${browser.rating.overall}/5. Starting from ${browser.pricing.startingPrice}. Pros, cons, fingerprint test results, pricing comparison & more.`,
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
    datePublished: "2026-01-15",
    dateModified: "2026-05-17",
  };

  const faqJsonLd = browser.faqs && browser.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: browser.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      {/* Hero */}
      <section className="review-hero">
        <div className="container">
          <Breadcrumb customItems={[
            { label: "Reviews", href: "/reviews" },
            { label: `${browser.name} Review`, href: `/reviews/${browser.slug}` },
          ]} />
          <div className="review-hero-inner">
            <div className="review-logo" style={{ background: browser.color }}>
              {browser.name.charAt(0)}
            </div>
            <div className="review-hero-info">
              <h1>{browser.name} Review 2026</h1>
              <p>{browser.tagline}</p>
              <div className="review-meta">
                <span>⭐ {browser.rating.overall}/5</span>
                <span>💰 From {browser.pricing.startingPrice}</span>
                <span>📅 Updated May 2026</span>
                {browser.pricing.free && <span>🆓 Free Plan Available</span>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="review-content-grid">
            <div className="review-main">
              {/* Overview */}
              <h2 id="overview">Overview</h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: 32, lineHeight: 1.8 }}>
                {browser.description}
              </p>

              {/* Detailed Ratings */}
              <h2 id="ratings">Detailed Ratings</h2>
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

              {/* Pros & Cons */}
              <div id="pros-cons" className="pros-cons">
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

              {/* In-Depth Review Sections */}
              {browser.reviewContent && browser.reviewContent.length > 0 && (
                <>
                  <h2 id="review" style={{ marginTop: 48 }}>In-Depth Review</h2>
                  {browser.reviewContent.map((section) => (
                    <div key={section.title} className="review-section">
                      <h3>{section.title}</h3>
                      <div className="review-section-content">
                        {section.content.split("\n\n").map((paragraph, i) => (
                          <p key={i} dangerouslySetInnerHTML={{
                            __html: paragraph
                              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                              .replace(/\n- /g, "<br/>• ")
                              .replace(/\n/g, "<br/>")
                          }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Use Cases */}
              {browser.useCases && browser.useCases.length > 0 && (
                <>
                  <h2 id="use-cases" style={{ marginTop: 48 }}>Best Use Cases</h2>
                  <div className="use-cases-grid">
                    {browser.useCases.map((uc) => (
                      <div key={uc} className="use-case-item">
                        <span className="use-case-icon">🎯</span>
                        <span>{uc}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Key Features */}
              <h2 id="features" style={{ marginTop: 48 }}>Key Features</h2>
              <div className="features-grid" style={{ marginTop: 20 }}>
                {browser.features.map((f) => {
                  const [title, desc] = f.includes(" — ") ? f.split(" — ") : [f, ""];
                  return (
                    <div key={f} className="feature-card" style={{ padding: 20 }}>
                      <h3 className="feature-title" style={{ fontSize: "0.95rem" }}>{title}</h3>
                      {desc && <p className="feature-desc" style={{ fontSize: "0.82rem", marginTop: 6 }}>{desc}</p>}
                    </div>
                  );
                })}
              </div>

              {/* Pricing Plans */}
              <h2 id="pricing" style={{ marginTop: 48 }}>Pricing Plans</h2>
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

              {/* Testimonials */}
              {browser.testimonials && browser.testimonials.length > 0 && (
                <>
                  <h2 id="testimonials" style={{ marginTop: 48 }}>What Users Say</h2>
                  <div className="testimonials-grid">
                    {browser.testimonials.map((t) => (
                      <div key={t.name} className="testimonial-card">
                        <div className="testimonial-quote">&ldquo;{t.text}&rdquo;</div>
                        <div className="testimonial-author">
                          <div className="testimonial-avatar" style={{ background: browser.color }}>
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <div className="testimonial-name">{t.name}</div>
                            <div className="testimonial-role">{t.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* FAQs */}
              {browser.faqs && browser.faqs.length > 0 && (
                <>
                  <h2 id="faqs" style={{ marginTop: 48 }}>Frequently Asked Questions</h2>
                  <div className="faq-list">
                    {browser.faqs.map((faq) => (
                      <details key={faq.question} className="faq-item">
                        <summary className="faq-question">{faq.question}</summary>
                        <div className="faq-answer">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </>
              )}

              {/* CTA */}
              <div className="review-cta-box" style={{ marginTop: 48 }}>
                <h3>Ready to Try {browser.name}?</h3>
                <p>
                  {browser.pricing.free
                    ? `Start with ${browser.pricing.freeProfiles} free profiles — no credit card required.`
                    : `Plans start from ${browser.pricing.startingPrice}. See all pricing options.`}
                </p>
                <a href={browser.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Try {browser.name} Free →
                </a>
              </div>

              {/* Other Browsers */}
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

            {/* Sidebar */}
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
                  <span className="sidebar-item-label">Automation</span>
                  <span className="sidebar-item-value" style={{ fontSize: "0.78rem" }}>{browser.automationSupport.join(", ")}</span>
                </div>
                <div className="sidebar-item">
                  <span className="sidebar-item-label">Founded</span>
                  <span className="sidebar-item-value">{browser.foundedYear}</span>
                </div>
                <a href={browser.affiliateUrl} target="_blank" rel="noopener noreferrer" className="sidebar-cta">
                  Try {browser.name} Free →
                </a>
              </div>

              {/* Table of Contents */}
              <ReviewTOC sections={[
                { id: "overview", label: "Overview" },
                { id: "ratings", label: "Detailed Ratings" },
                { id: "pros-cons", label: "Pros & Cons" },
                ...(browser.reviewContent ? [{ id: "review", label: "In-Depth Review" }] : []),
                ...(browser.useCases ? [{ id: "use-cases", label: "Use Cases" }] : []),
                { id: "features", label: "Key Features" },
                { id: "pricing", label: "Pricing Plans" },
                ...(browser.testimonials ? [{ id: "testimonials", label: "User Reviews" }] : []),
                ...(browser.faqs ? [{ id: "faqs", label: "FAQs" }] : []),
              ]} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
