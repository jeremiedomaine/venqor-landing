"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionShell } from "@/components/venqor/section-shell"

const faqs = [
  { q: "Venqor remplace ma compta ?", a: "Non. Suivi dossiers et encaissements uniquement." },
  { q: "Mes clients s’inscrivent ?", a: "Non. Un lien privé vers leur page, sans compte." },
  { q: "Uniquement les mariages ?", a: "Non. Mariage + autres types (séminaire, anniversaire…)." },
  { q: "Comment confirmer un paiement ?", a: "Le client déclare le virement, vous validez en un clic." },
  { q: "Relances personnalisables ?", a: "Oui — emails, objets et déclencheurs configurables." },
  { q: "Paiement par carte ?", a: "Aujourd’hui : virement IBAN sur la page client." },
]

export function FAQSection() {
  return (
    <SectionShell id="faq" eyebrow="FAQ" title="Questions fréquentes" className="bg-paper-texture">
      <Accordion
        type="single"
        collapsible
        className="rounded-2xl border border-slate-200/90 bg-white px-6 shadow-sm"
      >
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-sm font-medium text-slate-900 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-600">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  )
}
