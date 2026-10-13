"use client";
import type { MouseEvent } from "react";
import { trackAffiliateClick } from "@/lib/analytics";
import { useI18n } from "./I18nProvider";
import { getAffiliateDestination } from "@/lib/affiliate";
import { isAffiliateActivation } from "@/lib/attribution";

export default function GuideCommercialContent({ html }: { html: string }) {
  const { locale } = useI18n();
  function record(event: MouseEvent<HTMLElement>) {
    if (!isAffiliateActivation(event.type, event.button)) return;
    const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[data-affiliate-product]") : null;
    const product = target?.dataset.affiliateProduct;
    if (!product || !getAffiliateDestination(product)) return;
    trackAffiliateClick(product, "guide", locale);
  }
  return <article className="guide-content" onClick={record} onAuxClick={record} dangerouslySetInnerHTML={{ __html: html }} />;
}
