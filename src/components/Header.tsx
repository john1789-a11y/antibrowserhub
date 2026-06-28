"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import { useI18n } from "./I18nProvider";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";
import SearchModal from "./SearchModal";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Global keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          {/* Left: Logo */}
          <Link href="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">🛡️</div>
            <div className="logo-text"><span>AntiBrowserHub</span></div>
          </Link>

          {/* Center: Nav links */}
          <nav className="nav nav-desktop">
            <Link href="/reviews" className="nav-link">{t.nav.reviews}</Link>
            <Link href="/compare" className="nav-link">{t.nav.compare}</Link>
            <Link href="/guides" className="nav-link">{t.nav.guides}</Link>
            <Link href="/proxies" className="nav-link">{t.nav.proxies}</Link>
            <Link href="/best-for" className="nav-link">{t.nav.bestFor}</Link>
            <Link href="/deals" className="nav-link">{t.nav.deals}</Link>
            <Link href="/tools/fingerprint-check" className="nav-link">{t.nav.tools}</Link>
          </nav>

          {/* Right: Actions */}
          <div className="header-actions">
            <button className="search-trigger" onClick={() => setSearchOpen(true)} aria-label="Search">
              🔍 <kbd>⌘K</kbd>
            </button>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <div className="lang-switcher" ref={langRef}>
              <button
                className="lang-btn"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Change language"
              >
                {localeFlags[locale]} <span className="lang-code">{locale.toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="lang-dropdown">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      className={`lang-option${loc === locale ? " active" : ""}`}
                      onClick={() => { setLocale(loc); setLangOpen(false); }}
                    >
                      <span>{localeFlags[loc]}</span>
                      <span>{localeNames[loc]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="/reviews" className="nav-cta">{t.nav.getStarted}</Link>
          </div>

          {/* Mobile controls */}
          <div className="mobile-controls">
            <button className="search-trigger" onClick={() => setSearchOpen(true)} aria-label="Search" style={{ padding: "6px 8px" }}>
              🔍
            </button>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div className="mobile-overlay" onClick={closeMenu} />
          <nav className="mobile-nav">
            <Link href="/reviews" className="mobile-nav-link" onClick={closeMenu}>{t.nav.reviews}</Link>
            <Link href="/compare" className="mobile-nav-link" onClick={closeMenu}>{t.nav.compare}</Link>
            <Link href="/guides" className="mobile-nav-link" onClick={closeMenu}>{t.nav.guides}</Link>
            <Link href="/proxies" className="mobile-nav-link" onClick={closeMenu}>{t.nav.proxies}</Link>
            <Link href="/best-for" className="mobile-nav-link" onClick={closeMenu}>{t.nav.bestFor}</Link>
            <Link href="/deals" className="mobile-nav-link" onClick={closeMenu}>{t.nav.deals}</Link>
            <Link href="/tools/fingerprint-check" className="mobile-nav-link" onClick={closeMenu}>{t.nav.tools}</Link>
            <Link href="/about" className="mobile-nav-link" onClick={closeMenu}>{t.nav.about}</Link>

            {/* Mobile language switcher */}
            <div className="mobile-lang-section">
              <div className="mobile-lang-label">{t.common.language}</div>
              <div className="mobile-lang-grid">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    className={`mobile-lang-btn${loc === locale ? " active" : ""}`}
                    onClick={() => { setLocale(loc); }}
                  >
                    {localeFlags[loc]} {localeNames[loc]}
                  </button>
                ))}
              </div>
            </div>

            <Link href="/reviews" className="mobile-nav-cta" onClick={closeMenu}>{t.nav.getStarted}</Link>
          </nav>
        </>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

