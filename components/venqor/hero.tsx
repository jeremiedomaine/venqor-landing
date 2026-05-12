"use client"

import { DashboardMockup } from "./dashboard-mockup"
import { CalendarDays } from "lucide-react"

const MIDNIGHT = "oklch(0.22 0.07 260)"
const MIDNIGHT_DEEP = "oklch(0.16 0.06 262)"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center pt-32 pb-24 px-4 bg-paper-texture">
      <div
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[860px] h-[560px] rounded-full pointer-events-none animate-midnight-pulse"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.22 0.07 260 / 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none bg-paper-grid opacity-[0.6]" />

      <div
        className="relative flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
        style={{
          backgroundColor: "oklch(1 0 0 / 0.6)",
          border: "1px solid oklch(0.22 0.07 260 / 0.12)",
          boxShadow: "0 2px 8px -2px oklch(0.22 0.07 260 / 0.08)",
        }}
      >
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: MIDNIGHT }}
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ backgroundColor: MIDNIGHT }}
          />
        </span>
        <span
          className="text-xs font-medium tracking-wide font-mono"
          style={{ color: "oklch(0.3 0.05 258)" }}
        >
          Accès privé sur invitation
        </span>
      </div>

      <h1
        className="text-balance text-center font-semibold text-[2.5rem] md:text-5xl lg:text-[3.5rem] tracking-[-0.04em] leading-[1.07] max-w-3xl mb-5 relative"
        style={{ color: MIDNIGHT_DEEP }}
      >
        L&apos;infrastructure financière dédiée aux lieux de réception.
      </h1>

      <p
        className="text-pretty text-center text-[0.9375rem] md:text-base leading-[1.65] max-w-lg mb-10 tracking-[-0.01em]"
        style={{ color: "oklch(0.45 0.04 258)" }}
      >
        Centralisez vos contrats, sécurisez vos encaissements et automatisez la gestion financière de votre domaine.
      </p>

      <a
        href="#booking"
        className="flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-lg tracking-tight"
        style={{
          backgroundColor: MIDNIGHT,
          boxShadow:
            "0 12px 32px -8px oklch(0.22 0.07 260 / 0.4), 0 4px 12px -2px oklch(0.16 0.06 262 / 0.2)",
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 16px 40px -8px oklch(0.22 0.07 260 / 0.55), 0 6px 16px -2px oklch(0.16 0.06 262 / 0.3)"
          ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = MIDNIGHT_DEEP
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 12px 32px -8px oklch(0.22 0.07 260 / 0.4), 0 4px 12px -2px oklch(0.16 0.06 262 / 0.2)"
          ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = MIDNIGHT
        }}
      >
        <CalendarDays className="w-4 h-4" />
        Planifier une démonstration
      </a>

      <DashboardMockup />
    </section>
  )
}
