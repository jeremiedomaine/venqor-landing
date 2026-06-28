import {
  Banknote,
  CheckCircle2,
  FileSignature,
  Inbox,
  Lock,
  Send,
} from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const steps = [
  { icon: Inbox, title: "Demande", description: "Création du dossier." },
  { icon: Lock, title: "Date bloquée", description: "Échéancier généré automatiquement." },
  { icon: FileSignature, title: "Contrat", description: "Signature en ligne (Signable)." },
  { icon: Send, title: "Acompte", description: "Email + page client privée." },
  { icon: Banknote, title: "Virement", description: "Déclaration client, confirmation en un clic." },
  { icon: CheckCircle2, title: "Clôture", description: "Solde, relances, pilotage saison." },
]

export function JourneySection() {
  return (
    <SectionShell
      id="parcours"
      eyebrow="Le flux"
      title="De la demande à la clôture."
      className="bg-paper-texture"
    >
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="mb-0.5 font-mono text-[10px] text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-0.5 text-sm text-slate-600">{step.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </SectionShell>
  )
}
