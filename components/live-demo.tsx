'use client'

import { useState } from 'react'
import { Nfc, Star, Wifi } from 'lucide-react'

export function LiveDemo() {
  const [state, setState] = useState<'idle' | 'tapping' | 'done'>('idle')

  function simulate() {
    if (state === 'tapping') return
    setState('tapping')
    window.setTimeout(() => setState('done'), 1100)
  }

  return (
    <section id="demo" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Wifi className="size-3.5" aria-hidden="true" />
                Prueba en vivo
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Experimenta lo rápido que es
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground text-pretty">
                Toca el botón para simular el toque de una tarjeta NFC. Así de
                simple será para tus clientes dejarte 5 estrellas.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative flex h-56 w-full max-w-sm items-center justify-center rounded-2xl border border-border bg-background/60">
                {state !== 'done' ? (
                  <button
                    type="button"
                    onClick={simulate}
                    className="group flex flex-col items-center gap-3 outline-none"
                    aria-label="Simular toque de tarjeta NFC"
                  >
                    <span className="relative flex size-24 items-center justify-center">
                      {state === 'tapping' && (
                        <>
                          <span className="absolute inline-flex size-24 animate-ping rounded-full bg-primary/40" />
                          <span className="absolute inline-flex size-16 animate-ping rounded-full bg-primary/50 [animation-delay:150ms]" />
                        </>
                      )}
                      <span className="relative flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                        <Nfc className="size-9" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="text-sm font-medium">
                      {state === 'tapping' ? 'Conectando…' : 'Dejar 5 estrellas'}
                    </span>
                  </button>
                ) : (
                  <div className="w-full max-w-xs animate-in fade-in zoom-in-95 rounded-xl border border-border bg-card p-5 shadow-lg duration-300">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold">
                        G
                      </span>
                      <div className="leading-tight">
                        <p className="text-sm font-semibold">Tu Negocio</p>
                        <p className="text-xs text-muted-foreground">
                          Reseña en Google
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-7 fill-star text-star animate-in zoom-in duration-300"
                          style={{ animationDelay: `${i * 90}ms` }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      ¡Reseña enviada en 3 segundos!
                    </p>
                    <button
                      type="button"
                      onClick={() => setState('idle')}
                      className="mt-4 w-full rounded-full border border-border bg-secondary py-2 text-xs font-semibold transition-colors hover:bg-accent"
                    >
                      Probar de nuevo
                    </button>
                  </div>
                )}
              </div>
              <p className="text-center text-xs text-muted-foreground">
                Toca para simular el acercamiento del teléfono
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
