"use client"

import { CalendarDays, Clock, Video } from "lucide-react"

import { VenqorCalEmbed } from "@/components/venqor/venqor-cal-embed"
import { VenqorLogo } from "@/components/venqor/venqor-logo"

export function BookingSection() {
  return (
    <section
      id="booking"
      className="relative bg-paper-texture px-4 py-28"
    >
      <div className="absolute left-1/2 top-0 h-px w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Démonstration privée
          </p>
          <h2 className="mx-auto mb-4 max-w-xl text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-900 md:text-4xl">
            Voyez Venqor en action en 30 minutes.
          </h2>
          <p className="mx-auto max-w-md text-[0.9375rem] leading-relaxed tracking-[-0.01em] text-slate-600">
            Un échange sans engagement avec notre équipe pour découvrir comment Venqor s&apos;adapte à votre domaine.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/90 bg-white/75 shadow-2xl shadow-slate-900/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row">
            <div className="flex shrink-0 flex-col gap-5 border-b border-slate-200/80 bg-slate-50/70 p-7 md:w-72 md:border-b-0 md:border-r">
              <div>
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/90 bg-primary/5">
                  <Video className="h-4 w-4 text-primary" />
                </div>
                <div className="mb-1">
                  <VenqorLogo size="sm" />
                </div>
                <h3 className="text-base font-semibold tracking-[-0.02em] text-slate-900">
                  Démonstration produit
                </h3>
              </div>

              <div className="flex flex-col gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-slate-400" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video className="h-4 w-4 shrink-0 text-slate-400" />
                  <span>Visioconférence (lien envoyé par e-mail)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="h-4 w-4 shrink-0 text-slate-400" />
                  <span>Créneaux en direct · Europe/Paris</span>
                </div>
              </div>

              <div className="mt-auto border-t border-slate-200/80 pt-4">
                <p className="text-xs leading-relaxed text-slate-500">
                  Notre équipe vous montrera comment automatiser vos encaissements, gérer vos contrats et piloter votre trésorerie en temps réel.
                </p>
              </div>
            </div>

            <div className="min-w-0 flex-1 bg-slate-50/50 p-3 sm:p-4 md:p-5">
              <div className="relative w-full min-h-[600px] max-h-[min(90vh,960px)] overflow-y-auto overflow-x-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-lg shadow-slate-900/5 overscroll-contain [-webkit-overflow-scrolling:touch]">
                <VenqorCalEmbed className="w-full" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs tracking-[-0.01em] text-slate-500">
          Sans engagement · Aucune carte bancaire requise · Réponse sous 24h
        </p>
      </div>
    </section>
  )
}
