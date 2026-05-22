// src/components/ProcessFlow.tsx
'use client';

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Sourcing & Curation", desc: "Bekerja langsung dengan gapoktan pilihan untuk panen grade A." },
  { number: "02", title: "Quality Control", desc: "Penyortiran presisi & pengecekan standar regulasi ekspor global." },
  { number: "03", title: "Secure Packaging", desc: "Material food-grade & vacuum seal untuk ketahanan lintas samudra." },
  { number: "04", title: "Global Freight", desc: "Logistik terintegrasi (FOB/CIF) hingga tiba di pelabuhan Anda." }
];

export default function ProcessFlow() {
  return (
    <section id="process" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-inter font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Supply Chain</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-obsidian">
            Dari Tanah Vulkanis <br /> ke <span className="text-emerald italic">Gudang Anda.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="p-8 rounded-[2rem] bg-slate-50/50 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="font-playfair text-4xl font-bold text-gray-200 group-hover:text-emerald transition-colors mb-6">
                {step.number}
              </div>
              <h3 className="font-playfair text-xl font-bold text-obsidian mb-3">{step.title}</h3>
              <p className="font-inter text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}