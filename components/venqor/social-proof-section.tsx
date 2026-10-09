export function SocialProofSection() {
  const domains = [
    "Domaine de la Bastide",
    "Château Les Pins",
    "Mas des Oliviers",
    "Domaine Saint-Clair",
  ]

  return (
    <section className="border-b border-slate-200 bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow mb-4">Références</p>
        <p className="mx-auto max-w-lg font-normal leading-[1.6] text-slate-600 md:text-lg">
          L&apos;expérience digitale offerte par les domaines qui accueillent
          15 à 50 réceptions par an.
        </p>
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
          {domains.map(name => (
            <li
              key={name}
              className="font-sans text-lg font-medium tracking-[-0.01em] text-slate-900/35 transition-colors hover:text-primary md:text-xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
