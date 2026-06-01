"use client";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import { browsers } from "@/data/browsers";
import BrowserLogo from "@/components/BrowserLogo";
import Breadcrumb from "@/components/Breadcrumb";

const ui: Record<string, Record<string, string>> = {
  title: {
    en: "Antidetect Browser Pricing Comparison",
    zh: "指纹浏览器价格对比",
    ru: "Сравнение цен антидетект-браузеров",
    ja: "アンチ検出ブラウザ料金比較",
    fr: "Comparaison des prix des navigateurs anti-détection",
    de: "Preisvergleich der Antidetect-Browser",
  },
  subtitle: {
    en: "All 13 browsers compared. Find the best value for your profile and team needs.",
    zh: "13 款浏览器全面对比。找到最适合您的方案。",
    ru: "Все 13 браузеров в сравнении. Найдите лучшее соотношение цены и качества.",
    ja: "全13ブラウザを比較。あなたのニーズに最適な価格を見つけてください。",
    fr: "Les 13 navigateurs comparés. Trouvez la meilleure valeur pour vos besoins.",
    de: "Alle 13 Browser im Vergleich. Finden Sie das beste Preis-Leistungs-Verhältnis.",
  },
  label: {
    en: "Pricing",
    zh: "价格",
    ru: "Цены",
    ja: "料金",
    fr: "Tarifs",
    de: "Preise",
  },
  browser: { en: "Browser", zh: "浏览器", ru: "Браузер", ja: "ブラウザ", fr: "Navigateur", de: "Browser" },
  freePlan: { en: "Free Plan", zh: "免费计划", ru: "Бесплатный", ja: "無料プラン", fr: "Plan gratuit", de: "Kostenlos" },
  startPrice: { en: "Starting Price", zh: "起步价", ru: "Начальная цена", ja: "開始価格", fr: "Prix de départ", de: "Startpreis" },
  freeProfiles: { en: "Free Profiles", zh: "免费配置", ru: "Бесплатные профили", ja: "無料プロファイル", fr: "Profils gratuits", de: "Kostenlose Profile" },
  rating: { en: "Rating", zh: "评分", ru: "Рейтинг", ja: "評価", fr: "Note", de: "Bewertung" },
  viewPlans: { en: "View Plans", zh: "查看方案", ru: "Смотреть планы", ja: "プランを見る", fr: "Voir les plans", de: "Pläne ansehen" },
  yes: { en: "Yes", zh: "是", ru: "Да", ja: "はい", fr: "Oui", de: "Ja" },
  no: { en: "No", zh: "否", ru: "Нет", ja: "いいえ", fr: "Non", de: "Nein" },
  bestValue: { en: "🏆 Best Value", zh: "🏆 最佳性价比", ru: "🏆 Лучшая цена", ja: "🏆 最高コスパ", fr: "🏆 Meilleur rapport", de: "🏆 Bestes Angebot" },
  notSure: {
    en: "Need help choosing?",
    zh: "需要帮助选择？",
    ru: "Нужна помощь с выбором?",
    ja: "選択にお困りですか？",
    fr: "Besoin d'aide pour choisir ?",
    de: "Brauchen Sie Hilfe bei der Auswahl?",
  },
  notSureSub: {
    en: "Compare features, fingerprint quality, and automation side by side.",
    zh: "横向对比功能、指纹质量和自动化。",
    ru: "Сравните функции, качество отпечатков и автоматизацию.",
    ja: "機能、フィンガープリントの品質、自動化を比較。",
    fr: "Comparez fonctionnalités, qualité d'empreinte et automatisation.",
    de: "Vergleichen Sie Funktionen, Fingerprint-Qualität und Automatisierung.",
  },
  compareBtn: { en: "Compare All Browsers →", zh: "对比所有浏览器 →", ru: "Сравнить все →", ja: "全ブラウザを比較 →", fr: "Comparer tous →", de: "Alle vergleichen →" },
};

const ix = (m: Record<string, string>, locale: string) => m[locale] || m.en;

export default function PricingContent() {
  const { locale } = useI18n();

  const sorted = [...browsers].sort((a, b) => {
    const aPrice = a.pricing.free ? 0 : parseFloat(a.pricing.startingPrice.replace(/[^0-9.]/g, "")) || 999;
    const bPrice = b.pricing.free ? 0 : parseFloat(b.pricing.startingPrice.replace(/[^0-9.]/g, "")) || 999;
    return aPrice - bPrice;
  });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[{ label: ix(ui.label, locale), href: "/pricing" }]} />
          <span className="section-label">{ix(ui.label, locale)}</span>
          <h1>{ix(ui.title, locale)}</h1>
          <p>{ix(ui.subtitle, locale)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>{ix(ui.browser, locale)}</th>
                  <th>{ix(ui.freePlan, locale)}</th>
                  <th>{ix(ui.freeProfiles, locale)}</th>
                  <th>{ix(ui.startPrice, locale)}</th>
                  <th>{ix(ui.rating, locale)}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((b, idx) => (
                  <tr key={b.id} className={idx === 0 ? "pricing-highlight" : ""}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <BrowserLogo slug={b.slug} name={b.name} color={b.color} size={28} />
                        <div>
                          <strong>{b.name}</strong>
                          {idx === 0 && (
                            <div style={{ fontSize: "0.7rem", color: "var(--color-emerald)" }}>{ix(ui.bestValue, locale)}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style={{
                        padding: "2px 10px",
                        borderRadius: 100,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        background: b.pricing.free ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.1)",
                        color: b.pricing.free ? "var(--color-emerald)" : "var(--text-muted)",
                      }}>
                        {b.pricing.free ? "✓ " + ix(ui.yes, locale) : "✗ " + ix(ui.no, locale)}
                      </span>
                    </td>
                    <td>{b.pricing.freeProfiles || "—"}</td>
                    <td style={{ fontWeight: 700, color: "var(--text-primary)" }}>{b.pricing.startingPrice}</td>
                    <td>⭐ {b.rating.overall}</td>
                    <td>
                      <Link href={`/reviews/${b.slug}`} className="card-cta" style={{ fontSize: "0.75rem", padding: "4px 12px" }}>
                        {ix(ui.viewPlans, locale)}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Plans detail for each browser */}
          <div className="pricing-details-grid" style={{ marginTop: 48 }}>
            {sorted.filter(b => b.pricing.plans.length > 0).slice(0, 6).map((b) => (
              <div key={b.id} className="feature-card">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <BrowserLogo slug={b.slug} name={b.name} color={b.color} size={32} />
                  <strong style={{ fontSize: "1.05rem" }}>{b.name}</strong>
                </div>
                {b.pricing.plans.map((plan) => (
                  <div key={plan.name} style={{
                    padding: "10px 12px",
                    marginBottom: 8,
                    borderRadius: 8,
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-primary)",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <strong style={{ fontSize: "0.85rem" }}>{plan.name}</strong>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-indigo)" }}>{plan.price}</span>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{plan.profiles}</div>
                  </div>
                ))}
                <Link href={`/reviews/${b.slug}`} style={{ fontSize: "0.8rem", color: "var(--color-indigo)", marginTop: 8, display: "inline-block" }}>
                  {ix(ui.viewPlans, locale)} →
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="review-cta-box" style={{ textAlign: "center", marginTop: 48 }}>
            <h3>{ix(ui.notSure, locale)}</h3>
            <p>{ix(ui.notSureSub, locale)}</p>
            <Link href="/compare" className="btn-primary">{ix(ui.compareBtn, locale)}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
