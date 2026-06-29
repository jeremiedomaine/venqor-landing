"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/faq"
import { SectionShell } from "@/components/venqor/section-shell"

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
