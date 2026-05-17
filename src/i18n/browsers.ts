import type { Locale } from "./config";

interface BrowserI18n {
  tagline: string;
  features: string[];
}

const data: Record<string, Record<Locale, BrowserI18n>> = {
  morelogin: {
    en: { tagline: "Enterprise-grade antidetect browser with powerful API & ML-based fingerprinting", features: ["Next-Gen ML Canvas Fingerprinting", "Six-Layer Data Encryption", "Chromium & Firefox Dual Kernels", "Window Synchronizer"] },
    zh: { tagline: "企业级指纹浏览器，强大的 API 和基于机器学习的指纹技术", features: ["新一代 ML Canvas 指纹", "六层数据加密", "Chromium 和 Firefox 双内核", "窗口同步器"] },
    ru: { tagline: "Корпоративный антидетект браузер с мощным API и ML-отпечатками", features: ["ML Canvas отпечатки", "Шестиуровневое шифрование", "Двойные ядра Chromium/Firefox", "Синхронизатор окон"] },
    ja: { tagline: "強力なAPIとML指紋技術を持つ企業向けブラウザ", features: ["ML Canvas指紋技術", "6層データ暗号化", "Chromium/Firefoxデュアルカーネル", "ウィンドウシンクロナイザー"] },
    fr: { tagline: "Navigateur anti-détection professionnel avec API et empreintes ML", features: ["Empreintes Canvas ML", "Chiffrement six couches", "Double noyau Chromium/Firefox", "Synchroniseur de fenêtres"] },
    de: { tagline: "Professioneller Antidetect-Browser mit leistungsstarker API und ML-Fingerprinting", features: ["ML Canvas Fingerprinting", "Sechs-Schicht-Verschlüsselung", "Chromium/Firefox Dual-Kernel", "Fenster-Synchronisierer"] },
  },
  adspower: {
    en: { tagline: "Popular antidetect browser for e-commerce & social media", features: ["SunBrowser & FlowerBrowser dual engine", "Built-in RPA Automation", "Multi-Windows Synchronizer", "Local API integration"] },
    zh: { tagline: "电商和社交媒体领域最受欢迎的指纹浏览器", features: ["SunBrowser/FlowerBrowser 双引擎", "内置 RPA 自动化", "多窗口同步器", "本地 API 集成"] },
    ru: { tagline: "Популярный антидетект для электронной коммерции и соцсетей", features: ["Двойной движок SunBrowser/FlowerBrowser", "Встроенная RPA автоматизация", "Синхронизатор окон", "Локальная API интеграция"] },
    ja: { tagline: "ECサイトとSNS向けの人気アンチ検出ブラウザ", features: ["SunBrowser/FlowerBrowserデュアルエンジン", "内蔵RPA自動化", "マルチウィンドウシンクロナイザー", "ローカルAPI統合"] },
    fr: { tagline: "Navigateur populaire pour l'e-commerce et les réseaux sociaux", features: ["Double moteur SunBrowser/FlowerBrowser", "Automatisation RPA intégrée", "Synchroniseur multi-fenêtres", "Intégration API locale"] },
    de: { tagline: "Beliebter Antidetect-Browser für E-Commerce und Social Media", features: ["SunBrowser/FlowerBrowser Dual-Engine", "Integrierte RPA-Automatisierung", "Multi-Fenster-Synchronisierer", "Lokale API-Integration"] },
  },
  gologin: {
    en: { tagline: "Cloud-based antidetect browser with web access", features: ["Cloud-Based Web Access", "Orbita Browser Engine", "REST API", "Android App"] },
    zh: { tagline: "基于云端的指纹浏览器，支持网页访问", features: ["云端网页访问", "Orbita 浏览器引擎", "REST API 接口", "安卓移动端应用"] },
    ru: { tagline: "Облачный антидетект браузер с веб-доступом", features: ["Облачный веб-доступ", "Движок Orbita", "REST API", "Android приложение"] },
    ja: { tagline: "Webアクセス可能なクラウドベースのブラウザ", features: ["クラウドWebアクセス", "Orbitaブラウザエンジン", "REST API", "Androidアプリ"] },
    fr: { tagline: "Navigateur anti-détection cloud avec accès web", features: ["Accès web cloud", "Moteur Orbita", "API REST", "Application Android"] },
    de: { tagline: "Cloud-basierter Antidetect-Browser mit Web-Zugang", features: ["Cloud-Web-Zugang", "Orbita Browser-Engine", "REST API", "Android-App"] },
  },
  multilogin: {
    en: { tagline: "The industry pioneer with the strongest fingerprint technology", features: ["Mimic + Stealthfox dual engine", "Advanced fingerprint spoofing", "Enterprise team management", "REST API integration"] },
    zh: { tagline: "行业先驱，拥有最强大的指纹技术", features: ["Mimic + Stealthfox 双引擎", "高级指纹伪装", "企业级团队管理", "REST API 集成"] },
    ru: { tagline: "Пионер индустрии с сильнейшей технологией отпечатков", features: ["Двойной движок Mimic/Stealthfox", "Продвинутый спуфинг отпечатков", "Командное управление", "REST API интеграция"] },
    ja: { tagline: "最強の指紋技術を持つ業界のパイオニア", features: ["Mimic + Stealthfoxデュアルエンジン", "高度な指紋偽装", "エンタープライズチーム管理", "REST API統合"] },
    fr: { tagline: "Le pionnier avec la technologie d'empreintes la plus avancée", features: ["Double moteur Mimic/Stealthfox", "Spoofing avancé", "Gestion d'équipe entreprise", "Intégration API REST"] },
    de: { tagline: "Branchenpionier mit stärkster Fingerprint-Technologie", features: ["Mimic + Stealthfox Dual-Engine", "Erweitertes Fingerprint-Spoofing", "Enterprise Team-Management", "REST API-Integration"] },
  },
  "dolphin-anty": {
    en: { tagline: "Free-tier friendly browser with built-in automation", features: ["10 free profiles forever", "Cookie Robot", "No-code Scenarios", "Selenium & Puppeteer support"] },
    zh: { tagline: "对免费用户友好，内置自动化功能", features: ["永久 10 个免费配置", "Cookie 机器人", "无代码自动化方案", "Selenium 和 Puppeteer 支持"] },
    ru: { tagline: "Браузер с щедрым бесплатным планом и автоматизацией", features: ["10 бесплатных профилей навсегда", "Cookie Robot", "Сценарии без кода", "Поддержка Selenium/Puppeteer"] },
    ja: { tagline: "無料プランが充実、自動化機能内蔵", features: ["永久無料10プロファイル", "Cookie Robot", "ノーコード自動化", "Selenium/Puppeteer対応"] },
    fr: { tagline: "Navigateur généreux en gratuit avec automatisation intégrée", features: ["10 profils gratuits à vie", "Cookie Robot", "Scénarios no-code", "Support Selenium/Puppeteer"] },
    de: { tagline: "Browser mit großzügigem Gratis-Plan und Automatisierung", features: ["10 kostenlose Profile für immer", "Cookie Robot", "No-Code Szenarien", "Selenium/Puppeteer Support"] },
  },
  octobrowser: {
    en: { tagline: "Clean UI, strong security with zero breach history", features: ["Auto fingerprint mode", "Zero data breaches", "Clean modern interface", "Multiple proxy providers"] },
    zh: { tagline: "简洁界面，零数据泄露记录，安全性强", features: ["自动指纹模式", "零数据泄露", "简洁现代界面", "多代理供应商"] },
    ru: { tagline: "Чистый интерфейс и нулевая история утечек", features: ["Авто режим отпечатков", "Ноль утечек данных", "Современный интерфейс", "Несколько провайдеров прокси"] },
    ja: { tagline: "クリーンなUI、データ漏洩ゼロの高セキュリティ", features: ["自動フィンガープリントモード", "データ漏洩ゼロ", "モダンなインターフェース", "複数プロキシプロバイダー"] },
    fr: { tagline: "Interface épurée et sécurité sans faille", features: ["Mode empreinte auto", "Zéro fuite de données", "Interface moderne", "Multiples fournisseurs proxy"] },
    de: { tagline: "Saubere Oberfläche, starke Sicherheit ohne Datenlecks", features: ["Auto-Fingerprint-Modus", "Null Datenlecks", "Moderne Benutzeroberfläche", "Mehrere Proxy-Anbieter"] },
  },
};

export function getBrowserI18n(slug: string, locale: Locale): BrowserI18n | undefined {
  return data[slug]?.[locale];
}
