import {
  BarChart3,
  Bell,
  Columns3,
  FileText,
  Globe,
  Wallet,
} from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const features = [
  {
    icon: Columns3,
    title: "Pipeline",
    description: "Kanban, calendrier, virements à confirmer. Demande → Clôturé.",
  },
  {
    icon: FileText,
    title: "Contrat",
    description: "Envoi Signable, signatures en ligne, modèle personnalisable.",
  },
  {
    icon: Wallet,
    title: "Échéancier",
    description: "Acompte + solde auto selon vos règles (ex. solde à J-30).",
  },
  {
    icon: Globe,
    title: "Page client",
    description: "Lien privé : RIB, échéancier, déclaration de virement. Sans compte.",
  },
  {
    icon: Bell,
    title: "Relances",
    description: "Emails acompte, solde et contrat — déclencheurs configurables.",
  },
  {
    icon: BarChart3,
    title: "Pilotage",
    description: "CA, objectifs, calendrier mensuel et pipeline du jour.",
  },
]

export function FeaturesSection() {
  return (
    <SectionShell
      id="fonctionnalites"
      eyebrow="Fonctionnalités"
      title="Six modules, un seul flux."
      className="bg-white/60"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              {description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
