'use client';

import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2">
              <span className="text-sm text-blue-300 font-semibold">
                ✨ Tecnología NFC para negocios locales
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Multiplica tus reseñas en
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Google Maps
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Soluciones NFC para negocios locales en Nicaragua. Tus clientes tocan una tarjeta y dejan una reseña de 5 estrellas en segundos.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-400">Un toque y tu cliente ya te calificó</span>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button className="bg-primary hover:bg-accent text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition transform hover:scale-105">
                Ver combos
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-primary/50 hover:border-accent text-white font-bold px-8 py-3 rounded-lg transition hover:bg-primary/10">
                Probar demo en vivo
              </button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
              <div className="bg-dark rounded-xl aspect-square flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-sm text-gray-400">Interfaz intuitiva y moderna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Smartphone } from 'lucide-react';