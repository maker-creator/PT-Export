// src/components/Sustainability.tsx
'use client';

import { motion } from "framer-motion";

export default function Sustainability() {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
        
        {/* Content Area - Updated for Organic Spice Values */}
        <div className="lg:w-1/2">
          <span className="text-xs font-inter font-bold tracking-[0.3em] text-gold uppercase mb-4 block">ESG Commitment</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-obsidian mb-8 leading-tight">
            Warisan Alam <span className="text-emerald/80 italic">Lestari.</span> Dampak Sosial Lokal.
          </h2>
          <div className="w-16 h-1 bg-emerald/10 mb-10 rounded-full"></div>
          <p className="font-inter text-gray-600 text-lg leading-relaxed mb-10 font-light">
            Di Zentara, kami menerapkan prinsip Fair Trade untuk mengamankan kesejahteraan petani rempah lokal Nusantara. Kami memastikan praktik pertanian bebas pestisida berlebih, menjaga kesuburan tanah vulkanis, dan menggunakan material kemasan ramah lingkungan untuk ketahanan aroma mentah melintasi samudra.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
            <span className="border border-gray-200 rounded-full px-6 py-2.5 font-inter text-xs font-semibold tracking-wider text-obsidian hover:border-emerald/50 transition-colors cursor-default">Fair Trade Standard</span>
            <span className="border border-gray-200 rounded-full px-6 py-2.5 font-inter text-xs font-semibold tracking-wider text-obsidian hover:border-emerald/50 transition-colors cursor-default">Eco-Friendly Supply</span>
            <span className="border border-gray-200 rounded-full px-6 py-2.5 font-inter text-xs font-semibold tracking-wider text-obsidian hover:border-emerald/50 transition-colors cursor-default">Target Pertanian Organik (2030)</span>
          </div>
        </div>
        
        {/* Luxury "Floating" Card with pure white vibe */}
        <div className="lg:w-1/3 w-full relative flex items-center justify-center">
          <motion.div 
            initial={{ rotate: 3, scale: 0.95 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", damping: 20 }}
            className="bg-white text-obsidian p-10 rounded-[2.5rem] shadow-[0_24px_80px_rgba(0,0,0,0.06)] border border-gray-100 relative z-10"
          >
            {/* Subtle Emerald Accent Icon */}
            <svg className="w-12 h-12 text-emerald/30 mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h4 className="font-playfair text-2xl font-bold text-obsidian mb-4">Zentara Green Initiative</h4>
            <p className="font-inter text-gray-500 text-sm leading-relaxed font-light">Menuju aktivitas pemrosesan rempah mentah dan logistik yang sepenuhnya netral karbon pada tahun 2030, menjamin rantai suplai aromatik masa depan.</p>
          </motion.div>
          {/* Subtle glow effect behind card */}
          <div className="absolute inset-0 bg-emerald/5 rounded-[2.5rem] scale-105 blur-3xl z-0"></div>
        </div>
      </div>
    </section>
  );
}