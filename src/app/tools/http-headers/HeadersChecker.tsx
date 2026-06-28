"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AdUnit from "@/components/AdUnit";
import { useI18n } from "@/components/I18nProvider";

const ui = {
  label: { en: "HTTP Headers Checker", zh: "HTTP 请求头检查", ru: "HTTP-заголовки", ja: "HTTPヘッダー", fr: "En-têtes HTTP", de: "HTTP-Header" },
  title: { en: "HTTP Headers Checker", zh: "HTTP 请求头检查", ru: "Проверка HTTP-заголовков", ja: "HTTPヘッダーチェッカー", fr: "Vérificateur d'en-têtes HTTP", de: "HTTP-Header-Checker" },
  subtitle: { en: "View all HTTP headers your browser sends to websites. Check for privacy leaks and proxy-revealing headers.", zh: "查看浏览器发送给网站的所有 HTTP 请求头。检查隐私泄漏和暴露代理的头部。", ru: "Просмотрите все HTTP-заголовки вашего браузера. Проверьте утечки приватности.", ja: "ブラウザがWebサイトに送信するすべてのHTTPヘッダーを表示。プライバシーリークを確認。", fr: "Affichez tous les en-têtes HTTP que votre navigateur envoie. Vérifiez les fuites de confidentialité.", de: "Zeigen Sie alle HTTP-Header an, die Ihr Browser sendet. Prüfen Sie Datenschutzlecks." },
  loading: { en: "Fetching your headers...", zh: "正在获取你的请求头...", ru: "Получение заголовков...", ja: "ヘッダーを取得中...", fr: "Récupération des en-têtes...", de: "Header werden abgerufen..." },
  requestHeaders: { en: "Your Request Headers", zh: "你的请求头", ru: "Ваши заголовки запроса", ja: "あなたのリクエストヘッダー", fr: "Vos en-têtes de requête", de: "Ihre Request-Header" },
  privacyAnalysis: { en: "Privacy Analysis", zh: "隐私分析", ru: "Анализ приватности", ja: "プライバシー分析", fr: "Analyse de confidentialité", de: "Datenschutzanalyse" },
  safe: { en: "Safe", zh: "安全", ru: "Безопасно", ja: "安全", fr: "Sûr", de: "Sicher" },
  warning: { en: "Warning", zh: "警告", ru: "Внимание", ja: "警告", fr: "Attention", de: "Warnung" },
  info: { en: "Info", zh: "信息", ru: "Инфо", ja: "情報", fr: "Info", de: "Info" },
  browseReviews: { en: "Browse Antidetect Browsers →", zh: "浏览指纹浏览器 →", ru: "Обзоры браузеров →", ja: "ブラウザを見る →", fr: "Parcourir les navigateurs →", de: "Browser ansehen →" },
};

const PRIVACY_HEADERS: Record<string, { risk: "low" | "medium" | "high"; desc: Record<string, string> }> = {
  "x-forwarded-for": { risk: "high", desc: { en: "Reveals your real IP when using a proxy", zh: "使用代理时暴露真实 IP", ru: "Раскрывает реальный IP при использовании прокси", ja: "プロキシ使用時に実際のIPを公開", fr: "Révèle votre IP réelle avec un proxy", de: "Enthüllt Ihre echte IP bei Proxy-Nutzung" } },
  "via": { risk: "high", desc: { en: "Indicates a proxy or gateway is being used", zh: "表明正在使用代理或网关", ru: "Указывает на использование прокси", ja: "プロキシまたはゲートウェイの使用を示す", fr: "Indique l'utilisation d'un proxy", de: "Zeigt Proxy-/Gateway-Nutzung an" } },
  "x-real-ip": { risk: "high", desc: { en: "Exposes your real IP address", zh: "暴露你的真实 IP 地址", ru: "Раскрывает ваш реальный IP", ja: "実際のIPアドレスを公開", fr: "Expose votre adresse IP réelle", de: "Enthüllt Ihre echte IP" } },
  "accept-language": { risk: "medium", desc: { en: "Can be used to identify your locale preferences", zh: "可用于识别你的区域偏好", ru: "Может использоваться для определения вашей локали", ja: "ロケール設定の特定に使用可能", fr: "Peut identifier vos préférences de langue", de: "Kann Ihre Spracheinstellungen identifizieren" } },
  "dnt": { risk: "low", desc: { en: "Do Not Track header — makes you more identifiable", zh: "Do Not Track 头部——使你更易被识别", ru: "Заголовок Do Not Track — делает вас более узнаваемым", ja: "Do Not Trackヘッダー — 識別されやすくなる", fr: "En-tête DNT — vous rend plus identifiable", de: "DNT-Header — macht Sie erkennbarer" } },
};

export default function HeadersChecker() {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;
  const [headers, setHeaders] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/headers")
      .then((r) => r.json())
      .then((d) => { setHeaders(d.headers || {}); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const sortedHeaders = Object.entries(headers).sort(([a], [b]) => a.localeCompare(b));
  const privacyFindings = sortedHeaders
    .filter(([key]) => PRIVACY_HEADERS[key.toLowerCase()])
    .map(([key, value]) => ({
      key,
      value,
      ...PRIVACY_HEADERS[key.toLowerCase()],
    }));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[
            { label: "Tools", href: "/tools" },
            { label: i(ui.label), href: "/tools/http-headers" },
          ]} />
          <span className="section-label">📋 {i(ui.label)}</span>
          <h1>{i(ui.title)}</h1>
          <p>{i(ui.subtitle)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {loading && (
            <div className="tool-status-card scanning">
              <div className="tool-status-icon spinner">⏳</div>
              <h2>{i(ui.loading)}</h2>
            </div>
          )}

          {!loading && (
            <>
              {/* Privacy Analysis */}
              {privacyFindings.length > 0 && (
                <div className="tool-results" style={{ marginBottom: 24 }}>
                  <h3 style={{ marginBottom: 12 }}>🔐 {i(ui.privacyAnalysis)}</h3>
                  {privacyFindings.map((finding) => (
                    <div key={finding.key} className={`tool-result-item ${finding.risk === "high" ? "danger" : ""}`}>
                      <div>
                        <code style={{ fontWeight: 600 }}>{finding.key}</code>
                        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "4px 0 0" }}>{i(finding.desc)}</p>
                      </div>
                      <span className={`risk-badge ${finding.risk}`}>
                        {finding.risk === "high" ? "⚠️" : finding.risk === "medium" ? "⚡" : "ℹ️"} {finding.risk.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* All Headers */}
              <div className="tool-results">
                <h3 style={{ marginBottom: 12 }}>{i(ui.requestHeaders)} ({sortedHeaders.length})</h3>
                {sortedHeaders.map(([key, value]) => (
                  <div key={key} className="tool-result-item">
                    <span className="tool-result-label"><code>{key}</code></span>
                    <span className="tool-result-value" style={{ wordBreak: "break-all", maxWidth: "60%" }}>{value}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <AdUnit slot="headers-tool-1" format="horizontal" className="tool-ad" />

          <div className="review-cta-box" style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/reviews" className="btn-primary">{i(ui.browseReviews)}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
