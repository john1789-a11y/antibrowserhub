"use client";
import { useState } from "react";
import browserLogos from "@/data/browserLogos";

interface BrowserLogoProps {
  slug: string;
  name: string;
  color: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Unified browser logo component.
 * Tries public PNG first, falls back to embedded base64, then to initial letter.
 */
export default function BrowserLogo({
  slug,
  name,
  color,
  size = 52,
  className,
  style,
}: BrowserLogoProps) {
  const publicUrl = `/images/browsers/${slug}.png`;
  const base64Url = browserLogos[slug];
  const [imgSrc, setImgSrc] = useState<string | null>(publicUrl);
  const [imgFailed, setImgFailed] = useState(false);

  const handleError = () => {
    if (imgSrc === publicUrl && base64Url) {
      // Public URL failed, try base64
      setImgSrc(base64Url);
    } else {
      // Both failed, show fallback letter
      setImgSrc(null);
      setImgFailed(true);
    }
  };

  const showImage = imgSrc && !imgFailed;

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: size > 40 ? 12 : 8,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: color,
        position: "relative",
        color: "white",
        fontWeight: 800,
        fontSize: size > 40 ? "1.5rem" : "1rem",
        ...style,
      }}
    >
      {showImage ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={imgSrc}
          alt={`${name} logo`}
          width={size}
          height={size}
          onError={handleError}
          style={{
            objectFit: "contain",
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        name.charAt(0).toUpperCase()
      )}
    </div>
  );
}
