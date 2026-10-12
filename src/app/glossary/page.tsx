import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import GlossaryContent from "./GlossaryContent";

export const metadata: Metadata = pageMetadata("/glossary", {
  title: "Antidetect Browser Glossary — Key Terms & Definitions | AntiBrowserHub",
  description: "Learn key antidetect browser terms: browser fingerprinting, Canvas fingerprint, WebGL, WebRTC, residential proxy, and more. A complete glossary for beginners and experts.",
});

export default function GlossaryPage() {
  return <GlossaryContent />;
}
