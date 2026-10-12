import { affiliateDestinations, browserMarketingHosts } from "@/data/affiliateDestinations";
export { affiliateDestinations } from "@/data/affiliateDestinations";

export function getAffiliateDestination(product: string): string | undefined {
  return affiliateDestinations[product];
}

/** Match root marketing pages only; documentation and support links stay editorial. */
export function affiliateProductForUrl(value: string): string | undefined {
  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol)) return undefined;
    const exact = Object.entries(affiliateDestinations).find(([, destination]) => destination === value);
    if (exact) return exact[0];
    if (!["/", "/register", "/register/", "/signup", "/signup/"].includes(url.pathname)) return undefined;
    return browserMarketingHosts[url.hostname.replace(/^www\./, "")];
  } catch { return undefined; }
}
