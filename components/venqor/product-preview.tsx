"use client"

import { LayoutGrid, Inbox, CheckCircle2 } from "lucide-react"

import { VenqorLogo } from "@/components/venqor/venqor-logo"

/** Visuel produit plein cadre — sans badges flottants */
export function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-5xl animate-rise-delay-3">
      <div className="overflow-hidden rounded-t-2xl border border-b-0 border-slate-200/90 bg-white shadow-[0_-20px_60px_-20px_rgb(15_23_42_/0.12)]">
        <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-50/90 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="mx-3 flex h-6 flex-1 items-center rounded-md border border-slate-200 bg-white px-3">
            <span className="font-mono text-[11px] text-slate-500">
              app.venqor.app/demandes
            </span>
          </div>
        </div>

        <div className="flex min-h-[320px] md:min-h-[400px]">
          <aside className="hidden w-44 shrink-0 flex-col gap-1 border-r border-slate-200/80 bg-slate-50/50 p-4 md:flex">
            <div className="mb-4 px-1">
              <VenqorLogo size="sm" />
            </div>
            {[
              { icon: Inbox, label: "Demandes", active: true },
              { icon: LayoutGrid, label: "Prestations" },
              { icon: CheckCircle2, label: "Réservations" },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm ${
                  active
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-slate-500"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </div>
            ))}
          </aside>

          <div className="flex-1 p-5 md:p-6">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  Aujourd&apos;hui
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-slate-900 md:text-2xl">
                  Demandes entrantes
                </h3>
              </div>
              <p className="hidden text-sm text-slate-500 sm:block">
                3 à traiter
              </p>
            </div>

            <ul className="space-y-2.5">
              {[
                {
                  title: "Mariage — Domaine des Pins",
                  meta: "Grande salle · 14 chambres · Traiteur",
                  status: "Complète",
                  price: "18 400 €",
                },
                {
                  title: "Séminaire — Orangerie",
                  meta: "Espace jour · Hébergement options",
                  status: "À étudier",
                  price: "9 200 €",
                },
                {
                  title: "Privatisation — Château",
                  meta: "Réception · Partenaires restauration",
                  status: "Validée",
                  price: "6 750 €",
                },
              ].map(row => (
                <li
                  key={row.title}
                  className="flex items-center justify-between gap-3 border-b border-slate-100 py-3 last:border-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-900">
                      {row.title}
                    </p>
                    <p className="truncate text-xs text-slate-500">{row.meta}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs font-medium text-primary">{row.status}</p>
                    <p className="font-mono text-xs text-slate-600">{row.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </div>
  )
}
