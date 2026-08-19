"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { track } from "@vercel/analytics";
import { Brand } from "@/app/data/brands";

interface BrandCardProps {
  brand: Brand;
  rank: number;
  gclid?: string;
}

export default function BrandCard({ brand, rank, gclid }: BrandCardProps) {
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    return `${url}${gclid}`;
  };

  const finalUrl = buildUrl(brand.url, gclid);

  const handleClick = () => {
    track("Brand Click", { brand: brand.name });
    if (typeof window !== "undefined" && "gtag_report_conversion" in window) {
      const win = window as unknown as { gtag_report_conversion: () => void };
      win.gtag_report_conversion();
    }
    window.open(finalUrl, "_blank");
  };

  return (
    <div className="relative pt-4 w-full max-w-4xl mx-auto">
      {/* "Escolha do Editor" Badge */}
      <div className="absolute top-0 left-6 z-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-orange-500/30">
          <Star size={12} fill="currentColor" />
          Escolha do Editor
        </div>
      </div>

      <div
        onClick={handleClick}
        className="casino-card-bg group cursor-pointer p-6 flex flex-col md:flex-row items-center gap-6 md:gap-10"
      >
        <div className="absolute top-3 right-6 text-[10px] text-gray-600 uppercase tracking-widest font-medium opacity-50">
          patrocinado
        </div>

        {/* Rank Circle */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-gray-500">
          {rank}
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 relative w-36 h-12 md:w-44 md:h-16">
          <Image
            src={brand.logo}
            alt={brand.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Bonus Text */}
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-[#00b4ff] text-lg md:text-xl font-bold leading-snug max-w-xs mx-auto md:mx-0">
            {brand.bonus}
          </h3>
        </div>

        {/* Rating & Votes */}
        <div className="flex flex-col items-center border-x border-white/5 px-8">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl md:text-4xl font-bold text-white">{brand.rating.toFixed(1)}</span>
            <span className="text-xs text-gray-500">/10</span>
          </div>
          <div className="flex gap-0.5 text-[#00b4ff] my-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-tighter">
            {brand.votes} AV.
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className="px-10 py-4 bg-gradient-to-b from-[#00b4ff] to-[#0082c3] text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-lg shadow-[#00b4ff]/20"
          >
            Jogar
          </button>
        </div>
      </div>
    </div>
  );
}
