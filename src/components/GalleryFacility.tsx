// src/components/GalleryFacility.tsx
'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryFacility() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-inter font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Transparency</span>
            <h2 className="font-playfair text-4xl font-bold text-obsidian">Inside <span className="text-spice italic">Zentara.</span></h2>
          </div>
          <p className="font-inter text-gray-500 text-sm max-w-md">
            Melihat langsung fasilitas pemrosesan rempah dan dedikasi tim kami. Standar kebersihan dan efisiensi tingkat dunia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto] gap-4 h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <Image src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2000&auto=format&fit=crop" alt="Warehouse" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-500 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1"><path d="M5 3l14 9-14 9V3z"/></svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-inter text-xs tracking-wider uppercase mb-1 drop-shadow-md">Central Facility</p>
              <p className="font-playfair text-xl font-bold drop-shadow-md">Storage & Sorting Hub</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden group h-[290px] md:h-auto"
          >
            <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" alt="Quality Control Lab" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-playfair text-lg font-bold">Quality Control Lab</p>
            </div>
          </motion.div>

          {/* Kotak warna Emerald diubah menjadi warna Spice */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden group h-[290px] md:h-auto bg-spice p-8 flex flex-col justify-end text-white"
          >
            <div className="mb-auto">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mb-4 opacity-70"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h3 className="font-playfair text-2xl font-bold mb-2">100% Certified</h3>
              <p className="font-inter text-xs text-white/80 line-clamp-3">Semua produk mentah melewati tahapan fumigasi dan uji lab esensial sebelum masuk kontainer ekspor.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}