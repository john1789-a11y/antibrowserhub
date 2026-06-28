"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AdUnit from "@/components/AdUnit";
import { useI18n } from "@/components/I18nProvider";

const ui = {
  label: { en: "User Agent Parser", zh: "User Agent 解析器", ru: "Парсер User Agent", ja: "UAパーサー", fr: "Analyseur UA", de: "UA-Parser" },
  title: { en: "User Agent Parser", zh: "User Agent 解析器", ru: "Парсер User Agent", ja: "ユーザーエージェント解析", fr: "Analyseur User Agent", de: "User-Agent-Parser" },
  subtitle: { en: "Analyze your browser's User Agent string and Client Hints. Test custom UA strings.", zh: "分析浏览器的 User Agent 字符串和 Client Hints。测试自定义 UA 字符串。", ru: "Анализ строки User Agent и Client Hints вашего браузера.", ja: "ブラウザのUser Agent文字列とClient Hintsを分析。カスタムUAをテスト。", fr: "Analysez la chaîne User Agent et les Client Hints de votre navigateur.", de: "Analysieren Sie den User-Agent-String und Client Hints Ihres Browsers." },
  yourUA: { en: "Your User Agent", zh: "你的 User Agent", ru: "Ваш User Agent", ja: "あなたのUser Agent", fr: "Votre User Agent", de: "Ihr User Agent" },
  parsed: { en: "Parsed Results", zh: "解析结果", ru: "Результаты парсинга", ja: "解析結果", fr: "Résultats", de: "Ergebnisse" },
  browser: { en: "Browser", zh: "浏览器", ru: "Браузер", ja: "ブラウザ", fr: "Navigateur", de: "Browser" },
  os: { en: "Operating System", zh: "操作系统", ru: "Операционная система", ja: "OS", fr: "Système d'exploitation", de: "Betriebssystem" },
  device: { en: "Device Type", zh: "设备类型", ru: "Тип устройства", ja: "デバイスタイプ", fr: "Type d'appareil", de: "Gerätetyp" },
  platform: { en: "Platform", zh: "平台", ru: "Платформа", ja: "プラットフォーム", fr: "Plateforme", de: "Plattform" },
  mobile: { en: "Mobile", zh: "移动设备", ru: "Мобильный", ja: "モバイル", fr: "Mobile", de: "Mobil" },
  clientHints: { en: "Client Hints (Sec-CH-UA)", zh: "Client Hints (Sec-CH-UA)", ru: "Client Hints (Sec-CH-UA)", ja: "Client Hints (Sec-CH-UA)", fr: "Client Hints (Sec-CH-UA)", de: "Client Hints (Sec-CH-UA)" },
  customUA: { en: "Test Custom User Agent", zh: "测试自定义 User Agent", ru: "Тест пользовательского UA", ja: "カスタムUAをテスト", fr: "Tester un UA personnalisé", de: "Benutzerdefinierten UA testen" },
  parse: { en: "Parse", zh: "解析", ru: "Парсить", ja: "解析", fr: "Analyser", de: "Parsen" },
  reset: { en: "Reset to Current", zh: "重置为当前", ru: "Сбросить", ja: "現在に戻す", fr: "Réinitialiser", de: "Zurücksetzen" },
  navProps: { en: "Navigator Properties", zh: "Navigator 属性", ru: "Свойства Navigator", ja: "Navigatorプロパティ", fr: "Propriétés Navigator", de: "Navigator-Eigenschaften" },
  browseReviews: { en: "Browse Antidetect Browsers →", zh: "浏览指纹浏览器 →", ru: "Обзоры браузеров →", ja: "ブラウザを見る →", fr: "Parcourir les navigateurs →", de: "Browser ansehen →" },
};

function parseUA(ua: string) {
  let browser = "Unknown", browserVer = "", os = "Unknown", device = "Desktop";

  // Browser
  if (/Edg\//i.test(ua)) { browser = "Microsoft Edge"; browserVer = ua.match(/Edg\/([\d.]+)/)?.[1] || ""; }
  else if (/OPR\//i.test(ua)) { browser = "Opera"; browserVer = ua.match(/OPR\/([\d.]+)/)?.[1] || ""; }
  else if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) { browser = "Google Chrome"; browserVer = ua.match(/Chrome\/([\d.]+)/)?.[1] || ""; }
  else if (/Firefox\//i.test(ua)) { browser = "Firefox"; browserVer = ua.match(/Firefox\/([\d.]+)/)?.[1] || ""; }
  else if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) { browser = "Safari"; browserVer = ua.match(/Version\/([\d.]+)/)?.[1] || ""; }

  // OS
  if (/Windows NT 10/i.test(ua)) os = "Windows 10/11";
  else if (/Windows NT/i.test(ua)) os = "Windows";
  else if (/Mac OS X/i.test(ua)) { os = "macOS " + (ua.match(/Mac OS X ([\d_]+)/)?.[1]?.replace(/_/g, ".") || ""); }
  else if (/Android/i.test(ua)) { os = "Android " + (ua.match(/Android ([\d.]+)/)?.[1] || ""); }
  else if (/iPhone|iPad/i.test(ua)) { os = "iOS " + (ua.match(/OS ([\d_]+)/)?.[1]?.replace(/_/g, ".") || ""); }
  else if (/Linux/i.test(ua)) os = "Linux";
  else if (/CrOS/i.test(ua)) os = "Chrome OS";

  // Device
  if (/Mobile|Android.*Mobile|iPhone/i.test(ua)) device = "Mobile";
  else if (/iPad|Tablet|Android(?!.*Mobile)/i.test(ua)) device = "Tablet";

  return { browser: `${browser} ${browserVer}`.trim(), os: os.trim(), device };
}

const getCurrentUserAgent = () => typeof navigator === "undefined" ? "" : navigator.userAgent;

function getNavigatorInfo(): Record<string, string> {
  if (typeof navigator === "undefined") return {};
  return {
    "navigator.platform": navigator.platform || "N/A",
    "navigator.language": navigator.language || "N/A",
    "navigator.languages": navigator.languages?.join(", ") || "N/A",
    "navigator.hardwareConcurrency": String(navigator.hardwareConcurrency || "N/A"),
    "navigator.maxTouchPoints": String(navigator.maxTouchPoints ?? "N/A"),
    "navigator.cookieEnabled": String(navigator.cookieEnabled),
    "navigator.onLine": String(navigator.onLine),
    "navigator.pdfViewerEnabled": String((navigator as unknown as Record<string, unknown>).pdfViewerEnabled ?? "N/A"),
  };
}

function getClientHints(): string[] {
  if (typeof navigator === "undefined") return [];
  const n = navigator as unknown as Record<string, unknown>;
  if (!n.userAgentData || typeof n.userAgentData !== "object") return [];
  const uad = n.userAgentData as { brands?: { brand: string; version: string }[] };
  return uad.brands?.map((b) => `${b.brand} ${b.version}`) || [];
}

export default function UAParserComponent() {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;
  const [currentUA] = useState(getCurrentUserAgent);
  const [customUA, setCustomUA] = useState(getCurrentUserAgent);
  const [activeUA, setActiveUA] = useState(getCurrentUserAgent);
  const [navInfo] = useState(getNavigatorInfo);
  const [clientHints] = useState(getClientHints);

  useEffect(() => {
    if (!currentUA) return;
    setTimeout(() => {
      setActiveUA(currentUA);
      setCustomUA(currentUA);
    }, 0);
  }, [currentUA]);

  const parsed = parseUA(activeUA);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[
            { label: "Tools", href: "/tools" },
            { label: i(ui.label), href: "/tools/user-agent-parser" },
          ]} />
          <span className="section-label">🔍 {i(ui.label)}</span>
          <h1>{i(ui.title)}</h1>
          <p>{i(ui.subtitle)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {/* Current UA */}
          <div className="tool-ua-box">
            <h3>{i(ui.yourUA)}</h3>
            <code className="tool-ua-string">{currentUA}</code>
          </div>

          {/* Parsed */}
          <div className="tool-results" style={{ marginTop: 24 }}>
            <h3 style={{ marginBottom: 12 }}>{i(ui.parsed)}</h3>
            <div className="tool-result-item"><span className="tool-result-label">{i(ui.browser)}</span><span className="tool-result-value">{parsed.browser}</span></div>
            <div className="tool-result-item"><span className="tool-result-label">{i(ui.os)}</span><span className="tool-result-value">{parsed.os}</span></div>
            <div className="tool-result-item"><span className="tool-result-label">{i(ui.device)}</span><span className="tool-result-value">{parsed.device}</span></div>
          </div>

          {/* Client Hints */}
          {clientHints.length > 0 && (
            <div className="tool-results" style={{ marginTop: 24 }}>
              <h3 style={{ marginBottom: 12 }}>{i(ui.clientHints)}</h3>
              {clientHints.map((hint) => (
                <div key={hint} className="tool-result-item">
                  <code style={{ fontSize: "0.85rem" }}>{hint}</code>
                </div>
              ))}
            </div>
          )}

          {/* Navigator Properties */}
          <div className="tool-results" style={{ marginTop: 24 }}>
            <h3 style={{ marginBottom: 12 }}>{i(ui.navProps)}</h3>
            {Object.entries(navInfo).map(([key, val]) => (
              <div key={key} className="tool-result-item">
                <span className="tool-result-label"><code>{key}</code></span>
                <span className="tool-result-value">{val}</span>
              </div>
            ))}
          </div>

          <AdUnit slot="ua-tool-1" format="horizontal" className="tool-ad" />

          {/* Custom UA tester */}
          <div className="tool-info-section" style={{ marginTop: 32 }}>
            <h2>{i(ui.customUA)}</h2>
            <div className="tool-custom-input">
              <textarea
                value={customUA}
                onChange={(e) => setCustomUA(e.target.value)}
                rows={3}
                placeholder="Mozilla/5.0 ..."
              />
              <div style={{ display: "flex", gap: 12 }}>
                <button className="btn-primary" onClick={() => setActiveUA(customUA)}>{i(ui.parse)}</button>
                <button className="btn-secondary" onClick={() => { setCustomUA(currentUA); setActiveUA(currentUA); }}>{i(ui.reset)}</button>
              </div>
            </div>

            {activeUA !== currentUA && (
              <div className="tool-results" style={{ marginTop: 16 }}>
                <div className="tool-result-item"><span className="tool-result-label">{i(ui.browser)}</span><span className="tool-result-value">{parsed.browser}</span></div>
                <div className="tool-result-item"><span className="tool-result-label">{i(ui.os)}</span><span className="tool-result-value">{parsed.os}</span></div>
                <div className="tool-result-item"><span className="tool-result-label">{i(ui.device)}</span><span className="tool-result-value">{parsed.device}</span></div>
              </div>
            )}
          </div>

          <div className="review-cta-box" style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/reviews" className="btn-primary">{i(ui.browseReviews)}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
