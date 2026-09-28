import { TopBar } from "@/components/venqor/top-bar"
import { Hero } from "@/components/venqor/hero"
import { SocialProofSection } from "@/components/venqor/social-proof-section"
import { DoneForYouSection } from "@/components/venqor/done-for-you-section"
import { PillarsSection } from "@/components/venqor/pillars-section"
import { PricingSection } from "@/components/venqor/pricing-section"
import { FAQSection } from "@/components/venqor/faq-section"
import { FinalCTASection } from "@/components/venqor/final-cta-section"
import { BookingSection } from "@/components/venqor/booking-section"
import { SiteFooter } from "@/components/venqor/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Hero />
      <SocialProofSection />
      <DoneForYouSection />
      <PillarsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <BookingSection />
      <SiteFooter />
    </main>
  )
}
