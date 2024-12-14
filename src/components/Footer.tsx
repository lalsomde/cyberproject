import React from 'react';
import { Shield, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">CyberSécurité+</span>
            </div>
            <p className="text-gray-400">
              Votre partenaire de confiance pour la sécurité en ligne.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-white">Accueil</a></li>
              <li><a href="#menaces" className="text-gray-400 hover:text-white">Menaces</a></li>
              <li><a href="#bonnes-pratiques" className="text-gray-400 hover:text-white">Bonnes Pratiques</a></li>
              <li><a href="#ressources" className="text-gray-400 hover:text-white">Ressources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">CGU</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CyberSécurité+. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
