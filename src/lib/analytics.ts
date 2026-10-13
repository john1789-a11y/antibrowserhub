import { getAffiliateDestination } from "./affiliate";
import { readAttribution, safePage } from "./attribution";

export type AffiliatePlacement = "review-sidebar" | "comparison" | "deal" | "best-for" | "proxy" | "guide";
type AffiliateEvent = {
  website: string;
  url: string;
  name: "affiliate_click";
  data: { product: string; placement: AffiliatePlacement; locale: string; page: string; landing: string; source: string; campaign: string };
};

declare global {
  interface Window {
    umami?: { track: (payload: AffiliateEvent) => unknown };
  }
}

const configuredId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim() || "";
// Do not load a tracker with an absent ID or an example placeholder.
export const umamiWebsiteId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(configuredId) ? configuredId : "";
export const umamiDomains = "antibrowserhub.com,www.antibrowserhub.com";
const placements = new Set<AffiliatePlacement>(["review-sidebar", "comparison", "deal", "best-for", "proxy", "guide"]);
const locales = new Set(["en", "zh", "ru", "ja", "fr", "de"]);
const QUEUE_LIMIT = 20;
const QUEUE_TTL_MS = 30_000;
const pending: { event: AffiliateEvent; time: number }[] = [];

function enabled(): boolean {
  return !!umamiWebsiteId && typeof window !== "undefined" && umamiDomains.split(",").includes(window.location.hostname);
}

/** No retry: a rejected response can still have been recorded by the server. */
function send(event: AffiliateEvent): void {
  try {
    const result = window.umami?.track(event);
    void Promise.resolve(result).catch(() => {});
  } catch { /* Measurement must not interfere with the merchant link. */ }
}

export function clearAffiliateQueue(): void {
  pending.length = 0;
}

/** Called by next/script onReady, and before sending subsequent clicks. */
export function flushAffiliateQueue(): void {
  if (!enabled()) { clearAffiliateQueue(); return; }
  if (!window.umami?.track) return;
  const now = Date.now();
  for (const item of pending.splice(0)) {
    if (now - item.time <= QUEUE_TTL_MS) send(item.event);
  }
}

/** Umami receives an explicit payload: no merged SDK URL, referrer or document title. */
export function trackAffiliateClick(product: string, placement: AffiliatePlacement, locale: string): void {
  if (!enabled() || !getAffiliateDestination(product) || !placements.has(placement)) return;
  try {
    const page = safePage(window.location.pathname);
    const event: AffiliateEvent = {
      website: umamiWebsiteId,
      url: page,
      name: "affiliate_click",
      data: { product, placement, locale: locales.has(locale) ? locale : "en", page, ...readAttribution(window.location.pathname, window.location.search) },
    };
    if (window.umami?.track) {
      flushAffiliateQueue();
      send(event);
    } else {
      const now = Date.now();
      while (pending.length && now - pending[0].time > QUEUE_TTL_MS) pending.shift();
      if (pending.length >= QUEUE_LIMIT) pending.shift();
      pending.push({ event, time: now });
    }
  } catch { /* Storage, SDK and browser restrictions must never block navigation. */ }
}
