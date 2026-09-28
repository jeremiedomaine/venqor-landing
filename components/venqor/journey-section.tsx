import { SectionShell } from "@/components/venqor/section-shell"

const steps = [
  {
    title: "Paramétrage",
    description:
      "Vous configurez vos espaces, vos chambres, vos menus et vos tarifs dans l'outil.",
  },
  {
    title: "Réception",
    description:
      "Le module s'intègre à votre site. Vos clients formulent leurs demandes complètes en ligne.",
  },
  {
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
      className="bg-section-soft"
    >
      <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
        {steps.map((step, index) => (
          <li key={step.title} className="text-center md:text-left">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
              {index + 1}
            </div>
            <h3 className="font-display text-xl font-medium text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </SectionShell>
  )
}
