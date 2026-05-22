// src/components/ProductShowcase.tsx
'use client'; 

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Premium Vanilla Beans",
    category: "Gourmet Spices",
    description: "Planifolia & Tahitensis Grade A. Kadar air 25-30%, panjang minimal 16cm. Kurasi manual untuk aroma vanilin maksimal.",
    imageUrl: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=1000&auto=format&fit=crop", 
    specs: { hsCode: "0905.10", moq: "20 KG", capacity: "1 Ton / Month", packaging: "Vacuum Sealed + Carton" }
  },
  {
    id: 2,
    name: "Sumatra Arabica Coffee",
    category: "Botanicals",
    description: "Kopi Gayo Grade 1 (Defect < 11). Proses semi-washed menghasilkan body tebal dengan aroma rempah kuat.",
    imageUrl: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop",
    specs: { hsCode: "0901.11", moq: "1 Container (20ft)", capacity: "20 Tons / Month", packaging: "GrainPro + Jute Bag" }
  },
  {
    id: 3,
    name: "Sri Lanka Type Cinnamon",
    category: "Gourmet Spices",
    description: "Kayu Manis mentah Grade A (quills), aroma manis kuat & tekstur kering sempurna. Kadar air optimal < 14%.",
    imageUrl: "https://images.unsplash.com/photo-1550252134-44ed56f2e245?q=80&w=1000&auto=format&fit=crop",
    specs: { hsCode: "0906.11", moq: "100 KG", capacity: "5 Tons / Month", packaging: "Jute Bag + Liner" }
  }
];

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="commodities" className="py-32 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-inter font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Our Collections</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-obsidian mb-6 leading-tight">
            Curated <span className="text-spice italic">Aromatic Collections</span>
          </h2>
          <p className="font-inter text-gray-600 text-lg font-light leading-relaxed">
            Spesifikasi standar ekspor teknis tingkat atas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-700 ease-out hover:scale-[1.03] hover:shadow-[0_20px_50px_-10px_rgba(156,82,33,0.1)] cursor-pointer"
            >
              <div className="relative h-80 w-full bg-white flex items-center justify-center overflow-hidden border-b border-gray-50 p-6">
                <Image 
                  src={product.imageUrl} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-spice/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-spice px-6 py-3 rounded-full font-inter text-sm font-semibold tracking-wide translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Lihat Spesifikasi Teknis
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-inter font-semibold tracking-wider text-gold uppercase mb-3 block">
                  {product.category}
                </span>
                <h3 className="font-playfair text-2xl font-bold text-obsidian mb-3 leading-snug">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[60] bg-obsidian/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-white w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm p-2.5 rounded-full text-obsidian hover:bg-gray-100 transition"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M18 6L6 18M6 6l12 12"></path></svg>
              </button>

              <div className="relative w-full md:w-[45%] h-64 md:h-auto border-r border-gray-50">
                <Image src={selectedProduct.imageUrl} alt={selectedProduct.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>

              <div className="p-8 md:p-14 w-full md:w-[55%] flex flex-col justify-center">
                <span className="text-sm font-inter font-semibold tracking-wider text-gold uppercase mb-2 block">Commodity Details</span>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-obsidian mb-6 leading-tight">{selectedProduct.name}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-10 font-light">{selectedProduct.description}</p>

                <div className="grid grid-cols-2 gap-y-8 gap-x-6 mb-10 border-t border-b border-gray-100 py-8">
                  <div><p className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">HS Code</p><p className="font-inter font-semibold text-obsidian">{selectedProduct.specs.hsCode}</p></div>
                  <div><p className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Min. Order (MOQ)</p><p className="font-inter font-semibold text-obsidian">{selectedProduct.specs.moq}</p></div>
                  <div><p className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Supply Capacity</p><p className="font-inter font-semibold text-obsidian">{selectedProduct.specs.capacity}</p></div>
                  <div><p className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Packaging Standard</p><p className="font-inter font-semibold text-obsidian">{selectedProduct.specs.packaging}</p></div>
                </div>

                <a 
                  href={`https://wa.me/6285157362339?text=Halo%20Zentara,%20saya%20tertarik%20dengan%20${encodeURIComponent(selectedProduct.name)}%20premium.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-spice text-white py-4.5 rounded-full font-inter font-semibold text-sm hover:bg-spice/90 transition-colors shadow-lg shadow-spice/30"
                >
                  Minta Penawaran Harga Resmi (LOI)
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}