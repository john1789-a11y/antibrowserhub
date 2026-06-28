import type { Metadata } from "next";
import UAParser from "./UAParser";

export const metadata: Metadata = {
  title: "User Agent Parser — Analyze Your Browser UA",
  description: "Parse and analyze your browser User Agent string. Detect browser, OS, device type, and check Client Hints consistency. Free online tool.",
  alternates: { canonical: "/tools/user-agent-parser" },
};

export default function UAParserPage() {
  return <UAParser />;
}
