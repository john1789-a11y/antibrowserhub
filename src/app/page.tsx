import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export default function Home() {
  return <HomeContent />;
}

export const metadata: Metadata = pageMetadata("/", { title: { absolute: "AntiBrowserHub — Best Antidetect Browser Reviews & Comparisons" }, description: "Independent antidetect browser reviews, pricing comparisons, and automation guides." });
