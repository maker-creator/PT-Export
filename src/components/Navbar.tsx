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
      className="fixed top-6 left-1/2 z-50 w-[92%] max-w-6xl bg-white/70 backdrop-blur-2xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full px-6 md:px-10 h-16 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="font-playfair text-xl font-bold text-obsidian tracking-wider">
        ZENTARA<span className="text-emerald">.</span>
      </div>

      {/* Navigation Links - Updated for Spices */}
      <div className="hidden md:flex items-center gap-8 font-inter text-xs font-semibold tracking-wide text-gray-500 uppercase">
        <button onClick={() => scrollToSection('heritage')} className="hover:text-emerald transition-colors cursor-pointer">Botanical Heritage</button>
        <button onClick={() => scrollToSection('process')} className="hover:text-emerald transition-colors cursor-pointer">Curation</button>
        <button onClick={() => scrollToSection('commodities')} className="hover:text-emerald transition-colors cursor-pointer">Collections</button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-emerald transition-colors cursor-pointer">LOI Inquiry</button>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 text-gray-400">
        <a href="#" className="hover:text-emerald transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
      </div>
    </motion.nav>
  );
}