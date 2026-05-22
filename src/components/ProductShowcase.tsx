// src/components/ProductShowcase.tsx
'use client'; // Wajib karena kita pakai state interaktif

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Data B2B Ekstra Informatif
const products = [
  {
    id: 1,
    name: "Premium Vanilla Beans",
    category: "Spices & Herbs",
    description: "Planifolia & Tahitensis dengan kadar air 25-30%, panjang 15-20cm. Kurasi manual untuk aroma vanilin maksimal.",
    imageUrl: "https://images.unsplash.com/photo-1621217512141-2a1db3929e71?q=80&w=1000&auto=format&fit=crop", 
    specs: { hsCode: "0905.10", moq: "50 KG", capacity: "2 Tons / Month", packaging: "Vacuum Sealed Carton" }
  },
  {
    id: 2,
    name: "Sumatra Arabica Coffee",
    category: "Coffee Beans",
    description: "Kopi Gayo grade 1 (Defect < 11). Proses semi-washed menghasilkan body tebal dengan notes rempah dan dark chocolate.",
    imageUrl: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop",
    specs: { hsCode: "0901.11", moq: "1 Container (20ft)", capacity: "50 Tons / Month", packaging: "Jute Bag + GrainPro" }
  },
  {
    id: 3,
    name: "Refined Coconut Oil",
    category: "Derivatives",
    description: "Minyak kelapa murni tersertifikasi (RBD). Bebas bau, warna jernih, ideal untuk industri kosmetik dan food-grade.",
    imageUrl: "https://images.unsplash.com/photo-1615486171448-4af62ab0b080?q=80&w=1000&auto=format&fit=crop",
    specs: { hsCode: "1513.19", moq: "10,000 Liters", capacity: "100 Tons / Month", packaging: "Flexitank / Steel Drum" }
  }
];

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="commodities" className="py-32 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-obsidian mb-6">
            Curated <span className="text-emerald italic">Excellence</span>
          </h2>
          <p className="font-inter text-gray-600 text-lg">
            Spesifikasi standar ekspor. Klik pada produk untuk melihat dokumen detail komoditas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-700 ease-out hover:scale-[1.03] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              <div className="relative h-80 w-full bg-white flex items-center justify-center overflow-hidden">
                <Image 
                  src={product.imageUrl} 
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                {/* Badge "View Details" on Hover */}
                <div className="absolute inset-0 bg-obsidian/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-white text-obsidian px-6 py-3 rounded-full font-inter text-sm font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Lihat Spesifikasi
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-inter font-semibold tracking-wider text-gold uppercase mb-3 block">
                  {product.category}
                </span>
                <h3 className="font-playfair text-2xl font-bold text-obsidian mb-3">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LUXURY MODAL (Muncul saat produk diklik) */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[60] bg-obsidian/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Supaya klik di dalam modal tidak menutup modal
              className="bg-white w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            >
              {/* Tombol Close SVG */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 bg-white/50 backdrop-blur-sm p-2 rounded-full text-obsidian hover:bg-gray-100 transition"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M18 6L6 18M6 6l12 12"></path></svg>
              </button>

              {/* Gambar di Modal */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image src={selectedProduct.imageUrl} alt={selectedProduct.name} fill className="object-cover" />
              </div>

              {/* Detail Data B2B */}
              <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-sm font-inter font-semibold tracking-wider text-gold uppercase mb-2 block">
                  Commodity Details
                </span>
                <h3 className="font-playfair text-3xl font-bold text-obsidian mb-4">
                  {selectedProduct.name}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                {/* Spesifikasi Grid */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                  <div>
                    <p className="text-xs text-gray-400 font-inter uppercase tracking-wider mb-1">HS Code</p>
                    <p className="font-inter font-semibold text-obsidian">{selectedProduct.specs.hsCode}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-inter uppercase tracking-wider mb-1">Min. Order</p>
                    <p className="font-inter font-semibold text-obsidian">{selectedProduct.specs.moq}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-inter uppercase tracking-wider mb-1">Supply Capacity</p>
                    <p className="font-inter font-semibold text-obsidian">{selectedProduct.specs.capacity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-inter uppercase tracking-wider mb-1">Packaging</p>
                    <p className="font-inter font-semibold text-obsidian">{selectedProduct.specs.packaging}</p>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/6285157362339?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(selectedProduct.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-emerald text-white py-4 rounded-full font-inter font-medium hover:bg-emerald/90 transition-colors shadow-lg shadow-emerald/30"
                >
                  Minta Penawaran Harga
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}