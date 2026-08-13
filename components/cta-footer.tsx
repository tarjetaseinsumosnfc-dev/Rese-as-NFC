import { MessageCircle, Nfc, Phone, Mail } from 'lucide-react'

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
    </svg>
  )
}

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/profile.php?id=61593179371249',
    Icon: FacebookIcon,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/tarjetaseinsumosnfc',
    Icon: InstagramIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/50577696182',
    Icon: MessageCircle,
  },
]

const WHATSAPP =
  'https://wa.me/50577696182?text=Hola%2C%20quiero%20coordinar%20mi%20pedido%20de%20tarjetas%20NFC'

export function CtaFooter() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground">
            <div className="bg-grid absolute inset-0 opacity-20" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
                ¿Listo para llenar tu negocio de reseñas 5 estrellas?
              </h2>
              <p className="mt-4 text-primary-foreground/85 text-pretty">
                Escríbenos por WhatsApp y coordinamos tu pedido hoy mismo. Envíos
                a todo Nicaragua.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Nfc className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold">Reseñas NFC Nicaragua</span>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <a
              href="https://wa.me/50577696182"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="size-4 text-primary" aria-hidden="true" />
              +505 7769 6182
            </a>
            <a
              href="mailto:tarjetaseinsumosnfc@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4 text-primary" aria-hidden="true" />
              tarjetaseinsumosnfc@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 — Soluciones NFC en Nicaragua
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
