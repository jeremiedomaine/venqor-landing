import { TopBar } from "@/components/venqor/top-bar"
import { Hero } from "@/components/venqor/hero"
import { ReassuranceStrip } from "@/components/venqor/reassurance-strip"
import { ProblemSection } from "@/components/venqor/problem-section"
import { JourneySection } from "@/components/venqor/journey-section"
import { FeaturesSection } from "@/components/venqor/features-section"
import { TargetSection } from "@/components/venqor/target-section"
import { ClaritySection } from "@/components/venqor/clarity-section"
import { FAQSection } from "@/components/venqor/faq-section"
import { FinalCTASection } from "@/components/venqor/final-cta-section"
import { BookingSection } from "@/components/venqor/booking-section"
import { SiteFooter } from "@/components/venqor/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Hero />
      <ReassuranceStrip />
      <ProblemSection />
      <JourneySection />
      <FeaturesSection />
      <TargetSection />
      <ClaritySection />
      <FAQSection />
      <FinalCTASection />
      <BookingSection />
      <SiteFooter />
    </main>
  )
}
