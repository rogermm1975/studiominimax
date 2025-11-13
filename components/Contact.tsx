import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '../assets/icons';

const Contact: React.FC = () => {
  const inputStyles = "w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all";
  const labelStyles = "block text-sm font-bold mb-2 uppercase tracking-wider text-gray-300";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // En una aplicación real, aquí se manejaría el envío del formulario,
    // por ejemplo, enviando los datos a un servidor o a un servicio de correo.
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="contacto" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-tr from-red-900/30 to-orange-800/20 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading tracking-widest text-white">Hagamos Algo Increíble</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">¿Listo para dar vida a tu proyecto? Contáctanos y empecemos a crear.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div 
            className="md:col-span-3 bg-black/30 backdrop-blur-md p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className={labelStyles}>Nombre</label>
                  <input type="text" id="name" name="name" className={inputStyles} placeholder="Tu nombre completo" required />
                </div>
                <div>
                  <label htmlFor="contactInfo" className={labelStyles}>Email / WhatsApp</label>
                  <input type="text" id="contactInfo" name="contactInfo" className={inputStyles} placeholder="Correo o número de teléfono" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="serviceType" className={labelStyles}>Tipo de Servicio</label>
                  <select id="serviceType" name="serviceType" className={inputStyles} defaultValue="Sesión Editorial">
                    <option>Sesión Editorial</option>
                    <option>Cobertura de Evento</option>
                    <option>Dirección de Arte</option>
                    <option>Producción Personalizada</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className={labelStyles}>Fecha Sugerida</label>
                  <input type="date" id="date" name="date" className={inputStyles} />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="details" className={labelStyles}>Detalles del Proyecto</label>
                <textarea id="details" name="details" rows={5} className={inputStyles} placeholder="Cuéntanos sobre tu visión, referencias, y cualquier detalle importante." required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full uppercase text-sm tracking-widest hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </motion.div>
          
          {/* Info */}
          <motion.div 
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
                <h3 className="text-3xl font-heading tracking-wider mb-4 text-cyan-400">Flujo de Trabajo</h3>
                <p className="text-gray-300 mb-4">1. Contacto inicial y briefing.</p>
                <p className="text-gray-300 mb-4">2. Propuesta personalizada y reserva.</p>
                <p className="text-gray-300 mb-4">3. Sesión de pre-producción creativa.</p>
                <p className="text-gray-300">4. ¡Día de rodaje! La magia sucede.</p>
            </div>
             <div>
                <h3 className="text-3xl font-heading tracking-wider mb-4 text-cyan-400">Contacto Directo</h3>
                <div className="space-y-4">
                    <a href="mailto:hola@habanaminimax.com" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                        <MailIcon className="w-5 h-5 mr-3" />
                        hola@habanaminimax.com
                    </a>
                    <a href="https://wa.me/5355555555" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                        <PhoneIcon className="w-5 h-5 mr-3" />
                        +53 5 555 5555
                    </a>
                    <div className="flex items-start text-gray-300">
                        <LocationMarkerIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                        <span>Calle 23, Vedado, La Habana, Cuba <br/>(Solo con cita previa)</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;