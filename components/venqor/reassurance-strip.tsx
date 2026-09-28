const proofs = [
  "Offres multi-services",
  "Demandes structurées",
  "Réservation maîtrisée",
]

export function ReassuranceStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-white/60 px-4 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          Conçu pour
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {proofs.map(text => (
            <li key={text} className="text-sm font-medium text-slate-700">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
