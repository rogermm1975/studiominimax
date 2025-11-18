
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '../assets/icons';

const blogPosts = [
  {
    image: 'https://picsum.photos/seed/blog1/600/400',
    category: 'Consejos',
    title: '5 Lugares Secretos en La Habana para una Sesión de Fotos Inolvidable',
    excerpt: 'Descubre rincones mágicos más allá del Capitolio y el Malecón. Te llevamos a locaciones únicas que harán tus fotos espectaculares.',
  },
  {
    image: 'https://picsum.photos/seed/blog2/600/400',
    category: 'Historias de Bodas',
    title: 'La Boda de Ana y Javier: Amor y Magia en el Corazón de la Ciudad',
    excerpt: 'Revive con nosotros la emotiva historia de una boda que capturamos en las calles coloniales, un testimonio del amor eterno en La Habana.',
  },
  {
    image: 'https://picsum.photos/seed/blog3/600/400',
    category: 'Quinceañeras',
    title: 'Guía Definitiva para la Sesión de Quinces Perfecta',
    excerpt: 'Desde la elección del vestuario hasta las mejores poses. Todos los trucos y consejos para que brilles en tu día especial.',
  },
];

const BlogPostCard = ({ image, category, title, excerpt }: typeof blogPosts[0]) => {
  return (
    <motion.div
      className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 flex flex-col h-full group"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-cyan-400 text-sm uppercase tracking-widest mb-2">{category}</p>
        <h3 className="text-xl font-heading tracking-wider text-white mb-3 flex-grow">{title}</h3>
        <p className="text-gray-400 font-light mb-4 text-sm">{excerpt}</p>
        <a href="#" className="nav-link-neon text-cyan-400 font-bold uppercase text-xs tracking-widest mt-auto inline-flex items-center self-start">
          Leer Más
          <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

const Blog: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

  return (
    <section id="blog" className="py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-widest text-white">Desde el Lente</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">Consejos, historias y el arte detrás de cada disparo.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogPostCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
