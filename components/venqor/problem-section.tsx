import { FileSpreadsheet, Inbox, Layers } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const pains = [
  {
    icon: Layers,
    title: "Les devis à variables multiples",
    description:
      "Gérer sur un même document la location des espaces, le nombre de couchages et les options de restauration prend du temps.",
  },
  {
    icon: Inbox,
    title: "Les demandes incomplètes",
    description:
      "Les premiers contacts par e-mail manquent souvent d'informations clés (dates flexibles, nombre exact de personnes, options souhaitées).",
  },
  {
    icon: FileSpreadsheet,
    title: "La dispersion de l'information",
    description:
      "Croiser les agendas, les notes de rendez-vous et les différents tableaux de suivi complexifie l'organisation.",
  },
]

export function ProblemSection() {
  return (
    <SectionShell
      id="contexte"
      eyebrow="Pourquoi Venqor"
      title="Conçu pour les réalités de l'événementiel sur-mesure."
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
