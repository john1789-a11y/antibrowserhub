import type { Locale } from "./config";

// Page-level content translations
interface GuideI18n { title: string; excerpt: string; category: string; }

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
  guideCards: Record<string, GuideI18n>;
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
  guideCards: {
    "getting-started": { title: "Getting Started with Antidetect Browsers", excerpt: "A beginner-friendly guide to understanding what antidetect browsers are, how they work, and which one is right for you.", category: "Beginner" },
    "proxy-setup": { title: "How to Set Up Proxies with Your Antidetect Browser", excerpt: "Step-by-step guide to configuring residential, datacenter, and ISP proxies with popular antidetect browsers.", category: "Setup" },
    "automation-guide": { title: "Antidetect Browser Automation: API & Code Examples by Platform", excerpt: "Real API endpoints and working code examples for automating MoreLogin, AdsPower, GoLogin, Multilogin, Dolphin Anty, and Octo Browser.", category: "API" },
    "fingerprint-testing": { title: "Fingerprint Testing: How to Verify Your Browser Setup", excerpt: "Use CreepJS, BrowserLeaks, and Pixelscan to verify your antidetect browser fingerprint configuration.", category: "Testing" },
    "best-for-amazon": { title: "Best Antidetect Browser for Amazon Sellers 2026", excerpt: "Top picks for Amazon multi-store management — avoid account linking, manage multiple seller accounts safely, and scale your e-commerce business.", category: "Best For" },
    "best-for-facebook-ads": { title: "Best Antidetect Browser for Facebook Ads 2026", excerpt: "Run multiple Facebook ad accounts without bans. The best antidetect browsers for media buyers, agencies, and Facebook advertisers.", category: "Best For" },
    "best-free-antidetect-browser": { title: "Best Free Antidetect Browser 2026", excerpt: "Compare all free antidetect browser plans side by side. Find the most generous free tier for your multi-account needs.", category: "Best For" },
    "best-for-affiliate-marketing": { title: "Best Antidetect Browser for Affiliate Marketing 2026", excerpt: "Top antidetect browsers for affiliate marketers, media buyers, and traffic arbitrage professionals. Manage ad accounts at scale.", category: "Best For" },
    "best-for-web-scraping": { title: "Best Antidetect Browser for Web Scraping 2026", excerpt: "Use antidetect browsers to avoid blocks and CAPTCHAs during web scraping. Top browsers with API access and headless support.", category: "Best For" },
    "best-for-tiktok": { title: "Best Antidetect Browser for TikTok 2026", excerpt: "Manage multiple TikTok accounts and ad accounts safely. Best antidetect browsers for TikTok creators, agencies, and advertisers.", category: "Best For" },
    "best-for-crypto-airdrop": { title: "Best Antidetect Browser for Crypto & Airdrop Farming 2026", excerpt: "Farm crypto airdrops, manage DeFi wallets, and operate multiple exchange accounts safely with antidetect browsers.", category: "Best For" },
    "cheapest-antidetect-browser": { title: "Cheapest Antidetect Browser Compared 2026", excerpt: "Detailed pricing breakdown of every antidetect browser. Find the most affordable option for your budget and profile needs.", category: "Best For" },
    "avoid-amazon-suspension": { title: "How to Avoid Amazon Account Suspension with Antidetect Browsers", excerpt: "Step-by-step guide to operating multiple Amazon seller accounts without getting suspended. Includes setup, proxy, and operational best practices.", category: "How-To" },
    "multiple-facebook-accounts": { title: "How to Run Multiple Facebook Ad Accounts Safely", excerpt: "Complete guide to managing multiple Facebook ad accounts, Business Managers, and pages without getting banned.", category: "How-To" },
    "chromium-vs-firefox-kernel": { title: "Chromium vs Firefox Kernel: Which Antidetect Engine is Better?", excerpt: "Compare Chromium and Firefox-based antidetect browser engines. Understand when to use each kernel for optimal detection avoidance.", category: "Technical" },
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
  guideCards: {
    "getting-started": { title: "指纹浏览器入门指南", excerpt: "一篇面向初学者的指南，了解什么是指纹浏览器、它们如何工作以及哪一款最适合你。", category: "入门" },
    "proxy-setup": { title: "如何为指纹浏览器配置代理", excerpt: "逐步配置住宅代理、数据中心代理 and ISP 代理的完整教程。", category: "配置" },
    "automation-guide": { title: "指纹浏览器自动化：各平台 API 及代码示例", excerpt: "MoreLogin、AdsPower、GoLogin、Multilogin、Dolphin Anty 和 Octo Browser 的真实 API 端点和可运行代码示例。", category: "API" },
    "fingerprint-testing": { title: "指纹测试：如何验证你的浏览器配置", excerpt: "使用 CreepJS、BrowserLeaks 和 Pixelscan 验证指纹浏览器的指纹配置效果。", category: "测试" },
    "best-for-amazon": { title: "2026 亚马逊卖家最佳指纹浏览器推荐", excerpt: "亚马逊多店铺管理的最佳选择——防止店铺关联，安全运营多个卖家账号，助力跨境电商业务规模化扩张。", category: "最佳推荐" },
    "best-for-facebook-ads": { title: "2026 Facebook 广告投放最佳指纹浏览器推荐", excerpt: "无惧封号，安全运营多个 Facebook 广告账号。面向投手、广告代理商和广告主的最佳指纹浏览器推荐。", category: "最佳推荐" },
    "best-free-antidetect-browser": { title: "2026 最佳免费指纹浏览器对比", excerpt: "横向对比各大指纹浏览器的免费版本。为您管理多账号需求寻找最慷慨的免费配置方案。", category: "最佳推荐" },
    "best-for-affiliate-marketing": { title: "2026 联盟营销最佳指纹浏览器推荐", excerpt: "面向联盟客、买量投手和流量套利专业人员的最佳指纹浏览器。轻松实现广告账号规模化管理。", category: "最佳推荐" },
    "best-for-web-scraping": { title: "2026 网页爬虫抓取最佳指纹浏览器推荐", excerpt: "使用指纹浏览器避免网页抓取时的封禁和验证码。提供支持 API 访问和无头模式的顶级浏览器推荐。", category: "最佳推荐" },
    "best-for-tiktok": { title: "2026 TikTok 最佳指纹浏览器推荐", excerpt: "安全管理多个 TikTok 账号和广告账号。适用于 TikTok 创作者、代理商和广告主的最佳指纹浏览器。", category: "最佳推荐" },
    "best-for-crypto-airdrop": { title: "2026 加密货币与空投多开刷单最佳指纹浏览器推荐", excerpt: "使用指纹浏览器安全地薅空投、管理多个 DeFi 钱包和运营多个交易所账户。", category: "最佳推荐" },
    "cheapest-antidetect-browser": { title: "2026 最便宜的指纹浏览器横向对比", excerpt: "详细拆解各大指纹浏览器的定价策略。根据您的预算和配置文件需求找到最划算的方案。", category: "最佳推荐" },
    "avoid-amazon-suspension": { title: "如何使用指纹浏览器避免亚马逊店铺被封", excerpt: "运营多个亚马逊卖家账号且不被关联封店的步骤指南。包含设置、代理和日常运营最佳实践。", category: "使用指南" },
    "multiple-facebook-accounts": { title: "如何安全地运行多个 Facebook 广告账号", excerpt: "管理多个 Facebook 广告账号、BM（商务管理平台）和主页且防封号的完整教程。", category: "使用指南" },
    "chromium-vs-firefox-kernel": { title: "Chromium vs Firefox 内核：哪种指纹内核更好？", excerpt: "对比基于 Chromium 和 Firefox 的指纹浏览器引擎。理解在何种场景下使用对应内核以达到最佳防关联效果。", category: "技术科普" },
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
  guideCards: {
    "getting-started": { title: "Начало работы с антидетект браузерами", excerpt: "Руководство для начинающих: что такое антидетект браузеры, как они работают и какой выбрать.", category: "Начало" },
    "proxy-setup": { title: "Настройка прокси для антидетект браузера", excerpt: "Пошаговое руководство по настройке резидентных, дата-центровых и ISP прокси.", category: "Настройка" },
    "automation-guide": { title: "Автоматизация антидетект браузеров: API и примеры кода", excerpt: "Реальные API-эндпоинты и рабочие примеры кода для MoreLogin, AdsPower, GoLogin и других.", category: "API" },
    "fingerprint-testing": { title: "Тестирование отпечатков: проверка настроек браузера", excerpt: "Используйте CreepJS, BrowserLeaks и Pixelscan для проверки конфигурации отпечатков.", category: "Тесты" },
    "best-for-amazon": { title: "Лучший антидетект-браузер для продавцов Amazon 2026", excerpt: "Лучшие решения для управления несколькими магазинами Amazon — избегайте связывания аккаунтов, управляйте продавцами безопасно и масштабируйте e-commerce.", category: "Лучшие" },
    "best-for-facebook-ads": { title: "Лучший антидетект-брауzet для рекламы Facebook 2026", excerpt: "Запуск нескольких рекламных аккаунтов Facebook без банов. Лучшие браузеры для медиабайеров, агентств и рекламодателей.", category: "Лучшие" },
    "best-free-antidetect-browser": { title: "Лучший бесплатный антидетект-браузер 2026", excerpt: "Сравнение бесплатных тарифных планов антидетект-браузеров. Найдите самый щедрый бесплатный тариф для мультиаккаунтинга.", category: "Лучшие" },
    "best-for-affiliate-marketing": { title: "Лучший антидетект-браузер для арбитража трафика 2026", excerpt: "Лучшие антидетект-браузеры для арбитражников, медиабайеров и специалистов по трафику. Масштабируйте рекламные кампании.", category: "Лучшие" },
    "best-for-web-scraping": { title: "Лучший антидетект-браузер для веб-парсинга 2026", excerpt: "Использование антидетектов для обхода блокировок и капчи при парсинге. Топ браузеров с доступом к API и поддержкой headless-режима.", category: "Лучшие" },
    "best-for-tiktok": { title: "Лучший антидетект-браузер для TikTok 2026", excerpt: "Безопасное управление несколькими аккаунтами и рекламой TikTok. Подходит для креаторов, агентств и рекламодателей.", category: "Лучшие" },
    "best-for-crypto-airdrop": { title: "Лучший антидетект-браузер для крипты и абуза аирдропов 2026", excerpt: "Участвуйте в аирдропах, управляйте кошельками DeFi и безопасно работайте с несколькими аккаунтами бирж.", category: "Лучшие" },
    "cheapest-antidetect-browser": { title: "Самый дешевый антидетект-браузер: сравнение цен 2026", excerpt: "Подробный разбор цен на все антидетект-браузеры. Найдите самый выгодный вариант под ваш бюджет и количество профилей.", category: "Лучшие" },
    "avoid-amazon-suspension": { title: "Как избежать блокировки аккаунта Amazon с помощью антидетекта", excerpt: "Пошаговое руководство по работе с несколькими аккаунтами продавца Amazon без блокировок. Настройки, прокси и лучшие практики.", category: "Инструкции" },
    "multiple-facebook-accounts": { title: "Как безопасно управлять несколькими аккаунтами Facebook Ads", excerpt: "Полное руководство по ведению нескольких рекламных аккаунтов Facebook, Business Manager и страниц без банов.", category: "Инструкции" },
    "chromium-vs-firefox-kernel": { title: "Chromium или Firefox: какой движок антидетекта лучше?", excerpt: "Сравнение движков антидетект-браузеров на базе Chromium и Firefox. Узнайте, какой из них выбрать для оптимального обхода детектов.", category: "Технические" },
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
  guideCards: {
    "getting-started": { title: "アンチ検出ブラウザ入門ガイド", excerpt: "アンチ検出ブラウザとは何か、どのように機能し、どれが最適かを理解するための初心者向けガイド。", category: "入門" },
    "proxy-setup": { title: "プロキシの設定方法", excerpt: "住宅用、データセンター、ISPプロキシの設定手順ガイド。", category: "設定" },
    "automation-guide": { title: "ブラウザ自動化：プラットフォーム別APIとコード例", excerpt: "各プラットフォームの実際のAPIエンドポイント and 動作するコード例。", category: "API" },
    "fingerprint-testing": { title: "フィンガープリントテスト：ブラウザ設定の検証方法", excerpt: "CreepJS、BrowserLeaks、Pixelscanを使用してブラウザのフィンガープリント設定を確認。", category: "テスト" },
    "best-for-amazon": { title: "Amazonセラー向けおすすめアンチ検出ブラウザ 2026", excerpt: "Amazonの複数店舗管理に最適な選択肢 — アカウントの紐付けを防ぎ、複数のセラーアカウントを安全に管理してECビジネスをスケールアップ。", category: "おすすめ" },
    "best-for-facebook-ads": { title: "Facebook広告向けおすすめアンチ検出ブラウザ 2026", excerpt: "BANされずに複数のFacebook広告アカウントを運用。メディアバイヤー、代理店、広告主向けのおすすめアンチ検出ブラウザ。", category: "おすすめ" },
    "best-free-antidetect-browser": { title: "おすすめの無料アンチ検出ブラウザ比較 2026", excerpt: "各アンチ検出ブラウザの無料プランを徹底比較。アカウント管理に必要な、最もお得な無料枠を見つけましょう。", category: "おすすめ" },
    "best-for-affiliate-marketing": { title: "アフィリエイト向けおすすめアンチ検出ブラウザ 2026", excerpt: "アフィリエイター、メディアバイヤー、トラフィックアービトラージプロ向け。広告アカウントを大规模に管理。", category: "おすすめ" },
    "best-for-web-scraping": { title: "ウェブスクレイピング向けおすすめアンチ検出ブラウザ 2026", excerpt: "ウェブスクレイピング中のブロックやCAPTCHAを回避。APIアクセスとヘッドレスモードをサポートするトップブラウザ。", category: "おすすめ" },
    "best-for-tiktok": { title: "TikTok向けおすすめアンチ検出ブラウザ 2026", excerpt: "複数のTikTokアカウントと広告アカウントを安全に管理。クリエイター、代理店、広告主向けの最適なブラウザ。", category: "おすすめ" },
    "best-for-crypto-airdrop": { title: "仮想通貨＆エアドロップ周回向けおすすめアンチ検出ブラウザ 2026", excerpt: "エアドロップ獲得、DeFiウォレット管理、複数の取引所アカウントの安全な運用に最適なアンチ検出ブラウザ。", category: "おすすめ" },
    "cheapest-antidetect-browser": { title: "最も安いアンチ検出ブラウザ比較 2026", excerpt: "全アンチ検出ブラウザの料金体系を詳細に分析。予算とプロファイル数に応じた最もお得なブラウザを紹介。", category: "おすすめ" },
    "avoid-amazon-suspension": { title: "アンチ検出ブラウザでAmazonアカウントの停止を防ぐ方法", excerpt: "アカウント停止を回避しながら複数のAmazonセラーアカウントを運用する手順。設定、プロキシ、運用のベストプラクティス。", category: "使い方" },
    "multiple-facebook-accounts": { title: "BANを回避して複数のFacebook広告アカウントを安全に運用する方法", excerpt: "複数のFacebook広告アカウント、ビジネスマネージャ、ページを安全に管理するための完全ガイド。", category: "使い方" },
    "chromium-vs-firefox-kernel": { title: "Chromium vs Firefox カーネル: どちらのアンチ検出エンジンが優れているか？", excerpt: "ChromiumとFirefoxベースのアンチ検出ブラウザエンジンを比較。最適な検出回避のためにどちらのカーネルを使用すべきかを解説。", category: "技術" },
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
  guideCards: {
    "getting-started": { title: "Premiers pas avec les navigateurs anti-détection", excerpt: "Un guide pour comprendre ce que sont les navigateurs anti-détection, comment ils fonctionnent et lequel choisir.", category: "Débutant" },
    "proxy-setup": { title: "Configurer les proxies avec votre navigateur", excerpt: "Guide étape par étape pour configurer les proxies résidentiels, datacenter et ISP.", category: "Configuration" },
    "automation-guide": { title: "Automatisation : API et exemples de code par plateforme", excerpt: "Points d'API réels and exemples de code fonctionnels pour chaque plateforme.", category: "API" },
    "fingerprint-testing": { title: "Test d'empreinte : vérifier votre configuration", excerpt: "Utilisez CreepJS, BrowserLeaks et Pixelscan pour vérifier la configuration de votre navigateur.", category: "Test" },
    "best-for-amazon": { title: "Meilleur Navigateur Anti-Détection pour les Vendeurs Amazon 2026", excerpt: "Le top pour gérer plusieurs boutiques Amazon — évitez l'association de comptes, gérez vos comptes vendeurs en toute sécurité et développez votre activité e-commerce.", category: "Sélection" },
    "best-for-facebook-ads": { title: "Meilleur Navigateur Anti-Détection pour Facebook Ads 2026", excerpt: "Gérez plusieurs comptes publicitaires Facebook sans bannissement. Les meilleurs navigateurs anti-détection pour les acheteurs de médias, les agences et les annonceurs.", category: "Sélection" },
    "best-free-antidetect-browser": { title: "Meilleur Navigateur Anti-Détection Gratuit 2026", excerpt: "Comparez côte à côte toutes les offres gratuites des navigateurs anti-détection. Trouvez le forfait gratuit le plus généreux pour vos profils.", category: "Sélection" },
    "best-for-affiliate-marketing": { title: "Meilleur Navigateur Anti-Détection pour le Marketing d'Affiliation 2026", excerpt: "Les meilleurs navigateurs anti-détection pour les affiliés, les acheteurs médias et les professionnels de l'arbitrage. Gagnez en échelle.", category: "Sélection" },
    "best-for-web-scraping": { title: "Meilleur Navigateur Anti-Détection pour le Web Scraping 2026", excerpt: "Évitez les blocages et les CAPTCHAs lors du scraping de données. Les meilleurs navigateurs avec accès API et support headless.", category: "Sélection" },
    "best-for-tiktok": { title: "Meilleur Navigateur Anti-Détection pour TikTok 2026", excerpt: "Gérez plusieurs comptes TikTok et comptes publicitaires en toute sécurité. Idéal pour les créateurs, agences et annonceurs.", category: "Sélection" },
    "best-for-crypto-airdrop": { title: "Meilleur Navigateur Anti-Détection pour la Crypto & Airdrops 2026", excerpt: "Farming d'airdrops crypto, gestion de portefeuilles DeFi et comptes d'échange multiples en toute sécurité avec des navigateurs anti-détection.", category: "Sélection" },
    "cheapest-antidetect-browser": { title: "Navigateurs Anti-Détection les Moins Chers 2026", excerpt: "Analyse détaillée des tarifs de chaque navigateur anti-détection. Trouvez l'option la plus abordable pour votre budget.", category: "Sélection" },
    "avoid-amazon-suspension": { title: "Comment Éviter la Suspension de Compte Amazon avec un Anti-Détection", excerpt: "Guide étape par étape pour exploiter plusieurs comptes vendeurs Amazon sans suspension. Configuration, proxy et bonnes pratiques.", category: "Tutoriel" },
    "multiple-facebook-accounts": { title: "Comment Gérer Plusieurs Comptes Pubs Facebook en Toute Sécurité", excerpt: "Guide complet pour gérer plusieurs comptes publicitaires Facebook, Business Managers et pages sans être banni.", category: "Tutoriel" },
    "chromium-vs-firefox-kernel": { title: "Noyau Chromium vs Firefox : Quel Moteur Anti-Détection Choisir ?", excerpt: "Comparez les moteurs anti-détection basés sur Chromium et Firefox. Comprenez quand utiliser chaque noyau pour un masquage optimal.", category: "Technique" },
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
  guideCards: {
    "getting-started": { title: "Erste Schritte mit Antidetect-Browsern", excerpt: "Ein Anfänger-Leitfaden zum Verständnis von Antidetect-Browsern, ihrer Funktionsweise und der richtigen Wahl.", category: "Anfänger" },
    "proxy-setup": { title: "Proxy-Einrichtung für Ihren Browser", excerpt: "Schritt-für-Schritt-Anleitung zur Konfiguration von Residential-, Datacenter- und ISP-Proxies.", category: "Einrichtung" },
    "automation-guide": { title: "Browser-Automatisierung: API & Code-Beispiele", excerpt: "Echte API-Endpunkte and funktionierende Code-Beispiele für jede Plattform.", category: "API" },
    "fingerprint-testing": { title: "Fingerprint-Test: Browser-Einstellungen überprüfen", excerpt: "Verwenden Sie CreepJS, BrowserLeaks und Pixelscan zur Überprüfung Ihrer Konfiguration.", category: "Test" },
    "best-for-amazon": { title: "Bester Antidetect-Browser für Amazon-Verkäufer 2026", excerpt: "Top-Empfehlungen für das Amazon-Multistore-Management — Kontenverknüpfungen vermeiden, Verkäuferkonten sicher verwalten und E-Commerce-Geschäft skalieren.", category: "Top-Auswahl" },
    "best-for-facebook-ads": { title: "Bester Antidetect-Browser für Facebook-Werbung 2026", excerpt: "Mehrere Facebook-Werbekonten ohne Sperren betreiben. Die besten Antidetect-Browser für Media Buyer, Agenturen und Werbetreibende.", category: "Top-Auswahl" },
    "best-free-antidetect-browser": { title: "Bester kostenloser Antidetect-Browser 2026", excerpt: "Vergleichen Sie alle kostenlosen Antidetect-Browser-Pläne nebeneinander. Finden Sie das großzügigste kostenlose Angebot.", category: "Top-Auswahl" },
    "best-for-affiliate-marketing": { title: "Bester Antidetect-Browser für Affiliate-Marketing 2026", excerpt: "Die besten Antidetect-Browser für Affiliate-Marketer, Media Buyer und Traffic-Arbitrage-Profis. Werbekonten skalieren.", category: "Top-Auswahl" },
    "best-for-web-scraping": { title: "Bester Antidetect-Browser für Web Scraping 2026", excerpt: "Sperren und CAPTCHAs beim Web Scraping vermeiden. Die besten Browser mit API-Zugriff und Headless-Unterstützung.", category: "Top-Auswahl" },
    "best-for-tiktok": { title: "Bester Antidetect-Browser für TikTok 2026", excerpt: "Mehrere TikTok-Konten und Werbekonten sicher verwalten. Die besten Antidetect-Browser für TikTok-Creator, Agenturen und Werbetreibende.", category: "Top-Auswahl" },
    "best-for-crypto-airdrop": { title: "Bester Antidetect-Browser für Krypto & Airdrop Farming 2026", excerpt: "Krypto-Airdrops farmen, DeFi-Wallets verwalten und mehrere Börsenkonten sicher mit Antidetect-Browsern betreiben.", category: "Top-Auswahl" },
    "cheapest-antidetect-browser": { title: "Günstigste Antidetect-Browser im Vergleich 2026", excerpt: "Detaillierte Preisanalyse jedes Antidetect-Browsers. Finden Sie die günstigste Option für Ihr Budget und Ihre Profile.", category: "Top-Auswahl" },
    "avoid-amazon-suspension": { title: "Amazon-Kontosperrung mit Antidetect-Browsern vermeiden", excerpt: "Schritt-für-Schritt-Anleitung zum Betrieb mehrerer Amazon-Verkäuferkonten ohne Sperren. Einrichtung, Proxies und operative Best Practices.", category: "Anleitung" },
    "multiple-facebook-accounts": { title: "Mehrere Facebook-Werbekonten sicher betreiben", excerpt: "Vollständige Anleitung zur Verwaltung mehrerer Facebook-Werbekonten, Business Manager und Seiten ohne Sperren.", category: "Anleitung" },
    "chromium-vs-firefox-kernel": { title: "Chromium vs. Firefox-Kernel: Welches Antidetect-Engine ist besser?", excerpt: "Vergleich von Chromium- und Firefox-basierten Antidetect-Browser-Engines. Verstehen Sie, wann welcher Kernel für optimales Maskieren verwendet werden sollte.", category: "Technisch" },
  },
};

const pageTexts: Record<Locale, PageTexts> = { en, zh, ru, ja, fr, de };

export function getPageTexts(locale: Locale): PageTexts {
  return pageTexts[locale] || pageTexts.en;
}
