import { Nfc, Star } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-40 top-0 size-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Nfc className="size-3.5" aria-hidden="true" />
            Tecnología NFC para negocios locales
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Multiplica tus reseñas en{' '}
            <span className="text-primary">Google Maps</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Soluciones NFC para negocios locales en Nicaragua. Tus clientes tocan
            una tarjeta y dejan una reseña de 5 estrellas en segundos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#combos"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Ver combos
            </a>
            <a
              href="#demo"
              className="inline-flex h-11 items-center rounded-full border border-border bg-secondary px-6 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
            >
              Probar demo en vivo
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-star text-star" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Un toque y tu cliente ya te calificó
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/20 blur-2xl" />
          <Image
            src="/hero-phone.png"
            alt="Cliente dejando una reseña de 5 estrellas en Google desde su teléfono tras tocar una tarjeta NFC"
            width={720}
            height={720}
            priority
            className="w-full rounded-3xl border border-border/70 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
