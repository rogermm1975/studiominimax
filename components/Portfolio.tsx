
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section id="portfolio" className="py-16 sm:py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-widest text-white">Nuestro Portafolio</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">Explora una selección de nuestros trabajos más recientes.</p>
        </motion.div>

        <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-4 py-2 text-sm sm:px-6 sm:py-2.5 font-semibold uppercase tracking-widest rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.value
                  ? 'bg-cyan-500 text-[#05060d] btn-neon-cyan'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
