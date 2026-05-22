// src/components/GlobalPartners.tsx
'use client';

import { motion } from "framer-motion";

export default function GlobalPartners() {
  const sectors = [
    { name: "Multinational Roasteries", desc: "Menyuplai biji kopi grade spesialti untuk jaringan kafe global." },
    { name: "Cosmetic Laboratories", desc: "Bahan baku minyak turunan untuk industri kecantikan Eropa." },
    { name: "F&B Conglomerates", desc: "Rempah mentah skala tonase untuk pabrik manufaktur makanan." },
    { name: "Boutique Spice Blenders", desc: "Kurasi vanili premium untuk artisan kuliner kelas atas." }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-inter font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block">Trusted By</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-obsidian">
            Mitra Suplai untuk Industri <br className="hidden md:block"/> Paling Menuntut di Dunia.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="p-8 border border-gray-100 rounded-[2rem] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 bg-white group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-emerald"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-obsidian mb-3 leading-snug">{sector.name}</h3>
              <p className="font-inter text-sm text-gray-500 leading-relaxed font-light">{sector.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}