'use client';

import Link from 'next/link';
import { Smartphone } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-dark/95 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Smartphone className="w-6 h-6 text-primary group-hover:text-accent transition" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Reseñas NFC
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#como-funciona" className="text-sm hover:text-primary transition">
              Cómo funciona
            </Link>
            <Link href="#combos" className="text-sm hover:text-primary transition">
              Combos
            </Link>
            <Link href="#beneficios" className="text-sm hover:text-primary transition">
              Beneficios
            </Link>
          </nav>
          
          <button className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg transition">
            Suscribirse
          </button>
        </div>
      </div>
    </header>
  );
}