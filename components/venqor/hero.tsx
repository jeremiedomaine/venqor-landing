"use client"

import { DashboardMockup } from "./dashboard-mockup"
import { CalendarDays } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col items-center pt-32 pb-24 px-4">

      {/* Background radial glow — pulsing emerald */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[860px] h-[560px] rounded-full pointer-events-none animate-emerald-pulse"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.22 158 / 0.12) 0%, transparent 70%)" }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(oklch(0.98 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0 0) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Badge */}
      <div className="flex items-center gap-2 bg-slate-900/70 border border-slate-800 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: "oklch(0.72 0.22 158)" }}
          />
          <span className="relative inline-flex rounded-full h-2 w-2"
            style={{ backgroundColor: "oklch(0.72 0.22 158)" }}
          />
        </span>
        <span className="text-xs font-medium text-slate-300 tracking-wide font-mono">
          Accès privé sur invitation
        </span>
      </div>

      {/* Headline — bright white with emerald glow */}
      <h1 className="text-balance text-center font-semibold text-[2.5rem] md:text-5xl lg:text-[3.5rem] tracking-[-0.04em] leading-[1.07] max-w-3xl mb-5 relative"
        style={{
          color: "oklch(0.98 0 0)",
          textShadow: "0 0 30px oklch(0.72 0.22 158 / 0.3), 0 0 60px oklch(0.72 0.22 158 / 0.15)",
        }}
      >
        L&apos;infrastructure financière dédiée aux lieux de réception.
      </h1>

      {/* Subtitle */}
      <p className="text-pretty text-center text-slate-500 text-[0.9375rem] md:text-base leading-[1.65] max-w-lg mb-10 tracking-[-0.01em]">
        Centralisez vos contrats, sécurisez vos encaissements et automatisez la gestion financière de votre domaine.
      </p>

      {/* CTA */}
      <a
        href="#booking"
        className="flex items-center gap-2 text-slate-950 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-lg tracking-tight"
        style={{
          backgroundColor: "oklch(0.72 0.22 158)",
          boxShadow: "0 0 24px oklch(0.72 0.22 158 / 0.4), 0 4px 12px oklch(0.72 0.22 158 / 0.2)",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 36px oklch(0.72 0.22 158 / 0.55), 0 4px 16px oklch(0.72 0.22 158 / 0.3)"
          ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.78 0.22 158)"
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px oklch(0.72 0.22 158 / 0.4), 0 4px 12px oklch(0.72 0.22 158 / 0.2)"
          ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.72 0.22 158)"
        }}
      >
        <CalendarDays className="w-4 h-4" />
        Planifier une démonstration
      </a>

      {/* Dashboard Mockup */}
      <DashboardMockup />
    </section>
  )
}
