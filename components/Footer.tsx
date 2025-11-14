
import React from 'react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../assets/icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: <InstagramIcon className="w-6 h-6" />, href: 'https://www.instagram.com/habanaminimax' },
    { name: 'Facebook', icon: <FacebookIcon className="w-6 h-6" />, href: 'https://www.facebook.com/profile.php?id=61583419842634' },
    { name: 'WhatsApp', icon: <WhatsAppIcon className="w-6 h-6" />, href: 'https://wa.me/5352679828' },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-heading tracking-wider text-white mb-2">Habana MiniMax Studio</h3>
            <p className="text-gray-400 text-sm">Fotografía y diseño con alma cubana. Contamos tu historia con una mirada única y vanguardista desde el corazón de La Habana.</p>
          </div>
          
          {/* Spacer */}
          <div className="hidden md:block"></div>

          {/* Links & Social */}
          <div className="md:col-span-1 md:text-right">
             <h4 className="font-bold uppercase tracking-widest text-white mb-4">Síguenos</h4>
             <div className="flex justify-center md:justify-end space-x-6">
                {socialLinks.map((link) => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                        {link.icon}
                    </a>
                ))}
             </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Habana MiniMax Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;