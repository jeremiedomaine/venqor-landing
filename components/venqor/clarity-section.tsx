import { Ban, Check } from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const notList = [
  {
    title: "Logiciel de compta",
    message:
      "Venqor ne remplace pas votre compta — vous facturez dans votre outil habituel.",
  },
  {
    title: "CRM générique",
    message:
      "Pensé pour les lieux de réception, pas pour tout le B2B (Salesforce, HubSpot…).",
  },
  {
    title: "App wedding planner",
    message:
      "Une page client élégante pour paiements et infos — pas un livret mariage riche ni une app mobile couple.",
  },
  {
    title: "Paiement carte (aujourd’hui)",
    message:
      "Le flux principal est le virement IBAN. Confirmation manuelle — simple et traçable.",
  },
]

const diffRows = [
  { alt: "Excel + Gmail", limit: "Aucune automation, pas de portail", venqor: "Flux structuré + page client" },
  { alt: "CRM générique", limit: "Pas de logique date bloquée / acompte", venqor: "Pipeline métier natif" },
  { alt: "Outils wedding US", limit: "Peu adaptés au marché FR", venqor: "Virement IBAN, marché français" },
  { alt: "Compta seule", limit: "Pas de suivi commercial amont", venqor: "De la demande à l’encaissement" },
]

export function ClaritySection() {
  return (
    <SectionShell
      id="clarte"
      eyebrow="Transparence"
      title="Ce que Venqor est — et ce qu’il n’est pas."
      description="Une promesse crédible : on ne prétend pas tout faire. On excelle sur le parcours commercial et financier de votre domaine."
      className="bg-white/60"
      centered={false}
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Ban className="h-5 w-5 text-slate-400" />
            Hors périmètre V1
          </h3>
          <ul className="space-y-3">
            {notList.map(item => (
              <li
                key={item.title}
                className="rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-3"
              >
                <p className="text-sm font-medium text-slate-900">
                  {item.title}
                </p>
                <p className="mt-0.5 text-sm text-slate-600">{item.message}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Check className="h-5 w-5 text-primary" />
            Venqor vs alternatives
          </h3>
          <div className="overflow-hidden rounded-2xl border border-slate-200/90">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="px-4 py-3 font-medium text-slate-500">Alternative</th>
                  <th className="hidden px-4 py-3 font-medium text-slate-500 sm:table-cell">
                    Limite
                  </th>
                  <th className="px-4 py-3 font-medium text-primary">Venqor</th>
                </tr>
              </thead>
              <tbody>
                {diffRows.map(row => (
                  <tr
                    key={row.alt}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {row.alt}
                    </td>
                    <td className="hidden px-4 py-3 text-slate-600 sm:table-cell">
                      {row.limit}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.venqor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
