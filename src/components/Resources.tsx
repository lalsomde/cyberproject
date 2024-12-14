// src/components/Resources.tsx
import React from 'react';
import { BookOpen, Video, FileText, Link } from 'lucide-react';

const resources = [
  {
    type: 'Guide',
    title: 'Guide Complet de Cybersécurité',
    description: 'Un guide détaillé pour comprendre les bases de la cybersécurité.',
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    type: 'Vidéo',
    title: 'Tutoriels de Sécurité',
    description: 'Série de vidéos explicatives sur les bonnes pratiques.',
    icon: <Video className="w-6 h-6" />
  },
  {
    type: 'Article',
    title: 'Dernières Menaces',
    description: 'Actualités et analyses des nouvelles menaces.',
    icon: <FileText className="w-6 h-6" />
  },
  {
    type: 'Liens',
    title: 'Ressources Externes',
    description: 'Sélection de sites web de confiance sur la cybersécurité.',
    icon: <Link className="w-6 h-6" />
  }
];

export default function Resources() {
  return (
    <section id="ressources" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ressources Utiles
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Découvrez nos ressources sélectionnées pour approfondir vos connaissances 
          en cybersécurité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 
              transition-colors cursor-pointer">
              <div className="flex items-center space-x-3 mb-4">
                {resource.icon}
                <span className="text-sm font-medium text-blue-400">{resource.type}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-400">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
