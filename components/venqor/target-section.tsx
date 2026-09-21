import { Building2, Hotel, UtensilsCrossed } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const personas = [
  {
    icon: Building2,
    title: "Domaines et châteaux de réception",
    description: "Établissements qui orchestrent des événements sur-mesure.",
  },
  {
    icon: Hotel,
    title: "Lieux événementiels avec hébergement",
    description: "Capacité d'accueil et de couchages sur un même site.",
  },
  {
    icon: UtensilsCrossed,
    title: "Complexes avec traiteur ou partenaires",
    description: "Services intégrés ou offres construites avec des partenaires.",
  },
]

export function TargetSection() {
  return (
    <SectionShell
      id="pour-qui"
      eyebrow="Pour qui"
      title="Adapté aux établissements multi-services."
      className="bg-white/60"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {personas.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <h3 className="mb-1 font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
