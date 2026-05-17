"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">🛡️</div>
            <div className="logo-text"><span>AntiBrowserHub</span></div>
          </Link>
          <nav className="nav nav-desktop">
            <Link href="/reviews" className="nav-link">Reviews</Link>
            <Link href="/compare" className="nav-link">Compare</Link>
            <Link href="/guides" className="nav-link">Guides</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/reviews" className="nav-cta">Get Started →</Link>
          </nav>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile menu - rendered outside header to avoid z-index/overflow issues */}
      {mobileOpen && (
        <>
          <div className="mobile-overlay" onClick={closeMenu} />
          <nav className="mobile-nav">
            <Link href="/reviews" className="mobile-nav-link" onClick={closeMenu}>Reviews</Link>
            <Link href="/compare" className="mobile-nav-link" onClick={closeMenu}>Compare</Link>
            <Link href="/guides" className="mobile-nav-link" onClick={closeMenu}>Guides</Link>
            <Link href="/about" className="mobile-nav-link" onClick={closeMenu}>About</Link>
            <Link href="/reviews" className="mobile-nav-cta" onClick={closeMenu}>Get Started →</Link>
          </nav>
        </>
      )}
    </>
  );
}
