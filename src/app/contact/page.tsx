import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = pageMetadata("/contact", {
  title: "Contact AntiBrowserHub",
  description: "Contact AntiBrowserHub for editorial corrections, partnership questions, privacy requests, and general feedback.",
  alternates: { canonical: "/contact" },
});

export default function ContactPage() {
  return <ContactContent />;
}
