"use client";
import Link from "next/link";
import BrowserCard from "@/components/BrowserCard";
import ComparisonTable from "@/components/ComparisonTable";
import { browsers } from "@/data/browsers";
import { useI18n } from "@/components/I18nProvider";
import { getPageTexts } from "@/i18n/pages";

export default function HomeContent() {
  const { locale } = useI18n();
  const p = getPageTexts(locale).home;

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AntiBrowserHub",
    url: "https://antibrowserhub.com",
    description: "Independent reviews and comparisons of antidetect browsers.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://antibrowserhub.com/reviews?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot" />{p.badge}</div>
            <h1>{p.heroTitle1} <span className="gradient-text">{p.heroTitle2}</span><br />{p.heroTitle3}</h1>
            <p className="hero-subtitle">{p.heroSub}</p>
            <div className="hero-actions">
              <Link href="/reviews" className="btn-primary">{p.btnReviews}</Link>
              <Link href="/compare" className="btn-secondary">{p.btnCompare}</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="hero-stat-value">{browsers.length}+</div><div className="hero-stat-label">{p.stat1}</div></div>
              <div className="hero-stat"><div className="hero-stat-value">100+</div><div className="hero-stat-label">{p.stat2}</div></div>
              <div className="hero-stat"><div className="hero-stat-value">100%</div><div className="hero-stat-label">{p.stat3}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{p.featLabel}</span>
            <h2 className="section-title">{p.featTitle}</h2>
            <p className="section-subtitle">{p.featSub}</p>
          </div>
          <div className="browser-grid">
            {browsers.map((browser) => (<BrowserCard key={browser.id} browser={browser} />))}
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{p.compLabel}</span>
            <h2 className="section-title">{p.compTitle}</h2>
            <p className="section-subtitle">{p.compSub}</p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{p.whyLabel}</span>
            <h2 className="section-title">{p.whyTitle}</h2>
            <p className="section-subtitle">{p.whySub}</p>
          </div>
          <div className="features-grid">
            <div className="feature-card"><div className="feature-icon">🔬</div><h3 className="feature-title">{p.f1t}</h3><p className="feature-desc">{p.f1d}</p></div>
            <div className="feature-card"><div className="feature-icon">💻</div><h3 className="feature-title">{p.f2t}</h3><p className="feature-desc">{p.f2d}</p></div>
            <div className="feature-card"><div className="feature-icon">💰</div><h3 className="feature-title">{p.f3t}</h3><p className="feature-desc">{p.f3d}</p></div>
            <div className="feature-card"><div className="feature-icon">🌐</div><h3 className="feature-title">{p.f4t}</h3><p className="feature-desc">{p.f4d}</p></div>
            <div className="feature-card"><div className="feature-icon">📊</div><h3 className="feature-title">{p.f5t}</h3><p className="feature-desc">{p.f5d}</p></div>
            <div className="feature-card"><div className="feature-icon">🔄</div><h3 className="feature-title">{p.f6t}</h3><p className="feature-desc">{p.f6d}</p></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 60%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">{p.ctaTitle}</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>{p.ctaSub}</p>
          <div className="hero-actions">
            <Link href="/compare" className="btn-primary">{p.ctaBtn1}</Link>
            <Link href="/guides" className="btn-secondary">{p.ctaBtn2}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
