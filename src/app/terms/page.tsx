import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = pageMetadata("/terms", {
  title: "Terms of Service — AntiBrowserHub",
  description: "AntiBrowserHub terms of service. Read about the terms and conditions for using our website.",
  alternates: { canonical: "/terms" },
});

export default function TermsPage() {
  return <TermsContent />;
}
