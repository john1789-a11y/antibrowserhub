"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import Breadcrumb from "@/components/Breadcrumb";
import {
  proxyProviders,
  allRegions,
  allProxyTypes,
  getProxyProvidersSorted,
  type ProxyProvider,
  type ProxyType,
  type Region,
} from "@/data/proxies";
import type { Locale } from "@/i18n/config";
import {
  countryTranslations,
  badgeTranslations,
  getLocalizedPricing,
  proxyHighlightTranslations,
} from "@/i18n/proxies";

const ui: Record<string, Record<string, string>> = {
  title: {
    en: "Top 50 Proxy Providers for Antidetect Browsers",
    zh: "指纹浏览器代理供应商 Top 50",
    ru: "Топ-50 прокси-провайдеров для антидетект-браузеров",
    ja: "アンチ検出ブラウザ向けプロキシプロバイダー Top 50",
    fr: "Top 50 des fournisseurs de proxies pour navigateurs anti-détection",
    de: "Top 50 Proxy-Anbieter für Antidetect-Browser",
  },
  subtitle: {
    en: "Compare residential, datacenter, ISP, and mobile proxies from 50 providers worldwide. Filter by region, type, and rating.",
    zh: "对比全球 50 家代理供应商的住宅、数据中心、ISP 和移动代理。按区域、类型和评分筛选。",
    ru: "Сравните резидентные, дата-центр, ISP и мобильные прокси от 50 провайдеров по всему миру.",
    ja: "世界50社のレジデンシャル、データセンター、ISP、モバイルプロキシを比較。",
    fr: "Comparez les proxies résidentiels, datacenter, ISP et mobiles de 50 fournisseurs dans le monde.",
    de: "Vergleichen Sie Residential-, Datacenter-, ISP- und Mobile-Proxies von 50 Anbietern weltweit.",
  },
  label: { en: "Proxy Directory", zh: "代理目录", ru: "Каталог прокси", ja: "プロキシ一覧", fr: "Annuaire Proxy", de: "Proxy-Verzeichnis" },
  all: { en: "All Regions", zh: "全部区域", ru: "Все регионы", ja: "全地域", fr: "Toutes les régions", de: "Alle Regionen" },
  allTypes: { en: "All Types", zh: "全部类型", ru: "Все типы", ja: "全タイプ", fr: "Tous les types", de: "Alle Typen" },
  sortBy: { en: "Sort by", zh: "排序", ru: "Сортировка", ja: "並び替え", fr: "Trier par", de: "Sortieren nach" },
  rating: { en: "Rating", zh: "评分", ru: "Рейтинг", ja: "評価", fr: "Note", de: "Bewertung" },
  price: { en: "Price", zh: "价格", ru: "Цена", ja: "価格", fr: "Prix", de: "Preis" },
  name: { en: "Name", zh: "名称", ru: "Имя", ja: "名前", fr: "Nom", de: "Name" },
  ipPool: { en: "IP Pool", zh: "IP 池", ru: "Пул IP", ja: "IPプール", fr: "Pool IP", de: "IP-Pool" },
  pricing: { en: "Pricing", zh: "价格", ru: "Цена", ja: "料金", fr: "Tarif", de: "Preis" },
  types: { en: "Types", zh: "类型", ru: "Типы", ja: "タイプ", fr: "Types", de: "Typen" },
  freeTrial: { en: "Free Trial", zh: "免费试用", ru: "Бесплатная версия", ja: "無料トライアル", fr: "Essai gratuit", de: "Kostenlos testen" },
  visitSite: { en: "Visit Site", zh: "访问官网", ru: "Посетить сайт", ja: "サイト訪問", fr: "Visiter le site", de: "Seite besuchen" },
  providers: { en: "providers", zh: "家供应商", ru: "провайдеров", ja: "社", fr: "fournisseurs", de: "Anbieter" },
  northAmerica: { en: "North America", zh: "北美", ru: "Северная Америка", ja: "北米", fr: "Amérique du Nord", de: "Nordamerika" },
  europe: { en: "Europe", zh: "欧洲", ru: "Европа", ja: "ヨーロッパ", fr: "Europe", de: "Europa" },
  asiaOthers: { en: "Asia & Others", zh: "亚洲及其他", ru: "Азия и другие", ja: "アジア他", fr: "Asie et autres", de: "Asien & Andere" },
  residential: { en: "Residential", zh: "住宅", ru: "Резидентные", ja: "レジデンシャル", fr: "Résidentiel", de: "Residential" },
  datacenter: { en: "Datacenter", zh: "数据中心", ru: "Дата-центр", ja: "データセンター", fr: "Datacenter", de: "Datacenter" },
  isp: { en: "ISP", zh: "ISP", ru: "ISP", ja: "ISP", fr: "ISP", de: "ISP" },
  mobile: { en: "Mobile", zh: "移动", ru: "Мобильные", ja: "モバイル", fr: "Mobile", de: "Mobil" },
  whyProxy: {
    en: "Why Do You Need a Proxy with an Antidetect Browser?",
    zh: "为什么指纹浏览器需要搭配代理？",
    ru: "Зачем нужен прокси с антидетект-браузером?",
    ja: "なぜアンチ検出ブラウザにプロキシが必要？",
    fr: "Pourquoi avez-vous besoin d'un proxy avec un navigateur anti-détection ?",
    de: "Warum brauchen Sie einen Proxy mit einem Antidetect-Browser?",
  },
  whyProxyDesc: {
    en: "An antidetect browser handles your browser fingerprint, but your IP address is equally important. Without a proxy, all your profiles share the same IP — an obvious red flag. Each profile needs its own unique IP for complete protection.",
    zh: "指纹浏览器处理你的浏览器指纹，但你的 IP 地址同样重要。不使用代理，所有配置文件共享同一个 IP — 这对任何平台来说都是明显的警示信号。每个配置文件需要独立的 IP 才能完全保护。",
    ru: "Антидетект-браузер скрывает ваш цифровой отпечаток, но IP-адрес так же важен. Без прокси все профили используют один IP — это явный красный флаг. Каждому профилю нужен уникальный IP.",
    ja: "アンチ検出ブラウザはフィンガープリントを処理しますが、IPアドレスも同様に重要です。プロキシなしでは、すべてのプロファイルが同じIPを共有します。",
    fr: "Un navigateur anti-détection gère votre empreinte, mais votre adresse IP est tout aussi importante. Sans proxy, tous vos profils partagent la même IP.",
    de: "Ein Antidetect-Browser verwaltet Ihren Fingerprint, aber Ihre IP-Adresse ist ebenso wichtig. Ohne Proxy teilen sich alle Profile dieselbe IP.",
  },
  compareBtn: { en: "Compare Antidetect Browsers →", zh: "对比指纹浏览器 →", ru: "Сравнить браузеры →", ja: "ブラウザを比較 →", fr: "Comparer les navigateurs →", de: "Browser vergleichen →" },
  fpBtn: { en: "Check Your Fingerprint →", zh: "检测你的指纹 →", ru: "Проверить отпечаток →", ja: "フィンガープリントをチェック →", fr: "Vérifier votre empreinte →", de: "Fingerprint prüfen →" },
};

const ix = (m: Record<string, string>, locale: string) => m[locale] || m.en;

const regionLabels: Record<Region, string> = {
  "North America": "northAmerica",
  "Europe": "europe",
  "Asia & Others": "asiaOthers",
};

const typeLabels: Record<ProxyType, string> = {
  residential: "residential",
  datacenter: "datacenter",
  isp: "isp",
  mobile: "mobile",
};

function ProxyCard({ provider, locale }: { provider: ProxyProvider; locale: string }) {
  const l = locale as Locale;
  const badge = provider.badge ? (badgeTranslations[provider.badge]?.[l] || provider.badge) : undefined;
  const country = countryTranslations[provider.country]?.[l] || provider.country;
  const highlight = proxyHighlightTranslations[provider.slug]?.[l] || provider.highlight;
  const pricing = getLocalizedPricing(provider.pricing, l);

  const [logoError, setLogoError] = useState(false);

  return (
    <div className="proxy-card">
      {badge && <div className="proxy-badge">{badge}</div>}
      <div className="proxy-card-header">
        {!logoError ? (
          <div className="proxy-logo-container">
            <img
              src={`/images/proxies/${provider.slug}.png`}
              alt={`${provider.name} logo`}
              className="proxy-logo-img"
              onError={() => setLogoError(true)}
            />
          </div>
        ) : (
          <div className="proxy-logo-placeholder" style={{ background: `hsl(${provider.name.charCodeAt(0) * 7 % 360}, 60%, 35%)` }}>
            {provider.name.charAt(0)}
          </div>
        )}
        <div className="proxy-card-info">
          <div className="proxy-card-name">
            {provider.countryFlag} {provider.name}
          </div>
          <div className="proxy-card-country">{country}</div>
        </div>
        <div className="proxy-card-rating">
          ⭐ {provider.rating}
        </div>
      </div>

      <p className="proxy-card-highlight">{highlight}</p>

      <div className="proxy-card-types">
        {provider.types.map((t) => (
          <span key={t} className={`proxy-type-tag proxy-type-${t}`}>
            {ix(ui[typeLabels[t]], locale)}
          </span>
        ))}
        {provider.freeTrialOrPlan && (
          <span className="proxy-type-tag proxy-type-free">🆓 {ix(ui.freeTrial, locale)}</span>
        )}
      </div>

      <div className="proxy-card-meta">
        <div className="proxy-meta-item">
          <span className="proxy-meta-label">{ix(ui.ipPool, locale)}</span>
          <span className="proxy-meta-value">{provider.ipPool}</span>
        </div>
        <div className="proxy-meta-item">
          <span className="proxy-meta-label">{ix(ui.pricing, locale)}</span>
          <span className="proxy-meta-value">{pricing}</span>
        </div>
      </div>

      <a
        href={provider.affiliateUrl || provider.website}
        target="_blank"
        rel="noopener noreferrer"
        className="proxy-card-cta"
      >
        {ix(ui.visitSite, locale)} ↗
      </a>
    </div>
  );
}

export default function ProxiesContent() {
  const { locale } = useI18n();
  const [activeRegion, setActiveRegion] = useState<"all" | Region>("all");
  const [activeType, setActiveType] = useState<"all" | ProxyType>("all");
  const [sortBy, setSortBy] = useState<"rating" | "price" | "name">("rating");

  const filtered = useMemo(() => {
    let list = [...proxyProviders];
    if (activeRegion !== "all") list = list.filter((p) => p.region === activeRegion);
    if (activeType !== "all") list = list.filter((p) => p.types.includes(activeType));
    return getProxyProvidersSorted(list, sortBy);
  }, [activeRegion, activeType, sortBy]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[{ label: ix(ui.label, locale), href: "/proxies" }]} />
          <span className="section-label">{ix(ui.label, locale)}</span>
          <h1>{ix(ui.title, locale)}</h1>
          <p>{ix(ui.subtitle, locale)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          {/* Filter Bar */}
          <div className="proxy-filters">
            <div className="proxy-filter-group">
              <button
                className={`proxy-filter-btn ${activeRegion === "all" ? "active" : ""}`}
                onClick={() => setActiveRegion("all")}
              >
                🌍 {ix(ui.all, locale)}
              </button>
              {allRegions.map((r) => (
                <button
                  key={r}
                  className={`proxy-filter-btn ${activeRegion === r ? "active" : ""}`}
                  onClick={() => setActiveRegion(r)}
                >
                  {r === "North America" ? "🇺🇸" : r === "Europe" ? "🇪🇺" : "🌏"}{" "}
                  {ix(ui[regionLabels[r]], locale)}
                </button>
              ))}
            </div>

            <div className="proxy-filter-group">
              <button
                className={`proxy-filter-btn ${activeType === "all" ? "active" : ""}`}
                onClick={() => setActiveType("all")}
              >
                {ix(ui.allTypes, locale)}
              </button>
              {allProxyTypes.map((t) => (
                <button
                  key={t.value}
                  className={`proxy-filter-btn ${activeType === t.value ? "active" : ""}`}
                  onClick={() => setActiveType(t.value)}
                >
                  {ix(ui[typeLabels[t.value]], locale)}
                </button>
              ))}
            </div>

            <div className="proxy-filter-group proxy-sort">
              <span className="proxy-sort-label">{ix(ui.sortBy, locale)}:</span>
              <select
                className="proxy-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "rating" | "price" | "name")}
              >
                <option value="rating">{ix(ui.rating, locale)}</option>
                <option value="price">{ix(ui.price, locale)}</option>
                <option value="name">{ix(ui.name, locale)}</option>
              </select>
            </div>
          </div>

          <div className="proxy-count">
            {filtered.length} {ix(ui.providers, locale)}
          </div>

          {/* Provider Grid */}
          <div className="proxy-grid">
            {filtered.map((p) => (
              <ProxyCard key={p.slug} provider={p} locale={locale} />
            ))}
          </div>

          {/* Why Proxy CTA */}
          <div className="review-cta-box" style={{ textAlign: "center", marginTop: 48 }}>
            <h3>{ix(ui.whyProxy, locale)}</h3>
            <p style={{ maxWidth: 650, margin: "0 auto 24px" }}>{ix(ui.whyProxyDesc, locale)}</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/compare" className="btn-primary">{ix(ui.compareBtn, locale)}</Link>
              <Link href="/tools/fingerprint-check" className="btn-secondary">{ix(ui.fpBtn, locale)}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
