import type { Locale } from "./config";

// Page-level content translations
export interface PageTexts {
  home: {
    badge: string; heroTitle1: string; heroTitle2: string; heroTitle3: string;
    heroSub: string; btnReviews: string; btnCompare: string;
    stat1: string; stat2: string; stat3: string;
    featLabel: string; featTitle: string; featSub: string;
    compLabel: string; compTitle: string; compSub: string;
    whyLabel: string; whyTitle: string; whySub: string;
    f1t: string; f1d: string; f2t: string; f2d: string;
    f3t: string; f3d: string; f4t: string; f4d: string;
    f5t: string; f5d: string; f6t: string; f6d: string;
    ctaTitle: string; ctaSub: string; ctaBtn1: string; ctaBtn2: string;
  };
  about: {
    label: string; title: string; sub: string;
    mission: string; missionText: string;
    whatWeDo: string; r1t: string; r1d: string; r2t: string; r2d: string; r3t: string; r3d: string;
    affiliate: string; affiliateText: string;
    contact: string; contactText: string;
  };
}

const en: PageTexts = {
  home: {
    badge: "Updated for 2026 — Latest Reviews",
    heroTitle1: "Find the Best", heroTitle2: "Antidetect Browser", heroTitle3: "for Your Needs",
    heroSub: "In-depth reviews, honest comparisons, and expert guides to help you choose the perfect antidetect browser for multi-account management, e-commerce, and affiliate marketing.",
    btnReviews: "📖 Browse Reviews", btnCompare: "⚖️ Compare Browsers",
    stat1: "Browsers Reviewed", stat2: "Features Compared", stat3: "Independent Reviews",
    featLabel: "Top Picks", featTitle: "Featured Antidetect Browsers",
    featSub: "Our expert team has tested and reviewed the most popular antidetect browsers on the market.",
    compLabel: "Side by Side", compTitle: "Quick Comparison",
    compSub: "See how the top antidetect browsers stack up against each other at a glance.",
    whyLabel: "Why AntiBrowserHub", whyTitle: "Your Trusted Review Resource",
    whySub: "We go beyond surface-level comparisons to bring you actionable insights.",
    f1t: "Real-World Testing", f1d: "Every browser is tested against CreepJS, BrowserLeaks, and Pixelscan to verify fingerprint effectiveness.",
    f2t: "API & Automation Guides", f2d: "Complete code examples for Playwright, Selenium, and Puppeteer integration with each browser.",
    f3t: "Pricing Breakdown", f3d: "Detailed pricing analysis including hidden costs, volume discounts, and best value recommendations.",
    f4t: "Proxy Recommendations", f4d: "Best proxy pairings for each browser with exclusive deals from trusted proxy providers.",
    f5t: "Honest Ratings", f5d: "Unbiased, data-driven ratings across fingerprint quality, performance, usability, and value.",
    f6t: "Always Up-to-Date", f6d: "Reviews are regularly updated to reflect the latest features, pricing changes, and performance improvements.",
    ctaTitle: "Ready to Find Your Perfect Browser?",
    ctaSub: "Start with our comprehensive comparison or dive into individual reviews.",
    ctaBtn1: "Compare All Browsers →", ctaBtn2: "Read Our Guides",
  },
  about: {
    label: "About", title: "About AntiBrowserHub", sub: "Your trusted resource for honest, in-depth antidetect browser reviews.",
    mission: "Our Mission", missionText: "AntiBrowserHub was created to help professionals navigate the growing landscape of antidetect browsers. With so many options available, we provide comprehensive, unbiased reviews and comparisons to help you make the right choice for your business.",
    whatWeDo: "What We Do",
    r1t: "In-Depth Reviews", r1d: "We test every browser hands-on, evaluating fingerprint quality, performance, usability, and value for money.",
    r2t: "Fair Comparisons", r2d: "Side-by-side comparisons using consistent criteria so you can easily see which browser fits your needs.",
    r3t: "Expert Guides", r3d: "Practical tutorials on proxy setup, API integration, browser automation, and fingerprint testing.",
    affiliate: "Affiliate Disclosure", affiliateText: "AntiBrowserHub participates in affiliate programs with some of the browsers and proxy services reviewed on this site. This means we may earn a commission when you sign up through our links — at no extra cost to you. Our reviews and ratings are always honest and independent, regardless of affiliate relationships.",
    contact: "Contact Us", contactText: "Have questions, suggestions, or want to partner with us?",
  },
};

const zh: PageTexts = {
  home: {
    badge: "2026 年更新 — 最新评测",
    heroTitle1: "寻找最佳", heroTitle2: "指纹浏览器", heroTitle3: "满足您的需求",
    heroSub: "深度评测、真实对比、专家教程，帮助您选择最适合多账号管理、电商运营和联盟营销的指纹浏览器。",
    btnReviews: "📖 浏览评测", btnCompare: "⚖️ 对比浏览器",
    stat1: "已评测浏览器", stat2: "对比功能项", stat3: "独立评测",
    featLabel: "精选推荐", featTitle: "精选指纹浏览器",
    featSub: "我们的专家团队已测试并评测了市场上最受欢迎的指纹浏览器。",
    compLabel: "横向对比", compTitle: "快速对比",
    compSub: "一目了然地查看各大指纹浏览器之间的差异。",
    whyLabel: "为什么选择 AntiBrowserHub", whyTitle: "您值得信赖的评测平台",
    whySub: "我们超越表面比较，为您提供可操作的深度洞察。",
    f1t: "真实场景测试", f1d: "每款浏览器都通过 CreepJS、BrowserLeaks 和 Pixelscan 进行指纹有效性测试。",
    f2t: "API 与自动化教程", f2d: "提供 Playwright、Selenium 和 Puppeteer 与每款浏览器集成的完整代码示例。",
    f3t: "价格详解", f3d: "详细的价格分析，包括隐藏成本、批量折扣和最佳性价比推荐。",
    f4t: "代理推荐", f4d: "每款浏览器最佳代理搭配方案，以及可信代理供应商的独家优惠。",
    f5t: "公正评分", f5d: "基于指纹质量、性能、易用性和性价比的无偏见数据驱动评分。",
    f6t: "持续更新", f6d: "定期更新评测内容，反映最新功能、价格变化和性能改进。",
    ctaTitle: "准备好找到最适合的浏览器了吗？",
    ctaSub: "从我们的全面对比开始，或深入阅读单独评测。",
    ctaBtn1: "对比所有浏览器 →", ctaBtn2: "阅读我们的教程",
  },
  about: {
    label: "关于", title: "关于 AntiBrowserHub", sub: "您值得信赖的指纹浏览器深度评测平台。",
    mission: "我们的使命", missionText: "AntiBrowserHub 的创建是为了帮助专业人士在日益增长的指纹浏览器市场中做出明智选择。我们提供全面、公正的评测和对比，帮助您为业务做出正确的决定。",
    whatWeDo: "我们做什么",
    r1t: "深度评测", r1d: "我们亲自测试每款浏览器，评估指纹质量、性能、易用性和性价比。",
    r2t: "公平对比", r2d: "使用一致的标准进行横向对比，让您轻松看出哪款浏览器最适合您。",
    r3t: "专家教程", r3d: "关于代理设置、API 集成、浏览器自动化和指纹测试的实用教程。",
    affiliate: "联盟披露", affiliateText: "AntiBrowserHub 参与了本站所评测的部分浏览器和代理服务的联盟计划。这意味着当您通过我们的链接注册时，我们可能会获得佣金——对您不会产生任何额外费用。我们的评测和评分始终保持诚实和独立。",
    contact: "联系我们", contactText: "有问题、建议或想与我们合作？",
  },
};

const ru: PageTexts = {
  home: {
    badge: "Обновлено на 2026 — Свежие обзоры",
    heroTitle1: "Найдите лучший", heroTitle2: "антидетект браузер", heroTitle3: "для ваших задач",
    heroSub: "Подробные обзоры, честные сравнения и экспертные руководства для выбора идеального антидетект браузера.",
    btnReviews: "📖 Смотреть обзоры", btnCompare: "⚖️ Сравнить браузеры",
    stat1: "Обзоров браузеров", stat2: "Сравненных функций", stat3: "Независимых обзоров",
    featLabel: "Лучшие", featTitle: "Рекомендуемые антидетект браузеры",
    featSub: "Наша команда протестировала самые популярные антидетект браузеры на рынке.",
    compLabel: "Бок о бок", compTitle: "Быстрое сравнение",
    compSub: "Узнайте, как ведущие антидетект браузеры соотносятся друг с другом.",
    whyLabel: "Почему AntiBrowserHub", whyTitle: "Ваш надёжный ресурс обзоров",
    whySub: "Мы идём дальше поверхностных сравнений и предоставляем практичные выводы.",
    f1t: "Тесты в реальных условиях", f1d: "Каждый браузер проверяется через CreepJS, BrowserLeaks и Pixelscan.",
    f2t: "API и автоматизация", f2d: "Полные примеры кода для Playwright, Selenium и Puppeteer.",
    f3t: "Анализ цен", f3d: "Детальный разбор цен, включая скрытые расходы и скидки.",
    f4t: "Рекомендации прокси", f4d: "Лучшие прокси для каждого браузера с эксклюзивными предложениями.",
    f5t: "Честные рейтинги", f5d: "Беспристрастные рейтинги качества, производительности и удобства.",
    f6t: "Всегда актуально", f6d: "Обзоры регулярно обновляются с учётом последних изменений.",
    ctaTitle: "Готовы найти идеальный браузер?",
    ctaSub: "Начните с нашего подробного сравнения или читайте индивидуальные обзоры.",
    ctaBtn1: "Сравнить все браузеры →", ctaBtn2: "Читать руководства",
  },
  about: {
    label: "О нас", title: "О AntiBrowserHub", sub: "Надёжный ресурс для честных обзоров антидетект браузеров.",
    mission: "Наша миссия", missionText: "AntiBrowserHub создан, чтобы помочь профессионалам ориентироваться в растущем мире антидетект браузеров. Мы предоставляем непредвзятые обзоры и сравнения.",
    whatWeDo: "Что мы делаем",
    r1t: "Подробные обзоры", r1d: "Мы тестируем каждый браузер, оценивая качество, производительность и удобство.",
    r2t: "Честные сравнения", r2d: "Сравнения по единым критериям для объективного выбора.",
    r3t: "Экспертные руководства", r3d: "Практические руководства по настройке прокси, API и автоматизации.",
    affiliate: "Партнёрское раскрытие", affiliateText: "AntiBrowserHub участвует в партнёрских программах некоторых браузеров. Мы можем получать комиссию при регистрации по нашим ссылкам — без дополнительных затрат для вас.",
    contact: "Связаться с нами", contactText: "Есть вопросы или предложения?",
  },
};

const ja: PageTexts = {
  home: {
    badge: "2026年更新 — 最新レビュー",
    heroTitle1: "最適な", heroTitle2: "アンチ検出ブラウザ", heroTitle3: "を見つける",
    heroSub: "詳細なレビュー、比較、専門家ガイドで最適なアンチ検出ブラウザを選びましょう。",
    btnReviews: "📖 レビューを見る", btnCompare: "⚖️ ブラウザを比較",
    stat1: "レビュー済み", stat2: "比較機能", stat3: "独立レビュー",
    featLabel: "おすすめ", featTitle: "注目のアンチ検出ブラウザ",
    featSub: "専門家チームが市場で最も人気のあるブラウザをテストしました。",
    compLabel: "並べて比較", compTitle: "クイック比較",
    compSub: "主要ブラウザの違いを一目で確認できます。",
    whyLabel: "AntiBrowserHubの理由", whyTitle: "信頼できるレビューリソース",
    whySub: "表面的な比較を超えた実用的なインサイトを提供します。",
    f1t: "実環境テスト", f1d: "CreepJS、BrowserLeaks、Pixelscanで各ブラウザをテスト。",
    f2t: "API・自動化ガイド", f2d: "Playwright、Selenium、Puppeteerの完全なコード例。",
    f3t: "価格分析", f3d: "隠れたコストやボリュームディスカウントを含む詳細な価格分析。",
    f4t: "プロキシ推奨", f4d: "各ブラウザに最適なプロキシの組み合わせ。",
    f5t: "公正な評価", f5d: "品質、パフォーマンス、使いやすさの客観的評価。",
    f6t: "常に最新", f6d: "最新の機能と価格変更を反映して定期的に更新。",
    ctaTitle: "最適なブラウザを見つける準備はできましたか？",
    ctaSub: "包括的な比較から始めるか、個別レビューをお読みください。",
    ctaBtn1: "すべて比較 →", ctaBtn2: "ガイドを読む",
  },
  about: {
    label: "概要", title: "AntiBrowserHubについて", sub: "信頼できるアンチ検出ブラウザレビューリソース。",
    mission: "私たちの使命", missionText: "AntiBrowserHubは、アンチ検出ブラウザの選択を支援するために作られました。",
    whatWeDo: "私たちの活動",
    r1t: "詳細レビュー", r1d: "各ブラウザを実際にテストし、品質と使いやすさを評価。",
    r2t: "公正な比較", r2d: "統一基準での比較で最適な選択をサポート。",
    r3t: "専門家ガイド", r3d: "プロキシ設定、API統合、自動化の実用ガイド。",
    affiliate: "アフィリエイト開示", affiliateText: "当サイトはアフィリエイトプログラムに参加しています。リンク経由で登録された場合、手数料を受け取ることがあります。",
    contact: "お問い合わせ", contactText: "ご質問やご提案はありますか？",
  },
};

const fr: PageTexts = {
  home: {
    badge: "Mis à jour 2026 — Derniers avis",
    heroTitle1: "Trouvez le meilleur", heroTitle2: "navigateur anti-détection", heroTitle3: "pour vos besoins",
    heroSub: "Avis approfondis, comparaisons honnêtes et guides experts pour choisir le navigateur anti-détection parfait.",
    btnReviews: "📖 Voir les avis", btnCompare: "⚖️ Comparer",
    stat1: "Navigateurs testés", stat2: "Fonctionnalités comparées", stat3: "Avis indépendants",
    featLabel: "Sélection", featTitle: "Navigateurs anti-détection en vedette",
    featSub: "Notre équipe a testé les navigateurs les plus populaires du marché.",
    compLabel: "Côte à côte", compTitle: "Comparaison rapide",
    compSub: "Voyez comment les principaux navigateurs se comparent en un coup d'œil.",
    whyLabel: "Pourquoi AntiBrowserHub", whyTitle: "Votre ressource de confiance",
    whySub: "Nous allons au-delà des comparaisons superficielles.",
    f1t: "Tests en conditions réelles", f1d: "Chaque navigateur est testé via CreepJS, BrowserLeaks et Pixelscan.",
    f2t: "Guides API et automatisation", f2d: "Exemples de code complets pour Playwright, Selenium et Puppeteer.",
    f3t: "Analyse des prix", f3d: "Analyse détaillée incluant coûts cachés et remises volume.",
    f4t: "Recommandations proxy", f4d: "Meilleurs proxies pour chaque navigateur avec offres exclusives.",
    f5t: "Notes honnêtes", f5d: "Évaluations objectives de la qualité, performance et facilité d'utilisation.",
    f6t: "Toujours à jour", f6d: "Avis régulièrement mis à jour avec les dernières fonctionnalités.",
    ctaTitle: "Prêt à trouver votre navigateur idéal ?",
    ctaSub: "Commencez par notre comparaison complète ou lisez nos avis individuels.",
    ctaBtn1: "Comparer tous →", ctaBtn2: "Lire nos guides",
  },
  about: {
    label: "À propos", title: "À propos de AntiBrowserHub", sub: "Votre source fiable d'avis sur les navigateurs anti-détection.",
    mission: "Notre mission", missionText: "AntiBrowserHub aide les professionnels à naviguer dans le monde des navigateurs anti-détection avec des avis complets et impartiaux.",
    whatWeDo: "Ce que nous faisons",
    r1t: "Avis approfondis", r1d: "Nous testons chaque navigateur en évaluant qualité, performance et rapport qualité-prix.",
    r2t: "Comparaisons équitables", r2d: "Comparaisons côte à côte avec des critères cohérents.",
    r3t: "Guides experts", r3d: "Tutoriels pratiques sur la configuration proxy, l'API et l'automatisation.",
    affiliate: "Divulgation d'affiliation", affiliateText: "AntiBrowserHub participe à des programmes d'affiliation. Nous pouvons recevoir une commission via nos liens — sans frais supplémentaires pour vous.",
    contact: "Contactez-nous", contactText: "Des questions ou suggestions ?",
  },
};

const de: PageTexts = {
  home: {
    badge: "Aktualisiert 2026 — Neueste Bewertungen",
    heroTitle1: "Finden Sie den besten", heroTitle2: "Antidetect-Browser", heroTitle3: "für Ihre Bedürfnisse",
    heroSub: "Ausführliche Bewertungen, ehrliche Vergleiche und Expertenanleitungen für den perfekten Antidetect-Browser.",
    btnReviews: "📖 Bewertungen ansehen", btnCompare: "⚖️ Browser vergleichen",
    stat1: "Browser getestet", stat2: "Funktionen verglichen", stat3: "Unabhängige Bewertungen",
    featLabel: "Top-Auswahl", featTitle: "Empfohlene Antidetect-Browser",
    featSub: "Unser Expertenteam hat die beliebtesten Browser getestet.",
    compLabel: "Nebeneinander", compTitle: "Schnellvergleich",
    compSub: "Sehen Sie auf einen Blick, wie die Browser im Vergleich stehen.",
    whyLabel: "Warum AntiBrowserHub", whyTitle: "Ihre vertrauenswürdige Bewertungsquelle",
    whySub: "Wir bieten mehr als oberflächliche Vergleiche.",
    f1t: "Tests unter realen Bedingungen", f1d: "Jeder Browser wird mit CreepJS, BrowserLeaks und Pixelscan getestet.",
    f2t: "API & Automatisierung", f2d: "Vollständige Code-Beispiele für Playwright, Selenium und Puppeteer.",
    f3t: "Preisanalyse", f3d: "Detaillierte Preisanalyse mit versteckten Kosten und Mengenrabatten.",
    f4t: "Proxy-Empfehlungen", f4d: "Beste Proxy-Kombinationen für jeden Browser.",
    f5t: "Ehrliche Bewertungen", f5d: "Objektive Bewertungen von Qualität, Leistung und Benutzerfreundlichkeit.",
    f6t: "Immer aktuell", f6d: "Bewertungen werden regelmäßig mit neuesten Änderungen aktualisiert.",
    ctaTitle: "Bereit, Ihren perfekten Browser zu finden?",
    ctaSub: "Beginnen Sie mit unserem umfassenden Vergleich oder lesen Sie Einzelbewertungen.",
    ctaBtn1: "Alle vergleichen →", ctaBtn2: "Anleitungen lesen",
  },
  about: {
    label: "Über uns", title: "Über AntiBrowserHub", sub: "Ihre vertrauenswürdige Quelle für Antidetect-Browser Bewertungen.",
    mission: "Unsere Mission", missionText: "AntiBrowserHub hilft Fachleuten bei der Wahl des richtigen Antidetect-Browsers mit umfassenden, unvoreingenommenen Bewertungen.",
    whatWeDo: "Was wir tun",
    r1t: "Ausführliche Bewertungen", r1d: "Wir testen jeden Browser und bewerten Qualität, Leistung und Preis-Leistungs-Verhältnis.",
    r2t: "Faire Vergleiche", r2d: "Vergleiche nach einheitlichen Kriterien für eine objektive Auswahl.",
    r3t: "Expertenanleitungen", r3d: "Praktische Anleitungen zu Proxy-Einrichtung, API und Automatisierung.",
    affiliate: "Affiliate-Offenlegung", affiliateText: "AntiBrowserHub nimmt an Partnerprogrammen teil. Wir erhalten möglicherweise eine Provision über unsere Links — ohne zusätzliche Kosten für Sie.",
    contact: "Kontakt", contactText: "Haben Sie Fragen oder Vorschläge?",
  },
};

const pageTexts: Record<Locale, PageTexts> = { en, zh, ru, ja, fr, de };

export function getPageTexts(locale: Locale): PageTexts {
  return pageTexts[locale] || pageTexts.en;
}
