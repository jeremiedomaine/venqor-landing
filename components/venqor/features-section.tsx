import { SectionShell } from "@/components/venqor/section-shell"

const features = [
  {
    title: "Regroupement de vos prestations",
    subtitle: "Offres modulables",
    description:
      "Présentez l'ensemble de vos services — location de salle, formules traiteur, nuitées — sur une interface claire. Vos prospects comprennent immédiatement ce que vous proposez.",
  },
  {
    title: "Structuration des demandes entrantes",
    subtitle: "Projet pas-à-pas",
    description:
      "Vos clients construisent leur projet depuis votre vitrine. Vous recevez une demande détaillée et chiffrée, avec les vrais besoins du prospect.",
  },
  {
    title: "Parcours client professionnel",
    subtitle: "À la hauteur de votre lieu",
    description:
      "Une expérience de réservation en ligne fluide et moderne, cohérente avec la qualité de votre établissement.",
  },
]

export function FeaturesSection() {
  return (
    <SectionShell
      id="fonctionnalites"
      eyebrow="Fonctionnalités"
      title="Ce que Venqor apporte concrètement."
      className="bg-section-soft"
    >
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {features.map((feature, index) => (
          <article key={feature.title} className="relative">
            <span className="mb-4 block font-mono text-xs text-primary/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-medium text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {feature.subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
