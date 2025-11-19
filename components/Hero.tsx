
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const heroImageUrl = "https://ik.imagekit.io/ilczwuvvn/Quinces/Capitolio.webp";

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center text-center overflow-hidden pt-16 pb-20"
      aria-label="Sección principal de bienvenida"
    >
      {/* Background Layer with Bokeh Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImageUrl} 
          alt="Fondo Capitolio Habana" 
          className="w-full h-full object-cover filter blur-[3px] scale-110 brightness-[0.4]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05060d] via-transparent to-transparent z-10 pointer-events-none"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 px-5 md:px-6 text-white max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 tracking-tight leading-[1.1] drop-shadow-2xl"
        >
          {t.hero.title1}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            {t.hero.title2}
          </span>
           {t.hero.title3}<sup className="text-lg sm:text-2xl lg:text-3xl align-top relative top-[-0.2em] md:top-[-0.3em] opacity-80">®</sup>
        </motion.h1>

        <motion.div variants={itemVariants} className="w-16 h-0.5 bg-cyan-500 mx-auto mb-6 shadow-[0_0_10px_#06b6d4]"></motion.div>

        <motion.p 
          variants={itemVariants} 
          className="text-[10px] sm:text-xs md:text-sm font-heading font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase text-cyan-400 mb-8 drop-shadow-md px-2"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-10 sm:mb-12 font-medium text-gray-100 drop-shadow-md leading-relaxed px-4"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4"
        >
          {/* Botón Ver Portafolio */}
          <button
            onClick={() => scrollTo('portfolio')}
            className="group relative w-full sm:w-auto font-heading font-bold py-3.5 px-10 rounded-full text-xs uppercase tracking-[0.2em] text-white
                       bg-gradient-to-br from-orange-400 to-orange-700
                       shadow-[0_10px_25px_rgba(249,115,22,0.5)]
                       hover:shadow-[0_20px_40px_rgba(249,115,22,0.7)]
                       hover:-translate-y-1 active:translate-y-0 active:scale-95
                       transition-all duration-300 focus:outline-none"
          >
            {t.hero.cta}
          </button>

          {/* Botón Reservar */}
          <button
            onClick={() => scrollTo('contacto')}
            className="group relative w-full sm:w-auto font-heading font-bold py-3.5 px-10 rounded-full text-xs uppercase tracking-[0.2em] text-black
                       bg-gradient-to-br from-cyan-300 to-cyan-600
                       shadow-[0_10px_25px_rgba(6,182,212,0.5)]
                       hover:shadow-[0_20px_40px_rgba(6,182,212,0.7)]
                       hover:-translate-y-1 active:translate-y-0 active:scale-95
                       transition-all duration-300 focus:outline-none"
          >
            {t.hero.cta_secondary}
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 mix-blend-difference">
        <button
          aria-label="Desplazar hacia la sección de Servicios"
          onClick={() => scrollTo('servicios')}
          className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity p-4"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white shadow-black drop-shadow-lg">Scroll</span>
          <div className="w-[2px] h-10 sm:h-12 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
             <div className="w-full h-full bg-cyan-400 animate-bounce shadow-[0_0_10px_#22d3ee]"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
