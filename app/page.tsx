'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Combos from '@/components/Combos';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Combos />
      <Features />
      <Footer />
    </main>
  );
}