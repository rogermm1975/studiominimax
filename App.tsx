import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConceptGenerator from './components/AIConceptGenerator';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import LeadMagnet from './components/LeadMagnet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white selection:bg-blue-500 selection:text-white flex flex-col min-h-screen">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <AIConceptGenerator />
        <Portfolio />
        <Testimonials />
        <Blog />
        <FAQ />
        <LeadMagnet />
        <Contact />
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default App;
