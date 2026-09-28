import { SectionShell } from "@/components/venqor/section-shell"

const pains = [
  {
    title: "Les devis à variables multiples",
    description:
      "Gérer sur un même document la location des espaces, le nombre de couchages et les options de restauration prend du temps.",
  },
  {
    title: "Les demandes incomplètes",
    description:
      "Les premiers contacts par e-mail manquent souvent d'informations clés : dates flexibles, nombre de personnes, options souhaitées.",
  },
  {
    title: "La dispersion de l'information",
    description:
      "Croiser les agendas, les notes de rendez-vous et les tableaux de suivi complexifie l'organisation au quotidien.",
  },
]

export function ProblemSection() {
  return (
    <SectionShell
      id="contexte"
      eyebrow="Pourquoi Venqor"
      title="Conçu pour les réalités de l'événementiel sur-mesure."
      className="bg-white"
    >
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
        {pains.map((pain, i) => (
          <div
            key={pain.title}
            className="grid gap-3 py-8 md:grid-cols-[4rem_1fr] md:gap-8"
          >
            <span className="font-mono text-sm text-primary/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl font-medium text-slate-900">
                {pain.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
                {pain.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
