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
        <div className="container mx-auto px-8 py-5 flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="z-50">
            <LogoIcon className="w-10 h-10 text-white hover:text-cyan-400 transition-colors duration-300" />
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
              className="bg-white text-black font-heading font-bold py-2 px-8 rounded-none uppercase text-xs tracking-[0.2em] hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Reserva
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-cyan-400">
              {isMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#05060d] z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className="text-cyan-400 font-heading font-bold uppercase text-2xl tracking-[0.2em] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="mt-8 bg-cyan-500 text-black font-bold py-4 px-10 rounded-none uppercase text-sm tracking-[0.2em] hover:bg-white transition-colors">
                Reserva Ahora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;