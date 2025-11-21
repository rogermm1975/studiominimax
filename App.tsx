
import React, { Suspense, lazy } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import AnimatedBlob from './components/AnimatedBlob';
import ScrollProgress from './components/ScrollProgress';
import BackToTopButton from './components/BackToTopButton';
import SEO from './components/SEO';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy Load: Importamos los componentes pesados solo cuando se necesitan.
// Esto reduce el tamaño del paquete inicial (JS bundle) y mejora la métrica TBT (Total Blocking Time).
const Portfolio = lazy(() => import('./components/Portfolio'));
const Blog = lazy(() => import('./components/Blog'));
const LeadMagnet = lazy(() => import('./components/LeadMagnet'));
const AIConceptGenerator = lazy(() => import('./components/AIConceptGenerator'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));

// Componente de carga ligero (Skeleton) para evitar cambios bruscos de diseño (CLS)
const SectionLoader = () => (
  <div className="w-full py-32 flex items-center justify-center">
     <div className="text-cyan-500/50 text-xs font-bold tracking-[0.3em] uppercase animate-pulse">
        Cargando Experiencia...
     </div>
  </div>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <SEO />
      <div className="relative min-h-screen bg-[#05060d] text-gray-200 overflow-x-hidden">
        {/* Background Gradient Blobs - Added pointer-events-none to prevent interference */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <AnimatedBlob className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-gradient-to-r from-red-500/30 to-orange-500/30" />
          <AnimatedBlob className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-gradient-to-r from-cyan-500/20 to-blue-500/20" animationDuration={40} />
        </div>
        
        <ScrollProgress />
        <Header />
        
        <main>
          {/* Hero y Services se mantienen "eager" (carga inmediata) para una experiencia inicial fluida */}
          <Hero />
          <Services />
          
          {/* El resto de la página se carga bajo demanda */}
          <Suspense fallback={<SectionLoader />}>
            <Portfolio />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <AIConceptGenerator />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Blog />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <LeadMagnet />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </main>
        
        <Footer />
        <BackToTopButton />
      </div>
    </LanguageProvider>
  );
};

export default App;