import { Smartphone, MapPin, TrendingUp } from 'lucide-react'

const STEPS = [
  {
    icon: Smartphone,
    title: 'El cliente acerca su teléfono',
    text: 'Sin apps, sin escanear códigos. Solo acerca el celular a la tarjeta NFC.',
  },
  {
    icon: MapPin,
    title: 'Se abre tu página de Google',
    text: 'La tarjeta lo lleva directo a la ventana para dejar una reseña de tu negocio.',
  },
  {
    icon: TrendingUp,
    title: 'Suben tus estrellas',
    text: 'Más reseñas positivas te hacen aparecer más arriba y ganar más clientes.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">
            Un toque y tu cliente ya te calificó
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Reseñas en 3 segundos, sin fricción
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            La forma más rápida de convertir a un cliente satisfecho en una reseña
            de 5 estrellas.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
              >
                <span className="absolute right-5 top-4 font-display text-4xl font-bold text-muted-foreground/15">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
