import type { Metadata } from "next";
import MethodologyContent from "./MethodologyContent";

export const metadata: Metadata = {
  title: "Review Methodology — How AntiBrowserHub Rates Antidetect Browsers",
  description:
    "Learn how AntiBrowserHub reviews antidetect browsers, including rating weights, fingerprint testing tools, pricing analysis, affiliate disclosure, and update cadence.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return <MethodologyContent />;
}

