// src/components/Hero.tsx
import React from 'react';
import { Shield, Lock, AlertTriangle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="pt-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protégez Votre Monde Numérique
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez les meilleures pratiques en cybersécurité pour protéger vos données 
              et naviguer en toute sécurité sur internet.
            </p>
            <div className="flex space-x-4">
              <a href="#bonnes-pratiques" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg 
                transition duration-300 flex items-center space-x-2">
                <Lock className="w-5 h-5" />
                <span>Commencer</span>
              </a>
              <a href="#menaces" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 
                text-white px-6 py-3 rounded-lg transition duration-300 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>En savoir plus</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Shield className="w-64 h-64 text-blue-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}