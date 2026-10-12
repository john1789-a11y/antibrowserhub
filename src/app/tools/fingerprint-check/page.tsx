import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import FingerprintChecker from "./FingerprintChecker";

export const metadata: Metadata = pageMetadata("/tools/fingerprint-check", {
  title: "Free Browser Fingerprint & Consistency Checker",
  description: "Analyze your browser fingerprint consistency and authenticity for free. Test Canvas, WebGL, User Agent, timezone, automation markers (webdriver), and consistency leaks.",
});

export default function FingerprintCheckPage() {
  return <FingerprintChecker />;
}
