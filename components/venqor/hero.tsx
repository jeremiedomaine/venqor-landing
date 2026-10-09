"use client"

import { CTA_PRIMARY, CTA_SECONDARY } from "@/lib/site"
import { VenqorLogo } from "@/components/venqor/venqor-logo"
import { ProductPreview } from "@/components/venqor/product-preview"
import { OrnamentDivider } from "@/components/venqor/ornaments"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/[0.06] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(100svh,920px)] max-w-4xl flex-col items-center px-6 pb-0 pt-28 text-center md:pt-32">
        <p className="animate-rise eyebrow mb-8">
          Infrastructure digitale · Domaines d&apos;exception
        </p>

        <div className="animate-rise mb-10">
          <VenqorLogo size="hero" />
          <OrnamentDivider className="mt-8" />
        </div>

        <h1 className="animate-rise-delay-1 mb-6 max-w-3xl text-balance text-[2rem] font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          Offrez à chaque mariage son application dédiée.
        </h1>

        <p className="animate-rise-delay-2 mb-10 max-w-xl text-pretty text-base leading-relaxed text-slate-500">
          Démarquez votre domaine avec une expérience digitale 5 étoiles. Offrez
          à vos mariés une application personnalisée pour organiser la
          répartition de leurs chambres, récupérer les allergies et informer
          leurs invités. Le meilleur&nbsp;? Nous la construisons de A à Z pour
          vous.
        </p>

        <div className="animate-rise-delay-2 mb-16 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a href="#exemple" className="btn-primary">
            {CTA_PRIMARY}
          </a>
          <a href="#booking" className="btn-secondary">
            {CTA_SECONDARY}
          </a>
        </div>

        <div className="animate-rise-delay-3 w-full max-w-5xl rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Aperçu produit · Application mariage
            </p>
          </div>
          <div className="p-4 md:p-6">
            <ProductPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
