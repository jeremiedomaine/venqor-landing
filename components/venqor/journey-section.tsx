import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  FileSignature,
  Inbox,
  Lock,
  Send,
} from "lucide-react"

import { SectionShell } from "@/components/venqor/section-shell"

const steps = [
  {
    icon: Inbox,
    title: "Une demande arrive",
    description: "Création d’un dossier — mariage ou autre type d’événement.",
  },
  {
    icon: Lock,
    title: "La date est bloquée",
    description:
      "L’échéancier acompte / solde se génère automatiquement selon vos règles.",
  },
  {
    icon: FileSignature,
    title: "Le contrat part en signature",
    description: "Envoi Signable — vos signataires signent en ligne.",
  },
  {
    icon: Send,
    title: "L’acompte est demandé",
    description:
      "Email automatique ou manuel. Le client accède à sa page privée.",
  },
  {
    icon: Banknote,
    title: "Virement déclaré, vous confirmez",
    description:
      "Le client déclare son paiement — vous validez ou rejetez en un clic.",
  },
  {
    icon: CheckCircle2,
    title: "Dossier confirmé jusqu’à la clôture",
    description:
      "Solde, relances, suivi — puis pilotage du CA et du remplissage saisonnier.",
  },
]

export function JourneySection() {
  return (
    <SectionShell
      id="parcours"
      eyebrow="Le flux Venqor"
      title="De la première demande au dossier clôturé."
      description="Un parcours unique, pensé pour la logique métier d’un domaine — pas une pile d’outils génériques."
      className="bg-paper-texture"
    >
      <div className="relative">
        <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary/40 via-slate-200 to-transparent md:block" />
        <ol className="flex flex-col gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <li
                key={step.title}
                className="relative flex gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm md:gap-6 md:p-6"
              >
                <div className="relative z-10 flex shrink-0 flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="mb-1.5 font-semibold tracking-tight text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -bottom-3 left-1/2 hidden h-4 w-4 -translate-x-1/2 text-slate-300 md:block" />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </SectionShell>
  )
}
