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
 * Uses embedded base64 data URLs to avoid dependency on static file serving.
 * Falls back to a colored initial letter if no logo is found for the slug.
 */
export default function BrowserLogo({
  slug,
  name,
  color,
  size = 52,
  className,
  style,
}: BrowserLogoProps) {
  const logoDataUrl = browserLogos[slug];

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
      {logoDataUrl ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={logoDataUrl}
          alt={`${name} logo`}
          width={size}
          height={size}
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
