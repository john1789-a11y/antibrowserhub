import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">🛡️</div>
              <div className="logo-text"><span>AntiBrowserHub</span></div>
            </div>
            <p>Your trusted resource for antidetect browser reviews, comparisons, and guides. We help you find the perfect tool for your multi-account management needs.</p>
          </div>
          <div className="footer-col">
            <h4>Browsers</h4>
            <Link href="/reviews/morelogin">MoreLogin</Link>
            <Link href="/reviews/adspower">AdsPower</Link>
            <Link href="/reviews/gologin">GoLogin</Link>
            <Link href="/reviews/multilogin">Multilogin</Link>
            <Link href="/reviews/dolphin-anty">Dolphin Anty</Link>
            <Link href="/reviews/octobrowser">Octo Browser</Link>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/reviews">All Reviews</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/about">About Us</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="/about">Privacy Policy</Link>
            <Link href="/about">Terms of Service</Link>
            <Link href="/about">Affiliate Disclosure</Link>
            <Link href="/about">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AntiBrowserHub. All rights reserved.</span>
          <span>Made with ❤️ for the antidetect community</span>
        </div>
      </div>
    </footer>
  );
}
