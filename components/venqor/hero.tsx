"use client"

import { CTA_PRIMARY, CTA_SECONDARY } from "@/lib/site"
import { VenqorLogo } from "@/components/venqor/venqor-logo"
import { ProductPreview } from "@/components/venqor/product-preview"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-lux text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(180deg, black 30%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[min(100svh,980px)] max-w-4xl flex-col items-center px-4 pb-0 pt-32 text-center md:pt-36">
        <div className="animate-rise mb-10">
          <VenqorLogo size="hero" inverted />
        </div>

        <h1 className="animate-rise-delay-1 mb-6 max-w-3xl text-balance font-display text-[1.85rem] font-medium leading-[1.12] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.85rem]">
          L&apos;infrastructure digitale des domaines de réception d&apos;exception.
        </h1>

        <p className="animate-rise-delay-2 mb-10 max-w-2xl text-pretty text-[0.95rem] leading-relaxed text-white/65 md:text-base">
          Ne vendez plus de simples nuitées. Nous modélisons votre domaine,
          automatisons l&apos;encaissement de vos invités et déployons une
          conciergerie IA pour vous libérer de toute charge mentale. Un setup
          100&nbsp;% «&nbsp;Clés en main&nbsp;».
        </p>

        <div className="animate-rise-delay-2 mb-16 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {CTA_PRIMARY}
          </a>
          <a
            href="#booking"
            className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-white/45 hover:text-white"
          >
            {CTA_SECONDARY}
          </a>
        </div>

        <div className="animate-rise-delay-3 w-full">
          <ProductPreview variant="dark" />
        </div>
      </div>
    </section>
  )
}
