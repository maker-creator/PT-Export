// src/components/Credibility.tsx
export default function Credibility() {
  // Dummy text pengganti logo gambar untuk sementara
  const partners = ["ISO 9001:2015", "FDA APPROVED", "HACCP CERTIFIED", "MINISTRY OF TRADE", "GLOBAL G.A.P"];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="font-inter text-sm text-gray-400 font-medium tracking-widest uppercase mb-8">
          Dipercaya oleh standar global & mitra internasional
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="font-playfair text-xl md:text-2xl font-bold text-gray-300 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:text-emerald transition-all duration-500 cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}