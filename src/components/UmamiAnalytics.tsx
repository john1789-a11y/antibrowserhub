"use client";
import Script from "next/script";
import { clearAffiliateQueue, flushAffiliateQueue, umamiDomains, umamiWebsiteId } from "@/lib/analytics";

/** Clicks only: Vercel continues to provide the existing basic pageview analytics. */
export default function UmamiAnalytics() {
  if (!umamiWebsiteId) return null;
  return <Script
    id="umami-affiliate-analytics"
    src="https://cloud.umami.is/script.js"
    strategy="afterInteractive"
    data-website-id={umamiWebsiteId}
    data-domains={umamiDomains}
    data-auto-track="false"
    data-exclude-search="true"
    data-exclude-hash="true"
    onReady={flushAffiliateQueue}
    onError={clearAffiliateQueue}
  />;
}
