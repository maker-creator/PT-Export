// src/components/DirectorMessage.tsx
'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function DirectorMessage() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto bg-slate-50/50 rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
        
        <div className="md:w-1/3 relative w-48 h-48 md:w-full md:h-80 rounded-full md:rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <Image 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
            alt="Managing Director"
            fill
            sizes="(max-width: 768px) 192px, 33vw"
            className="object-cover"
          />
        </div>

        <div className="md:w-2/3">
          <svg className="w-10 h-10 text-gold mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-obsidian mb-6 leading-relaxed">
            "Bagi kami, ekspor rempah bukan sekadar memindahkan barang. Ini adalah tentang memindahkan mahakarya alam."
          </h3>
          <p className="font-inter text-gray-500 mb-8 leading-relaxed">
            Kami membangun Zentara dengan satu visi: menjembatani kualitas autentik rempah Nusantara dengan kebutuhan absolut pasar global. Setiap kontainer yang kami kirimkan membawa reputasi perusahaan kami, dan yang lebih penting, mengamankan bisnis Anda.
          </p>
          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-playfair text-2xl font-bold text-obsidian">Muhammad Rizal Fahrezy</h4>
            <p className="font-inter text-sm text-gray-500 mt-1 uppercase tracking-widest font-semibold">Managing Director, Zentara.</p>
          </div>
        </div>

      </div>
    </section>
  );
}