
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from '../assets/icons';

const portfolioItems = [
  { id: 1, category: 'quinces', src: 'https://picsum.photos/seed/port1/500/700', alt: 'Sesión de Quinceañera 1' },
  { id: 2, category: 'bodas', src: 'https://picsum.photos/seed/port2/700/500', alt: 'Fotografía de Boda 1' },
  { id: 3, category: 'artisticas', src: 'https://picsum.photos/seed/port3/500/500', alt: 'Fotografía Artística 1' },
  { id: 4, category: 'quinces', src: 'https://picsum.photos/seed/port4/500/600', alt: 'Sesión de Quinceañera 2' },
  { id: 5, category: 'diseno', src: 'https://picsum.photos/seed/port5/600/500', alt: 'Diseño Gráfico 1' },
  { id: 6, category: 'bodas', src: 'https://picsum.photos/seed/port6/500/750', alt: 'Fotografía de Boda 2' },
  { id: 7, category: 'quinces', src: 'https://picsum.photos/seed/port7/700/500', alt: 'Sesión de Quinceañera 3' },
  { id: 8, category: 'artisticas', src: 'https://picsum.photos/seed/port8/500/700', alt: 'Fotografía Artística 2' },
];

const filterCategories = [
  { name: 'Todos', value: 'all' },
  { name: 'Quinces', value: 'quinces' },
  { name: 'Bodas', value: 'bodas' },
  { name: 'Artísticas', value: 'artisticas' },
  { name: 'Diseño', value: 'diseno' },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-28 bg-black/20">
      <div className="container mx-auto px-5 lg:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-widest text-white mb-3">Nuestro Portafolio</h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">Explora una selección de nuestros trabajos más recientes.</p>
        </motion.div>

        {/* Barra de Filtros: Scroll horizontal en móvil, centrado en desktop */}
        <motion.div
            className="flex md:flex-wrap md:justify-center gap-3 mb-8 md:mb-10 overflow-x-auto pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 no-scrollbar snap-x"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`flex-shrink-0 snap-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full md:rounded-none border transition-all duration-300 whitespace-nowrap ${
                activeFilter === category.value
                  ? 'border-cyan-500 text-cyan-400 bg-cyan-900/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                  : 'border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Contenedor Relativo para posicionar la flecha indicadora */}
        <div className="relative group/portfolio">
            
            {/* Flecha Indicadora de Scroll (Solo Móvil) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:hidden pointer-events-none pr-1 animate-pulse">
                 <div className="bg-black/50 rounded-full p-1 backdrop-blur-sm border border-white/10">
                    <ArrowRightIcon className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_5px_rgba(0,0,0,1)]" />
                 </div>
            </div>

            <motion.div
              layout
              className="
                flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory no-scrollbar 
                md:grid md:grid-cols-3 lg:grid-cols-4 md:pb-0 md:overflow-visible
              "
            >
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="
                        relative overflow-hidden rounded-lg flex-shrink-0 
                        w-[45%] xs:w-[45%] sm:w-[40%] md:w-auto
                        snap-center group
                    "
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-bold tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
