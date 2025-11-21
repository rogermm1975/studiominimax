
import React from 'react';
import { motion } from 'framer-motion';
import { CameraIcon, EditIcon, StarIcon, CheckCircleIcon, TshirtIcon } from '../assets/icons';
import { useLanguage } from '../contexts/LanguageContext';

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

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const icons = [
    <CameraIcon className="w-10 h-10" />,
    <EditIcon className="w-10 h-10" />,
    <StarIcon className="w-10 h-10" />,
    <TshirtIcon className="w-10 h-10" />
  ];

  const servicesData = t.services.items.map((item, index) => ({
    ...item,
    icon: icons[index]
  }));

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-widest text-white mb-3">{t.services.title}</h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">{t.services.subtitle}</p>
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
            <img 
              src="https://ik.imagekit.io/ilczwuvvn/Urbano/Prado.webp?tr=w-1000,h-1200,fo-auto,f-auto,q-70" 
              alt="Servicios MiniMax Studio" 
              className="w-full h-auto rounded-lg shadow-2xl filter grayscale-[20%] hover:grayscale-0 transition-all duration-500 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
