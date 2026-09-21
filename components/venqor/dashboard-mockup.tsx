"use client"

import {
  CheckCircle2,
  Inbox,
  LayoutDashboard,
  LayoutGrid,
  Settings,
  Store,
} from "lucide-react"

import { VenqorLogo } from "@/components/venqor/venqor-logo"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Vue d'ensemble", active: true },
  { icon: LayoutGrid, label: "Prestations" },
  { icon: Inbox, label: "Demandes" },
  { icon: Store, label: "Vitrine" },
]

const recentRequests = [
  {
    name: "Mariage — Château des Pins",
    detail: "Salle + 12 chambres + traiteur",
    status: "À étudier",
    amount: "18 400 €",
  },
  {
    name: "Séminaire — Domaine Vert",
    detail: "Grande salle + hébergement",
    status: "Complète",
    amount: "9 200 €",
  },
  {
    name: "Privatisation — Orangerie",
    detail: "Espace + options restauration",
    status: "Validée",
    amount: "6 750 €",
  },
]

export function DashboardMockup() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl px-4">
      <div className="pointer-events-none absolute inset-x-8 bottom-0 top-8 rounded-3xl bg-primary/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-50/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-slate-300" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
          <div className="mx-4 flex h-6 flex-1 items-center rounded-md border border-slate-200/80 bg-white px-3">
            <span className="font-mono text-xs text-slate-500">
              app.venqor.app/demandes
            </span>
          </div>
        </div>

        <div className="flex h-[400px] md:h-[480px]">
          <aside className="hidden w-[180px] shrink-0 flex-col gap-1 border-r border-slate-200/80 bg-slate-50/60 py-6 md:flex">
            <div className="mb-4 px-3">
              <VenqorLogo size="sm" />
            </div>
            {sidebarItems.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{label}</span>
              </div>
            ))}
            <div className="mt-auto">
              <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-500">
                <Settings className="h-4 w-4 shrink-0" />
                <span>Paramètres</span>
              </div>
            </div>
          </aside>

          <main className="flex-1 overflow-hidden p-6">
            <div className="mb-6 grid grid-cols-3 gap-3">
              {[
                { label: "Demandes du mois", value: "18" },
                { label: "Demandes complètes", value: "14" },
                { label: "Réservations validées", value: "9" },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200/80 bg-white/80 p-3 shadow-sm"
                >
                  <p className="mb-1 text-xs text-slate-500">{stat.label}</p>
                  <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white/70 p-4">
              <p className="mb-4 text-xs font-medium text-slate-600">
                Demandes récentes
              </p>
              <ul className="space-y-3">
                {recentRequests.map(request => (
                  <li
                    key={request.name}
                    className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {request.name}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {request.detail}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-xs font-medium text-primary">
                        {request.status}
                      </p>
                      <p className="font-mono text-xs text-slate-600">
                        {request.amount}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-2 flex w-[260px] animate-float-slow items-center gap-3 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl md:left-4 md:w-[290px]">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Inbox className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold leading-tight text-slate-900">
            Nouvelle demande reçue
          </p>
          <p className="mt-0.5 text-xs text-slate-500">Salle + hébergement + traiteur</p>
        </div>
      </div>

      <div className="absolute -right-2 -top-4 flex w-[240px] animate-float-medium items-center gap-3 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl md:right-4 md:w-[260px]">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold leading-tight text-slate-900">
            Réservation validée
          </p>
          <p className="mt-0.5 text-xs text-slate-500">Domaine de la Tour</p>
        </div>
      </div>
    </div>
  )
}
