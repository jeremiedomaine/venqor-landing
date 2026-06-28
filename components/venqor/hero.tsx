"use client"

import { CalendarDays, Check } from "lucide-react"

import { DashboardMockup } from "./dashboard-mockup"

const heroBullets = [
  "Pipeline kanban & calendrier",
  "Contrat en ligne + échéancier",
  "Page client & relances auto",
]

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

      <div className="relative mb-8 flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-xs font-medium tracking-wide text-slate-600">
          Accès privé sur invitation
        </span>
      </div>

      <h1 className="relative mb-5 max-w-3xl text-balance text-center text-[2.5rem] font-semibold leading-[1.07] tracking-[-0.04em] text-slate-900 md:text-5xl lg:text-[3.5rem]">
        L&apos;infrastructure financière dédiée aux lieux de réception.
      </h1>

      <p className="mb-8 max-w-lg text-pretty text-center text-[0.9375rem] leading-[1.65] tracking-[-0.01em] text-slate-600 md:text-base">
        Centralisez vos contrats, sécurisez vos encaissements et automatisez la gestion financière de votre domaine.
      </p>

      <ul className="relative mb-10 flex max-w-md flex-col gap-2">
        {heroBullets.map(bullet => (
          <li
            key={bullet}
            className="flex items-center gap-2 text-left text-sm text-slate-600"
          >
            <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="relative flex flex-col items-center gap-3 sm:flex-row">
        <a
          href="#booking"
          className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold tracking-tight text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
        >
          <CalendarDays className="h-4 w-4" />
          Demander une démo
        </a>
        <a
          href="#fonctionnalites"
          className="rounded-xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-primary/30"
        >
          Fonctionnalités
        </a>
      </div>

      <DashboardMockup />
    </section>
  )
}
