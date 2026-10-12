"use client";
import type { MouseEvent } from "react";
import { track } from "@vercel/analytics";
import { useI18n } from "./I18nProvider";
import { getAffiliateDestination } from "@/lib/affiliate";
import { isAffiliateActivation, readAttribution, safePage } from "@/lib/attribution";

export default function GuideCommercialContent({ html }: { html: string }) {
  const { locale } = useI18n();
  function record(event: MouseEvent<HTMLElement>) {
    if (!isAffiliateActivation(event.type, event.button)) return;
    const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[data-affiliate-product]") : null;
    const product = target?.dataset.affiliateProduct;
    if (!product || !getAffiliateDestination(product)) return;
    try { track("affiliate_click", { product, placement: "guide", locale, page: safePage(window.location.pathname), ...readAttribution(window.location.pathname, window.location.search) }); } catch { /* Preserve navigation. */ }
  }
  return <article className="guide-content" onClick={record} onAuxClick={record} dangerouslySetInnerHTML={{ __html: html }} />;
}
