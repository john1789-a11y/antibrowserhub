import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides & Tutorials",
  description:
    "Expert guides and tutorials for antidetect browsers — API integration, proxy setup, automation, and best practices.",
};

const guides = [
  {
    title: "Getting Started with Antidetect Browsers",
    excerpt: "A beginner-friendly guide to understanding what antidetect browsers are, how they work, and which one is right for you.",
    category: "Beginner",
    readTime: "8 min read",
    slug: "getting-started",
  },
  {
    title: "How to Set Up Proxies with Your Antidetect Browser",
    excerpt: "Step-by-step guide to configuring residential, datacenter, and ISP proxies with popular antidetect browsers.",
    category: "Setup",
    readTime: "6 min read",
    slug: "proxy-setup",
  },
  {
    title: "Browser Automation with Playwright & Selenium",
    excerpt: "Learn how to automate browser profiles using Playwright and Selenium with complete code examples.",
    category: "API",
    readTime: "12 min read",
    slug: "automation-guide",
  },
  {
    title: "Fingerprint Testing: How to Verify Your Browser Setup",
    excerpt: "Use CreepJS, BrowserLeaks, and Pixelscan to verify your antidetect browser fingerprint configuration.",
    category: "Testing",
    readTime: "7 min read",
    slug: "fingerprint-testing",
  },
];

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
              <div key={guide.slug} className="review-list-card">
                <div className="review-list-card-body">
                  <span className="section-label" style={{ marginBottom: 12 }}>{guide.category}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                  <div className="review-list-meta">
                    <span>{guide.readTime}</span>
                    <span className="card-cta" style={{ padding: "6px 14px", fontSize: "0.78rem" }}>Coming Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
