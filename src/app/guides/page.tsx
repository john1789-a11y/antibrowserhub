import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides & Tutorials",
  description:
    "Expert guides and tutorials for antidetect browsers — API integration, proxy setup, automation, and best practices.",
};

export default function GuidesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Guides</span>
          <h1>Guides & Tutorials</h1>
          <p>
            Expert guides to help you get the most out of your antidetect browser.
            From setup to automation.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="browser-grid">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="review-list-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="review-list-card-body">
                  <span className="section-label" style={{ marginBottom: 12 }}>{guide.category}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                  <div className="review-list-meta">
                    <span>{guide.readTime}</span>
                    <span className="card-cta" style={{ padding: "6px 14px", fontSize: "0.78rem" }}>Read Guide →</span>
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
