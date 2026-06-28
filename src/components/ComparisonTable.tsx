"use client";
import { useState } from "react";
import { browsers } from "@/data/browsers";
import { useI18n } from "./I18nProvider";

const tableLabels: Record<string, Record<string, string>> = {
  feature: { en: "Feature", zh: "功能", ru: "Функция", ja: "機能", fr: "Fonctionnalité", de: "Funktion" },
  overallRating: { en: "Overall Rating", zh: "综合评分", ru: "Общий рейтинг", ja: "総合評価", fr: "Note globale", de: "Gesamtbewertung" },
  freePlan: { en: "Free Plan", zh: "免费计划", ru: "Бесплатный план", ja: "無料プラン", fr: "Plan gratuit", de: "Kostenloser Plan" },
  startingPrice: { en: "Starting Price", zh: "起步价", ru: "Начальная цена", ja: "開始価格", fr: "Prix de départ", de: "Startpreis" },
  apiSupport: { en: "API Support", zh: "API 支持", ru: "Поддержка API", ja: "API対応", fr: "Support API", de: "API-Unterstützung" },
  teamFeatures: { en: "Team Features", zh: "团队功能", ru: "Командные функции", ja: "チーム機能", fr: "Fonctions d'équipe", de: "Team-Funktionen" },
  cookieImport: { en: "Cookie Import", zh: "Cookie 导入", ru: "Импорт Cookie", ja: "Cookie インポート", fr: "Import Cookie", de: "Cookie-Import" },
  automation: { en: "Automation", zh: "自动化", ru: "Автоматизация", ja: "自動化", fr: "Automatisation", de: "Automatisierung" },
  platforms: { en: "Platforms", zh: "支持平台", ru: "Платформы", ja: "プラットフォーム", fr: "Plateformes", de: "Plattformen" },
  founded: { en: "Founded", zh: "成立年份", ru: "Основан", ja: "設立年", fr: "Fondé", de: "Gegründet" },
  profiles: { en: "profiles", zh: "配置", ru: "профилей", ja: "プロファイル", fr: "profils", de: "Profile" },
  showAll: { en: "Show All Browsers", zh: "显示所有浏览器", ru: "Показать все браузеры", ja: "すべて表示", fr: "Afficher tous", de: "Alle anzeigen" },
  showLess: { en: "Show Top 6 Only", zh: "仅显示前6名", ru: "Только топ-6", ja: "トップ6のみ", fr: "Top 6 seulement", de: "Nur Top 6" },
};

const DEFAULT_VISIBLE = 6;

export default function ComparisonTable() {
  const { locale } = useI18n();
  const l = (key: string) => tableLabels[key]?.[locale] || tableLabels[key]?.en || key;
  const [showAll, setShowAll] = useState(false);

  const visibleBrowsers = showAll ? browsers : browsers.slice(0, DEFAULT_VISIBLE);

  return (
    <div className="comparison-table-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>{l("feature")}</th>
            {visibleBrowsers.map((b) => (<th key={b.id}>{b.name}</th>))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{l("overallRating")}</td>
            {visibleBrowsers.map((b) => (<td key={b.id}><strong>{b.rating.overall}/5</strong></td>))}
          </tr>
          <tr>
            <td>{l("freePlan")}</td>
            {visibleBrowsers.map((b) => (
              <td key={b.id}>{b.pricing.free ? <span className="check">✓ {b.pricing.freeProfiles} {l("profiles")}</span> : <span className="cross">✗</span>}</td>
            ))}
          </tr>
          <tr>
            <td>{l("startingPrice")}</td>
            {visibleBrowsers.map((b) => (<td key={b.id}>{b.pricing.startingPrice}</td>))}
          </tr>
          <tr>
            <td>{l("apiSupport")}</td>
            {visibleBrowsers.map((b) => (<td key={b.id}>{b.hasAPI ? <span className="check">✓</span> : <span className="cross">✗</span>}</td>))}
          </tr>
          <tr>
            <td>{l("teamFeatures")}</td>
            {visibleBrowsers.map((b) => (<td key={b.id}>{b.hasTeamFeatures ? <span className="check">✓</span> : <span className="cross">✗</span>}</td>))}
          </tr>
          <tr>
            <td>{l("cookieImport")}</td>
            {visibleBrowsers.map((b) => (<td key={b.id}>{b.hasCookieImport ? <span className="check">✓</span> : <span className="cross">✗</span>}</td>))}
          </tr>
          <tr>
            <td>{l("automation")}</td>
            {visibleBrowsers.map((b) => (<td key={b.id}>{b.automationSupport.join(", ")}</td>))}
          </tr>
          <tr>
            <td>{l("platforms")}</td>
            {visibleBrowsers.map((b) => (<td key={b.id} style={{ textTransform: "capitalize" }}>{b.platforms.join(", ")}</td>))}
          </tr>
          <tr>
            <td>{l("founded")}</td>
            {visibleBrowsers.map((b) => (<td key={b.id}>{b.foundedYear}</td>))}
          </tr>
        </tbody>
      </table>
      {browsers.length > DEFAULT_VISIBLE && (
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <button
            className="btn-secondary"
            onClick={() => setShowAll(!showAll)}
            style={{ fontSize: "0.85rem", padding: "8px 20px" }}
          >
            {showAll ? l("showLess") : `${l("showAll")} (${browsers.length})`}
          </button>
        </div>
      )}
    </div>
  );
}
