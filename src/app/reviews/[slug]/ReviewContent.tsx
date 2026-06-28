"use client";
import Link from "next/link";
import { Browser } from "@/types";
import { browsers } from "@/data/browsers";
import { useI18n } from "@/components/I18nProvider";
import BrowserLogo from "@/components/BrowserLogo";
import ReviewTOC from "./ReviewTOC";

// Inline i18n map for review page UI labels
const ui: Record<string, Record<string, string>> = {
  overview: { en: "Overview", zh: "概览", ru: "Обзор", ja: "概要", fr: "Aperçu", de: "Überblick" },
  detailedRatings: { en: "Detailed Ratings", zh: "详细评分", ru: "Подробные рейтинги", ja: "詳細評価", fr: "Évaluations détaillées", de: "Detaillierte Bewertungen" },
  pros: { en: "✅ Pros", zh: "✅ 优点", ru: "✅ Плюсы", ja: "✅ メリット", fr: "✅ Avantages", de: "✅ Vorteile" },
  cons: { en: "❌ Cons", zh: "❌ 缺点", ru: "❌ Минусы", ja: "❌ デメリット", fr: "❌ Inconvénients", de: "❌ Nachteile" },
  inDepthReview: { en: "In-Depth Review", zh: "深度评测", ru: "Подробный обзор", ja: "詳細レビュー", fr: "Avis approfondi", de: "Detaillierter Test" },
  useCases: { en: "Best Use Cases", zh: "最佳使用场景", ru: "Лучшие варианты использования", ja: "最適なユースケース", fr: "Meilleurs cas d'utilisation", de: "Beste Anwendungsfälle" },
  keyFeatures: { en: "Key Features", zh: "核心功能", ru: "Ключевые функции", ja: "主な機能", fr: "Fonctionnalités clés", de: "Hauptfunktionen" },
  pricingPlans: { en: "Pricing Plans", zh: "价格方案", ru: "Тарифные планы", ja: "料金プラン", fr: "Plans tarifaires", de: "Preispläne" },
  whatUsersSay: { en: "What Users Say", zh: "用户评价", ru: "Отзывы пользователей", ja: "ユーザーの声", fr: "Ce que disent les utilisateurs", de: "Was Benutzer sagen" },
  faqs: { en: "Frequently Asked Questions", zh: "常见问题", ru: "Часто задаваемые вопросы", ja: "よくある質問", fr: "Questions fréquentes", de: "Häufig gestellte Fragen" },
  otherBrowsers: { en: "Other Browsers You Might Like", zh: "你可能感兴趣的其他浏览器", ru: "Другие браузеры, которые могут вас заинтересовать", ja: "おすすめの他のブラウザ", fr: "Autres navigateurs susceptibles de vous intéresser", de: "Andere Browser, die Sie interessieren könnten" },
  quickFacts: { en: "Quick Facts", zh: "快速了解", ru: "Краткие факты", ja: "概要情報", fr: "Faits rapides", de: "Kurzinfos" },
  overallRating: { en: "Overall Rating", zh: "综合评分", ru: "Общий рейтинг", ja: "総合評価", fr: "Note globale", de: "Gesamtbewertung" },
  startingPrice: { en: "Starting Price", zh: "起步价", ru: "Начальная цена", ja: "開始価格", fr: "Prix de départ", de: "Einstiegspreis" },
  freePlan: { en: "Free Plan", zh: "免费计划", ru: "Бесплатный план", ja: "無料プラン", fr: "Plan gratuit", de: "Kostenloser Plan" },
  apiSupport: { en: "API Support", zh: "API 支持", ru: "Поддержка API", ja: "APIサポート", fr: "Support API", de: "API-Unterstützung" },
  teamFeatures: { en: "Team Features", zh: "团队功能", ru: "Командные функции", ja: "チーム機能", fr: "Fonctions équipe", de: "Teamfunktionen" },
  platforms: { en: "Platforms", zh: "平台", ru: "Платформы", ja: "プラットフォーム", fr: "Plateformes", de: "Plattformen" },
  automation: { en: "Automation", zh: "自动化", ru: "Автоматизация", ja: "自動化", fr: "Automatisation", de: "Automatisierung" },
  founded: { en: "Founded", zh: "成立", ru: "Год основания", ja: "設立年", fr: "Fondé en", de: "Gegründet" },
  tryFree: { en: "Try {name} Free →", zh: "免费试用 {name} →", ru: "Попробовать {name} бесплатно →", ja: "{name} を無料で試す →", fr: "Essayer {name} gratuitement →", de: "{name} kostenlos testen →" },
  updated: { en: "Updated June 2026", zh: "更新于 2026年6月", ru: "Обновлено: июнь 2026", ja: "2026年6月更新", fr: "Mis à jour juin 2026", de: "Aktualisiert Juni 2026" },
  from: { en: "From", zh: "起步", ru: "От", ja: "から", fr: "À partir de", de: "Ab" },
  freeAvailable: { en: "Free Plan Available", zh: "有免费计划", ru: "Бесплатный план", ja: "無料プランあり", fr: "Plan gratuit", de: "Kostenloser Plan" },
  yes: { en: "Yes", zh: "是", ru: "Да", ja: "はい", fr: "Oui", de: "Ja" },
  no: { en: "No", zh: "否", ru: "Нет", ja: "いいえ", fr: "Non", de: "Nein" },
  profiles: { en: "profiles", zh: "配置文件", ru: "профилей", ja: "プロファイル", fr: "profils", de: "Profile" },
  fingerprint: { en: "Fingerprint Quality", zh: "指纹质量", ru: "Качество отпечатков", ja: "フィンガープリント品質", fr: "Qualité d'empreinte", de: "Fingerabdruck-Qualität" },
  performance: { en: "Performance", zh: "性能", ru: "Производительность", ja: "パフォーマンス", fr: "Performance", de: "Leistung" },
  usability: { en: "Usability", zh: "易用性", ru: "Удобство", ja: "使いやすさ", fr: "Ergonomie", de: "Benutzerfreundlichkeit" },
  pricingValue: { en: "Pricing Value", zh: "性价比", ru: "Цена/качество", ja: "コストパフォーマンス", fr: "Rapport qualité-prix", de: "Preis-Leistung" },
  support: { en: "Support", zh: "客户支持", ru: "Поддержка", ja: "サポート", fr: "Support", de: "Support" },
  prosConsToc: { en: "Pros & Cons", zh: "优缺点", ru: "Плюсы и минусы", ja: "メリット・デメリット", fr: "Avantages et inconvénients", de: "Vor- & Nachteile" },
  userReviews: { en: "User Reviews", zh: "用户评价", ru: "Отзывы", ja: "ユーザーレビュー", fr: "Avis utilisateurs", de: "Nutzerbewertungen" },
  faqsToc: { en: "FAQs", zh: "常见问题", ru: "FAQ", ja: "FAQ", fr: "FAQ", de: "FAQ" },
  review: { en: "Review", zh: "评测", ru: "Обзор", ja: "レビュー", fr: "Avis", de: "Bewertung" },
  toc: { en: "Table of Contents", zh: "目录", ru: "Содержание", ja: "目次", fr: "Sommaire", de: "Inhaltsverzeichnis" },
};

interface ReviewContentProps {
  browser: Browser;
}

export default function ReviewContent({ browser }: ReviewContentProps) {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;

  const ratingCategories = [
    { label: i(ui.fingerprint), value: browser.rating.fingerprint },
    { label: i(ui.performance), value: browser.rating.performance },
    { label: i(ui.usability), value: browser.rating.usability },
    { label: i(ui.pricingValue), value: browser.rating.pricing },
    { label: i(ui.support), value: browser.rating.support },
  ];

  const otherBrowsers = browsers.filter((b) => b.id !== browser.id).slice(0, 3);

  const tocSections = [
    { id: "overview", label: i(ui.overview) },
    { id: "ratings", label: i(ui.detailedRatings) },
    { id: "pros-cons", label: i(ui.prosConsToc) },
    ...(browser.reviewContent ? [{ id: "review", label: i(ui.inDepthReview) }] : []),
    ...(browser.useCases ? [{ id: "use-cases", label: i(ui.useCases) }] : []),
    { id: "features", label: i(ui.keyFeatures) },
    { id: "pricing", label: i(ui.pricingPlans) },
    ...(browser.testimonials ? [{ id: "testimonials", label: i(ui.userReviews) }] : []),
    ...(browser.faqs ? [{ id: "faqs", label: i(ui.faqsToc) }] : []),
  ];

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="review-content-grid">
          <div className="review-main">
            {/* Overview */}
            <h2 id="overview">{i(ui.overview)}</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: 32, lineHeight: 1.8 }}>
              {browser.description}
            </p>

            {/* Detailed Ratings */}
            <h2 id="ratings">{i(ui.detailedRatings)}</h2>
            <div className="rating-bars">
              {ratingCategories.map((cat) => (
                <div key={cat.label} className="rating-bar-item">
                  <div className="rating-bar-header">
                    <span className="rating-bar-label">{cat.label}</span>
                    <span className="rating-bar-value">{cat.value}/5</span>
                  </div>
                  <div className="rating-bar-track">
                    <div className="rating-bar-fill" style={{ width: `${(cat.value / 5) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Pros & Cons */}
            <div id="pros-cons" className="pros-cons">
              <div className="pros-list">
                <h3>{i(ui.pros)}</h3>
                <ul>
                  {browser.pros.map((p) => (<li key={p}>👍 {p}</li>))}
                </ul>
              </div>
              <div className="cons-list">
                <h3>{i(ui.cons)}</h3>
                <ul>
                  {browser.cons.map((c) => (<li key={c}>👎 {c}</li>))}
                </ul>
              </div>
            </div>

            {/* In-Depth Review Sections */}
            {browser.reviewContent && browser.reviewContent.length > 0 && (
              <>
                <h2 id="review" style={{ marginTop: 48 }}>{i(ui.inDepthReview)}</h2>
                {browser.reviewContent.map((section) => (
                  <div key={section.title} className="review-section">
                    <h3>{section.title}</h3>
                    <div className="review-section-content">
                      {section.content.split("\n\n").map((paragraph, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{
                          __html: paragraph
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(/\n- /g, "<br/>• ")
                            .replace(/\n/g, "<br/>")
                        }} />
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Use Cases */}
            {browser.useCases && browser.useCases.length > 0 && (
              <>
                <h2 id="use-cases" style={{ marginTop: 48 }}>{i(ui.useCases)}</h2>
                <div className="use-cases-grid">
                  {browser.useCases.map((uc) => (
                    <div key={uc} className="use-case-item">
                      <span className="use-case-icon">🎯</span>
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Key Features */}
            <h2 id="features" style={{ marginTop: 48 }}>{i(ui.keyFeatures)}</h2>
            <div className="features-list">
              {browser.features.map((f) => (
                <div key={f} className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Pricing Plans */}
            <h2 id="pricing" style={{ marginTop: 48 }}>{i(ui.pricingPlans)}</h2>
            <div className="pricing-grid">
              {browser.pricing.plans.map((plan) => (
                <div key={plan.name} className="pricing-card">
                  <h3>{plan.name}</h3>
                  <div className="pricing-card-price">{plan.price}</div>
                  <div className="pricing-card-profiles">{plan.profiles}</div>
                  <ul>
                    {plan.features.map((f) => (<li key={f}>{f}</li>))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            {browser.testimonials && browser.testimonials.length > 0 && (
              <>
                <h2 id="testimonials" style={{ marginTop: 48 }}>{i(ui.whatUsersSay)}</h2>
                <div className="testimonials-grid">
                  {browser.testimonials.map((t) => (
                    <div key={t.name} className="testimonial-card">
                      <div className="testimonial-quote">&ldquo;{t.text}&rdquo;</div>
                      <div className="testimonial-author">
                        <div className="testimonial-avatar" style={{ background: browser.color }}>
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div className="testimonial-name">{t.name}</div>
                          <div className="testimonial-role">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* FAQ */}
            {browser.faqs && browser.faqs.length > 0 && (
              <>
                <h2 id="faqs" style={{ marginTop: 48 }}>{i(ui.faqs)}</h2>
                <div className="faq-list">
                  {browser.faqs.map((faq) => (
                    <details key={faq.question} className="faq-item">
                      <summary className="faq-question">{faq.question}</summary>
                      <div className="faq-answer">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </>
            )}

            {/* Other Browsers */}
            <h2 style={{ marginTop: 48 }}>{i(ui.otherBrowsers)}</h2>
            <div className="browser-grid" style={{ marginTop: 20 }}>
              {otherBrowsers.map((b) => (
                <Link key={b.id} href={`/reviews/${b.slug}`} className="feature-card" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <BrowserLogo slug={b.slug} name={b.name} color={b.color} size={40} />
                    <div>
                      <h3 className="feature-title" style={{ marginBottom: 0 }}>{b.name}</h3>
                      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>⭐ {b.rating.overall}/5</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="review-sidebar">
            <div className="sidebar-card">
              <h3>{i(ui.quickFacts)}</h3>
              <div className="sidebar-item">
                <span className="sidebar-item-label">{i(ui.overallRating)}</span>
                <span className="sidebar-item-value">⭐ {browser.rating.overall}/5</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-item-label">{i(ui.startingPrice)}</span>
                <span className="sidebar-item-value">{browser.pricing.startingPrice}</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-item-label">{i(ui.freePlan)}</span>
                <span className="sidebar-item-value">{browser.pricing.free ? `✓ ${browser.pricing.freeProfiles} ${i(ui.profiles)}` : `✗ ${i(ui.no)}`}</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-item-label">{i(ui.apiSupport)}</span>
                <span className="sidebar-item-value">{browser.hasAPI ? `✓ ${i(ui.yes)}` : `✗ ${i(ui.no)}`}</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-item-label">{i(ui.teamFeatures)}</span>
                <span className="sidebar-item-value">{browser.hasTeamFeatures ? `✓ ${i(ui.yes)}` : `✗ ${i(ui.no)}`}</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-item-label">{i(ui.platforms)}</span>
                <span className="sidebar-item-value" style={{ textTransform: "capitalize" }}>{browser.platforms.join(", ")}</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-item-label">{i(ui.automation)}</span>
                <span className="sidebar-item-value" style={{ fontSize: "0.78rem" }}>{browser.automationSupport.join(", ")}</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-item-label">{i(ui.founded)}</span>
                <span className="sidebar-item-value">{browser.foundedYear}</span>
              </div>
              <a href={browser.affiliateUrl} target="_blank" rel="noopener noreferrer" className="sidebar-cta">
                {i(ui.tryFree).replace("{name}", browser.name)}
              </a>
            </div>

            {/* Table of Contents */}
            <ReviewTOC sections={tocSections} title={i(ui.toc)} />
          </aside>
        </div>
      </div>
    </section>
  );
}
