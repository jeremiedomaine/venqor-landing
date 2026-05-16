"use client"

import { useEffect, useRef, useState } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"

const CAL_NAMESPACE = "venqorLanding"
const MIN_EMBED_HEIGHT = 600

/**
 * Lien d’événement Cal.com (sans https://cal.com/).
 * Ex. : "votre-username/25min" ou "equipe/25min"
 */
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK ?? "jeremie-venqor/25min"

const BRAND_PRIMARY = "#4F46E5"

export function VenqorCalEmbed({ className }: { className?: string }) {
  const uiApplied = useRef(false)
  const [embedHeight, setEmbedHeight] = useState(MIN_EMBED_HEIGHT)

  useEffect(() => {
    const onLinkReady = () => {
      void applyVenqorUi()
    }

    const onDimensionChanged = (e: CustomEvent<{
      data: { iframeHeight?: number }
    }>) => {
      const next = e.detail?.data?.iframeHeight
      if (typeof next === "number" && next > 0) {
        setEmbedHeight(Math.max(MIN_EMBED_HEIGHT, Math.ceil(next)))
      }
    }

    async function applyVenqorUi() {
      if (uiApplied.current) return
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      if (uiApplied.current) return
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: BRAND_PRIMARY },
          body: { background: "transparent" },
        },
        cssVarsPerTheme: {
          light: {
            "cal-bg": "transparent",
            "cal-bg-emphasis": "rgba(248, 250, 252, 0.95)",
            "cal-bg-subtle": "rgba(241, 245, 249, 0.85)",
            "cal-border-booker": "rgb(226 232 240 / 0.95)",
            "cal-border-subtle": "rgb(226 232 240 / 0.7)",
            "cal-text": "#0f172a",
            "cal-text-emphasis": "#0f172a",
          },
          dark: {
            "cal-bg": "transparent",
          },
        },
      })
      uiApplied.current = true
    }

    let cancelled = false

    void getCalApi({ namespace: CAL_NAMESPACE }).then(cal => {
      if (cancelled) return
      cal("on", { action: "linkReady", callback: onLinkReady })
      cal("on", {
        action: "__dimensionChanged",
        callback: onDimensionChanged,
      })
    })

    const fallback = window.setTimeout(() => {
      void applyVenqorUi()
    }, 2800)

    return () => {
      cancelled = true
      window.clearTimeout(fallback)
      uiApplied.current = false
      void getCalApi({ namespace: CAL_NAMESPACE }).then(cal => {
        cal("off", { action: "linkReady", callback: onLinkReady })
        cal("off", {
          action: "__dimensionChanged",
          callback: onDimensionChanged,
        })
      })
    }
  }, [])

  return (
    <div
      className={className}
      style={{ minHeight: embedHeight }}
    >
      <Cal
        namespace={CAL_NAMESPACE}
        calLink={CAL_LINK}
        config={{
          theme: "light",
          "ui.color-scheme": "light",
          overlayCalendar: "true",
        }}
        className="h-full w-full min-h-[inherit]"
      />
    </div>
  )
}
