import { ImageResponse } from "next/og"
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site"

export const alt = `${SITE_NAME} — Réservation pour domaines de réception`
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
          background: "linear-gradient(165deg, #EEF1F8 0%, #F4F6F9 50%, #FFFFFF 100%)",
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
          <span style={{ color: "#0F172A" }}>Ven</span>
          <span style={{ color: "#4F46E5" }}>qor.</span>
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 500,
            color: "#0F172A",
            lineHeight: 1.35,
            maxWidth: 920,
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 20,
            color: "#64748B",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Offres · Demandes · Réservation
        </div>
      </div>
    ),
    { ...size },
  )
}
