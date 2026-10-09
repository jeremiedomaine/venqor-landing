const moods = [
  { title: "Patrimoine", text: "Châteaux, mas & domaines d'exception" },
  { title: "Événementiel", text: "Mariages haut de gamme, 15 à 50 réceptions par an" },
  { title: "Done-for-you", text: "Sur devis · Clés en main" },
]

export function AtmosphereStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-900 px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 text-center md:grid-cols-3 md:gap-8">
        {moods.map(item => (
          <div key={item.title} className="md:border-r md:border-white/10 md:last:border-0">
            <p className="font-sans text-[28px] font-medium text-white">
              {item.title}
            </p>
            <p className="mt-2 text-sm font-normal text-white/65">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
