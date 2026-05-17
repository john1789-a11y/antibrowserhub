import type { Metadata } from "next";
import GuidesContent from "./GuidesContent";

export const metadata: Metadata = {
  title: "Guides & Tutorials",
  description: "Expert guides and tutorials for antidetect browsers.",
};

export default function GuidesPage() {
  return <GuidesContent />;
}
