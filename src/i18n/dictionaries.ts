import type { Locale } from "./config";

export interface Dictionary {
  nav: {
    reviews: string;
    compare: string;
    guides: string;
    about: string;
    getStarted: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    featuredTitle: string;
    featuredSubtitle: string;
    whyTitle: string;
    whySubtitle: string;
    viewReview: string;
    compareAll: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    readReview: string;
    free: string;
    startingAt: string;
    profiles: string;
    freeProfiles: string;
    rating: string;
  };
  compare: {
    title: string;
    subtitle: string;
  };
  guides: {
    title: string;
    subtitle: string;
    readGuide: string;
    backToGuides: string;
    onThisPage: string;
    readyTitle: string;
    readySubtitle: string;
    compareAll: string;
  };
  about: {
    title: string;
    subtitle: string;
  };
  footer: {
    description: string;
    product: string;
    resources: string;
    legal: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
  common: {
    theme: string;
    language: string;
  };
}

const en: Dictionary = {
  nav: { reviews: "Reviews", compare: "Compare", guides: "Guides", about: "About", getStarted: "Get Started →" },
  home: {
    heroTitle: "Find the Best Antidetect Browser",
    heroSubtitle: "In-depth reviews, side-by-side comparisons, and expert guides to help you choose the right antidetect browser for multi-account management.",
    heroCta: "Compare All Browsers",
    featuredTitle: "Featured Reviews",
    featuredSubtitle: "Detailed, unbiased reviews of the most popular antidetect browsers in 2026.",
    whyTitle: "Why Trust AntiBrowserHub?",
    whySubtitle: "We provide independent, data-driven reviews.",
    viewReview: "View Review",
    compareAll: "Compare All Browsers →",
  },
  reviews: {
    title: "Antidetect Browser Reviews",
    subtitle: "Detailed, unbiased reviews of every major antidetect browser. Updated for 2026.",
    readReview: "Read Review →",
    free: "Free",
    startingAt: "Starting at",
    profiles: "profiles",
    freeProfiles: "free profiles",
    rating: "Rating",
  },
  compare: { title: "Compare Antidetect Browsers", subtitle: "Side-by-side feature and pricing comparison of every major antidetect browser." },
  guides: {
    title: "Guides & Tutorials",
    subtitle: "Expert guides to help you get the most out of your antidetect browser. From setup to automation.",
    readGuide: "Read Guide →",
    backToGuides: "← Back to Guides",
    onThisPage: "On this page",
    readyTitle: "Ready to choose your antidetect browser?",
    readySubtitle: "Compare features, pricing, and performance side by side.",
    compareAll: "Compare All Browsers →",
  },
  about: { title: "About AntiBrowserHub", subtitle: "We're a team of digital privacy enthusiasts and multi-account management experts." },
  footer: {
    description: "Independent reviews and comparisons of antidetect browsers.",
    product: "Product",
    resources: "Resources",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    copyright: "AntiBrowserHub. All rights reserved.",
  },
  common: { theme: "Theme", language: "Language" },
};

const zh: Dictionary = {
  nav: { reviews: "评测", compare: "对比", guides: "教程", about: "关于", getStarted: "立即开始 →" },
  home: {
    heroTitle: "寻找最佳指纹浏览器",
    heroSubtitle: "深度评测、横向对比、专家教程，帮您选择最适合多账号管理的指纹浏览器。",
    heroCta: "对比所有浏览器",
    featuredTitle: "精选评测",
    featuredSubtitle: "2026 年最受欢迎指纹浏览器的详细、公正评测。",
    whyTitle: "为什么信任 AntiBrowserHub？",
    whySubtitle: "我们提供独立的、数据驱动的评测。",
    viewReview: "查看评测",
    compareAll: "对比所有浏览器 →",
  },
  reviews: {
    title: "指纹浏览器评测",
    subtitle: "每款主流指纹浏览器的详细、公正评测。2026 年最新更新。",
    readReview: "阅读评测 →",
    free: "免费",
    startingAt: "起步价",
    profiles: "配置文件",
    freeProfiles: "免费配置文件",
    rating: "评分",
  },
  compare: { title: "指纹浏览器对比", subtitle: "每款主流指纹浏览器的功能和价格横向对比。" },
  guides: {
    title: "教程与指南",
    subtitle: "帮助您充分利用指纹浏览器的专家教程。从设置到自动化。",
    readGuide: "阅读教程 →",
    backToGuides: "← 返回教程",
    onThisPage: "本页目录",
    readyTitle: "准备好选择您的指纹浏览器了吗？",
    readySubtitle: "横向对比功能、价格和性能。",
    compareAll: "对比所有浏览器 →",
  },
  about: { title: "关于 AntiBrowserHub", subtitle: "我们是一群数字隐私爱好者和多账号管理专家。" },
  footer: {
    description: "独立的指纹浏览器评测和对比平台。",
    product: "产品",
    resources: "资源",
    legal: "法律",
    privacy: "隐私政策",
    terms: "服务条款",
    copyright: "AntiBrowserHub. 保留所有权利。",
  },
  common: { theme: "主题", language: "语言" },
};

const ru: Dictionary = {
  nav: { reviews: "Обзоры", compare: "Сравнение", guides: "Руководства", about: "О нас", getStarted: "Начать →" },
  home: {
    heroTitle: "Найдите лучший антидетект браузер",
    heroSubtitle: "Подробные обзоры, сравнения и экспертные руководства для выбора идеального антидетект браузера.",
    heroCta: "Сравнить все браузеры",
    featuredTitle: "Избранные обзоры",
    featuredSubtitle: "Детальные, непредвзятые обзоры самых популярных антидетект браузеров 2026 года.",
    whyTitle: "Почему доверяют AntiBrowserHub?",
    whySubtitle: "Мы предоставляем независимые обзоры на основе данных.",
    viewReview: "Читать обзор",
    compareAll: "Сравнить все браузеры →",
  },
  reviews: {
    title: "Обзоры антидетект браузеров",
    subtitle: "Подробные, непредвзятые обзоры каждого крупного антидетект браузера. Обновлено на 2026 год.",
    readReview: "Читать обзор →",
    free: "Бесплатно",
    startingAt: "От",
    profiles: "профилей",
    freeProfiles: "бесплатных профилей",
    rating: "Рейтинг",
  },
  compare: { title: "Сравнение антидетект браузеров", subtitle: "Сравнение функций и цен всех основных антидетект браузеров." },
  guides: {
    title: "Руководства и обучение",
    subtitle: "Экспертные руководства для максимально эффективного использования антидетект браузера.",
    readGuide: "Читать руководство →",
    backToGuides: "← К руководствам",
    onThisPage: "На этой странице",
    readyTitle: "Готовы выбрать антидетект браузер?",
    readySubtitle: "Сравните функции, цены и производительность.",
    compareAll: "Сравнить все браузеры →",
  },
  about: { title: "О AntiBrowserHub", subtitle: "Мы — команда энтузиастов цифровой конфиденциальности и экспертов по управлению мультиаккаунтами." },
  footer: {
    description: "Независимые обзоры и сравнения антидетект браузеров.",
    product: "Продукт",
    resources: "Ресурсы",
    legal: "Правовая информация",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    copyright: "AntiBrowserHub. Все права защищены.",
  },
  common: { theme: "Тема", language: "Язык" },
};

const ja: Dictionary = {
  nav: { reviews: "レビュー", compare: "比較", guides: "ガイド", about: "概要", getStarted: "始める →" },
  home: {
    heroTitle: "最適なアンチ検出ブラウザを見つける",
    heroSubtitle: "詳細なレビュー、比較、専門家ガイドで、マルチアカウント管理に最適なアンチ検出ブラウザを選びましょう。",
    heroCta: "すべてのブラウザを比較",
    featuredTitle: "注目のレビュー",
    featuredSubtitle: "2026年の最も人気のあるアンチ検出ブラウザの詳細で公平なレビュー。",
    whyTitle: "AntiBrowserHubを信頼する理由",
    whySubtitle: "独立したデータ駆動型のレビューを提供しています。",
    viewReview: "レビューを見る",
    compareAll: "すべてのブラウザを比較 →",
  },
  reviews: {
    title: "アンチ検出ブラウザレビュー",
    subtitle: "すべての主要アンチ検出ブラウザの詳細で公平なレビュー。2026年最新版。",
    readReview: "レビューを読む →",
    free: "無料",
    startingAt: "開始価格",
    profiles: "プロファイル",
    freeProfiles: "無料プロファイル",
    rating: "評価",
  },
  compare: { title: "アンチ検出ブラウザの比較", subtitle: "主要なアンチ検出ブラウザの機能と価格の比較。" },
  guides: {
    title: "ガイド＆チュートリアル",
    subtitle: "アンチ検出ブラウザを最大限に活用するための専門家ガイド。セットアップから自動化まで。",
    readGuide: "ガイドを読む →",
    backToGuides: "← ガイド一覧へ",
    onThisPage: "このページの目次",
    readyTitle: "アンチ検出ブラウザを選ぶ準備はできましたか？",
    readySubtitle: "機能、価格、パフォーマンスを比較してください。",
    compareAll: "すべてのブラウザを比較 →",
  },
  about: { title: "AntiBrowserHubについて", subtitle: "デジタルプライバシー愛好家とマルチアカウント管理の専門家チームです。" },
  footer: {
    description: "アンチ検出ブラウザの独立レビューと比較。",
    product: "製品",
    resources: "リソース",
    legal: "法的情報",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    copyright: "AntiBrowserHub. All rights reserved.",
  },
  common: { theme: "テーマ", language: "言語" },
};

const fr: Dictionary = {
  nav: { reviews: "Avis", compare: "Comparer", guides: "Guides", about: "À propos", getStarted: "Commencer →" },
  home: {
    heroTitle: "Trouvez le meilleur navigateur anti-détection",
    heroSubtitle: "Avis approfondis, comparaisons côte à côte et guides experts pour choisir le bon navigateur anti-détection.",
    heroCta: "Comparer tous les navigateurs",
    featuredTitle: "Avis en vedette",
    featuredSubtitle: "Avis détaillés et impartiaux des navigateurs anti-détection les plus populaires en 2026.",
    whyTitle: "Pourquoi faire confiance à AntiBrowserHub ?",
    whySubtitle: "Nous fournissons des avis indépendants et basés sur des données.",
    viewReview: "Voir l'avis",
    compareAll: "Comparer tous les navigateurs →",
  },
  reviews: {
    title: "Avis sur les navigateurs anti-détection",
    subtitle: "Avis détaillés et impartiaux de chaque navigateur anti-détection majeur. Mis à jour pour 2026.",
    readReview: "Lire l'avis →",
    free: "Gratuit",
    startingAt: "À partir de",
    profiles: "profils",
    freeProfiles: "profils gratuits",
    rating: "Note",
  },
  compare: { title: "Comparer les navigateurs anti-détection", subtitle: "Comparaison des fonctionnalités et des prix de chaque navigateur anti-détection majeur." },
  guides: {
    title: "Guides & Tutoriels",
    subtitle: "Guides experts pour tirer le meilleur parti de votre navigateur anti-détection. De la configuration à l'automatisation.",
    readGuide: "Lire le guide →",
    backToGuides: "← Retour aux guides",
    onThisPage: "Sur cette page",
    readyTitle: "Prêt à choisir votre navigateur anti-détection ?",
    readySubtitle: "Comparez les fonctionnalités, les prix et les performances.",
    compareAll: "Comparer tous les navigateurs →",
  },
  about: { title: "À propos de AntiBrowserHub", subtitle: "Nous sommes une équipe de passionnés de confidentialité numérique et d'experts en gestion multi-comptes." },
  footer: {
    description: "Avis indépendants et comparaisons de navigateurs anti-détection.",
    product: "Produit",
    resources: "Ressources",
    legal: "Juridique",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    copyright: "AntiBrowserHub. Tous droits réservés.",
  },
  common: { theme: "Thème", language: "Langue" },
};

const de: Dictionary = {
  nav: { reviews: "Bewertungen", compare: "Vergleichen", guides: "Anleitungen", about: "Über uns", getStarted: "Loslegen →" },
  home: {
    heroTitle: "Finden Sie den besten Antidetect-Browser",
    heroSubtitle: "Ausführliche Bewertungen, Vergleiche und Expertenanleitungen für die Wahl des richtigen Antidetect-Browsers.",
    heroCta: "Alle Browser vergleichen",
    featuredTitle: "Ausgewählte Bewertungen",
    featuredSubtitle: "Detaillierte, unvoreingenommene Bewertungen der beliebtesten Antidetect-Browser 2026.",
    whyTitle: "Warum AntiBrowserHub vertrauen?",
    whySubtitle: "Wir bieten unabhängige, datengestützte Bewertungen.",
    viewReview: "Bewertung ansehen",
    compareAll: "Alle Browser vergleichen →",
  },
  reviews: {
    title: "Antidetect-Browser Bewertungen",
    subtitle: "Detaillierte, unvoreingenommene Bewertungen jedes großen Antidetect-Browsers. Aktualisiert für 2026.",
    readReview: "Bewertung lesen →",
    free: "Kostenlos",
    startingAt: "Ab",
    profiles: "Profile",
    freeProfiles: "kostenlose Profile",
    rating: "Bewertung",
  },
  compare: { title: "Antidetect-Browser vergleichen", subtitle: "Funktions- und Preisvergleich aller großen Antidetect-Browser." },
  guides: {
    title: "Anleitungen & Tutorials",
    subtitle: "Expertenanleitungen zur optimalen Nutzung Ihres Antidetect-Browsers. Von der Einrichtung bis zur Automatisierung.",
    readGuide: "Anleitung lesen →",
    backToGuides: "← Zurück zu Anleitungen",
    onThisPage: "Auf dieser Seite",
    readyTitle: "Bereit, Ihren Antidetect-Browser zu wählen?",
    readySubtitle: "Vergleichen Sie Funktionen, Preise und Leistung.",
    compareAll: "Alle Browser vergleichen →",
  },
  about: { title: "Über AntiBrowserHub", subtitle: "Wir sind ein Team von Datenschutz-Enthusiasten und Multi-Account-Management-Experten." },
  footer: {
    description: "Unabhängige Bewertungen und Vergleiche von Antidetect-Browsern.",
    product: "Produkt",
    resources: "Ressourcen",
    legal: "Rechtliches",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    copyright: "AntiBrowserHub. Alle Rechte vorbehalten.",
  },
  common: { theme: "Thema", language: "Sprache" },
};

const dictionaries: Record<Locale, Dictionary> = { en, zh, ru, ja, fr, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}
