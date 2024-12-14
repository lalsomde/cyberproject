import React from 'react';
import { Bug, Mail, Lock, UserX, Database, WifiOff } from 'lucide-react';

const threats = [
  {
    icon: <Bug className="w-12 h-12 text-red-500" />,
    title: 'Malwares',
    description: 'Virus, ransomwares et autres logiciels malveillants qui peuvent compromettre vos systèmes.'
  },
  {
    icon: <Mail className="w-12 h-12 text-yellow-500" />,
    title: 'Phishing',
    description: "Tentatives d'escroquerie par email visant à voler vos informations personnelles."
  },
  {
    icon: <UserX className="w-12 h-12 text-purple-500" />,
    title: 'Ingénierie Sociale',
    description: 'Manipulation psychologique pour obtenir des informations confidentielles.'
  },
  {
    icon: <Database className="w-12 h-12 text-blue-500" />,
    title: 'Fuite de Données',
    description: 'Vol ou perte de données sensibles personnelles ou professionnelles.'
  },
  {
    icon: <WifiOff className="w-12 h-12 text-green-500" />,
    title: 'Réseaux Non Sécurisés',
    description: "Risques liés à l'utilisation de réseaux WiFi publics non sécurisés."
  },
  {
    icon: <Lock className="w-12 h-12 text-orange-500" />,
    title: 'Mots de Passe Faibles',
    description: 'Vulnérabilités liées à l\'utilisation de mots de passe peu sécurisés.'
  }
];

export default function Threats() {
  return (
    <section id="menaces" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Menaces Courantes
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez les principales menaces cybernétiques actuelles et apprenez à les identifier 
          pour mieux vous en protéger.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {threats.map((threat, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{threat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{threat.title}</h3>
              <p className="text-gray-600">{threat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
