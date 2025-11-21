
import React from 'react';
import { motion } from 'framer-motion';
import { CameraIcon, EditIcon, StarIcon, CheckCircleIcon, TshirtIcon } from '../assets/icons';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <motion.div 
      className="bg-gray-900/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-colors duration-300 h-full"
      whileHover={{ y: -5 }}
    >
      <div className="text-cyan-400 mb-4 scale-90 origin-left">{icon}</div>
      <h3 className="text-xl font-heading tracking-wider mb-2 text-white">{title}</h3>
      <p className="text-gray-400 font-light text-sm">{description}</p>
    </motion.div>
  );
};

const ProcessStep = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 border-2 border-cyan-500 mb-4">
        <CheckCircleIcon className="w-6 h-6 text-cyan-500" />
      </div>
      <h4 className="text-lg font-heading tracking-wider text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm font-light">{description}</p>
    </div>
  );
}

const Services: React.FC = () => {
  const servicesData = [
    { icon: <CameraIcon className="w-10 h-10" />, title: 'Fotografía', description: 'Sesiones para quinceañeras, bodas, banquetes, niños, embarazadas, artísticas y más. Capturamos tus momentos inolvidables.' },
    { icon: <EditIcon className="w-10 h-10" />, title: 'Edición Web', description: 'Creación de estilos únicos para páginas web, landing pages y proyectos empresariales que reflejen tu visión.' },
    { icon: <StarIcon className="w-10 h-10" />, title: 'Diseño Gráfico', description: 'Diseño profesional de posters, libros, revistas, gigantografías y cualquier pieza visual que necesites.' },
    { icon: <TshirtIcon className="w-10 h-10" />, title: 'Sublimación', description: 'Personalizamos pullovers, cuadros, tazas, gorras y todo tipo de souvenirs con la más alta calidad.' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="servicios" className="py-16 sm:py-20 md:py-28 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-widest text-white mb-3">Nuestros Servicios</h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">Creamos experiencias visuales que trascienden lo convencional.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {servicesData.map((service, index) => (
              <motion.div variants={itemVariants} key={index} >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://picsum.photos/seed/havana-street/800/900" alt="Fotógrafo en La Habana" className="rounded-lg shadow-xl object-cover h-full w-full opacity-90 grayscale-[30%]" />
          </motion.div>
        </div>
        
        {/* Process Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-heading tracking-widest text-white mb-10">Nuestro Proceso Creativo</h3>
          <div className="relative grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <div className="absolute top-7 left-0 w-full h-px bg-gray-800 hidden md:block"></div>
             <div className="absolute top-7 left-0 w-full h-px hidden md:block" style={{ background: 'linear-gradient(90deg, rgba(6,182,212,1) 0%, rgba(255,107,0,0) 100%)', clipPath: 'polygon(0 0, 33% 0, 33% 100%, 0% 100%)' }}></div>
            <ProcessStep title="01. Preproducción" description="Definimos la visión, locaciones y logística para asegurar que cada detalle esté alineado con tus objetivos." />
            <ProcessStep title="02. Rodaje" description="El día de la sesión, donde la creatividad fluye y capturamos la magia. Dirección profesional en un ambiente relajado." />
            <ProcessStep title="03. Post & Entrega" description="Selección y edición meticulosa para realzar cada imagen. Entrega final en alta resolución a través de una galería privada." />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
