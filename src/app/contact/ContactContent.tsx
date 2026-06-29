"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { useI18n } from "@/components/I18nProvider";

const ui = {
  title: {
    en: "Contact AntiBrowserHub",
    zh: "联系 AntiBrowserHub",
    ru: "Связаться с AntiBrowserHub",
    ja: "AntiBrowserHub へのお問い合わせ",
    fr: "Contacter AntiBrowserHub",
    de: "AntiBrowserHub kontaktieren",
  },
  subtitle: {
    en: "Send editorial corrections, privacy requests, partnership questions, or general feedback to the right inbox.",
    zh: "向对应邮箱发送内容更正、隐私请求、合作问题或一般反馈。",
    ru: "Отправляйте редакционные исправления, запросы о конфиденциальности, вопросы о партнёрстве или общие отзывы на нужный адрес.",
    ja: "編集上の修正、プライバシー関連の依頼、提携に関する質問、一般的なフィードバックを適切な窓口に送れます。",
    fr: "Envoyez les corrections éditoriales, demandes de confidentialité, questions de partenariat ou retours généraux à la bonne adresse.",
    de: "Senden Sie redaktionelle Korrekturen, Datenschutzanfragen, Partnerschaftsfragen oder allgemeines Feedback an das passende Postfach.",
  },
  updated: {
    en: "Last updated: June 2026",
    zh: "最后更新：2026年6月",
    ru: "Последнее обновление: июнь 2026",
    ja: "最終更新：2026年6月",
    fr: "Dernière mise à jour : juin 2026",
    de: "Letzte Aktualisierung: Juni 2026",
  },
  cards: [
    {
      title: { en: "General questions", zh: "一般问题", ru: "Общие вопросы", ja: "一般的な質問", fr: "Questions générales", de: "Allgemeine Fragen" },
      text: { en: "For site feedback, suggestions, and reader questions.", zh: "用于网站反馈、建议和读者问题。", ru: "Для отзывов о сайте, предложений и вопросов читателей.", ja: "サイトへのフィードバック、提案、読者からの質問。", fr: "Pour les retours sur le site, suggestions et questions des lecteurs.", de: "Für Website-Feedback, Vorschläge und Leserfragen." },
      email: "hello@antibrowserhub.com",
    },
    {
      title: { en: "Editorial corrections", zh: "内容更正", ru: "Редакционные исправления", ja: "編集上の修正", fr: "Corrections éditoriales", de: "Redaktionelle Korrekturen" },
      text: { en: "For outdated pricing, product changes, factual errors, or review updates.", zh: "用于过期价格、产品变化、事实错误或评测更新。", ru: "Для устаревших цен, изменений продуктов, фактических ошибок или обновлений обзоров.", ja: "古い価格、製品変更、事実誤認、レビュー更新について。", fr: "Pour les prix obsolètes, changements produit, erreurs factuelles ou mises à jour d'avis.", de: "Für veraltete Preise, Produktänderungen, sachliche Fehler oder Review-Updates." },
      email: "editorial@antibrowserhub.com",
    },
    {
      title: { en: "Privacy requests", zh: "隐私请求", ru: "Запросы о конфиденциальности", ja: "プライバシー関連の依頼", fr: "Demandes de confidentialité", de: "Datenschutzanfragen" },
      text: { en: "For data access, deletion, cookie, or privacy policy questions.", zh: "用于数据访问、删除、Cookie 或隐私政策问题。", ru: "Для вопросов о доступе к данным, удалении, cookies или политике конфиденциальности.", ja: "データアクセス、削除、Cookie、プライバシーポリシーに関する質問。", fr: "Pour les questions d'accès aux données, suppression, cookies ou politique de confidentialité.", de: "Für Fragen zu Datenzugriff, Löschung, Cookies oder Datenschutzrichtlinie." },
      email: "privacy@antibrowserhub.com",
    },
    {
      title: { en: "Partnerships", zh: "合作", ru: "Партнёрства", ja: "提携", fr: "Partenariats", de: "Partnerschaften" },
      text: { en: "For affiliate programs, product access for testing, and business inquiries.", zh: "用于联盟计划、测试产品权限和商务咨询。", ru: "Для партнёрских программ, доступа к продуктам для тестирования и деловых запросов.", ja: "アフィリエイト、テスト用製品アクセス、ビジネス問い合わせ。", fr: "Pour les programmes d'affiliation, accès produit pour les tests et demandes commerciales.", de: "Für Affiliate-Programme, Testzugänge und geschäftliche Anfragen." },
      email: "partners@antibrowserhub.com",
    },
  ],
  response: {
    title: { en: "Response time", zh: "回复时间", ru: "Время ответа", ja: "返信時間", fr: "Délai de réponse", de: "Antwortzeit" },
    text: { en: "We review incoming messages regularly and prioritize factual corrections and privacy requests. If you report a pricing or feature change, please include the source URL and the date you checked it.", zh: "我们会定期查看邮件，并优先处理事实更正和隐私请求。如果您反馈价格或功能变化，请附上来源链接和查看日期。", ru: "Мы регулярно проверяем сообщения и в первую очередь рассматриваем фактические исправления и запросы о конфиденциальности. Если вы сообщаете об изменении цены или функции, укажите ссылку на источник и дату проверки.", ja: "受信メッセージを定期的に確認し、事実修正とプライバシー関連の依頼を優先します。価格や機能変更を報告する場合は、確認したURLと日付を添えてください。", fr: "Nous consultons régulièrement les messages et priorisons les corrections factuelles et demandes de confidentialité. Pour signaler un changement de prix ou de fonctionnalité, indiquez l'URL source et la date de vérification.", de: "Wir prüfen eingehende Nachrichten regelmäßig und priorisieren sachliche Korrekturen sowie Datenschutzanfragen. Bei Preis- oder Funktionsänderungen geben Sie bitte die Quelle und das Prüfdatum an." },
  },
} as const;

export default function ContactContent() {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[{ label: i(ui.title), href: "/contact" }]} />
          <span className="section-label">AntiBrowserHub</span>
          <h1>{i(ui.title)}</h1>
          <p>{i(ui.subtitle)}</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          <p style={{ color: "var(--text-muted)", marginBottom: 28 }}>{i(ui.updated)}</p>
          <div className="features-grid" style={{ marginBottom: 36 }}>
            {ui.cards.map((card) => (
              <div className="feature-card" key={card.email}>
                <h2 className="feature-title">{i(card.title)}</h2>
                <p className="feature-desc">{i(card.text)}</p>
                <a href={`mailto:${card.email}`} style={{ color: "var(--color-indigo)", fontWeight: 700 }}>{card.email}</a>
              </div>
            ))}
          </div>
          <div className="feature-card">
            <h2 className="feature-title">{i(ui.response.title)}</h2>
            <p className="feature-desc" style={{ maxWidth: 760 }}>{i(ui.response.text)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
