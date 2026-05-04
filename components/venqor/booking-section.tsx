"use client"

import { CalendarDays, Clock, Video, ArrowRight } from "lucide-react"

const slots = [
  { day: "Lun", date: "12", times: ["10:00", "14:00", "16:30"] },
  { day: "Mar", date: "13", times: ["09:30", "11:00", "15:00"] },
  { day: "Mer", date: "14", times: ["10:00", "14:30"] },
  { day: "Jeu", date: "15", times: ["09:00", "11:30", "17:00"] },
  { day: "Ven", date: "16", times: ["10:30", "13:00"] },
]

export function BookingSection() {
  return (
    <section
      id="booking"
      className="relative bg-slate-950 py-28 px-4 overflow-hidden"
    >
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      {/* Background ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono" style={{ color: "oklch(0.72 0.22 158)" }}>
            Démonstration privée
          </p>
          <h2 className="text-balance font-semibold text-white text-3xl md:text-4xl tracking-[-0.04em] leading-[1.1] max-w-xl mx-auto mb-4">
            Voyez Venqor en action en 30 minutes.
          </h2>
          <p className="text-slate-400 text-[0.9375rem] leading-relaxed tracking-[-0.01em] max-w-md mx-auto">
            Un échange sans engagement avec notre équipe pour découvrir comment Venqor s&apos;adapte à votre domaine.
          </p>
        </div>

        {/* Booking frame */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-2xl">

          {/* Frame top bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-800/60 bg-slate-950/40">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="flex-1 mx-3 h-5 bg-slate-800/60 rounded flex items-center px-3">
              <span className="text-xs text-slate-500">cal.venqor.io/demo</span>
            </div>
          </div>

          {/* Booking content */}
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-800/60">

            {/* Left — info panel */}
            <div className="md:w-72 shrink-0 p-7 flex flex-col gap-5">
              <div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "oklch(0.72 0.22 158 / 0.12)" }}>
                  <Video className="w-4 h-4" style={{ color: "oklch(0.72 0.22 158)" }} />
                </div>
                <p className="text-xs text-slate-500 mb-1 tracking-wide uppercase font-medium">Venqor</p>
                <h3 className="text-white font-semibold text-base tracking-[-0.02em]">
                  Démonstration produit
                </h3>
              </div>

              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2.5 text-slate-400">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400">
                  <Video className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Visioconférence (lien envoyé par e-mail)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400">
                  <CalendarDays className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Mai 2025 · Europe/Paris</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-800/60">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Notre équipe vous montrera comment automatiser vos encaissements, gérer vos contrats et piloter votre trésorerie en temps réel.
                </p>
              </div>
            </div>

            {/* Right — calendar slot picker */}
            <div className="flex-1 p-7">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.1em] mb-5">
                Choisissez un créneau
              </p>

              {/* Days grid */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {slots.map((slot, i) => (
                  <div key={slot.date} className="flex flex-col items-center">
                    <span className="text-[11px] text-slate-500 mb-1.5 font-medium">{slot.day}</span>
                    <span className="text-xs font-semibold text-slate-300 mb-3">{slot.date}</span>
                    <div className="flex flex-col gap-1.5 w-full">
                      {slot.times.map((time) => {
                        const isSelected = i === 1 && time === "11:00"
                        return (
                          <button
                            key={time}
                            className="w-full text-xs py-2 rounded-lg border transition-all duration-150 font-medium font-mono"
                            style={isSelected ? {
                              backgroundColor: "oklch(0.72 0.22 158 / 0.15)",
                              borderColor: "oklch(0.72 0.22 158 / 0.5)",
                              color: "oklch(0.72 0.22 158)",
                            } : {
                              backgroundColor: "oklch(0.2 0 0 / 0.4)",
                              borderColor: "oklch(0.28 0 0)",
                              color: "oklch(0.6 0 0)",
                            }}
                          >
                            {time}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Confirm CTA */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-800/60">
                <p className="text-xs text-slate-500">
                  Créneau sélectionné :{" "}
                  <span className="font-medium font-mono" style={{ color: "oklch(0.72 0.22 158)" }}>Mar 13 · 11:00</span>
                </p>
                <button
                  className="flex items-center gap-2 text-slate-950 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: "oklch(0.72 0.22 158)",
                    boxShadow: "0 0 16px oklch(0.72 0.22 158 / 0.35)",
                  }}
                >
                  Confirmer
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Reassurance line */}
        <p className="text-center text-xs text-slate-600 mt-6 tracking-[-0.01em]">
          Sans engagement · Aucune carte bancaire requise · Réponse sous 24h
        </p>

      </div>
    </section>
  )
}
