"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import Breadcrumb from "@/components/Breadcrumb";

/* ─── types ─── */
type Risk = "low" | "medium" | "high";
type ScanStatus = "pending" | "scanning" | "done";

interface DetectItem {
  label: string;
  value: string;
  risk: Risk;
  description: string;
}

interface Category {
  id: string;
  icon: string;
  name: Record<string, string>;
  status: ScanStatus;
  items: DetectItem[];
  score: number;
}

/* ─── Proper hash: cyrb53 (fast, high-quality, 53-bit) ─── */
function cyrb53(str: string, seed = 0): string {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const n = 4294967296 * (2097151 & h2) + (h1 >>> 0);
  return n.toString(16).toUpperCase().padStart(14, "0");
}

/* ─── Correlation discount factor ───
 * Individual entropy values from EFF/AmIUnique research are NOT independent.
 * E.g., OS correlates with WebGL renderer, platform, fonts, etc.
 * EFF Panopticlick found typical total fingerprint = ~33.6 bits.
 * Summing all individual values gives ~90-110 bits (naive sum).
 * Applying 0.35 discount factor brings it to realistic range (32-38 bits).
 */
const ENTROPY_CORRELATION_FACTOR = 0.35;

/* ─── Known entropy values from research (EFF Panopticlick, FingerprintJS) ─── */
const KNOWN_ENTROPY: Record<string, number> = {
  "User Agent": 10.0,       // ~10 bits (EFF Panopticlick data)
  "Platform": 3.5,
  "Language": 4.8,
  "Client Hints Brands": 5.2,
  "Screen Resolution": 4.8,
  "Available Screen": 3.7,
  "Device Pixel Ratio": 2.3,
  "Color Depth": 1.2,
  "Timezone": 3.0,
  "CPU Cores": 2.5,
  "Device Memory": 2.0,
  "Touch Support": 1.5,
  "Canvas Hash": 11.5,       // Canvas is VERY identifying (~11.5 bits)
  "Canvas Consistent": 0.5,
  "WebGL Renderer": 8.3,     // GPU string ~8 bits
  "WebGL Vendor": 4.5,
  "WebGL Hash": 7.2,
  "Audio Hash": 5.7,
  "Fonts Detected": 13.9,
  "WebRTC Local IP": 6.0,
  "Do Not Track": 0.7,
  "Cookies Enabled": 0.2,
  "WebDriver": 1.0,
  "Plugins Count": 2.8,
  "Speech Voices": 3.5,
};

/* ─── i18n ─── */
const ui: Record<string, Record<string, string>> = {
  title: { en: "Browser Fingerprint Checker", zh: "浏览器指纹检测", ru: "Проверка отпечатка браузера", ja: "ブラウザ指紋チェッカー", fr: "Vérificateur d'empreinte", de: "Fingerprint-Checker" },
  subtitle: { en: "Real fingerprint analysis using proven techniques from FingerprintJS, Panopticlick & CreepJS. No fake scores.", zh: "基于 FingerprintJS、Panopticlick、CreepJS 等开源项目的真实指纹分析技术。无虚假评分。", ru: "Реальный анализ отпечатков на основе FingerprintJS, Panopticlick и CreepJS.", ja: "FingerprintJS、Panopticlick、CreepJSに基づく実際の指紋分析。", fr: "Analyse réelle basée sur FingerprintJS, Panopticlick et CreepJS.", de: "Echte Fingerprint-Analyse basierend auf FingerprintJS, Panopticlick & CreepJS." },
  scanning: { en: "Scanning", zh: "正在扫描", ru: "Сканирование", ja: "スキャン中", fr: "Analyse", de: "Scan" },
  complete: { en: "Scan Complete", zh: "扫描完成", ru: "Завершено", ja: "完了", fr: "Terminé", de: "Abgeschlossen" },
  uniqueness: { en: "Uniqueness", zh: "唯一性", ru: "Уникальность", ja: "一意性", fr: "Unicité", de: "Einzigartigkeit" },
  entropyBits: { en: "bits of entropy", zh: "比特熵值", ru: "бит энтропии", ja: "ビットエントロピー", fr: "bits d'entropie", de: "Bit Entropie" },
  authenticityScore: { en: "Authenticity Score", zh: "指纹真实度", ru: "Оценка подлинности", ja: "信頼性スコア", fr: "Score d'authenticité", de: "Authentizitäts-Score" },
  oneIn: { en: "Your browser is unique among", zh: "你的浏览器在以下数量中唯一", ru: "Ваш браузер уникален среди", ja: "ブラウザの一意性", fr: "Votre navigateur est unique parmi", de: "Ihr Browser ist einzigartig unter" },
  browsers: { en: "browsers", zh: "个浏览器", ru: "браузеров", ja: "ブラウザ中", fr: "navigateurs", de: "Browsern" },
  high: { en: "High Risk", zh: "高风险", ru: "Высокий", ja: "高リスク", fr: "Élevé", de: "Hoch" },
  medium: { en: "Medium", zh: "中等", ru: "Средний", ja: "中", fr: "Moyen", de: "Mittel" },
  low: { en: "Low Risk", zh: "低风险", ru: "Низкий", ja: "低", fr: "Faible", de: "Niedrig" },
  highRisk: { en: "High Risk", zh: "高风险", ru: "Высокий риск", ja: "高リスク", fr: "Risque élevé", de: "Hohes Risiko" },
  mediumRisk: { en: "Medium Risk", zh: "中风险", ru: "Средний риск", ja: "中リスク", fr: "Risque moyen", de: "Mittleres Risiko" },
  lowRisk: { en: "Passed", zh: "已通过", ru: "Пройден", ja: "正常", fr: "Normal", de: "Bestanden" },
  highEntropy: { en: "High Entropy", zh: "高熵值", ru: "Высокая энтропия", ja: "高エントロピー", fr: "Entropie élevée", de: "Hohe Entropie" },
  mediumEntropy: { en: "Medium Entropy", zh: "中熵值", ru: "Средняя энтропия", ja: "中エントロピー", fr: "Entropie moyenne", de: "Mittlere Entropie" },
  lowEntropy: { en: "Low Entropy", zh: "低熵值", ru: "Низкая энтропия", ja: "低エントロピー", fr: "Faible entropie", de: "Geringe Entropie" },
  anomalies: { en: "Anomalies", zh: "异常项", ru: "Аномалии", ja: "異常値", fr: "Anomalies", de: "Anomalien" },
  detected: { en: "detected", zh: "项检测", ru: "обнаружено", ja: "検出", fr: "détectés", de: "erkannt" },
  parameters: { en: "parameters", zh: "参数", ru: "параметров", ja: "パラメータ", fr: "paramètres", de: "Parameter" },
  passed: { en: "Passed", zh: "通过", ru: "Пройден", ja: "合格", fr: "Réussi", de: "OK" },
  failed: { en: "Warning", zh: "异常", ru: "Внимание", ja: "警告", fr: "Attention", de: "Warnung" },
  protectTitle: { en: "Protect Your Digital Identity", zh: "保护你的数字身份", ru: "Защитите цифровую личность", ja: "デジタルIDを保護", fr: "Protégez votre identité", de: "Schützen Sie Ihre Identität" },
  protectDesc: { en: "Your browser fingerprint is highly unique and trackable. An antidetect browser generates different fingerprints per session, making cross-site tracking impossible.", zh: "你的浏览器指纹高度唯一且可追踪。指纹浏览器为每个会话生成不同的指纹，使跨站追踪成为不可能。", ru: "Отпечаток вашего браузера уникален и отслеживаем. Антидетект-браузер генерирует разные отпечатки для каждой сессии.", ja: "フィンガープリントは高度にユニークで追跡可能です。アンチ検出ブラウザがセッションごとに異なるフィンガープリントを生成します。", fr: "Votre empreinte est unique et traçable. Un navigateur anti-détection génère des empreintes différentes.", de: "Ihr Fingerprint ist einzigartig und verfolgbar. Ein Antidetect-Browser generiert verschiedene Fingerprints pro Sitzung." },
  compareBtn: { en: "Compare Antidetect Browsers →", zh: "对比指纹浏览器 →", ru: "Сравнить браузеры →", ja: "ブラウザ比較 →", fr: "Comparer →", de: "Browser vergleichen →" },
  proxyBtn: { en: "Find Best Proxies →", zh: "寻找最佳代理 →", ru: "Лучшие прокси →", ja: "プロキシ →", fr: "Trouver des proxies →", de: "Proxies finden →" },
  rescan: { en: "Re-scan", zh: "重新扫描", ru: "Пересканировать", ja: "再スキャン", fr: "Re-scanner", de: "Erneut scannen" },
  canvasTitle: { en: "Canvas Fingerprint Rendering", zh: "Canvas 指纹渲染", ru: "Рендер Canvas", ja: "Canvas レンダリング", fr: "Rendu Canvas", de: "Canvas-Rendering" },
  canvasConsistent: { en: "Canvas renders consistently (not randomized)", zh: "Canvas 渲染一致（未被随机化）", ru: "Canvas рендерится стабильно", ja: "Canvas一貫性あり", fr: "Canvas stable", de: "Canvas konsistent" },
  canvasInconsistent: { en: "Canvas is randomized (antidetect browser detected!)", zh: "Canvas 已被随机化（检测到指纹浏览器）", ru: "Canvas рандомизирован (антидетект обнаружен!)", ja: "Canvas ランダム化済み", fr: "Canvas randomisé", de: "Canvas randomisiert" },
  toolLabel: { en: "Free Tool", zh: "免费工具", ru: "Бесплатный инструмент", ja: "無料ツール", fr: "Outil gratuit", de: "Kostenloses Tool" },
  methodology: { en: "Methodology", zh: "检测方法论", ru: "Методология", ja: "方法論", fr: "Méthodologie", de: "Methodik" },
  methodDesc: { en: "Entropy values based on EFF Panopticlick research and AmIUnique dataset. Canvas fingerprint uses same rendering pipeline as FingerprintJS. Audio fingerprint computed via OfflineAudioContext oscillator pipeline. WebRTC leak detection via Google STUN servers.", zh: "熵值基于 EFF Panopticlick 研究和 AmIUnique 数据集。Canvas 指纹使用与 FingerprintJS 相同的渲染管线。音频指纹通过 OfflineAudioContext 振荡器管线计算。WebRTC 泄露通过 Google STUN 服务器检测。", ru: "Энтропия основана на данных EFF Panopticlick и AmIUnique. Canvas использует тот же рендеринг, что и FingerprintJS.", ja: "エントロピー値はEFF PanopticlickとAmIUniqueデータセットに基づいています。", fr: "Entropie basée sur les recherches EFF Panopticlick et AmIUnique.", de: "Entropiewerte basieren auf EFF Panopticlick und AmIUnique." },
  webrtcLeaked: { en: "Local IP Leaked", zh: "本地 IP 已泄露", ru: "Локальный IP утёк", ja: "ローカルIP漏洩", fr: "IP locale exposée", de: "Lokale IP exponiert" },
  webrtcSafe: { en: "No IP Leak Detected", zh: "未检测到 IP 泄露", ru: "Утечки IP нет", ja: "IP漏洩なし", fr: "Pas de fuite IP", de: "Kein IP-Leak" },
  publicIp: { en: "Public IP", zh: "公网 IP", ru: "Публичный IP", ja: "パブリックIP", fr: "IP publique", de: "Öffentliche IP" },
  scoreExplain: {
    en: "Authenticity score measures the consistency of your browser fingerprint and checks for automation/headless signals. A normal browser should score above 90%, while mismatched profiles or automated scrapers will receive a lower score.",
    zh: "真实度得分用于衡量你的浏览器指纹一致性，并检测是否存在自动化或无头浏览器特征。正常的浏览器得分应在 90% 以上，配置不一致的指纹或自动化程序得分会显著降低。",
    ru: "Оценка подлинности измеряет согласованность отпечатка и проверяет наличие следов автоматизации. Обычный браузер должен иметь оценку выше 90%.",
    ja: "信頼性スコアは、ブラウザ指紋の一致性を測定し、自動化やヘッドレスのシグナルを検出します。通常のブラウザは90%以上になり、不一致や自動化ツールは低下します。",
    fr: "Le score d'authenticité mesure la cohérence de votre empreinte et détecte les signaux d'automatisation. Un navigateur normal devrait dépasser 90%.",
    de: "Der Authentizitäts-Score misst die Konsistenz Ihres Browser-Fingerprints und sucht nach Automatisierungsspuren. Ein normaler Browser sollte über 90 % erreichen."
  },
  ratingGood: {
    en: "✅ High Authenticity",
    zh: "✅ 高真实度",
    ru: "✅ Высокая подлинность",
    ja: "✅ 高い信頼性",
    fr: "✅ Haute authenticité",
    de: "✅ Hohe Authentizität"
  },
  ratingWarning: {
    en: "⚡ Moderate Risk",
    zh: "⚡ 中度风险",
    ru: "⚡ Умеренный риск",
    ja: "⚡ 中度のリスク",
    fr: "⚡ Risque modéré",
    de: "⚡ Mäßiges Risiko"
  },
  ratingBad: {
    en: "⚠️ High Risk / Fake",
    zh: "⚠️ 高度异常",
    ru: "⚠️ Высокий риск",
    ja: "⚠️ 高リスク",
    fr: "⚠️ Risque élevé",
    de: "⚠️ Hohes Risiko"
  },
  ratingHigh: { en: "⚠️ Highly Trackable", zh: "⚠️ 高度可追踪", ru: "⚠️ Высокая отслеживаемость", ja: "⚠️ 高追跡性", fr: "⚠️ Très traçable", de: "⚠️ Stark verfolgbar" },
  ratingMedium: { en: "⚡ Moderately Unique", zh: "⚡ 中度唯一", ru: "⚡ Умеренная уникальность", ja: "⚡ 中程度のユニーク性", fr: "⚡ Modérément unique", de: "⚡ Mäßig einzigartig" },
  ratingLow: { en: "✅ Low Fingerprint", zh: "✅ 低指纹暴露", ru: "✅ Низкий отпечаток", ja: "✅ 低フィンガープリント", fr: "✅ Faible empreinte", de: "✅ Niedriger Fingerprint" },
};
const i = (m: Record<string, string>, l: string) => m[l] || m.en;

const catNames: Record<string, Record<string, string>> = {
  system: { en: "System & Browser", zh: "系统与浏览器", ru: "Система", ja: "システム", fr: "Système", de: "System" },
  canvas: { en: "Canvas & WebGL", zh: "Canvas & WebGL", ru: "Canvas & WebGL", ja: "Canvas & WebGL", fr: "Canvas & WebGL", de: "Canvas & WebGL" },
  audio: { en: "Audio Fingerprint", zh: "音频指纹", ru: "Аудио", ja: "オーディオ", fr: "Audio", de: "Audio" },
  hardware: { en: "Hardware", zh: "硬件信息", ru: "Оборудование", ja: "ハードウェア", fr: "Matériel", de: "Hardware" },
  network: { en: "Network & IP", zh: "网络与 IP", ru: "Сеть и IP", ja: "ネットワーク", fr: "Réseau", de: "Netzwerk" },
  fonts: { en: "Fonts", zh: "字体检测", ru: "Шрифты", ja: "フォント", fr: "Polices", de: "Schriften" },
  advanced: { en: "Advanced", zh: "高级检测", ru: "Продвинутые", ja: "高度検出", fr: "Avancé", de: "Erweitert" },
  checks: { en: "Consistency", zh: "一致性检查", ru: "Согласованность", ja: "整合性", fr: "Cohérence", de: "Konsistenz" },
};

/* ─── REAL Detection Functions ─── */

function detectSystem(): DetectItem[] {
  const items: DetectItem[] = [];
  items.push({ label: "User Agent", value: navigator.userAgent, risk: "high", description: `~${KNOWN_ENTROPY["User Agent"]} bits entropy. Your exact browser version + OS string.` });
  items.push({ label: "Platform", value: navigator.platform || "Unknown", risk: "medium", description: `~${KNOWN_ENTROPY["Platform"]} bits. OS platform identifier.` });
  items.push({ label: "Language", value: `${navigator.language} [${(navigator.languages || []).join(", ")}]`, risk: "medium", description: `~${KNOWN_ENTROPY["Language"]} bits. Language list order is identifying.` });

  const uaData = (navigator as Navigator & { userAgentData?: { platform: string; brands: { brand: string; version: string }[]; mobile: boolean } }).userAgentData;
  if (uaData) {
    items.push({ label: "Client Hints Platform", value: uaData.platform, risk: "medium", description: "UA Client Hints API — newer fingerprinting vector." });
    items.push({ label: "Client Hints Brands", value: uaData.brands.map(b => `${b.brand}/${b.version}`).join(", "), risk: "medium", description: `~${KNOWN_ENTROPY["Client Hints Brands"]} bits.` });
  }

  items.push({ label: "Do Not Track", value: navigator.doNotTrack || "Not set", risk: "low", description: "Irony: enabling DNT makes you MORE unique (~0.7 bits)." });
  items.push({ label: "Cookies Enabled", value: navigator.cookieEnabled ? "Yes" : "No", risk: "low", description: "Cookie support status." });
  items.push({ label: "PDF Viewer", value: String((navigator as Navigator & { pdfViewerEnabled?: boolean }).pdfViewerEnabled ?? "N/A"), risk: "low", description: "Built-in PDF viewer support." });

  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  items.push({ label: "Color Scheme", value: dark ? "Dark" : "Light", risk: "low", description: "OS-level theme preference." });

  return items;
}

/** Canvas: render 3x, compare hashes for consistency check */
function detectCanvas(): { items: DetectItem[]; canvasConsistent: boolean; canvasDataUrl: string } {
  const items: DetectItem[] = [];
  let consistent = true;
  let dataUrl = "";

  const renderCanvas = (): string => {
    const c = document.createElement("canvas"); c.width = 300; c.height = 80;
    const ctx = c.getContext("2d");
    if (!ctx) return "";
    // Standard fingerprint rendering (same as FingerprintJS technique)
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60"; ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069"; ctx.font = "11pt Arial";
    ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)"; ctx.font = "18pt Arial";
    ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);
    // Geometric shapes (tests anti-aliasing, GPU rendering)
    ctx.beginPath(); ctx.arc(50, 65, 12, 0, Math.PI * 2);
    ctx.fillStyle = "#f0f"; ctx.fill();
    ctx.strokeStyle = "rgb(120,186,176)"; ctx.lineWidth = 2; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(100, 55); ctx.lineTo(130, 75); ctx.lineTo(70, 75);
    ctx.closePath(); ctx.fillStyle = "#0ff"; ctx.fill();
    // Blend modes
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = "rgb(255,0,255)"; ctx.fillRect(200, 50, 30, 25);
    ctx.fillStyle = "rgb(0,255,255)"; ctx.fillRect(215, 55, 30, 25);
    ctx.globalCompositeOperation = "source-over";
    return c.toDataURL();
  };

  try {
    const render1 = renderCanvas();
    const render2 = renderCanvas();
    const render3 = renderCanvas();

    const hash1 = cyrb53(render1);
    const hash2 = cyrb53(render2);
    const hash3 = cyrb53(render3);

    consistent = (hash1 === hash2) && (hash2 === hash3);
    dataUrl = render1;

    items.push({ label: "Canvas Hash", value: hash1, risk: "high", description: `~${KNOWN_ENTROPY["Canvas Hash"]} bits entropy. Unique GPU + OS + browser rendering signature.` });
    items.push({ label: "Canvas Data Size", value: `${render1.length} bytes`, risk: "medium", description: "Canvas data URL byte length." });
    items.push({
      label: "Canvas Consistent",
      value: consistent ? "Yes — 3/3 renders identical" : "No — renders differ (randomized!)",
      risk: consistent ? "medium" : "low",
      description: consistent
        ? "Canvas produces identical output. Your fingerprint is stable and trackable."
        : "Canvas output is randomized! An antidetect browser or privacy extension is active.",
    });
  } catch { /* canvas unavailable */ }

  // WebGL
  try {
    const c = document.createElement("canvas");
    const gl = (c.getContext("webgl2") || c.getContext("webgl")) as WebGLRenderingContext | null;
    if (gl) {
      const dbg = gl.getExtension("WEBGL_debug_renderer_info");
      if (dbg) {
        const renderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || "Unknown";
        const vendor = gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) || "Unknown";
        items.push({ label: "WebGL Renderer", value: renderer, risk: "high", description: `~${KNOWN_ENTROPY["WebGL Renderer"]} bits. GPU model string is very identifying.` });
        items.push({ label: "WebGL Vendor", value: vendor, risk: "high", description: `~${KNOWN_ENTROPY["WebGL Vendor"]} bits. GPU manufacturer.` });
      }
      // Compute WebGL parameter hash
      const params = [
        gl.getParameter(gl.MAX_TEXTURE_SIZE),
        gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
        gl.getParameter(gl.MAX_VIEWPORT_DIMS),
        gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE),
        gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE),
        gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
        gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
        gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
        gl.getParameter(gl.MAX_VARYING_VECTORS),
      ].map(String).join("|");
      items.push({ label: "WebGL Hash", value: cyrb53(params), risk: "high", description: `~${KNOWN_ENTROPY["WebGL Hash"]} bits. Hash of all WebGL GPU parameters.` });

      const exts = gl.getSupportedExtensions() || [];
      items.push({ label: "WebGL Extensions", value: `${exts.length} extensions`, risk: "medium", description: "Supported WebGL extensions count." });
      items.push({ label: "WebGL2", value: !!c.getContext("webgl2") ? "Supported" : "Not supported", risk: "low", description: "WebGL2 context availability." });
    }
  } catch { /* webgl unavailable */ }

  return { items, canvasConsistent: consistent, canvasDataUrl: dataUrl };
}

/** REAL audio fingerprint using OfflineAudioContext (same as FingerprintJS) */
async function detectAudio(): Promise<DetectItem[]> {
  const items: DetectItem[] = [];

  try {
    const AC = window.OfflineAudioContext || (window as unknown as { webkitOfflineAudioContext: typeof OfflineAudioContext }).webkitOfflineAudioContext;
    if (AC) {
      const ctx = new AC(1, 44100, 44100); // 1 channel, 1 second at 44100Hz

      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(10000, ctx.currentTime);

      const comp = ctx.createDynamicsCompressor();
      comp.threshold.setValueAtTime(-50, ctx.currentTime);
      comp.knee.setValueAtTime(40, ctx.currentTime);
      comp.ratio.setValueAtTime(12, ctx.currentTime);
      comp.attack.setValueAtTime(0, ctx.currentTime);
      comp.release.setValueAtTime(0.25, ctx.currentTime);

      osc.connect(comp);
      comp.connect(ctx.destination);
      osc.start(0);

      const buffer = await ctx.startRendering();
      const channelData = buffer.getChannelData(0);

      // Sample specific values (same technique as FingerprintJS)
      let audioSum = 0;
      for (let i = 4500; i < 5000; i++) {
        audioSum += Math.abs(channelData[i]);
      }

      const audioHash = cyrb53(audioSum.toString());
      items.push({ label: "Audio Hash", value: audioHash, risk: "high", description: `~${KNOWN_ENTROPY["Audio Hash"]} bits. OfflineAudioContext oscillator→compressor pipeline hash. Unique per hardware + OS.` });
      items.push({ label: "Audio Sum (4500-5000)", value: audioSum.toFixed(10), risk: "high", description: "Sum of absolute audio sample values in critical range. This is the real audio fingerprint value." });
      items.push({ label: "Sample Rate", value: `${buffer.sampleRate} Hz`, risk: "medium", description: "Audio context sample rate." });
    }
  } catch {
    items.push({ label: "Audio Hash", value: "Not available", risk: "low", description: "OfflineAudioContext not supported." });
  }

  // Codec support
  const codecs = [
    { name: "AAC", mime: 'audio/mp4; codecs="mp4a.40.2"' },
    { name: "Opus", mime: 'audio/webm; codecs="opus"' },
    { name: "MP3", mime: 'audio/mpeg' },
    { name: "FLAC", mime: 'audio/flac' },
    { name: "Vorbis", mime: 'audio/ogg; codecs="vorbis"' },
  ];
  const supported = codecs.filter(c => { try { return MediaSource.isTypeSupported(c.mime); } catch { return false; } }).map(c => c.name);
  items.push({ label: "Audio Codecs", value: supported.join(", ") || "None", risk: "low", description: "Supported media formats." });

  return items;
}

function detectHardware(): DetectItem[] {
  const items: DetectItem[] = [];
  items.push({ label: "Screen Resolution", value: `${screen.width} × ${screen.height}`, risk: "high", description: `~${KNOWN_ENTROPY["Screen Resolution"]} bits. Display dimensions.` });
  items.push({ label: "Available Screen", value: `${screen.availWidth} × ${screen.availHeight}`, risk: "medium", description: `~${KNOWN_ENTROPY["Available Screen"]} bits. Usable area reveals OS taskbar config.` });
  items.push({ label: "Device Pixel Ratio", value: `${window.devicePixelRatio}x`, risk: "medium", description: `~${KNOWN_ENTROPY["Device Pixel Ratio"]} bits. Retina/HiDPI indicator.` });
  items.push({ label: "Color Depth", value: `${screen.colorDepth}-bit`, risk: "low", description: `~${KNOWN_ENTROPY["Color Depth"]} bits.` });
  items.push({ label: "CPU Cores", value: navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} logical cores` : "N/A", risk: "medium", description: `~${KNOWN_ENTROPY["CPU Cores"]} bits. Narrows device model.` });

  const nav = navigator as Navigator & { deviceMemory?: number };
  items.push({ label: "Device Memory", value: nav.deviceMemory ? `${nav.deviceMemory} GB` : "N/A", risk: "medium", description: `~${KNOWN_ENTROPY["Device Memory"]} bits.` });
  items.push({ label: "Touch Support", value: `maxTouchPoints: ${navigator.maxTouchPoints}`, risk: "medium", description: `~${KNOWN_ENTROPY["Touch Support"]} bits. Mobile/desktop indicator.` });

  if ("getBattery" in navigator) {
    items.push({ label: "Battery API", value: "Exposed — charging state readable", risk: "medium", description: "Battery level+charging state can fingerprint you." });
  }

  if (typeof navigator.mediaDevices?.enumerateDevices === "function") {
    items.push({ label: "Media Devices", value: "Enumerable", risk: "medium", description: "Camera/mic count is identifying." });
  }

  // Window dimensions (reveals browser chrome size)
  items.push({ label: "Window Inner", value: `${window.innerWidth} × ${window.innerHeight}`, risk: "low", description: "Browser viewport size. Reveals toolbar/extension state." });
  items.push({ label: "Window Outer", value: `${window.outerWidth} × ${window.outerHeight}`, risk: "low", description: "Full browser window size." });

  return items;
}

/** Network: real WebRTC STUN leak + public IP */
async function detectNetwork(): Promise<DetectItem[]> {
  const items: DetectItem[] = [];

  // Timezone
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const offset = new Date().getTimezoneOffset();
  items.push({ label: "Timezone", value: `${tz} (UTC${offset > 0 ? "-" : "+"}${Math.abs(offset / 60)})`, risk: "high", description: `~${KNOWN_ENTROPY["Timezone"]} bits. Reveals geographic location.` });

  // Connection info
  const conn = (navigator as Navigator & { connection?: { effectiveType: string; downlink: number; rtt: number } }).connection;
  if (conn) {
    items.push({ label: "Connection Type", value: conn.effectiveType, risk: "medium", description: "Network type: 4g, 3g, 2g, slow-2g." });
    items.push({ label: "Downlink", value: `${conn.downlink} Mbps`, risk: "low", description: "Estimated bandwidth." });
    if (conn.rtt !== undefined) items.push({ label: "RTT", value: `${conn.rtt} ms`, risk: "low", description: "Round-trip time." });
  }

  // REAL WebRTC IP Leak Detection via STUN
  try {
    const leakedIPs = await detectWebRTCLeak();
    if (leakedIPs.length > 0) {
      items.push({ label: "WebRTC Local IP", value: `⚠️ ${leakedIPs.join(", ")}`, risk: "high", description: `~${KNOWN_ENTROPY["WebRTC Local IP"]} bits. Your local network IP was leaked via WebRTC STUN. This reveals your real network even behind a VPN!` });
    } else {
      items.push({ label: "WebRTC Local IP", value: "✅ No leak detected", risk: "low", description: "WebRTC did not expose local IP addresses." });
    }
  } catch {
    items.push({ label: "WebRTC Local IP", value: "Could not test", risk: "low", description: "WebRTC not available." });
  }

  // Public IP via free API
  try {
    const resp = await fetch("https://api.ipify.org?format=json", { signal: AbortSignal.timeout(5000) });
    const data = await resp.json();
    if (data.ip) {
      items.push({ label: "Public IP", value: data.ip, risk: "high", description: "Your public IP address as seen by websites." });
    }
  } catch {
    items.push({ label: "Public IP", value: "Could not detect (blocked or timeout)", risk: "low", description: "IP detection API was blocked or timed out." });
  }

  return items;
}

/** Real WebRTC STUN leak detection */
function detectWebRTCLeak(): Promise<string[]> {
  return new Promise((resolve) => {
    const ips: string[] = [];
    try {
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
      });

      pc.createDataChannel("");
      pc.createOffer().then(offer => pc.setLocalDescription(offer)).catch(() => resolve([]));

      const timeout = setTimeout(() => { pc.close(); resolve(ips); }, 4000);

      pc.onicecandidate = (e) => {
        if (!e.candidate) { clearTimeout(timeout); pc.close(); resolve(ips); return; }
        const candidate = e.candidate.candidate;
        // Extract IP from candidate string
        const ipRegex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/;
        const match = candidate.match(ipRegex);
        if (match && match[1]) {
          const ip = match[1];
          // Filter out 0.0.0.0 and already found IPs
          if (ip !== "0.0.0.0" && !ips.includes(ip)) {
            ips.push(ip);
          }
        }
      };
    } catch {
      resolve([]);
    }
  });
}

function detectFonts(): DetectItem[] {
  const items: DetectItem[] = [];
  const testFonts = [
    "Arial", "Arial Black", "Arial Narrow", "Verdana", "Tahoma", "Trebuchet MS",
    "Times New Roman", "Georgia", "Garamond", "Courier New", "Lucida Console",
    "Lucida Sans Unicode", "Palatino Linotype", "Book Antiqua", "Impact",
    "Comic Sans MS", "Segoe UI", "Calibri", "Cambria", "Consolas",
    "Candara", "Century Gothic", "Monaco", "Menlo", "Optima", "Futura",
    "Gill Sans", "Helvetica Neue", "Baskerville", "American Typewriter",
    "Didot", "Rockwell", "Brush Script MT", "Lucida Grande", "Andale Mono",
    "Microsoft Sans Serif", "Microsoft YaHei", "PingFang SC", "SimHei",
    "Hiragino Sans", "Meiryo", "Malgun Gothic", "Noto Sans", "Ubuntu",
    "Roboto", "Open Sans", "Source Sans Pro", "Lato", "Montserrat", "Oswald",
  ];
  const detected: string[] = [];
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const baseFonts = ["monospace", "sans-serif", "serif"] as const;
    const testStr = "mmmmmmmmmmlli1WwQq@#";
    const sz = "72px";
    const baseWidths: Record<string, number> = {};
    for (const base of baseFonts) { ctx.font = `${sz} ${base}`; baseWidths[base] = ctx.measureText(testStr).width; }
    for (const font of testFonts) {
      for (const base of baseFonts) {
        ctx.font = `${sz} '${font}', ${base}`;
        if (ctx.measureText(testStr).width !== baseWidths[base]) { detected.push(font); break; }
      }
    }
  }

  const fontHash = cyrb53(detected.join(","));
  items.push({ label: "Fonts Detected", value: `${detected.length} / ${testFonts.length} tested`, risk: "high", description: `~${KNOWN_ENTROPY["Fonts Detected"]} bits entropy! Font combination is the MOST identifying fingerprint vector.` });
  items.push({ label: "Font Hash", value: fontHash, risk: "high", description: "Hash of your installed font combination." });
  items.push({ label: "Font List", value: detected.slice(0, 20).join(", ") + (detected.length > 20 ? ` ... (+${detected.length - 20} more)` : ""), risk: "high", description: "Detected fonts (partial list)." });

  return items;
}

function detectAdvanced(): DetectItem[] {
  const items: DetectItem[] = [];

  // WebDriver (Selenium/Puppeteer/Playwright detection)
  const webdriver = (navigator as Navigator & { webdriver?: boolean }).webdriver;
  items.push({ label: "WebDriver", value: webdriver ? "⚠️ DETECTED — automation tool active" : "Not detected", risk: webdriver ? "high" : "low", description: `${webdriver ? "Selenium, Puppeteer, or Playwright detected!" : "No automation markers found."} Checks navigator.webdriver flag.` });

  // Headless signals
  const plugins = navigator.plugins?.length ?? 0;
  items.push({ label: "Plugins Count", value: `${plugins}`, risk: plugins === 0 ? "medium" : "low", description: `${plugins === 0 ? "Zero plugins — possible headless browser!" : "Normal plugin count."} ~${KNOWN_ENTROPY["Plugins Count"]} bits.` });

  // Chrome-specific automation flags
  const win = window as unknown as Record<string, unknown>;
  const automationFlags = [
    "callPhantom", "_phantom", "__nightmare", "domAutomation", "domAutomationController",
    "_selenium", "callSelenium", "_Recaptcha", "__webdriver_script_fn",
    "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate",
  ];
  const foundFlags = automationFlags.filter(f => f in win || f in document);
  items.push({ label: "Automation Flags", value: foundFlags.length > 0 ? `⚠️ Found: ${foundFlags.join(", ")}` : "None detected", risk: foundFlags.length > 0 ? "high" : "low", description: "Checks for Selenium, Phantom, Nightmare, Recaptcha markers in window object." });

  // Speech voices (handle Chrome asynchronous voice loading)
  let voiceCount = 0;
  let speechSupported = false;
  try {
    speechSupported = typeof speechSynthesis !== "undefined" && speechSynthesis !== null;
    if (speechSupported) {
      voiceCount = speechSynthesis.getVoices()?.length ?? 0;
    }
  } catch { /* no speech */ }
  items.push({
    label: "Speech Voices",
    value: speechSupported ? (voiceCount > 0 ? `${voiceCount} voices` : "Supported") : "Not supported",
    risk: speechSupported ? "low" : "medium",
    description: speechSupported
      ? `~${KNOWN_ENTROPY["Speech Voices"]} bits. Speech synthesis API is available.`
      : "Speech synthesis API is missing (common headless browser signal)."
  });

  // Permissions API
  items.push({ label: "Permissions API", value: navigator.permissions ? "Available" : "Unavailable", risk: "low", description: "Can query permission states." });

  // Storage
  items.push({ label: "localStorage", value: (() => { try { localStorage.setItem("__fp_test", "1"); localStorage.removeItem("__fp_test"); return "Available"; } catch { return "Blocked (Incognito?)"; } })(), risk: "low", description: "localStorage blocked can indicate incognito mode." });

  items.push({ label: "IndexedDB", value: (() => { try { return !!window.indexedDB ? "Available" : "Blocked"; } catch { return "Blocked"; } })(), risk: "low", description: "IndexedDB availability." });

  // Bluetooth & USB
  items.push({ label: "Bluetooth API", value: (navigator as Navigator & { bluetooth?: unknown }).bluetooth ? "Available" : "Not available", risk: "low", description: "Web Bluetooth availability." });

  return items;
}

function runConsistencyChecks(cats: Category[], locale: string): DetectItem[] {
  const items: DetectItem[] = [];
  const getVal = (catId: string, label: string) => cats.find(c => c.id === catId)?.items.find(i => i.label === label)?.value || "";

  const ua = getVal("system", "User Agent").toLowerCase();
  const platform = getVal("system", "Platform").toLowerCase();

  // 1. UA ↔ Platform
  const uaOk = (ua.includes("windows") && platform.includes("win")) ||
    (ua.includes("mac") && platform.includes("mac")) ||
    (ua.includes("linux") && platform.includes("linux")) ||
    (ua.includes("android") && platform.includes("linux")) ||
    (ua.includes("iphone") && platform.includes("iphone")) ||
    (!ua && !platform);
  items.push({ label: "UA ↔ Platform", value: uaOk ? `✅ ${i(ui.passed, locale)}` : `⚠️ ${i(ui.failed, locale)}`, risk: uaOk ? "low" : "high", description: "User Agent and navigator.platform should declare the same OS." });

  // 2. WebGL ↔ Platform
  const renderer = getVal("canvas", "WebGL Renderer").toLowerCase();
  const webglOk = !(
    (platform.includes("mac") && renderer.includes("direct3d")) ||
    (platform.includes("win") && renderer.includes("metal")) ||
    (platform.includes("linux") && renderer.includes("metal"))
  );
  items.push({ label: "WebGL ↔ Platform", value: webglOk ? `✅ ${i(ui.passed, locale)}` : `⚠️ ${i(ui.failed, locale)}`, risk: webglOk ? "low" : "high", description: "GPU rendering API should match OS (Direct3D=Windows, Metal=macOS)." });

  // 3. Touch ↔ Device (fixed: standard desktop touch screens are common and should not fail)
  const touchPts = navigator.maxTouchPoints || 0;
  const mobileUA = /mobile|android|iphone|ipad/i.test(ua);
  const touchOk = !(mobileUA && touchPts === 0);
  items.push({ label: "Touch ↔ Device", value: touchOk ? `✅ ${i(ui.passed, locale)}` : `⚠️ ${i(ui.failed, locale)}`, risk: touchOk ? "low" : "high", description: "Mobile devices must support touch points, while desktop can have 0 or more." });

  // 4. Language ↔ Timezone (widened support and fallback for English global usage)
  const lang = navigator.language.substring(0, 2);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const langTzMap: Record<string, string[]> = {
    en: [], // English is global, allow any timezone
    zh: ["Asia/Shanghai", "Asia/Hong_Kong", "Asia/Taipei", "Asia/Chongqing", "Asia/Harbin", "Asia/Urumqi", "Asia/Kashgar", "Asia/Macau", "Asia/Singapore", "Asia/Seoul", "Asia/Tokyo"],
    ja: ["Asia/Tokyo"],
    ko: ["Asia/Seoul"],
    de: ["Europe/Berlin", "Europe/Vienna", "Europe/Zurich"],
    fr: ["Europe/Paris", "Europe/Brussels", "Europe/Zurich", "Africa/"],
    ru: ["Europe/Moscow", "Asia/Yekaterinburg", "Asia/Novosibirsk", "Asia/Vladivostok", "Europe/Saratov", "Europe/Volgograd"]
  };
  const expected = langTzMap[lang] || [];
  const langTzOk = expected.length === 0 || expected.some(e => tz.includes(e)) || lang === "en";
  items.push({ label: "Language ↔ Timezone", value: langTzOk ? `✅ ${i(ui.passed, locale)}` : `⚠️ ${i(ui.failed, locale)}`, risk: langTzOk ? "low" : "medium", description: "Browser language and timezone should geographically correlate." });

  // 5. Screen resolution sanity (checks physical bounds and available viewport consistency)
  const w = screen.width, h = screen.height;
  const aw = screen.availWidth, ah = screen.availHeight;
  const screenOk = w >= 320 && h >= 480 && w <= 7680 && (w / h > 0.3 && w / h < 3.5) &&
    aw <= w && ah <= h && aw > 0 && ah > 0;
  items.push({ label: "Screen Sanity", value: screenOk ? `✅ ${i(ui.passed, locale)}` : `⚠️ ${i(ui.failed, locale)}`, risk: screenOk ? "low" : "high", description: "Screen dimensions and available viewport bounds must be consistent and realistic." });

  // 6. Canvas consistency
  const canvasVal = getVal("canvas", "Canvas Consistent");
  const canvasOk = canvasVal.includes("Yes");
  items.push({ label: "Canvas Stable", value: canvasOk ? `✅ ${i(ui.passed, locale)} — Not randomized` : `🛡️ Randomized — Privacy protection active`, risk: canvasOk ? "low" : "low", description: canvasOk ? "Canvas renders identically each time (trackable)." : "Canvas output is randomized, indicating antidetect/privacy tools." });

  return items;
}

/* ─── Canvas Preview Renderer ─── */
function drawCanvasPreview(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d"); if (!ctx) return;
  canvas.width = 300; canvas.height = 80;
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60"; ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = "#069"; ctx.font = "11pt Arial";
  ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);
  ctx.fillStyle = "rgba(102,204,0,0.7)"; ctx.font = "18pt Arial";
  ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);
  ctx.beginPath(); ctx.arc(50, 65, 12, 0, Math.PI * 2);
  ctx.fillStyle = "#f0f"; ctx.fill();
  ctx.strokeStyle = "rgb(120,186,176)"; ctx.lineWidth = 2; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(100, 55); ctx.lineTo(130, 75); ctx.lineTo(70, 75);
  ctx.closePath(); ctx.fillStyle = "#0ff"; ctx.fill();
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = "rgb(255,0,255)"; ctx.fillRect(200, 50, 30, 25);
  ctx.fillStyle = "rgb(0,255,255)"; ctx.fillRect(215, 55, 30, 25);
}

/* ─── Authenticity Score Calculation ─── */
function calculateAuthenticityScore(cats: Category[]): number {
  if (cats.length === 0) return 100;
  let score = 100;
  
  const findItem = (catId: string, label: string): DetectItem | undefined => {
    const cat = cats.find(c => c.id === catId);
    return cat?.items.find(item => item.label === label);
  };

  // 1. WebDriver detection (-35 points)
  const webdriver = findItem("advanced", "WebDriver");
  if (webdriver && webdriver.value.includes("⚠️")) {
    score -= 35;
  }

  // 2. Automation Flags (-35 points)
  const autoFlags = findItem("advanced", "Automation Flags");
  if (autoFlags && (autoFlags.value.includes("⚠️") || !autoFlags.value.includes("None"))) {
    score -= 35;
  }

  // 3. User Agent ↔ Platform consistency (-20 points)
  const uaPlat = findItem("checks", "UA ↔ Platform");
  if (uaPlat && uaPlat.value.includes("⚠️")) {
    score -= 20;
  }

  // 4. WebGL ↔ Platform consistency (-15 points)
  const webglPlat = findItem("checks", "WebGL ↔ Platform");
  if (webglPlat && webglPlat.value.includes("⚠️")) {
    score -= 15;
  }

  // 5. Touch ↔ Device consistency (-10 points)
  const touchDev = findItem("checks", "Touch ↔ Device");
  if (touchDev && touchDev.value.includes("⚠️")) {
    score -= 10;
  }

  // 6. Language ↔ Timezone consistency (-5 points, reduced from 10 as it can have false positives)
  const langTz = findItem("checks", "Language ↔ Timezone");
  if (langTz && langTz.value.includes("⚠️")) {
    score -= 5;
  }

  // 7. Screen Sanity (-10 points)
  const screenSanity = findItem("checks", "Screen Sanity");
  if (screenSanity && screenSanity.value.includes("⚠️")) {
    score -= 10;
  }

  // 8. Zero plugins check (-5 points, reduced from 10 as modern browsers block/omit plugins)
  const plugins = findItem("advanced", "Plugins Count");
  const platformItem = findItem("system", "Platform");
  const isMobile = platformItem && /iphone|ipad|ipod|android/i.test(platformItem.value);
  if (plugins && plugins.value === "0" && !isMobile) {
    score -= 5;
  }

  // 9. Speech voices check (-5 points)
  const voices = findItem("advanced", "Speech Voices");
  if (voices && voices.value === "Not supported") {
    score -= 5;
  }

  // 10. WebGL vendor/renderer missing or fake (-15 points)
  const webglVendor = findItem("canvas", "WebGL Vendor");
  if (webglVendor && (webglVendor.value === "Unknown" || webglVendor.value === "")) {
    score -= 15;
  }

  // 11. Canvas Randomized (-15 points)
  const canvasStable = findItem("checks", "Canvas Stable");
  if (canvasStable && canvasStable.value.includes("Randomized")) {
    score -= 15;
  }

  return Math.max(0, score);
}

interface Deduction {
  name: string;
  points: number;
}

function getActiveDeductions(cats: Category[], locale: string): Deduction[] {
  const list: Deduction[] = [];
  if (cats.length === 0) return [];

  const findItem = (catId: string, label: string): DetectItem | undefined => {
    const cat = cats.find(c => c.id === catId);
    return cat?.items.find(item => item.label === label);
  };

  const webdriver = findItem("advanced", "WebDriver");
  if (webdriver && webdriver.value.includes("⚠️")) {
    list.push({ name: locale === "zh" ? "检测到 Automation/WebDriver" : "WebDriver detected", points: 35 });
  }

  const autoFlags = findItem("advanced", "Automation Flags");
  if (autoFlags && (autoFlags.value.includes("⚠️") || !autoFlags.value.includes("None"))) {
    list.push({ name: locale === "zh" ? "检测到自动化工具特征 (Automation Flags)" : "Automation flags detected", points: 35 });
  }

  const uaPlat = findItem("checks", "UA ↔ Platform");
  if (uaPlat && uaPlat.value.includes("⚠️")) {
    list.push({ name: locale === "zh" ? "User Agent 与操作系统平台不匹配" : "User Agent and Platform mismatch", points: 20 });
  }

  const webglPlat = findItem("checks", "WebGL ↔ Platform");
  if (webglPlat && webglPlat.value.includes("⚠️")) {
    list.push({ name: locale === "zh" ? "WebGL 渲染器与操作系统平台不匹配" : "WebGL Renderer and Platform mismatch", points: 15 });
  }

  const touchDev = findItem("checks", "Touch ↔ Device");
  if (touchDev && touchDev.value.includes("⚠️")) {
    list.push({ name: locale === "zh" ? "触摸点支持与设备类型不匹配" : "Touch support and Device mismatch", points: 10 });
  }

  const langTz = findItem("checks", "Language ↔ Timezone");
  if (langTz && langTz.value.includes("⚠️")) {
    list.push({ name: locale === "zh" ? "语言与时区地理位置不匹配" : "Language and Timezone mismatch", points: 5 });
  }

  const screenSanity = findItem("checks", "Screen Sanity");
  if (screenSanity && screenSanity.value.includes("⚠️")) {
    list.push({ name: locale === "zh" ? "屏幕分辨率或可用尺寸不合逻辑" : "Screen resolution bounds invalid", points: 10 });
  }

  const plugins = findItem("advanced", "Plugins Count");
  const platformItem = findItem("system", "Platform");
  const isMobile = platformItem && /iphone|ipad|ipod|android/i.test(platformItem.value);
  if (plugins && plugins.value === "0" && !isMobile) {
    list.push({ name: locale === "zh" ? "浏览器插件数为 0 (无头浏览器特征)" : "Zero browser plugins detected", points: 5 });
  }

  const voices = findItem("advanced", "Speech Voices");
  if (voices && voices.value === "Not supported") {
    list.push({ name: locale === "zh" ? "不支持 Speech Synthesis API" : "Speech Synthesis API unsupported", points: 5 });
  }

  const webglVendor = findItem("canvas", "WebGL Vendor");
  if (webglVendor && (webglVendor.value === "Unknown" || webglVendor.value === "")) {
    list.push({ name: locale === "zh" ? "WebGL 厂商未知或缺失" : "WebGL Vendor missing or unknown", points: 15 });
  }

  const canvasStable = findItem("checks", "Canvas Stable");
  if (canvasStable && canvasStable.value.includes("Randomized")) {
    list.push({ name: locale === "zh" ? "Canvas 渲染输出被随机化 (指纹伪造)" : "Canvas output randomized", points: 15 });
  }

  return list;
}

/* ─── Main Component ─── */
export default function FingerprintChecker() {
  const { locale } = useI18n();
  const [categories, setCategories] = useState<Category[]>([]);
  const [scanPhase, setScanPhase] = useState(0);
  const [totalEntropy, setTotalEntropy] = useState(0);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [canvasConsistent, setCanvasConsistent] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const catOrder = ["system", "canvas", "audio", "hardware", "network", "fonts", "advanced", "checks"];
  const catIcons: Record<string, string> = { system: "🖥️", canvas: "🎨", audio: "🔊", hardware: "⚙️", network: "🌐", fonts: "🔤", advanced: "🧠", checks: "✅" };

  const computeCatEntropy = (items: DetectItem[]): number => {
    // Sum known entropy values for this category, apply correlation discount
    const raw = items.reduce((sum, item) => sum + (KNOWN_ENTROPY[item.label] || 0), 0);
    return Math.round(raw * ENTROPY_CORRELATION_FACTOR * 10) / 10;
  };

  const runScan = useCallback(() => {
    setScanPhase(0); setCategories([]); setExpandedCat(null); setTotalEntropy(0);

    const initCats: Category[] = catOrder.map(id => ({
      id, icon: catIcons[id], name: catNames[id], status: "pending" as ScanStatus, items: [], score: 0,
    }));
    setCategories(initCats);

    const updateCat = (id: string, status: ScanStatus, items: DetectItem[] = [], score = 0) => {
      setCategories(prev => prev.map(c => c.id === id ? { ...c, status, items, score } : c));
    };

    const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

    (async () => {
      // Phase 1: System
      setScanPhase(1); updateCat("system", "scanning");
      await delay(400);
      const sysItems = detectSystem();
      updateCat("system", "done", sysItems, computeCatEntropy(sysItems));

      // Phase 2: Canvas & WebGL
      setScanPhase(2); updateCat("canvas", "scanning");
      await delay(500);
      const { items: canvasItems, canvasConsistent: cc } = detectCanvas();
      setCanvasConsistent(cc);
      updateCat("canvas", "done", canvasItems, computeCatEntropy(canvasItems));
      if (canvasRef.current) drawCanvasPreview(canvasRef.current);

      // Phase 3: Audio (async — real OfflineAudioContext)
      setScanPhase(3); updateCat("audio", "scanning");
      await delay(300);
      const audioItems = await detectAudio();
      updateCat("audio", "done", audioItems, computeCatEntropy(audioItems));

      // Phase 4: Hardware
      setScanPhase(4); updateCat("hardware", "scanning");
      await delay(350);
      const hwItems = detectHardware();
      updateCat("hardware", "done", hwItems, computeCatEntropy(hwItems));

      // Phase 5: Network (async — WebRTC STUN + IP API)
      setScanPhase(5); updateCat("network", "scanning");
      const netItems = await detectNetwork();
      updateCat("network", "done", netItems, computeCatEntropy(netItems));

      // Phase 6: Fonts
      setScanPhase(6); updateCat("fonts", "scanning");
      await delay(400);
      const fontItems = detectFonts();
      updateCat("fonts", "done", fontItems, computeCatEntropy(fontItems));

      // Phase 7: Advanced
      setScanPhase(7); updateCat("advanced", "scanning");
      await delay(300);
      const advItems = detectAdvanced();
      updateCat("advanced", "done", advItems, computeCatEntropy(advItems));

      // Phase 8: Consistency Checks
      setScanPhase(8); updateCat("checks", "scanning");
      await delay(400);

      setCategories(prev => {
        const checkItems = runConsistencyChecks(prev, locale);
        const allItems = [...prev.filter(c => c.id !== "checks").flatMap(c => c.items)];
        // Total entropy: sum raw values from all detection items, apply correlation factor
        const rawTotal = allItems.reduce((s, item) => s + (KNOWN_ENTROPY[item.label] || 0), 0);
        const corrected = Math.round(rawTotal * ENTROPY_CORRELATION_FACTOR * 10) / 10;
        setTotalEntropy(corrected);
        setScanPhase(9);
        return prev.map(c => c.id === "checks" ? { ...c, status: "done" as ScanStatus, items: checkItems, score: computeCatEntropy(checkItems) } : c);
      });
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  useEffect(() => {
    // Pre-fetch speech voices on mount (Chrome populates them asynchronously)
    try {
      if (typeof speechSynthesis !== "undefined" && speechSynthesis.getVoices) {
        speechSynthesis.getVoices();
      }
    } catch {}
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => runScan(), 0);
    return () => window.clearTimeout(timer);
  }, [runScan]);

  const isScanning = scanPhase > 0 && scanPhase < 9;
  const isDone = scanPhase === 9;
  const progress = scanPhase === 0 ? 0 : Math.min(100, Math.round((scanPhase / 9) * 100));
  const totalItems = categories.reduce((s, c) => s + c.items.length, 0);
  const uniqueAmong = totalEntropy > 0 ? Math.pow(2, totalEntropy) : 0;
  // Authenticity Score: 0-100. Higher = more authentic/consistent.
  const authenticityScore = isDone ? calculateAuthenticityScore(categories) : 0;
  const scoreColor = authenticityScore >= 85 ? "var(--color-emerald)" : authenticityScore >= 55 ? "var(--color-amber)" : "var(--color-rose)";
  // Real consistency/spoofing anomalies count
  const anomalyCount = isDone ? categories.reduce((s, c) => s + c.items.filter(item => item.value.includes("⚠️")).length, 0) : 0;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb customItems={[{ label: i(ui.toolLabel, locale), href: "/tools/fingerprint-check" }]} />
          <span className="section-label">{i(ui.toolLabel, locale)}</span>
          <h1>{i(ui.title, locale)}</h1>
          <p>{i(ui.subtitle, locale)}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">

          {/* ─── Progress Bar ─── */}
          <div className="fp-progress-bar">
            <div className="fp-progress-track">
              <div className="fp-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="fp-progress-text">
              {isScanning && <span className="fp-scanning-pulse">● </span>}
              {isScanning ? `${i(ui.scanning, locale)}... ${progress}%` : isDone ? `✓ ${i(ui.complete, locale)}` : ""}
              {isDone && <button className="fp-rescan-btn" onClick={runScan}>↻ {i(ui.rescan, locale)}</button>}
            </div>
          </div>

          {/* ─── Dashboard: Entropy Ring + Category Grid ─── */}
          <div className="fp-dashboard">
            <div className="fp-score-ring-box">
              <div className="fp-score-ring">
                <svg viewBox="0 0 120 120" className="fp-ring-svg">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                  <circle cx="60" cy="60" r="52" fill="none"
                    stroke={isDone ? scoreColor : "rgba(255,255,255,0.15)"}
                    strokeWidth="8" strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    strokeDashoffset={`${2 * Math.PI * 52 * (1 - (isDone ? authenticityScore / 100 : progress / 100))}`}
                    transform="rotate(-90 60 60)"
                    style={{ transition: "stroke-dashoffset 1s ease, stroke 0.5s" }}
                  />
                </svg>
                <div className="fp-ring-center">
                  <span className="fp-ring-number" style={{ color: isDone ? scoreColor : "var(--text-primary)" }}>
                    {isDone ? authenticityScore : progress}
                  </span>
                  <span className="fp-ring-label">
                    {isDone ? i(ui.authenticityScore, locale) : i(ui.scanning, locale)}
                  </span>
                </div>
              </div>
              {isDone && (
                <>
                  <div className="fp-score-rating" style={{ color: scoreColor }}>
                    {authenticityScore >= 85 ? i(ui.ratingGood, locale) : authenticityScore >= 55 ? i(ui.ratingWarning, locale) : i(ui.ratingBad, locale)}
                  </div>
                  <div className="fp-stats-row">
                    <div className="fp-stat">
                      <span className="fp-stat-num">{totalItems}</span>
                      <span className="fp-stat-label">{i(ui.parameters, locale)}</span>
                    </div>
                    <div className="fp-stat">
                      <span className="fp-stat-num" style={{ color: anomalyCount > 0 ? "var(--color-rose)" : "var(--color-emerald)" }}>
                        {anomalyCount}
                      </span>
                      <span className="fp-stat-label">{i(ui.anomalies, locale)}</span>
                    </div>
                    <div className="fp-stat">
                      <span className="fp-stat-num" style={{ color: "var(--text-secondary)" }}>
                        {uniqueAmong >= 1e9 ? `${(uniqueAmong / 1e9).toFixed(0)}B` : uniqueAmong >= 1e6 ? `${(uniqueAmong / 1e6).toFixed(0)}M` : uniqueAmong >= 1e3 ? `${(uniqueAmong / 1e3).toFixed(0)}K` : Math.round(uniqueAmong).toString()}
                      </span>
                      <span className="fp-stat-label">1 in N</span>
                    </div>
                  </div>
                  <div className="fp-score-explain">
                    <div className="fp-entropy-detail">
                      {totalEntropy.toFixed(1)} {i(ui.entropyBits, locale)}
                    </div>
                    <p className="fp-score-explain-text">{i(ui.scoreExplain, locale)}</p>
                    {getActiveDeductions(categories, locale).length > 0 && (
                      <div className="fp-deductions-box" style={{ marginTop: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 8 }}>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", fontWeight: 600, marginBottom: 4, textAlign: "left" }}>
                          {locale === "zh" ? "检测到的异常扣分项：" : "Deduction reasons:"}
                        </div>
                        {getActiveDeductions(categories, locale).map((d, idx) => (
                          <div key={idx} style={{ color: "var(--color-rose)", fontSize: "0.7rem", display: "flex", justifyContent: "space-between", marginTop: 2, textAlign: "left" }}>
                            <span>● {d.name}</span>
                            <span style={{ fontWeight: 600 }}>-{d.points}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="fp-cat-grid">
              {categories.map(cat => {
                const catHasAnomaly = cat.status === "done" && cat.items.some(item => item.value.includes("⚠️"));
                return (
                  <button key={cat.id}
                    className={`fp-cat-pill ${cat.status} ${expandedCat === cat.id ? "expanded" : ""} ${catHasAnomaly ? "has-anomaly" : ""}`}
                    onClick={() => cat.status === "done" && setExpandedCat(expandedCat === cat.id ? null : cat.id)}
                    disabled={cat.status !== "done"}
                  >
                    <div className="fp-cat-pill-head">
                      <span className="fp-cat-icon">{cat.icon}</span>
                      <span className="fp-cat-name">{i(cat.name, locale)}</span>
                      <span className="fp-cat-status-icon" style={{ color: cat.status === "done" ? (catHasAnomaly ? "var(--color-rose)" : "var(--color-emerald)") : undefined }}>
                        {cat.status === "pending" && "○"}
                        {cat.status === "scanning" && <span className="fp-spin">◌</span>}
                        {cat.status === "done" && (catHasAnomaly ? "⚠️" : "✓")}
                      </span>
                    </div>
                    {cat.status === "done" && (
                      <>
                        <div className="fp-cat-pill-bar">
                          <div className="fp-cat-bar-track">
                            <div className="fp-cat-bar-fill"
                              style={{ width: `${Math.min(100, (cat.score / 8) * 100)}%`, background: cat.score > 5 ? "var(--color-rose)" : cat.score > 2 ? "var(--color-amber)" : "var(--color-emerald)" }}
                            />
                          </div>
                          <span className="fp-cat-score">{cat.score.toFixed(1)}b</span>
                        </div>
                        <div className="fp-cat-pill-meta">
                          {cat.items.length} {i(ui.detected, locale)}
                          <span className="fp-cat-expand-icon">{expandedCat === cat.id ? "▲" : "▼"}</span>
                        </div>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── Canvas Visual Preview ─── */}
          {scanPhase >= 2 && (
            <div className="fp-canvas-preview">
              <div className="fp-canvas-label">
                {i(ui.canvasTitle, locale)}
                <span className={`fp-canvas-status ${canvasConsistent ? "consistent" : "randomized"}`}>
                  {canvasConsistent ? i(ui.canvasConsistent, locale) : i(ui.canvasInconsistent, locale)}
                </span>
              </div>
              <canvas ref={canvasRef} className="fp-canvas-el" />
            </div>
          )}

          {/* ─── Expanded Detail ─── */}
          {expandedCat && (
            <div className="fp-detail-section">
              <h2 className="fp-detail-title">
                {catIcons[expandedCat]} {i(catNames[expandedCat], locale)}
                <span className="fp-detail-entropy">{categories.find(c => c.id === expandedCat)?.score.toFixed(1)} {i(ui.entropyBits, locale)}</span>
              </h2>
              <div className="fp-results">
                {categories.find(c => c.id === expandedCat)?.items.map((item, idx) => (
                  <div key={idx} className="fp-result-item">
                    <div className="fp-result-header">
                      <span className="fp-result-label">{item.label}</span>
                      {(() => {
                        const isEntropyParam = KNOWN_ENTROPY[item.label] !== undefined;
                        const badgeText = isEntropyParam
                          ? i(ui[`${item.risk}Entropy`], locale)
                          : i(ui[`${item.risk}Risk`], locale);
                        const badgeColor = isEntropyParam
                          ? (item.risk === "high" ? "#a855f7" : item.risk === "medium" ? "#6366f1" : "var(--text-muted, #94a3b8)")
                          : (item.risk === "high" ? "var(--color-rose, #f43f5e)" : item.risk === "medium" ? "var(--color-amber, #f59e0b)" : "var(--color-emerald, #10b981)");
                        return (
                          <span className="fp-risk-badge" style={{ background: `${badgeColor}22`, color: badgeColor }}>
                            {badgeText}
                            {KNOWN_ENTROPY[item.label] ? ` · ${KNOWN_ENTROPY[item.label]}b` : ""}
                          </span>
                        );
                      })()}
                    </div>
                    <div className="fp-result-value">{item.value}</div>
                    <div className="fp-result-desc">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── All category headers (collapsed view) ─── */}
          {isDone && !expandedCat && (
            <div className="fp-all-results">
              {categories.map(cat => (
                <button key={cat.id} className="fp-cat-section-header" onClick={() => setExpandedCat(cat.id)}>
                  <span>{cat.icon} {i(cat.name, locale)}</span>
                  <span className="fp-cat-section-count">{cat.items.length} items · {cat.score.toFixed(1)} bits</span>
                  <span className="fp-cat-expand-icon">▼</span>
                </button>
              ))}
            </div>
          )}

          {/* ─── Methodology ─── */}
          {isDone && (
            <div className="fp-methodology">
              <h3>{i(ui.methodology, locale)}</h3>
              <p>{i(ui.methodDesc, locale)}</p>
            </div>
          )}

          {/* ─── CTA ─── */}
          {isDone && (
            <div className="review-cta-box" style={{ textAlign: "center", marginTop: 32 }}>
              <h3>{i(ui.protectTitle, locale)}</h3>
              <p style={{ maxWidth: 620, margin: "0 auto 24px" }}>{i(ui.protectDesc, locale)}</p>
              <div className="hero-actions" style={{ justifyContent: "center" }}>
                <Link href="/compare" className="btn-primary">{i(ui.compareBtn, locale)}</Link>
                <Link href="/proxies" className="btn-secondary">{i(ui.proxyBtn, locale)}</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
