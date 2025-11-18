
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, LogoIcon } from '../assets/icons';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({
        backgroundColor: "rgba(5, 6, 13, 0.5)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
      });
    } else {
      controls.start({
        backgroundColor: "rgba(5, 6, 13, 0)",
        backdropFilter: "blur(0px)",
        boxShadow: "0 0px 0px rgba(0, 0, 0, 0)"
      });
    }
  }, [isScrolled, controls]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t.header.nav_inicio, href: '#hero' },
    { name: t.header.nav_servicios, href: '#servicios' },
    { name: t.header.nav_ia, href: '#ia-generator' },
    { name: t.header.nav_portfolio, href: '#portfolio' },
    { name: t.header.nav_blog, href: '#blog' },
    { name: t.header.nav_testimonios, href: '#testimonios' },
    { name: t.header.nav_faq, href: '#faq' },
    { name: t.header.nav_contacto, href: '#contacto' },
  ];

  return (
    <>
      <motion.header
        animate={controls}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
            <LogoIcon className="w-10 h-10 text-white hover:text-cyan-400 transition-colors duration-300" />
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="nav-link-neon text-gray-300 uppercase text-sm tracking-widest">{link.name}</a>
            ))}
             {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-gray-800/50 rounded-full p-1 text-sm">
                <button onClick={() => setLanguage('es')} className={`px-2 py-1 rounded-full transition-colors ${language === 'es' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400'}`}>ES</button>
                <button onClick={() => setLanguage('en')} className={`px-2 py-1 rounded-full transition-colors ${language === 'en' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400'}`}>EN</button>
            </div>
          </nav>
          <div className='hidden md:flex items-center gap-4'>
            <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="hidden md:inline-block bg-cyan-500 text-[#05060d] font-bold py-2 px-6 rounded-full uppercase text-sm tracking-widest hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 btn-neon-cyan">
              {t.header.cta}
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-[#05060d]/90 backdrop-blur-lg p-6 md:hidden z-40"
          >
            <nav className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="nav-link-neon text-gray-300 uppercase text-lg tracking-widest">{link.name}</a>
                ))}
              <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="bg-cyan-500 text-[#05060d] font-bold py-3 px-8 rounded-full uppercase text-md tracking-widest hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 mt-4 btn-neon-cyan">
                {t.header.cta}
              </a>
               {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full p-1 text-md mt-4">
                  <button onClick={() => setLanguage('es')} className={`px-3 py-1 rounded-full transition-colors ${language === 'es' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400'}`}>ES</button>
                  <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-full transition-colors ${language === 'en' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400'}`}>EN</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;