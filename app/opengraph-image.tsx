import { ImageResponse } from "next/og"
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site"

export const alt = `${SITE_NAME} — Application mariage pour domaines d'exception`
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
          padding: "80px 88px",
          background: "#F8FAFC",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "#0F172A",
            marginBottom: 24,
          }}
        >
          Venqor
        </div>
        <div
          style={{
            width: 48,
            height: 4,
            borderRadius: 2,
            background: "#4F46E5",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#0F172A",
            lineHeight: 1.25,
            maxWidth: 900,
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 18,
            color: "#64748B",
            maxWidth: 720,
            lineHeight: 1.5,
          }}
        >
          Application mariage clés en main pour domaines d&apos;exception
        </div>
      </div>
    ),
    { ...size },
  )
}
