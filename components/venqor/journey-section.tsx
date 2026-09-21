import { CheckCircle2, Settings2, Store } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const steps = [
  {
    icon: Settings2,
    title: "Paramétrage",
    description:
      "Vous configurez vos espaces, vos chambres, vos menus et vos tarifs dans l'outil.",
  },
  {
    icon: Store,
    title: "Réception",
    description:
      "Le module s'intègre à votre site. Vos clients formulent leurs demandes complètes en ligne.",
  },
  {
    icon: CheckCircle2,
    title: "Validation",
    description:
      "Vous étudiez la demande avec toutes les informations en main, et vous validez la réservation.",
  },
]

export function JourneySection() {
  return (
    <SectionShell
      id="parcours"
      eyebrow="Fonctionnement"
      title="Comment s'intègre Venqor à votre activité ?"
      className="bg-paper-texture"
    >
      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <li
              key={step.title}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-mono text-[10px] text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </SectionShell>
  )
}
