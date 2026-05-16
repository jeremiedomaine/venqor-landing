"use client"

import { useEffect, useRef } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"

const CAL_NAMESPACE = "venqorLanding"

/**
 * Lien d’événement Cal.com (sans https://cal.com/).
 * Ex. : "votre-username/25min" ou "equipe/25min"
 * À mettre à jour dans .env.local et sur Vercel après un changement de compte.
 */
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK ?? "jeremie-venqor/25min"
/** Indigo brand — charte SaaS Premium (MVB) */
const BRAND_PRIMARY = "#4F46E5"

/**
 * Cal.com en embed React + `cal("ui")` — thème clair, brandColor indigo MVB
 * (voir https://developer.cal.com/embed/install-with-react).
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
