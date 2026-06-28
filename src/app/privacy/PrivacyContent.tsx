"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { useI18n } from "@/components/I18nProvider";

const ui = {
  title: { en: "Privacy Policy", zh: "隐私政策", ru: "Политика конфиденциальности", ja: "プライバシーポリシー", fr: "Politique de confidentialité", de: "Datenschutzrichtlinie" },
  lastUpdated: { en: "Last updated: June 2026", zh: "最后更新：2026年6月", ru: "Последнее обновление: июнь 2026", ja: "最終更新：2026年6月", fr: "Dernière mise à jour : juin 2026", de: "Letzte Aktualisierung: Juni 2026" },
  sections: [
    {
      title: { en: "Information We Collect", zh: "我们收集的信息", ru: "Информация, которую мы собираем", ja: "収集する情報", fr: "Informations collectées", de: "Erfasste Informationen" },
      content: { en: "We collect minimal personal information. When you subscribe to our newsletter, we collect your email address. We also use analytics to understand how visitors use our site, which collects anonymized usage data such as page views and session duration.", zh: "我们收集最少的个人信息。当您订阅我们的通讯时，我们会收集您的电子邮件地址。我们还使用分析工具来了解访客如何使用我们的网站，这些工具会收集匿名化的使用数据，如页面浏览量和会话时长。", ru: "Мы собираем минимум личной информации. При подписке на рассылку мы собираем ваш email. Мы также используем аналитику для понимания поведения посетителей.", ja: "最小限の個人情報を収集します。ニュースレターにご登録いただく際にメールアドレスを収集します。また、アクセス解析を使用して匿名の利用データを収集します。", fr: "Nous collectons un minimum d'informations personnelles. Lors de l'abonnement à notre newsletter, nous collectons votre adresse email.", de: "Wir erfassen minimale personenbezogene Daten. Bei der Newsletter-Anmeldung erfassen wir Ihre E-Mail-Adresse." },
    },
    {
      title: { en: "How We Use Your Information", zh: "我们如何使用您的信息", ru: "Как мы используем информацию", ja: "情報の使用方法", fr: "Utilisation de vos informations", de: "Verwendung Ihrer Informationen" },
      content: { en: "Your email address is used solely to send you updates about antidetect browser reviews, deals, and guides. We never sell or share your personal information with third parties for marketing purposes. Analytics data is used to improve our website content and user experience.", zh: "您的电子邮件地址仅用于向您发送关于指纹浏览器评测、优惠和教程的更新。我们绝不会出售或与第三方共享您的个人信息用于营销目的。", ru: "Ваш email используется только для отправки обновлений. Мы не продаём и не передаём ваши данные третьим лицам.", ja: "メールアドレスはレビュー、セール、ガイドの更新送信のみに使用します。個人情報を第三者に販売・共有することはありません。", fr: "Votre adresse email est utilisée uniquement pour vous envoyer des mises à jour. Nous ne vendons jamais vos informations personnelles.", de: "Ihre E-Mail-Adresse wird ausschließlich für Updates verwendet. Wir verkaufen Ihre Daten nicht an Dritte." },
    },
    {
      title: { en: "Cookies & Tracking", zh: "Cookie 和追踪", ru: "Cookies и отслеживание", ja: "Cookie とトラッキング", fr: "Cookies et suivi", de: "Cookies und Tracking" },
      content: { en: "We use essential cookies to remember your language and theme preferences. We may use analytics cookies (such as Google Analytics) to understand site usage. You can disable cookies in your browser settings at any time.", zh: "我们使用必要的 Cookie 来记住您的语言和主题偏好。我们可能使用分析 Cookie（如 Google Analytics）来了解网站使用情况。您可以随时在浏览器设置中禁用 Cookie。", ru: "Мы используем необходимые cookies для сохранения языка и темы. Вы можете отключить cookies в настройках браузера.", ja: "言語とテーマの設定を記憶するために必須Cookieを使用します。ブラウザの設定でCookieを無効にできます。", fr: "Nous utilisons des cookies essentiels pour mémoriser vos préférences. Vous pouvez désactiver les cookies dans votre navigateur.", de: "Wir verwenden essenzielle Cookies für Ihre Einstellungen. Sie können Cookies in Ihrem Browser deaktivieren." },
    },
    {
      title: { en: "Affiliate Links", zh: "联盟链接", ru: "Партнёрские ссылки", ja: "アフィリエイトリンク", fr: "Liens d'affiliation", de: "Affiliate-Links" },
      content: { en: "Some links on this website are affiliate links. When you click on these links and make a purchase, we may earn a commission at no additional cost to you. This helps us maintain the site and provide free content. Our reviews and ratings are always honest and independent, regardless of affiliate relationships.", zh: "本网站上的部分链接是联盟链接。当您点击这些链接并进行购买时，我们可能会获得佣金，不会给您带来额外费用。这有助于我们维护网站并提供免费内容。无论联盟关系如何，我们的评测和评分始终是诚实和独立的。", ru: "Некоторые ссылки на сайте являются партнёрскими. Мы можем получать комиссию без дополнительных затрат для вас. Наши обзоры всегда честные и независимые.", ja: "一部のリンクはアフィリエイトリンクです。追加費用なしでコミッションを得る場合があります。レビューは常に正直で独立しています。", fr: "Certains liens sont des liens d'affiliation. Nous pouvons percevoir une commission sans frais supplémentaires pour vous.", de: "Einige Links sind Affiliate-Links. Wir können Provisionen ohne zusätzliche Kosten für Sie erhalten." },
    },
    {
      title: { en: "Contact Us", zh: "联系我们", ru: "Свяжитесь с нами", ja: "お問い合わせ", fr: "Contactez-nous", de: "Kontaktieren Sie uns" },
      content: { en: "If you have any questions about this privacy policy, please contact us at privacy@antibrowserhub.com.", zh: "如果您对本隐私政策有任何疑问，请通过 privacy@antibrowserhub.com 联系我们。", ru: "По вопросам о политике конфиденциальности пишите на privacy@antibrowserhub.com.", ja: "プライバシーポリシーに関するご質問は privacy@antibrowserhub.com までお問い合わせください。", fr: "Pour toute question, contactez-nous à privacy@antibrowserhub.com.", de: "Bei Fragen kontaktieren Sie uns unter privacy@antibrowserhub.com." },
    },
  ],
} as const;

export default function PrivacyContent() {
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
