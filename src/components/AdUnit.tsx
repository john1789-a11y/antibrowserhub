"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

/**
 * Google AdSense Ad Unit Component
 *
 * Usage:
 *   <AdUnit slot="1234567890" format="auto" />
 *   <AdUnit slot="1234567890" format="horizontal" />
 */

const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "";

interface AdUnitProps {
  slot: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical";
  responsive?: boolean;
  className?: string;
}

export default function AdUnit({ slot, format = "auto", responsive = true, className }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    // Skip in development or if publisher ID is not set
    if (!PUBLISHER_ID) return;
    if (pushed.current) return;

    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded or blocked by ad blocker
    }
  }, []);

  // Don't render placeholder in development
  if (!PUBLISHER_ID) {
    return (
      <div className={`ad-placeholder ${className || ""}`}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>Ad Space</span>
      </div>
    );
  }

  return (
    <>
      <Script
        id="adsense-script"
        async
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`}
        crossOrigin="anonymous"
      />
      <div className={`ad-unit ${className || ""}`} ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={PUBLISHER_ID}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </>
  );
}
