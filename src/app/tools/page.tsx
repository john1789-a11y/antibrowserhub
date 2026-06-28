import type { Metadata } from "next";
import ToolsListContent from "./ToolsListContent";

export const metadata: Metadata = {
  title: "Free Privacy & Security Tools",
  description: "Free online tools for testing browser fingerprints, WebRTC leaks, IP address, User Agent, and HTTP headers. Essential tools for antidetect browser users.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return <ToolsListContent />;
}
