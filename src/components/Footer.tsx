// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-100 pb-16">
        
        <div className="md:col-span-2">
          <h2 className="font-playfair text-2xl font-bold mb-6 text-obsidian tracking-wide">
            ZENTARA<span className="text-emerald">.</span>
          </h2>
          <p className="font-inter text-gray-500 font-light text-sm max-w-sm leading-relaxed">
            Elevating Indonesian Commodities to the Global Stage. Mitra tepercaya untuk kebutuhan suplai komoditas premium Anda.
          </p>
        </div>

        <div>
          <h4 className="font-inter font-bold text-obsidian tracking-wider uppercase mb-6 text-xs">Perusahaan</h4>
          <ul className="space-y-4 font-inter text-gray-500 font-light text-sm">
            <li><a href="#" className="hover:text-emerald transition-colors">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Katalog Ekspor</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Sertifikasi & Kualitas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-inter font-bold text-obsidian tracking-wider uppercase mb-6 text-xs">Kontak</h4>
          <ul className="space-y-4 font-inter text-gray-500 font-light text-sm">
            <li>Jakarta, Indonesia</li>
            <li>export@zentara.com</li>
            <li>+62 851-5736-2339</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between font-inter text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Zentara Commodities. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-obsidian transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-obsidian transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}