// src/components/MarketInsights.tsx
'use client';

import { motion } from "framer-motion";

export default function MarketInsights() {
  const marketData = [
    { item: "Premium Vanilla Beans", status: "Stable Supply", harvest: "May - July", trend: "+2.4%" },
    { item: "Sumatra Arabica Coffee", status: "High Demand", harvest: "Sep - Dec", trend: "+5.1%" },
    { item: "Refined Coconut Oil", status: "Year-Round", harvest: "Continuous", trend: "Steady" },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-inter font-bold tracking-[0.3em] text-emerald uppercase mb-4 block flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span> Live Data
            </span>
            <h2 className="font-playfair text-4xl font-bold text-obsidian">Commodity Index <br/>& Harvest Calendar</h2>
          </div>
          <p className="font-inter text-sm text-gray-500 max-w-sm text-right hidden md:block">
            Pembaruan ketersediaan suplai Q3 2026. Amankan kuota pemesanan Anda sebelum musim panen utama berakhir.
          </p>
        </div>

        {/* Clean Corporate Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full border border-gray-100 rounded-[2rem] overflow-hidden bg-slate-50/50"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left font-inter">
              <thead className="bg-white border-b border-gray-100">
                <tr>
                  <th className="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest w-2/5">Komoditas</th>
                  <th className="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Status Suplai</th>
                  <th className="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Musim Panen</th>
                  <th className="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Market Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {marketData.map((row, i) => (
                  <tr key={i} className="hover:bg-white transition-colors">
                    <td className="py-6 px-8 font-playfair text-lg font-bold text-obsidian">{row.item}</td>
                    <td className="py-6 px-8">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-semibold text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${row.status === 'High Demand' ? 'bg-gold' : 'bg-emerald'}`}></div>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-6 px-8 text-sm text-gray-500">{row.harvest}</td>
                    <td className="py-6 px-8 text-sm font-semibold text-emerald">{row.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}