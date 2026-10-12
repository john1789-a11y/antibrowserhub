"use client";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { track } from "@vercel/analytics";
import { useI18n } from "./I18nProvider";
import { getAffiliateDestination } from "@/lib/affiliate";
import { isAffiliateActivation, readAttribution, safePage } from "@/lib/attribution";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick" | "onAuxClick"> & {
  product: string;
  placement: "review-sidebar" | "comparison" | "deal" | "best-for" | "proxy" | "guide";
};
export default function AffiliateLink({ product, placement, children, ...props }: Props) {
  const { locale } = useI18n();
  const href = getAffiliateDestination(product);
  function record(event: MouseEvent<HTMLAnchorElement>) {
    if (!isAffiliateActivation(event.type, event.button) || !href) return;
    try {
      track("affiliate_click", { product, placement, locale, page: safePage(window.location.pathname), ...readAttribution(window.location.pathname, window.location.search) });
    } catch { /* Analytics failures must never block the destination. */ }
  }
  return <a {...props} href={href} target="_blank" rel="sponsored noopener noreferrer" onClick={record} onAuxClick={record}>{children}</a>;
}
