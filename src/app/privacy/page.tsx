import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = pageMetadata("/privacy", {
  title: "Privacy Policy — AntiBrowserHub",
  description: "AntiBrowserHub privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
});

export default function PrivacyPage() {
  return <PrivacyContent />;
}
