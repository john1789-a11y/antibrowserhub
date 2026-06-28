"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AdUnit from "@/components/AdUnit";
import { useI18n } from "@/components/I18nProvider";

const ui = {
  label: { en: "WebRTC Leak Test", zh: "WebRTC 泄漏检测", ru: "Тест утечки WebRTC", ja: "WebRTCリークテスト", fr: "Test de fuite WebRTC", de: "WebRTC-Leak-Test" },
  title: { en: "WebRTC Leak Test", zh: "WebRTC 泄漏检测", ru: "Тест утечки WebRTC", ja: "WebRTCリークテスト", fr: "Test de fuite WebRTC", de: "WebRTC-Leak-Test" },
  subtitle: { en: "Check if WebRTC is exposing your real IP address, even behind a VPN or proxy.", zh: "检查 WebRTC 是否暴露了你的真实 IP 地址，即使在 VPN 或代理后面。", ru: "Проверьте, не раскрывает ли WebRTC ваш реальный IP-адрес.", ja: "VPNやプロキシの背後でもWebRTCが実際のIPを公開していないか確認。", fr: "Vérifiez si WebRTC expose votre adresse IP réelle.", de: "Prüfen Sie, ob WebRTC Ihre echte IP-Adresse offenlegt." },
  scanning: { en: "Scanning for WebRTC leaks...", zh: "正在扫描 WebRTC 泄漏...", ru: "Сканирование утечек WebRTC...", ja: "WebRTCリークをスキャン中...", fr: "Recherche de fuites WebRTC...", de: "WebRTC-Lecks werden gesucht..." },
  noVPN: { en: "WebRTC Exposed — No VPN/Proxy Detected", zh: "WebRTC 已暴露 — 未检测到 VPN/代理", ru: "WebRTC раскрыт — VPN/прокси не обнаружен", ja: "WebRTC露出 — VPN/プロキシ未検出", fr: "WebRTC exposé — Pas de VPN/proxy détecté", de: "WebRTC exponiert — Kein VPN/Proxy erkannt" },
  noVPNDesc: { en: "Your public IP is visible via WebRTC. This is normal without a VPN. If you use a VPN or antidetect browser, re-test to verify protection.", zh: "你的公网 IP 通过 WebRTC 可见。不使用 VPN 时这是正常的。如果你使用 VPN 或指纹浏览器，请重新测试以验证保护效果。", ru: "Ваш публичный IP виден через WebRTC. Это нормально без VPN. С VPN или антидетект-браузером — перепроверьте.", ja: "パブリックIPがWebRTCで可視です。VPNなしでは正常です。VPNやアンチ検出ブラウザ使用時は再テストしてください。", fr: "Votre IP publique est visible via WebRTC. C'est normal sans VPN. Avec un VPN, retestez.", de: "Ihre öffentliche IP ist über WebRTC sichtbar. Ohne VPN ist das normal. Mit VPN erneut testen." },
  safe: { en: "No WebRTC Leak — You're Protected", zh: "无 WebRTC 泄漏 — 你已受到保护", ru: "Утечек нет — Вы защищены", ja: "WebRTCリークなし — 保護されています", fr: "Pas de fuite — Vous êtes protégé", de: "Kein Leak — Sie sind geschützt" },
  safeDesc: { en: "WebRTC is not leaking any identifiable IP addresses. Your browser is well-configured.", zh: "WebRTC 未泄漏任何可识别的 IP 地址。你的浏览器配置良好。", ru: "WebRTC не раскрывает никаких IP-адресов. Ваш браузер настроен правильно.", ja: "WebRTCはIPアドレスを漏洩していません。ブラウザは適切に設定されています。", fr: "WebRTC ne divulgue aucune adresse IP identifiable.", de: "WebRTC gibt keine identifizierbaren IP-Adressen preis." },
  disabled: { en: "WebRTC is Disabled", zh: "WebRTC 已禁用", ru: "WebRTC отключён", ja: "WebRTCは無効です", fr: "WebRTC est désactivé", de: "WebRTC ist deaktiviert" },
  disabledDesc: { en: "No WebRTC candidates were found. WebRTC is disabled or blocked in your browser.", zh: "未找到 WebRTC 候选项。WebRTC 在你的浏览器中已禁用或被阻止。", ru: "Кандидаты WebRTC не найдены. WebRTC отключён или заблокирован.", ja: "WebRTC候補が見つかりません。ブラウザでWebRTCが無効またはブロックされています。", fr: "Aucun candidat WebRTC trouvé. WebRTC est désactivé ou bloqué.", de: "Keine WebRTC-Kandidaten gefunden. WebRTC ist deaktiviert oder blockiert." },
  localIPs: { en: "Local IPs (Private — Safe)", zh: "本地 IP（私有 — 安全）", ru: "Локальные IP (безопасно)", ja: "ローカルIP（プライベート — 安全）", fr: "IP locales (privées — sûr)", de: "Lokale IPs (privat — sicher)" },
  publicIPs: { en: "Public IPs (Visible to Websites)", zh: "公网 IP（网站可见）", ru: "Публичные IP (видны сайтам)", ja: "パブリックIP（Webサイトに可視）", fr: "IP publiques (visibles)", de: "Öffentliche IPs (für Websites sichtbar)" },
  mdnsIPs: { en: "mDNS Candidates (Obfuscated — Safe)", zh: "mDNS 候选项（已混淆 — 安全）", ru: "mDNS кандидаты (замаскированы — безопасно)", ja: "mDNS候補（難読化 — 安全）", fr: "Candidats mDNS (masqués — sûr)", de: "mDNS-Kandidaten (verschleiert — sicher)" },
  whatIs: { en: "What is a WebRTC Leak?", zh: "什么是 WebRTC 泄漏？", ru: "Что такое утечка WebRTC?", ja: "WebRTCリークとは？", fr: "Qu'est-ce qu'une fuite WebRTC ?", de: "Was ist ein WebRTC-Leak?" },
  whatIsDesc: { en: "WebRTC (Web Real-Time Communication) is a browser technology for voice/video calls and P2P data sharing. It can reveal your real IP address even when using a VPN or proxy, because it uses STUN servers to discover your network interfaces. Antidetect browsers typically disable or spoof WebRTC to prevent this leak.", zh: "WebRTC（Web 实时通信）是用于语音/视频通话和 P2P 数据共享的浏览器技术。它可以在使用 VPN 或代理时暴露你的真实 IP 地址，因为它使用 STUN 服务器发现你的网络接口。指纹浏览器通常会禁用或伪装 WebRTC 以防止这种泄漏。", ru: "WebRTC — технология браузера для голосовых/видеозвонков. Она может раскрыть ваш реальный IP даже при использовании VPN, так как использует STUN-серверы. Антидетект-браузеры обычно отключают или подменяют WebRTC.", ja: "WebRTCはブラウザの音声/ビデオ通話技術です。STUNサーバーを使用してネットワークインターフェースを検出するため、VPN使用時にも実際のIPを公開する可能性があります。", fr: "WebRTC est une technologie de navigateur pour les appels vocaux/vidéo. Elle peut révéler votre IP réelle même avec un VPN, car elle utilise des serveurs STUN.", de: "WebRTC ist eine Browser-Technologie für Sprach-/Videoanrufe. Sie kann Ihre echte IP auch bei VPN-Nutzung offenlegen, da sie STUN-Server verwendet." },
  howToFix: { en: "How to Protect Against WebRTC Leaks", zh: "如何防止 WebRTC 泄漏", ru: "Как защититься от утечек WebRTC", ja: "WebRTCリークから保護する方法", fr: "Comment se protéger des fuites WebRTC", de: "So schützen Sie sich vor WebRTC-Lecks" },
  fix1: { en: "Use an antidetect browser that handles WebRTC settings automatically", zh: "使用自动处理 WebRTC 设置的指纹浏览器", ru: "Используйте антидетект-браузер с автоматической настройкой WebRTC", ja: "WebRTC設定を自動処理するアンチ検出ブラウザを使用", fr: "Utilisez un navigateur anti-détection qui gère WebRTC automatiquement", de: "Verwenden Sie einen Antidetect-Browser mit automatischer WebRTC-Verwaltung" },
  fix2: { en: "Disable WebRTC in browser settings (Firefox: about:config → media.peerconnection.enabled = false)", zh: "在浏览器设置中禁用 WebRTC（Firefox: about:config → media.peerconnection.enabled = false）", ru: "Отключите WebRTC в настройках браузера (Firefox: about:config → media.peerconnection.enabled = false)", ja: "ブラウザ設定でWebRTCを無効化（Firefox: about:config → media.peerconnection.enabled = false）", fr: "Désactivez WebRTC dans les paramètres (Firefox: about:config → media.peerconnection.enabled = false)", de: "Deaktivieren Sie WebRTC in den Browsereinstellungen" },
  fix3: { en: "Install a WebRTC leak prevention browser extension", zh: "安装 WebRTC 泄漏防护浏览器扩展", ru: "Установите расширение для предотвращения утечек WebRTC", ja: "WebRTCリーク防止ブラウザ拡張をインストール", fr: "Installez une extension de prévention des fuites WebRTC", de: "Installieren Sie eine WebRTC-Leak-Prevention-Erweiterung" },
  browseReviews: { en: "Browse Antidetect Browsers →", zh: "浏览指纹浏览器 →", ru: "Обзоры антидетект-браузеров →", ja: "アンチ検出ブラウザを見る →", fr: "Parcourir les navigateurs →", de: "Antidetect-Browser ansehen →" },
};

interface IPInfo { ip: string; type: "local" | "public" | "mdns"; }

function classifyIP(ip: string): IPInfo["type"] {
  // mDNS obfuscated candidates (e.g. "abc123-def456.local" or UUID.local)
  if (ip.endsWith(".local") || /^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(ip)) return "mdns";
  // Private IPv4
  if (/^(10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|169\.254\.|127\.|0\.0\.0\.0)/.test(ip)) return "local";
  // Private IPv6
  if (/^(fe80|fc|fd|::1|0{1,4}:)/i.test(ip)) return "local";
  return "public";
}

export default function WebRTCChecker() {
  const { locale } = useI18n();
  const i = (m: Record<string, string>) => m[locale] || m.en;
  const [status, setStatus] = useState<"scanning" | "done" | "disabled">("scanning");
  const [ips, setIps] = useState<IPInfo[]>([]);

  useEffect(() => {
    const found: IPInfo[] = [];
    const seen = new Set<string>();

    try {
      const pc = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:stun1.l.google.com:19302" },
        ],
      });

      pc.createDataChannel("");

      pc.onicecandidate = (e) => {
        if (!e.candidate) {
          setIps([...found]);
          setStatus(found.length === 0 ? "disabled" : "done");
          try { pc.close(); } catch { /* */ }
          return;
        }
        const candidate = e.candidate.candidate;
        if (!candidate) return;

        const parts = candidate.split(" ");
        const ip = parts[4];
        if (!ip || seen.has(ip)) return;
        seen.add(ip);
        found.push({ ip, type: classifyIP(ip) });
      };

      pc.createOffer().then((offer) => pc.setLocalDescription(offer));

      setTimeout(() => {
        if (found.length === 0) {
          setStatus("disabled");
        } else {
          setIps([...found]);
          setStatus("done");
        }
        try { pc.close(); } catch { /* */ }
      }, 5000);
    } catch {
      setTimeout(() => setStatus("disabled"), 0);
    }
  }, []);

  const publicIPs = ips.filter((ip) => ip.type === "public");
  const localIPs = ips.filter((ip) => ip.type === "local");
  const mdnsIPs = ips.filter((ip) => ip.type === "mdns");
  const hasPublicIP = publicIPs.length > 0;

  const statusType = status === "disabled" ? "disabled" : hasPublicIP ? "exposed" : "safe";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[
            { label: "Tools", href: "/tools" },
            { label: i(ui.label), href: "/tools/webrtc-leak-test" },
          ]} />
          <span className="section-label">🔒 {i(ui.label)}</span>
          <h1>{i(ui.title)}</h1>
          <p>{i(ui.subtitle)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {/* Status */}
          {status === "scanning" && (
            <div className="tool-status-card scanning">
              <div className="tool-status-icon spinner">⏳</div>
              <h2>{i(ui.scanning)}</h2>
            </div>
          )}
          {status === "done" && statusType === "exposed" && (
            <div className="tool-status-card" style={{ borderColor: "#f59e0b" }}>
              <div className="tool-status-icon">⚡</div>
              <h2>{i(ui.noVPN)}</h2>
              <p style={{ color: "var(--text-secondary)", marginTop: 8, fontSize: "0.9rem" }}>{i(ui.noVPNDesc)}</p>
            </div>
          )}
          {status === "done" && statusType === "safe" && (
            <div className="tool-status-card safe">
              <div className="tool-status-icon">✅</div>
              <h2>{i(ui.safe)}</h2>
              <p style={{ color: "var(--text-secondary)", marginTop: 8, fontSize: "0.9rem" }}>{i(ui.safeDesc)}</p>
            </div>
          )}
          {statusType === "disabled" && status !== "scanning" && (
            <div className="tool-status-card safe">
              <div className="tool-status-icon">🛡️</div>
              <h2>{i(ui.disabled)}</h2>
              <p style={{ color: "var(--text-secondary)", marginTop: 8, fontSize: "0.9rem" }}>{i(ui.disabledDesc)}</p>
            </div>
          )}

          {/* Results */}
          {status === "done" && ips.length > 0 && (
            <div className="tool-results">
              {publicIPs.length > 0 && (
                <div className="tool-result-group" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)", marginBottom: 12 }}>
                  <h3>🌐 {i(ui.publicIPs)}</h3>
                  {publicIPs.map((ip) => (
                    <div key={ip.ip} className="tool-result-item">
                      <code>{ip.ip}</code>
                      <span className="risk-badge medium">PUBLIC</span>
                    </div>
                  ))}
                </div>
              )}
              {localIPs.length > 0 && (
                <div className="tool-result-group safe" style={{ marginBottom: 12 }}>
                  <h3>🏠 {i(ui.localIPs)}</h3>
                  {localIPs.map((ip) => (
                    <div key={ip.ip} className="tool-result-item">
                      <code>{ip.ip}</code>
                      <span className="risk-badge low">PRIVATE</span>
                    </div>
                  ))}
                </div>
              )}
              {mdnsIPs.length > 0 && (
                <div className="tool-result-group safe">
                  <h3>🔒 {i(ui.mdnsIPs)}</h3>
                  {mdnsIPs.map((ip) => (
                    <div key={ip.ip} className="tool-result-item">
                      <code style={{ fontSize: "0.78rem" }}>{ip.ip}</code>
                      <span className="risk-badge low">SAFE</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <AdUnit slot="webrtc-tool-1" format="horizontal" className="tool-ad" />

          <div className="tool-info-section">
            <h2>{i(ui.whatIs)}</h2>
            <p>{i(ui.whatIsDesc)}</p>
          </div>

          <div className="tool-info-section">
            <h2>{i(ui.howToFix)}</h2>
            <ul className="tool-fix-list">
              <li>{i(ui.fix1)}</li>
              <li>{i(ui.fix2)}</li>
              <li>{i(ui.fix3)}</li>
            </ul>
          </div>

          <div className="review-cta-box" style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/reviews" className="btn-primary">{i(ui.browseReviews)}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
