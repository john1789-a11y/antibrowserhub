"use client";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import Breadcrumb from "@/components/Breadcrumb";

const ui = {
  label: { en: "Free Tools", zh: "免费工具", ru: "Инструменты", ja: "無料ツール", fr: "Outils gratuits", de: "Kostenlose Tools" },
  title: { en: "Free Privacy & Security Tools", zh: "免费隐私与安全工具", ru: "Бесплатные инструменты приватности", ja: "無料プライバシー＆セキュリティツール", fr: "Outils de confidentialité gratuits", de: "Kostenlose Datenschutz-Tools" },
  subtitle: { en: "Test your browser fingerprint, check for IP leaks, and analyze your online privacy — all for free.", zh: "检测你的浏览器指纹、检查 IP 泄漏并分析你的在线隐私——完全免费。", ru: "Проверьте отпечаток браузера, утечки IP и приватность — бесплатно.", ja: "ブラウザフィンガープリントのテスト、IPリークの確認、オンラインプライバシーの分析 — すべて無料。", fr: "Testez votre empreinte, vérifiez les fuites IP et analysez votre confidentialité — gratuitement.", de: "Testen Sie Ihren Fingerprint, prüfen Sie IP-Lecks und analysieren Sie Ihre Privatsphäre — kostenlos." },
  launch: { en: "Launch Tool →", zh: "启动工具 →", ru: "Запустить →", ja: "ツールを起動 →", fr: "Lancer l'outil →", de: "Tool starten →" },
};

const tools = [
  {
    slug: "fingerprint-check",
    icon: "🔎",
    name: { en: "Browser Fingerprint Checker", zh: "浏览器指纹检测", ru: "Проверка отпечатка браузера", ja: "ブラウザフィンガープリントチェッカー", fr: "Vérificateur d'empreinte", de: "Browser-Fingerprint-Checker" },
    desc: { en: "Analyze your browser fingerprint uniqueness, consistency, and authenticity. Test Canvas, WebGL, fonts, and more.", zh: "分析浏览器指纹的独特性、一致性和真实性。测试 Canvas、WebGL、字体等。", ru: "Анализ уникальности, консистентности и подлинности отпечатка браузера.", ja: "ブラウザフィンガープリントの一意性、一貫性、信頼性を分析。", fr: "Analysez l'unicité et l'authenticité de votre empreinte de navigateur.", de: "Analysieren Sie die Einzigartigkeit und Authentizität Ihres Browser-Fingerprints." },
  },
  {
    slug: "webrtc-leak-test",
    icon: "🔒",
    name: { en: "WebRTC Leak Test", zh: "WebRTC 泄漏检测", ru: "Тест утечки WebRTC", ja: "WebRTCリークテスト", fr: "Test de fuite WebRTC", de: "WebRTC-Leak-Test" },
    desc: { en: "Check if WebRTC is leaking your real IP address even when using a VPN or proxy.", zh: "检查 WebRTC 是否泄漏了你的真实 IP 地址，即使使用 VPN 或代理。", ru: "Проверьте, не утекает ли ваш реальный IP через WebRTC при использовании VPN.", ja: "VPNやプロキシ使用時にもWebRTCが実際のIPアドレスを漏洩していないか確認。", fr: "Vérifiez si WebRTC divulgue votre adresse IP réelle même avec un VPN.", de: "Prüfen Sie, ob WebRTC Ihre echte IP-Adresse offenlegt." },
  },
  {
    slug: "ip-checker",
    icon: "🌐",
    name: { en: "IP Address Checker", zh: "IP 地址查询", ru: "Проверка IP-адреса", ja: "IPアドレスチェッカー", fr: "Vérificateur d'adresse IP", de: "IP-Adress-Checker" },
    desc: { en: "See your public IP address, geolocation, ISP, and detect if you're using a proxy or VPN.", zh: "查看你的公网 IP 地址、地理位置、ISP，检测是否使用代理或 VPN。", ru: "Узнайте свой IP-адрес, геолокацию, провайдера и обнаружение прокси/VPN.", ja: "パブリックIPアドレス、地理位置、ISPを表示し、プロキシ/VPN使用を検出。", fr: "Affichez votre IP publique, géolocalisation, FAI et détection de proxy/VPN.", de: "Zeigen Sie Ihre öffentliche IP, Geolokation, ISP und Proxy/VPN-Erkennung an." },
  },
  {
    slug: "user-agent-parser",
    icon: "🔍",
    name: { en: "User Agent Parser", zh: "User Agent 解析器", ru: "Парсер User Agent", ja: "ユーザーエージェント解析", fr: "Analyseur User Agent", de: "User-Agent-Parser" },
    desc: { en: "Parse and analyze User Agent strings. Detect browser, OS, device type, and check Client Hints consistency.", zh: "解析和分析 User Agent 字符串。检测浏览器、操作系统、设备类型和 Client Hints 一致性。", ru: "Парсинг и анализ строки User Agent. Определение браузера, ОС и устройства.", ja: "User Agent文字列を解析。ブラウザ、OS、デバイスタイプ、Client Hintsの一貫性を確認。", fr: "Analysez les chaînes User Agent. Détectez navigateur, OS, appareil et Client Hints.", de: "Analysieren Sie User-Agent-Strings. Erkennen Sie Browser, OS, Gerätetyp und Client Hints." },
  },
  {
    slug: "http-headers",
    icon: "📋",
    name: { en: "HTTP Headers Checker", zh: "HTTP 请求头检查", ru: "Проверка HTTP-заголовков", ja: "HTTPヘッダーチェッカー", fr: "Vérificateur d'en-têtes HTTP", de: "HTTP-Header-Checker" },
    desc: { en: "View all HTTP headers your browser sends. Check for privacy leaks and proxy-revealing headers.", zh: "查看浏览器发送的所有 HTTP 请求头。检查隐私泄漏和暴露代理的头部。", ru: "Просмотр всех HTTP-заголовков вашего браузера. Проверка утечек и прокси-заголовков.", ja: "ブラウザが送信するすべてのHTTPヘッダーを表示。プライバシーリークとプロキシ露出ヘッダーを確認。", fr: "Affichez tous les en-têtes HTTP envoyés par votre navigateur.", de: "Zeigen Sie alle HTTP-Header an, die Ihr Browser sendet." },
  },
];

export default function ToolsListContent() {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[{ label: i(ui.label), href: "/tools" }]} />
          <span className="section-label">🛠️ {i(ui.label)}</span>
          <h1>{i(ui.title)}</h1>
          <p>{i(ui.subtitle)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="tools-grid">
            {tools.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className="tool-card">
                <div className="tool-card-icon">{tool.icon}</div>
                <h3>{i(tool.name)}</h3>
                <p>{i(tool.desc)}</p>
                <span className="tool-card-cta">{i(ui.launch)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
