"use client"

import { CalendarDays } from "lucide-react"

import { DashboardMockup } from "./dashboard-mockup"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-paper-texture px-4 pb-24 pt-32">
      <div
        className="pointer-events-none absolute left-1/2 top-[-80px] h-[560px] w-[860px] -translate-x-1/2 animate-brand-pulse rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgb(79 70 229 / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-paper-grid opacity-[0.55]" />

      <h1 className="relative mb-5 max-w-3xl text-balance text-center text-[2.5rem] font-semibold leading-[1.07] tracking-[-0.04em] text-slate-900 md:text-5xl lg:text-[3.5rem]">
        Simplifiez la réservation de votre domaine de réception.
      </h1>

      <p className="mb-10 max-w-xl text-pretty text-center text-[0.9375rem] leading-[1.65] tracking-[-0.01em] text-slate-600 md:text-base">
        Un outil pensé pour structurer vos offres complexes (espaces,
        hébergements, restauration) et fluidifier les échanges avec vos clients.
      </p>

      <div className="relative flex flex-col items-center gap-3 sm:flex-row">
        <a
          href="#fonctionnalites"
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold tracking-tight text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
        >
          Découvrir la solution
        </a>
        <a
          href="#booking"
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-primary/30"
        >
          <CalendarDays className="h-4 w-4" />
          Voir une démonstration
        </a>
      </div>

      <DashboardMockup />
    </section>
  )
}
