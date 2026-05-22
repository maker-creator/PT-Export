// src/components/FAQ.tsx
'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Bagaimana prosedur permintaan sampel produk?",
    a: "Kami menyediakan sampel gratis hingga 500 gram untuk calon buyer serius. Biaya pengiriman logistik udara internasional sepenuhnya ditanggung oleh pihak pembeli."
  },
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Untuk keamanan transaksi B2B internasional, kami menerima Irrevocable Letter of Credit (L/C) at Sight atau Telegraphic Transfer (T/T) dengan sistem Down Payment 30% dan pelunasan 70% setelah dokumen BL (Bill of Lading) diterbitkan."
  },
  {
    q: "Incoterms apa yang didukung oleh Zentara?",
    a: "Secara standar kami menawarkan Free On Board (FOB) Pelabuhan Tanjung Priok (Jakarta) atau Tanjung Perak (Surabaya). Namun, kami juga melayani kesepakatan CIF (Cost, Insurance, and Freight) sesuai pelabuhan tujuan Anda."
  },
  {
    q: "Apakah seluruh komoditas memiliki sertifikasi resmi?",
    a: "Ya. Setiap pengiriman dilengkapi dengan Phytosanitary Certificate, Certificate of Origin (COO/SKA), Fumigation Certificate, serta hasil uji laboratorium independen jika diminta."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-inter font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">FAQ</span>
          <h2 className="font-playfair text-4xl font-bold text-obsidian">Trade Information</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center py-4 text-left font-playfair text-lg md:text-xl font-bold text-obsidian hover:text-emerald transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <Minus className="w-5 h-5 text-emerald" /> : <Plus className="w-5 h-5 text-gray-400" />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-inter text-gray-500 text-sm leading-relaxed pt-2 pb-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}