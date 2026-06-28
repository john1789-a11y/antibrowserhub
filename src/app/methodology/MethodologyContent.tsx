"use client";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useI18n } from "@/components/I18nProvider";
import { ratingMethodology } from "@/data/testing";

const ui: Record<string, Record<string, string>> = {
  label: {
    en: "Review Methodology",
    zh: "评测方法论",
    ru: "Методология обзоров",
    ja: "レビュー方法論",
    fr: "Méthodologie d'avis",
    de: "Bewertungsmethodik",
  },
  title: {
    en: "How We Rate Antidetect Browsers",
    zh: "我们如何评测指纹浏览器",
    ru: "Как мы оцениваем антидетект-браузеры",
    ja: "アンチ検出ブラウザの評価方法",
    fr: "Comment nous évaluons les navigateurs anti-détection",
    de: "Wie wir Antidetect-Browser bewerten",
  },
  subtitle: {
    en: "Our ratings combine fingerprint consistency checks, automation support, pricing, team operations, and usability. The same weighted framework is applied across every browser.",
    zh: "我们的评分综合指纹一致性检测、自动化支持、价格、团队运营和易用性。所有浏览器都使用同一套加权框架。",
    ru: "Наши оценки объединяют проверку отпечатков, автоматизацию, цены, командную работу и удобство.",
    ja: "評価は指紋の一貫性、自動化、価格、チーム運用、使いやすさを組み合わせています。",
    fr: "Nos notes combinent cohérence d'empreinte, automatisation, prix, travail d'équipe et utilisabilité.",
    de: "Unsere Bewertungen kombinieren Fingerprint-Konsistenz, Automatisierung, Preise, Teamarbeit und Nutzbarkeit.",
  },
  weightsTitle: {
    en: "Rating Weights",
    zh: "评分权重",
    ru: "Вес критериев",
    ja: "評価ウェイト",
    fr: "Pondération",
    de: "Bewertungsgewichtung",
  },
  toolsTitle: {
    en: "Testing Inputs",
    zh: "测试输入",
    ru: "Источники тестирования",
    ja: "テスト入力",
    fr: "Entrées de test",
    de: "Testgrundlagen",
  },
  updateTitle: {
    en: "Update Cadence",
    zh: "更新频率",
    ru: "Частота обновления",
    ja: "更新頻度",
    fr: "Fréquence de mise à jour",
    de: "Aktualisierungsrhythmus",
  },
  disclosureTitle: {
    en: "Affiliate Disclosure",
    zh: "联盟披露",
    ru: "Партнёрское раскрытие",
    ja: "アフィリエイト開示",
    fr: "Divulgation d'affiliation",
    de: "Affiliate-Offenlegung",
  },
  updated: {
    en: "Last updated",
    zh: "最后更新",
    ru: "Последнее обновление",
    ja: "最終更新",
    fr: "Dernière mise à jour",
    de: "Zuletzt aktualisiert",
  },
  compareBtn: {
    en: "Compare Browsers",
    zh: "对比浏览器",
    ru: "Сравнить браузеры",
    ja: "ブラウザを比較",
    fr: "Comparer les navigateurs",
    de: "Browser vergleichen",
  },
  reviewsBtn: {
    en: "Browse Reviews",
    zh: "浏览评测",
    ru: "Смотреть обзоры",
    ja: "レビューを見る",
    fr: "Parcourir les avis",
    de: "Bewertungen ansehen",
  },
};

const ix = (m: Record<string, string>, locale: string) => m[locale] || m.en;

export default function MethodologyContent() {
  const { locale } = useI18n();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[{ label: ix(ui.label, locale), href: "/methodology" }]} />
          <span className="section-label">{ix(ui.label, locale)}</span>
          <h1>{ix(ui.title, locale)}</h1>
          <p>{ix(ui.subtitle, locale)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="review-cta-box" style={{ marginBottom: 36 }}>
            <h3>{ix(ui.updateTitle, locale)}</h3>
            <p>
              {ix(ui.updated, locale)}: {ratingMethodology.lastUpdated}.{" "}
              {ratingMethodology.reviewCycle}.
            </p>
          </div>

          <div className="section-header" style={{ textAlign: "left", marginBottom: 20 }}>
            <h2 className="section-title" style={{ textAlign: "left" }}>{ix(ui.weightsTitle, locale)}</h2>
          </div>
          <div className="features-grid" style={{ marginBottom: 48 }}>
            {ratingMethodology.criteria.map((criterion) => (
              <div key={criterion.key} className="feature-card">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 56,
                    height: 32,
                    borderRadius: 8,
                    background: "rgba(99,102,241,0.15)",
                    color: "var(--color-indigo)",
                    fontWeight: 800,
                    marginBottom: 14,
                  }}
                >
                  {criterion.weight}%
                </div>
                <h3 className="feature-title">{criterion.label}</h3>
                <p className="feature-desc">{criterion.description}</p>
              </div>
            ))}
          </div>

          <div className="section-header" style={{ textAlign: "left", marginBottom: 20 }}>
            <h2 className="section-title" style={{ textAlign: "left" }}>{ix(ui.toolsTitle, locale)}</h2>
          </div>
          <div className="browser-grid" style={{ marginBottom: 48 }}>
            {ratingMethodology.tools.map((tool) => (
              <div key={tool.name} className="feature-card">
                <h3 className="feature-title">{tool.name}</h3>
                <p className="feature-desc">{tool.purpose}</p>
              </div>
            ))}
          </div>

          <div className="review-cta-box" style={{ textAlign: "center" }}>
            <h3>{ix(ui.disclosureTitle, locale)}</h3>
            <p style={{ maxWidth: 760, margin: "0 auto 24px" }}>{ratingMethodology.disclosure}</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/compare" className="btn-primary">{ix(ui.compareBtn, locale)}</Link>
              <Link href="/reviews" className="btn-secondary">{ix(ui.reviewsBtn, locale)}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

