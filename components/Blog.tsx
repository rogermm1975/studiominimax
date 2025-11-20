
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, XIcon, CalendarIcon, UserIcon, ClockIcon } from '../assets/icons';

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  content: string[]; // Array de párrafos para simular contenido rico
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/blog1/800/600',
    category: 'Consejos',
    title: '5 Lugares Secretos en La Habana para una Sesión de Fotos Inolvidable',
    excerpt: 'Descubre rincones mágicos más allá del Capitolio y el Malecón. Te llevamos a locaciones únicas que harán tus fotos espectaculares.',
    date: '15 Oct, 2023',
    author: 'Equipo MiniMax',
    readTime: '5 min',
    content: [
        "La Habana es un lienzo infinito. Todos conocemos el encanto del Malecón al atardecer o la majestuosidad del Capitolio, pero la verdadera magia de la ciudad a menudo se esconde en los detalles, en esos rincones donde la luz juega con la arquitectura de formas inesperadas.",
        "1. **La Azotea de los Sueños (Centro Habana):** No nos referimos a la famosa Guarida, sino a las azoteas vecinas menos transitadas. Aquí, entre sábanas tendidas al sol y antenas antiguas, se consigue una vista del skyline habanero cruda y auténtica. La luz de la tarde crea siluetas perfectas para un estilo editorial.",
        "2. **El Bosque de La Habana:** Un clásico que nunca falla, pero el secreto está en adentrarse más allá de los senderos principales. Los inmensos árboles Jagüey con sus raíces aéreas crean túneles naturales que filtran la luz de manera mística. Es el escenario ideal para sesiones de Quinces con temática de fantasía o bodas bohemias.",
        "3. **Callejones de San Isidro:** Si buscas color y arte urbano, este es el lugar. Las paredes llenas de grafitis vibrantes ofrecen un contraste moderno y rebelde, perfecto para outfits atrevidos. Aquí la clave es interactuar con el entorno, no solo posar frente a él.",
        "4. **La Playa de Cojímar:** Lejos del bullicio de las Playas del Este, la costa rocosa de Cojímar ofrece un dramatismo visual único. El choque de las olas contra las rocas y el pequeño castillo al fondo evocan la nostalgia de Hemingway.",
        "5. **Mansiones del Vedado:** Muchas casas coloniales permiten sesiones en sus jardines y portales. Buscamos aquellas con vitrales de colores y pisos de mosaico originales. La luz que atraviesa estos cristales pinta la piel de colores suaves, creando retratos íntimos y llenos de historia."
    ]
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/blog2/800/600',
    category: 'Historias de Bodas',
    title: 'La Boda de Ana y Javier: Amor y Magia en el Corazón de la Ciudad',
    excerpt: 'Revive con nosotros la emotiva historia de una boda que capturamos en las calles coloniales, un testimonio del amor eterno en La Habana.',
    date: '02 Nov, 2023',
    author: 'Carlos E.',
    readTime: '4 min',
    content: [
        "Ana y Javier viajaron desde España con un sueño: casarse en la tierra donde se conocieron sus abuelos. No querían un salón de fiestas convencional; querían que La Habana fuera su invitada de honor.",
        "El día comenzó en una casa de renta colonial en el Paseo del Prado. La luz de la mañana entraba suave por los ventanales altos, perfecta para capturar los detalles: el encaje del vestido, los gemelos del novio, los nervios y las risas con la familia.",
        "La ceremonia fue íntima, en un jardín secreto del Vedado, rodeados de vegetación tropical. Pero el verdadero espectáculo visual ocurrió después. Decidimos caminar con ellos por las calles de La Habana Vieja. No hubo poses forzadas, solo ellos dos caminando de la mano, recibiendo las felicitaciones espontáneas de la gente.",
        "El momento cumbre llegó en el Malecón, justo en la hora azul. Logramos una toma cinematográfica con un almendrón clásico pasando en movimiento borroso detrás de ellos, congelando su beso mientras la ciudad se movía a su alrededor. Fue un recordatorio de por qué amamos lo que hacemos: capturar la eternidad en un segundo.",
        "La noche terminó con una fiesta llena de salsa y mojitos. Las fotos de la recepción están llenas de movimiento, desenfoques artísticos y colores neón, reflejando la alegría pura de la celebración cubana."
    ]
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/blog3/800/600',
    category: 'Quinceañeras',
    title: 'Guía Definitiva para la Sesión de Quinces Perfecta',
    excerpt: 'Desde la elección del vestuario hasta las mejores poses. Todos los trucos y consejos para que brilles en tu día especial.',
    date: '20 Nov, 2023',
    author: 'Equipo MiniMax',
    readTime: '6 min',
    content: [
        "Tus 15 años son un hito, y las fotos son lo único que te quedará para siempre de ese día (además de los recuerdos, claro). En Habana MiniMax hemos fotografiado cientos de quinces, y aquí te damos nuestros mejores secretos para que tu sesión sea de revista.",
        "**1. La Planificación del Vestuario:** Menos es más, pero la variedad es clave. Recomendamos 3 cambios principales: El vestido de gala tradicional (para la foto clásica en el estudio o una locación palaciega), un outfit urbano/chic (algo con lo que saldrías con tus amigos, para fotos más naturales y divertidas) y algo que refleje tu pasión (¿bailas? ¿tocas guitarra? ¿haces deporte? ¡tráelo!).",
        "**2. Maquillaje y Clima:** Cuba es húmeda y calurosa. Pídele a tu maquillista que use productos *waterproof* y de larga duración, pero evita el exceso de brillo en la zona T. Para las fotos en exteriores, lleva siempre papelitos absorbentes y polvos para retoques rápidos.",
        "**3. La Hora Mágica:** Confía en nosotros cuando te citamos temprano o tarde. Evitamos el sol del mediodía (12pm - 3pm) porque crea sombras duras debajo de los ojos. Buscamos el amanecer para playas vacías y luz suave, o el atardecer ('Golden Hour') para esa luz dorada y envolvente que hace que la piel brille.",
        "**4. Posing 101:** Olvida las poses rígidas. Lo que está de moda es el movimiento. Juega con tu vestido, camina hacia la cámara, ríete de verdad (nosotros te haremos chistes malos para lograrlo). Mantén la espalda recta pero los hombros relajados. Y sobre todo, confía en tu fotógrafo; si te pedimos que mires hacia una luz específica, ¡hay una razón artística detrás!",
        "**5. Diviértete:** Se nota en la mirada cuando estás estresada. Tómalo como un día para ser modelo, para jugar y celebrar quién eres. Si tú disfrutas, la cámara lo nota."
    ]
  },
];

const BlogPostCard: React.FC<{ post: BlogPost, onClick: (post: BlogPost) => void }> = ({ post, onClick }) => {
  return (
    <motion.div
      className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 flex flex-col h-full group cursor-pointer"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => onClick(post)}
    >
      <div className="relative h-48 overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
            <p className="text-cyan-400 text-xs uppercase tracking-widest font-bold">{post.category}</p>
            <span className="text-gray-500 text-[10px] flex items-center">
                <ClockIcon className="w-3 h-3 mr-1" /> {post.readTime}
            </span>
        </div>
        <h3 className="text-xl font-heading tracking-wider text-white mb-3 flex-grow group-hover:text-cyan-300 transition-colors">{post.title}</h3>
        <p className="text-gray-400 font-light mb-4 text-sm line-clamp-3">{post.excerpt}</p>
        <button 
          className="nav-link-neon text-cyan-400 font-bold uppercase text-xs tracking-widest mt-auto inline-flex items-center self-start"
        >
          Leer Artículo
          <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const BlogModal: React.FC<{ post: BlogPost | null, onClose: () => void }> = ({ post, onClose }) => {
    // Bloquear scroll del body cuando el modal está abierto
    useEffect(() => {
        if (post) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [post]);

    if (!post) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
        >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="relative bg-[#0a0b14] w-full max-w-3xl max-h-[90vh] rounded-2xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-cyan-500 hover:text-black transition-colors duration-300"
                >
                    <XIcon className="w-6 h-6" />
                </button>

                {/* Scrollable Area */}
                <div className="overflow-y-auto custom-scrollbar">
                    {/* Header Image */}
                    <div className="relative h-64 sm:h-80 w-full">
                         <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] to-transparent"></div>
                         <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                            <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                                {post.category}
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-white font-bold leading-tight text-shadow">
                                {post.title}
                            </h2>
                         </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-8">
                        {/* Metadata */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 mb-8 border-b border-gray-800 pb-6">
                            <div className="flex items-center">
                                <CalendarIcon className="w-4 h-4 mr-2 text-cyan-500" />
                                {post.date}
                            </div>
                            <div className="flex items-center">
                                <UserIcon className="w-4 h-4 mr-2 text-cyan-500" />
                                Por {post.author}
                            </div>
                            <div className="flex items-center">
                                <ClockIcon className="w-4 h-4 mr-2 text-cyan-500" />
                                Lectura: {post.readTime}
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed space-y-6">
                            {post.content.map((paragraph, index) => (
                                <p key={index} dangerouslySetInnerHTML={{ 
                                    // Permitimos negritas básicas dentro del texto
                                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') 
                                }}></p>
                            ))}
                        </div>

                         {/* Call to Action inside Blog */}
                         <div className="mt-12 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 text-center">
                             <h4 className="text-xl font-heading text-white mb-2">¿Te inspiraste con este artículo?</h4>
                             <p className="text-gray-400 text-sm mb-4">Reserva tu sesión hoy y creemos algo mágico juntos.</p>
                             <a 
                                href="#contacto" 
                                onClick={(e) => { e.preventDefault(); onClose(); document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'}); }}
                                className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-full text-xs uppercase tracking-widest transition-colors"
                             >
                                 Reservar Ahora
                             </a>
                         </div>
                    </div>
                </div>
            </motion.div>
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #0a0b14; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #06b6d4; }
            `}</style>
        </motion.div>
    );
};

const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogPostCard post={post} onClick={setSelectedPost} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
          {selectedPost && (
              <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
          )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
