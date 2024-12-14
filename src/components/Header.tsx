
// src/components/Header.tsx
// src/components/Header.tsx
import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">CyberSécurité+</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="hover:text-blue-400 transition">Accueil</a>
            <a href="#menaces" className="hover:text-blue-400 transition">Menaces</a>
            <a href="#bonnes-pratiques" className="hover:text-blue-400 transition">Bonnes Pratiques</a>
            <a href="#ressources" className="hover:text-blue-400 transition">Ressources</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="hover:text-blue-400 transition">Accueil</a>
              <a href="#menaces" className="hover:text-blue-400 transition">Menaces</a>
              <a href="#bonnes-pratiques" className="hover:text-blue-400 transition">Bonnes Pratiques</a>
              <a href="#ressources" className="hover:text-blue-400 transition">Ressources</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
