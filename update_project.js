
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * LISTA DE ARCHIVOS A ACTUALIZAR
 */
const filesToUpdate = [
  {
    path: 'components/Contact.tsx',
    content: `
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, LocationMarkerIcon, WhatsAppIcon, ClipboardCopyIcon, CheckIcon } from '../assets/icons';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const displayEmail = 'contacto@habanaminimax.com';
  const actualEmail = 'carlose6074@gmail.com';
  
  const mailtoLink = \`mailto:\${actualEmail}\`;

  const [isCopied, setIsCopied] = useState(false);
  
  // State for the new form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(actualEmail).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500); // Reset after 2.5 seconds
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '5352679828';
    const wm = t.contact.whatsappMessage;
    
    const formattedMessage = \`
\${wm.header}

\${wm.subheader}
━━━━━━━━━━━━━━━━━━━━

\${wm.name} \${name}
\${wm.email} \${email}
\${wm.interest} \${service}
━━━━━━━━━━━━━━━━━━━━

\${wm.message}
\${message}

\${wm.footer}
    \`.trim();
    
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = \`https://wa.me/\${whatsappNumber}?text=\${encodedMessage}\`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const formInputStyles = "w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all";
  const formLabelStyles = "block text-sm font-semibold mb-2 text-gray-300 tracking-wider";

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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-widest text-white">{t.contact.title}</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Action Form Container */}
          <motion.div 
            className="md:col-span-3 bg-black/30 backdrop-blur-md p-8 rounded-lg border border-gray-800 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-heading tracking-wider text-white mb-4 text-center">{t.contact.formTitle}</h3>
            <p className="text-gray-400 mb-8 text-center max-w-md mx-auto">
              {t.contact.formSubtitle}
            </p>
            <form onSubmit={handleFormSubmit} className="w-full space-y-6">
              <div>
                <label htmlFor="name" className={formLabelStyles}>{t.contact.labelName}</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.contact.placeholderName} required className={formInputStyles} />
              </div>
               <div>
                <label htmlFor="email" className={formLabelStyles}>{t.contact.labelEmail}</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.contact.placeholderEmail} required className={formInputStyles} />
              </div>
              <div>
                <label htmlFor="service" className={formLabelStyles}>{t.contact.labelService}</label>
                <select id="service" value={service} onChange={(e) => setService(e.target.value)} required className={\`\${formInputStyles} appearance-none\`}>
                  <option value="" disabled>{t.contact.selectDefault}</option>
                  {t.contact.serviceOptions.map((opt: string, i: number) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className={formLabelStyles}>{t.contact.labelMessage}</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.contact.placeholderMessage} rows={4} required className={formInputStyles}></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-teal-500 text-white font-bold py-4 px-8 rounded-full uppercase text-sm tracking-widest transition-all duration-300 transform hover:scale-105 btn-neon-gradient-green flex items-center justify-center"
              >
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                {t.contact.button}
              </button>
            </form>
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
                    <h3 className="text-3xl font-heading tracking-wider mb-4 text-cyan-400">{t.contact.workflowTitle}</h3>
                    {t.contact.workflowSteps.map((step: string, i: number) => (
                        <p key={i} className="text-gray-300 mb-4">{step}</p>
                    ))}
                </div>
                 <div>
                    <h3 className="text-3xl font-heading tracking-wider mb-4 text-cyan-400">{t.contact.contactTitle}</h3>
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <a
                              href={mailtoLink}
                              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                                <MailIcon className="w-5 h-5 mr-3" />
                                {displayEmail}
                            </a>
                            {/* Botón de Copiar con Mejor Visibilidad */}
                            <button 
                                onClick={handleCopyEmail} 
                                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-xs transition-all border border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_10px_rgba(0,0,0,0.3)]" 
                                aria-label={t.contact.copy}
                                title={isCopied ? t.contact.copied : t.contact.copy}
                            >
                              {isCopied ? <CheckIcon className="w-4 h-4 text-green-400" /> : <ClipboardCopyIcon className="w-4 h-4" />}
                              <span className="uppercase tracking-wider font-bold">{t.contact.copy}</span>
                            </button>
                        </div>
                        <a href="https://wa.me/5352679828" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                            <PhoneIcon className="w-5 h-5 mr-3" />
                            +53 52679828
                        </a>
                        <div className="flex items-start text-gray-300">
                            <LocationMarkerIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                            <span>
                                {t.contact.address}
                                <br/>
                                <span className="text-cyan-400 text-xs italic opacity-80">{t.contact.addressNote}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
               <iframe
                title={t.contact.mapTitle}
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
    `
  },
  {
    path: 'README.md',
    content: `
# Habana MiniMax Studio - Landing Page

Esta es la landing page para Habana MiniMax Studio, desarrollada con React, Vite, TypeScript y Tailwind CSS.

## Automatización de Actualizaciones

Este proyecto utiliza un script \`update_project.js\` para facilitar la actualización rápida de archivos generados por la IA.

### Cómo actualizar el código:
1. Copia el contenido proporcionado por la IA (que incluirá el script actualizado).
2. Pega el contenido en el archivo \`update_project.js\`.
3. Ejecuta el comando:
   \`\`\`bash
   node update_project.js
   \`\`\`
4. El script reescribirá automáticamente los archivos modificados en las carpetas correctas.

## Requisitos

- Node.js (versión 18 o superior)
- npm

## Instalación y Ejecución

\`\`\`bash
npm install
npm run dev
\`\`\`

## Despliegue

\`\`\`bash
npm run deploy
\`\`\`
    `
  }
];

/**
 * LOGICA PRINCIPAL DEL SCRIPT
 */
console.log('\\x1b[36m%s\\x1b[0m', '🚀 Iniciando actualización de archivos...');

filesToUpdate.forEach(file => {
  try {
    // Resolver ruta absoluta
    const filePath = path.join(__dirname, file.path);
    const dirPath = path.dirname(filePath);

    // Crear directorios si no existen
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`   📁 Directorio creado: ${dirPath}`);
    }

    // Escribir el archivo
    fs.writeFileSync(filePath, file.content.trim(), 'utf8');
    console.log(`   ✅ Archivo actualizado: ${file.path}`);

  } catch (error) {
    console.error(`   ❌ Error actualizando ${file.path}:`, error.message);
  }
});

console.log('\\x1b[32m%s\\x1b[0m', '✨ ¡Actualización completada con éxito!');
