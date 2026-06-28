import type { Metadata } from "next";
import WebRTCChecker from "./WebRTCChecker";

export const metadata: Metadata = {
  title: "Free WebRTC Leak Test — Check IP Leaks",
  description: "Test if WebRTC is leaking your real IP address even when using a VPN or proxy. Free online WebRTC leak checker with detailed results.",
  alternates: { canonical: "/tools/webrtc-leak-test" },
};

export default function WebRTCLeakTestPage() {
  return <WebRTCChecker />;
}
