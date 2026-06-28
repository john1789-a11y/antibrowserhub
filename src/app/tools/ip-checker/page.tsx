import type { Metadata } from "next";
import IPChecker from "./IPChecker";

export const metadata: Metadata = {
  title: "What Is My IP Address — Free IP Checker",
  description: "Check your public IP address, geolocation, ISP, timezone, and detect if you are using a proxy or VPN. Free online tool.",
  alternates: { canonical: "/tools/ip-checker" },
};

export default function IPCheckerPage() {
  return <IPChecker />;
}
