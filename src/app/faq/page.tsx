import type { Metadata } from "next";
import FaqContent from "./FaqContent";

export const metadata: Metadata = {
  title: "Antidetect Browser FAQ — Frequently Asked Questions | AntiBrowserHub",
  description: "Answers to the most common questions about antidetect browsers. What they are, how they work, pricing, legality, and more.",
};

export default function FaqPage() {
  return <FaqContent />;
}
