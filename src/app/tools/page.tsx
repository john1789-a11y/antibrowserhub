import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import ToolsListContent from "./ToolsListContent";

export const metadata: Metadata = pageMetadata("/tools", {
  title: "Free Privacy & Security Tools",
  description: "Free online tools for testing browser fingerprints, WebRTC leaks, IP address, User Agent, and HTTP headers. Essential tools for antidetect browser users.",
  alternates: { canonical: "/tools" },
});

export default function ToolsPage() {
  return <ToolsListContent />;
}
