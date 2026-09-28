import { SectionShell } from "@/components/venqor/section-shell"

export function DoneForYouSection() {
  return (
    <SectionShell
      id="swas"
      eyebrow="Software with a Service"
      title="Vous ne paramétrez rien. Nous exécutons tout."
      description="Oubliez les logiciels vides à configurer. Nos équipes récupèrent vos plans, vos tarifs et votre charte graphique pour créer l'application sur-mesure de votre domaine. Vous n'avez qu'à valider le résultat."
      className="bg-paper-lux"
    >
      <div className="mx-auto grid max-w-3xl gap-0 border-t border-border">
        {[
          {
            label: "01",
            title: "Nous récupérons",
            text: "Plans, tarifs, règlement intérieur, identité visuelle.",
          },
          {
            label: "02",
            title: "Nous construisons",
            text: "Modélisation du domaine, parcours invités, encaissement, IA.",
          },
          {
            label: "03",
            title: "Vous validez",
            text: "Formation de l'équipe. Mise en ligne. Friction zéro.",
          },
        ].map(step => (
          <div
            key={step.label}
            className="grid gap-2 border-b border-border py-8 md:grid-cols-[5rem_1fr] md:gap-10"
          >
            <span className="font-mono text-sm text-primary/70">{step.label}</span>
            <div>
              <h3 className="font-display text-xl font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
