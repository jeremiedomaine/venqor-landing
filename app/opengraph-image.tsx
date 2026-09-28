import { ImageResponse } from "next/og"
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site"

export const alt = `${SITE_NAME} — Infrastructure digitale pour domaines d'exception`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(165deg, #0c0c0e 0%, #16161a 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            marginBottom: 28,
          }}
        >
          <span style={{ color: "#FFFFFF" }}>Ven</span>
          <span style={{ color: "#A5B4FC" }}>qor.</span>
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#FFFFFF",
            lineHeight: 1.35,
            maxWidth: 920,
            opacity: 0.92,
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 18,
            color: "#94A3B8",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Setup clés en main · Friction zéro · SwaS premium
        </div>
      </div>
    ),
    { ...size },
  )
}
