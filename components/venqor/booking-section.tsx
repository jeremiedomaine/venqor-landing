"use client"

import { CalendarDays, Clock, Video } from "lucide-react"

import { VenqorCalEmbed } from "@/components/venqor/venqor-cal-embed"
import { VenqorLogo } from "@/components/venqor/venqor-logo"
import { CTA_SECONDARY } from "@/lib/site"

export function BookingSection() {
  return (
    <section id="booking" className="relative bg-paper-lux px-4 py-24 md:py-28">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Qualification
          </p>
          <h2 className="mx-auto mb-4 max-w-xl text-balance font-display text-3xl font-medium tracking-[-0.02em] text-ink md:text-4xl">
            {CTA_SECONDARY}
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-ink-soft">
            Un échange pour comprendre votre domaine, vos volumes et la
            pertinence d&apos;un déploiement Venqor — sans engagement sur le
            setup.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="flex shrink-0 flex-col gap-5 border-b border-border p-7 md:w-72 md:border-b-0 md:border-r">
              <div>
                <div className="mb-3">
                  <VenqorLogo size="sm" />
                </div>
                <h3 className="text-base font-semibold text-ink">
                  Étude de modélisation
                </h3>
              </div>

              <div className="flex flex-col gap-3 text-sm text-ink-soft">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>30–45 minutes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Visioconférence</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Créneaux · Europe/Paris</span>
                </div>
              </div>

              <p className="mt-auto border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                Appel de qualification haute valeur — pour domaines d&apos;exception
                uniquement.
              </p>
            </div>

            <div className="min-w-0 flex-1 bg-paper p-3 sm:p-4 md:p-5">
              <div className="relative max-h-[min(90vh,960px)] min-h-[600px] w-full overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl border border-border bg-white [-webkit-overflow-scrolling:touch]">
                <VenqorCalEmbed className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
