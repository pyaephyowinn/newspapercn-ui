import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "newspapercn-ui — One Piece Newspaper Component Library";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ede5d5",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top double rule */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 80,
            right: 80,
            height: 6,
            borderTop: "3px solid #2a2520",
            borderBottom: "1px solid #2a2520",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#2a2520",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          newspapercn-ui
        </div>

        {/* Ornamental divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 120,
              height: 1,
              backgroundColor: "#2a2520",
            }}
          />
          <div style={{ fontSize: 18, color: "#2a2520" }}>✦</div>
          <div
            style={{
              width: 120,
              height: 1,
              backgroundColor: "#2a2520",
            }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#5a534b",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          A One Piece newspaper-themed component library built on shadcn/ui
        </div>

        {/* Stats line */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 32,
            fontSize: 16,
            color: "#7a736b",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span>10 Custom Components</span>
          <span>·</span>
          <span>13 Newspaper Variants</span>
          <span>·</span>
          <span>OKLCH Tokens</span>
        </div>

        {/* Bottom double rule */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            right: 80,
            height: 6,
            borderTop: "1px solid #2a2520",
            borderBottom: "3px solid #2a2520",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
