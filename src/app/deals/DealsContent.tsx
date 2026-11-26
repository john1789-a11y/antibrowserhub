"use client";
import type { Locale } from "@/i18n/config";
import { vendorUpdates } from "@/data/vendorUpdates";
import AffiliateLink from "@/components/AffiliateLink";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import BrowserLogo from "@/components/BrowserLogo";
import Breadcrumb from "@/components/Breadcrumb";

interface Deal {
  browserName: string;
  browserSlug: string;
  color: string;
  dealType: "coupon" | "free" | "discount";
  title: string;
  description: string;
  code?: string;
  terms?: Record<Locale, string>;
  discount: string;
  expiry: string;
  verified: boolean;
}

const deals: Deal[] = [
  {
    browserName: "MoreLogin",
    browserSlug: "morelogin",
    color: "#6366f1",
    dealType: "free",
    title: "Free Plan — 2 Profiles Forever",
    description: "Get started with MoreLogin's free plan including 2 browser profiles, ML Canvas fingerprinting, and full API access.",
    discount: "FREE",
    expiry: "No expiry",
    verified: false,
  },
  {
    browserName: "MoreLogin",
    browserSlug: "morelogin",
    color: "#6366f1",
    dealType: "discount",
    title: "Annual Plan — 40% Annual Discount",
    description: "Save 40% when you choose an annual subscription on any MoreLogin plan.",
    discount: "40% OFF",
    expiry: "Ongoing",
    verified: false,
  },
  {
    browserName: "AdsPower",
    browserSlug: "adspower",
    color: "#3b82f6",
    dealType: "free",
    title: "Free Plan — 2 Profiles",
    description: "AdsPower offers 2 free browser profiles with built-in RPA automation tools.",
    discount: "FREE",
    expiry: "No expiry",
    verified: false,
  },
  {
    browserName: "GoLogin",
    browserSlug: "gologin",
    color: "#10b981",
    dealType: "free",
    title: "Free Plan — 3 Profiles",
    description: "GoLogin Free allows 3 saved profiles and 25 creations per calendar month.",
    discount: "FREE",
    expiry: "No expiry",
    verified: false,
  },
  {
    browserName: "GoLogin",
    browserSlug: "gologin",
    color: "#10b981",
    dealType: "discount",
    title: "Annual Plan — 50% Off",
    description: "GoLogin offers 50% off paid plans with annual billing.",
    discount: "50% OFF",
    expiry: "Ongoing",
    verified: false,
  },
  {
    browserName: "Dolphin Anty",
    browserSlug: "dolphin-anty",
    color: "#f59e0b",
    dealType: "free",
    title: "Free Plan — Up to 3 Profiles",
    description: "New accounts can save up to 3 profiles and create up to 20 per calendar month.",
    discount: "3 FREE",
    expiry: "No expiry",
    verified: false,
  },
  {
    browserName: "Incogniton",
    browserSlug: "incogniton",
    color: "#2563eb",
    dealType: "free",
    title: "Free Starter",
    description: vendorUpdates.incogniton.summary.en,
    discount: "10 → 3",
    expiry: "No expiry",
    verified: false,
  },
  {
    browserName: "Hidemyacc",
    browserSlug: "hidemyacc",
    color: "#06b6d4",
    dealType: "discount",
    title: "Mini — $10/mo",
    description: vendorUpdates.hidemyacc.billing.en,
    discount: "$10/mo",
    expiry: "Ongoing",
    verified: false,
  },
  {
    browserName: "Undetectable",
    browserSlug: "undetectable",
    color: "#f97316",
    dealType: "free",
    title: "Free Plan — 5 Cloud Profiles",
    description: vendorUpdates.undetectable.summary.en,
    discount: "5",
    expiry: "No expiry",
    verified: false,
  },
  {
    browserName: "Octo Browser",
    browserSlug: "octobrowser",
    color: "#3479ef",
    dealType: "coupon",
    title: "Octo Browser",
    description: "",
    code: "OCTO50",
    discount: "50%",
    expiry: "2026-11-30",
    verified: true,
    terms: {
      en: "November 2–30, 2026: new users receive 50% off subscriptions of three months or longer.",
      zh: "2026 年 11 月 2 日至 30 日，新用户购买三个月或更长的订阅可享五折。",
      ru: "Со 2 по 30 ноября 2026 года новые пользователи получают скидку 50% на подписки от трёх месяцев.",
      ja: "2026 年 11 月 2～30 日、新規ユーザーは 3 か月以上の契約が 50% 割引になります。",
      fr: "Du 2 au 30 novembre 2026, les nouveaux utilisateurs bénéficient de 50 % de réduction sur les abonnements de trois mois ou plus.",
      de: "Vom 2. bis 30. November 2026 erhalten Neukunden 50 % Rabatt auf Abonnements ab drei Monaten.",
    },
  },
  {
    browserName: "Kameleo",
    browserSlug: "kameleo",
    color: "#22c55e",
    dealType: "free",
    title: "Free Plan — 2 Concurrent Browsers",
    description: "Get started with mobile emulation and Docker support. 2 concurrent browsers with 300 minutes.",
    discount: "FREE",
    expiry: "No expiry",
    verified: false,
  },
];

export default function DealsContent() {
  const { t, locale } = useI18n();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[
            { label: t.nav.deals, href: "/deals" },
          ]} />
          <span className="section-label">{t.deals.exclusiveOffers}</span>
          <h1>{t.deals.title}</h1>
          <p>{t.deals.subtitle}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          {/* Free Plans Section */}
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: 8 }}>
            {t.deals.freePlans}
          </h2>
          <p className="section-subtitle" style={{ textAlign: "left", maxWidth: "100%", marginBottom: 24 }}>
            {t.deals.freePlansSub}
          </p>
          <div className="browser-grid" style={{ marginBottom: 48 }}>
            {deals
              .filter((d) => d.dealType === "free")
              .map((deal) => (
                <div key={`${deal.browserSlug}-${deal.title}`} className="feature-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <BrowserLogo slug={deal.browserSlug} name={deal.browserName} color={deal.color} size={36} />
                    <div>
                      <strong>{deal.browserName}</strong>
                      {deal.verified && (
                        <span style={{ fontSize: "0.7rem", color: "var(--color-green)", marginLeft: 6 }}>
                          ✓ {t.deals.verified}
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        marginLeft: "auto", padding: "4px 12px", borderRadius: 100,
                        background: "rgba(16,185,129,0.15)", color: "var(--color-green)",
                        fontSize: "0.75rem", fontWeight: 700,
                      }}
                    >
                      {vendorUpdates[deal.browserSlug] ? (deal.dealType === "free" ? (vendorUpdates[deal.browserSlug].freeProfilesLabel ? deal.discount : String(vendorUpdates[deal.browserSlug].freeProfiles)) : vendorUpdates[deal.browserSlug].startingPrice) : deal.discount}
                    </span>
                  </div>
                  <h3 className="feature-title" style={{ fontSize: "0.95rem", marginBottom: 8 }}>{vendorUpdates[deal.browserSlug] ? deal.browserName : deal.title}</h3>
                  <p className="feature-desc" style={{ fontSize: "0.82rem", marginBottom: 12 }}>{vendorUpdates[deal.browserSlug] ? (deal.dealType === "free" ? vendorUpdates[deal.browserSlug].summary[locale] : vendorUpdates[deal.browserSlug].billing[locale]) : deal.description}</p>
                  {deal.code && (
                    <div style={{
                      padding: "8px 16px", borderRadius: 8,
                      background: "var(--bg-card)", border: "1px dashed var(--border)",
                      fontFamily: "monospace", fontSize: "0.9rem", fontWeight: 700,
                      textAlign: "center", marginBottom: 12, letterSpacing: 2,
                    }}>
                      {deal.code}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <AffiliateLink product={deal.browserSlug} placement="deal" className="card-cta" style={{ fontSize: "0.78rem" }}>
                      {t.deals.getDeal}
                    </AffiliateLink>
                    <Link href={`/reviews/${deal.browserSlug}`} style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                      {t.deals.readReview}
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* Discount Deals Section */}
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: 8 }}>
            {t.deals.discounts}
          </h2>
          <p className="section-subtitle" style={{ textAlign: "left", maxWidth: "100%", marginBottom: 24 }}>
            {t.deals.discountsSub}
          </p>
          <div className="browser-grid" style={{ marginBottom: 48 }}>
            {deals
              .filter((d) => d.dealType === "discount" || d.dealType === "coupon")
              .map((deal) => (
                <div key={`${deal.browserSlug}-${deal.title}`} className="feature-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <BrowserLogo slug={deal.browserSlug} name={deal.browserName} color={deal.color} size={36} />
                    <div>
                      <strong>{deal.browserName}</strong>
                      {deal.verified && (
                        <span style={{ fontSize: "0.7rem", color: "var(--color-green)", marginLeft: 6 }}>
                          ✓ {t.deals.verified}
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        marginLeft: "auto", padding: "4px 12px", borderRadius: 100,
                        background: "rgba(239,68,68,0.15)", color: "#ef4444",
                        fontSize: "0.75rem", fontWeight: 700,
                      }}
                    >
                      {deal.code ? deal.discount : vendorUpdates[deal.browserSlug]?.startingPrice ?? deal.discount}
                    </span>
                  </div>
                  <h3 className="feature-title" style={{ fontSize: "0.95rem", marginBottom: 8 }}>{vendorUpdates[deal.browserSlug] ? deal.browserName : deal.title}</h3>
                  <p className="feature-desc" style={{ fontSize: "0.82rem", marginBottom: 12 }}>{deal.terms?.[locale] ?? vendorUpdates[deal.browserSlug]?.billing[locale] ?? deal.description}</p>
                  {deal.code && (
                    <div style={{
                      padding: "8px 16px", borderRadius: 8,
                      background: "var(--bg-card)", border: "1px dashed var(--border)",
                      fontFamily: "monospace", fontSize: "0.9rem", fontWeight: 700,
                      textAlign: "center", marginBottom: 12, letterSpacing: 2,
                    }}>
                      {deal.code}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <AffiliateLink product={deal.browserSlug} placement="deal" className="card-cta" style={{ fontSize: "0.78rem" }}>
                      {t.deals.getDeal}
                    </AffiliateLink>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                      {deal.code ? t.deals.expires : t.deals.verified}: {deal.code ? deal.expiry : vendorUpdates[deal.browserSlug]?.verifiedAt}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Compare Section */}
          <div className="review-cta-box" style={{ textAlign: "center" }}>
            <h3>{t.deals.notSure}</h3>
            <p>{t.deals.notSureSub}</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/compare" className="btn-primary">{t.deals.compareAll}</Link>
              <Link href="/reviews" className="btn-secondary">{t.deals.browseReviews}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
