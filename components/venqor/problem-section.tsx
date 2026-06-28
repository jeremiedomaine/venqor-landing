import { CalendarX, CreditCard, LineChart } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const pains = [
  {
    icon: CalendarX,
    title: "Dates mal sécurisées",
    description:
      "Demandes éparpillées entre mails et tableurs. Difficile de savoir quelles dates sont vraiment engagées — et lesquelles risquent de vous échapper.",
  },
  {
    icon: CreditCard,
    title: "Paiements opaques",
    description:
      "Acomptes et soldes suivis à la main. « Est-ce qu’ils ont payé ? » devient une question permanente, surtout en haute saison.",
  },
  {
    icon: LineChart,
    title: "Saison invisible",
    description:
      "Peu de visibilité sur le remplissage mois par mois ni sur le chiffre d’affaires à venir. On éteint les feux au lieu d’anticiper.",
  },
]

export function ProblemSection() {
  return (
    <SectionShell
      id="probleme"
      eyebrow="Le constat"
      title="Excel, mails et PDF ne suffisent plus."
      description="Les lieux de réception jonglent entre un CRM artisanal, des contrats envoyés à la main et un suivi des encaissements opaque. Résultat : perte de temps, trésorerie qui traîne, stress en saison."
      className="bg-white/60"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {pains.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold tracking-tight text-slate-900">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
