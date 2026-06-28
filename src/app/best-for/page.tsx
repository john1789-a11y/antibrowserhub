import type { Metadata } from "next";
import BestForListContent from "./BestForListContent";

export const metadata: Metadata = {
  title: "Best Antidetect Browser for Every Use Case — 2026 Guide",
  description: "Find the best antidetect browser for your specific needs: Amazon selling, social media, web scraping, affiliate marketing, crypto airdrops, and more.",
  alternates: { canonical: "/best-for" },
};

export default function BestForPage() {
  return <BestForListContent />;
}
