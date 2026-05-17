import type { Metadata } from "next";
import Link from "next/link";
import { browsers } from "@/data/browsers";
import BrowserCard from "@/components/BrowserCard";

export const metadata: Metadata = {
  title: "Antidetect Browser Reviews",
  description:
    "Comprehensive, honest reviews of the best antidetect browsers including MoreLogin, AdsPower, GoLogin, Multilogin, and Dolphin Anty.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Reviews</span>
          <h1>Antidetect Browser Reviews</h1>
          <p>
            Comprehensive, hands-on reviews of every major antidetect browser.
            Updated regularly with the latest features and pricing.
          </p>
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
