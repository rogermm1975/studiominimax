
export type Language = 'es' | 'en';

type Translations = {
  [key in Language]: {
    header: {
      nav_inicio: string;
      nav_servicios: string;
      nav_ia: string;
      nav_portfolio: string;
      nav_blog: string;
      nav_testimonios: string;
      nav_faq: string;
      nav_contacto: string;
      cta: string;
    };
    hero: {
      title1: string;
      title2: string;
      title3: string;
      subtitle: string;
      cta: string;
    };
  }
};

export const translations: Translations = {
  es: {
    header: {
      nav_inicio: 'Inicio',
      nav_servicios: 'Servicios',
      nav_ia: 'Ideas IA',
      nav_portfolio: 'Portfolio',
      nav_blog: 'Blog',
      nav_testimonios: 'Experiencias',
      nav_faq: 'Preguntas',
      nav_contacto: 'Contacto',
      cta: 'Reserva Ahora',
    },
    hero: {
      title1: 'Habana ',
      title2: 'MiniMax',
      title3: ' Studio',
      subtitle: 'Capturamos la esencia vibrante de tus historias en La Habana.',
      cta: 'Contáctanos Ahora',
    },
  },
  en: {
    header: {
      nav_inicio: 'Home',
      nav_servicios: 'Services',
      nav_ia: 'AI Ideas',
      nav_portfolio: 'Portfolio',
      nav_blog: 'Blog',
      nav_testimonios: 'Testimonials',
      nav_faq: 'FAQ',
      nav_contacto: 'Contact',
      cta: 'Book Now',
    },
    hero: {
      title1: 'Havana ',
      title2: 'MiniMax',
      title3: ' Studio',
      subtitle: 'Capturing the vibrant essence of your stories in Havana.',
      cta: 'Contact Us Now',
    },
  }
};
