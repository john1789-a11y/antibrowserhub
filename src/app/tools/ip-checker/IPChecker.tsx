"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AdUnit from "@/components/AdUnit";
import { useI18n } from "@/components/I18nProvider";

const ui = {
  label: { en: "IP Address Checker", zh: "IP 地址查询", ru: "Проверка IP", ja: "IPアドレスチェッカー", fr: "Vérificateur IP", de: "IP-Checker" },
  title: { en: "What Is My IP Address?", zh: "我的 IP 地址是什么？", ru: "Какой у меня IP-адрес?", ja: "私のIPアドレスは？", fr: "Quelle est mon adresse IP ?", de: "Wie lautet meine IP-Adresse?" },
  subtitle: { en: "See your public IP address, geolocation, ISP, and proxy/VPN detection.", zh: "查看你的公网 IP 地址、地理位置、ISP 和代理/VPN 检测。", ru: "Узнайте свой IP, геолокацию, провайдера и обнаружение прокси.", ja: "パブリックIP、位置情報、ISP、プロキシ/VPN検出を表示。", fr: "Affichez votre IP, géolocalisation, FAI et détection proxy.", de: "Sehen Sie Ihre IP, Standort, ISP und Proxy/VPN-Erkennung." },
  loading: { en: "Looking up your IP...", zh: "正在查询你的 IP...", ru: "Определение вашего IP...", ja: "IPを検索中...", fr: "Recherche de votre IP...", de: "IP wird ermittelt..." },
  yourIP: { en: "Your IP Address", zh: "你的 IP 地址", ru: "Ваш IP-адрес", ja: "あなたのIPアドレス", fr: "Votre adresse IP", de: "Ihre IP-Adresse" },
  location: { en: "Location", zh: "位置", ru: "Местоположение", ja: "位置", fr: "Localisation", de: "Standort" },
  isp: { en: "ISP", zh: "运营商", ru: "Провайдер", ja: "ISP", fr: "FAI", de: "ISP" },
  org: { en: "Organization", zh: "组织", ru: "Организация", ja: "組織", fr: "Organisation", de: "Organisation" },
  timezone: { en: "Timezone", zh: "时区", ru: "Часовой пояс", ja: "タイムゾーン", fr: "Fuseau horaire", de: "Zeitzone" },
  asn: { en: "AS Number", zh: "AS 号码", ru: "AS номер", ja: "AS番号", fr: "Numéro AS", de: "AS-Nummer" },
  proxy: { en: "Proxy/VPN", zh: "代理/VPN", ru: "Прокси/VPN", ja: "プロキシ/VPN", fr: "Proxy/VPN", de: "Proxy/VPN" },
  mobile: { en: "Mobile", zh: "移动网络", ru: "Мобильный", ja: "モバイル", fr: "Mobile", de: "Mobil" },
  hosting: { en: "Hosting/DC", zh: "托管/数据中心", ru: "Хостинг/ДЦ", ja: "ホスティング/DC", fr: "Hébergement/DC", de: "Hosting/DC" },
  yes: { en: "Yes", zh: "是", ru: "Да", ja: "はい", fr: "Oui", de: "Ja" },
  no: { en: "No", zh: "否", ru: "Нет", ja: "いいえ", fr: "Non", de: "Nein" },
  detected: { en: "Detected", zh: "检测到", ru: "Обнаружен", ja: "検出", fr: "Détecté", de: "Erkannt" },
  notDetected: { en: "Not Detected", zh: "未检测到", ru: "Не обнаружен", ja: "未検出", fr: "Non détecté", de: "Nicht erkannt" },
  error: { en: "Failed to fetch IP info. Please try again.", zh: "获取 IP 信息失败。请重试。", ru: "Не удалось получить информацию об IP.", ja: "IP情報の取得に失敗しました。", fr: "Impossible de récupérer les infos IP.", de: "IP-Info konnte nicht abgerufen werden." },
  browseReviews: { en: "Browse Antidetect Browsers →", zh: "浏览指纹浏览器 →", ru: "Обзоры браузеров →", ja: "ブラウザを見る →", fr: "Parcourir les navigateurs →", de: "Browser ansehen →" },
};

interface IPData {
  query: string; country: string; regionName: string; city: string;
  isp: string; org: string; as: string; timezone: string;
  proxy: boolean; mobile: boolean; hosting: boolean;
}

export default function IPChecker() {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;
  const [data, setData] = useState<IPData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://ip-api.com/json/?fields=query,country,regionName,city,isp,org,as,timezone,proxy,mobile,hosting")
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const rows = data ? [
    { label: i(ui.yourIP), value: data.query, highlight: true },
    { label: i(ui.location), value: `${data.city}, ${data.regionName}, ${data.country}` },
    { label: i(ui.isp), value: data.isp },
    { label: i(ui.org), value: data.org },
    { label: i(ui.asn), value: data.as },
    { label: i(ui.timezone), value: data.timezone },
    { label: i(ui.proxy), value: data.proxy ? `⚠️ ${i(ui.detected)}` : `✅ ${i(ui.notDetected)}`, risk: data.proxy },
    { label: i(ui.mobile), value: data.mobile ? i(ui.yes) : i(ui.no) },
    { label: i(ui.hosting), value: data.hosting ? `⚠️ ${i(ui.detected)}` : `✅ ${i(ui.notDetected)}`, risk: data.hosting },
  ] : [];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[
            { label: "Tools", href: "/tools" },
            { label: i(ui.label), href: "/tools/ip-checker" },
          ]} />
          <span className="section-label">🌐 {i(ui.label)}</span>
          <h1>{i(ui.title)}</h1>
          <p>{i(ui.subtitle)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 700 }}>
          {loading && (
            <div className="tool-status-card scanning">
              <div className="tool-status-icon spinner">⏳</div>
              <h2>{i(ui.loading)}</h2>
            </div>
          )}

          {error && (
            <div className="tool-status-card danger">
              <div className="tool-status-icon">❌</div>
              <h2>{i(ui.error)}</h2>
            </div>
          )}

          {data && (
            <>
              <div className="tool-status-card safe" style={{ marginBottom: 24 }}>
                <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-mono)", letterSpacing: 1 }}>{data.query}</h2>
                <p style={{ color: "var(--text-secondary)", marginTop: 8 }}>{data.city}, {data.country}</p>
              </div>

              <div className="tool-results">
                {rows.map((row) => (
                  <div key={row.label} className={`tool-result-item ${row.highlight ? "highlight" : ""}`}>
                    <span className="tool-result-label">{row.label}</span>
                    <span className={`tool-result-value ${"risk" in row && row.risk ? "danger-text" : ""}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <AdUnit slot="ip-tool-1" format="horizontal" className="tool-ad" />

          <div className="review-cta-box" style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/reviews" className="btn-primary">{i(ui.browseReviews)}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
