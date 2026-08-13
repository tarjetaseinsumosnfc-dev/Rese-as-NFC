import { MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { HowItWorks } from '@/components/how-it-works'
import { LiveDemo } from '@/components/live-demo'
import { CombosSection } from '@/components/combos-section'
import { BenefitsSection } from '@/components/benefits-section'
import { CtaFooter } from '@/components/cta-footer'

const WHATSAPP =
  'https://wa.me/50577696182?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20tarjetas%20NFC'

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <HowItWorks />
        <LiveDemo />
        <CombosSection />
        <BenefitsSection />
        <CtaFooter />
      </main>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-success text-success-foreground shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>
    </div>
  )
}
