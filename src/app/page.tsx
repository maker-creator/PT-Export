// src/app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GlobalReach from "../components/GlobalReach"; 
import GlobalPartners from "../components/GlobalPartners"; // Baru: Sektor Klien
import Heritage from "../components/Heritage"; 
import ProcessFlow from "../components/ProcessFlow"; 
import GalleryFacility from "../components/GalleryFacility";
import MarketInsights from "../components/MarketInsights"; // Baru: Data Live
import ProductShowcase from "../components/ProductShowcase";
import Sustainability from "../components/Sustainability"; 
import Credibility from "../components/Credibility";
import DirectorMessage from "../components/DirectorMessage"; 
import CorporateDeck from "../components/CorporateDeck"; // Baru: CTA Download
import FAQ from "../components/FAQ"; 
import ContactForm from "../components/ContactForm"; 
import Footer from "../components/Footer"; 
import FloatingWA from "../components/FloatingWA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <GlobalReach /> 
      <GlobalPartners /> 
      <Heritage /> 
      <ProcessFlow />
      <GalleryFacility /> 
      <MarketInsights /> 
      <ProductShowcase />
      <Sustainability />
      <Credibility />
      <DirectorMessage />
      <CorporateDeck /> 
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingWA />
    </main>
  );
}