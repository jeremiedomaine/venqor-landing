import { Ban, Check } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const notList = [
  { title: "Compta", message: "Vos factures légales restent dans votre outil habituel." },
  { title: "CRM générique", message: "Pensé pour les domaines, pas tout le B2B." },
  { title: "App wedding", message: "Page client pour paiements — pas un livret mariage." },
  { title: "Carte bancaire", message: "Flux principal : virement IBAN, confirmé par vous." },
]

const diffRows = [
  { alt: "Excel + Gmail", venqor: "Flux + portail client" },
  { alt: "CRM générique", venqor: "Pipeline métier natif" },
  { alt: "Compta seule", venqor: "Demande → encaissement" },
]

export function ClaritySection() {
  return (
    <SectionShell
      id="clarte"
      eyebrow="Transparence"
      title="Ce que Venqor n’est pas."
      className="bg-white/60"
      centered={false}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="space-y-2">
          {notList.map(item => (
            <li
              key={item.title}
              className="flex gap-3 rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-3 text-sm"
            >
              <Ban className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <span>
                <span className="font-medium text-slate-900">{item.title}</span>
                {" — "}
                <span className="text-slate-600">{item.message}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="overflow-hidden rounded-2xl border border-slate-200/90">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-2.5 font-medium text-slate-500">Au lieu de</th>
                <th className="px-4 py-2.5 font-medium text-primary">Venqor</th>
              </tr>
            </thead>
            <tbody>
              {diffRows.map(row => (
                <tr key={row.alt} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-2.5 text-slate-600">{row.alt}</td>
                  <td className="px-4 py-2.5 font-medium text-slate-900">
                    <Check className="mr-1.5 inline h-3.5 w-3.5 text-primary" />
                    {row.venqor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionShell>
  )
}
