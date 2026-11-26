import type { Locale } from "@/i18n/config";

export interface VendorUpdate { freeProfilesLabel?: Record<Locale, string>; verifiedAt: string; source: string; billing: Record<Locale, string>; summary: Record<Locale, string>; freeProfiles: number; startingPrice: string; plans: { name: string; price: string; profiles: string; features: string[] }[] }

export const vendorUpdates: Record<string, VendorUpdate> = {
  "hidemyacc": {
    "freeProfilesLabel": {"en": "7-day trial · 30 profiles", "zh": "7 天试用 · 30 个环境", "ru": "Пробный период 7 дней · 30 профилей", "ja": "7 日間の体験版・30 プロファイル", "fr": "Essai de 7 jours · 30 profils", "de": "7 Tage testen · 30 Profile"},
    "verifiedAt": "2026-11-26",
    "source": "https://hidemyacc.com/pricing",
    "billing": {
      "en": "Mini costs $10 with monthly billing, or the equivalent of $5 per month when paid annually. Starter costs $29 per month for 30 profiles with monthly billing.",
      "zh": "Mini 月付 10 美元，年付折算每月 5 美元。Starter 月付 29 美元，含 30 个环境。",
      "ru": "Mini стоит 10 $ помесячно или в пересчёте 5 $ в месяц при годовой оплате. Starter стоит 29 $ помесячно за 30 профилей.",
      "ja": "Mini は月払いで 10 ドル、年払い時は月換算 5 ドルです。Starter は月払いで 29 ドル、30 件のプロファイルを含みます。",
      "fr": "Mini coûte 10 $ en paiement mensuel, ou l’équivalent de 5 $ par mois en paiement annuel. Starter coûte 29 $ en paiement mensuel pour 30 profils.",
      "de": "Mini kostet bei Monatszahlung 10 $, bei Jahreszahlung umgerechnet 5 $ pro Monat. Starter kostet bei Monatszahlung 29 $ für 30 Profile."
    },
    "summary": {
      "en": "The 7-day Starter trial includes 30 profiles. Mini includes 5 profiles. Profile sharing starts with Base, and API access is included with Team and Business.",
      "zh": "Starter 提供 7 天试用，含 30 个环境。Mini 含 5 个环境。Base 起支持环境共享，Team 和 Business 提供 API。",
      "ru": "Пробный Starter на 7 дней включает 30 профилей. В Mini входит 5 профилей. Общий доступ к профилям начинается с Base, API доступен в Team и Business.",
      "ja": "Starter の 7 日間のお試しには 30 件、Mini には 5 件のプロファイルが含まれます。プロファイル共有は Base 以上、API は Team と Business で利用できます。",
      "fr": "L’essai Starter de 7 jours comprend 30 profils. Mini inclut 5 profils. Le partage est proposé dès Base et l’API sur Team et Business.",
      "de": "Die 7-tägige Starter-Testphase umfasst 30 Profile. Mini enthält 5 Profile. Profilfreigabe gibt es ab Base, API-Zugang bei Team und Business."
    },
    "freeProfiles": 0,
    "startingPrice": "$10/mo",
    "plans": [
      {
        "name": "Mini",
        "price": "$10/mo",
        "profiles": "5",
        "features": []
      },
      {
        "name": "Starter",
        "price": "$29/mo",
        "profiles": "30",
        "features": []
      },
      {
        "name": "Base",
        "price": "$49/mo",
        "profiles": "100",
        "features": []
      },
      {
        "name": "Team",
        "price": "$99/mo",
        "profiles": "300",
        "features": []
      },
      {
        "name": "Business",
        "price": "$199/mo",
        "profiles": "1000",
        "features": []
      }
    ]
  },
  "undetectable": {
    "freeProfilesLabel": {"en": "5 cloud profiles", "zh": "5 个云环境", "ru": "5 облачных профилей", "ja": "クラウドプロファイル 5 件", "fr": "5 profils cloud", "de": "5 Cloud-Profile"},
    "verifiedAt": "2026-11-26",
    "source": "https://undetectable.io/pricing/",
    "billing": {
      "en": "Monthly billing starts at $49 for Base (50 cloud profiles), $99 for Professional (100) and $199 for Custom (200). The pricing page lists annual prepayment separately.",
      "zh": "按月付费：Base 为 49 美元（50 个云环境），Professional 为 99 美元（100 个），Custom 为 199 美元起（200 个）。年付价格另列。",
      "ru": "При помесячной оплате Base стоит 49 $ за 50 облачных профилей, Professional — 99 $ за 100, Custom — от 199 $ за 200. Годовая предоплата указана отдельно.",
      "ja": "月払いは Base が 49 ドル（クラウド 50 件）、Professional が 99 ドル（100 件）、Custom が 199 ドルから（200 件）です。年払いは別料金です。",
      "fr": "En paiement mensuel, Base coûte 49 $ pour 50 profils cloud, Professional 99 $ pour 100 et Custom débute à 199 $ pour 200. Le prépaiement annuel est indiqué séparément.",
      "de": "Bei Monatszahlung kostet Base 49 $ für 50 Cloud-Profile, Professional 99 $ für 100 und Custom ab 199 $ für 200. Jahrespreise sind gesondert ausgewiesen."
    },
    "summary": {
      "en": "Free includes 5 cloud profiles, 50 profile creations per month and 10 browser configurations. Unlimited local profiles and Local API access start with Base.",
      "zh": "免费版含 5 个云环境、每月 50 次创建额度和 10 种浏览器配置。Base 起提供无限本地环境和 Local API。",
      "ru": "Бесплатно доступны 5 облачных профилей, 50 созданий в месяц и 10 конфигураций браузера. Безлимитные локальные профили и Local API доступны с Base.",
      "ja": "無料版はクラウドプロファイル 5 件、月 50 回の作成、ブラウザ構成 10 種に対応します。ローカルプロファイル無制限と Local API は Base 以上で利用できます。",
      "fr": "La formule gratuite comprend 5 profils cloud, 50 créations par mois et 10 configurations de navigateur. Les profils locaux illimités et l’API locale sont disponibles dès Base.",
      "de": "Der Gratistarif umfasst 5 Cloud-Profile, 50 Profilerstellungen pro Monat und 10 Browserkonfigurationen. Unbegrenzte lokale Profile und die lokale API gibt es ab Base."
    },
    "freeProfiles": 5,
    "startingPrice": "$49/mo",
    "plans": [
      {
        "name": "Free",
        "price": "$0",
        "profiles": "5",
        "features": []
      },
      {
        "name": "Base",
        "price": "$49/mo",
        "profiles": "50",
        "features": []
      },
      {
        "name": "Professional",
        "price": "$99/mo",
        "profiles": "100",
        "features": []
      },
      {
        "name": "Custom",
        "price": "$199/mo",
        "profiles": "200",
        "features": []
      }
    ]
  },
  "lalicat": {
    "freeProfilesLabel": {"en": "3-day trial", "zh": "3 天试用", "ru": "Пробный период 3 дня", "ja": "3 日間の体験版", "fr": "Essai de 3 jours", "de": "3 Tage testen"},
    "verifiedAt": "2026-11-26",
    "source": "https://www.lalicat.com/pricing",
    "summary": {
      "en": "Lalicat offers a three-day trial for new users. Personal, Solo, Team and Scale include 100, 200, 500 and 3,000 saved profiles and 1, 5, 10 and 20 subaccounts respectively. Each includes the local REST API and CLI.",
      "zh": "Lalicat 为新用户提供 3 天试用。Personal、Solo、Team、Scale 分别可保存 100、200、500、3000 个环境，含 1、5、10、20 个子账号。各档均含本地 REST API 和 CLI。",
      "ru": "Новым пользователям Lalicat доступна пробная версия на три дня. Personal, Solo, Team и Scale включают соответственно 100, 200, 500 и 3000 сохранённых профилей и 1, 5, 10 и 20 субаккаунтов. В каждом тарифе доступны локальный REST API и CLI.",
      "ja": "Lalicat は新規ユーザーに 3 日間の体験版を提供しています。Personal、Solo、Team、Scale の保存上限は順に 100、200、500、3,000 プロファイル、サブアカウント数は 1、5、10、20 です。各プランにローカル REST API と CLI が含まれます。",
      "fr": "Lalicat propose trois jours d’essai aux nouveaux utilisateurs. Personal, Solo, Team et Scale incluent respectivement 100, 200, 500 et 3 000 profils enregistrés et 1, 5, 10 et 20 sous-comptes. Chaque formule comprend l’API REST locale et la CLI.",
      "de": "Lalicat bietet Neukunden drei Testtage. Personal, Solo, Team und Scale umfassen jeweils 100, 200, 500 und 3.000 gespeicherte Profile sowie 1, 5, 10 und 20 Unterkonten. Die lokale REST-API und die CLI sind in allen Tarifen enthalten."
    },
    "billing": {
      "en": "Personal costs $59 when paid monthly or $531 prepaid for one year ($44.25 per month equivalent). Solo, Team and Scale cost $99, $209 and $499 on monthly billing.",
      "zh": "Personal 月付 59 美元，年付 531 美元（折合每月 44.25 美元）。Solo、Team、Scale 月付分别为 99、209、499 美元。",
      "ru": "Personal стоит 59 $ при ежемесячной оплате или 531 $ за год (44,25 $ в пересчёте на месяц). Solo, Team и Scale стоят 99, 209 и 499 $ при ежемесячной оплате.",
      "ja": "Personal は月払い 59 ドル、年一括払い 531 ドル（月換算 44.25 ドル）。Solo、Team、Scale の月払いは順に 99、209、499 ドルです。",
      "fr": "Personal coûte 59 $ au mois ou 531 $ par an, soit 44,25 $ par mois. Solo, Team et Scale coûtent respectivement 99, 209 et 499 $ en facturation mensuelle.",
      "de": "Personal kostet bei monatlicher Zahlung 59 $, bei jährlicher Vorauszahlung 531 $ (44,25 $ pro Monat). Solo, Team und Scale kosten bei monatlicher Zahlung 99, 209 und 499 $."
    },
    "freeProfiles": 0,
    "startingPrice": "$59/mo",
    "plans": [
      {
        "name": "Personal",
        "price": "$59/mo",
        "profiles": "100",
        "features": []
      },
      {
        "name": "Solo",
        "price": "$99/mo",
        "profiles": "200",
        "features": []
      },
      {
        "name": "Team",
        "price": "$209/mo",
        "profiles": "500",
        "features": []
      },
      {
        "name": "Scale",
        "price": "$499/mo",
        "profiles": "3000",
        "features": []
      },
      {
        "name": "Custom",
        "price": "—",
        "profiles": "—",
        "features": []
      }
    ]
  },
  "marketer-browser": {
    "freeProfilesLabel": {"en": "GO coming soon · ∞", "zh": "GO 即将推出 · ∞", "ru": "GO скоро выйдет · ∞", "ja": "GO 近日公開 · ∞", "fr": "GO à venir · ∞", "de": "GO angekündigt · ∞"},
    "verifiedAt": "2026-11-26",
    "source": "https://www.marketerbrowser.com/en/pricing/",
    "summary": {
      "en": "MarketerBrowser advertises GO as free with unlimited profiles. Its installer is coming soon. Paid editions include unlimited profiles. Ultimate and Full include the advanced API and cloud profiles.",
      "zh": "MarketerBrowser 公布的 GO 版永久免费，环境数量不限，安装包尚未开放下载。付费版均不限环境数量；Ultimate 和 Full 含高级 API 和云环境。",
      "ru": "В заявленной бесплатной версии MarketerBrowser GO число профилей не ограничено. Установщик ещё не выпущен. Платные версии включают неограниченное число профилей, а Ultimate и Full также дают доступ к расширенному API и облачным профилям.",
      "ja": "MarketerBrowser GO は無料でプロファイル数無制限と案内されています。インストーラーは近日公開予定です。有料版もプロファイル数は無制限で、Ultimate と Full は高度な API とクラウドプロファイルに対応します。",
      "fr": "MarketerBrowser annonce GO comme une édition gratuite avec profils illimités. Son programme d’installation est à venir. Les éditions payantes incluent des profils illimités. Ultimate et Full incluent l’API avancée et les profils cloud.",
      "de": "MarketerBrowser kündigt GO als kostenlose Ausgabe mit unbegrenzt vielen Profilen an. Der Installer ist noch nicht verfügbar. Alle bezahlten Ausgaben bieten unbegrenzt viele Profile. Ultimate und Full enthalten die erweiterte API und Cloud-Profile."
    },
    "billing": {
      "en": "Pro, Ultimate and Full cost $29, $49 and $69 on monthly billing. Annual totals are $179, $299 and $419 respectively. Additional users cost extra.",
      "zh": "Pro、Ultimate、Full 月付分别为 29、49、69 美元；年付总额分别为 179、299、419 美元。额外用户单独计费。",
      "ru": "Pro, Ultimate и Full стоят 29, 49 и 69 $ при ежемесячной оплате. Плата за год составляет 179, 299 и 419 $ соответственно. Дополнительные пользователи оплачиваются отдельно.",
      "ja": "Pro、Ultimate、Full の月払いは順に 29、49、69 ドル、年額は 179、299、419 ドルです。ユーザー追加は別料金です。",
      "fr": "Pro, Ultimate et Full coûtent 29, 49 et 69 $ au mois. Leurs tarifs annuels sont respectivement de 179, 299 et 419 $. Chaque utilisateur supplémentaire est facturé en sus.",
      "de": "Pro, Ultimate und Full kosten bei monatlicher Zahlung 29, 49 und 69 $. Die Jahrespreise betragen 179, 299 und 419 $. Weitere Nutzer werden gesondert berechnet."
    },
    "freeProfiles": 0,
    "startingPrice": "$29/mo",
    "plans": [
      {
        "name": "GO",
        "price": "$0",
        "profiles": "∞",
        "features": []
      },
      {
        "name": "Pro",
        "price": "$29/mo",
        "profiles": "∞",
        "features": []
      },
      {
        "name": "Ultimate",
        "price": "$49/mo",
        "profiles": "∞",
        "features": []
      },
      {
        "name": "Full",
        "price": "$69/mo",
        "profiles": "∞",
        "features": []
      }
    ]
  },
  "morelogin": {
    "verifiedAt": "2026-11-26",
    "source": "https://www.morelogin.com/pricing",
    "billing": {
      "en": "Monthly $9; annual equivalent $5.40/month, billed annually. Cloud phones are separate.",
      "zh": "月付 $9；年付折算 $5.40/月，按年付款。云手机单独计费。",
      "ru": "$9 в месяц; $5.40/мес. при оплате за год. Облачные телефоны оплачиваются отдельно.",
      "ja": "月払い $9、年払いは月換算 $5.40。クラウドフォンは別料金です。",
      "fr": "9 $ par mois ; équivalent annuel de 5,40 $/mois, payé annuellement. Téléphones cloud séparés.",
      "de": "9 $ monatlich; bei Jahreszahlung umgerechnet 5,40 $/Monat. Cloud-Smartphones separat."
    },
    "summary": {
      "en": "MoreLogin offers 2 free browser profiles and 2 users. Pro starts at 10 profiles. Chrome and Firefox, synchronization and Local API are available. Cloud-phone Open/Local API includes remote connections and lifecycle operations; phone resources are billed separately. Browser RPA requires a local Chromium profile and desktop client v2.73.0 or later.",
      "zh": "MoreLogin 提供 2 个免费浏览器环境和 2 个用户，Pro 从 10 个环境起。支持 Chrome、Firefox、同步器和 Local API。云手机 Open/Local API 支持远程连接和生命周期操作，云手机资源独立计费。 Browser RPA 需要本地 Chromium 环境及 v2.73.0 或更高版本的桌面客户端。",
      "ru": "MoreLogin предлагает 2 бесплатных профиля и 2 пользователей. Pro начинается с 10 профилей. Поддерживаются Chrome, Firefox, синхронизация и Local API. API облачных телефонов поддерживает удалённое подключение и управление; ресурсы оплачиваются отдельно. Для Browser RPA нужен локальный профиль Chromium и клиент версии v2.73.0 или новее.",
      "ja": "MoreLogin は無料で 2 プロファイルと 2 ユーザーを提供し、Pro は 10 プロファイルからです。Chrome、Firefox、同期、Local API に対応。クラウドフォン API はリモート接続と端末管理を提供し、別途課金されます。 Browser RPA はローカルの Chromium プロファイルと v2.73.0 以降のデスクトップクライアントが必要です。",
      "fr": "MoreLogin propose 2 profils gratuits et 2 utilisateurs. Pro commence à 10 profils. Chrome, Firefox, synchronisation et Local API sont disponibles. Les API des téléphones cloud proposent connexion distante et gestion des appareils, avec facturation séparée. Browser RPA nécessite un profil Chromium local et le client de bureau v2.73.0 ou ultérieur.",
      "de": "MoreLogin bietet 2 kostenlose Profile und 2 Nutzer. Pro beginnt bei 10 Profilen. Chrome, Firefox, Synchronisierung und Local API werden unterstützt. Cloud-Smartphone-APIs bieten Fernverbindungen und Geräteverwaltung; Ressourcen werden separat berechnet. Browser RPA erfordert ein lokales Chromium-Profil und den Desktop-Client ab v2.73.0."
    },
    "freeProfiles": 2,
    "startingPrice": "$9/mo",
    "plans": [
      {
        "name": "Free",
        "price": "$0",
        "profiles": "2",
        "features": []
      },
      {
        "name": "Pro 10",
        "price": "$9/mo",
        "profiles": "10",
        "features": []
      }
    ]
  },
  "adspower": {
    "verifiedAt": "2026-11-26",
    "source": "https://www.adspower.com/pricing",
    "billing": {
      "en": "USD, no additional members; monthly billing every 30 days. Professional 10: $64.80/year ($5.40/month equivalent).",
      "zh": "美元报价，不含额外成员；月付按 30 天计费。Professional 10 年付 $64.80，折算 $5.40/月。",
      "ru": "USD, без дополнительных участников; оплата каждые 30 дней. Professional 10: $64.80/год ($5.40/мес.).",
      "ja": "米ドル、追加メンバーなし、30 日ごとの請求。Professional 10 は年額 $64.80（月換算 $5.40）。",
      "fr": "USD, sans membres supplémentaires ; facturation tous les 30 jours. Professional 10 : 64,80 $/an, soit 5,40 $/mois.",
      "de": "USD, ohne zusätzliche Mitglieder; Abrechnung alle 30 Tage. Professional 10: 64,80 $/Jahr, umgerechnet 5,40 $/Monat."
    },
    "summary": {
      "en": "AdsPower offers 2 free profiles. Professional supports 10, 20, 50 or 100 profiles; Business supports larger configurations. It provides browser automation and an AI Agent. September release notes add scheduled Agent tasks, quick profile creation and parallel Agents. Free excludes the Local API and includes zero AI Agent credits. The Local API allows 120 requests/min on Professional, 300 on Business and 600 on Enterprise.",
      "zh": "AdsPower 提供 2 个免费环境，Professional 可选 10、20、50 或 100 个环境，Business 支持更大配置。提供浏览器自动化和 AI Agent。9 月版本新增 Agent 定时任务、快速创建环境和并行 Agent。免费版不含 Local API，AI Agent 额度为零。Professional、Business、Enterprise 的 Local API 限额分别为每分钟 120、300、600 次。",
      "ru": "AdsPower предлагает 2 бесплатных профиля. Professional: 10, 20, 50 или 100; Business — больше. Доступны автоматизация и AI Agent. В сентябре добавлены расписания, быстрое создание профилей и параллельные агенты. В бесплатном тарифе нет Local API, а баланс AI Agent равен нулю. Local API допускает 120 запросов в минуту на Professional, 300 на Business и 600 на Enterprise.",
      "ja": "AdsPower は無料 2 プロファイル、Professional は 10・20・50・100、Business はより大規模な構成に対応。自動化と AI Agent を提供し、9 月に定期実行、クイック作成、並列 Agent を追加。無料プランでは Local API は利用できず、AI Agent のクレジットは 0 です。Local API の毎分のリクエスト上限は Professional が 120、Business が 300、Enterprise が 600 です。",
      "fr": "AdsPower offre 2 profils gratuits. Professional : 10, 20, 50 ou 100 ; Business pour davantage. Automatisation et AI Agent sont disponibles. Les notes de septembre ajoutent planification, création rapide et agents parallèles. Le forfait gratuit exclut l’API locale et comprend zéro crédit AI Agent. L’API locale autorise 120 requêtes par minute avec Professional, 300 avec Business et 600 avec Enterprise.",
      "de": "AdsPower bietet 2 kostenlose Profile. Professional: 10, 20, 50 oder 100; Business für größere Konfigurationen. Automatisierung und AI Agent sind verfügbar. Im September kamen geplante Aufgaben, Schnellerstellung und parallele Agents hinzu. Der kostenlose Tarif enthält keine lokale API und kein AI-Agent-Guthaben. Die lokale API erlaubt bei Professional 120 Anfragen pro Minute, bei Business 300 und bei Enterprise 600."
    },
    "freeProfiles": 2,
    "startingPrice": "$9/mo",
    "plans": [
      {
        "name": "Free",
        "price": "$0",
        "profiles": "2",
        "features": []
      },
      {
        "name": "Professional 10",
        "price": "$9/mo",
        "profiles": "10",
        "features": []
      },
      {
        "name": "Professional 20",
        "price": "$12/mo",
        "profiles": "20",
        "features": []
      },
      {
        "name": "Professional 50",
        "price": "$21/mo",
        "profiles": "50",
        "features": []
      },
      {
        "name": "Professional 100",
        "price": "$36/mo",
        "profiles": "100",
        "features": []
      },
      {
        "name": "Business 200",
        "price": "$61/mo",
        "profiles": "200",
        "features": []
      }
    ]
  },
  "gologin": {
    "verifiedAt": "2026-11-26",
    "source": "https://gologin.com/pricing/",
    "billing": {
      "en": "Monthly prices; annual equivalent starts at $4.50/month, billed annually.",
      "zh": "展示月付价格；年付折算从 $4.50/月起，按年付款。",
      "ru": "Месячные цены; при оплате за год — от $4.50/мес.",
      "ja": "月払い価格を表示。年払いは月換算 $4.50 からです。",
      "fr": "Prix mensuels ; paiement annuel à partir de 4,50 $/mois équivalent.",
      "de": "Monatspreise; bei Jahreszahlung ab umgerechnet 4,50 $/Monat."
    },
    "summary": {
      "en": "GoLogin Free allows 3 saved profiles and 25 creations per calendar month. Cloud launches and REST API access require a paid plan. Professional starts at 10 profiles and includes one concurrent cloud session and 300 API requests per minute.",
      "zh": "GoLogin 免费版最多保存 3 个环境，每个自然月可创建 25 次。云端启动和 REST API 需付费套餐。Professional 从 10 个环境起，含 1 个并发云端会话，API 每分钟限 300 次请求。",
      "ru": "В GoLogin Free можно хранить 3 профиля и создавать до 25 за календарный месяц. Облачный запуск и REST API доступны на платных тарифах. Professional начинается с 10 профилей и включает одну облачную сессию и 300 запросов API в минуту.",
      "ja": "GoLogin の無料枠は保存 3 プロファイル、作成は暦月あたり 25 回までです。クラウド起動と REST API は有料プランで利用できます。Professional は 10 プロファイルからで、クラウド同時接続は 1 セッション、API は毎分 300 リクエストです。",
      "fr": "GoLogin Free permet de conserver 3 profils et d’en créer 25 par mois civil. Le lancement dans le cloud et l’API REST nécessitent un abonnement payant. Professional démarre à 10 profils et inclut une session cloud simultanée et 300 requêtes API par minute.",
      "de": "GoLogin Free erlaubt 3 gespeicherte Profile und 25 Neuerstellungen pro Kalendermonat. Cloud-Starts und REST-API erfordern einen Bezahltarif. Professional beginnt bei 10 Profilen mit einer gleichzeitigen Cloud-Sitzung und 300 API-Anfragen pro Minute."
    },
    "freeProfiles": 3,
    "startingPrice": "$9/mo",
    "plans": [
      {
        "name": "Free",
        "price": "$0",
        "profiles": "3",
        "features": []
      },
      {
        "name": "Professional 10",
        "price": "$9/mo",
        "profiles": "10",
        "features": []
      },
      {
        "name": "Professional 25",
        "price": "$19/mo",
        "profiles": "25",
        "features": []
      },
      {
        "name": "Professional 50",
        "price": "$29/mo",
        "profiles": "50",
        "features": []
      },
      {
        "name": "Professional 100",
        "price": "$39/mo",
        "profiles": "100",
        "features": []
      },
      {
        "name": "Business 300",
        "price": "$99/mo",
        "profiles": "300",
        "features": []
      },
      {
        "name": "Business 500",
        "price": "$139/mo",
        "profiles": "500",
        "features": []
      },
      {
        "name": "Enterprise 1000",
        "price": "$179/mo",
        "profiles": "1000",
        "features": []
      }
    ]
  },
  "multilogin": {
    "verifiedAt": "2026-11-26",
    "source": "https://multilogin.com/pricing/",
    "billing": {
      "en": "Pro 10: $11 monthly or $85/year (about $7.08/month). Free profiles are cloud-only, without API.",
      "zh": "Pro 10 月付 $11，年付 $85（约 $7.08/月）。免费环境仅限云端，不含 API。",
      "ru": "Pro 10: $11/мес. или $85/год (около $7.08/мес.). Бесплатные профили только в облаке, без API.",
      "ja": "Pro 10 は月額 $11 または年額 $85（月換算約 $7.08）。無料プロファイルはクラウド専用で API なし。",
      "fr": "Pro 10 : 11 $/mois ou 85 $/an (environ 7,08 $/mois). Profils gratuits cloud uniquement, sans API.",
      "de": "Pro 10: 11 $ monatlich oder 85 $ jährlich (ca. 7,08 $/Monat). Kostenlose Profile nur in der Cloud, ohne API."
    },
    "summary": {
      "en": "Multilogin Free includes 5 cloud profiles in total, including one mobile profile, with one-time allowances of 200 MB of proxy traffic and 30 mobile minutes. Free profiles are deleted after 7 days of complete inactivity. API access starts with Pro 10. Pro 10/20/50 allow 50/75/100 requests per minute. Business starts at 100 profiles and includes unlimited team seats.",
      "zh": "Multilogin 免费版的云端环境总额度为 5 个，其中包含 1 个移动环境，一次性赠送 200 MB 代理流量和 30 分钟移动时长。连续 7 天未启动任何环境会删除免费环境。API 从 Pro 10 起开放；Pro 10/20/50 每分钟分别限 50/75/100 次请求。Business 从 100 个环境起，团队席位不限。",
      "ru": "В Multilogin Free всего 5 облачных профилей, включая один мобильный. Разово предоставляются 200 МБ прокси-трафика и 30 мобильных минут. Если не запускать ни одного профиля 7 дней, бесплатные профили удаляются. API доступен с Pro 10. На Pro 10/20/50 лимиты составляют 50/75/100 запросов в минуту. Business — от 100 профилей с неограниченным числом мест.",
      "ja": "Multilogin の無料枠はモバイル 1 件を含めてクラウドプロファイル合計 5 件で、プロキシ通信量 200 MB とモバイル利用 30 分を初回のみ付与します。7 日間どのプロファイルも起動しないと無料プロファイルは削除されます。API は Pro 10 から利用でき、Pro 10/20/50 の上限は毎分 50/75/100 回です。Business は 100 プロファイルからで、チーム席数は無制限です。",
      "fr": "Multilogin Free inclut 5 profils cloud au total, dont un mobile, et un crédit unique de 200 Mo de trafic proxy et de 30 minutes mobiles. Les profils gratuits sont supprimés après 7 jours sans lancement. L’API est accessible dès Pro 10, avec 50/75/100 requêtes par minute sur Pro 10/20/50. Business commence à 100 profils et inclut des sièges illimités.",
      "de": "Multilogin Free umfasst insgesamt 5 Cloud-Profile einschließlich eines Mobilprofils sowie einmalig 200 MB Proxy-Traffic und 30 Mobilminuten. Wird 7 Tage lang kein Profil gestartet, werden die kostenlosen Profile gelöscht. API-Zugang gibt es ab Pro 10 mit 50/75/100 Anfragen pro Minute bei Pro 10/20/50. Business beginnt bei 100 Profilen und bietet unbegrenzt viele Teamplätze."
    },
    "freeProfiles": 5,
    "startingPrice": "$11/mo",
    "plans": [
      {
        "name": "Free",
        "price": "$0",
        "profiles": "5",
        "features": []
      },
      {
        "name": "Pro 10",
        "price": "$11/mo",
        "profiles": "10",
        "features": []
      },
      {
        "name": "Pro 20",
        "price": "$19/mo",
        "profiles": "20",
        "features": []
      },
      {
        "name": "Pro 50",
        "price": "$29/mo",
        "profiles": "50",
        "features": []
      },
      {
        "name": "Business 100",
        "price": "$40/mo",
        "profiles": "100",
        "features": []
      },
      {
        "name": "Business 300",
        "price": "$89/mo",
        "profiles": "300",
        "features": []
      }
    ]
  },
  "incogniton": {
    "freeProfilesLabel": {
      "en": "10 profiles for the first two months, then 3",
      "zh": "前两个月 10 个环境，之后 3 个",
      "ru": "10 профилей первые два месяца, затем 3",
      "ja": "最初の2か月は10プロファイル、その後は3",
      "fr": "10 profils les deux premiers mois, puis 3",
      "de": "10 Profile in den ersten zwei Monaten, danach 3"
    },
    "verifiedAt": "2026-11-26",
    "source": "https://incogniton.com/pricing/",
    "billing": {
      "en": "With monthly billing, Starter Plus costs $19.99 for 10 profiles and Entrepreneur costs $29.99 for 50. Standard prepayment discounts are 30% for six months and 40% for a year.",
      "zh": "常规月付价为 Starter Plus 10 个环境 19.99 美元，Entrepreneur 50 个环境 29.99 美元。常规预付半年优惠 30%，预付一年优惠 40%。",
      "ru": "При помесячной оплате Starter Plus стоит $19.99 за 10 профилей, Entrepreneur — $29.99 за 50. Обычные скидки за предоплату составляют 30% за полгода и 40% за год.",
      "ja": "月払いは Starter Plus が10プロファイルで19.99米ドル、Entrepreneur が50プロファイルで29.99米ドルです。通常の前払い割引は半年で30%、年間で40%です。",
      "fr": "En paiement mensuel, Starter Plus coûte 19,99 $ pour 10 profils et Entrepreneur 29,99 $ pour 50. Les remises habituelles sont de 30 % pour six mois prépayés et de 40 % pour un an.",
      "de": "Bei monatlicher Zahlung kostet Starter Plus 19,99 US-Dollar für 10 Profile und Entrepreneur 29,99 US-Dollar für 50. Die regulären Rabatte bei Vorauszahlung betragen 30 % für sechs Monate und 40 % für ein Jahr."
    },
    "summary": {
      "en": "Incogniton’s free Starter plan includes 10 profiles for the first two months, then 3. Free built-in proxies are available on every plan. Selenium, Puppeteer, the REST API and the Synchronizer require Entrepreneur or higher.",
      "zh": "Incogniton 免费 Starter 套餐前两个月提供 10 个环境，此后为 3 个。所有套餐均含免费内置代理。Selenium、Puppeteer、REST API 和同步器仅供 Entrepreneur 及以上套餐使用。",
      "ru": "Бесплатный Starter от Incogniton включает 10 профилей в первые два месяца и 3 в дальнейшем. Бесплатные встроенные прокси доступны на всех тарифах. Для Selenium, Puppeteer, REST API и синхронизатора нужен Entrepreneur или выше.",
      "ja": "Incogniton の無料 Starter は最初の2か月が10プロファイル、その後は3です。無料の内蔵プロキシは全プランで利用できます。Selenium、Puppeteer、REST API、同期機能は Entrepreneur 以上が対象です。",
      "fr": "Le forfait gratuit Starter d’Incogniton comprend 10 profils pendant les deux premiers mois, puis 3. Les proxys intégrés sont gratuits dans tous les forfaits. Selenium, Puppeteer, l’API REST et le synchroniseur sont disponibles à partir d’Entrepreneur.",
      "de": "Der kostenlose Starter-Tarif von Incogniton bietet in den ersten zwei Monaten 10 Profile, danach 3. Kostenlose integrierte Proxys sind in allen Tarifen enthalten. Selenium, Puppeteer, REST-API und Synchronisierer gibt es ab Entrepreneur."
    },
    "freeProfiles": 3,
    "startingPrice": "$19.99/mo",
    "plans": [
      {
        "name": "Starter",
        "price": "$0",
        "profiles": "10 → 3",
        "features": []
      },
      {
        "name": "Starter Plus",
        "price": "$19.99/mo",
        "profiles": "10",
        "features": []
      },
      {
        "name": "Entrepreneur",
        "price": "$29.99/mo",
        "profiles": "50",
        "features": []
      },
      {
        "name": "Professional",
        "price": "$79.99/mo",
        "profiles": "150",
        "features": []
      },
      {
        "name": "Custom Package",
        "price": "$149.99+/mo",
        "profiles": "500+",
        "features": []
      }
    ]
  },
  "dolphin-anty": {
    "verifiedAt": "2026-11-26",
    "source": "https://dolphin-anty.com/tarifs/",
    "billing": {
      "en": "Monthly base prices. Six-month prepayment: 20% off; twelve-month: 40% off. Extra seats cost more.",
      "zh": "展示基础月付价；预付 6 个月优惠 20%，12 个月优惠 40%；额外席位另计。",
      "ru": "Базовые месячные цены. Предоплата за 6 месяцев: −20%; за 12: −40%. Дополнительные места оплачиваются отдельно.",
      "ja": "基本月額。6 か月前払いは 20%、12 か月は 40% 割引。追加席は別料金。",
      "fr": "Prix mensuels de base. Prépaiement de 6 mois : −20 % ; 12 mois : −40 %. Sièges supplémentaires payants.",
      "de": "Monatliche Grundpreise. 6 Monate voraus: 20 % Rabatt; 12 Monate: 40 %. Zusatzplätze kosten extra."
    },
    "summary": {
      "en": "Dolphin Anty Free for new accounts allows up to 3 saved profiles, all 3 can run at once, and up to 20 profile creations per calendar month. Starter begins at 20 profiles and adds cloud sync, transfer and cookie export. Additional seats on Base/Team/Enterprise cost $10/$20/$25 respectively.",
      "zh": "Dolphin Anty 新注册账号的免费版最多保存 3 个浏览器环境，可同时运行这 3 个，每个自然月最多创建 20 次。Starter 从 20 个环境起，提供云同步、转移和 Cookie 导出。Base/Team/Enterprise 额外席位分别为 $10/$20/$25。",
      "ru": "Dolphin Anty Free: для новых аккаунтов: до 3 сохранённых и одновременно запущенных профилей, до 20 созданий за календарный месяц. Starter от 20 профилей с облачной синхронизацией, передачей и экспортом cookie. Дополнительные места Base/Team/Enterprise: $10/$20/$25.",
      "ja": "Dolphin Anty 新規アカウントの無料プランでは最大 3 プロファイルを保存・同時実行でき、暦月あたり最大 20 回作成できます。Starter は 20 からでクラウド同期、転送、Cookie 出力を提供。Base/Team/Enterprise の追加席は $10/$20/$25。",
      "fr": "Dolphin Anty Free : pour les nouveaux comptes : jusqu’à 3 profils enregistrés et actifs simultanément, et 20 créations par mois civil. Starter commence à 20 avec synchronisation cloud, transfert et export de cookies. Sièges supplémentaires Base/Team/Enterprise : 10/20/25 $.",
      "de": "Dolphin Anty Free: für neue Konten: bis zu 3 gespeicherte und gleichzeitig nutzbare Profile sowie 20 Erstellungen pro Kalendermonat. Starter ab 20 mit Cloud-Sync, Übertragung und Cookie-Export. Zusätzliche Plätze bei Base/Team/Enterprise: 10/20/25 $."
    },
    "freeProfiles": 3,
    "startingPrice": "$10/mo",
    "plans": [
      {
        "name": "Free",
        "price": "$0",
        "profiles": "3",
        "features": []
      },
      {
        "name": "Starter 20",
        "price": "$10/mo",
        "profiles": "20",
        "features": []
      },
      {
        "name": "Base 100",
        "price": "$89/mo",
        "profiles": "100",
        "features": []
      },
      {
        "name": "Team 300",
        "price": "$159/mo",
        "profiles": "300",
        "features": []
      },
      {
        "name": "Enterprise 1000",
        "price": "$299/mo",
        "profiles": "1000",
        "features": []
      }
    ]
  },
  "kameleo": {
    "verifiedAt": "2026-11-26",
    "source": "https://kameleo.io/pricing",
    "billing": {
      "en": "Startup, Business and Enterprise cost €59, €299 and €1,499 per month. With annual billing, the monthly equivalents are €45, €225 and €1,125.",
      "zh": "Startup、Business、Enterprise 月付分别为 €59、€299、€1,499；年付折算每月分别为 €45、€225、€1,125。",
      "ru": "Startup, Business и Enterprise стоят 59, 299 и 1 499 € в месяц. При оплате за год это 45, 225 и 1 125 € в пересчёте на месяц.",
      "ja": "Startup、Business、Enterprise の月払いは順に €59、€299、€1,499。年払いの月額換算は €45、€225、€1,125 です。",
      "fr": "Startup, Business et Enterprise coûtent respectivement 59 €, 299 € et 1 499 € par mois. Avec paiement annuel, le coût mensuel équivalent est de 45 €, 225 € et 1 125 €.",
      "de": "Startup, Business und Enterprise kosten monatlich 59 €, 299 € und 1.499 €. Bei Jahreszahlung entspricht das 45 €, 225 € und 1.125 € pro Monat."
    },
    "summary": {
      "en": "Kameleo Free includes 100 cloud profiles, unlimited local profiles, 2 concurrent browsers and 300 browser minutes per month. Paid tiers include 10, 100 and 1,000 concurrent browsers respectively. Docker and mobile browser emulation are available on Free.",
      "zh": "Kameleo 免费版含 100 个云环境，本地环境不限，可同时运行 2 个浏览器，每月共 300 分钟。三个付费套餐分别含 10、100、1,000 个并发浏览器。免费版支持 Docker 和移动浏览器模拟。",
      "ru": "Kameleo Free включает 100 облачных профилей, неограниченное число локальных профилей, 2 одновременных браузера и 300 минут в месяц. На платных тарифах доступны 10, 100 и 1 000 одновременных браузеров соответственно. Docker и эмуляция мобильных браузеров доступны на Free.",
      "ja": "Kameleo の無料版はクラウドプロファイル 100 件、ローカルは無制限。同時起動は 2 ブラウザで、月間の利用時間は合計 300 分です。有料プランの同時起動数は順に 10、100、1,000。無料版でも Docker とモバイルブラウザのエミュレーションが使えます。",
      "fr": "Kameleo Free comprend 100 profils cloud et un nombre illimité de profils locaux. Il permet d’ouvrir 2 navigateurs simultanément pour un total de 300 minutes par mois. Les offres payantes incluent respectivement 10, 100 et 1 000 navigateurs simultanés. Docker et l’émulation mobile sont disponibles dès l’offre gratuite.",
      "de": "Kameleo Free umfasst 100 Cloud-Profile, unbegrenzt viele lokale Profile und 2 gleichzeitig geöffnete Browser mit insgesamt 300 Minuten pro Monat. Die Bezahltarife erlauben 10, 100 bzw. 1.000 gleichzeitige Browser. Docker und die mobile Browseremulation sind bereits im Gratistarif enthalten."
    },
    "freeProfilesLabel": {"en": "100 cloud · unlimited local · 2 concurrent", "zh": "100 个云环境 · 本地不限 · 2 个并发", "ru": "100 облачных · локальные без ограничений · 2 одновременно", "ja": "クラウド 100 件・ローカル無制限・同時起動 2 件", "fr": "100 dans le cloud · profils locaux illimités · 2 simultanés", "de": "100 Cloud-Profile · lokal unbegrenzt · 2 gleichzeitig"},
    "freeProfiles": 100,
    "startingPrice": "€59/mo",
    "plans": [
      {
        "name": "Free",
        "price": "€0",
        "profiles": "100",
        "features": [
          "2 concurrent browsers",
          "Unlimited local profiles",
          "300 min/month",
          "3 team members"
        ]
      },
      {
        "name": "Startup",
        "price": "€59/mo",
        "profiles": "5000",
        "features": [
          "10 concurrent browsers",
          "Unlimited usage time",
          "Unlimited team members"
        ]
      },
      {
        "name": "Business",
        "price": "€299/mo",
        "profiles": "5000",
        "features": [
          "100 concurrent browsers",
          "Unlimited mobile emulation"
        ]
      },
      {
        "name": "Enterprise",
        "price": "€1499/mo",
        "profiles": "5000+",
        "features": [
          "1,000 concurrent browsers",
          "Expert consultation",
          "Priority support"
        ]
      }
    ]
  },
  "vmlogin": {
    "verifiedAt": "2026-11-26",
    "source": "https://www.vmlogin.us/pricing.html",
    "billing": {
      "en": "Solo, Team and Scale cost $99, $209 and $499 per month respectively. Annual payment saves 25%.",
      "zh": "Solo、Team、Scale 月付分别为 $99、$209、$499。年付优惠 25%。",
      "ru": "Solo, Team и Scale стоят 99, 209 и 499 $ в месяц соответственно. Скидка при оплате за год — 25%.",
      "ja": "Solo、Team、Scale の月払いは順に $99、$209、$499。年払いは 25% 割引です。",
      "fr": "Solo, Team et Scale coûtent respectivement 99 $, 209 $ et 499 $ par mois. Le paiement annuel donne droit à 25 % de réduction.",
      "de": "Solo, Team und Scale kosten monatlich 99 $, 209 $ und 499 $. Bei Jahreszahlung gilt ein Rabatt von 25 %."
    },
    "summary": {
      "en": "VMLogin offers new users a three-day trial with 5 profiles. Solo, Team and Scale include 200, 500 and 3,000 profiles respectively. The trial, Solo and Team include the basic REST API. Scale includes the advanced REST API.",
      "zh": "VMLogin 为新用户提供 3 天试用，含 5 个环境。Solo、Team、Scale 分别含 200、500、3,000 个环境。试用、Solo、Team 提供基础 REST API，Scale 提供高级 REST API。",
      "ru": "VMLogin предлагает новым пользователям пробный период на 3 дня с 5 профилями. В Solo, Team и Scale входят 200, 500 и 3 000 профилей соответственно. На пробном тарифе, Solo и Team доступен базовый REST API, а на Scale — расширенный.",
      "ja": "VMLogin の新規ユーザーは 5 プロファイルで 3 日間試用できます。Solo、Team、Scale の枠は順に 200、500、3,000。試用版と Solo、Team は基本 REST API、Scale は高度な REST API に対応します。",
      "fr": "VMLogin propose aux nouveaux utilisateurs un essai de 3 jours avec 5 profils. Solo, Team et Scale incluent respectivement 200, 500 et 3 000 profils. L’essai, Solo et Team donnent accès à l’API REST de base, et Scale à sa version avancée.",
      "de": "Neue Nutzer können VMLogin drei Tage mit 5 Profilen testen. Solo, Team und Scale enthalten 200, 500 bzw. 3.000 Profile. Im Testzeitraum sowie bei Solo und Team steht die Basis-REST-API zur Verfügung, bei Scale die erweiterte REST-API."
    },
    "freeProfiles": 0,
    "startingPrice": "$99/mo",
    "plans": [
      {
        "name": "Trial (3 days)",
        "price": "$0",
        "profiles": "5",
        "features": [
          "Basic REST API",
          "Batch create",
          "Cookie import/export"
        ]
      },
      {
        "name": "Solo",
        "price": "$99/mo",
        "profiles": "200",
        "features": [
          "5 sub-accounts",
          "Profile sharing",
          "Basic REST API"
        ]
      },
      {
        "name": "Team",
        "price": "$209/mo",
        "profiles": "500",
        "features": [
          "10 sub-accounts",
          "Profile transfer",
          "Basic REST API"
        ]
      },
      {
        "name": "Scale",
        "price": "$499/mo",
        "profiles": "3000",
        "features": [
          "20 sub-accounts",
          "Advanced REST API",
          "Priority support"
        ]
      }
    ]
  },
  "octobrowser": {
    "verifiedAt": "2026-11-26",
    "source": "https://octobrowser.net/pricing/",
    "billing": {
      "en": "Monthly prices; annual equivalents: €7/21/56/119/231. Starter trial lasts 2 days, once per new user; no ongoing free plan.",
      "zh": "展示月付价；年付折算 €7/21/56/119/231。新用户可获一次 2 天 Starter 试用，无长期免费套餐。",
      "ru": "Месячные цены; за год эквивалент €7/21/56/119/231. Пробный Starter — 2 дня один раз для нового пользователя; постоянного бесплатного тарифа нет.",
      "ja": "月払い価格。年払い月換算は €7/21/56/119/231。新規ユーザーは Starter を一度だけ 2 日間試用可能。継続無料プランなし。",
      "fr": "Prix mensuels ; équivalents annuels : 7/21/56/119/231 €. Essai Starter de 2 jours, une fois par nouvel utilisateur ; aucun forfait gratuit permanent.",
      "de": "Monatspreise; bei Jahreszahlung umgerechnet 7/21/56/119/231 €. Starter-Test 2 Tage, einmal pro Neukunde; kein dauerhafter Gratisplan."
    },
    "summary": {
      "en": "Octo Browser Lite starts at 3 profiles. Starter/Base/Team/Advanced include 10/100/350/1200 base profiles; advertised expansion ceilings are not included quotas. API starts at Base. Team has 3 team seats and Advanced 8. Octium 155 was published on October 8, 2026.",
      "zh": "Octo Browser Lite 从 3 个环境起。Starter/Base/Team/Advanced 基础环境数为 10/100/350/1200，扩容上限不代表已含配额。API 从 Base 开放。Team 含 3 个团队席位，Advanced 含 8 个。Octium 155 于 2026 年 10 月 8 日发布。",
      "ru": "Octo Browser Lite — 3 профиля. Starter/Base/Team/Advanced: 10/100/350/1200 базовых профилей; пределы расширения не включены. API доступен от Base. Team включает 3 места, Advanced — 8. Octium 155 выпущен 8 октября 2026.",
      "ja": "Octo Browser Lite は 3 プロファイルから。Starter/Base/Team/Advanced の基本枠は 10/100/350/1200 で、拡張上限とは異なります。API は Base 以上。Team は 3 席、Advanced は 8 席。Octium 155 は 2026 年 10 月 8 日公開。",
      "fr": "Octo Browser Lite commence à 3 profils. Starter/Base/Team/Advanced incluent 10/100/350/1200 profils de base ; les plafonds d’extension ne sont pas inclus. API dès Base. Team : 3 sièges ; Advanced : 8. Octium 155 publié le 8 octobre 2026.",
      "de": "Octo Browser Lite beginnt mit 3 Profilen. Starter/Base/Team/Advanced: 10/100/350/1200 Basisprofile; Erweiterungsgrenzen sind keine enthaltenen Kontingente. API ab Base. Team hat 3 Plätze, Advanced 8. Octium 155 erschien am 8. Oktober 2026."
    },
    "freeProfiles": 0,
    "startingPrice": "€10/mo",
    "plans": [
      {
        "name": "Lite 3",
        "price": "€10/mo",
        "profiles": "3",
        "features": []
      },
      {
        "name": "Starter 10",
        "price": "€29/mo",
        "profiles": "10",
        "features": []
      },
      {
        "name": "Base 100",
        "price": "€79/mo",
        "profiles": "100",
        "features": []
      },
      {
        "name": "Team 350",
        "price": "€169/mo",
        "profiles": "350",
        "features": []
      },
      {
        "name": "Advanced 1200",
        "price": "€329/mo",
        "profiles": "1200",
        "features": []
      }
    ]
  }
};

export const LEGACY_REVIEW_DATE = "2026-06-27";
export function reviewUpdatedAt(slug: string) { return vendorUpdates[slug]?.verifiedAt || LEGACY_REVIEW_DATE; }

export const vendorFeatureSources: Record<string, string[]> = {
  hidemyacc: ["https://docs.hidemyacc.com/1.-introduction-and-installation/1.1.-what-is-hidemyacc", "https://docs.hidemyacc.com/13.-hidemyacc-3.0-api/13.2.-user-api/query-account-information"],
  undetectable: ["https://docs.undetectable.io/pay-and-subscriptions/plans-overview/"],
  lalicat: ["https://www.lalicat.com/account-registration-2"],
  "marketer-browser": ["https://www.marketerbrowser.com/en/go/"],
  gologin: ["https://gologin.com/release-notes/", "https://support.gologin.com/en/articles/14617029-pricing", "https://support.gologin.com/en/articles/14838958-faq-subscription"],
  multilogin: ["https://multilogin.com/release-notes/", "https://multilogin.com/help/subscription-plan-comparison/"],
  morelogin: ["https://guide.morelogin.com/browser-rpa/overview", "https://guide.morelogin.com/api-reference/appendix/changelog"],
  adspower: ["https://www.adspower.com/release"],
  "dolphin-anty": ["https://docs.dolphin-anty.com/en/personal-cabinet/plans-in-dolphin-anty"],
  incogniton: ["https://docs.incogniton.com/getting-started/create-an-account"],
  kameleo: ["https://help.kameleo.io/article/51-subscription-plans-overview"],
  vmlogin: ["https://www.vmlogin.us/help/get-started/free-trial.html"],
  octobrowser: ["https://docs.octobrowser.net/en/payments/subscriptions/", "https://docs.octobrowser.net/en/changelog/octium-changelog/"],
};

export const vendorLatestUpdates: Record<string, Record<Locale, string>> = {
  "gologin": {
    "en": "October 6, 2026: Saturn 4.22.2 fixes Apple login and session issues.",
    "zh": "2026 年 10 月 6 日：Saturn 4.22.2 修复 Apple 登录和会话问题。",
    "ru": "6 октября 2026: Saturn 4.22.2 исправляет вход через Apple и проблемы сеансов.",
    "ja": "2026 年 10 月 6 日：Saturn 4.22.2 で Apple ログインとセッションの問題を修正。",
    "fr": "6 octobre 2026 : Saturn 4.22.2 corrige la connexion Apple et les sessions.",
    "de": "6. Oktober 2026: Saturn 4.22.2 behebt Probleme mit Apple-Anmeldung und Sitzungen."
  },
  "multilogin": {
    "en": "October 8, 2026: version 12.15 updates social login and proxy retry behavior.",
    "zh": "2026 年 10 月 8 日：12.15 版本更新社交登录和代理重试行为。",
    "ru": "8 октября 2026: версия 12.15 обновляет социальный вход и повторные попытки подключения прокси.",
    "ja": "2026 年 10 月 8 日：バージョン 12.15 でソーシャルログインとプロキシ再試行を更新。",
    "fr": "8 octobre 2026 : la version 12.15 actualise la connexion sociale et les nouvelles tentatives de proxy.",
    "de": "8. Oktober 2026: Version 12.15 aktualisiert Social-Login und Proxy-Wiederholungsversuche."
  },
  "morelogin": {
    "en": "Cloud phones: $0.006/minute with a $1.50 daily cap; monthly packages cost $23–25 for 30 days, depending on resources.",
    "zh": "云手机按量 $0.006/分钟，日封顶 $1.50；30 天包月按资源为 $23–25。",
    "ru": "Облачные телефоны: $0.006/мин., максимум $1.50/день; пакет на 30 дней — $23–25 в зависимости от ресурсов.",
    "ja": "クラウドフォンは $0.006/分、1 日上限 $1.50。30 日パックはリソースにより $23–25。",
    "fr": "Téléphones cloud : 0,006 $/minute, plafond de 1,50 $/jour ; forfait de 30 jours à 23–25 $ selon les ressources.",
    "de": "Cloud-Smartphones: 0,006 $/Minute, maximal 1,50 $ pro Tag; 30-Tage-Pakete kosten je nach Ressourcen 23–25 $."
  }
};
