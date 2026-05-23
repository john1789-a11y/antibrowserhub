import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/components/I18nProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "AntiBrowserHub — Best Antidetect Browser Reviews & Comparisons",
    template: "%s | AntiBrowserHub",
  },
  description:
    "Find the best antidetect browser for your needs. In-depth reviews, side-by-side comparisons, API tutorials, and expert guides for MoreLogin, AdsPower, GoLogin, Multilogin, and more.",
  keywords: [
    "antidetect browser",
    "fingerprint browser",
    "browser fingerprint",
    "multi-account browser",
    "antidetect browser review",
    "best antidetect browser",
    "MoreLogin",
    "AdsPower",
    "GoLogin",
    "Multilogin",
    "Dolphin Anty",
  ],
  authors: [{ name: "AntiBrowserHub Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://antibrowserhub.com",
    siteName: "AntiBrowserHub",
    title: "AntiBrowserHub — Best Antidetect Browser Reviews & Comparisons",
    description:
      "Find the best antidetect browser for your needs. In-depth reviews, comparisons, and expert guides.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AntiBrowserHub",
    description:
      "Find the best antidetect browser for your needs. In-depth reviews, comparisons, and expert guides.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          <I18nProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
