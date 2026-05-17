import Link from "next/link";
import { Browser } from "@/types";

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="rating-stars">
      {"★".repeat(full)}{half ? "½" : ""}{"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

export default function BrowserCard({ browser }: { browser: Browser }) {
  const topFeatures = browser.features.slice(0, 4);
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
        <span className="rating-label">
          {browser.rating.overall >= 4.5 ? "Excellent" : browser.rating.overall >= 4.0 ? "Very Good" : "Good"}
        </span>
      </div>
      <div className="browser-card-features">
        {topFeatures.map((f) => (
          <span key={f} className="feature-tag">{f}</span>
        ))}
      </div>
      <div className="browser-card-pricing">
        <div className="pricing-info">
          <div className="pricing-label">Starting from</div>
          <div className="pricing-value">{browser.pricing.startingPrice}</div>
          {browser.pricing.free && <div className="pricing-free">✓ Free plan available</div>}
        </div>
        <Link href={`/reviews/${browser.slug}`} className="card-cta">
          Read Review →
        </Link>
      </div>
    </div>
  );
}
