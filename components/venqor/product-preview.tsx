"use client"

import { CheckCircle2, Inbox, LayoutGrid } from "lucide-react"

import { VenqorLogo } from "@/components/venqor/venqor-logo"
import { cn } from "@/lib/utils"

type ProductPreviewProps = {
  variant?: "light" | "dark"
}

/** Visuel produit plein cadre — friction zéro, sans overlays */
export function ProductPreview({ variant = "light" }: ProductPreviewProps) {
  const dark = variant === "dark"

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div
        className={cn(
          "overflow-hidden rounded-t-2xl border border-b-0",
          dark
            ? "border-white/10 bg-[#18181c] shadow-[0_-40px_80px_-30px_rgb(0_0_0_/0.6)]"
            : "border-slate-200 bg-white shadow-[0_-20px_60px_-20px_rgb(17_17_19_/0.12)]",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2 border-b px-4 py-2.5",
            dark ? "border-white/10 bg-white/5" : "border-slate-200/80 bg-slate-50/90",
          )}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <div
            className={cn(
              "mx-3 flex h-6 flex-1 items-center rounded-md px-3",
              dark ? "bg-white/5" : "border border-slate-200 bg-white",
            )}
          >
            <span
              className={cn(
                "font-mono text-[11px]",
                dark ? "text-white/40" : "text-slate-500",
              )}
            >
              votre-domaine.venqor.app
            </span>
          </div>
        </div>

        <div className="flex min-h-[300px] md:min-h-[380px]">
          <aside
            className={cn(
              "hidden w-44 shrink-0 flex-col gap-1 border-r p-4 md:flex",
              dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200/80 bg-slate-50/50",
            )}
          >
            <div className="mb-4 px-1">
              <VenqorLogo size="sm" inverted={dark} />
            </div>
            {[
              { icon: Inbox, label: "Réservations", active: true },
              { icon: LayoutGrid, label: "Hébergements" },
              { icon: CheckCircle2, label: "Encaissements" },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm",
                  active
                    ? dark
                      ? "bg-indigo-500/20 font-medium text-indigo-200"
                      : "bg-primary/10 font-medium text-primary"
                    : dark
                      ? "text-white/45"
                      : "text-slate-500",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </div>
            ))}
          </aside>

          <div className="flex-1 p-5 md:p-6">
            <div className="mb-5">
              <p
                className={cn(
                  "text-xs font-medium uppercase tracking-[0.16em]",
                  dark ? "text-white/35" : "text-slate-400",
                )}
              >
                Week-end · Encaissement invités
              </p>
              <h3
                className={cn(
                  "mt-1 font-display text-xl font-medium md:text-2xl",
                  dark ? "text-white" : "text-ink",
                )}
              >
                Chambres confirmées
              </h3>
            </div>

            <ul className="space-y-0">
              {[
                {
                  title: "Suite Olive — Dupont",
                  meta: "2 nuits · Apple Pay",
                  status: "Encaissé",
                  price: "480 €",
                },
                {
                  title: "Chambre Lavande — Martin",
                  meta: "2 nuits · Carte",
                  status: "Encaissé",
                  price: "320 €",
                },
                {
                  title: "Studio Figuier — Leroy",
                  meta: "1 nuit · Apple Pay",
                  status: "Encaissé",
                  price: "180 €",
                },
              ].map(row => (
                <li
                  key={row.title}
                  className={cn(
                    "flex items-center justify-between gap-3 border-b py-3.5 last:border-0",
                    dark ? "border-white/8" : "border-slate-100",
                  )}
                >
                  <div className="min-w-0 text-left">
                    <p
                      className={cn(
                        "truncate text-sm font-medium",
                        dark ? "text-white/90" : "text-ink",
                      )}
                    >
                      {row.title}
                    </p>
                    <p
                      className={cn(
                        "truncate text-xs",
                        dark ? "text-white/40" : "text-slate-500",
                      )}
                    >
                      {row.meta}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p
                      className={cn(
                        "text-xs font-medium",
                        dark ? "text-indigo-300" : "text-primary",
                      )}
                    >
                      {row.status}
                    </p>
                    <p
                      className={cn(
                        "font-mono text-xs",
                        dark ? "text-white/55" : "text-slate-600",
                      )}
                    >
                      {row.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "h-px w-full bg-gradient-to-r from-transparent to-transparent",
          dark ? "via-white/20" : "via-slate-300",
        )}
      />
    </div>
  )
}
