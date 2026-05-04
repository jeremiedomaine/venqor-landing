import { TopBar } from "@/components/venqor/top-bar"
import { Hero } from "@/components/venqor/hero"
import { BookingSection } from "@/components/venqor/booking-section"

export default function HomePage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <TopBar />
      <Hero />
      <BookingSection />
    </main>
  )
}
