// src/components/Hero.tsx
'use client';

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const waLink = "https://wa.me/6285157362339?text=Halo%20Zentara,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20ekspor%20rempah%20premium.";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1550252134-44ed56f2e245?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Cinnamon Spices"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[90%] max-w-5xl p-8 md:p-16 rounded-[2.5rem] backdrop-blur-xl bg-white/80 border border-white/50 shadow-[0_24px_80px_rgba(156,82,33,0.08)] text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-obsidian mb-6 leading-tight"
        >
          Curating Indonesia's <br className="hidden md:block" />
          <span className="text-spice italic">Aromatic Treasures</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-inter text-base md:text-lg text-gray-600 mb-10 font-normal max-w-2xl mx-auto leading-relaxed"
        >
          Kami mengurasi emas aromatik mentah terbaik dengan standar kualitas ekspor global tingkat atas. Hanya untuk mitra premium yang menghargai keaslian rasa Nusantara.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-spice text-white px-8 py-4 rounded-full font-inter text-sm font-semibold hover:bg-spice/90 transition-all duration-300 shadow-lg shadow-spice/20 group w-full sm:w-auto"
          >
            Konsultasi Otoritas Rempah
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button 
            onClick={() => scrollToSection('commodities')}
            className="flex items-center justify-center bg-white border border-gray-200 text-obsidian px-8 py-4 rounded-full font-inter text-sm font-semibold hover:bg-gray-50 transition-all duration-300 shadow-sm w-full sm:w-auto"
          >
            Lihat Koleksi Rempah
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}