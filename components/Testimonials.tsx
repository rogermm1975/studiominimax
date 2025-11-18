import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from '../assets/icons';

const testimonials = [
  {
    name: 'Ana de Armas',
    title: 'Actriz, Sesión Editorial',
    quote: 'El equipo de Habana MiniMax no solo toma fotos, cuenta historias. Lograron capturar una faceta de mí que pocas veces se ve. Profesionalidad y arte puro.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    name: 'Carlos Acosta',
    title: 'Bailarín, Cobertura de Evento',
    quote: 'Su cobertura del evento fue impecable. Discretos, atentos y con una sensibilidad única para captar la emoción del momento. El resultado superó mis expectativas.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    name: 'Camila Arteche',
    title: 'Influencer, Producción Personalizada',
    quote: '¡La mejor experiencia! Desde la idea inicial hasta la entrega final, todo fue perfecto. Entendieron mi visión y la elevaron a otro nivel. ¡Tremendo equipo!',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
  {
    name: 'Havana Club',
    title: 'Marca, Dirección de Arte',
    quote: 'Colaborar con ellos en nuestra última campaña fue un acierto. Su dirección de arte aportó frescura y autenticidad, reflejando perfectamente el espíritu de nuestra marca.',
    avatar: 'https://picsum.photos/seed/avatar4/100/100',
  },
];

const Testimonials: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };
  
  return (
    <section id="testimonios" className="py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-widest text-white mb-3">Experiencias</h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">Lo que nuestros clientes dicen de nosotros.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900/40 p-8 rounded-lg border border-gray-800 flex flex-col"
              variants={itemVariants}
            >
              <QuoteIcon className="w-8 h-8 text-cyan-400/50 mb-4" />
              <p className="text-gray-300 italic mb-6 flex-grow text-sm leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover mr-4 border border-cyan-500/50" />
                <div>
                  <h4 className="font-bold text-white tracking-wide text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;