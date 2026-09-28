"use client"

import { CalendarDays, Clock, Video } from "lucide-react"

import { VenqorCalEmbed } from "@/components/venqor/venqor-cal-embed"
import { VenqorLogo } from "@/components/venqor/venqor-logo"

export function BookingSection() {
  return (
    <section id="booking" className="relative bg-white px-4 py-24 md:py-28">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Échange
          </p>
          <h2 className="mx-auto mb-4 max-w-xl text-balance font-display text-3xl font-medium tracking-[-0.02em] text-slate-900 md:text-4xl">
            Planifier un échange
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600">
            15 minutes pour parler de votre lieu et voir si Venqor correspond à
            vos besoins.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50">
          <div className="flex flex-col md:flex-row">
            <div className="flex shrink-0 flex-col gap-5 border-b border-slate-200 p-7 md:w-72 md:border-b-0 md:border-r">
              <div>
                <div className="mb-3">
                  <VenqorLogo size="sm" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Échange découverte
                </h3>
              </div>

              <div className="flex flex-col gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-slate-400" />
                  <span>15 minutes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video className="h-4 w-4 shrink-0 text-slate-400" />
                  <span>Visioconférence</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="h-4 w-4 shrink-0 text-slate-400" />
                  <span>Créneaux · Europe/Paris</span>
                </div>
              </div>

              <p className="mt-auto border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
                Un échange simple sur le fonctionnement de votre établissement —
                sans engagement.
              </p>
            </div>

            <div className="min-w-0 flex-1 bg-white p-3 sm:p-4 md:p-5">
              <div className="relative max-h-[min(90vh,960px)] min-h-[600px] w-full overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl border border-slate-200 bg-white [-webkit-overflow-scrolling:touch]">
                <VenqorCalEmbed className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
