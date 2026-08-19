"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Brand } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Header from "./Header";
import Hero from "./Hero";
import DisclaimerBar from "./DisclaimerBar";
import Footer from "./Footer";

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
}

export default function MobileModal({ brands, gclid }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(!!gclid && brands.length > 0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-in fade-in duration-300">
      <div className="relative min-h-screen flex flex-col">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="fixed top-4 right-4 z-[110] p-3 bg-accent rounded-full text-white shadow-lg hover:scale-110 transition-transform"
        >
          <X size={24} />
        </button>

        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          <div className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Ofertas Especiais para <span className="text-primary">Telemóvel</span>
            </h2>
            
            <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
              {brands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  rank={index + 1} 
                  gclid={gclid} 
                />
              ))}
            </div>
          </div>
          
          <DisclaimerBar />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
