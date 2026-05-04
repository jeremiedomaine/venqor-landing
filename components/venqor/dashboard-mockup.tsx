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
    <div className="relative w-full max-w-5xl mx-auto mt-16 px-4">
      {/* Emerald glow behind the card */}
      <div className="absolute inset-x-8 bottom-0 top-8 bg-emerald-500/10 blur-3xl rounded-3xl pointer-events-none" />

      {/* Main mockup container */}
      <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-2xl">

        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/80 bg-slate-950/50">
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <span className="w-3 h-3 rounded-full bg-slate-700" />
          <div className="flex-1 mx-4 h-6 bg-slate-800/60 rounded-md flex items-center px-3">
            <span className="text-xs text-slate-500">app.venqor.io/dashboard</span>
          </div>
        </div>

        {/* App layout */}
        <div className="flex h-[400px] md:h-[480px]">

          {/* Sidebar */}
          <aside className="hidden md:flex flex-col w-[180px] shrink-0 border-r border-slate-800/60 bg-slate-950/40 py-6 px-3 gap-1">
            <div className="px-3 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase font-mono" style={{ color: "oklch(0.72 0.22 158)" }}>Venqor</span>
            </div>
            {sidebarItems.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  active
                    ? "font-medium"
                    : "text-slate-500 hover:text-slate-300"
                }`}
                style={active ? { backgroundColor: "oklch(0.72 0.22 158 / 0.12)", color: "oklch(0.72 0.22 158)" } : {}}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{label}</span>
              </div>
            ))}
            <div className="mt-auto">
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-slate-400 transition-colors">
                <Settings className="w-4 h-4 shrink-0" />
                <span>Paramètres</span>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6 overflow-hidden">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Revenus (Sept.)", value: "52 700 €", delta: "+18%" },
                { label: "Contrats actifs", value: "24", delta: "+3" },
                { label: "Taux d'encaissement", value: "97,4 %", delta: "+2,1%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-800/40 border border-slate-800/60 rounded-xl p-3"
                >
                  <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                  <p className="text-sm font-bold text-white">{stat.value}</p>
                  <p className="text-xs flex items-center gap-1 mt-0.5 font-mono" style={{ color: "oklch(0.72 0.22 158)" }}>
                    <TrendingUp className="w-3 h-3" />
                    {stat.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-slate-800/30 border border-slate-800/50 rounded-xl p-4">
              <p className="text-xs font-medium text-slate-400 mb-4">Revenus encaissés — 2024</p>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={revenueData} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                  <defs>
                    <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.72 0.22 158)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="oklch(0.72 0.22 158)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#475569", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#475569", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0f172a",
                      border: "1px solid #1e293b",
                      borderRadius: "8px",
                      fontSize: "12px",
                      color: "#e2e8f0",
                    }}
                    formatter={(value: number) => [`${value.toLocaleString("fr-FR")} €`, "Revenus"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="oklch(0.72 0.22 158)"
                    strokeWidth={2}
                    fill="url(#emeraldGradient)"
                    dot={false}
                    activeDot={{ r: 4, fill: "oklch(0.72 0.22 158)", strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </main>
        </div>
      </div>

      {/* Floating notification cards */}

      {/* Card 1 — bottom-left (check / relance) */}
        <div className="absolute -bottom-4 -left-2 md:left-4 flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-xl px-4 py-3 shadow-xl w-[260px] md:w-[290px] animate-float-slow">
        <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: "oklch(0.72 0.22 158 / 0.15)" }}>
          <CheckCircle2 className="w-4 h-4" style={{ color: "oklch(0.72 0.22 158)" }} />
        </div>
        <div>
          <p className="text-xs font-semibold text-white leading-tight">Relance J-30 envoyée</p>
          <p className="text-xs text-slate-400 mt-0.5">Domaine de la Tour</p>
        </div>
      </div>

      {/* Card 2 — top-right (payment) */}
      <div className="absolute -top-4 -right-2 md:right-4 flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-xl px-4 py-3 shadow-xl w-[240px] md:w-[260px] animate-float-medium">
        <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: "oklch(0.72 0.22 158 / 0.15)" }}>
          <CreditCard className="w-4 h-4" style={{ color: "oklch(0.72 0.22 158)" }} />
        </div>
        <div>
          <p className="text-xs font-semibold text-white leading-tight">Solde encaissé</p>
          <p className="text-xs font-bold font-mono mt-0.5" style={{ color: "oklch(0.72 0.22 158)" }}>4 500 €</p>
        </div>
      </div>
    </div>
  )
}
