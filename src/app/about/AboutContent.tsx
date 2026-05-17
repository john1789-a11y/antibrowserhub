"use client";
import { useI18n } from "@/components/I18nProvider";
import { getPageTexts } from "@/i18n/pages";

export default function AboutContent() {
  const { locale } = useI18n();
  const p = getPageTexts(locale).about;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{p.label}</span>
          <h1>{p.title}</h1>
          <p>{p.sub}</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 style={{ marginBottom: 20 }}>{p.mission}</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32 }}>{p.missionText}</p>

          <h2 style={{ marginBottom: 20 }}>{p.whatWeDo}</h2>
          <div className="features-grid" style={{ marginBottom: 32 }}>
            <div className="feature-card"><div className="feature-icon">🔍</div><h3 className="feature-title">{p.r1t}</h3><p className="feature-desc">{p.r1d}</p></div>
            <div className="feature-card"><div className="feature-icon">📊</div><h3 className="feature-title">{p.r2t}</h3><p className="feature-desc">{p.r2d}</p></div>
            <div className="feature-card"><div className="feature-icon">📚</div><h3 className="feature-title">{p.r3t}</h3><p className="feature-desc">{p.r3d}</p></div>
          </div>

          <h2 style={{ marginBottom: 20 }}>{p.affiliate}</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32 }}>{p.affiliateText}</p>

          <h2 style={{ marginBottom: 20 }}>{p.contact}</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            {p.contactText}<br />
            📧 Email: <a href="mailto:hello@antibrowserhub.com" style={{ color: "var(--color-indigo)" }}>hello@antibrowserhub.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
