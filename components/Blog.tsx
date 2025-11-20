
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
    title: '6 Lugares Secretos en La Habana para una Sesión de Fotos Inolvidable',
    excerpt: 'Descubre rincones mágicos y perspectivas únicas. Te llevamos a locaciones que harán tus fotos espectaculares, desde el mar hasta la arquitectura monumental.',
    date: '15 Oct, 2023',
    author: 'Equipo MiniMax',
    readTime: '6 min',
    content: [
        "La Habana es un lienzo infinito. Todos conocemos el encanto del Malecón al atardecer, pero la verdadera magia de la ciudad a menudo se esconde en los detalles, en esos rincones donde la luz juega con la arquitectura de formas inesperadas.",
        "1. **La Azotea de los Sueños (Centro Habana):** No nos referimos a la famosa Guarida, sino a las azoteas vecinas menos transitadas. Aquí, entre sábanas tendidas al sol y antenas antiguas, se consigue una vista del skyline habanero cruda y auténtica. La luz de la tarde crea siluetas perfectas para un estilo editorial.",
        "2. **El Bosque de La Habana:** Un clásico que nunca falla, pero el secreto está en adentrarse más allá de los senderos principales. Los inmensos árboles Jagüey con sus raíces aéreas crean túneles naturales que filtran la luz de manera mística. Es el escenario ideal para sesiones de Quinces con temática de fantasía o bodas bohemias.",
        "3. **Callejones de San Isidro:** Si buscas color y arte urbano, este es el lugar. Las paredes llenas de grafitis vibrantes ofrecen un contraste moderno y rebelde, perfecto para outfits atrevidos. Aquí la clave es interactuar con el entorno, no solo posar frente a él.",
        "4. **Marina Hemingway:** Cambiamos las rocas por el glamour náutico. Los canales de la Marina, con sus yates y arquitectura de los años 50, ofrecen un escenario sofisticado y diferente. Es ideal para capturar atardeceres con un toque de exclusividad, reflejos en el agua tranquila y una elegancia veraniega única.",
        "5. **Mansiones del Vedado:** Muchas casas coloniales permiten sesiones en sus jardines y portales. Buscamos aquellas con vitrales de colores y pisos de mosaico originales. La luz que atraviesa estos cristales pinta la piel de colores suaves, creando retratos íntimos y llenos de historia.",
        "6. **Capitolio de La Habana:** El gigante de la ciudad. Aunque es el ícono más conocido, el secreto para una foto única está en la perspectiva. Olvida la foto frontal típica llena de turistas; nosotros buscamos los ángulos laterales, el juego de sombras dramáticas entre sus inmensas columnas o el encuadre desde las calles aledañas, donde la vida cotidiana contrasta con su cúpula majestuosa."
    ]
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/blog2/800/600',
    category: 'Historias de Bodas',
    title: 'La Boda de Ana y Javier: Amor y Magia en el Corazón de La Habana',
    excerpt: 'Revive con nosotros la emotiva historia de una boda que capturamos en las calles coloniales, un testimonio del amor eterno en La Habana.',
    date: '02 Nov, 2025',
    author: 'Carlos E.',
    readTime: '4 min',
    content: [
        "Cuando Ana y Javier tomaron un avión desde España con rumbo a Cuba, no solo viajaban a una isla caribeña. Venían a cumplir un sueño: unir sus vidas en la tierra donde comenzó la historia de su familia. Y querían que La Habana, con toda su esencia y nostalgia, fuera una invitada de honor en su boda.",
        "**✨ La magia de comenzar el día en un lugar con historia**",
        "La mañana despertó en una casa colonial del Paseo del Prado. La luz suave entraba por los grandes ventanales iluminando cada detalle: el encaje delicado del vestido, los gemelos del novio, los nervios, las risas, los abrazos eternos. Cada emoción tenía una fotografía esperándola.",
        "**🌿 Un “sí, acepto” en un jardín escondido**",
        "La ceremonia se celebró en un jardín secreto del Vedado, rodeado de vegetación tropical y aire a romance. Todo fue íntimo, auténtico, perfecto. Pero la verdadera aventura comenzó después.",
        "**🚶 Amor en movimiento por La Habana Vieja**",
        "Caminamos sin prisa, dejando que la ciudad nos guiara. Sin poses forzadas. Sin guiones. Solo ellos dos, enamorados, recibiendo felicitaciones espontáneas de los habaneros que celebran el amor como si fuera suyo. Cada calle, cada arco, cada color… se volvió parte de su historia.",
        "**🌅 El beso eterno en el Malecón**",
        "Llegamos al Malecón justo en la hora azul. El mar, el cielo y la ciudad se unieron en un solo cuadro cinematográfico. En ese instante, un almendrón clásico pasó detrás de ellos y su beso quedó suspendido en el tiempo. Es por momentos así que amamos lo que hacemos: congelar la eternidad en un segundo.",
        "**🎉 Una noche que nunca se olvida**",
        "La fiesta terminó con mojitos, salsa y sonrisas desbordando alegría. Las fotos están llenas de movimiento, luces de neón, emoción pura. El reflejo perfecto de lo que significa casarse en La Habana: celebrar la vida y el amor con el corazón abierto.",
        "**❤️ Porque tu amor también merece una historia así**",
        "Cada pareja es un universo. Nosotros nos encargamos de convertirlo en arte. Queremos que, dentro de 20 años, revivas cada nervio, cada risa y cada latido del día más especial de tu vida.",
        "📩 Si sueñas con una boda destino en Cuba, hablemos. Estaremos felices de capturar tu historia en esta ciudad mágica."
    ]
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/blog3/800/600',
    category: 'Quinceañeras',
    title: 'La Guía Definitiva para una Sesión de Fotos de Quinceañera Perfecta en La Habana',
    excerpt: 'Cumplir 15 no es solo cambiar de número. Descubre nuestros secretos para una sesión inolvidable en La Habana: vestuario, maquillaje, posing y locaciones de película.',
    date: '20 Nov, 2025',
    author: 'MiniMax Studio',
    readTime: '5 min',
    content: [
        "Cumplir 15 no es solo cambiar de número. Es ese instante mágico donde una niña mira hacia el futuro y descubre a la mujer que está comenzando a ser. Y qué mejor escenario para capturar esa transformación que La Habana, ciudad que hace que todo se sienta eterno.",
        "En MiniMax Studio hemos fotografiado cientos de quinceañeras, ayudándolas a contar su historia con luz, color y emoción. Hoy te compartimos nuestros mejores secretos… para que tu sesión sea inolvidable y de revista. 📸✨",
        "**✨ El Vestuario: Tu personalidad es la protagonista**",
        "Dicen que “menos es más”… pero la variedad también es clave. Recomendamos 3 looks principales: 1️⃣ Vestido de gala – Para ese momento princesa que tu familia atesorará. 2️⃣ Look urbano/chic – Natural, divertido… ¡muy tú! 3️⃣ Tu pasión hecha moda – Danza, música, deporte… tu esencia. Aquí no seguimos tendencias. Las creamos contigo.",
        "**💄 Maquillaje que resiste el Caribe**",
        "Cuba = calor + humedad 🌞. Por eso: ✔ Productos waterproof. ✔ Larga duración. ✔ Cero brillo en zona T. ✔ Retoques rápidos (papel absorbente + polvos). Tu piel debe lucir radiante en cada foto… sin perder tu belleza natural.",
        "**🌅 La Hora Mágica: Cuando la luz enamora**",
        "La luz lo es todo en fotografía. 📌 Evitamos el sol del mediodía (sombras duras). 📌 Aprovechamos: Amanecer → playas vacías y luz suave de película. Atardecer → esa “Golden Hour” que hace brillar tu piel. Hora Azul → glamour cinematográfico cerca del mar. Cuando te pedimos madrugar… es para que tu álbum sea épico.",
        "**🎬 Posing 101: Más movimiento, menos rigidez**",
        "Olvida todo lo que has visto en fotos posadas del pasado. El mundo actual quiere actitud y naturalidad: Camina hacia la cámara. Juega con tu vestido. Ríe aunque sea por nuestros chistes malísimos 😅. Espalda recta, hombros relajados. Y confía: si pedimos algo raro, es arte.",
        "**📍 La Habana: Tu escenario de película**",
        "Aquí cada calle cuenta una historia: Habana Vieja: colores, texturas y nostalgia cubana. El Malecón: belleza, libertad y brisa del mar. Vedado: elegancia moderna + jardines secretos. Azoteas urbanas: frescura y moda actual. Autos clásicos: fotos que atrapan miradas en redes. Tu sesión debe sentirse como una película. Y tú eres la protagonista. 💃✨",
        "**💖 Disfrútalo: Las mejores fotos nacen de la felicidad**",
        "Lo decimos siempre: “Si te sientes hermosa, la cámara lo refleja.” La sesión es tu día para celebrar quién eres. Ríe, sueña, juega… Nosotros nos encargamos del resto.",
        "**🎁 Bonus: Lo que hace especial a MiniMax Studio**",
        "✨ Dirección profesional que te hace sentir segura. ✨ Asesoría personalizada en vestuario y maquillaje. ✨ Locaciones exclusivas y spots secretos de La Habana. ✨ Edición artística con sello cinematográfico. Nada es improvisado. Todo está diseñado para que brillen tus 15.",
        "**🌟 Tus 15 son únicos… y tú también**",
        "Queremos que dentro de muchos años cuando vuelvas a abrir tu álbum recuerdes exactamente cómo te sentías hoy: fuerte, hermosa, lista para el mundo.",
        "📩 Agenda tu sesión de quince con nosotros y hagamos que tu cuento se vuelva realidad."
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
