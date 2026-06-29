"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { useI18n } from "@/components/I18nProvider";

const ui = {
  title: {
    en: "Affiliate Disclosure",
    zh: "联盟披露",
    ru: "Раскрытие партнёрских ссылок",
    ja: "アフィリエイト開示",
    fr: "Divulgation d'affiliation",
    de: "Affiliate-Offenlegung",
  },
  subtitle: {
    en: "Some links may earn us a commission, but commercial relationships do not control our ratings, rankings, or conclusions.",
    zh: "部分链接可能为我们带来佣金，但商业关系不会控制我们的评分、排名或结论。",
    ru: "Некоторые ссылки могут приносить нам комиссию, но коммерческие отношения не определяют наши оценки, рейтинги или выводы.",
    ja: "一部のリンクから報酬を得る場合がありますが、商業的関係が評価、順位、結論を左右することはありません。",
    fr: "Certains liens peuvent nous rapporter une commission, mais les relations commerciales ne contrôlent pas nos notes, classements ou conclusions.",
    de: "Einige Links können uns eine Provision einbringen, aber kommerzielle Beziehungen bestimmen nicht unsere Bewertungen, Rankings oder Schlussfolgerungen.",
  },
  updated: {
    en: "Last updated: June 2026",
    zh: "最后更新：2026年6月",
    ru: "Последнее обновление: июнь 2026",
    ja: "最終更新：2026年6月",
    fr: "Dernière mise à jour : juin 2026",
    de: "Letzte Aktualisierung: Juni 2026",
  },
  sections: [
    {
      title: { en: "How affiliate links work", zh: "联盟链接如何运作", ru: "Как работают партнёрские ссылки", ja: "アフィリエイトリンクの仕組み", fr: "Fonctionnement des liens d'affiliation", de: "Wie Affiliate-Links funktionieren" },
      text: { en: "When you click a link to a reviewed product or service and later sign up or purchase, AntiBrowserHub may receive a referral commission at no extra cost to you.", zh: "当您点击被评测产品或服务的链接，并随后注册或购买时，AntiBrowserHub 可能会获得推荐佣金，您无需支付额外费用。", ru: "Когда вы переходите по ссылке на обозреваемый продукт или сервис и затем регистрируетесь или покупаете, AntiBrowserHub может получить комиссию без дополнительных расходов для вас.", ja: "レビュー対象の製品やサービスへのリンクをクリックし、その後登録または購入した場合、追加費用なしで AntiBrowserHub が紹介報酬を受け取ることがあります。", fr: "Lorsque vous cliquez sur un lien vers un produit ou service évalué puis vous inscrivez ou achetez, AntiBrowserHub peut recevoir une commission sans frais supplémentaires pour vous.", de: "Wenn Sie auf einen Link zu einem bewerteten Produkt oder Dienst klicken und sich später anmelden oder kaufen, kann AntiBrowserHub ohne zusätzliche Kosten für Sie eine Provision erhalten." },
    },
    {
      title: { en: "Editorial independence", zh: "编辑独立性", ru: "Редакционная независимость", ja: "編集の独立性", fr: "Indépendance éditoriale", de: "Redaktionelle Unabhängigkeit" },
      text: { en: "Affiliate status does not guarantee a positive review, higher score, or preferred placement. We evaluate products using the same criteria described in our review methodology.", zh: "联盟关系不保证正面评价、更高评分或优先展示。我们按照评测方法论中说明的统一标准评估产品。", ru: "Партнёрский статус не гарантирует положительный обзор, более высокую оценку или приоритетное размещение. Мы оцениваем продукты по единым критериям из нашей методологии.", ja: "アフィリエイト関係は、肯定的なレビュー、高いスコア、優先掲載を保証しません。レビュー方法論で説明している同じ基準で評価します。", fr: "Le statut d'affilié ne garantit pas un avis positif, une meilleure note ou un placement privilégié. Nous évaluons les produits selon les mêmes critères que notre méthodologie.", de: "Affiliate-Status garantiert keine positive Bewertung, höhere Punktzahl oder bevorzugte Platzierung. Wir bewerten Produkte nach denselben Kriterien unserer Methodik." },
    },
    {
      title: { en: "Sponsored content", zh: "赞助内容", ru: "Спонсируемый контент", ja: "スポンサー付きコンテンツ", fr: "Contenu sponsorisé", de: "Gesponserte Inhalte" },
      text: { en: "If we publish sponsored content in the future, it will be clearly labeled. Sponsored access or product trials do not remove our obligation to disclose limitations, risks, and weaknesses.", zh: "如果未来发布赞助内容，我们会清楚标注。赞助访问或产品试用不会免除我们披露限制、风险和缺点的义务。", ru: "Если в будущем мы опубликуем спонсируемый материал, он будет явно помечен. Спонсируемый доступ или тестовые аккаунты не отменяют обязанность раскрывать ограничения, риски и недостатки.", ja: "将来スポンサー付きコンテンツを公開する場合は明確に表示します。スポンサー提供のアクセスや試用であっても、制限、リスク、弱点を開示する責任は変わりません。", fr: "Si nous publions du contenu sponsorisé à l'avenir, il sera clairement indiqué. Un accès sponsorisé ou des essais produit ne suppriment pas notre obligation d'indiquer limites, risques et faiblesses.", de: "Sollten wir künftig gesponserte Inhalte veröffentlichen, werden diese klar gekennzeichnet. Gesponserter Zugang oder Testversionen ändern nichts an unserer Pflicht, Einschränkungen, Risiken und Schwächen offenzulegen." },
    },
    {
      title: { en: "Questions or corrections", zh: "问题或更正", ru: "Вопросы или исправления", ja: "質問または修正", fr: "Questions ou corrections", de: "Fragen oder Korrekturen" },
      text: { en: "If you believe a relationship should be disclosed more clearly, contact us at editorial@antibrowserhub.com.", zh: "如果您认为某项关系需要更清楚地披露，请通过 editorial@antibrowserhub.com 联系我们。", ru: "Если вы считаете, что связь должна быть раскрыта яснее, напишите на editorial@antibrowserhub.com.", ja: "関係性の開示をより明確にすべきだと思われる場合は editorial@antibrowserhub.com までご連絡ください。", fr: "Si vous pensez qu'une relation devrait être indiquée plus clairement, contactez-nous à editorial@antibrowserhub.com.", de: "Wenn Sie der Meinung sind, dass eine Beziehung klarer offengelegt werden sollte, kontaktieren Sie uns unter editorial@antibrowserhub.com." },
    },
  ],
} as const;

export default function AffiliateDisclosureContent() {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Breadcrumb customItems={[{ label: i(ui.title), href: "/affiliate-disclosure" }]} />
        <h1 style={{ marginTop: 24, marginBottom: 12 }}>{i(ui.title)}</h1>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 12 }}>{i(ui.subtitle)}</p>
        <p style={{ color: "var(--text-muted)", marginBottom: 40, fontSize: "0.9rem" }}>{i(ui.updated)}</p>
        {ui.sections.map((section) => (
          <div key={i(section.title)} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: 12 }}>{i(section.title)}</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>{i(section.text)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
