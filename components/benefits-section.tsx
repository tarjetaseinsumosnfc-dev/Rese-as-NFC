import { Search, Zap, ShieldCheck, Repeat } from 'lucide-react'

const BENEFITS = [
  {
    icon: Search,
    title: 'Apareces primero',
    text: 'Más reseñas mejoran tu posición en Google Maps y te hacen más visible.',
  },
  {
    icon: Zap,
    title: 'Sin fricción',
    text: 'Nada de escribir enlaces ni buscar tu negocio. Un toque y listo.',
  },
  {
    icon: ShieldCheck,
    title: 'Genera confianza',
    text: 'Los clientes nuevos deciden en base a tus estrellas y comentarios.',
  },
  {
    icon: Repeat,
    title: 'Se usa mil veces',
    text: 'Una sola tarjeta capta reseñas todos los días, sin costo adicional.',
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="border-b border-border/60 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
            Por qué funciona para tu negocio
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground text-pretty">
            Las reseñas son el mejor vendedor de tu negocio. Nuestras tarjetas NFC
            las convierten en algo automático.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title}>
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {b.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/15 blur-2xl" />
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold">
                  Tu Negocio
                </span>
                <span className="rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success">
                  Abierto
                </span>
              </div>
              <p className="mt-4 font-display text-4xl font-extrabold">
                4.9<span className="text-lg text-muted-foreground"> / 5.0</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Basado en 312 reseñas
              </p>
              <div className="mt-5 space-y-2">
                {[
                  { stars: '5★', w: '92%' },
                  { stars: '4★', w: '6%' },
                  { stars: '3★', w: '2%' },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <span className="w-8 text-xs text-muted-foreground">
                      {row.stars}
                    </span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                      <span
                        className="block h-full rounded-full bg-star"
                        style={{ width: row.w }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
