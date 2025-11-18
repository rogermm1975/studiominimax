
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Función reusable de scroll suave
  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://ik.imagekit.io/ilczwuvvn/Quinces/571211098_32317210297924856_8673495078409657093_n.webp')"
      }}
      aria-label="Sección principal de bienvenida"
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Contenido */}
      <div className="relative z-10 px-4 text-white animate-fadeInUp motion-safe:animate-fadeInUp">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight">
          {t.hero.title1}
          <span className="text-blue-500">{t.hero.title2}</span>
          {t.hero.title3}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-light">
          {t.hero.subtitle}
        </p>

        {/* CTA */}
        <button
          onClick={() => scrollTo('contacto')}
          className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg 
                     hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30
                     focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          {t.hero.cta}
        </button>
      </div>

      {/* Scroll down animado */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          aria-label="Desplazar hacia la sección de Servicios"
          onClick={() => scrollTo('servicios')}
          className="flex justify-center items-start w-6 h-10 border-2 border-white rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
