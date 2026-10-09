"use client"

import {
  ChefHat,
  Clock,
  Download,
  Flower2,
  Music,
  UtensilsCrossed,
} from "lucide-react"

const allergyRows = [
  { table: "Table 1 — Famille", count: 10, notes: "1 sans gluten · 1 végétarien" },
  { table: "Table 4 — Amis", count: 8, notes: "2 fruits de mer" },
  { table: "Table 7 — Collègues", count: 9, notes: "Aucune" },
  { table: "Table 9 — Enfants", count: 6, notes: "3 sans lactose" },
]

const vendors = [
  { role: "Traiteur", name: "Maison Élégance", time: "Jeudi 17 juin · 14h00" },
  { role: "Fleuriste", name: "Atelier Pivoine", time: "Vendredi 18 juin · 08h30" },
  { role: "DJ", name: "Sound & Light Pro", time: "Vendredi 18 juin · 16h00" },
]

const vendorIcon = {
  Traiteur: UtensilsCrossed,
  Fleuriste: Flower2,
  DJ: Music,
} as const

/** Vue gérant : synthèse domaine & feuille de route J-15 (sans doublon mariés) */
export function DomainRoutePreview() {
  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <div className="mx-2 flex h-7 flex-1 items-center justify-center rounded-md border border-slate-300 bg-white px-3">
          <span className="font-mono text-[10px] tracking-wide text-slate-500 sm:text-[11px]">
            domaine-des-pins.venqor.app/feuille-de-route
          </span>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-slate-900 px-5 py-6 text-white md:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Synthèse domaine
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          Feuille de route · J-15
        </h3>
        <p className="mt-2 text-sm text-white/70">
          Clara & Julien · Samedi 19 juin 2027 · 128 convives confirmés
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-b border-slate-200 p-4 md:p-6 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-center gap-2">
            <ChefHat className="h-4 w-4 text-primary" strokeWidth={1.25} />
            <h4 className="text-base font-semibold text-slate-900">
              Cuisine & allergies par table
            </h4>
          </div>
          <ul className="divide-y divide-slate-200 rounded-md border border-slate-200">
            {allergyRows.map(row => (
              <li
                key={row.table}
                className="flex flex-col gap-1 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{row.table}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-amber-800">
                    <UtensilsCrossed className="h-3 w-3 shrink-0" strokeWidth={1.25} />
                    {row.notes}
                  </p>
                </div>
                <span className="text-xs tabular-nums text-slate-500">
                  {row.count} couverts
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 md:p-6">
          <div className="mb-4 flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" strokeWidth={1.25} />
            <h4 className="text-base font-semibold text-slate-900">
              Arrivées prestataires
            </h4>
          </div>
          <ul className="space-y-3">
            {vendors.map(v => {
              const Icon = vendorIcon[v.role as keyof typeof vendorIcon] ?? Clock
              return (
                <li
                  key={v.role}
                  className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.25} />
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {v.role} · {v.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">{v.time}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Download className="h-4 w-4" strokeWidth={1.25} />
            Exporter version Staff sans prix
          </button>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-500">
            PDF opérationnel pour équipes terrain — sans montants ni options
            commerciales.
          </p>
        </div>
      </div>
    </div>
  )
}
