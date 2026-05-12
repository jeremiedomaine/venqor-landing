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

const MIDNIGHT = "oklch(0.22 0.07 260)"
const MIDNIGHT_DEEP = "oklch(0.16 0.06 262)"
const MIDNIGHT_SOFT = "oklch(0.45 0.13 258)"

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
      <div
        className="absolute inset-x-8 bottom-0 top-8 blur-3xl rounded-3xl pointer-events-none"
        style={{ backgroundColor: "oklch(0.22 0.07 260 / 0.1)" }}
      />

      <div
        className="relative rounded-2xl overflow-hidden backdrop-blur-xl"
        style={{
          backgroundColor: "oklch(1 0 0 / 0.85)",
          border: "1px solid oklch(0.22 0.07 260 / 0.1)",
          boxShadow:
            "0 30px 80px -30px oklch(0.16 0.06 262 / 0.3), 0 12px 32px -12px oklch(0.16 0.06 262 / 0.15)",
        }}
      >
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            backgroundColor: "oklch(0.97 0.008 250 / 0.7)",
            borderBottom: "1px solid oklch(0.22 0.07 260 / 0.08)",
          }}
        >
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "oklch(0.85 0.02 255)" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "oklch(0.85 0.02 255)" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "oklch(0.85 0.02 255)" }}
          />
          <div
            className="flex-1 mx-4 h-6 rounded-md flex items-center px-3"
            style={{
              backgroundColor: "oklch(0.95 0.012 252)",
              border: "1px solid oklch(0.22 0.07 260 / 0.06)",
            }}
          >
            <span
              className="text-xs font-mono"
              style={{ color: "oklch(0.5 0.04 258)" }}
            >
              app.venqor.io/dashboard
            </span>
          </div>
        </div>

        <div className="flex h-[400px] md:h-[480px]">
          <aside
            className="hidden md:flex flex-col w-[180px] shrink-0 py-6 px-3 gap-1"
            style={{
              backgroundColor: "oklch(0.97 0.008 250 / 0.5)",
              borderRight: "1px solid oklch(0.22 0.07 260 / 0.08)",
            }}
          >
            <div className="px-3 mb-4">
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: MIDNIGHT }}
              >
                Venqor
              </span>
            </div>
            {sidebarItems.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors"
                style={
                  active
                    ? {
                        backgroundColor: "oklch(0.22 0.07 260 / 0.08)",
                        color: MIDNIGHT,
                        fontWeight: 500,
                      }
                    : { color: "oklch(0.5 0.04 258)" }
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{label}</span>
              </div>
            ))}
            <div className="mt-auto">
              <div
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm"
                style={{ color: "oklch(0.6 0.03 258)" }}
              >
                <Settings className="w-4 h-4 shrink-0" />
                <span>Paramètres</span>
              </div>
            </div>
          </aside>

          <main className="flex-1 p-6 overflow-hidden">
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Revenus (Sept.)", value: "52 700 €", delta: "+18%" },
                { label: "Contrats actifs", value: "24", delta: "+3" },
                { label: "Taux d'encaissement", value: "97,4 %", delta: "+2,1%" },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3"
                  style={{
                    backgroundColor: "oklch(1 0 0 / 0.7)",
                    border: "1px solid oklch(0.22 0.07 260 / 0.08)",
                    boxShadow: "0 1px 2px oklch(0.16 0.06 262 / 0.04)",
                  }}
                >
                  <p
                    className="text-xs mb-1"
                    style={{ color: "oklch(0.5 0.04 258)" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-sm font-bold"
                    style={{ color: MIDNIGHT_DEEP }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs flex items-center gap-1 mt-0.5 font-mono"
                    style={{ color: MIDNIGHT_SOFT }}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {stat.delta}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-4"
              style={{
                backgroundColor: "oklch(1 0 0 / 0.6)",
                border: "1px solid oklch(0.22 0.07 260 / 0.08)",
              }}
            >
              <p
                className="text-xs font-medium mb-4"
                style={{ color: "oklch(0.4 0.04 258)" }}
              >
                Revenus encaissés — 2024
              </p>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart
                  data={revenueData}
                  margin={{ top: 4, right: 4, left: -24, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="midnightGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor={MIDNIGHT} stopOpacity={0.32} />
                      <stop offset="100%" stopColor={MIDNIGHT} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "oklch(0.55 0.04 258)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "oklch(0.55 0.04 258)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={v => `${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(1 0 0)",
                      border: "1px solid oklch(0.22 0.07 260 / 0.15)",
                      borderRadius: "8px",
                      fontSize: "12px",
                      color: "oklch(0.18 0.04 255)",
                      boxShadow:
                        "0 8px 24px -8px oklch(0.16 0.06 262 / 0.25)",
                    }}
                    formatter={(value: number) => [
                      `${value.toLocaleString("fr-FR")} €`,
                      "Revenus",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke={MIDNIGHT}
                    strokeWidth={2}
                    fill="url(#midnightGradient)"
                    dot={false}
                    activeDot={{ r: 4, fill: MIDNIGHT, strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </main>
        </div>
      </div>

      <div
        className="absolute -bottom-4 -left-2 md:left-4 flex items-center gap-3 rounded-xl px-4 py-3 w-[260px] md:w-[290px] animate-float-slow backdrop-blur-xl"
        style={{
          backgroundColor: "oklch(1 0 0 / 0.92)",
          border: "1px solid oklch(0.22 0.07 260 / 0.1)",
          boxShadow:
            "0 18px 40px -16px oklch(0.16 0.06 262 / 0.3), 0 6px 14px -6px oklch(0.16 0.06 262 / 0.15)",
        }}
      >
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
          style={{ backgroundColor: "oklch(0.22 0.07 260 / 0.1)" }}
        >
          <CheckCircle2 className="w-4 h-4" style={{ color: MIDNIGHT }} />
        </div>
        <div>
          <p
            className="text-xs font-semibold leading-tight"
            style={{ color: MIDNIGHT_DEEP }}
          >
            Relance J-30 envoyée
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: "oklch(0.5 0.04 258)" }}
          >
            Domaine de la Tour
          </p>
        </div>
      </div>

      <div
        className="absolute -top-4 -right-2 md:right-4 flex items-center gap-3 rounded-xl px-4 py-3 w-[240px] md:w-[260px] animate-float-medium backdrop-blur-xl"
        style={{
          backgroundColor: "oklch(1 0 0 / 0.92)",
          border: "1px solid oklch(0.22 0.07 260 / 0.1)",
          boxShadow:
            "0 18px 40px -16px oklch(0.16 0.06 262 / 0.3), 0 6px 14px -6px oklch(0.16 0.06 262 / 0.15)",
        }}
      >
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
          style={{ backgroundColor: "oklch(0.22 0.07 260 / 0.1)" }}
        >
          <CreditCard className="w-4 h-4" style={{ color: MIDNIGHT }} />
        </div>
        <div>
          <p
            className="text-xs font-semibold leading-tight"
            style={{ color: MIDNIGHT_DEEP }}
          >
            Solde encaissé
          </p>
          <p
            className="text-xs font-bold font-mono mt-0.5"
            style={{ color: MIDNIGHT }}
          >
            4 500 €
          </p>
        </div>
      </div>
    </div>
  )
}
