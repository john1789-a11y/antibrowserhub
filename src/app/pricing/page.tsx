import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Antidetect Browser Pricing Comparison 2026 — All Plans Side by Side | AntiBrowserHub",
  description: "Compare pricing of all 13 antidetect browsers in one table. Free plans, paid tiers, cost per profile, and annual discounts. Find the best value for your budget.",
};

export default function PricingPage() {
  return <PricingContent />;
}
