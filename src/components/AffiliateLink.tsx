"use client";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackAffiliateClick, type AffiliatePlacement } from "@/lib/analytics";
import { useI18n } from "./I18nProvider";
import { getAffiliateDestination } from "@/lib/affiliate";
import { isAffiliateActivation } from "@/lib/attribution";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick" | "onAuxClick"> & {
  product: string;
  placement: AffiliatePlacement;
};
export default function AffiliateLink({ product, placement, children, ...props }: Props) {
  const { locale } = useI18n();
  const href = getAffiliateDestination(product);
  function record(event: MouseEvent<HTMLAnchorElement>) {
    if (!isAffiliateActivation(event.type, event.button) || !href) return;
    trackAffiliateClick(product, placement, locale);
  }
  return <a {...props} href={href} target="_blank" rel="sponsored noopener noreferrer" onClick={record} onAuxClick={record}>{children}</a>;
}
