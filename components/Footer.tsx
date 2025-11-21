
import React from 'react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../assets/icons';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'Instagram', icon: <InstagramIcon className="w-6 h-6" />, href: 'https://www.instagram.com/habanaminimax', className: 'social-link-instagram' },
    { name: 'Facebook', icon: <FacebookIcon className="w-6 h-6" />, href: 'https://www.facebook.com/profile.php?id=61583419842634', className: 'social-link-facebook' },
    { name: 'WhatsApp', icon: <WhatsAppIcon className="w-6 h-6" />, href: 'https://wa.me/5352679828', className: 'social-link-whatsapp' },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-heading tracking-wider text-white mb-2">
              Habana MiniMax Studio<sup className="text-sm align-top relative top-[-0.2em]">®</sup>
            </h3>
            <p className="text-gray-400 text-sm">{t.footer.description}</p>
          </div>
          
          {/* Spacer */}
          <div className="hidden md:block"></div>

          {/* Links & Social */}
          <div className="md:col-span-1 md:text-right">
             <h4 className="font-bold uppercase tracking-widest text-white mb-4">{t.footer.followUs}</h4>
             <div className="flex justify-center md:justify-end space-x-6">
                {socialLinks.map((link) => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className={`social-link ${link.className} text-gray-400`}>
                        {link.icon}
                    </a>
                ))}
             </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Habana MiniMax Studio. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
