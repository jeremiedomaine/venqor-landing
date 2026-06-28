"use client"

import { CalendarDays, Check } from "lucide-react"

import { DashboardMockup } from "./dashboard-mockup"

const heroBullets = [
  "Pipeline visuel — kanban et calendrier des dossiers",
  "Contrat signé en ligne + échéancier acompte / solde",
  "Page client privée et relances configurables",
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
          Conçu pour châteaux, domaines & lieux de réception
        </span>
      </div>

      <h1 className="relative mb-5 max-w-4xl text-balance text-center text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-900 md:text-5xl lg:text-[3.25rem]">
        Le cockpit de votre domaine — demandes, contrats, acomptes et relances au même endroit.
      </h1>

      <p className="mb-8 max-w-2xl text-pretty text-center text-[0.9375rem] leading-[1.65] tracking-[-0.01em] text-slate-600 md:text-lg">
        De la première demande à la clôture du dossier. Vos clients règlent via une page privée ; vous pilotez votre saison en un coup d&apos;œil.
      </p>

      <ul className="relative mb-10 flex max-w-xl flex-col gap-2.5">
        {heroBullets.map(bullet => (
          <li
            key={bullet}
            className="flex items-start gap-2.5 text-left text-sm text-slate-700"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-3 w-3 text-primary" />
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      <div className="relative flex flex-col items-center gap-3 sm:flex-row">
        <a
          href="#booking"
          className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold tracking-tight text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
        >
          <CalendarDays className="h-4 w-4" />
          Demander une démo
        </a>
        <a
          href="#fonctionnalites"
          className="rounded-xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-primary/30 hover:bg-white"
        >
          Découvrir les fonctionnalités
        </a>
      </div>

      <DashboardMockup />
    </section>
  )
}
