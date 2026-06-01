import type { Metadata } from "next";
import ProxiesContent from "./ProxiesContent";

export const metadata: Metadata = {
  title: "Top 50 Proxy Providers for Antidetect Browsers — 2026 Directory",
  description:
    "Compare the top 50 proxy providers worldwide. Find the best residential, datacenter, ISP, and mobile proxies for your antidetect browser. Sorted by rating, price, and region.",
};

export default function ProxiesPage() {
  return <ProxiesContent />;
}
