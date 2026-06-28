import type { Metadata } from "next";
import ProxiesContent from "./ProxiesContent";
import { proxyProviders } from "@/data/proxies";

const providerCount = proxyProviders.length;

export const metadata: Metadata = {
  title: `${providerCount} Proxy Providers for Antidetect Browsers — 2026 Directory`,
  description:
    `Compare ${providerCount} proxy providers worldwide. Find the best residential, datacenter, ISP, and mobile proxies for your antidetect browser. Sorted by rating, price, and region.`,
};

export default function ProxiesPage() {
  return <ProxiesContent />;
}
