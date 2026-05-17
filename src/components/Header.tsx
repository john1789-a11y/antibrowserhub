"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <div className="logo-icon">🛡️</div>
            <div className="logo-text"><span>AntiBrowserHub</span></div>
          </Link>
          <nav className={`nav ${mobileOpen ? "nav-mobile-open" : ""}`}>
            <Link href="/reviews" className="nav-link" onClick={() => setMobileOpen(false)}>Reviews</Link>
            <Link href="/compare" className="nav-link" onClick={() => setMobileOpen(false)}>Compare</Link>
            <Link href="/guides" className="nav-link" onClick={() => setMobileOpen(false)}>Guides</Link>
            <Link href="/about" className="nav-link" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/reviews" className="nav-cta" onClick={() => setMobileOpen(false)}>Get Started →</Link>
          </nav>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
