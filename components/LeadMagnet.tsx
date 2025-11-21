
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpenIcon, StarIcon, TicketIcon, PhotographIcon, CheckCircleIcon } from '../assets/icons';

const LeadMagnet: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulamos una petición de red
    setTimeout(() => {
      console.log('Lead Capturado:', { name, email });
      setStatus('success');
    }, 1500);
  };
  
  const resources = [
    { name: 'The Style Guide: Quinces Edition', description: 'Manual de estilismo y locaciones.', icon: <BookOpenIcon className="w-5 h-5" /> },
    { name: 'Planner Cronológico', description: 'Timeline de preparación paso a paso.', icon: <CheckCircleIcon className="w-5 h-5" /> },
    { name: 'Access Pass: 15% Off', description: 'Beneficio exclusivo para primera sesión.', icon: <TicketIcon className="w-5 h-5" /> },
    { name: 'Havana Art Wallpapers', description: 'Curaduría visual para tus dispositivos.', icon: <PhotographIcon className="w-5 h-5" /> },
  ];

  const inputClasses = "w-full bg-transparent border-b border-gray-700 py-3 px-2 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm tracking-wider font-light";

  return (
    <section id="recursos" className="py-20 md:py-32 bg-[#080910] relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Columna Izquierda: Valor y Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-cyan-500 mb-6">
              <StarIcon className="w-4 h-4" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase">Insider Access</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading text-white mb-6 leading-tight">
              Eleva tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Visión Creativa</span>
            </h2>
            
            <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">
              Únete a nuestra lista privada y recibe inmediatamente herramientas de planificación profesional y beneficios reservados para nuestra comunidad.
            </p>

            <div className="space-y-6">
              {resources.map((res, i) => (
                <div key={i} className="flex items-start group">
                  <div className="mt-1 mr-4 text-gray-600 group-hover:text-cyan-400 transition-colors">
                    {res.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold tracking-wide uppercase group-hover:text-cyan-200 transition-colors">{res.name}</h4>
                    <p className="text-gray-500 text-xs mt-1 font-light">{res.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario VIP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-900/20 to-transparent blur-xl rounded-2xl"></div>
            
            <div className="relative bg-[#05060d] border border-gray-800 p-8 md:p-12 rounded-sm shadow-2xl">
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-heading text-white mb-2">Solicitar Acceso</h3>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Gratuito & Instantáneo</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 block">Nombre Completo</label>
                        <input 
                          type="text" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          placeholder="Tu nombre" 
                          required 
                          className={inputClasses} 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 block">Correo Electrónico</label>
                        <input 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          placeholder="tucorreo@ejemplo.com" 
                          required 
                          className={inputClasses} 
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-white text-black font-bold py-4 px-8 mt-4 text-xs uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Procesando...' : 'Desbloquear Contenido'}
                    </button>
                    
                    <p className="text-[10px] text-center text-gray-600 mt-6">
                      Respetamos tu privacidad. Sin spam, solo arte.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 border-2 border-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircleIcon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-heading text-white mb-4">¡Bienvenido!</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Hemos enviado el enlace de descarga y tu código de acceso a <strong>{email}</strong>.
                    </p>
                    <p className="text-xs text-gray-600">
                      Por favor revisa tu bandeja de entrada (o spam) en los próximos minutos.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-xs font-bold text-white border-b border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                    >
                      Volver al formulario
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
