import type { Metadata } from "next";
import AffiliateDisclosureContent from "./AffiliateDisclosureContent";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — AntiBrowserHub",
  description: "How AntiBrowserHub uses affiliate links while keeping reviews and ratings independent.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return <AffiliateDisclosureContent />;
}
