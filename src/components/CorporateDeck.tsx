// src/components/CorporateDeck.tsx
'use client';

import { motion } from "framer-motion";

export default function CorporateDeck() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl rounded-[3rem] border border-gray-100 bg-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Abstract subtle circle background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl z-0"></div>
        
        <div className="relative z-10">
          <svg className="w-12 h-12 text-obsidian mx-auto mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
          </svg>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-obsidian mb-6">
            Unduh <span className="italic">Corporate Deck</span> Kami.
          </h2>
          <p className="font-inter text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Dapatkan detail komprehensif mengenai profil legal Zentara, spesifikasi teknis lab setiap komoditas, dan struktur *pricing* estimasi dalam format PDF resmi perusahaan.
          </p>
          <button 
            className="inline-flex items-center gap-3 bg-white text-obsidian border border-gray-200 px-8 py-4 rounded-full font-inter text-sm font-bold hover:border-obsidian transition-colors hover:shadow-lg hover:-translate-y-1 duration-300"
          >
            <span>Download PDF (2.4 MB)</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}