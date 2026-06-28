import { Building2, Link2, ShieldCheck } from "lucide-react"

const proofs = [
  {
    icon: Building2,
    text: "Conçu pour châteaux, domaines et lieux de réception",
  },
  {
    icon: Link2,
    text: "Vos clients n’ont pas besoin de créer un compte",
  },
  {
    icon: ShieldCheck,
    text: "Vous gardez la main sur la confirmation des virements",
  },
]

export function ReassuranceStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-primary/[0.04] px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {proofs.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 text-sm font-medium text-slate-700"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            {text}
          </div>
        ))}
      </div>
    </section>
  )
}
