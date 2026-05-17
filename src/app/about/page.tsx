import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About AntiBrowserHub",
  description: "Learn about AntiBrowserHub — your trusted source for antidetect browser reviews.",
};

export default function AboutPage() {
  return <AboutContent />;
}
