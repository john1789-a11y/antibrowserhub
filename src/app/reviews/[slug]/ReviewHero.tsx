"use client";
import Link from "next/link";
import BrowserLogo from "@/components/BrowserLogo";
import Breadcrumb from "@/components/Breadcrumb";
import { useI18n } from "@/components/I18nProvider";
import type { Browser } from "@/types";

const ui: Record<string, Record<string, string>> = {
  reviewSuffix: { en: "Review 2026", zh: "评测 2026", ru: "Обзор 2026", ja: "レビュー 2026", fr: "Avis 2026", de: "Bewertung 2026" },
  from: { en: "From", zh: "起步价", ru: "От", ja: "から", fr: "À partir de", de: "Ab" },
  updated: { en: "Updated June 2026", zh: "更新于 2026年6月", ru: "Обновлено: июнь 2026", ja: "2026年6月更新", fr: "Mis à jour juin 2026", de: "Aktualisiert Juni 2026" },
  freePlan: { en: "Free Plan Available", zh: "有免费计划", ru: "Бесплатный план", ja: "無料プランあり", fr: "Plan gratuit", de: "Kostenloser Plan" },
  reviews: { en: "Reviews", zh: "评测", ru: "Обзоры", ja: "レビュー", fr: "Avis", de: "Bewertungen" },
};

interface ReviewHeroProps {
  browser: Browser;
}

export default function ReviewHero({ browser }: ReviewHeroProps) {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;

  return (
    <section className="review-hero">
      <div className="container">
        <Breadcrumb customItems={[
          { label: i(ui.reviews), href: "/reviews" },
          { label: browser.name, href: `/reviews/${browser.slug}` },
        ]} />
        <div className="review-hero-inner">
          <BrowserLogo slug={browser.slug} name={browser.name} color={browser.color} size={80} className="review-logo" />
          <div className="review-hero-info">
            <h1>{browser.name} {i(ui.reviewSuffix)}</h1>
            <p>{browser.tagline}</p>
            <div className="review-meta">
              <span>⭐ {browser.rating.overall}/5</span>
              <span>💰 {i(ui.from)} {browser.pricing.startingPrice}</span>
              <span>📅 {i(ui.updated)}</span>
              {browser.pricing.free && <span>🆓 {i(ui.freePlan)}</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
