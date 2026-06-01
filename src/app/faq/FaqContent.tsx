"use client";
import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import { browsers } from "@/data/browsers";
import Breadcrumb from "@/components/Breadcrumb";

const ui: Record<string, Record<string, string>> = {
  title: {
    en: "Frequently Asked Questions",
    zh: "常见问题解答",
    ru: "Часто задаваемые вопросы",
    ja: "よくある質問",
    fr: "Questions fréquemment posées",
    de: "Häufig gestellte Fragen",
  },
  subtitle: {
    en: "Everything you need to know about antidetect browsers. Click any question to expand.",
    zh: "关于指纹浏览器的一切。点击任何问题展开答案。",
    ru: "Всё, что нужно знать об антидетект-браузерах. Нажмите на вопрос, чтобы развернуть.",
    ja: "アンチ検出ブラウザについて知っておくべきことすべて。質問をクリックして展開。",
    fr: "Tout ce que vous devez savoir sur les navigateurs anti-détection. Cliquez pour développer.",
    de: "Alles, was Sie über Antidetect-Browser wissen müssen. Klicken Sie zum Erweitern.",
  },
  label: { en: "FAQ", zh: "常见问题", ru: "FAQ", ja: "FAQ", fr: "FAQ", de: "FAQ" },
  general: { en: "General Questions", zh: "通用问题", ru: "Общие вопросы", ja: "一般的な質問", fr: "Questions générales", de: "Allgemeine Fragen" },
  browserFaq: { en: "Browser-Specific FAQ", zh: "浏览器专属问题", ru: "FAQ по браузерам", ja: "ブラウザ別FAQ", fr: "FAQ par navigateur", de: "Browser-spezifische FAQ" },
  moreQuestions: {
    en: "Still have questions?",
    zh: "还有问题？",
    ru: "Остались вопросы?",
    ja: "まだ質問がありますか？",
    fr: "Encore des questions ?",
    de: "Noch Fragen?",
  },
  moreQuestionsSub: {
    en: "Read our comprehensive guides or compare browsers side by side.",
    zh: "阅读我们的综合指南或横向对比浏览器。",
    ru: "Читайте наши подробные руководства или сравнивайте браузеры.",
    ja: "詳細なガイドを読むか、ブラウザを比較してください。",
    fr: "Lisez nos guides complets ou comparez les navigateurs.",
    de: "Lesen Sie unsere Anleitungen oder vergleichen Sie Browser.",
  },
  guidesBtn: { en: "Read Guides →", zh: "阅读教程 →", ru: "Читать руководства →", ja: "ガイドを読む →", fr: "Lire les guides →", de: "Anleitungen lesen →" },
  compareBtn: { en: "Compare Browsers →", zh: "对比浏览器 →", ru: "Сравнить браузеры →", ja: "ブラウザを比較 →", fr: "Comparer →", de: "Browser vergleichen →" },
};

const generalFaqs = [
  {
    question: "What is an antidetect browser?",
    answer: "An antidetect browser is a specialized web browser that creates unique, isolated browser profiles — each with its own fingerprint, cookies, cache, and browsing data. This allows you to manage multiple online accounts without them being linked together.",
  },
  {
    question: "Are antidetect browsers legal?",
    answer: "Yes, antidetect browsers themselves are legal tools. They are used for legitimate purposes like multi-account management, web scraping, ad verification, and privacy protection. However, using them for fraud or to violate platform terms of service is not recommended.",
  },
  {
    question: "How do antidetect browsers work?",
    answer: "They modify or mask your browser's fingerprint parameters — such as Canvas hash, WebGL renderer, User Agent, screen resolution, fonts, timezone, and more. Each browser profile gets a unique combination of these parameters, making it appear as a completely different device to websites.",
  },
  {
    question: "Do I need a proxy with an antidetect browser?",
    answer: "Yes, a proxy is essential. While an antidetect browser handles your browser fingerprint, your IP address is equally important. Without a proxy, all profiles share the same IP, which is an obvious red flag. Use residential or ISP proxies for best results.",
  },
  {
    question: "What's the difference between an antidetect browser and a VPN?",
    answer: "A VPN only changes your IP address. An antidetect browser changes your entire browser fingerprint (Canvas, WebGL, fonts, screen, timezone, etc.) and creates isolated environments for each account. You need both: an antidetect browser + proxies for complete protection.",
  },
  {
    question: "Which antidetect browser is the best?",
    answer: "It depends on your use case and budget. MoreLogin offers the best value with ML-based fingerprinting. AdsPower is best for automation. GoLogin is best for remote teams. Multilogin is best for enterprise. Check our comparison page for a detailed breakdown.",
  },
  {
    question: "Can websites detect antidetect browsers?",
    answer: "Quality antidetect browsers are very difficult to detect. They use techniques like engine-level fingerprint integration and real device fingerprints to avoid detection. However, poor configuration (mismatched timezone/IP, random noise fingerprints) can sometimes be detected.",
  },
  {
    question: "How many profiles can I run simultaneously?",
    answer: "This depends on your computer's RAM and CPU. As a rough guide: 4GB RAM = 3-5 profiles, 8GB = 5-10 profiles, 16GB = 15-25 profiles, 32GB = 30-50+ profiles. Some browsers offer cloud launching to reduce local resource usage.",
  },
];

const ix = (m: Record<string, string>, locale: string) => m[locale] || m.en;

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "faq-open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

export default function FaqContent() {
  const { locale } = useI18n();

  // Collect all browser FAQs
  const allBrowserFaqs = browsers
    .filter((b) => b.faqs && b.faqs.length > 0)
    .map((b) => ({ name: b.name, slug: b.slug, color: b.color, faqs: b.faqs! }));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[{ label: ix(ui.label, locale), href: "/faq" }]} />
          <span className="section-label">{ix(ui.label, locale)}</span>
          <h1>{ix(ui.title, locale)}</h1>
          <p>{ix(ui.subtitle, locale)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 className="section-title" style={{ textAlign: "left", fontSize: "1.2rem", marginBottom: 20 }}>
            {ix(ui.general, locale)}
          </h2>
          <div className="faq-list">
            {generalFaqs.map((faq, idx) => (
              <FaqItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <h2 className="section-title" style={{ textAlign: "left", fontSize: "1.2rem", marginTop: 48, marginBottom: 20 }}>
            {ix(ui.browserFaq, locale)}
          </h2>
          {allBrowserFaqs.map((browser) => (
            <div key={browser.slug} style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: "1rem", marginBottom: 12 }}>
                <Link href={`/reviews/${browser.slug}`} style={{ color: browser.color }}>
                  {browser.name}
                </Link>
              </h3>
              <div className="faq-list">
                {browser.faqs.map((faq, idx) => (
                  <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="review-cta-box" style={{ textAlign: "center", marginTop: 48 }}>
            <h3>{ix(ui.moreQuestions, locale)}</h3>
            <p>{ix(ui.moreQuestionsSub, locale)}</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/guides" className="btn-primary">{ix(ui.guidesBtn, locale)}</Link>
              <Link href="/compare" className="btn-secondary">{ix(ui.compareBtn, locale)}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              ...generalFaqs,
              ...allBrowserFaqs.flatMap((b) => b.faqs),
            ].filter(Boolean).map((faq) => ({
              "@type": "Question",
              name: faq!.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq!.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
