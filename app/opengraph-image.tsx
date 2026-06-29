import { ImageResponse } from "next/og"
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site"

export const alt = `${SITE_NAME} — Infrastructure financière pour lieux de réception`
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
          background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 55%, #F8FAFC 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            marginBottom: 28,
          }}
        >
          <span style={{ color: "#0F172A" }}>Ven</span>
          <span style={{ color: "#4F46E5" }}>qor.</span>
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#0F172A",
            lineHeight: 1.35,
            maxWidth: 900,
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "#64748B",
          }}
        >
          Contrats · Acomptes · Page client · Relances
        </div>
      </div>
    ),
    { ...size },
  )
}
