import { Building2, Heart, PartyPopper, Users } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const personas = [
  {
    icon: Building2,
    title: "Châteaux & domaines",
    description: "Saisonnalité forte, équipe réduite sur le back-office.",
  },
  {
    icon: Heart,
    title: "Mariages",
    description: "Espace mariés, échéancier et contrat dédiés.",
  },
  {
    icon: PartyPopper,
    title: "Autres événements",
    description: "Séminaires, anniversaires, privatisations…",
  },
  {
    icon: Users,
    title: "Utilisateurs",
    description: "Gérant·e, directeur·rice ou responsable commercial.",
  },
]

export function TargetSection() {
  return (
    <SectionShell
      id="pour-qui"
      eyebrow="Pour qui"
      title="Les lieux de réception."
      className="bg-paper-texture"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {personas.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <h3 className="mb-1 font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-slate-500">
        Pas un CRM générique · Pas un logiciel de compta
      </p>
    </SectionShell>
  )
}
