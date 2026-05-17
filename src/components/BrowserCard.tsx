"use client";
import Link from "next/link";
import { Browser } from "@/types";
import { useI18n } from "./I18nProvider";

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="rating-stars">
      {"★".repeat(full)}{half ? "½" : ""}{"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

const ratingLabels: Record<string, Record<string, string>> = {
  excellent: { en: "Excellent", zh: "优秀", ru: "Отлично", ja: "優秀", fr: "Excellent", de: "Ausgezeichnet" },
  veryGood: { en: "Very Good", zh: "很好", ru: "Очень хорошо", ja: "とても良い", fr: "Très bien", de: "Sehr gut" },
  good: { en: "Good", zh: "良好", ru: "Хорошо", ja: "良い", fr: "Bien", de: "Gut" },
};

const startingFrom: Record<string, string> = {
  en: "Starting from", zh: "起步价", ru: "От", ja: "開始価格", fr: "À partir de", de: "Ab",
};

const freePlan: Record<string, string> = {
  en: "✓ Free plan available", zh: "✓ 有免费计划", ru: "✓ Бесплатный план", ja: "✓ 無料プランあり", fr: "✓ Plan gratuit", de: "✓ Kostenloser Plan",
};

export default function BrowserCard({ browser }: { browser: Browser }) {
  const { locale, t } = useI18n();
  const topFeatures = browser.features.slice(0, 4);
  const ratingLabel = browser.rating.overall >= 4.5
    ? (ratingLabels.excellent[locale] || "Excellent")
    : browser.rating.overall >= 4.0
    ? (ratingLabels.veryGood[locale] || "Very Good")
    : (ratingLabels.good[locale] || "Good");

  return (
    <div className="browser-card" style={{ "--card-accent": browser.color } as React.CSSProperties}>
      <div className="browser-card-header">
        <div className="browser-card-logo" style={{ background: browser.color }}>
          {browser.name.charAt(0)}
        </div>
        <div className="browser-card-info">
          <div className="browser-card-name">{browser.name}</div>
          <div className="browser-card-tagline">{browser.tagline}</div>
        </div>
      </div>
      <div className="browser-card-rating">
        <span className="rating-score">{browser.rating.overall}</span>
        <StarRating rating={browser.rating.overall} />
        <span className="rating-label">{ratingLabel}</span>
      </div>
      <div className="browser-card-features">
        {topFeatures.map((f) => (
          <span key={f} className="feature-tag">{f}</span>
        ))}
      </div>
      <div className="browser-card-pricing">
        <div className="pricing-info">
          <div className="pricing-label">{startingFrom[locale] || "Starting from"}</div>
          <div className="pricing-value">{browser.pricing.startingPrice}</div>
          {browser.pricing.free && <div className="pricing-free">{freePlan[locale] || "✓ Free plan available"}</div>}
        </div>
        <Link href={`/reviews/${browser.slug}`} className="card-cta">
          {t.reviews.readReview}
        </Link>
      </div>
    </div>
  );
}
