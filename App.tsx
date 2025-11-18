
import React from 'react';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConceptGenerator from './components/AIConceptGenerator';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import LeadMagnet from './components/LeadMagnet'; // Importar nuevo componente
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBlob from './components/AnimatedBlob';
import ScrollProgress from './components/ScrollProgress';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#05060d] text-gray-200 overflow-x-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <AnimatedBlob className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-gradient-to-r from-red-500/30 to-orange-500/30" />
        <AnimatedBlob className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-gradient-to-r from-cyan-500/20 to-blue-500/20" animationDuration={40} />
      </div>
      
      <ScrollProgress />
      <Header />
      
      <main>
        <Hero />
        <Services />
        <AIConceptGenerator />
        <Portfolio />
        <Blog />
        <LeadMagnet /> {/* Añadir la nueva sección aquí */}
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;