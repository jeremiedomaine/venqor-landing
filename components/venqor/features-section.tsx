import { LayoutGrid, Route, Store } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const features = [
  {
    icon: LayoutGrid,
    title: "Regroupement de vos prestations",
    subtitle: "Offres modulables",
    description:
      "Présentez l'ensemble de vos services (location de salle, formules traiteur, nuitées) sur une interface claire. Vos prospects comprennent immédiatement ce que vous proposez.",
  },
  {
    icon: Store,
    title: "Structuration des demandes entrantes",
    subtitle: undefined,
    description:
      "Vos clients construisent leur projet pas-à-pas depuis votre vitrine. Vous recevez directement une demande détaillée et chiffrée, avec les vrais besoins du prospect.",
  },
  {
    icon: Route,
    title: "Parcours client professionnel",
    subtitle: undefined,
    description:
      "Offrez à vos futurs clients une expérience de réservation en ligne fluide et moderne, à la hauteur de la qualité de votre établissement.",
  },
]

export function FeaturesSection() {
  return (
    <SectionShell
      id="fonctionnalites"
      eyebrow="Fonctionnalités"
      title="Ce que Venqor apporte concrètement."
      className="bg-paper-texture"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {features.map(({ icon: Icon, title, subtitle, description }, index) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-mono text-[10px] text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-semibold tracking-tight text-slate-900">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-1 text-xs font-medium text-primary">{subtitle}</p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
