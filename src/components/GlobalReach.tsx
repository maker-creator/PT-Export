// src/components/GlobalReach.tsx
'use client';

import { motion } from "framer-motion";

export default function GlobalReach() {
  const stats = [
    { value: "500+", label: "Ton Ekspor Tahunan" },
    { value: "15", label: "Negara Tujuan" },
    { value: "100%", label: "Kepatuhan Regulasi" },
    { value: "50+", label: "Mitra Gapoktan" }
  ];

  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Super Subtle Map Graphic (Samar di atas Putih) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-auto max-w-7xl text-gray-100">
          <path fill="currentColor" d="M150,150 Q250,50 350,150 T550,150 T750,150 T950,150" fillOpacity="0" stroke="currentColor" strokeWidth="1" strokeDasharray="15 15"/>
          <circle cx="150" cy="150" r="8" />
          <circle cx="350" cy="150" r="8" />
          <circle cx="550" cy="150" r="12" className="animate-pulse text-emerald/50" fill="currentColor"/>
          <circle cx="750" cy="150" r="8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-xs font-inter font-bold tracking-[0.3em] text-gold uppercase mb-4 block">Global Footprint</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-obsidian leading-tight">
            Kapasitas Raksasa. <br />
            <span className="text-emerald/80 italic">Keandalan Presisi.</span>
          </h2>
          <div className="w-20 h-[1px] bg-gray-200 mx-auto mt-10 mb-10"></div>
          <p className="font-inter text-gray-500 text-base leading-relaxed">
            Jaringan logistik korporat kami membentang melintasi benua, mengamankan rantai pasok global Anda dari gangguan sekecil apa pun dengan efisiensi tingkat tinggi.
          </p>
        </div>

        {/* Stats Grid dengan Garis Tipis Mewah */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-100 border border-gray-100 rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] bg-white">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-center py-16 px-6"
            >
              <h3 className="font-playfair text-5xl md:text-6xl font-bold text-obsidian mb-3 tracking-tight">{stat.value}</h3>
              <p className="font-inter text-[11px] text-gray-400 uppercase tracking-[0.2em] font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}