import { contentRoutes } from "@/data/routeManifest";

export const ATTRIBUTION_KEY = "abh-attribution-v1";
const sources = new Set(["google", "bing", "newsletter", "youtube", "telegram", "reddit", "direct"]);
const campaigns = new Set(["launch", "pricing-update", "browser-comparison", "newsletter"]);
const staticPaths = new Set([
  ...contentRoutes,
  ...["fingerprint-check", "webrtc-leak-test", "ip-checker", "user-agent-parser", "http-headers"].map(slug => `/tools/${slug}`),"/", "/reviews", "/compare", "/guides", "/pricing", "/deals", "/proxies", "/best-for", "/tools", "/about", "/contact", "/faq", "/glossary", "/privacy", "/terms", "/methodology", "/affiliate-disclosure"]);

// Unknown paths may contain identifiers or personal information; never transmit them.
export function safePage(path: string): string {
  if (staticPaths.has(path)) return path;
  return "/unknown";
}
export function attribution(path: string, search: string) {
  const params = new URLSearchParams(search);
  const source = params.get("utm_source") || "unattributed";
  const campaign = params.get("utm_campaign") || "none";
  return { landing: safePage(path), source: source === "unattributed" ? "unattributed" : sources.has(source) ? source : "other", campaign: campaigns.has(campaign) ? campaign : "none" };
}
export function readAttribution(path: string, search: string): ReturnType<typeof attribution> {
  const fallback = attribution(path, search);
  try {
    const saved = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        landing: safePage(typeof parsed.landing === "string" ? parsed.landing : "/unknown"),
        source: sources.has(parsed.source) ? parsed.source : parsed.source === "other" ? "other" : "unattributed",
        campaign: campaigns.has(parsed.campaign) ? parsed.campaign : "none",
      };
    }
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(fallback));
  } catch { /* Restricted storage must not interfere with navigation. */ }
  return fallback;
}

/** Primary clicks include keyboard activation; auxclick is counted only for the middle button. */
export function isAffiliateActivation(type: string, button: number): boolean {
  return (type === "click" && button === 0) || (type === "auxclick" && button === 1);
}
