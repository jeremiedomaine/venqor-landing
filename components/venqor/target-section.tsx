import { SectionShell } from "@/components/venqor/section-shell"

const personas = [
  "Domaines et châteaux de réception",
  "Lieux événementiels avec capacité d'hébergement",
  "Complexes intégrant un service traiteur ou des partenaires",
]

export function TargetSection() {
  return (
    <SectionShell
      id="pour-qui"
      eyebrow="Pour qui"
      title="Adapté aux établissements multi-services."
      className="bg-white"
    >
      <ul className="mx-auto max-w-2xl space-y-0">
        {personas.map(label => (
          <li
            key={label}
            className="border-b border-slate-200 py-5 text-center font-display text-lg text-slate-800 first:border-t md:text-xl"
          >
            {label}
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}
