"use client";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import Breadcrumb from "@/components/Breadcrumb";
import { useCases } from "@/data/useCases";

const ui: Record<string, Record<string, string>> = {
  label: { en: "Best For", zh: "最佳推荐", ru: "Лучшие для", ja: "ベスト", fr: "Meilleur pour", de: "Beste für" },
  title: { en: "Best Antidetect Browser for Every Use Case", zh: "各场景最佳指纹浏览器推荐", ru: "Лучший браузер для каждого случая", ja: "各ユースケースに最適なブラウザ", fr: "Le meilleur navigateur pour chaque cas d'usage", de: "Der beste Browser für jeden Anwendungsfall" },
  subtitle: { en: "Find the perfect antidetect browser for your specific needs. We've tested and ranked the top options for each use case.", zh: "找到最适合你具体需求的指纹浏览器。我们为每个使用场景测试并排名了最佳选择。", ru: "Найдите идеальный браузер для ваших нужд. Мы протестировали и ранжировали лучшие варианты.", ja: "あなたの特定のニーズに最適なブラウザを見つけてください。各ユースケースのトップオプションをテスト・ランキング。", fr: "Trouvez le navigateur parfait pour vos besoins. Nous avons testé et classé les meilleures options.", de: "Finden Sie den perfekten Browser für Ihre Bedürfnisse. Wir haben die besten Optionen getestet und bewertet." },
  browsersCount: { en: "browsers compared", zh: "款浏览器对比", ru: "браузеров в сравнении", ja: "ブラウザを比較", fr: "navigateurs comparés", de: "Browser verglichen" },
  viewGuide: { en: "View Guide →", zh: "查看指南 →", ru: "Смотреть →", ja: "ガイドを見る →", fr: "Voir le guide →", de: "Anleitung →" },
};

export default function BestForListContent() {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[{ label: i(ui.label), href: "/best-for" }]} />
          <span className="section-label">{i(ui.label)}</span>
          <h1>{i(ui.title)}</h1>
          <p>{i(ui.subtitle)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="bestfor-grid">
            {useCases.map((uc) => (
              <Link key={uc.slug} href={`/best-for/${uc.slug}`} className="bestfor-list-card">
                <div className="bestfor-list-icon">{uc.icon}</div>
                <div className="bestfor-list-body">
                  <h3>{i(uc.heroTitle)}</h3>
                  <p>{uc.recommendedBrowsers.length} {i(ui.browsersCount)}</p>
                </div>
                <span className="bestfor-list-arrow">{i(ui.viewGuide)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
