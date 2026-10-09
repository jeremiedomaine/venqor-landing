"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionShell } from "@/components/venqor/section-shell"
import { faqs } from "@/lib/faq"

export function FAQSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Questions fréquentes"
      className="bg-section-muted"
    >
      <div className="mx-auto max-w-2xl border border-slate-200 bg-white">
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="border-slate-200 px-6"
            >
              <AccordionTrigger className="py-5 text-left text-sm font-medium text-slate-900 hover:no-underline md:text-[15px]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm font-normal leading-relaxed text-slate-600">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  )
}
