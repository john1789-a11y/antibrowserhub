"use client";
import Link from "next/link";
import { useI18n } from "./I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">🛡️</div>
              <div className="logo-text"><span>AntiBrowserHub</span></div>
            </div>
            <p>{t.footer.description}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footer.product}</h4>
            <Link href="/reviews/morelogin">MoreLogin</Link>
            <Link href="/reviews/adspower">AdsPower</Link>
            <Link href="/reviews/gologin">GoLogin</Link>
            <Link href="/reviews/multilogin">Multilogin</Link>
            <Link href="/reviews/dolphin-anty">Dolphin Anty</Link>
            <Link href="/reviews/octobrowser">Octo Browser</Link>
          </div>
          <div className="footer-col">
            <h4>{t.footer.resources}</h4>
            <Link href="/reviews">{t.nav.reviews}</Link>
            <Link href="/compare">{t.nav.compare}</Link>
            <Link href="/guides">{t.nav.guides}</Link>
            <Link href="/about">{t.nav.about}</Link>
          </div>
          <div className="footer-col">
            <h4>{t.footer.legal}</h4>
            <Link href="/about">{t.footer.privacy}</Link>
            <Link href="/about">{t.footer.terms}</Link>
            <Link href="/about">Affiliate Disclosure</Link>
            <Link href="/about">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          <span>Made with ❤️ for the antidetect community</span>
        </div>
      </div>
    </footer>
  );
}
