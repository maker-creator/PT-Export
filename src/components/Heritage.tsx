// src/components/Heritage.tsx
'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Heritage() {
  return (
    <section id="heritage" className="py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content: The Story */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2"
        >
          <span className="text-sm font-inter font-semibold tracking-[0.2em] text-gold uppercase mb-4 block">
            Our Heritage
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-obsidian mb-8 leading-tight">
            Menghubungkan <br />
            Kekayaan <span className="text-emerald italic">Nusantara</span> <br />
            ke Tangan Dunia.
          </h2>
          <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
            Di Zentara, kami percaya bahwa kualitas tidak bisa dikompromikan. Kami bekerja langsung dengan para petani lokal yang merawat tanah vulkanis Indonesia selama beberapa generasi. 
          </p>
          <p className="font-inter text-gray-600 text-lg leading-relaxed mb-10">
            Setiap biji kopi, rempah, dan komoditas turunan diproses melalui standardisasi ketat sebelum berlayar ke pelabuhan internasional. Ini bukan sekadar ekspor, ini adalah dedikasi.
          </p>
          
          {/* Subtle Stats */}
          <div className="flex gap-10 border-t border-gray-100 pt-8">
            <div>
              <h4 className="font-playfair text-3xl font-bold text-obsidian">15+</h4>
              <p className="font-inter text-sm text-gray-500 mt-1">Negara Tujuan</p>
            </div>
            <div>
              <h4 className="font-playfair text-3xl font-bold text-obsidian">A+</h4>
              <p className="font-inter text-sm text-gray-500 mt-1">Export Grade</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content: Aesthetic Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:w-1/2 w-full h-[600px] relative rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <Image 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
            alt="Indonesian Farming Heritage"
            fill
            className="object-cover"
          />
          {/* Inner Shadow for Luxury Depth */}
          <div className="absolute inset-0 border border-white/20 rounded-[2rem] z-10"></div>
        </motion.div>
        
      </div>
    </section>
  );
}