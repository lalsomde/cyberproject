// src/components/BestPractices.tsx
import React from 'react';
import { Key, Shield, Eye, Smartphone } from 'lucide-react';

const practices = [
  {
    icon: <Key className="w-8 h-8 text-blue-500" />, 
    title: 'Mots de Passe Forts',
    description: 'Utilisez des mots de passe complexes et uniques pour chaque compte.'
  },
  {
    icon: <Shield className="w-8 h-8 text-green-500" />, 
    title: 'Double Authentification',
    description: 'Activez la 2FA sur tous vos comptes importants.'
  },
  {
    icon: <Eye className="w-8 h-8 text-purple-500" />, 
    title: 'Vigilance en Ligne',
    description: 'Méfiez-vous des emails et liens suspects.'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-red-500" />, 
    title: 'Mise à Jour',
    description: 'Gardez vos appareils et logiciels à jour.'
  }
];

export default function BestPractices() {
  return (
    <section id="bonnes-pratiques" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Bonnes Pratiques
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Adoptez ces pratiques essentielles pour renforcer votre sécurité en ligne.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, index) => (
            <div key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
              <div className="mb-4">{practice.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Restez Informé et Protégé
          </h3>
          <p className="text-center mb-6">
            Recevez nos conseils de sécurité et alertes directement dans votre boîte mail
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
