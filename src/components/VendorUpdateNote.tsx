"use client";
import { vendorFeatureSources, vendorLatestUpdates, vendorUpdates } from "@/data/vendorUpdates";
import { useI18n } from "./I18nProvider";

const ui = {
  title: { en: "Official information checked", zh: "官网信息核验", ru: "Проверено на официальном сайте", ja: "公式情報の確認", fr: "Informations officielles vérifiées", de: "Offizielle Angaben geprüft" },
  source: { en: "Official pricing", zh: "官方定价", ru: "Официальные цены", ja: "公式料金", fr: "Tarifs officiels", de: "Offizielle Preise" },
  details: { en: "Official feature documentation", zh: "官方功能文档", ru: "Официальная документация функций", ja: "公式機能ドキュメント", fr: "Documentation officielle des fonctions", de: "Offizielle Funktionsdokumentation" },
  scope: { en: "Pricing and feature information checked; this is not a new performance test. Historical editorial ratings remain unchanged. Confirm final terms at checkout.", zh: "本次核验价格与功能信息，未重新进行性能测试；历史编辑评分保持原样。最终条款以结算页为准。", ru: "Проверены цены и функции; нового теста производительности не было. Редакционные оценки сохранены. Условия уточняйте при оплате.", ja: "料金と機能を確認しました。性能の再テストは行っておらず、過去の編集評価は維持しています。最終条件は決済時にご確認ください。", fr: "Prix et fonctions vérifiés ; aucun nouveau test de performance. Les notes éditoriales historiques sont conservées. Vérifiez les conditions au paiement.", de: "Preise und Funktionen geprüft; kein neuer Leistungstest. Historische redaktionelle Bewertungen bleiben bestehen. Konditionen beim Bezahlen prüfen." },
};
export default function VendorUpdateNote({ slug }: { slug: string }) {
  const { locale } = useI18n();
  const update = vendorUpdates[slug];
  if (!update) return null;
  return <aside className="vendor-update" aria-label={ui.title[locale]}>
    <h3>{ui.title[locale]} · <time dateTime={update.verifiedAt}>{new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeZone: "UTC" }).format(new Date(update.verifiedAt))}</time></h3>
    <p>{update.summary[locale]}</p>
    <p>{update.billing[locale] || update.billing.en}</p>
    {vendorLatestUpdates[slug] && <p>{vendorLatestUpdates[slug][locale] || vendorLatestUpdates[slug].en}</p>}
    <a href={update.source} target="_blank" rel="noopener noreferrer">{ui.source[locale]} ↗</a>
    {vendorFeatureSources[slug]?.map(url => <p key={url}><a href={url} target="_blank" rel="noopener noreferrer">{ui.details[locale] || ui.details.en} ↗</a></p>)}
    <p className="vendor-update-scope">{ui.scope[locale]}</p>
  </aside>;
}
