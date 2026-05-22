// src/components/FloatingWA.tsx
import { MessageCircle } from 'lucide-react';

export default function FloatingWA() {
  const waNumber = "6285157362339";
  const waMessage = "Halo, saya ingin mengkonsultasikan kebutuhan ekspor komoditas.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-16 h-16"
    >
      {/* Efek Pulse Transparan */}
      <span className="absolute inset-0 rounded-full bg-emerald opacity-50 animate-ping group-hover:animate-none group-hover:scale-110 transition-transform duration-300"></span>
      
      {/* Tombol Utama */}
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-emerald text-white rounded-full shadow-2xl group-hover:bg-emerald/90 transition-colors">
        <MessageCircle className="w-8 h-8" />
      </div>
    </a>
  );
}