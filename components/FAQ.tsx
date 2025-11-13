
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '../assets/icons';

const faqData = [
  {
    question: '¿Qué tipo de sesiones fotográficas ofrecen?',
    answer: 'Ofrecemos una amplia gama: sesiones editoriales para moda y marcas, retratos profesionales, fotografía de producto, cobertura de eventos y experiencias fotográficas personalizadas en La Habana. ¡Cuéntanos tu idea y la hacemos realidad!',
  },
  {
    question: '¿Cómo puedo reservar una sesión?',
    answer: 'Es fácil. Completa nuestro formulario de contacto con los detalles de tu proyecto. Nos pondremos en contacto contigo en menos de 24 horas para agendar una llamada inicial, entender tus necesidades y enviarte una propuesta personalizada.',
  },
  {
    question: '¿Qué incluyen los entregables finales?',
    answer: 'Cada paquete es diferente, pero generalmente incluye una cantidad acordada de fotografías digitales en alta resolución, editadas profesionalmente. Se entregan a través de una galería online privada, desde donde podrás descargarlas y compartirlas.',
  },
  {
    question: '¿Trabajan solo en La Habana o también en otras locaciones?',
    answer: 'Nuestra base y especialidad es La Habana, conocemos sus rincones secretos como nadie. Sin embargo, estamos disponibles para proyectos en otras partes de Cuba e incluso a nivel internacional. Los costos de traslado se cotizan aparte.',
  },
  {
    question: 'No tengo experiencia posando, ¿me ayudarán durante la sesión?',
    answer: '¡Por supuesto! Es nuestro trabajo hacerte sentir cómodo y guiarte en todo momento. Creamos un ambiente relajado y divertido para que tu personalidad brille. La mayoría de nuestros clientes no son modelos profesionales.',
  },
];

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <h3 className="text-lg md:text-xl font-semibold tracking-wide text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-300 font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading tracking-widest text-white">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-400 mt-2">Resolvemos tus dudas para que solo te preocupes por disfrutar la experiencia.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <AccordionItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
