
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, LogoIcon } from '../assets/icons';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const { t, language, setLanguage } = useLanguage();

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
        backgroundColor: "rgba(5, 6, 13, 0.85)", // Darker, cleaner background
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      });
    } else {
      controls.start({
        backgroundColor: "rgba(5, 6, 13, 0)",
        backdropFilter: "blur(0px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0)"
      });
    }
  }, [isScrolled, controls]);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        setTimeout(() => {
           targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const navLinks = [
    { name: t.header.nav_inicio, href: '#hero' },
    { name: t.header.nav_servicios, href: '#servicios' },
    { name: t.header.nav_portfolio, href: '#portfolio' },
    { name: t.header.nav_ia, href: '#ia-generator' }, // Added IA link
    { name: t.header.nav_blog, href: '#blog' },
    { name: t.header.nav_testimonios, href: '#testimonios' },
    { name: t.header.nav_faq, href: '#faq' },
    { name: t.header.nav_contacto, href: '#contacto' },
  ];

  return (
    <>
      <motion.header
        animate={controls}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="container mx-auto px-5 lg:px-8 py-4 lg:py-5 flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="z-50 relative">
            <LogoIcon className="w-9 h-9 lg:w-10 lg:h-10 text-white hover:text-cyan-400 transition-colors duration-300" />
          </a>
          
          {/* Desktop Menu - Minimalist & Neon Blue */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className="nav-link-neon text-cyan-400 font-heading font-bold uppercase text-[10px] xl:text-xs tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className='hidden lg:flex items-center gap-4'>
            {/* Language Toggle Desktop */}
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider border border-gray-700 px-2 py-1 rounded hover:border-cyan-400"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            <a 
              href="#contacto" 
              onClick={(e) => handleNavClick(e, '#contacto')} 
              className="group relative font-heading font-bold py-2 px-8 rounded-full text-xs uppercase tracking-[0.2em] text-black
                       bg-gradient-to-br from-white to-gray-300
                       shadow-[0_0_15px_rgba(255,255,255,0.4)]
                       hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
                       hover:-translate-y-1 active:translate-y-0 active:scale-95
                       transition-all duration-300"
            >
              {t.header.cta}
            </a>
          </div>

          {/* Mobile Hamburger & Lang */}
          <div className="lg:hidden z-50 flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider border border-gray-700 px-2 py-1 rounded bg-black/50"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-cyan-400 p-1 focus:outline-none"
                aria-label="Abrir menú"
            >
              {isMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#05060d] z-40 flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen py-20 space-y-6">
              {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className="text-cyan-400 font-heading font-bold uppercase text-xl tracking-[0.1em] hover:text-white transition-colors p-2"
                  >
                    {link.name}
                  </a>
                ))}
              <a 
                href="#contacto" 
                onClick={(e) => handleNavClick(e, '#contacto')} 
                className="mt-8 bg-gradient-to-br from-white to-gray-300 text-black font-bold py-4 px-10 rounded-full uppercase text-sm tracking-[0.2em] shadow-[0_0_20px_rgba(255,255,255,0.5)] active:scale-95 transition-all"
              >
                {t.header.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
