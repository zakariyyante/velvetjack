"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-40 h-10 md:w-48 md:h-12">
             <Image src="/logo.png" alt="VelvetJackPT Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#brands"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Top Casinos
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[11px] font-bold text-gray-500">
            18+
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-white/5 bg-background p-4 flex flex-col gap-4">
          <Link
            href="#brands"
            className="text-lg font-medium text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Top Casinos
          </Link>
          <Link
            href="#faq"
            className="text-lg font-medium text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
        </nav>
      )}
    </header>
  );
}
