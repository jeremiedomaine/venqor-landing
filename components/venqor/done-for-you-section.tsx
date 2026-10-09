import { SectionShell } from "@/components/venqor/section-shell"

export function DoneForYouSection() {
  return (
    <SectionShell
      id="swas"
      eyebrow="Done-for-you"
      title="Vous ne paramétrez rien. Nous exécutons tout."
      description="Vous n'avez pas le temps de configurer un énième outil. Lors de notre setup initial, nos équipes récupèrent vos plans, vos menus, vos tarifs et l'architecture de vos hébergements. Nous modélisons entièrement votre domaine pour que l'outil soit prêt à l'emploi."
      className="bg-section-muted"
    >
      <div className="grid border border-slate-200 md:grid-cols-3">
        {[
          {
            label: "01",
            title: "Nous récupérons",
            text: "Plans, menus, tarifs et architecture de vos hébergements.",
          },
          {
            label: "02",
            title: "Nous modélisons",
            text: "Application aux couleurs de votre domaine, prête pour vos mariés.",
          },
          {
            label: "03",
            title: "Vous validez",
            text: "Formation du staff. Mise en service. Zéro paramétrage de votre côté.",
          },
        ].map((step, i) => (
          <article
            key={step.label}
            className={`bg-white p-8 text-center md:p-10 ${
              i < 2 ? "border-b border-slate-200 md:border-b-0 md:border-r" : ""
            }`}
          >
            <span className="font-mono text-[11px] tracking-[0.14em] text-indigo-300">
              {step.label}
            </span>
            <h3 className="mt-4 font-sans text-[24px] font-semibold text-slate-900 md:text-[28px]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm font-normal leading-relaxed text-slate-600">
              {step.text}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
