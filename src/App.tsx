// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/ContactForm';
import Threats from './components/Threats';
import BestPractices from './components/BestPractices';
import Resources from './components/Resources';
import Hero from './components/Hero';

export default function App() {
  return (
    <div>
      <Header />
	  <Hero />
      <main>
        <Threats />
        <BestPractices />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
