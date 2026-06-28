'use client';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-4">
      <img src="/assets/images/Logo/JAWISKIES-01.png" alt="Logo" className="w-[120px] h-auto" />

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <a href="/about">About</a>
        <a href="/how-it-works">How It Works</a>
        <a href="/privacy">Privacy</a>
        <a href="#subscribe" className="bg-blue-600 px-4 py-2 rounded-full text-white">Subscribe</a>
      </nav>

      {/* Hamburger Button (Mobaylka) */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Menu (Marka la furo) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#091633] p-6 flex flex-col gap-4 md:hidden border-t border-white/10 z-50">
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="/privacy" onClick={() => setIsOpen(false)}>Privacy</a>
        </div>
      )}
    </header>
  );
}