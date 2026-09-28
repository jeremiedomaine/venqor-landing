"use client"

import { CalendarDays } from "lucide-react"

import { ProductPreview } from "@/components/venqor/product-preview"
import { VenqorLogo } from "@/components/venqor/venqor-logo"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-plane">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(15 23 42 / 0.03) 1px, transparent 1px), linear-gradient(90deg, rgb(15 23 42 / 0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(180deg, black 40%, transparent 95%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[min(100svh,920px)] max-w-4xl flex-col items-center px-4 pb-0 pt-28 text-center md:pt-32">
        <div className="animate-rise mb-8">
          <VenqorLogo size="hero" />
        </div>

        <h1 className="animate-rise-delay-1 mb-5 max-w-3xl text-balance font-display text-[1.85rem] font-medium leading-[1.15] tracking-[-0.02em] text-slate-900 md:text-4xl lg:text-[2.75rem]">
          Simplifiez la réservation de votre domaine de réception.
        </h1>

        <p className="animate-rise-delay-2 mb-9 max-w-xl text-pretty text-[0.95rem] leading-relaxed text-slate-600 md:text-base">
          Un outil pensé pour structurer vos offres complexes (espaces,
          hébergements, restauration) et fluidifier les échanges avec vos
          clients.
        </p>

        <div className="animate-rise-delay-2 mb-14 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            <CalendarDays className="h-4 w-4" />
            Planifier un échange
          </a>
          <a
            href="#fonctionnalites"
            className="rounded-xl border border-slate-300/80 bg-white/70 px-6 py-3 text-sm font-medium text-slate-800 backdrop-blur-sm transition-colors hover:border-primary/35"
          >
            Découvrir la solution
          </a>
        </div>

        <ProductPreview />
      </div>
    </section>
  )
}
