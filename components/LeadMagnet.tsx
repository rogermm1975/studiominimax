
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiftIcon, BookOpenIcon, ClipboardListIcon, TicketIcon, PhotographIcon, DownloadIcon } from '../assets/icons';

const LeadMagnet: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead Capturado:', { name, email });
    // Aquí es donde normalmente enviarías los datos a un backend o servicio.
    // Por ahora, simplemente simulamos el éxito y mostramos los enlaces.
    setIsSubmitted(true);
  };
  
  const resources = [
    { name: 'Ebook: Guía de Quinces', icon: <BookOpenIcon className="w-6 h-6 mr-3" />, href: '#' },
    { name: 'Checklist de Planificación', icon: <ClipboardListIcon className="w-6 h-6 mr-3" />, href: '#' },
    { name: 'Cupón de Descuento 15%', icon: <TicketIcon className="w-6 h-6 mr-3" />, href: '#' },
    { name: 'Pack de Wallpapers', icon: <PhotographIcon className="w-6 h-6 mr-3" />, href: '#' },
  ];

  const formInputStyles = "w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all";

  return (
    <section id="recursos" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-6xl max-h-6xl bg-gradient-to-br from-cyan-900/30 to-red-800/20 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GiftIcon className="w-16 h-16 mx-auto text-cyan-400 mb-4" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-widest text-white">Desbloquea Contenido Exclusivo</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Accede a nuestra colección de recursos gratuitos diseñados para inspirarte y ayudarte a planificar tu sesión perfecta.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-xl mx-auto bg-black/30 backdrop-blur-md p-8 rounded-lg border border-gray-800"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" required className={formInputStyles} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu correo electrónico" required className={formInputStyles} />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full uppercase text-sm tracking-widest transition-all duration-300 transform hover:scale-105 btn-neon-gradient-cyan"
                >
                  Acceder Gratis
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl font-heading tracking-wider text-white mb-4">¡Gracias! Aquí tienes tus regalos.</h3>
                <p className="text-gray-400 mb-6">Haz clic en los enlaces para descargar cada recurso.</p>
                <div className="space-y-4">
                  {resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.href}
                      onClick={(e) => e.preventDefault()} // Quitar cuando tengas los links reales
                      title="Próximamente"
                      className="w-full bg-gray-800/50 hover:bg-gray-700/80 text-white font-semibold py-3 px-5 rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      {res.icon}
                      <span>{res.name}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;
