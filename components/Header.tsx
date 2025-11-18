
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, LogoIcon } from '../assets/icons';

const Header: React.FC = () => {
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
        // Pequeño timeout para permitir que el menú se cierre visualmente antes de scrollear
        setTimeout(() => {
           targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Experiencias', href: '#testimonios' },
    { name: 'Preguntas', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <motion.header
        animate={controls}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        {/* Padding reducido en móvil (px-5) para más espacio, aumentado en desktop (px-8) */}
        <div className="container mx-auto px-5 lg:px-8 py-4 lg:py-5 flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="z-50 relative">
            <LogoIcon className="w-9 h-9 lg:w-10 lg:h-10 text-white hover:text-cyan-400 transition-colors duration-300" />
          </a>
          
          {/* Desktop Menu - Minimalist & Neon Blue */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className="nav-link-neon text-cyan-400 font-heading font-bold uppercase text-xs tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className='hidden lg:flex items-center gap-4'>
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
              Reserva
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden z-50">
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
                    className="text-cyan-400 font-heading font-bold uppercase text-2xl tracking-[0.1em] hover:text-white transition-colors p-2"
                  >
                    {link.name}
                  </a>
                ))}
              <a 
                href="#contacto" 
                onClick={(e) => handleNavClick(e, '#contacto')} 
                className="mt-8 bg-gradient-to-br from-white to-gray-300 text-black font-bold py-4 px-10 rounded-full uppercase text-sm tracking-[0.2em] shadow-[0_0_20px_rgba(255,255,255,0.5)] active:scale-95 transition-all"
              >
                Reserva Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
