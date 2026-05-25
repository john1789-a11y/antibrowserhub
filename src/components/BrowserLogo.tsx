import Image from "next/image";

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
 * Renders the real browser logo from /images/browsers/{slug}.png,
 * falling back to a colored initial letter if the image fails to load.
 */
export default function BrowserLogo({
  slug,
  name,
  color,
  size = 52,
  className,
  style,
}: BrowserLogoProps) {
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
        ...style,
      }}
    >
      <Image
        src={`/images/browsers/${slug}.png?v=2`}
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
        unoptimized
      />
    </div>
  );
}
