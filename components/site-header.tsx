'use client'

import { Nfc } from 'lucide-react'

const NAV = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Combos', href: '#combos' },
  { label: 'Beneficios', href: '#beneficios' },
]

const WHATSAPP =
  'https://wa.me/50577696182?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20tarjetas%20NFC'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Nfc className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-tight">
              Reseñas NFC
            </span>
            <span className="block text-xs text-muted-foreground">Nicaragua</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Escríbenos
        </a>
      </div>
    </header>
  )
}
