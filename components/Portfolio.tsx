
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from '../assets/icons';

// Definimos tipos para mejor control
interface PortfolioItem {
  id: number;
  category: string;
  src: string;
  alt: string;
  orientation: 'vertical' | 'horizontal';
}

// Imágenes reales proporcionadas (Categoría: Bodas)
// Verticales: 800x1200 (Ratio 2:3)
// Horizontales: 1200x800 (Ratio 3:2)
const portfolioItems: PortfolioItem[] = [
  // Verticales
  { id: 1, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/06.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: 'Boda - Retrato Elegante', orientation: 'vertical' },
  { id: 2, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/07.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: 'Boda - Momento Especial', orientation: 'vertical' },
  { id: 3, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/08.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: 'Boda - Detalles', orientation: 'vertical' },
  { id: 4, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/09.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: 'Boda - Emoción', orientation: 'vertical' },
  
  // Horizontales
  { id: 5, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/05.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: 'Boda - Paisaje', orientation: 'horizontal' },
  { id: 6, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/01.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: 'Boda - Ceremonia', orientation: 'horizontal' },
  { id: 7, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/04.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: 'Boda - Pareja', orientation: 'horizontal' },
  { id: 8, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/02.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: 'Boda - Exteriores', orientation: 'horizontal' },
  { id: 9, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/03.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: 'Boda - Atardecer', orientation: 'horizontal' },
];

const filterCategories = [
  { name: 'Todos', value: 'all' },
  { name: 'Bodas', value: 'bodas' },
  { name: 'Quinces', value: 'quinces' },
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

        {/* Barra de Filtros */}
        <div className="flex md:flex-wrap md:justify-center gap-3 mb-8 md:mb-10 overflow-x-auto pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 no-scrollbar snap-x">
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`flex-shrink-0 snap-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full md:rounded-none border transition-colors duration-300 whitespace-nowrap ${
                activeFilter === category.value
                  ? 'border-cyan-500 text-cyan-400 bg-cyan-900/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                  : 'border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Contenedor Relativo */}
        <div className="relative group/portfolio">
            
            {/* Flecha Indicadora de Scroll (Solo Móvil) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:hidden pointer-events-none pr-1 animate-pulse">
                 <div className="bg-black/50 rounded-full p-1 backdrop-blur-sm border border-white/10">
                    <ArrowRightIcon className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_5px_rgba(0,0,0,1)]" />
                 </div>
            </div>

            {/* 
               Grid System:
               - Mobile: Horizontal Scroll (Snap)
               - Desktop: Masonry-style Grid using col-span
            */}
            <div
              className="
                flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory no-scrollbar 
                md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:pb-0 md:overflow-visible
                will-change-scroll
              "
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`
                        relative overflow-hidden rounded-lg flex-shrink-0 
                        snap-center group transform-gpu bg-gray-900
                        ${/* Clases para móvil (scroll horizontal) */ ''}
                        w-[70vw] xs:w-[60vw] sm:w-[45vw]
                        ${/* Clases para desktop (grid) */ ''}
                        md:w-auto 
                        ${item.orientation === 'horizontal' ? 'md:col-span-2 aspect-[3/2]' : 'md:col-span-1 aspect-[2/3]'}
                    `}
                  >
                    <img 
                        src={item.src} 
                        alt={item.alt} 
                        loading="lazy" 
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" 
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</p>
                      <p className="text-white text-sm font-bold tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
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
        .will-change-scroll {
            will-change: scroll-position;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
