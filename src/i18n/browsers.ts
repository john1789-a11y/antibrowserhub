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
  incogniton: {
    en: { tagline: "User-friendly antidetect browser with Selenium & Puppeteer integration", features: ["Chromium & Firefox support", "Paste-as-Human typing", "Selenium/Puppeteer integration", "10 free profiles"] },
    zh: { tagline: "用户友好的指纹浏览器，集成 Selenium 和 Puppeteer", features: ["Chromium 和 Firefox 双引擎", "仿人类粘贴输入", "Selenium/Puppeteer 集成", "10 个免费配置"] },
    ru: { tagline: "Удобный антидетект с интеграцией Selenium и Puppeteer", features: ["Chromium и Firefox", "Печать как человек", "Интеграция Selenium/Puppeteer", "10 бесплатных профилей"] },
    ja: { tagline: "Selenium/Puppeteer統合のユーザーフレンドリーなブラウザ", features: ["Chromium/Firefox対応", "人間らしいペースト入力", "Selenium/Puppeteer統合", "無料10プロファイル"] },
    fr: { tagline: "Navigateur convivial avec intégration Selenium & Puppeteer", features: ["Chromium & Firefox", "Saisie Paste-as-Human", "Intégration Selenium/Puppeteer", "10 profils gratuits"] },
    de: { tagline: "Benutzerfreundlicher Browser mit Selenium & Puppeteer Integration", features: ["Chromium & Firefox", "Paste-as-Human Eingabe", "Selenium/Puppeteer Integration", "10 kostenlose Profile"] },
  },
  kameleo: {
    en: { tagline: "Developer-focused antidetect browser with mobile emulation & Docker support", features: ["Mobile browser emulation", "Docker support", "Multi-language SDKs", "Two custom browser kernels"] },
    zh: { tagline: "面向开发者的指纹浏览器，支持移动端模拟和 Docker", features: ["移动浏览器模拟", "Docker 支持", "多语言 SDK", "两个定制浏览器内核"] },
    ru: { tagline: "Браузер для разработчиков с мобильной эмуляцией и Docker", features: ["Эмуляция мобильного браузера", "Поддержка Docker", "Мультиязычные SDK", "Два собственных ядра"] },
    ja: { tagline: "モバイルエミュレーション/Docker対応の開発者向けブラウザ", features: ["モバイルブラウザエミュレーション", "Docker対応", "多言語SDK", "2つのカスタムカーネル"] },
    fr: { tagline: "Navigateur orienté développeurs avec émulation mobile & Docker", features: ["Émulation mobile", "Support Docker", "SDK multilingues", "Deux moteurs personnalisés"] },
    de: { tagline: "Entwickler-fokussierter Browser mit Mobile-Emulation & Docker", features: ["Mobile Browser-Emulation", "Docker-Unterstützung", "Mehrsprachige SDKs", "Zwei eigene Browser-Kernel"] },
  },
  vmlogin: {
    en: { tagline: "Enterprise antidetect browser with deep fingerprint customization", features: ["50+ fingerprint parameters", "Batch profile creation", "Sub-account system", "8-language interface"] },
    zh: { tagline: "企业级指纹浏览器，深度指纹定制", features: ["50+ 指纹参数", "批量创建配置", "子账号系统", "8 语言界面"] },
    ru: { tagline: "Корпоративный антидетект с глубокой настройкой отпечатков", features: ["50+ параметров отпечатков", "Массовое создание профилей", "Система субаккаунтов", "Интерфейс на 8 языках"] },
    ja: { tagline: "深い指紋カスタマイズの企業向けブラウザ", features: ["50+指紋パラメータ", "一括プロファイル作成", "サブアカウントシステム", "8言語インターフェース"] },
    fr: { tagline: "Navigateur entreprise avec personnalisation approfondie des empreintes", features: ["50+ paramètres d'empreintes", "Création en masse", "Système de sous-comptes", "Interface en 8 langues"] },
    de: { tagline: "Enterprise-Browser mit tiefer Fingerprint-Anpassung", features: ["50+ Fingerprint-Parameter", "Massen-Profilerstellung", "Sub-Account-System", "8-Sprachen-Oberfläche"] },
  },
  undetectable: {
    en: { tagline: "Affordable antidetect browser with unlimited local profiles", features: ["Unlimited local profiles", "Real device fingerprints", "Cloud sync", "Free plan available"] },
    zh: { tagline: "实惠的指纹浏览器，无限本地配置文件", features: ["无限本地配置", "真实设备指纹", "云端同步", "提供免费计划"] },
    ru: { tagline: "Доступный антидетект с безлимитными локальными профилями", features: ["Безлимитные локальные профили", "Реальные отпечатки устройств", "Облачная синхронизация", "Бесплатный план"] },
    ja: { tagline: "無制限ローカルプロファイルの手頃なブラウザ", features: ["無制限ローカルプロファイル", "実デバイス指紋", "クラウド同期", "無料プランあり"] },
    fr: { tagline: "Navigateur abordable avec profils locaux illimités", features: ["Profils locaux illimités", "Empreintes d'appareils réels", "Sync cloud", "Plan gratuit disponible"] },
    de: { tagline: "Erschwinglicher Browser mit unbegrenzten lokalen Profilen", features: ["Unbegrenzte lokale Profile", "Echte Geräte-Fingerprints", "Cloud-Sync", "Kostenloser Plan verfügbar"] },
  },
  hidemyacc: {
    en: { tagline: "Vietnamese antidetect browser with automation and cloud sync", features: ["Built-in automation tool", "Cloud profile sync", "Chromium & Firefox", "Starting at $15/mo"] },
    zh: { tagline: "越南指纹浏览器，内置自动化和云同步", features: ["内置自动化工具", "云端配置同步", "Chromium 和 Firefox", "低至 $15/月"] },
    ru: { tagline: "Вьетнамский антидетект с автоматизацией и облачной синхронизацией", features: ["Встроенная автоматизация", "Облачная синхронизация", "Chromium и Firefox", "От $15/месяц"] },
    ja: { tagline: "自動化とクラウド同期対応のベトナム製ブラウザ", features: ["内蔵自動化ツール", "クラウドプロファイル同期", "Chromium & Firefox", "月額$15から"] },
    fr: { tagline: "Navigateur vietnamien avec automatisation et sync cloud", features: ["Outil d'automatisation intégré", "Sync cloud des profils", "Chromium & Firefox", "À partir de 15$/mois"] },
    de: { tagline: "Vietnamesischer Browser mit Automatisierung und Cloud-Sync", features: ["Integriertes Automatisierungstool", "Cloud-Profilsynchronisierung", "Chromium & Firefox", "Ab 15$/Monat"] },
  },
  lalicat: {
    en: { tagline: "Cost-effective antidetect browser for cross-border e-commerce", features: ["Encrypted storage", "E-commerce focused", "Sub-account system", "Batch operations"] },
    zh: { tagline: "性价比高的跨境电商指纹浏览器", features: ["加密存储", "电商专用", "子账号系统", "批量操作"] },
    ru: { tagline: "Экономичный антидетект для трансграничной электронной коммерции", features: ["Зашифрованное хранилище", "Для e-commerce", "Система субаккаунтов", "Пакетные операции"] },
    ja: { tagline: "越境ECに最適なコスパの良いブラウザ", features: ["暗号化ストレージ", "EC特化", "サブアカウントシステム", "一括操作"] },
    fr: { tagline: "Navigateur économique pour l'e-commerce transfrontalier", features: ["Stockage chiffré", "Axé e-commerce", "Système de sous-comptes", "Opérations en masse"] },
    de: { tagline: "Kosteneffektiver Browser für grenzüberschreitenden E-Commerce", features: ["Verschlüsselter Speicher", "E-Commerce-fokussiert", "Sub-Account-System", "Massenoperationen"] },
  },
  "marketer-browser": {
    en: { tagline: "All-in-one antidetect browser for marketers with built-in tools", features: ["Built-in marketing tools", "Pre-built workflows", "Auto-warm-up", "Quick setup"] },
    zh: { tagline: "营销人员的一体化指纹浏览器，内置工具", features: ["内置营销工具", "预建工作流", "自动预热", "快速设置"] },
    ru: { tagline: "Антидетект для маркетологов с встроенными инструментами", features: ["Встроенные маркетинг-инструменты", "Готовые сценарии", "Авто-прогрев", "Быстрая настройка"] },
    ja: { tagline: "マーケター向けオールインワンブラウザ", features: ["内蔵マーケティングツール", "プリビルトワークフロー", "自動ウォームアップ", "クイックセットアップ"] },
    fr: { tagline: "Navigateur tout-en-un pour marketeurs avec outils intégrés", features: ["Outils marketing intégrés", "Workflows prédéfinis", "Préchauffage auto", "Configuration rapide"] },
    de: { tagline: "All-in-One Browser für Marketer mit integrierten Tools", features: ["Integrierte Marketing-Tools", "Vordefinierte Workflows", "Auto-Aufwärmen", "Schnelle Einrichtung"] },
  },
};

export function getBrowserI18n(slug: string, locale: Locale): BrowserI18n | undefined {
  return data[slug]?.[locale];
}
