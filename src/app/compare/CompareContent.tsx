"use client";
import Link from "next/link";
import { browsers } from "@/data/browsers";
import { useI18n } from "@/components/I18nProvider";

const i = (m: Record<string, string>, locale: string) => m[locale] || m.en;

const ui: Record<string, Record<string, string>> = {
  compLabel: { en: "Comprehensive Comparison", zh: "全面对比", ru: "Полное сравнение", ja: "総合比較", fr: "Comparaison complète", de: "Umfassender Vergleich" },
  compTitle: { en: "Compare Antidetect Browsers", zh: "指纹浏览器对比", ru: "Сравнение антидетект браузеров", ja: "アンチ検出ブラウザの比較", fr: "Comparer les navigateurs", de: "Antidetect-Browser vergleichen" },
  compSub: { en: "Side-by-side comparison of {n} leading antidetect browsers across 50+ features, pricing plans, and real-world performance data — updated for 2026.", zh: "横向对比 {n} 款主流指纹浏览器，涵盖 50+ 功能、价格和实际性能数据 — 2026 年最新。", ru: "Сравнение {n} ведущих антидетект браузеров по 50+ параметрам — обновлено на 2026.", ja: "{n}つの主要ブラウザを50以上の機能で比較 — 2026年版", fr: "Comparaison de {n} navigateurs sur 50+ critères — mis à jour 2026.", de: "Vergleich von {n} Browsern über 50+ Funktionen — aktualisiert 2026." },
  quickOverview: { en: "Quick Overview", zh: "快速概览", ru: "Краткий обзор", ja: "クイック概要", fr: "Aperçu rapide", de: "Schnellüberblick" },
  quickSub: { en: "A snapshot of each browser's overall rating, pricing, and key highlights.", zh: "每款浏览器的综合评分、价格和亮点一览。", ru: "Обзор рейтинга, цен и основных особенностей каждого браузера.", ja: "各ブラウザの評価、価格、ハイライトの概要。", fr: "Aperçu des notes, prix et points forts de chaque navigateur.", de: "Überblick über Bewertung, Preise und Highlights jedes Browsers." },
  browser: { en: "Browser", zh: "浏览器", ru: "Браузер", ja: "ブラウザ", fr: "Navigateur", de: "Browser" },
  rating: { en: "Rating", zh: "评分", ru: "Рейтинг", ja: "評価", fr: "Note", de: "Bewertung" },
  startPrice: { en: "Starting Price", zh: "起步价", ru: "Начальная цена", ja: "開始価格", fr: "Prix de départ", de: "Startpreis" },
  freePlan: { en: "Free Plan", zh: "免费计划", ru: "Бесплатный план", ja: "無料プラン", fr: "Plan gratuit", de: "Kostenloser Plan" },
  bestFor: { en: "Best For", zh: "最适合", ru: "Лучше всего для", ja: "最適な用途", fr: "Idéal pour", de: "Am besten für" },
  feature: { en: "Feature", zh: "功能", ru: "Функция", ja: "機能", fr: "Fonctionnalité", de: "Funktion" },
  profiles: { en: "profiles", zh: "配置", ru: "профилей", ja: "プロファイル", fr: "profils", de: "Profile" },
  recLabel: { en: "Recommendations", zh: "推荐方案", ru: "Рекомендации", ja: "推奨", fr: "Recommandations", de: "Empfehlungen" },
  recTitle: { en: "Which Browser Is Best For You?", zh: "哪款浏览器最适合你？", ru: "Какой браузер лучше для вас?", ja: "あなたに最適なブラウザは？", fr: "Quel navigateur est fait pour vous ?", de: "Welcher Browser passt zu Ihnen?" },
  recSub: { en: "Our expert recommendations based on specific use cases and needs.", zh: "基于具体使用场景和需求的专家推荐。", ru: "Экспертные рекомендации для конкретных задач.", ja: "具体的な用途に基づく専門家の推奨。", fr: "Nos recommandations d'experts selon vos besoins.", de: "Unsere Expertenempfehlungen nach Anwendungsfall." },
  ctaTitle: { en: "Need More Detail?", zh: "需要更多细节？", ru: "Нужно больше деталей?", ja: "詳細が必要ですか？", fr: "Besoin de plus de détails ?", de: "Mehr Details benötigt?" },
  ctaSub: { en: "Read our in-depth individual reviews for comprehensive analysis including real-world fingerprint test results.", zh: "阅读我们的深度单独评测，获取完整分析和真实指纹测试结果。", ru: "Читайте подробные обзоры с результатами тестов отпечатков.", ja: "実際のフィンガープリントテスト結果を含む詳細レビューをお読みください。", fr: "Lisez nos avis détaillés avec résultats de tests d'empreintes.", de: "Lesen Sie unsere ausführlichen Bewertungen mit Fingerprint-Testergebnissen." },
  ctaBtn: { en: "Browse All Reviews →", zh: "浏览所有评测 →", ru: "Все обзоры →", ja: "全レビューを見る →", fr: "Voir tous les avis →", de: "Alle Bewertungen →" },
};

const comparisonCategories = [
  { titleKey: "🔒 Fingerprint & Security", titles: { en: "🔒 Fingerprint & Security", zh: "🔒 指纹与安全", ru: "🔒 Отпечатки и безопасность", ja: "🔒 フィンガープリントとセキュリティ", fr: "🔒 Empreinte et sécurité", de: "🔒 Fingerprint & Sicherheit" },
    rows: [
      { label: { en: "Browser Engine", zh: "浏览器引擎", ru: "Движок", ja: "エンジン", fr: "Moteur", de: "Engine" }, values: ["Chromium + Firefox", "SunBrowser + FlowerBrowser", "Orbita (Chromium)", "Mimic + Stealthfox", "Chromium", "Chromium"] },
      { label: { en: "Canvas Fingerprint", zh: "Canvas 指纹", ru: "Canvas отпечаток", ja: "Canvas指紋", fr: "Empreinte Canvas", de: "Canvas Fingerprint" }, values: ["ML-based real data", "Noise injection", "Custom generation", "Advanced spoofing", "Basic masking", "Auto mode"] },
      { label: { en: "WebGL Fingerprint", zh: "WebGL 指纹", ru: "WebGL отпечаток", ja: "WebGL指紋", fr: "Empreinte WebGL", de: "WebGL Fingerprint" }, values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: { en: "WebRTC Protection", zh: "WebRTC 保护", ru: "Защита WebRTC", ja: "WebRTC保護", fr: "Protection WebRTC", de: "WebRTC-Schutz" }, values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: { en: "Mobile Fingerprints", zh: "移动端指纹", ru: "Мобильные отпечатки", ja: "モバイル指紋", fr: "Empreintes mobiles", de: "Mobile Fingerprints" }, values: ["✓ Android/iOS", "✓ Android", "✓ Android", "✓", "✗", "✗"] },
      { label: { en: "2FA Support", zh: "双因素认证", ru: "Поддержка 2FA", ja: "2FA対応", fr: "Support 2FA", de: "2FA-Unterstützung" }, values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    ],
  },
  { titleKey: "💼 Features & Usability", titles: { en: "💼 Features & Usability", zh: "💼 功能与易用性", ru: "💼 Функции и удобство", ja: "💼 機能と使いやすさ", fr: "💼 Fonctionnalités", de: "💼 Funktionen & Nutzbarkeit" },
    rows: [
      { label: { en: "Free Plan", zh: "免费计划", ru: "Бесплатный план", ja: "無料プラン", fr: "Plan gratuit", de: "Kostenloser Plan" }, values: ["✓ 2 profiles", "✓ 2 profiles", "✓ 3 profiles", "✗ None", "✓ 10 profiles", "✗ None"] },
      { label: { en: "API Access", zh: "API 访问", ru: "Доступ к API", ja: "APIアクセス", fr: "Accès API", de: "API-Zugang" }, values: ["REST + Local API", "Local API", "REST API", "REST API", "API", "API"] },
      { label: { en: "Team Collaboration", zh: "团队协作", ru: "Совместная работа", ja: "チーム協力", fr: "Collaboration", de: "Teamarbeit" }, values: ["✓ Advanced", "✓ Advanced", "✓ Profile sharing", "✓ Team mgmt", "✓ Basic", "✓ Limited seats"] },
      { label: { en: "Bulk Operations", zh: "批量操作", ru: "Массовые операции", ja: "一括操作", fr: "Opérations en masse", de: "Massenoperationen" }, values: ["✓ Create/Open/Delete", "✓ Extensive", "✓ Basic", "✓ Basic", "✓ Basic", "✗ Limited"] },
      { label: { en: "Built-in Proxies", zh: "内置代理", ru: "Встроенные прокси", ja: "内蔵プロキシ", fr: "Proxies intégrés", de: "Integrierte Proxies" }, values: ["✓ Proxy store", "✓ Partner proxies", "✓ Free + Paid", "✗", "✗", "✓ 3 providers"] },
      { label: { en: "RPA / No-code", zh: "RPA / 无代码", ru: "RPA / Без кода", ja: "RPA / ノーコード", fr: "RPA / No-code", de: "RPA / No-Code" }, values: ["✗", "✓ Built-in RPA", "✗", "✗", "✓ Scenarios", "✗"] },
    ],
  },
  { titleKey: "💰 Pricing", titles: { en: "💰 Pricing (Monthly)", zh: "💰 价格（月付）", ru: "💰 Цены (ежемесячно)", ja: "💰 料金（月額）", fr: "💰 Tarifs (mensuels)", de: "💰 Preise (monatlich)" },
    rows: [
      { label: { en: "Entry Plan", zh: "入门套餐", ru: "Начальный план", ja: "エントリープラン", fr: "Plan d'entrée", de: "Einstiegsplan" }, values: ["$9 / 10 profiles", "$5.4 / 10 profiles", "$24 / 100 profiles", "€99 / 100 profiles", "$89 / 100 profiles", "€29 / 10 profiles"] },
      { label: { en: "100 Profiles Plan", zh: "100 配置套餐", ru: "План на 100 профилей", ja: "100プロファイルプラン", fr: "Plan 100 profils", de: "100-Profile-Plan" }, values: ["~$40 / 150 profiles", "$30 / 100 profiles", "$24 / 100 profiles", "€99 / 100 profiles", "$89 / 100 profiles", "€79 / 100 profiles"] },
      { label: { en: "Team Plan", zh: "团队套餐", ru: "Командный план", ja: "チームプラン", fr: "Plan équipe", de: "Team-Plan" }, values: ["$80 / 400 profiles", "Contact", "$99 / 300 profiles", "€199 / 300 profiles", "$159 / 300 profiles", "€169 / 350 profiles"] },
      { label: { en: "Annual Discount", zh: "年付折扣", ru: "Годовая скидка", ja: "年間割引", fr: "Remise annuelle", de: "Jahresrabatt" }, values: ["✓ Up to 50%", "✓ Available", "✓ 50%", "✓ Available", "✓ Available", "✓ 10-30%"] },
    ],
  },
  { titleKey: "🤖 Automation", titles: { en: "🤖 Automation Support", zh: "🤖 自动化支持", ru: "🤖 Автоматизация", ja: "🤖 自動化サポート", fr: "🤖 Automatisation", de: "🤖 Automatisierung" },
    rows: [
      { label: { en: "Playwright", zh: "Playwright", ru: "Playwright", ja: "Playwright", fr: "Playwright", de: "Playwright" }, values: ["✓", "✗", "✓", "✓", "✗", "✗"] },
      { label: { en: "Selenium", zh: "Selenium", ru: "Selenium", ja: "Selenium", fr: "Selenium", de: "Selenium" }, values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: { en: "Puppeteer", zh: "Puppeteer", ru: "Puppeteer", ja: "Puppeteer", fr: "Puppeteer", de: "Puppeteer" }, values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
      { label: { en: "Built-in RPA", zh: "内置 RPA", ru: "Встроенный RPA", ja: "内蔵RPA", fr: "RPA intégré", de: "Integriertes RPA" }, values: ["✗", "✓", "✗", "✗", "✓", "✗"] },
      { label: { en: "MCP Support", zh: "MCP 支持", ru: "Поддержка MCP", ja: "MCP対応", fr: "Support MCP", de: "MCP-Unterstützung" }, values: ["✓", "✗", "✓", "✗", "✗", "✗"] },
    ],
  },
];

const verdicts = [
  { scenario: { en: "🛒 E-commerce", zh: "🛒 电商运营", ru: "🛒 Электронная коммерция", ja: "🛒 EC運営", fr: "🛒 E-commerce", de: "🛒 E-Commerce" }, recommended: "MoreLogin",
    reason: { en: "Best value for managing 100+ store profiles with strong fingerprint protection.", zh: "管理 100+ 店铺配置文件的最佳性价比，指纹保护强。", ru: "Лучшее соотношение цены и качества для 100+ профилей.", ja: "100以上のプロファイル管理に最適なコストパフォーマンス。", fr: "Meilleur rapport qualité-prix pour 100+ profils.", de: "Bestes Preis-Leistungs-Verhältnis für 100+ Profile." }, browsers: ["MoreLogin", "AdsPower", "GoLogin"] },
  { scenario: { en: "📱 Social Media", zh: "📱 社媒管理", ru: "📱 Соцсети", ja: "📱 SNS管理", fr: "📱 Réseaux sociaux", de: "📱 Social Media" }, recommended: "AdsPower",
    reason: { en: "Built-in RPA automation tools make repetitive social media tasks effortless.", zh: "内置 RPA 自动化工具让重复的社媒操作变得轻松。", ru: "Встроенная RPA автоматизация для задач в соцсетях.", ja: "内蔵RPAで繰り返しのSNS作業を自動化。", fr: "L'automatisation RPA intégrée facilite les tâches répétitives.", de: "Integrierte RPA-Automatisierung für Social-Media-Aufgaben." }, browsers: ["AdsPower", "MoreLogin", "Dolphin Anty"] },
  { scenario: { en: "💻 Developers", zh: "💻 开发者", ru: "💻 Разработчики", ja: "💻 開発者", fr: "💻 Développeurs", de: "💻 Entwickler" }, recommended: "MoreLogin",
    reason: { en: "Comprehensive REST + Local API, Playwright/Selenium/Puppeteer support, and MCP integration.", zh: "完整的 REST + 本地 API，支持 Playwright/Selenium/Puppeteer 和 MCP 集成。", ru: "REST + Local API, поддержка Playwright/Selenium/Puppeteer и MCP.", ja: "REST + Local API、Playwright/Selenium/Puppeteer対応、MCP統合。", fr: "API REST + locale, support Playwright/Selenium/Puppeteer et MCP.", de: "REST + Local API, Playwright/Selenium/Puppeteer und MCP-Integration." }, browsers: ["MoreLogin", "GoLogin", "Multilogin"] },
  { scenario: { en: "🆓 Best Free Plan", zh: "🆓 最佳免费方案", ru: "🆓 Лучший бесплатный план", ja: "🆓 最高の無料プラン", fr: "🆓 Meilleur plan gratuit", de: "🆓 Bester kostenloser Plan" }, recommended: "Dolphin Anty",
    reason: { en: "10 free profiles forever — the most generous free tier.", zh: "永久 10 个免费配置 — 最慷慨的免费方案。", ru: "10 бесплатных профилей навсегда — самый щедрый бесплатный план.", ja: "永久無料10プロファイル — 最も寛大な無料プラン。", fr: "10 profils gratuits à vie — le plan gratuit le plus généreux.", de: "10 kostenlose Profile für immer — der großzügigste kostenlose Plan." }, browsers: ["Dolphin Anty", "GoLogin", "MoreLogin"] },
];

export default function CompareContent() {
  const { locale, t } = useI18n();
  const browserNames = browsers.map((b) => b.name);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{i(ui.compLabel, locale)}</span>
          <h1>{i(ui.compTitle, locale)}</h1>
          <p>{i(ui.compSub, locale).replace("{n}", String(browsers.length))}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 8 }}>{i(ui.quickOverview, locale)}</h2>
          <p className="section-subtitle" style={{ marginBottom: 32, textAlign: "left", maxWidth: "100%" }}>{i(ui.quickSub, locale)}</p>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead><tr><th>{i(ui.browser, locale)}</th><th>{i(ui.rating, locale)}</th><th>{i(ui.startPrice, locale)}</th><th>{i(ui.freePlan, locale)}</th><th>{i(ui.bestFor, locale)}</th><th></th></tr></thead>
              <tbody>
                {browsers.map((b) => (
                  <tr key={b.id}>
                    <td><div style={{ display: "flex", alignItems: "center", gap: 10 }}><div style={{ width: 32, height: 32, borderRadius: 8, background: b.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{b.name.charAt(0)}</div><strong>{b.name}</strong></div></td>
                    <td><span style={{ fontWeight: 700, color: "var(--color-cyan)" }}>⭐ {b.rating.overall}</span></td>
                    <td>{b.pricing.startingPrice}</td>
                    <td>{b.pricing.free ? <span className="check">✓ {b.pricing.freeProfiles} {i(ui.profiles, locale)}</span> : <span className="cross">✗</span>}</td>
                    <td style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{b.tagline}</td>
                    <td><Link href={`/reviews/${b.slug}`} className="card-cta" style={{ fontSize: "0.75rem", padding: "6px 12px" }}>{t.reviews.readReview}</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {comparisonCategories.map((category) => (
        <section key={category.titleKey} className="section" style={{ paddingTop: 20, paddingBottom: 20 }}>
          <div className="container">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 20 }}>{i(category.titles, locale)}</h2>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead><tr><th style={{ minWidth: 180 }}>{i(ui.feature, locale)}</th>{browserNames.map((name) => (<th key={name}>{name}</th>))}</tr></thead>
                <tbody>
                  {category.rows.map((row) => (
                    <tr key={row.label.en}>
                      <td style={{ fontWeight: 500 }}>{i(row.label, locale)}</td>
                      {row.values.map((val, idx) => (
                        <td key={idx}>{val === "✓" ? <span className="check">✓</span> : val === "✗" ? <span className="cross">✗</span> : val.startsWith("✓") ? <span className="check">{val}</span> : val.startsWith("✗") ? <span className="cross">{val}</span> : val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      <section className="section comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{i(ui.recLabel, locale)}</span>
            <h2 className="section-title">{i(ui.recTitle, locale)}</h2>
            <p className="section-subtitle">{i(ui.recSub, locale)}</p>
          </div>
          <div className="browser-grid">
            {verdicts.map((v) => (
              <div key={v.scenario.en} className="feature-card">
                <h3 className="feature-title" style={{ fontSize: "1.05rem", marginBottom: 12 }}>{i(v.scenario, locale)}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: "0.78rem", padding: "4px 10px", borderRadius: 100, background: "rgba(99,102,241,0.15)", color: "var(--color-indigo)", fontWeight: 600 }}>🏆 {v.recommended}</span>
                </div>
                <p className="feature-desc">{i(v.reason, locale)}</p>
                <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {v.browsers.map((name) => { const b = browsers.find((br) => br.name === name); return b ? (<Link key={name} href={`/reviews/${b.slug}`} className="feature-tag" style={{ cursor: "pointer" }}>{name}</Link>) : null; })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 60%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">{i(ui.ctaTitle, locale)}</h2>
          <p className="section-subtitle" style={{ marginBottom: 32 }}>{i(ui.ctaSub, locale)}</p>
          <div className="hero-actions">
            <Link href="/reviews" className="btn-primary">{i(ui.ctaBtn, locale)}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
