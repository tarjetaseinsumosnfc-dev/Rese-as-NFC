'use client';

import { Zap, MapPin, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Super Rápido',
    description: 'Un toque en la tarjeta NFC y la reseña se envía automáticamente',
  },
  {
    icon: MapPin,
    title: 'Google Maps Integrado',
    description: 'Las reseñas van directamente a tu perfil de Google My Business',
  },
  {
    icon: BarChart3,
    title: 'Análisis en Tiempo Real',
    description: 'Monitorea tus reseñas y puntuación desde tu panel personalizado',
  },
  {
    icon: Shield,
    title: 'Seguro y Confiable',
    description: 'Tecnología de punta con encriptación de datos de usuario',
  },
];

export default function Features() {
  return (
    <section id="beneficios" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Por qué elegir <span className="text-primary">Reseñas NFC</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Las mejores características para tu negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-xl border border-gray-800 hover:border-primary bg-gradient-to-br from-gray-900/50 to-dark hover:from-primary/10 hover:to-dark transition"
              >
                <div className="mb-4 inline-block p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}