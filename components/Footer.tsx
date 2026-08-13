'use client';

import Link from 'next/link';
import { Smartphone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-dark via-dark to-transparent border-t border-gray-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Reseñas NFC</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Multiplica tus reseñas en Google Maps con tecnología NFC
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-white">Producto</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition">
                  Combos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition">
                  Beneficios
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@resenasnfc.com" className="hover:text-primary transition">
                  info@resenasnfc.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Nicaragua</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Reseñas NFC Nicaragua. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-primary text-sm transition">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary text-sm transition">
              Facebook
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary text-sm transition">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}