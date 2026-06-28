"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { useI18n } from "@/components/I18nProvider";

const ui = {
  title: { en: "Terms of Service", zh: "服务条款", ru: "Условия использования", ja: "利用規約", fr: "Conditions d'utilisation", de: "Nutzungsbedingungen" },
  lastUpdated: { en: "Last updated: June 2026", zh: "最后更新：2026年6月", ru: "Последнее обновление: июнь 2026", ja: "最終更新：2026年6月", fr: "Dernière mise à jour : juin 2026", de: "Letzte Aktualisierung: Juni 2026" },
  sections: [
    {
      title: { en: "Acceptance of Terms", zh: "条款接受", ru: "Принятие условий", ja: "利用規約の同意", fr: "Acceptation des conditions", de: "Annahme der Bedingungen" },
      content: { en: "By accessing and using AntiBrowserHub, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.", zh: "访问和使用 AntiBrowserHub，即表示您同意受这些服务条款的约束。如果您不同意这些条款，请不要使用我们的网站。", ru: "Используя AntiBrowserHub, вы соглашаетесь с данными условиями. Если не согласны — не используйте сайт.", ja: "AntiBrowserHubにアクセスし利用することで、本利用規約に同意したものとみなされます。", fr: "En utilisant AntiBrowserHub, vous acceptez ces conditions d'utilisation.", de: "Durch die Nutzung von AntiBrowserHub stimmen Sie diesen Nutzungsbedingungen zu." },
    },
    {
      title: { en: "Content & Reviews", zh: "内容与评测", ru: "Контент и обзоры", ja: "コンテンツとレビュー", fr: "Contenu et avis", de: "Inhalte und Bewertungen" },
      content: { en: "All reviews, comparisons, and guides on AntiBrowserHub represent our honest opinions based on real testing. While we strive for accuracy, we cannot guarantee that all information is complete or up-to-date. Software products change frequently, and pricing may vary. Always verify critical details with the official websites.", zh: "AntiBrowserHub 上的所有评测、对比和教程都基于真实测试，代表我们的真实意见。虽然我们力求准确，但无法保证所有信息都是完整或最新的。软件产品经常变化，价格可能有所不同。", ru: "Все обзоры основаны на реальном тестировании. Мы стремимся к точности, но не можем гарантировать полноту информации. Всегда проверяйте данные на официальных сайтах.", ja: "すべてのレビューは実際のテストに基づく正直な意見です。正確性に努めますが、情報の完全性は保証できません。", fr: "Tous les avis sont basés sur des tests réels. Nous ne pouvons garantir l'exactitude complète des informations.", de: "Alle Bewertungen basieren auf echten Tests. Wir können keine vollständige Richtigkeit garantieren." },
    },
    {
      title: { en: "Affiliate Relationships", zh: "联盟关系", ru: "Партнёрские отношения", ja: "アフィリエイト関係", fr: "Relations d'affiliation", de: "Affiliate-Beziehungen" },
      content: { en: "AntiBrowserHub participates in affiliate programs. We may earn commissions when you sign up for services through our links. This does not affect the independence of our reviews. Affiliate relationships never influence our ratings or recommendations.", zh: "AntiBrowserHub 参与联盟计划。当您通过我们的链接注册服务时，我们可能会赚取佣金。这不会影响我们评测的独立性。联盟关系绝不会影响我们的评分或推荐。", ru: "AntiBrowserHub участвует в партнёрских программах. Мы можем получать комиссию. Это не влияет на независимость наших обзоров.", ja: "AntiBrowserHubはアフィリエイトプログラムに参加しています。レビューの独立性には影響しません。", fr: "AntiBrowserHub participe à des programmes d'affiliation. Cela n'affecte pas l'indépendance de nos avis.", de: "AntiBrowserHub nimmt an Affiliate-Programmen teil. Dies beeinflusst nicht die Unabhängigkeit unserer Bewertungen." },
    },
    {
      title: { en: "Intellectual Property", zh: "知识产权", ru: "Интеллектуальная собственность", ja: "知的財産権", fr: "Propriété intellectuelle", de: "Geistiges Eigentum" },
      content: { en: "All content on AntiBrowserHub, including text, graphics, logos, and software, is the property of AntiBrowserHub and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.", zh: "AntiBrowserHub 上的所有内容，包括文本、图形、标志和软件，均为 AntiBrowserHub 的财产，受版权法保护。未经我们书面许可，不得复制、分发或创建衍生作品。", ru: "Весь контент AntiBrowserHub защищён авторским правом. Запрещено копировать без письменного разрешения.", ja: "AntiBrowserHub上のすべてのコンテンツは著作権法で保護されています。書面による許可なく複製することはできません。", fr: "Tout le contenu est protégé par le droit d'auteur. Reproduction interdite sans autorisation écrite.", de: "Alle Inhalte sind urheberrechtlich geschützt. Reproduktion ohne schriftliche Genehmigung verboten." },
    },
    {
      title: { en: "Limitation of Liability", zh: "责任限制", ru: "Ограничение ответственности", ja: "責任の制限", fr: "Limitation de responsabilité", de: "Haftungsbeschränkung" },
      content: { en: "AntiBrowserHub provides information on an as-is basis. We are not liable for any damages arising from your use of our website or reliance on our content. We are not responsible for the products or services offered by the browsers and tools we review.", zh: "AntiBrowserHub 按原样提供信息。对于因使用我们网站或依赖我们内容而造成的任何损害，我们不承担责任。我们不对我们评测的浏览器和工具提供的产品或服务负责。", ru: "AntiBrowserHub предоставляет информацию как есть. Мы не несём ответственности за убытки от использования сайта.", ja: "AntiBrowserHubは情報を現状のまま提供します。サイトの利用による損害について責任を負いません。", fr: "AntiBrowserHub fournit des informations en l\u2019\u00e9tat. Nous ne sommes pas responsables des dommages li\u00e9s \u00e0 l\u2019utilisation.", de: "AntiBrowserHub stellt Informationen wie besehen bereit. Wir haften nicht f\u00fcr Sch\u00e4den durch die Nutzung." },
    },
    {
      title: { en: "Contact", zh: "联系方式", ru: "Контакты", ja: "お問い合わせ", fr: "Contact", de: "Kontakt" },
      content: { en: "For questions about these terms, contact us at legal@antibrowserhub.com.", zh: "如有关于这些条款的问题，请通过 legal@antibrowserhub.com 联系我们。", ru: "По вопросам об условиях пишите на legal@antibrowserhub.com.", ja: "利用規約に関するご質問は legal@antibrowserhub.com までお問い合わせください。", fr: "Pour toute question, contactez-nous à legal@antibrowserhub.com.", de: "Bei Fragen kontaktieren Sie uns unter legal@antibrowserhub.com." },
    },
  ],
} as const;

export default function TermsContent() {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Breadcrumb />
        <h1 style={{ marginTop: 24, marginBottom: 8 }}>{i(ui.title)}</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: 40, fontSize: "0.9rem" }}>{i(ui.lastUpdated)}</p>
        {ui.sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: 12 }}>{i(section.title)}</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>{i(section.content)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
