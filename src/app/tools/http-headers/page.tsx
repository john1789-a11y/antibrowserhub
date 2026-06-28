import type { Metadata } from "next";
import HeadersChecker from "./HeadersChecker";

export const metadata: Metadata = {
  title: "HTTP Headers Checker — View Your Browser Headers",
  description: "View all HTTP request headers your browser sends. Check for privacy leaks, proxy-revealing headers, and security headers. Free online tool.",
  alternates: { canonical: "/tools/http-headers" },
};

export default function HTTPHeadersPage() {
  return <HeadersChecker />;
}
