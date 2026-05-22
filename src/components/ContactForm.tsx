// src/components/ContactForm.tsx
'use client';

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", company: "", country: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseText = `Halo Zentara, saya ingin mengajukan Letter of Intent (LOI).\n\n• Nama: ${formData.name}\n• Perusahaan: ${formData.company}\n• Negara: ${formData.country}\n• Komoditas: ${formData.product}\n• Catatan Tambahan: ${formData.message}`;
    const waUrl = `https://wa.me/6285157362339?text=${encodeURIComponent(baseText)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-inter font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Partnership</span>
          <h2 className="font-playfair text-4xl font-bold text-obsidian">Global Inquiry Desk</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 font-inter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Nama Lengkap</label>
              <input 
                type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-sm focus:outline-none focus:border-emerald transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Nama Perusahaan</label>
              <input 
                type="text" required value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-sm focus:outline-none focus:border-emerald transition-colors"
                placeholder="Apex Global Trading Ltd."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Negara Tujuan</label>
              <input 
                type="text" required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-sm focus:outline-none focus:border-emerald transition-colors"
                placeholder="Germany"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Komoditas yang Diminati</label>
              <select 
                required value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})}
                className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-sm focus:outline-none focus:border-emerald transition-colors appearance-none"
              >
                <option value="">Pilih Komoditas</option>
                <option value="Premium Vanilla Beans">Premium Vanilla Beans</option>
                <option value="Sumatra Arabica Coffee">Sumatra Arabica Coffee</option>
                <option value="Refined Coconut Oil">Refined Coconut Oil</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Spesifikasi Tambahan / Volume Target (Ton)</label>
            <textarea 
              rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-4 text-sm focus:outline-none focus:border-emerald transition-colors resize-none"
              placeholder="Sebutkan detail kuantitas target pemesanan atau sertifikasi khusus yang Anda harapkan..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-obsidian text-white py-4 rounded-full font-semibold text-sm hover:bg-emerald transition-colors duration-300 shadow-xl shadow-gray-200"
          >
            Kirim Nota Permintaan Resmi
          </button>
        </form>
      </div>
    </section>
  );
}