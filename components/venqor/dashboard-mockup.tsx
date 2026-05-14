"use client"

import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Bell,
  CheckCircle2,
  TrendingUp,
  Settings,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { VenqorLogo } from "@/components/venqor/venqor-logo"

const PRIMARY = "#4f46e5"

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Fév", revenue: 18500 },
  { month: "Mar", revenue: 15200 },
  { month: "Avr", revenue: 23800 },
  { month: "Mai", revenue: 28400 },
  { month: "Jun", revenue: 31200 },
  { month: "Jul", revenue: 38600 },
  { month: "Aoû", revenue: 44100 },
  { month: "Sep", revenue: 52700 },
]

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FileText, label: "Contrats" },
  { icon: CreditCard, label: "Paiements" },
  { icon: Bell, label: "Relances" },
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
              app.venqor.io/dashboard
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
                { label: "Revenus (Sept.)", value: "52 700 €", delta: "+18%" },
                { label: "Contrats actifs", value: "24", delta: "+3" },
                { label: "Taux d'encaissement", value: "97,4 %", delta: "+2,1%" },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200/80 bg-white/80 p-3 shadow-sm"
                >
                  <p className="mb-1 text-xs text-slate-500">{stat.label}</p>
                  <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-0.5 flex items-center gap-1 font-mono text-xs text-primary">
                    <TrendingUp className="h-3 w-3" />
                    {stat.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white/70 p-4">
              <p className="mb-4 text-xs font-medium text-slate-600">
                Revenus encaissés — 2024
              </p>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart
                  data={revenueData}
                  margin={{ top: 4, right: 4, left: -24, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="indigoBrandGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor={PRIMARY} stopOpacity={0.32} />
                      <stop offset="100%" stopColor={PRIMARY} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={v => `${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "12px",
                      color: "#0f172a",
                      boxShadow: "0 8px 24px -8px rgb(15 23 42 / 0.15)",
                    }}
                    formatter={(value: number) => [
                      `${value.toLocaleString("fr-FR")} €`,
                      "Revenus",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke={PRIMARY}
                    strokeWidth={2}
                    fill="url(#indigoBrandGradient)"
                    dot={false}
                    activeDot={{ r: 4, fill: PRIMARY, strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </main>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-2 flex w-[260px] animate-float-slow items-center gap-3 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl md:left-4 md:w-[290px]">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold leading-tight text-slate-900">
            Relance J-30 envoyée
          </p>
          <p className="mt-0.5 text-xs text-slate-500">Domaine de la Tour</p>
        </div>
      </div>

      <div className="absolute -right-2 -top-4 flex w-[240px] animate-float-medium items-center gap-3 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl md:right-4 md:w-[260px]">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <CreditCard className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold leading-tight text-slate-900">
            Solde encaissé
          </p>
          <p className="mt-0.5 font-mono text-xs font-bold text-primary">
            4 500 €
          </p>
        </div>
      </div>
    </div>
  )
}
