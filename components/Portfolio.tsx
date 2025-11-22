
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpinnerIcon, RefreshIcon } from '../assets/icons';
import { useLanguage } from '../contexts/LanguageContext';

// Definimos tipos para mejor control
interface PortfolioItem {
  id: number;
  category: string;
  src: string;
  alt: string;
  orientation: 'vertical' | 'horizontal';
}

// Componente interno para manejar la carga individual de cada imagen
const PortfolioImageCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  // Helper para obtener el nombre traducido de la categoría
  const getCategoryLabel = (cat: string) => {
    const filters = t.portfolio.filters as any;
    return filters[cat] || cat;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`
          relative overflow-hidden rounded-lg bg-gray-900 group w-full
          col-span-1 
          ${item.orientation === 'horizontal' ? 'col-span-2 md:col-span-2 aspect-[3/2]' : 'aspect-[2/3]'}
      `}
    >
      {/* Skeleton Loader / Placeholder */}
      <div 
        className={`absolute inset-0 bg-gray-800 flex items-center justify-center transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="animate-pulse w-full h-full bg-gray-800" />
        <SpinnerIcon className="w-8 h-8 text-cyan-500/50 animate-spin absolute" />
      </div>

      <img 
          src={item.src} 
          alt={item.alt} 
          loading="lazy" 
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter group-hover:grayscale-0
            ${isLoaded ? 'opacity-100 grayscale-[20%]' : 'opacity-0'}
          `} 
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{getCategoryLabel(item.category)}</p>
        <p className="text-white text-sm font-bold tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.alt}</p>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Movemos los items dentro del componente para usar 'language' en los textos ALT
  const portfolioItems: PortfolioItem[] = useMemo(() => {
      const isEs = language === 'es';
      return [
        // --- BODAS ---
        { id: 1, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/06.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Boda - Retrato Elegante' : 'Wedding - Elegant Portrait', orientation: 'vertical' },
        { id: 2, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/07.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Boda - Momento Especial' : 'Wedding - Special Moment', orientation: 'vertical' },
        { id: 3, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/08.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Boda - Detalles' : 'Wedding - Details', orientation: 'vertical' },
        { id: 4, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/09.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Boda - Emoción' : 'Wedding - Emotion', orientation: 'vertical' },
        { id: 5, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/05.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: isEs ? 'Boda - Paisaje' : 'Wedding - Landscape', orientation: 'horizontal' },
        { id: 6, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/01.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: isEs ? 'Boda - Ceremonia' : 'Wedding - Ceremony', orientation: 'horizontal' },
        { id: 7, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/04.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: isEs ? 'Boda - Pareja' : 'Wedding - Couple', orientation: 'horizontal' },
        { id: 8, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/02.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: isEs ? 'Boda - Exteriores' : 'Wedding - Outdoors', orientation: 'horizontal' },
        { id: 9, category: 'bodas', src: 'https://ik.imagekit.io/ilczwuvvn/03.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: isEs ? 'Boda - Atardecer' : 'Wedding - Sunset', orientation: 'horizontal' },

        // --- QUINCES ---
        { id: 10, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces01.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 01' : 'Quinces - Portrait 01', orientation: 'vertical' },
        { id: 11, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces02.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 02' : 'Quinces - Portrait 02', orientation: 'vertical' },
        { id: 12, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces03.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 03' : 'Quinces - Portrait 03', orientation: 'vertical' },
        { id: 13, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces04.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 04' : 'Quinces - Portrait 04', orientation: 'vertical' },
        { id: 14, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces05.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 05' : 'Quinces - Portrait 05', orientation: 'vertical' },
        { id: 15, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces07.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 06' : 'Quinces - Portrait 06', orientation: 'vertical' },
        { id: 16, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces06.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 07' : 'Quinces - Portrait 07', orientation: 'vertical' },
        { id: 17, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces08.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 08' : 'Quinces - Portrait 08', orientation: 'vertical' },
        { id: 18, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces10.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 09' : 'Quinces - Portrait 09', orientation: 'vertical' },
        { id: 19, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces11.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 10' : 'Quinces - Portrait 10', orientation: 'vertical' },
        { id: 20, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces09.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 11' : 'Quinces - Portrait 11', orientation: 'vertical' },
        { id: 21, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces13.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 12' : 'Quinces - Portrait 12', orientation: 'vertical' },
        { id: 22, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces14.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 13' : 'Quinces - Portrait 13', orientation: 'vertical' },
        { id: 23, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces15.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 14' : 'Quinces - Portrait 14', orientation: 'vertical' },
        { id: 24, category: 'quinces', src: 'https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces28.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Quinces - Retrato 15' : 'Quinces - Portrait 15', orientation: 'vertical' },

        // --- NIÑOS ---
        { id: 25, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os01.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 01' : 'Kids - Portrait 01', orientation: 'vertical' },
        { id: 26, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os02.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 02' : 'Kids - Portrait 02', orientation: 'vertical' },
        { id: 27, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os03.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 03' : 'Kids - Portrait 03', orientation: 'vertical' },
        { id: 28, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os04.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 04' : 'Kids - Portrait 04', orientation: 'vertical' },
        { id: 29, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os05.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 05' : 'Kids - Portrait 05', orientation: 'vertical' },
        { id: 30, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os06.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Horizontal 01' : 'Kids - Horizontal 01', orientation: 'horizontal' },
        { id: 31, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os07.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 06' : 'Kids - Portrait 06', orientation: 'vertical' },
        { id: 32, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os08.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 07' : 'Kids - Portrait 07', orientation: 'vertical' },
        { id: 33, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os11.webp?tr=w-1200,h-800,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Horizontal 02' : 'Kids - Horizontal 02', orientation: 'horizontal' },
        { id: 34, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os13.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 08' : 'Kids - Portrait 08', orientation: 'vertical' },
        { id: 35, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os14.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 09' : 'Kids - Portrait 09', orientation: 'vertical' },
        { id: 36, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os15.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 10' : 'Kids - Portrait 10', orientation: 'vertical' },
        { id: 37, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os17.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 11' : 'Kids - Portrait 11', orientation: 'vertical' },
        { id: 38, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os18.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 12' : 'Kids - Portrait 12', orientation: 'vertical' },
        { id: 39, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os19.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 13' : 'Kids - Portrait 13', orientation: 'vertical' },
        { id: 40, category: 'ninos', src: 'https://ik.imagekit.io/ilczwuvvn/NI%C3%91OS/Ni%C3%B1os20.webp?tr=w-800,h-1200,fo-auto,f-auto,q-70', alt: isEs ? 'Niños - Retrato 14' : 'Kids - Portrait 14', orientation: 'vertical' },
      ];
  }, [language]);

  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [visibleCount, setVisibleCount] = useState(6);
  const ITEMS_PER_LOAD = 6;

  const filterCategories = [
    { name: t.portfolio.filters.all, value: 'all' },
    { name: t.portfolio.filters.bodas, value: 'bodas' },
    { name: t.portfolio.filters.quinces, value: 'quinces' },
    { name: t.portfolio.filters.ninos, value: 'ninos' },
    { name: t.portfolio.filters.artisticas, value: 'artisticas' },
    { name: t.portfolio.filters.diseno, value: 'diseno' },
  ];

  useEffect(() => {
    // Resetear conteo y filtrar
    setVisibleCount(6);
    if (activeFilter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter, portfolioItems]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_LOAD);
  };

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMoreItems = visibleCount < filteredItems.length;

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-28 bg-black/20">
      <div className="container mx-auto px-3 sm:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-widest text-white mb-3">{t.portfolio.title}</h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">{t.portfolio.subtitle}</p>
        </motion.div>

        {/* Barra de Filtros */}
        <div className="flex md:flex-wrap md:justify-center gap-3 mb-8 md:mb-10 overflow-x-auto pb-4 md:pb-0 -mx-3 px-3 md:mx-0 md:px-0 no-scrollbar snap-x">
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

        {/* Contenedor Grid Responsivo */}
        <div className="min-h-[300px]">
            <div
              className="
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 items-start
              "
            >
              <AnimatePresence mode="popLayout">
                {visibleItems.map((item) => (
                   <PortfolioImageCard key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </div>
        </div>

        {/* Botón Cargar Más (Load More) */}
        {hasMoreItems && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-10"
          >
            <button 
              onClick={handleLoadMore}
              className="group relative flex items-center gap-3 px-8 py-3 bg-gray-900 border border-gray-700 rounded-full text-sm uppercase tracking-widest text-white hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              <RefreshIcon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>{t.portfolio.loadMore}</span>
              <span className="absolute -bottom-8 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {t.portfolio.showing} {visibleCount} {t.portfolio.of} {filteredItems.length}
              </span>
            </button>
          </motion.div>
        )}

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
