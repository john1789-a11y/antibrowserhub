import Link from "next/link";

export default function NotFound() {
  // Inline i18n — Server Component cannot use useI18n(), so we provide English.
  // Client-side language switching is handled at the component level.
  return (
    <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 600 }}>
        <div style={{ fontSize: "6rem", marginBottom: 16, lineHeight: 1 }}>🛡️</div>
        <h1 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: 8, background: "var(--gradient-hero)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          404
        </h1>
        <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", marginBottom: 32 }}>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn-primary">← Back to Home</Link>
          <Link href="/reviews" className="btn-secondary">Browse Reviews</Link>
        </div>
      </div>
    </section>
  );
}
