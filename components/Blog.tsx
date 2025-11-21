
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ArrowRightIcon } from '../assets/icons';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const selectedPost = t.blog.posts.find(p => p.id === selectedPostId);

  // Content Switcher based on Language and Post ID
  const getPostContent = (id: number, lang: string) => {
    if (lang === 'es') {
        switch(id) {
            case 1: return (
                <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                    <p>La celebración de los quince años marca una transición fundamental. Más allá de la fiesta, el registro fotográfico permanece como el testimonio tangible de esta etapa. Una sesión exitosa no es producto del azar, sino de una planificación meticulosa y una visión artística clara.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">1. Conceptualización y Estilismo</h3>
                    <p>Antes de seleccionar la primera locación, es imperativo definir la narrativa visual. ¿Buscamos una estética etérea y romántica o un enfoque urbano y editorial? El vestuario debe dialogar con el entorno, no competir con él. Recomendamos una paleta de colores que complemente la arquitectura de La Habana: tonos ocres, blancos puros o rojos saturados para generar contraste.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">2. La Importancia de la Hora Dorada</h3>
                    <p>La luz es el elemento que define la calidad de la imagen. Programamos nuestras sesiones principales durante el amanecer o el atardecer. Esta luz suave y direccional suaviza las texturas de la piel y aporta una atmósfera cinematográfica que es imposible de replicar con iluminación artificial dura.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">3. Logística y Tiempos</h3>
                    <p>El estrés es el enemigo de la naturalidad. Sugerimos limitar los cambios de vestuario a un máximo de tres o cuatro para optimizar el tiempo de rodaje. Un itinerario holgado permite a la quinceañera relajarse, lo que se traduce directamente en expresiones más genuinas y poses fluidas.</p>
                    <div className="bg-gray-900 border-l-2 border-cyan-500 p-6 mt-8">
                        <p className="text-sm italic text-gray-400">"La elegancia no consiste en llamar la atención, sino en ser recordada. Nuestro objetivo es crear imágenes atemporales que mantengan su impacto visual a través de las décadas."</p>
                    </div>
                </div>
            );
            case 2: return (
                <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                    <p>Uno de los desafíos más comunes en la fotografía de retrato es la rigidez del sujeto. La mayoría de nuestros clientes no son modelos profesionales, y es nuestra responsabilidad como directores creativos guiar la sesión hacia la naturalidad y la elegancia.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">La Geometría del Cuerpo</h3>
                    <p>El posing funciona a través de la creación de espacios negativos. Evitamos la simetría total, buscando ángulos que generen triángulos con los brazos y las piernas. Esto estiliza la figura y aporta dinamismo a la composición. Una ligera inclinación de hombros o la transferencia del peso hacia una pierna puede transformar una postura estática en una silueta elegante.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">La Mirada y la Conexión</h3>
                    <p>Los ojos son el punto focal de cualquier retrato. Instruimos sobre cómo relajar la mandíbula y suavizar la mirada. No siempre es necesario mirar al lente; la mirada perdida o dirigida hacia una fuente de luz puede evocar introspección y sofisticación.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">Movimiento Continuo</h3>
                    <p>La fotografía estática ha evolucionado hacia el "posing en movimiento". Pedimos a nuestros clientes que caminen, giren o interactúen con elementos del entorno. Capturar el movimiento congela la energía del momento, resultando en imágenes que parecen fotogramas de una película.</p>
                </div>
            );
            case 3: return (
                <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                    <p>La Habana no es solo un fondo; es un personaje más en nuestras historias. Su arquitectura ecléctica, que mezcla el barroco colonial con el art déco y el modernismo, ofrece un lienzo inigualable para la fotografía editorial.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">La Habana Vieja: Texturas e Historia</h3>
                    <p>Las calles empedradas y las fachadas desgastadas del casco histórico aportan una textura rica y profunda. Buscamos el contraste entre la decadencia arquitectónica y la sofisticación del vestuario de gala. Lugares como el Palacio de los Capitanes Generales ofrecen patios interiores con una luz difusa excepcional.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">El Vedado: Modernidad y Verdor</h3>
                    <p>Para sesiones con un aire más contemporáneo o señorial, las mansiones del Vedado son ideales. Las escalinatas de mármol, las columnas jónicas y la vegetación exuberante permiten composiciones más limpias y monumentales. La Avenida de los Presidentes ofrece perspectivas lineales perfectas para planos generales.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">El Litoral: Minimalismo Azul</h3>
                    <p>El Malecón y las playas del este ofrecen el escenario más minimalista: cielo y mar. Aquí, la composición se reduce a lo esencial. Trabajamos con la línea del horizonte y el espacio negativo para centrar toda la atención en el sujeto, utilizando la luz dorada del atardecer para siluetas dramáticas.</p>
                </div>
            );
            default: return <p>Contenido no disponible.</p>;
        }
    } else {
        // ENGLISH CONTENT
        switch(id) {
            case 1: return (
                <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                    <p>The celebration of the fifteenth birthday marks a fundamental transition. Beyond the party, the photographic record remains as the tangible testimony of this stage. A successful session is not a product of chance, but of meticulous planning and clear artistic vision.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">1. Conceptualization and Styling</h3>
                    <p>Before selecting the first location, it is imperative to define the visual narrative. Are we looking for an ethereal and romantic aesthetic or an urban and editorial approach? The wardrobe must dialogue with the environment, not compete with it. We recommend a color palette that complements Havana's architecture: ochre tones, pure whites, or saturated reds to generate contrast.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">2. The Importance of Golden Hour</h3>
                    <p>Light is the element that defines image quality. We schedule our main sessions during sunrise or sunset. This soft, directional light softens skin textures and provides a cinematic atmosphere that is impossible to replicate with harsh artificial lighting.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">3. Logistics and Timing</h3>
                    <p>Stress is the enemy of naturalness. We suggest limiting wardrobe changes to a maximum of three or four to optimize shooting time. A relaxed itinerary allows the quinceañera to relax, which translates directly into more genuine expressions and fluid poses.</p>
                    <div className="bg-gray-900 border-l-2 border-cyan-500 p-6 mt-8">
                        <p className="text-sm italic text-gray-400">"Elegance is not about being noticed, it's about being remembered. Our goal is to create timeless images that maintain their visual impact through the decades."</p>
                    </div>
                </div>
            );
            case 2: return (
                <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                    <p>One of the most common challenges in portrait photography is subject stiffness. Most of our clients are not professional models, and it is our responsibility as creative directors to guide the session towards naturalness and elegance.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">Body Geometry</h3>
                    <p>Posing works through the creation of negative spaces. We avoid total symmetry, looking for angles that generate triangles with arms and legs. This stylizes the figure and brings dynamism to the composition. A slight tilt of shoulders or shifting weight to one leg can transform a static posture into an elegant silhouette.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">The Gaze and Connection</h3>
                    <p>Eyes are the focal point of any portrait. We instruct on how to relax the jaw and soften the gaze. It is not always necessary to look at the lens; a lost gaze or looking towards a light source can evoke introspection and sophistication.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">Continuous Movement</h3>
                    <p>Static photography has evolved into "posing in motion". We ask our clients to walk, turn, or interact with environmental elements. Capturing movement freezes the energy of the moment, resulting in images that look like movie stills.</p>
                </div>
            );
            case 3: return (
                <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                    <p>Havana is not just a background; it is another character in our stories. Its eclectic architecture, mixing colonial baroque with art deco and modernism, offers an unmatched canvas for editorial photography.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">Old Havana: Textures and History</h3>
                    <p>Cobblestone streets and weathered facades of the historic center provide rich, deep texture. We seek the contrast between architectural decay and the sophistication of formal wear. Places like the Palace of the Captains General offer exceptional diffuse interior light.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">Vedado: Modernity and Greenery</h3>
                    <p>For sessions with a more contemporary or stately air, Vedado mansions are ideal. Marble staircases, Ionic columns, and lush vegetation allow for cleaner, monumental compositions. The Avenue of the Presidents offers perfect linear perspectives for wide shots.</p>
                    <h3 className="text-xl font-heading text-white mt-8 mb-4">The Coastline: Blue Minimalism</h3>
                    <p>The Malecon and eastern beaches offer the most minimalist setting: sky and sea. Here, composition is reduced to essentials. We work with the horizon line and negative space to focus all attention on the subject, utilizing golden sunset light for dramatic silhouettes.</p>
                </div>
            );
            default: return <p>Content not available.</p>;
        }
    }
  };

  return (
    <section id="blog" className="py-20 md:py-32 bg-[#05060d]">
      <div className="container mx-auto px-6">
        
        {/* Header Sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-white mb-4">
              {t.blog.title}
            </h2>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-md leading-relaxed">
              {t.blog.subtitle}
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="hidden md:block"
          >
             <span className="text-xs font-bold tracking-[0.2em] text-cyan-500 uppercase">{t.blog.badge}</span>
          </motion.div>
        </div>

        {/* Grid de Artículos */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {t.blog.posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedPostId(post.id)}
            >
              {/* Imagen Card */}
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-900 mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Meta Info Minimalista */}
              <div className="flex items-center space-x-3 text-[10px] font-bold tracking-[0.15em] text-cyan-500 mb-3 uppercase">
                <span>{post.category}</span>
                <span className="w-0.5 h-2 bg-gray-700"></span>
                <span className="text-gray-500">{post.date}</span>
              </div>

              {/* Título y Extracto */}
              <h3 className="text-xl md:text-2xl font-heading font-medium text-white leading-tight mb-3 group-hover:text-cyan-200 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>

              {/* Link Sutil */}
              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-cyan-400 transition-colors mt-auto">
                <span>{t.blog.readArticle}</span>
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal de Lectura Full Screen / Minimalista */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-4 md:py-8"
          >
            {/* Backdrop Blur */}
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedPostId(null)}
            ></div>

            <motion.div
              layoutId={`post-${selectedPost.id}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] bg-[#0a0a0a] border border-gray-800 overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedPostId(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-white hover:text-black rounded-full text-white transition-colors duration-300 backdrop-blur-sm"
              >
                <XIcon className="w-6 h-6" />
              </button>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto custom-scrollbar h-full">
                {/* Hero Image del Modal */}
                <div className="relative h-[40vh] w-full">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                </div>

                <div className="px-6 md:px-12 py-10 md:py-14 max-w-3xl mx-auto -mt-20 relative z-10">
                  
                  {/* Meta Data Header - Pure Text */}
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase mb-8">
                    <span>{selectedPost.date}</span>
                    <span className="text-gray-600">•</span>
                    <span>{selectedPost.category}</span>
                    <span className="text-gray-600">•</span>
                    <span>{selectedPost.readTime} {t.blog.readTime}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-white text-center leading-tight mb-12">
                    {selectedPost.title}
                  </h2>

                  {/* Contenido del Artículo */}
                  <div className="prose prose-invert prose-lg mx-auto prose-p:text-gray-300 prose-headings:font-heading prose-a:text-cyan-400">
                    {getPostContent(selectedPost.id, language)}
                  </div>

                  {/* Footer del Artículo */}
                  <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-xs text-gray-500 uppercase tracking-widest">{t.blog.writtenBy}</span>
                    
                    {/* Call to Action Sutil */}
                    <a href="#contacto" onClick={() => setSelectedPostId(null)} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest border-b border-transparent hover:border-cyan-400 pb-1">
                      {t.blog.cta}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #00f0ff;
        }
      `}</style>
    </section>
  );
};

export default Blog;
