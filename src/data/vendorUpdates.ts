import type { Locale } from "@/i18n/config";

export interface VendorUpdate { verifiedAt: string; source: string; billing: Record<Locale, string>; summary: Record<Locale, string>; freeProfiles: number; startingPrice: string; plans: { name: string; price: string; profiles: string; features: string[] }[] }

export const vendorUpdates: Record<string, VendorUpdate> = {
  "morelogin": {
    "verifiedAt": "2026-10-12",
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
      "en": "MoreLogin offers 2 free browser profiles and 2 users. Pro starts at 10 profiles. Chrome and Firefox, synchronization and Local API are available. Cloud-phone Open/Local API includes remote connections and lifecycle operations; phone resources are billed separately.",
      "zh": "MoreLogin 提供 2 个免费浏览器环境和 2 个用户，Pro 从 10 个环境起。支持 Chrome、Firefox、同步器和 Local API。云手机 Open/Local API 支持远程连接和生命周期操作，云手机资源独立计费。",
      "ru": "MoreLogin предлагает 2 бесплатных профиля и 2 пользователей. Pro начинается с 10 профилей. Поддерживаются Chrome, Firefox, синхронизация и Local API. API облачных телефонов поддерживает удалённое подключение и управление; ресурсы оплачиваются отдельно.",
      "ja": "MoreLogin は無料で 2 プロファイルと 2 ユーザーを提供し、Pro は 10 プロファイルからです。Chrome、Firefox、同期、Local API に対応。クラウドフォン API はリモート接続と端末管理を提供し、別途課金されます。",
      "fr": "MoreLogin propose 2 profils gratuits et 2 utilisateurs. Pro commence à 10 profils. Chrome, Firefox, synchronisation et Local API sont disponibles. Les API des téléphones cloud proposent connexion distante et gestion des appareils, avec facturation séparée.",
      "de": "MoreLogin bietet 2 kostenlose Profile und 2 Nutzer. Pro beginnt bei 10 Profilen. Chrome, Firefox, Synchronisierung und Local API werden unterstützt. Cloud-Smartphone-APIs bieten Fernverbindungen und Geräteverwaltung; Ressourcen werden separat berechnet."
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
    "verifiedAt": "2026-10-12",
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
      "en": "AdsPower offers 2 free profiles. Professional supports 10, 20, 50 or 100 profiles; Business supports larger configurations. It provides browser automation and an AI Agent. September release notes add scheduled Agent tasks, quick profile creation and parallel Agents. API limits depend on the plan.",
      "zh": "AdsPower 提供 2 个免费环境，Professional 可选 10、20、50 或 100 个环境，Business 支持更大配置。提供浏览器自动化和 AI Agent。9 月版本新增 Agent 定时任务、快速创建环境和并行 Agent；API 限速依套餐而定。",
      "ru": "AdsPower предлагает 2 бесплатных профиля. Professional: 10, 20, 50 или 100; Business — больше. Доступны автоматизация и AI Agent. В сентябре добавлены расписания, быстрое создание профилей и параллельные агенты. Лимиты API зависят от тарифа.",
      "ja": "AdsPower は無料 2 プロファイル、Professional は 10・20・50・100、Business はより大規模な構成に対応。自動化と AI Agent を提供し、9 月に定期実行、クイック作成、並列 Agent を追加。API 上限はプランによります。",
      "fr": "AdsPower offre 2 profils gratuits. Professional : 10, 20, 50 ou 100 ; Business pour davantage. Automatisation et AI Agent sont disponibles. Les notes de septembre ajoutent planification, création rapide et agents parallèles. Les limites API dépendent du forfait.",
      "de": "AdsPower bietet 2 kostenlose Profile. Professional: 10, 20, 50 oder 100; Business für größere Konfigurationen. Automatisierung und AI Agent sind verfügbar. Im September kamen geplante Aufgaben, Schnellerstellung und parallele Agents hinzu. API-Limits hängen vom Tarif ab."
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
    "verifiedAt": "2026-10-12",
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
      "en": "GoLogin offers 3 free profiles and paid plans starting at 10 profiles. API, SDK and MCP access starts at 100 profiles. Cloud browser launch and cookie import/export start at 50 profiles. A lower-priced plan does not include every automation feature.",
      "zh": "GoLogin 提供 3 个免费环境，付费从 10 个环境起。API、SDK 和 MCP 从 100 个环境套餐开放；云端浏览器启动及 Cookie 导入导出从 50 个环境起。低价套餐不包含所有自动化能力。",
      "ru": "GoLogin предлагает 3 бесплатных профиля; платные тарифы — от 10. API, SDK и MCP доступны от 100 профилей; облачный запуск и импорт/экспорт cookie — от 50. Не все функции автоматизации входят в младшие тарифы.",
      "ja": "GoLogin は無料 3 プロファイル、有料は 10 から。API・SDK・MCP は 100 以上、クラウド起動と Cookie の入出力は 50 以上のプランで利用可能です。低価格プランには機能制限があります。",
      "fr": "GoLogin offre 3 profils gratuits et des forfaits payants dès 10. API, SDK et MCP commencent à 100 profils ; lancement cloud et import/export de cookies à 50. Les petits forfaits ne comprennent pas toutes les fonctions.",
      "de": "GoLogin bietet 3 kostenlose Profile und bezahlte Tarife ab 10. API, SDK und MCP gibt es ab 100 Profilen; Cloud-Start und Cookie-Import/Export ab 50. Kleine Tarife enthalten nicht alle Funktionen."
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
    "verifiedAt": "2026-10-12",
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
      "en": "Multilogin has 5 free cloud profiles, a one-time 200 MB proxy allowance and 30 mobile minutes. The free plan excludes API. Pro 10/20/50 has API limits of 50/75/100 RPM. Business starts at 100 profiles and includes unlimited team seats. Browser profiles and cloud-phone resources have separate limits.",
      "zh": "Multilogin 提供 5 个免费云端环境，一次性 200 MB 代理额度和 30 分钟移动端时长，免费版不含 API。Pro 10/20/50 的 API 限额分别为每分钟 50/75/100 次。Business 从 100 个环境起，含无限团队席位。浏览器与云手机资源有各自限额。",
      "ru": "Multilogin: 5 бесплатных облачных профилей, разовые 200 МБ прокси и 30 мобильных минут, без API. Pro 10/20/50: 50/75/100 запросов API в минуту. Business — от 100 профилей с неограниченными местами команды. Лимиты браузеров и телефонов различаются.",
      "ja": "Multilogin は無料クラウド 5 プロファイル、初回のみプロキシ 200 MB とモバイル 30 分を提供。無料版に API はありません。Pro 10/20/50 の API は毎分 50/75/100 回。Business は 100 プロファイルから、チーム席数無制限。端末の上限は別です。",
      "fr": "Multilogin : 5 profils cloud gratuits, 200 Mo de proxy et 30 minutes mobiles offerts une fois, sans API. Pro 10/20/50 : 50/75/100 requêtes API par minute. Business commence à 100 profils avec sièges illimités. Les limites des téléphones cloud sont distinctes.",
      "de": "Multilogin bietet 5 kostenlose Cloud-Profile, einmalig 200 MB Proxy und 30 mobile Minuten, ohne API. Pro 10/20/50: 50/75/100 API-Anfragen pro Minute. Business ab 100 Profilen mit unbegrenzten Teamplätzen. Cloud-Smartphones haben eigene Limits."
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
      }
    ]
  },
  "dolphin-anty": {
    "verifiedAt": "2026-10-12",
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
      "en": "Dolphin Anty Free includes 5 profiles, up to 3 running simultaneously and 200 profile recreations per month. Starter begins at 20 profiles and adds cloud sync, transfer and cookie export. Additional seats on Base/Team/Enterprise cost $10/$20/$25 respectively.",
      "zh": "Dolphin Anty 免费版含 5 个环境，最多同时运行 3 个，每月最多重建 200 次。Starter 从 20 个环境起，提供云同步、转移和 Cookie 导出。Base/Team/Enterprise 额外席位分别为 $10/$20/$25。",
      "ru": "Dolphin Anty Free: 5 профилей, до 3 одновременно, до 200 пересозданий в месяц. Starter от 20 профилей с облачной синхронизацией, передачей и экспортом cookie. Дополнительные места Base/Team/Enterprise: $10/$20/$25.",
      "ja": "Dolphin Anty 無料版は 5 プロファイル、同時実行 3、月 200 回の再作成まで。Starter は 20 からでクラウド同期、転送、Cookie 出力を提供。Base/Team/Enterprise の追加席は $10/$20/$25。",
      "fr": "Dolphin Anty Free : 5 profils, 3 simultanés et 200 recréations par mois. Starter commence à 20 avec synchronisation cloud, transfert et export de cookies. Sièges supplémentaires Base/Team/Enterprise : 10/20/25 $.",
      "de": "Dolphin Anty Free: 5 Profile, 3 gleichzeitig und 200 Neuerstellungen pro Monat. Starter ab 20 mit Cloud-Sync, Übertragung und Cookie-Export. Zusätzliche Plätze bei Base/Team/Enterprise: 10/20/25 $."
    },
    "freeProfiles": 5,
    "startingPrice": "$10/mo",
    "plans": [
      {
        "name": "Free",
        "price": "$0",
        "profiles": "5",
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
  "octobrowser": {
    "verifiedAt": "2026-10-12",
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
  gologin: ["https://gologin.com/release-notes/"],
  multilogin: ["https://multilogin.com/release-notes/"],
  morelogin: ["https://guide.morelogin.com/api-reference/appendix/changelog"],
  adspower: ["https://www.adspower.com/release"],
  "dolphin-anty": ["https://docs.dolphin-anty.com/en/personal-cabinet/plans-in-dolphin-anty"],
  octobrowser: ["https://docs.octobrowser.net/en/changelog/octium-changelog/"],
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
