import { Building2, Heart, PartyPopper, Users } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const personas = [
  {
    icon: Building2,
    title: "Châteaux & domaines",
    description:
      "Lieux haut de gamme avec saisonnalité marquée, plusieurs types d’événements et une équipe réduite sur le back-office.",
  },
  {
    icon: Heart,
    title: "Mariages",
    description:
      "Parcours mariés natif : échéancier, contrat, espace dédié « Espace mariés » et relances adaptées.",
  },
  {
    icon: PartyPopper,
    title: "Autres événements",
    description:
      "Séminaires, anniversaires, privatisations — types personnalisables en plus du mariage par défaut.",
  },
  {
    icon: Users,
    title: "Qui utilise Venqor au quotidien",
    description:
      "Gérant·e, directeur·rice, responsable commercial ou admin — 1 à quelques personnes sur la gestion des dossiers.",
  },
]

export function TargetSection() {
  return (
    <SectionShell
      id="pour-qui"
      eyebrow="Pour qui"
      title="Conçu pour les lieux de réception."
      description="Pas un CRM générique. Venqor parle le langage des domaines : dossiers, dates bloquées, saisons et acomptes."
      className="bg-paper-texture"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {personas.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm"
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
      <p className="mt-8 text-center text-sm text-slate-500">
        Pas la cible : couples finaux (ils passent par le portail sans compte), agences événementielles généralistes, ni besoins compta/facturation légale.
      </p>
    </SectionShell>
  )
}
