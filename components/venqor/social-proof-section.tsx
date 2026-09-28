/** Preuve sociale — placeholders pour logos / domaines prestige */
export function SocialProofSection() {
  const domains = [
    "Domaine de la Mourachonne",
    "Château Les Pins",
    "Mas des Oliviers",
    "Domaine Saint-Clair",
  ]

  return (
    <section className="border-y border-border bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
          L&apos;infrastructure choisie par les domaines accueillant plus de 40
          mariages par an.
        </p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {domains.map(name => (
            <li
              key={name}
              className="font-display text-lg font-medium tracking-tight text-ink/35 transition-colors hover:text-ink/60 md:text-xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
