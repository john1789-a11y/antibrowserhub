import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AntiBrowserHub",
  description:
    "Learn about AntiBrowserHub — your trusted source for antidetect browser reviews, comparisons, and tutorials.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">About</span>
          <h1>About AntiBrowserHub</h1>
          <p>
            Your trusted resource for honest, in-depth antidetect browser
            reviews.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 style={{ marginBottom: 20 }}>Our Mission</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32 }}>
            AntiBrowserHub was created to help professionals navigate the growing
            landscape of antidetect browsers. With so many options available, we
            provide comprehensive, unbiased reviews and comparisons to help you
            make the right choice for your business.
          </p>

          <h2 style={{ marginBottom: 20 }}>What We Do</h2>
          <div className="features-grid" style={{ marginBottom: 32 }}>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">In-Depth Reviews</h3>
              <p className="feature-desc">
                We test every browser hands-on, evaluating fingerprint quality,
                performance, usability, and value for money.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Fair Comparisons</h3>
              <p className="feature-desc">
                Side-by-side comparisons using consistent criteria so you can
                easily see which browser fits your needs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Expert Guides</h3>
              <p className="feature-desc">
                Practical tutorials on proxy setup, API integration, browser
                automation, and fingerprint testing.
              </p>
            </div>
          </div>

          <h2 style={{ marginBottom: 20 }}>Affiliate Disclosure</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32 }}>
            AntiBrowserHub participates in affiliate programs with some of the
            browsers and proxy services reviewed on this site. This means we may
            earn a commission when you sign up through our links — at no extra
            cost to you. Our reviews and ratings are always honest and
            independent, regardless of affiliate relationships.
          </p>

          <h2 style={{ marginBottom: 20 }}>Contact Us</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Have questions, suggestions, or want to partner with us?
            <br />
            📧 Email: <a href="mailto:hello@antibrowserhubhub.com" style={{ color: "var(--color-indigo)" }}>hello@antibrowserhubhub.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
