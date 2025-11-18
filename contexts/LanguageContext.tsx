
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, Language } from '../translations';

// Define el tipo para el valor del contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.es; 
}

// Crea el contexto con un valor inicial de 'undefined'
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define el proveedor del contexto
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Selecciona el objeto de traducciones basado en el idioma actual
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para consumir el contexto fácilmente
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
