import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import CompareContent from "./CompareContent";

export const metadata: Metadata = pageMetadata("/compare", {
  title: "Compare Antidetect Browsers — Full Feature & Pricing Comparison 2026",
  description: "Side-by-side comparison of the best antidetect browsers in 2026.",
});

export default function ComparePage() {
  return <CompareContent />;
}
