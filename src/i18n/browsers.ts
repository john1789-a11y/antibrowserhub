import type { Locale } from "./config";

interface BrowserI18n {
  tagline: string;
  features: string[];
}

const data: Record<string, Record<Locale, BrowserI18n>> = {
  morelogin: {
    en: {"tagline":"Enterprise-grade antidetect browser with powerful API & ML-based fingerprinting","features":["Chrome & Firefox","Local API","Cloud-phone API","2 free profiles"]},
    zh: {"tagline":"企业级指纹浏览器，强大的 API 和基于机器学习的指纹技术","features":["Chrome 与 Firefox","Local API","云手机 API","2 个免费环境"]},
    ru: {"tagline":"Корпоративный антидетект браузер с мощным API и ML-отпечатками","features":["Chrome и Firefox","Local API","API облачных телефонов","2 бесплатных профиля"]},
    ja: {"tagline":"強力なAPIとML指紋技術を持つ企業向けブラウザ","features":["Chrome・Firefox","Local API","クラウドフォン API","無料 2 プロファイル"]},
    fr: {"tagline":"Navigateur anti-détection professionnel avec API et empreintes ML","features":["Chrome et Firefox","Local API","API téléphones cloud","2 profils gratuits"]},
    de: {"tagline":"Professioneller Antidetect-Browser mit leistungsstarker API und ML-Fingerprinting","features":["Chrome und Firefox","Local API","Cloud-Smartphone-API","2 kostenlose Profile"]},
  },
  adspower: {
    en: {"tagline":"Popular antidetect browser for e-commerce & social media","features":["2 free profiles","RPA automation","Scheduled AI Agent tasks","Parallel Agents"]},
    zh: {"tagline":"电商和社交媒体领域最受欢迎的指纹浏览器","features":["2 个免费环境","RPA 自动化","AI Agent 定时任务","并行 Agent"]},
    ru: {"tagline":"Популярный антидетект для электронной коммерции и соцсетей","features":["2 бесплатных профиля","RPA-автоматизация","Задачи AI Agent по расписанию","Параллельные агенты"]},
    ja: {"tagline":"ECサイトとSNS向けの人気アンチ検出ブラウザ","features":["無料 2 プロファイル","RPA 自動化","AI Agent 定期実行","並列 Agent"]},
    fr: {"tagline":"Navigateur populaire pour l'e-commerce et les réseaux sociaux","features":["2 profils gratuits","Automatisation RPA","Tâches AI Agent planifiées","Agents parallèles"]},
    de: {"tagline":"Beliebter Antidetect-Browser für E-Commerce und Social Media","features":["2 kostenlose Profile","RPA-Automatisierung","Geplante AI-Agent-Aufgaben","Parallele Agents"]},
  },
  gologin: {
    en: {"tagline":"Cloud-based antidetect browser with web access","features":["3 free profiles","API / SDK / MCP: 100+","Cloud launch: 50+","Cookie import/export: 50+"]},
    zh: {"tagline":"基于云端的指纹浏览器，支持网页访问","features":["3 个免费环境","API / SDK / MCP：100 环境起","云端启动：50 环境起","Cookie 导入导出：50 环境起"]},
    ru: {"tagline":"Облачный антидетект браузер с веб-доступом","features":["3 бесплатных профиля","API / SDK / MCP: от 100","Облачный запуск: от 50","Импорт/экспорт cookie: от 50"]},
    ja: {"tagline":"Webアクセス可能なクラウドベースのブラウザ","features":["無料 3 プロファイル","API / SDK / MCP：100 以上","クラウド起動：50 以上","Cookie 入出力：50 以上"]},
    fr: {"tagline":"Navigateur anti-détection cloud avec accès web","features":["3 profils gratuits","API / SDK / MCP : dès 100","Lancement cloud : dès 50","Import/export cookies : dès 50"]},
    de: {"tagline":"Cloud-basierter Antidetect-Browser mit Web-Zugang","features":["3 kostenlose Profile","API / SDK / MCP: ab 100","Cloud-Start: ab 50","Cookie-Import/Export: ab 50"]},
  },
  multilogin: {
    en: {"tagline":"5 free cloud profiles","features":["5 free cloud profiles","Free plan: no API","Pro API: 50–100 RPM","Business: unlimited team seats"]},
    zh: {"tagline":"5 个免费云端环境","features":["5 个免费云端环境","免费版不含 API","Pro API：每分钟 50–100 次","Business：无限团队席位"]},
    ru: {"tagline":"5 бесплатных облачных профилей","features":["5 бесплатных облачных профилей","Бесплатный тариф без API","API Pro: 50–100 RPM","Business: места без ограничений"]},
    ja: {"tagline":"無料クラウド 5 プロファイル","features":["無料クラウド 5 プロファイル","無料版 API なし","Pro API：毎分 50–100 回","Business：席数無制限"]},
    fr: {"tagline":"5 profils cloud gratuits","features":["5 profils cloud gratuits","Forfait gratuit sans API","API Pro : 50–100 RPM","Business : sièges illimités"]},
    de: {"tagline":"5 kostenlose Cloud-Profile","features":["5 kostenlose Cloud-Profile","Gratisplan ohne API","Pro-API: 50–100 RPM","Business: unbegrenzte Plätze"]},
  },
  "dolphin-anty": {
    en: {"tagline":"Free-tier friendly browser with built-in automation","features":["5 free profiles","3 concurrent free profiles","200 monthly recreations","Starter: cloud sync"]},
    zh: {"tagline":"对免费用户友好，内置自动化功能","features":["5 个免费环境","免费版最多同时运行 3 个","每月重建 200 次","Starter：云同步"]},
    ru: {"tagline":"Браузер с щедрым бесплатным планом и автоматизацией","features":["5 бесплатных профилей","3 одновременно бесплатно","200 пересозданий в месяц","Starter: облачная синхронизация"]},
    ja: {"tagline":"無料プランが充実、自動化機能内蔵","features":["無料 5 プロファイル","無料版同時実行 3","月 200 回再作成","Starter：クラウド同期"]},
    fr: {"tagline":"Navigateur généreux en gratuit avec automatisation intégrée","features":["5 profils gratuits","3 profils simultanés gratuits","200 recréations par mois","Starter : synchronisation cloud"]},
    de: {"tagline":"Browser mit großzügigem Gratis-Plan und Automatisierung","features":["5 kostenlose Profile","3 gleichzeitig im Gratisplan","200 Neuerstellungen pro Monat","Starter: Cloud-Sync"]},
  },
  octobrowser: {
    en: {"tagline":"Clean UI, strong security with zero breach history","features":["Lite: 3 profiles","API: Base and above","2-day new-user trial","Octium 155"]},
    zh: {"tagline":"简洁界面，零数据泄露记录，安全性强","features":["Lite：3 个环境","API：Base 及以上","新用户试用 2 天","Octium 155"]},
    ru: {"tagline":"Чистый интерфейс и нулевая история утечек","features":["Lite: 3 профиля","API: от Base","Пробный период: 2 дня","Octium 155"]},
    ja: {"tagline":"クリーンなUI、データ漏洩ゼロの高セキュリティ","features":["Lite：3 プロファイル","API：Base 以上","新規ユーザー試用 2 日","Octium 155"]},
    fr: {"tagline":"Interface épurée et sécurité sans faille","features":["Lite : 3 profils","API : dès Base","Essai nouveau compte : 2 jours","Octium 155"]},
    de: {"tagline":"Saubere Oberfläche, starke Sicherheit ohne Datenlecks","features":["Lite: 3 Profile","API: ab Base","Neukunden-Test: 2 Tage","Octium 155"]},
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
