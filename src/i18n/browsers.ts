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
    en: {"tagline":"Cloud-based antidetect browser with web access","features":["3 free profiles","25 creations per calendar month","REST API: Professional","One cloud session on Professional"]},
    zh: {"tagline":"基于云端的指纹浏览器，支持网页访问","features":["3 个免费环境","每个自然月最多创建 25 次","REST API：Professional 起","Professional 含 1 个云端会话"]},
    ru: {"tagline":"Облачный антидетект браузер с веб-доступом","features":["3 бесплатных профиля","25 созданий за календарный месяц","REST API: с Professional","Одна облачная сессия на Professional"]},
    ja: {"tagline":"Webアクセス可能なクラウドベースのブラウザ","features":["無料 3 プロファイル","暦月あたり作成 25 回","REST API は Professional から","Professional はクラウド 1 セッション"]},
    fr: {"tagline":"Navigateur anti-détection cloud avec accès web","features":["3 profils gratuits","25 créations par mois civil","API REST dès Professional","Une session cloud sur Professional"]},
    de: {"tagline":"Cloud-basierter Antidetect-Browser mit Web-Zugang","features":["3 kostenlose Profile","25 Neuerstellungen pro Kalendermonat","REST-API ab Professional","Eine Cloud-Sitzung bei Professional"]},
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
    en: { tagline: "Browser with a free plan and paid automation options", features: ["Up to 3 free profiles for new accounts", "Run 3 profiles simultaneously", "Up to 20 profile creations per calendar month", "Starter: cloud sync"] },
    zh: { tagline: "提供免费方案及付费自动化选项", features: ["新注册账号最多 3 个免费环境", "最多同时运行 3 个环境", "每个自然月最多创建 20 次", "Starter：云同步"] },
    ru: { tagline: "Браузер с бесплатным планом и платными функциями автоматизации", features: ["До 3 бесплатных профилей для новых аккаунтов", "До 3 профилей одновременно", "До 20 созданий за календарный месяц", "Starter: облачная синхронизация"] },
    ja: { tagline: "無料プランと有料の自動化オプションがあるブラウザ", features: ["新規アカウントは無料で最大 3 プロファイル", "最大 3 プロファイルを同時実行", "暦月あたり最大 20 回作成", "Starter：クラウド同期"] },
    fr: { tagline: "Navigateur avec formule gratuite et options d’automatisation payantes", features: ["Jusqu’à 3 profils gratuits pour les nouveaux comptes", "Jusqu’à 3 profils actifs simultanément", "Jusqu’à 20 créations par mois civil", "Starter : synchronisation cloud"] },
    de: { tagline: "Browser mit Gratisplan und kostenpflichtigen Automatisierungsoptionen", features: ["Bis zu 3 kostenlose Profile für neue Konten", "Bis zu 3 Profile gleichzeitig", "Bis zu 20 Profilerstellungen pro Kalendermonat", "Starter: Cloud-Sync"] },
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
    en: { tagline: "User-friendly antidetect browser with Selenium & Puppeteer integration", features: ["10 profiles for the first two months, then 3", "Free built-in proxies", "Selenium/Puppeteer and REST API from Entrepreneur"] },
    zh: { tagline: "用户友好的指纹浏览器，集成 Selenium 和 Puppeteer", features: ["前两个月 10 个环境，之后 3 个", "免费内置代理", "Entrepreneur 起支持 Selenium/Puppeteer 和 REST API"] },
    ru: { tagline: "Удобный антидетект с интеграцией Selenium и Puppeteer", features: ["10 профилей первые два месяца, затем 3", "Бесплатные встроенные прокси", "Selenium/Puppeteer и REST API с Entrepreneur"] },
    ja: { tagline: "Selenium/Puppeteer統合のユーザーフレンドリーなブラウザ", features: ["最初の2か月は10プロファイル、その後は3", "無料の内蔵プロキシ", "Selenium/Puppeteer・REST API は Entrepreneur 以上"] },
    fr: { tagline: "Navigateur convivial avec intégration Selenium & Puppeteer", features: ["10 profils les deux premiers mois, puis 3", "Proxys intégrés gratuits", "Selenium/Puppeteer et API REST à partir d’Entrepreneur"] },
    de: { tagline: "Benutzerfreundlicher Browser mit Selenium & Puppeteer Integration", features: ["10 Profile in den ersten zwei Monaten, danach 3", "Kostenlose integrierte Proxys", "Selenium/Puppeteer und REST-API ab Entrepreneur"] },
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
    en: { tagline: "Unlimited local profiles on paid plans", features: ["Unlimited local profiles on paid plans", "Real device fingerprints", "Cloud sync", "Free plan available"] },
    zh: { tagline: "付费方案提供无限本地环境", features: ["付费方案提供无限本地环境", "真实设备指纹", "云端同步", "提供免费计划"] },
    ru: { tagline: "Безлимитные локальные профили на платных тарифах", features: ["Безлимитные локальные профили на платных тарифах", "Реальные отпечатки устройств", "Облачная синхронизация", "Бесплатный план"] },
    ja: { tagline: "有料プランでローカルプロファイル無制限", features: ["有料プランでローカルプロファイル無制限", "実デバイス指紋", "クラウド同期", "無料プランあり"] },
    fr: { tagline: "Profils locaux illimités avec les forfaits payants", features: ["Profils locaux illimités avec les forfaits payants", "Empreintes d'appareils réels", "Sync cloud", "Plan gratuit disponible"] },
    de: { tagline: "Unbegrenzte lokale Profile in Bezahltarifen", features: ["Unbegrenzte lokale Profile in Bezahltarifen", "Echte Geräte-Fingerprints", "Cloud-Sync", "Kostenloser Plan verfügbar"] },
  },
  hidemyacc: {
    en: { tagline: "Vietnamese antidetect browser with automation and cloud sync", features: ["Built-in automation tool", "Cloud profile sync", "Chromium & Firefox", "Starting at $10/mo"] },
    zh: { tagline: "越南指纹浏览器，内置自动化和云同步", features: ["内置自动化工具", "云端配置同步", "Chromium 和 Firefox", "低至 $10/月"] },
    ru: { tagline: "Вьетнамский антидетект с автоматизацией и облачной синхронизацией", features: ["Встроенная автоматизация", "Облачная синхронизация", "Chromium и Firefox", "От $10/месяц"] },
    ja: { tagline: "自動化とクラウド同期対応のベトナム製ブラウザ", features: ["内蔵自動化ツール", "クラウドプロファイル同期", "Chromium & Firefox", "月額$10から"] },
    fr: { tagline: "Navigateur vietnamien avec automatisation et sync cloud", features: ["Outil d'automatisation intégré", "Sync cloud des profils", "Chromium & Firefox", "À partir de 10$/mois"] },
    de: { tagline: "Vietnamesischer Browser mit Automatisierung und Cloud-Sync", features: ["Integriertes Automatisierungstool", "Cloud-Profilsynchronisierung", "Chromium & Firefox", "Ab 10$/Monat"] },
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
