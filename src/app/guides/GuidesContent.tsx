"use client";
import Link from "next/link";
import { guides } from "@/data/guides";
import { useI18n } from "@/components/I18nProvider";

export default function GuidesContent() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{t.nav.guides}</span>
          <h1>{t.guides.title}</h1>
          <p>{t.guides.subtitle}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="browser-grid">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="review-list-card" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="review-list-card-body">
                  <span className="section-label" style={{ marginBottom: 12 }}>{guide.category}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                  <div className="review-list-meta">
                    <span>{guide.readTime}</span>
                    <span className="card-cta" style={{ padding: "6px 14px", fontSize: "0.78rem" }}>{t.guides.readGuide}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
