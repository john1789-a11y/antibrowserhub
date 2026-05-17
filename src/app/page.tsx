import Link from "next/link";
import BrowserCard from "@/components/BrowserCard";
import ComparisonTable from "@/components/ComparisonTable";
import { browsers } from "@/data/browsers";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Updated for 2026 — Latest Reviews
            </div>
            <h1>
              Find the Best{" "}
              <span className="gradient-text">Antidetect Browser</span>
              <br />
              for Your Needs
            </h1>
            <p className="hero-subtitle">
              In-depth reviews, honest comparisons, and expert guides to help
              you choose the perfect antidetect browser for multi-account
              management, e-commerce, and affiliate marketing.
            </p>
            <div className="hero-actions">
              <Link href="/reviews" className="btn-primary">
                📖 Browse Reviews
              </Link>
              <Link href="/compare" className="btn-secondary">
                ⚖️ Compare Browsers
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">5+</div>
                <div className="hero-stat-label">Browsers Reviewed</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">50+</div>
                <div className="hero-stat-label">Features Compared</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">100%</div>
                <div className="hero-stat-label">Independent Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Browsers */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Top Picks</span>
            <h2 className="section-title">Featured Antidetect Browsers</h2>
            <p className="section-subtitle">
              Our expert team has tested and reviewed the most popular
              antidetect browsers on the market.
            </p>
          </div>
          <div className="browser-grid">
            {browsers.map((browser) => (
              <BrowserCard key={browser.id} browser={browser} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="section comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Side by Side</span>
            <h2 className="section-title">Quick Comparison</h2>
            <p className="section-subtitle">
              See how the top antidetect browsers stack up against each other at
              a glance.
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* Why Use Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why AntiBrowserHub</span>
            <h2 className="section-title">Your Trusted Review Resource</h2>
            <p className="section-subtitle">
              We go beyond surface-level comparisons to bring you actionable
              insights.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3 className="feature-title">Real-World Testing</h3>
              <p className="feature-desc">
                Every browser is tested against CreepJS, BrowserLeaks, and
                Pixelscan to verify fingerprint effectiveness.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3 className="feature-title">API & Automation Guides</h3>
              <p className="feature-desc">
                Complete code examples for Playwright, Selenium, and Puppeteer
                integration with each browser.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Pricing Breakdown</h3>
              <p className="feature-desc">
                Detailed pricing analysis including hidden costs, volume
                discounts, and best value recommendations.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3 className="feature-title">Proxy Recommendations</h3>
              <p className="feature-desc">
                Best proxy pairings for each browser with exclusive deals from
                trusted proxy providers.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Honest Ratings</h3>
              <p className="feature-desc">
                Unbiased, data-driven ratings across fingerprint quality,
                performance, usability, and value.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">Always Up-to-Date</h3>
              <p className="feature-desc">
                Reviews are regularly updated to reflect the latest features,
                pricing changes, and performance improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 60%)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Ready to Find Your Perfect Browser?</h2>
          <p
            className="section-subtitle"
            style={{ marginBottom: 40 }}
          >
            Start with our comprehensive comparison or dive into individual
            reviews.
          </p>
          <div className="hero-actions">
            <Link href="/compare" className="btn-primary">
              Compare All Browsers →
            </Link>
            <Link href="/guides" className="btn-secondary">
              Read Our Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
