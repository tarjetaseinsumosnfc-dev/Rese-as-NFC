'use client';

import { Check } from 'lucide-react';

const combos = [
  {
    name: 'Combo Starter',
    price: '20',
    description: 'Ideal para negocios individuales',
    features: [
      'Hasta 100 reseñas/mes',
      '1 Tarjeta NFC',
      'Panel básico',
      'Soporte por email',
    ],
  },
  {
    name: 'Combo Restaurante',
    price: '45',
    description: 'Para establecimientos de comida',
    features: [
      'Hasta 500 reseñas/mes',
      '5 Tarjetas NFC',
      'Panel avanzado',
      'Soporte prioritario',
      'Reportes analíticos',
    ],
    popular: true,
  },
  {
    name: 'Combo Gastrobar',
    price: '60',
    description: 'Para bares y restaurantes premium',
    features: [
      'Reseñas ilimitadas',
      '10 Tarjetas NFC',
      'Panel completo',
      'Soporte 24/7',
      'Reportes en tiempo real',
      'Integraciones personalizadas',
    ],
  },
];

export default function Combos() {
  return (
    <section id="combos" className="py-20 bg-gradient-to-b from-dark via-blue-950/20 to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Elige tu <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">combo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Planes flexibles diseñados para cada tipo de negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div
              key={combo.name}
              className={`relative rounded-2xl border transition transform hover:scale-105 ${
                combo.popular
                  ? 'border-primary bg-gradient-to-b from-primary/20 to-dark md:scale-105'
                  : 'border-gray-700 bg-gradient-to-b from-gray-900/50 to-dark hover:border-primary'
              }`}
            >
              {combo.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{combo.name}</h3>
                  <p className="text-sm text-gray-400">{combo.description}</p>
                </div>
                
                <div className="space-y-1">
                  <span className="text-4xl font-bold">${combo.price}</span>
                  <p className="text-sm text-gray-400">/mes</p>
                </div>
                
                <button
                  className={`w-full py-3 rounded-lg font-bold transition ${
                    combo.popular
                      ? 'bg-primary hover:bg-accent text-white'
                      : 'border border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Seleccionar
                </button>
                
                <div className="space-y-3 border-t border-gray-700/50 pt-6">
                  {combo.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}