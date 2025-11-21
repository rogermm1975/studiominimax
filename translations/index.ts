
export type Language = 'es' | 'en';

type Translations = {
  [key in Language]: {
    meta: {
      title: string;
      description: string;
      keywords: string;
    };
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
      tagline: string;
      title1: string;
      title2: string;
      title3: string;
      subtitle: string;
      cta: string;
      cta_secondary: string;
    };
  }
};

export const translations: Translations = {
  es: {
    meta: {
      title: 'Habana MiniMax Studio | Fotografía y Diseño en Cuba',
      description: 'Estudio profesional de fotografía en La Habana. Especialistas en fotos de quinces, bodas, moda y diseño gráfico. Capturamos tu esencia con estilo único.',
      keywords: 'fotografo la habana, fotos de quince cuba, bodas cuba, estudio fotografico habana, diseño grafico cuba, minimax studio, sesion de fotos habana',
    },
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
      tagline: '- Fotografía - Diseño - Edición - Sublimación -',
      title1: 'Habana ',
      title2: 'MiniMax',
      title3: ' Studio',
      subtitle: 'La vida está hecha de momentos irrepetibles. Nuestra misión es que nunca se pierdan en el tiempo.',
      cta: 'Ver Portafolio',
      cta_secondary: 'Reservar Sesión',
    },
  },
  en: {
    meta: {
      title: 'Havana MiniMax Studio | Photography & Design in Cuba',
      description: 'Professional photography studio in Havana, Cuba. Specialists in Quinceañeras, Weddings, Fashion, and Graphic Design. We capture your essence with unique style.',
      keywords: 'photographer havana, quinceanera photos cuba, weddings cuba, photo studio havana, graphic design cuba, minimax studio, photo shoot havana',
    },
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
      tagline: '- Photography - Design - Editing - Sublimation -',
      title1: 'Havana ',
      title2: 'MiniMax',
      title3: ' Studio',
      subtitle: 'Life is made of unrepeatable moments. Our mission is that they never get lost in time.',
      cta: 'View Portfolio',
      cta_secondary: 'Book Session',
    },
  }
};