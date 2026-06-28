"use client";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import Breadcrumb from "@/components/Breadcrumb";
import BrowserLogo from "@/components/BrowserLogo";
import type { UseCase } from "@/data/useCases";
import type { Browser } from "@/types";

const ui: Record<string, Record<string, string>> = {
  bestFor: { en: "Best For", zh: "最佳推荐", ru: "Лучшие для", ja: "ベスト", fr: "Meilleur pour", de: "Beste für" },
  whyNeed: { en: "Why You Need an Antidetect Browser", zh: "为什么需要指纹浏览器", ru: "Зачем нужен антидетект-браузер", ja: "アンチ検出ブラウザが必要な理由", fr: "Pourquoi un navigateur anti-détection", de: "Warum ein Antidetect-Browser" },
  keyCriteria: { en: "Key Evaluation Criteria", zh: "关键评估标准", ru: "Ключевые критерии", ja: "主要評価基準", fr: "Critères clés", de: "Wichtige Kriterien" },
  topPicks: { en: "Our Top Picks", zh: "我们的首选", ru: "Наш выбор", ja: "おすすめ", fr: "Nos meilleurs choix", de: "Unsere Top-Auswahl" },
  proTips: { en: "Pro Tips", zh: "专业建议", ru: "Советы профессионалов", ja: "プロのヒント", fr: "Conseils de pro", de: "Profi-Tipps" },
  faqTitle: { en: "Frequently Asked Questions", zh: "常见问题", ru: "Часто задаваемые вопросы", ja: "よくある質問", fr: "Questions fréquentes", de: "Häufig gestellte Fragen" },
  readReview: { en: "Read Full Review →", zh: "阅读完整评测 →", ru: "Читать обзор →", ja: "レビューを読む →", fr: "Lire l'avis complet →", de: "Vollständige Bewertung →" },
  visitSite: { en: "Visit Website", zh: "访问官网", ru: "Посетить сайт", ja: "サイトを訪問", fr: "Visiter le site", de: "Website besuchen" },
  rating: { en: "Rating", zh: "评分", ru: "Рейтинг", ja: "評価", fr: "Note", de: "Bewertung" },
  from: { en: "From", zh: "起步价", ru: "От", ja: "から", fr: "À partir de", de: "Ab" },
  freePlan: { en: "Free plan available", zh: "有免费计划", ru: "Бесплатный план", ja: "無料プランあり", fr: "Plan gratuit disponible", de: "Kostenloser Plan verfügbar" },
  pros: { en: "Pros", zh: "优点", ru: "Плюсы", ja: "メリット", fr: "Avantages", de: "Vorteile" },
  cons: { en: "Cons", zh: "缺点", ru: "Минусы", ja: "デメリット", fr: "Inconvénients", de: "Nachteile" },
  ctaTitle: { en: "Ready to Get Started?", zh: "准备开始了吗？", ru: "Готовы начать?", ja: "始める準備はできましたか？", fr: "Prêt à commencer ?", de: "Bereit loszulegen?" },
  ctaSub: { en: "Check our detailed reviews for in-depth analysis of each browser.", zh: "查看我们的详细评测，深入分析每个浏览器。", ru: "Ознакомьтесь с детальными обзорами каждого браузера.", ja: "各ブラウザの詳細分析はレビューをご覧ください。", fr: "Consultez nos avis détaillés pour une analyse approfondie.", de: "Sehen Sie sich unsere detaillierten Bewertungen für eine eingehende Analyse an." },
  allReviews: { en: "Browse All Reviews →", zh: "浏览所有评测 →", ru: "Все обзоры →", ja: "すべてのレビュー →", fr: "Voir tous les avis →", de: "Alle Bewertungen →" },
  allUseCases: { en: "All Use Cases →", zh: "所有使用场景 →", ru: "Все варианты →", ja: "すべてのユースケース →", fr: "Tous les cas d'usage →", de: "Alle Anwendungsfälle →" },
  rank: { en: "#", zh: "#", ru: "#", ja: "#", fr: "#", de: "#" },
};

interface BestForContentProps {
  useCase: UseCase;
  browsers: Browser[];
}

export default function BestForContent({ useCase, browsers }: BestForContentProps) {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[
            { label: i(ui.bestFor), href: "/best-for" },
            { label: i(useCase.heroTitle), href: `/best-for/${useCase.slug}` },
          ]} />
          <span className="section-label">{useCase.icon} {i(ui.bestFor)}</span>
          <h1>{i(useCase.heroTitle)}</h1>
          <p>{i(useCase.heroSub)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 900 }}>

          {/* Why you need */}
          <div className="bestfor-block">
            <h2>{i(ui.whyNeed)}</h2>
            <p className="bestfor-intro">{i(useCase.intro)}</p>
          </div>

          {/* Key criteria */}
          <div className="bestfor-block">
            <h2>{i(ui.keyCriteria)}</h2>
            <div className="bestfor-criteria">
              {useCase.criteria.map((c) => (
                <div key={c} className="bestfor-criteria-item">
                  <span className="bestfor-criteria-check">✓</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top picks */}
          <div className="bestfor-block">
            <h2>{i(ui.topPicks)}</h2>
            <div className="bestfor-rankings">
              {browsers.map((b, idx) => (
                <div key={b.slug} className="bestfor-rank-card">
                  <div className="bestfor-rank-badge" style={{ background: idx === 0 ? "var(--gradient-primary)" : undefined }}>
                    {idx + 1}
                  </div>
                  <div className="bestfor-rank-header">
                    <BrowserLogo slug={b.slug} name={b.name} color={b.color} size={48} />
                    <div className="bestfor-rank-info">
                      <h3>{b.name}</h3>
                      <div className="bestfor-rank-meta">
                        <span>⭐ {b.rating.overall}/5</span>
                        <span>💰 {i(ui.from)} {b.pricing.startingPrice}</span>
                        {b.pricing.free && <span className="bestfor-free-badge">🆓 {i(ui.freePlan)}</span>}
                      </div>
                    </div>
                  </div>
                  <p className="bestfor-rank-tagline">{b.tagline}</p>
                  <div className="bestfor-rank-proscons">
                    <div className="bestfor-rank-pros">
                      <strong>{i(ui.pros)}</strong>
                      <ul>{b.pros.slice(0, 3).map((p) => <li key={p}>{p}</li>)}</ul>
                    </div>
                    <div className="bestfor-rank-cons">
                      <strong>{i(ui.cons)}</strong>
                      <ul>{b.cons.slice(0, 2).map((c) => <li key={c}>{c}</li>)}</ul>
                    </div>
                  </div>
                  <div className="bestfor-rank-actions">
                    <Link href={`/reviews/${b.slug}`} className="btn-secondary">{i(ui.readReview)}</Link>
                    <a href={b.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">{i(ui.visitSite)} ↗</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips */}
          {useCase.tips[locale as keyof typeof useCase.tips]?.length > 0 && (
            <div className="bestfor-block">
              <h2>💡 {i(ui.proTips)}</h2>
              <div className="bestfor-tips">
                {(useCase.tips[locale as keyof typeof useCase.tips] || useCase.tips.en).map((tip, idx) => (
                  <div key={idx} className="bestfor-tip">
                    <span className="bestfor-tip-num">{idx + 1}</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {useCase.faqs.length > 0 && (
            <div className="bestfor-block">
              <h2>{i(ui.faqTitle)}</h2>
              <div className="faq-list">
                {useCase.faqs.map((faq, idx) => (
                  <details key={idx} className="faq-item">
                    <summary>{i(faq.q)}</summary>
                    <p>{i(faq.a)}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="review-cta-box" style={{ textAlign: "center", marginTop: 48 }}>
            <h3>{i(ui.ctaTitle)}</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: 20 }}>{i(ui.ctaSub)}</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/reviews" className="btn-primary">{i(ui.allReviews)}</Link>
              <Link href="/best-for" className="btn-secondary">{i(ui.allUseCases)}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
