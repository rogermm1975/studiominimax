import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailIcon, PhoneIcon, LocationMarkerIcon, CheckCircleIcon, XCircleIcon, RefreshIcon, SpinnerIcon } from '../assets/icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    serviceType: 'Sesión Editorial',
    date: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const inputStyles = "w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all";
  const labelStyles = "block text-sm font-bold mb-2 uppercase tracking-wider text-gray-300";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to a CRM endpoint like GoHighLevel
    try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Fake network delay
        // In a real app, you would post to your CRM webhook:
        // await fetch('https://your-gohighlevel-webhook.com', {
        //   method: 'POST',
        //   body: JSON.stringify(formData),
        // });
        console.log("Form data submitted:", formData);
        setSubmitStatus('success');
    } catch (error) {
        console.error("Submission failed:", error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };
  
  const handleResetForm = () => {
    setFormData({
        name: '',
        contactInfo: '',
        serviceType: 'Sesión Editorial',
        date: '',
        details: '',
    });
    setSubmitStatus('idle');
  }

  const renderFormContent = () => {
    switch (submitStatus) {
        case 'success':
            return (
                <div className="text-center flex flex-col items-center justify-center min-h-[500px] md:min-h-0 md:h-full">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                        <CheckCircleIcon className="w-20 h-20 text-cyan-400 mb-6" />
                    </motion.div>
                    <h3 className="text-3xl font-heading tracking-wider text-white mb-3">¡Mensaje Enviado!</h3>
                    <p className="text-gray-300 max-w-sm mb-8">
                        Gracias por contactarnos. Hemos recibido tu solicitud y nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
                    </p>
                    <button
                        onClick={handleResetForm}
                        className="border-2 border-cyan-400 text-cyan-400 font-bold py-2 px-6 rounded-full uppercase text-sm tracking-widest hover:bg-cyan-400 hover:text-[#05060d] transition-colors duration-300 transform hover:scale-105 btn-neon-cyan"
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            );
        case 'error':
             return (
                <div className="text-center flex flex-col items-center justify-center min-h-[500px] md:min-h-0 md:h-full">
                    <motion.div initial={{ scale: 0, rotate: -15 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                        <XCircleIcon className="w-20 h-20 text-red-500 mb-6" />
                    </motion.div>
                    <h3 className="text-3xl font-heading tracking-wider text-white mb-3">Algo Salió Mal</h3>
                    <p className="text-gray-300 max-w-sm mb-8">
                        Lo sentimos, no pudimos enviar tu mensaje. Por favor, intenta de nuevo o contáctanos directamente por otra vía.
                    </p>
                    <button
                        onClick={() => handleSubmit(new Event('submit') as any)}
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-3 px-8 rounded-full uppercase text-sm tracking-widest hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 btn-neon-gradient-red flex items-center justify-center disabled:opacity-60"
                    >
                        <RefreshIcon className="w-5 h-5 mr-2" />
                        Intentar de Nuevo
                    </button>
                </div>
            );
        default:
            return (
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                        <label htmlFor="name" className={labelStyles}>Nombre</label>
                        <input type="text" id="name" name="name" className={inputStyles} placeholder="Tu nombre completo" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label htmlFor="contactInfo" className={labelStyles}>Email / WhatsApp</label>
                        <input type="text" id="contactInfo" name="contactInfo" className={inputStyles} placeholder="Correo o número de teléfono" required value={formData.contactInfo} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                        <label htmlFor="serviceType" className={labelStyles}>Tipo de Servicio</label>
                        <select id="serviceType" name="serviceType" className={inputStyles} value={formData.serviceType} onChange={handleChange}>
                            <option>Sesión Editorial</option>
                            <option>Cobertura de Evento</option>
                            <option>Dirección de Arte</option>
                            <option>Producción Personalizada</option>
                            <option>Otro</option>
                        </select>
                        </div>
                        <div>
                        <label htmlFor="date" className={labelStyles}>Fecha Sugerida</label>
                        <input type="date" id="date" name="date" className={inputStyles} value={formData.date} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="details" className={labelStyles}>Detalles del Proyecto</label>
                        <textarea id="details" name="details" rows={5} className={inputStyles} placeholder="Cuéntanos sobre tu visión, referencias, y cualquier detalle importante." required value={formData.details} onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full uppercase text-sm tracking-widest transition-all duration-300 transform hover:scale-105 btn-neon-gradient-cyan disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center">
                            {isSubmitting ? (
                                <>
                                    <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                                    Enviando...
                                </>
                            ) : (
                                'Enviar Mensaje'
                            )}
                        </button>
                    </div>
                </form>
            );
    }
  };

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
          {/* Form Container */}
          <motion.div 
            className="md:col-span-3 bg-black/30 backdrop-blur-md p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
                <motion.div
                    key={submitStatus}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderFormContent()}
                </motion.div>
            </AnimatePresence>
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
                        <a href="mailto:contacto@habanaminimax.com" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                            <MailIcon className="w-5 h-5 mr-3" />
                            contacto@habanaminimax.com
                        </a>
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
