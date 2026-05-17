"use client";
import { browsers } from "@/data/browsers";
import BrowserCard from "@/components/BrowserCard";
import { useI18n } from "@/components/I18nProvider";

export default function ReviewsContent() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{t.nav.reviews}</span>
          <h1>{t.reviews.title}</h1>
          <p>{t.reviews.subtitle}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="browser-grid">
            {browsers.map((browser) => (
              <BrowserCard key={browser.id} browser={browser} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
