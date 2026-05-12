"use client"

import { useEffect, useRef } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"

const CAL_NAMESPACE = "venqorLanding"
const CAL_LINK = "jeremie-thomasse-lbxysk/30min"
/** Bleu nuit Venqor — aligné avec la nouvelle DA */
const BRAND_MIDNIGHT = "#1a2e57"

/**
 * Cal.com en embed React + `cal("ui")` pour thème clair, brandColor bleu nuit
 * et fond transparent (voir [documentation embed React Cal.com](https://developer.cal.com/embed/install-with-react)).
 */
export function VenqorCalEmbed({ className }: { className?: string }) {
  const uiApplied = useRef(false)

  useEffect(() => {
    const onLinkReady = () => {
      void applyVenqorUi()
    }

    async function applyVenqorUi() {
      if (uiApplied.current) return
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      if (uiApplied.current) return
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: BRAND_MIDNIGHT },
          body: { background: "transparent" },
        },
        cssVarsPerTheme: {
          light: {
            "cal-bg": "transparent",
            "cal-bg-emphasis": "rgba(248, 246, 240, 0.8)",
            "cal-bg-subtle": "rgba(248, 246, 240, 0.6)",
            "cal-border-booker": "rgb(26 46 87 / 0.12)",
            "cal-border-subtle": "rgb(26 46 87 / 0.08)",
            "cal-text": "#0f1e3d",
            "cal-text-emphasis": "#0a162e",
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
      })
    }
  }, [])

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      config={{
        theme: "light",
        "ui.color-scheme": "light",
        overlayCalendar: "true",
      }}
      className={className}
    />
  )
}
