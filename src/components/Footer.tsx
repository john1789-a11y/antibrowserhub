"use client";
import Link from "next/link";
import { useI18n } from "./I18nProvider";
import Newsletter from "./Newsletter";

export default function Footer() {
  const { t } = useI18n();

  return (
    <>
      <Newsletter />
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">🛡️</div>
                <div className="logo-text"><span>AntiBrowserHub</span></div>
              </div>
              <p>{t.footer.description}</p>
              {/* Social media links */}
              <div className="footer-social">
                <a href="https://twitter.com/antibrowserhub" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="social-link">
                  𝕏
                </a>
                <a href="https://t.me/antibrowserhub" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-link">
                  ✈️
                </a>
                <a href="https://github.com/AntiBrowserHub" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                  🐙
                </a>
                <a href="https://discord.gg/antibrowserhub" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="social-link">
                  💬
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>{t.footer.product}</h4>
              <Link href="/reviews/morelogin">MoreLogin</Link>
              <Link href="/reviews/adspower">AdsPower</Link>
              <Link href="/reviews/gologin">GoLogin</Link>
              <Link href="/reviews/multilogin">Multilogin</Link>
              <Link href="/reviews/dolphin-anty">Dolphin Anty</Link>
              <Link href="/reviews/octobrowser">Octo Browser</Link>
              <Link href="/reviews/incogniton">Incogniton</Link>
              <Link href="/reviews/kameleo">Kameleo</Link>
            </div>
            <div className="footer-col">
              <h4>{t.footer.resources}</h4>
              <Link href="/reviews">{t.nav.reviews}</Link>
              <Link href="/compare">{t.nav.compare}</Link>
              <Link href="/guides">{t.nav.guides}</Link>
              <Link href="/proxies">{t.nav.proxies}</Link>
              <Link href="/best-for">{t.nav.bestFor}</Link>
              <Link href="/deals">{t.nav.deals}</Link>
              <Link href="/pricing">{t.footer.pricing}</Link>
              <Link href="/faq">{t.footer.faq}</Link>
              <Link href="/glossary">{t.footer.glossary}</Link>
              <Link href="/tools/fingerprint-check">{t.nav.tools}</Link>
              <Link href="/methodology">{t.footer.methodology}</Link>
              <Link href="/about">{t.nav.about}</Link>
            </div>
            <div className="footer-col">
              <h4>{t.footer.legal}</h4>
              <Link href="/privacy">{t.footer.privacy}</Link>
              <Link href="/terms">{t.footer.terms}</Link>
              <Link href="/affiliate-disclosure">{t.footer.affiliateDisclosure}</Link>
              <Link href="/contact">{t.footer.contact}</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
            <span>{t.footer.madeWith}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
