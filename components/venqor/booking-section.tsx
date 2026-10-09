"use client"

import { CalendarDays, Clock, Video } from "lucide-react"

import { VenqorCalEmbed } from "@/components/venqor/venqor-cal-embed"
import { VenqorLogo } from "@/components/venqor/venqor-logo"
import { CTA_SECONDARY } from "@/lib/site"

export function BookingSection() {
  return (
    <section id="booking" className="bg-section-alt px-6 py-16 md:py-24">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="eyebrow mb-5">Modélisation</p>
          <h2 className="mx-auto mb-5 max-w-xl text-balance font-sans text-[32px] font-medium leading-[1.15] tracking-[-0.01em] text-slate-900 md:text-[42px]">
            {CTA_SECONDARY}
          </h2>
          <p className="mx-auto max-w-md font-normal leading-[1.6] text-slate-600 md:text-lg">
            Un échange pour comprendre votre domaine, vos couchages et la façon
            dont l&apos;application sera offerte à vos mariés — sans engagement
            sur le setup.
          </p>
        </div>

        <div className="overflow-hidden border border-slate-200 bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="flex shrink-0 flex-col gap-6 border-b border-slate-200 bg-slate-100 p-8 md:w-72 md:border-b-0 md:border-r md:p-10">
              <div>
                <div className="mb-4">
                  <VenqorLogo size="sm" />
                </div>
                <h3 className="text-base font-semibold tracking-[-0.01em] text-slate-900">
                  Étude de modélisation
                </h3>
              </div>

              <div className="flex flex-col gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-indigo-300" strokeWidth={1.25} />
                  <span>30–45 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="h-4 w-4 shrink-0 text-indigo-300" strokeWidth={1.25} />
                  <span>Visioconférence</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 shrink-0 text-indigo-300" strokeWidth={1.25} />
                  <span>Créneaux · Europe/Paris</span>
                </div>
              </div>

              <p className="mt-auto border-t border-slate-200 pt-6 text-xs font-normal leading-relaxed text-slate-500">
                Pour domaines de réception qui veulent offrir une expérience
                digitale 5 étoiles à leurs mariés.
              </p>
            </div>

            <div className="min-w-0 flex-1 bg-white p-4 sm:p-5 md:p-6">
              <div className="relative max-h-[min(90vh,960px)] min-h-[600px] w-full overflow-x-hidden overflow-y-auto overscroll-contain border border-slate-200 bg-white [-webkit-overflow-scrolling:touch]">
                <VenqorCalEmbed className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
