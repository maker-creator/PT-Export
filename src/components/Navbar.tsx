// src/components/Navbar.tsx
'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 z-50 w-[92%] max-w-6xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full px-6 md:px-10 h-16 flex items-center justify-between"
    >
      <div className="font-playfair text-xl font-bold text-obsidian tracking-wider cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        ZENTARA<span className="text-emerald">.</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-inter text-[11px] font-bold tracking-widest text-gray-500 uppercase">
        <button onClick={() => scrollToSection('heritage')} className="hover:text-obsidian transition-colors cursor-pointer">Heritage</button>
        <button onClick={() => scrollToSection('process')} className="hover:text-obsidian transition-colors cursor-pointer">Process</button>
        <button onClick={() => scrollToSection('gallery')} className="hover:text-obsidian transition-colors cursor-pointer">Gallery</button>
        <button onClick={() => scrollToSection('commodities')} className="hover:text-obsidian transition-colors cursor-pointer">Commodities</button>
        <button onClick={() => scrollToSection('faq')} className="hover:text-obsidian transition-colors cursor-pointer">FAQ</button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-obsidian transition-colors cursor-pointer">Inquiry</button>
      </div>

      <div className="flex items-center gap-4 text-gray-400">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-obsidian transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-obsidian transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5.63 5.63 0 0 1-1.04-.1z"/></svg>
        </a>
      </div>
    </motion.nav>
  );
}