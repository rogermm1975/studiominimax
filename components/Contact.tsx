import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, LocationMarkerIcon, WhatsAppIcon } from '../assets/icons';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-tr from-red-900/30 to-orange-800/20 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-widest text-white">Hagamos Algo Increíble</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">¿Listo para dar vida a tu proyecto? Contáctanos y empecemos a crear.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Action Buttons Container */}
          <motion.div 
            className="md:col-span-3 bg-black/30 backdrop-blur-md p-8 rounded-lg border border-gray-800 flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-heading tracking-wider text-white mb-4">Inicia la Conversación</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              Estamos listos para escucharte. Elige el método que prefieras para contarnos sobre tu proyecto.
            </p>
            <div className="w-full max-w-sm space-y-4">
              <button 
                type="button"
                onClick={() => window.location.href = 'mailto:carlose7460@gmail.com?subject=Solicitud%20de%20Cotización%20-%20Habana%20MiniMax&body=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios.%0D%0A%0D%0ANombre:%0D%0AServicio%20de%20interés:%0D%0ADetalles%20del%20proyecto:'}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full uppercase text-sm tracking-widest transition-all duration-300 transform hover:scale-105 btn-neon-gradient-cyan flex items-center justify-center"
              >
                <MailIcon className="w-5 h-5 mr-3" />
                Enviar un Correo
              </button>
              <a 
                href="https://wa.me/5352679828?text=Hola,%20vengo%20de%20su%20página%20web%20y%20quisiera%20más%20información."
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-600 to-teal-500 text-white font-bold py-4 px-8 rounded-full uppercase text-sm tracking-widest transition-all duration-300 transform hover:scale-105 btn-neon-gradient-green flex items-center justify-center"
              >
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                Chatear por WhatsApp
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              También puedes usar la información de contacto directo que se encuentra a la derecha.
            </p>
          </motion.div>
          
          {/* Info & Map */}
          <motion.div 
            className="md:col-span-2 flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
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
                        <button
                          type="button"
                          onClick={() => window.location.href = 'mailto:carlose7460@gmail.com'}
                          className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors bg-transparent border-0 p-0 cursor-pointer text-left w-full"
                        >
                            <MailIcon className="w-5 h-5 mr-3" />
                            contacto@habanaminimax.com
                        </button>
                        <a href="https://wa.me/5352679828" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                            <PhoneIcon className="w-5 h-5 mr-3" />
                            +53 52679828
                        </a>
                        <div className="flex items-start text-gray-300">
                            <LocationMarkerIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                            <span>
                                Calle 48 entre 247 y 245, Punta Brava, La Lisa, La Habana, Cuba
                                <br/>
                                <span className="text-cyan-400 text-xs italic opacity-80">(Solo con cita previa)</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
               <iframe
                title="Ubicación del Estudio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5345.405401325455!2d-82.49799038144072!3d23.017542401031744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd7274fea15d87%3A0x69b442927535b553!2sFoto%20Max!5e0!3m2!1ses-419!2sus!4v1763085789044!5m2!1ses-419!2sus"
                width="100%"
                height="250"
                className="rounded-lg border border-gray-800 bg-gray-900/50"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;