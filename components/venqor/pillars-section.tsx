import { SectionShell } from "@/components/venqor/section-shell"

const pillars = [
  {
    eyebrow: "Trésorerie",
    title: "De centre de stress à centre de profit",
    description:
      "Finis les fichiers Excel et les virements manuels. Vos invités réservent et paient leur chambre en 2 clics via Apple Pay, depuis une interface à votre image. L'argent arrive directement sur votre compte — sans aucune avance de votre part.",
  },
  {
    eyebrow: "Conciergerie",
    title: "Le concierge virtuel IA",
    description:
      "« Quel est le code du portail ? », « Avez-vous des lits bébés ? ». Notre IA, nourrie exclusivement par le règlement de votre domaine, répond instantanément aux questions logistiques 24h/24. Jusqu'à 90 % des appels inutiles supprimés.",
  },
  {
    eyebrow: "Data",
    title: "Le trésor de la data",
    description:
      "Sur 150 invités à un mariage, vous ne connaissez souvent que les mariés. Grâce à la réservation des chambres via votre application Venqor, vous constituez mécaniquement une base ultra-qualifiée pour remplir votre basse saison — séminaires, anniversaires, privatisations.",
  },
]

export function PillarsSection() {
  return (
    <SectionShell
      id="piliers"
      eyebrow="Friction zéro"
      title="Trois transformations pour votre domaine."
      className="bg-white"
    >
      <div className="space-y-0">
        {pillars.map((pillar, i) => (
          <article
            key={pillar.title}
            className="border-t border-border py-12 last:border-b md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-16 md:py-16"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {pillar.eyebrow}
              </p>
              <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                {pillar.title}
              </h3>
              <span className="mt-4 hidden font-mono text-xs text-muted-foreground md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft md:mt-1 md:text-base">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
