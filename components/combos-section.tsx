import { Check, Gift } from 'lucide-react'

const WHATSAPP_BASE =
  'https://wa.me/50577696182?text=Hola%2C%20quiero%20pedir%20el%20'

const COMBOS = [
  {
    tag: 'Negocio Individual',
    name: 'Combo Starter',
    price: '20',
    desc: '1 Tarjeta NFC Personalizada + 1 Soporte de escritorio para mesa.',
    perk: 'Soporte de escritorio GRATIS',
    featured: false,
  },
  {
    tag: 'Para equipos de servicio',
    name: 'Combo Restaurante & Gastrobar',
    price: '45',
    desc: '1 Tarjeta con soporte para caja + 2 Tarjetas con Lanyards para meseros + 1 Sticker NFC.',
    perk: 'Sticker NFC de regalía',
    featured: true,
  },
  {
    tag: 'Vendedores y delivery',
    name: 'Combo Movilidad',
    price: '30',
    desc: '1 Tarjeta de billetera + 1 Llavero NFC + 2 Stickers adhesivos NFC.',
    perk: 'Lanyard de regalía',
    featured: false,
  },
]

export function CombosSection() {
  return (
    <section id="combos" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Combos de inventario
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Elige el paquete ideal para tu tipo de negocio. Todos incluyen
            tarjetas NFC personalizadas y listas para usar.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-5 md:grid-cols-3">
          {COMBOS.map((combo) => (
            <div
              key={combo.name}
              className={`relative flex h-full flex-col rounded-2xl border bg-card p-6 ${
                combo.featured
                  ? 'border-primary shadow-[0_0_0_1px_var(--primary)]'
                  : 'border-border'
              }`}
            >
              {combo.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Más popular
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                {combo.tag}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {combo.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold">
                  ${combo.price}
                </span>
                <span className="text-sm text-muted-foreground">USD</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {combo.desc}
              </p>

              {combo.perk && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-star/10 px-3 py-2 text-xs font-medium text-star">
                  <Gift className="size-4" aria-hidden="true" />
                  {combo.perk}
                </p>
              )}

              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(combo.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                  combo.featured
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-secondary text-secondary-foreground'
                }`}
              >
                Pedir este combo
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Check className="size-4 text-success" aria-hidden="true" />
          Personalización incluida — tu logo y tu enlace de Google
        </p>
      </div>
    </section>
  )
}
