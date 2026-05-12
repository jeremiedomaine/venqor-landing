"use client"

import { CalendarDays, Clock, Video } from "lucide-react"

import { VenqorCalEmbed } from "@/components/venqor/venqor-cal-embed"

const MIDNIGHT = "oklch(0.22 0.07 260)"
const MIDNIGHT_DEEP = "oklch(0.16 0.06 262)"

export function BookingSection() {
  return (
    <section
      id="booking"
      className="relative py-28 px-4 overflow-hidden bg-paper-texture"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.22 0.07 260 / 0.25), transparent)",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: "oklch(0.22 0.07 260 / 0.07)" }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono"
            style={{ color: MIDNIGHT }}
          >
            Démonstration privée
          </p>
          <h2
            className="text-balance font-semibold text-3xl md:text-4xl tracking-[-0.04em] leading-[1.1] max-w-xl mx-auto mb-4"
            style={{ color: MIDNIGHT_DEEP }}
          >
            Voyez Venqor en action en 30 minutes.
          </h2>
          <p
            className="text-[0.9375rem] leading-relaxed tracking-[-0.01em] max-w-md mx-auto"
            style={{ color: "oklch(0.45 0.04 258)" }}
          >
            Un échange sans engagement avec notre équipe pour découvrir comment Venqor s&apos;adapte à votre domaine.
          </p>
        </div>

        <div
          className="rounded-2xl overflow-hidden backdrop-blur-sm"
          style={{
            backgroundColor: "oklch(1 0 0 / 0.7)",
            border: "1px solid oklch(0.22 0.07 260 / 0.1)",
            boxShadow:
              "0 30px 80px -30px oklch(0.16 0.06 262 / 0.3), 0 12px 32px -12px oklch(0.16 0.06 262 / 0.12)",
          }}
        >
          <div
            className="flex flex-col md:flex-row"
            style={{
              borderColor: "oklch(0.22 0.07 260 / 0.08)",
            }}
          >
            <div
              className="md:w-72 shrink-0 p-7 flex flex-col gap-5 md:border-r border-b md:border-b-0"
              style={{
                backgroundColor: "oklch(0.97 0.008 250 / 0.6)",
                borderColor: "oklch(0.22 0.07 260 / 0.08)",
              }}
            >
              <div>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "oklch(0.22 0.07 260 / 0.08)",
                    border: "1px solid oklch(0.22 0.07 260 / 0.1)",
                  }}
                >
                  <Video className="w-4 h-4" style={{ color: MIDNIGHT }} />
                </div>
                <p
                  className="text-xs mb-1 tracking-wide uppercase font-medium"
                  style={{ color: "oklch(0.5 0.04 258)" }}
                >
                  Venqor
                </p>
                <h3
                  className="font-semibold text-base tracking-[-0.02em]"
                  style={{ color: MIDNIGHT_DEEP }}
                >
                  Démonstration produit
                </h3>
              </div>

              <div
                className="flex flex-col gap-3 text-sm"
                style={{ color: "oklch(0.4 0.04 258)" }}
              >
                <div className="flex items-center gap-2.5">
                  <Clock
                    className="w-4 h-4 shrink-0"
                    style={{ color: "oklch(0.55 0.06 258)" }}
                  />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video
                    className="w-4 h-4 shrink-0"
                    style={{ color: "oklch(0.55 0.06 258)" }}
                  />
                  <span>Visioconférence (lien envoyé par e-mail)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CalendarDays
                    className="w-4 h-4 shrink-0"
                    style={{ color: "oklch(0.55 0.06 258)" }}
                  />
                  <span>Créneaux en direct · Europe/Paris</span>
                </div>
              </div>

              <div
                className="mt-auto pt-4"
                style={{ borderTop: "1px solid oklch(0.22 0.07 260 / 0.08)" }}
              >
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.5 0.04 258)" }}
                >
                  Notre équipe vous montrera comment automatiser vos encaissements, gérer vos contrats et piloter votre trésorerie en temps réel.
                </p>
              </div>
            </div>

            <div
              className="flex-1 min-w-0 p-3 sm:p-4 md:p-5"
              style={{ backgroundColor: "oklch(0.985 0.004 95 / 0.5)" }}
            >
              <div
                className="relative h-[min(78vh,820px)] min-h-[600px] w-full overflow-hidden rounded-2xl"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.85)",
                  border: "1px solid oklch(0.22 0.07 260 / 0.08)",
                  boxShadow:
                    "0 12px 32px -16px oklch(0.16 0.06 262 / 0.15)",
                }}
              >
                <VenqorCalEmbed className="h-full w-full min-h-[inherit]" />
              </div>
            </div>
          </div>
        </div>

        <p
          className="text-center text-xs mt-6 tracking-[-0.01em]"
          style={{ color: "oklch(0.55 0.04 258)" }}
        >
          Sans engagement · Aucune carte bancaire requise · Réponse sous 24h
        </p>
      </div>
    </section>
  )
}
