import { TopBar } from "@/components/venqor/top-bar"
import { Hero } from "@/components/venqor/hero"
import { AtmosphereStrip } from "@/components/venqor/atmosphere-strip"
import { SocialProofSection } from "@/components/venqor/social-proof-section"
import { WowSection } from "@/components/venqor/wow-section"
import { QuoteSection } from "@/components/venqor/quote-section"
import { OrganizationSection } from "@/components/venqor/organization-section"
import { SupportSection } from "@/components/venqor/support-section"
import { DoneForYouSection } from "@/components/venqor/done-for-you-section"
import { PricingSection } from "@/components/venqor/pricing-section"
import { FAQSection } from "@/components/venqor/faq-section"
import { FinalCTASection } from "@/components/venqor/final-cta-section"
import { BookingSection } from "@/components/venqor/booking-section"
import { SiteFooter } from "@/components/venqor/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TopBar />
      <Hero />
      <AtmosphereStrip />
      <SocialProofSection />
      <WowSection />
      <QuoteSection />
      <OrganizationSection />
      <SupportSection />
      <DoneForYouSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <BookingSection />
      <SiteFooter />
    </main>
  )
}
