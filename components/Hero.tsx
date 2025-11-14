
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const metrics = [
    { value: '+150', label: 'Sesiones' },
    { value: '98%', label: 'Clientes Felices' },
    { value: '4', label: 'Profesionales' },
  ];

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://ik.imagekit.io/ilczwuvvn/Quinces/Capitolio.webp" alt="Capitolio de La Habana al atardecer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      <motion.div
        className="relative z-10 container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading tracking-widest leading-tight mb-4">
          Habana MiniMax Studio
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-cyan-400 tracking-widest my-4 font-light">
          - Fotografía - Edición - Diseño - Sublimación -
        </motion.p>
        <motion.p variants={itemVariants} className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-light tracking-wider">
          Capturamos la esencia vibrante de tus historias en La Habana
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#servicios" onClick={smoothScrollTo} className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-3 px-8 rounded-full uppercase text-sm tracking-widest hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
            Conoce nuestros servicios
          </a>
          <a href="#testimonios" onClick={smoothScrollTo} className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-full uppercase text-sm tracking-widest hover:bg-cyan-400 hover:text-[#05060d] transition-colors duration-300 transform hover:scale-105">
            Ver inspiración
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          variants={itemVariants}
        >
          <div className="max-w-lg mx-auto flex justify-around items-center p-4 bg-black/30 backdrop-blur-md rounded-lg">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-heading tracking-wider text-cyan-400">{metric.value}</p>
                <p className="text-xs md:text-sm uppercase tracking-widest text-gray-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
