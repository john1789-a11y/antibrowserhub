import { ImageResponse } from "next/og";

export const alt = "AntiBrowserHub — Best Antidetect Browser Reviews & Comparisons";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 40%, #0a0a0f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              display: "flex",
            }}
          >
            🛡️
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#e2e8f0",
              letterSpacing: "-1px",
              display: "flex",
            }}
          >
            AntiBrowserHub
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 500,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          Best Antidetect Browser Reviews & Comparisons
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            maxWidth: "700px",
            textAlign: "center",
            display: "flex",
          }}
        >
          In-depth reviews · Side-by-side comparisons · Expert guides
        </div>

        {/* Year badge */}
        <div
          style={{
            marginTop: "32px",
            padding: "8px 24px",
            borderRadius: "24px",
            border: "1px solid rgba(99,102,241,0.3)",
            background: "rgba(99,102,241,0.1)",
            color: "#6366f1",
            fontSize: "16px",
            fontWeight: 600,
            display: "flex",
          }}
        >
          Updated for 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
