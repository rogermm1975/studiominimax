
export type Language = 'es' | 'en';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  // Content is handled in the component due to JSX
};

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
    services: {
      title: string;
      subtitle: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    portfolio: {
      title: string;
      subtitle: string;
      filters: {
        all: string;
        bodas: string;
        quinces: string;
        ninos: string;
        artisticas: string;
        diseno: string;
      };
      loadMore: string;
      showing: string;
      of: string;
    };
    ai: {
      title: string;
      subtitle: string;
      inputLabel: string;
      placeholder: string;
      button: string;
      buttonLoading: string;
      error: string;
      badgeAI: string;
      badgeLocal: string;
      locationsLabel: string;
      colorsLabel: string;
    };
    blog: {
      title: string;
      subtitle: string;
      badge: string;
      readArticle: string;
      readTime: string;
      writtenBy: string;
      cta: string;
      posts: BlogPost[];
    };
    leadMagnet: {
      badge: string;
      title1: string;
      title2: string;
      description: string;
      formTitle: string;
      formSubtitle: string;
      labelName: string;
      placeholderName: string;
      labelEmail: string;
      placeholderEmail: string;
      button: string;
      buttonProcessing: string;
      privacy: string;
      successTitle: string;
      successMsg: string;
      successFooter: string;
      backButton: string;
      items: {
        name: string;
        description: string;
      }[];
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: {
        name: string;
        title: string;
        quote: string;
      }[];
    };
    faq: {
      title: string;
      subtitle: string;
      items: {
        question: string;
        answer: string;
      }[];
    };
    contact: {
      title: string;
      subtitle: string;
      formTitle: string;
      formSubtitle: string;
      labelName: string;
      placeholderName: string;
      labelEmail: string;
      placeholderEmail: string;
      labelService: string;
      selectDefault: string;
      serviceOptions: string[];
      labelMessage: string;
      placeholderMessage: string;
      button: string;
      whatsappMessage: {
        header: string;
        subheader: string;
        name: string;
        email: string;
        interest: string;
        message: string;
        footer: string;
      };
      workflowTitle: string;
      workflowSteps: string[];
      contactTitle: string;
      address: string;
      addressNote: string;
    };
    footer: {
      description: string;
      followUs: string;
      rights: string;
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
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Creamos experiencias visuales que trascienden lo convencional.',
      items: [
        { title: 'Fotografía', description: 'Sesiones para quinceañeras, bodas, banquetes, niños, embarazadas, artísticas y más. Capturamos tus momentos inolvidables.' },
        { title: 'Edición Web', description: 'Creación de estilos únicos para páginas web, landing pages y proyectos empresariales que reflejen tu visión.' },
        { title: 'Diseño Gráfico', description: 'Diseño profesional de posters, libros, revistas, gigantografías y cualquier pieza visual que necesites.' },
        { title: 'Sublimación', description: 'Personalizamos pullovers, cuadros, tazas, gorras y todo tipo de souvenirs con la más alta calidad.' },
      ]
    },
    portfolio: {
      title: 'Nuestro Portafolio',
      subtitle: 'Explora una selección de nuestros trabajos más recientes.',
      filters: {
        all: 'Todos',
        bodas: 'Bodas',
        quinces: 'Quinces',
        ninos: 'Niños',
        artisticas: 'Artísticas',
        diseno: 'Diseño'
      },
      loadMore: 'Ver Más Trabajos',
      showing: 'Mostrando',
      of: 'de'
    },
    ai: {
      title: 'Concept Lab',
      subtitle: 'Describe tu visión y diseñaremos el moodboard perfecto para tu sesión en La Habana.',
      inputLabel: 'Tu Inspiración',
      placeholder: 'Ej: Una sesión de 15 años en la playa al atardecer...',
      button: 'Generar Concepto',
      buttonLoading: 'Diseñando...',
      error: 'Por favor, describe tu idea para la sesión.',
      badgeAI: 'Generado por IA',
      badgeLocal: 'Selección del Estudio',
      locationsLabel: 'Locaciones Sugeridas',
      colorsLabel: 'Paleta de Color'
    },
    blog: {
      title: 'Journal',
      subtitle: 'Pensamientos sobre fotografía, dirección de arte y la estética visual que define a MiniMax Studio.',
      badge: 'Editorial & Insights',
      readArticle: 'Leer Artículo',
      readTime: 'Lectura',
      writtenBy: 'Escrito por MiniMax Studio',
      cta: 'Reservar Sesión',
      posts: [
        {
          id: 1,
          title: "La Guía Esencial: Planificación de Quinceañeras",
          excerpt: "Claves para coordinar una sesión fotográfica exitosa, desde la selección del vestuario hasta la gestión del tiempo.",
          date: "12 OCT 2023",
          category: "GUÍAS",
          readTime: "5 MIN",
          image: "https://ik.imagekit.io/ilczwuvvn/Quinces/Capitolio.webp?tr=w-800,h-600,fo-auto"
        },
        {
          id: 2,
          title: "Dirección de Posing: Naturalidad vs. Técnica",
          excerpt: "Cómo lograr retratos auténticos superando la rigidez frente a la cámara. Consejos profesionales de dirección.",
          date: "28 NOV 2023",
          category: "TÉCNICA",
          readTime: "4 MIN",
          image: "https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces11.webp?tr=w-800,h-600,fo-auto"
        },
        {
          id: 3,
          title: "Arquitectura y Luz: Locaciones en La Habana",
          excerpt: "Un análisis de los escenarios más icónicos de la ciudad y cómo aprovecharlos para una narrativa visual potente.",
          date: "15 ENE 2024",
          category: "LOCACIONES",
          readTime: "6 MIN",
          image: "https://ik.imagekit.io/ilczwuvvn/05.webp?tr=w-800,h-600,fo-auto"
        }
      ]
    },
    leadMagnet: {
      badge: 'Insider Access',
      title1: 'Eleva tu',
      title2: 'Visión Creativa',
      description: 'Únete a nuestra lista privada y recibe inmediatamente herramientas de planificación profesional y beneficios reservados para nuestra comunidad.',
      formTitle: 'Solicitar Acceso',
      formSubtitle: 'Gratuito & Instantáneo',
      labelName: 'Nombre Completo',
      placeholderName: 'Tu nombre',
      labelEmail: 'Correo Electrónico',
      placeholderEmail: 'tucorreo@ejemplo.com',
      button: 'Desbloquear Contenido',
      buttonProcessing: 'Procesando...',
      privacy: 'Respetamos tu privacidad. Sin spam, solo arte.',
      successTitle: '¡Bienvenido!',
      successMsg: 'Hemos enviado el enlace de descarga y tu código de acceso a',
      successFooter: 'Por favor revisa tu bandeja de entrada (o spam) en los próximos minutos.',
      backButton: 'Volver al formulario',
      items: [
        { name: 'The Style Guide: Quinces Edition', description: 'Manual de estilismo y locaciones.' },
        { name: 'Planner Cronológico', description: 'Timeline de preparación paso a paso.' },
        { name: 'Access Pass: 15% Off', description: 'Beneficio exclusivo para primera sesión.' },
        { name: 'Havana Art Wallpapers', description: 'Curaduría visual para tus dispositivos.' }
      ]
    },
    testimonials: {
      title: 'Experiencias',
      subtitle: 'Lo que nuestros clientes dicen de nosotros.',
      items: [
        { name: 'Ana de Armas', title: 'Actriz, Sesión Editorial', quote: 'El equipo de Habana MiniMax no solo toma fotos, cuenta historias. Lograron capturar una faceta de mí que pocas veces se ve. Profesionalidad y arte puro.' },
        { name: 'Carlos Acosta', title: 'Bailarín, Cobertura de Evento', quote: 'Su cobertura del evento fue impecable. Discretos, atentos y con una sensibilidad única para captar la emoción del momento. El resultado superó mis expectativas.' },
        { name: 'Camila Arteche', title: 'Influencer, Producción Personalizada', quote: '¡La mejor experiencia! Desde la idea inicial hasta la entrega final, todo fue perfecto. Entendieron mi visión y la elevaron a otro nivel. ¡Tremendo equipo!' },
        { name: 'Havana Club', title: 'Marca, Dirección de Arte', quote: 'Colaborar con ellos en nuestra última campaña fue un acierto. Su dirección de arte aportó frescura y autenticidad, reflejando perfectamente el espíritu de nuestra marca.' },
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Resolvemos tus dudas para que solo te preocupes por disfrutar la experiencia.',
      items: [
        { question: '¿Qué tipo de sesiones fotográficas ofrecen?', answer: 'Ofrecemos una amplia gama de sesiones fotográficas: Quinces, bodas, niños, embarazadas, retratos profesionales, fotografía de producto, cobertura de evento y deportes, experiencias fotográficas personalizadas en La Habana. ¡Cuéntanos tu idea y la hacemos realidad!' },
        { question: '¿Cómo puedo reservar una sesión?', answer: 'Es fácil. Completa nuestro formulario de contacto con los detalles de tu proyecto. Nos pondremos en contacto contigo en menos de 24 horas para agendar una llamada inicial, entender tus necesidades y enviarte una propuesta personalizada.' },
        { question: '¿Qué incluyen los entregables finales?', answer: 'Cada paquete es diferente, pero generalmente incluye una cantidad acordada de fotografías digitales en alta resolución, editadas profesionalmente, que podrás descargar y compartir. También ofrecemos productos impresos como fotos convencionales, photobooks, revistas, lonas, lienzos, gigantografías y souvenirs personalizados.' },
        { question: '¿Trabajan solo en La Habana o también en otras locaciones?', answer: 'Nuestra base y especialidad es La Habana, conocemos sus rincones secretos como nadie. Sin embargo, estamos disponibles para proyectos en otras partes de Cuba e incluso a nivel internacional. Los costos de traslado se cotizan aparte.' },
        { question: 'No tengo experiencia posando, ¿me ayudarán durante la sesión?', answer: '¡Por supuesto! Es nuestro trabajo hacerte sentir cómodo y guiarte en todo momento. Creamos un ambiente relajado y divertido para que tu personalidad brille. La mayoría de nuestros clientes no son modelos profesionales.' },
      ]
    },
    contact: {
      title: 'Hagamos Algo Increíble',
      subtitle: '¿Listo para dar vida a tu proyecto? Contáctanos y empecemos a crear.',
      formTitle: 'Inicia la Conversación',
      formSubtitle: 'Completa el formulario y envíanos los detalles de tu proyecto directamente por WhatsApp.',
      labelName: 'Tu Nombre',
      placeholderName: 'Ej: Ana de Armas',
      labelEmail: 'Tu Correo',
      placeholderEmail: 'ana@email.com',
      labelService: 'Servicio de Interés',
      selectDefault: 'Selecciona una opción...',
      serviceOptions: ['Fotografía', 'Edición Web', 'Diseño Gráfico', 'Sublimación', 'Otro'],
      labelMessage: 'Cuéntanos tu idea',
      placeholderMessage: 'Describe brevemente tu proyecto, fechas importantes, etc.',
      button: 'Enviar por WhatsApp',
      whatsappMessage: {
        header: '🚨 *SERVICIO DE LA WEB* 🚨',
        subheader: '✨ *Nueva Solicitud de Cliente* ✨',
        name: '👤 *Nombre:*',
        email: '📧 *Correo:*',
        interest: '🛠️ *Interés:*',
        message: '📝 *Mensaje:*',
        footer: '🚀 *Enviado desde Habana MiniMax Studio*'
      },
      workflowTitle: 'Flujo de Trabajo',
      workflowSteps: [
        '1. Contacto inicial y briefing.',
        '2. Propuesta personalizada y reserva.',
        '3. ¡Día de rodaje! La magia sucede.'
      ],
      contactTitle: 'Contacto Directo',
      address: 'Calle 48 entre 247 y 245, Punta Brava, La Lisa, La Habana, Cuba',
      addressNote: '(Solo con cita previa)'
    },
    footer: {
      description: 'Fotografía y diseño con alma cubana. Contamos tu historia con una mirada única y vanguardista desde el corazón de La Habana.',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados.'
    }
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
      nav_blog: 'Journal',
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
    services: {
      title: 'Our Services',
      subtitle: 'We create visual experiences that transcend the conventional.',
      items: [
        { title: 'Photography', description: 'Sessions for Quinceañeras, weddings, events, kids, maternity, artistic and more. We capture your unforgettable moments.' },
        { title: 'Web Editing', description: 'Creation of unique styles for websites, landing pages, and business projects that reflect your vision.' },
        { title: 'Graphic Design', description: 'Professional design for posters, books, magazines, billboards, and any visual piece you need.' },
        { title: 'Sublimation', description: 'We personalize t-shirts, frames, mugs, caps, and all kinds of souvenirs with the highest quality.' },
      ]
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Explore a selection of our most recent work.',
      filters: {
        all: 'All',
        bodas: 'Weddings',
        quinces: 'Quinces',
        ninos: 'Kids',
        artisticas: 'Artistic',
        diseno: 'Design'
      },
      loadMore: 'View More Work',
      showing: 'Showing',
      of: 'of'
    },
    ai: {
      title: 'Concept Lab',
      subtitle: 'Describe your vision and we will design the perfect moodboard for your session in Havana.',
      inputLabel: 'Your Inspiration',
      placeholder: 'Ex: A Sweet 15 session at the beach during sunset...',
      button: 'Generate Concept',
      buttonLoading: 'Designing...',
      error: 'Please describe your idea for the session.',
      badgeAI: 'AI Generated',
      badgeLocal: 'Studio Pick',
      locationsLabel: 'Suggested Locations',
      colorsLabel: 'Color Palette'
    },
    blog: {
      title: 'Journal',
      subtitle: 'Thoughts on photography, art direction, and the visual aesthetic that defines MiniMax Studio.',
      badge: 'Editorial & Insights',
      readArticle: 'Read Article',
      readTime: 'Read',
      writtenBy: 'Written by MiniMax Studio',
      cta: 'Book Session',
      posts: [
        {
          id: 1,
          title: "The Essential Guide: Quinceañera Planning",
          excerpt: "Keys to coordinating a successful photo session, from wardrobe selection to time management.",
          date: "OCT 12 2023",
          category: "GUIDES",
          readTime: "5 MIN",
          image: "https://ik.imagekit.io/ilczwuvvn/Quinces/Capitolio.webp?tr=w-800,h-600,fo-auto"
        },
        {
          id: 2,
          title: "Posing Direction: Naturalness vs. Technique",
          excerpt: "How to achieve authentic portraits by overcoming stiffness in front of the camera. Professional direction tips.",
          date: "NOV 28 2023",
          category: "TECHNIQUE",
          readTime: "4 MIN",
          image: "https://ik.imagekit.io/ilczwuvvn/Optimizadas/Quinces11.webp?tr=w-800,h-600,fo-auto"
        },
        {
          id: 3,
          title: "Architecture and Light: Locations in Havana",
          excerpt: "An analysis of the city's most iconic settings and how to leverage them for powerful visual storytelling.",
          date: "JAN 15 2024",
          category: "LOCATIONS",
          readTime: "6 MIN",
          image: "https://ik.imagekit.io/ilczwuvvn/05.webp?tr=w-800,h-600,fo-auto"
        }
      ]
    },
    leadMagnet: {
      badge: 'Insider Access',
      title1: 'Elevate Your',
      title2: 'Creative Vision',
      description: 'Join our private list and immediately receive professional planning tools and benefits reserved for our community.',
      formTitle: 'Request Access',
      formSubtitle: 'Free & Instant',
      labelName: 'Full Name',
      placeholderName: 'Your name',
      labelEmail: 'Email Address',
      placeholderEmail: 'youremail@example.com',
      button: 'Unlock Content',
      buttonProcessing: 'Processing...',
      privacy: 'We respect your privacy. No spam, just art.',
      successTitle: 'Welcome!',
      successMsg: 'We have sent the download link and your access code to',
      successFooter: 'Please check your inbox (or spam) in the next few minutes.',
      backButton: 'Back to form',
      items: [
        { name: 'The Style Guide: Quinces Edition', description: 'Styling and location manual.' },
        { name: 'Chronological Planner', description: 'Step-by-step preparation timeline.' },
        { name: 'Access Pass: 15% Off', description: 'Exclusive benefit for your first session.' },
        { name: 'Havana Art Wallpapers', description: 'Visual curation for your devices.' }
      ]
    },
    testimonials: {
      title: 'Experiences',
      subtitle: 'What our clients say about us.',
      items: [
        { name: 'Ana de Armas', title: 'Actress, Editorial Session', quote: 'The MiniMax team doesn\'t just take photos, they tell stories. They managed to capture a side of me rarely seen. Professionalism and pure art.' },
        { name: 'Carlos Acosta', title: 'Dancer, Event Coverage', quote: 'Their event coverage was impeccable. Discreet, attentive, and with unique sensitivity to capture the emotion of the moment. The result exceeded my expectations.' },
        { name: 'Camila Arteche', title: 'Influencer, Custom Production', quote: 'The best experience! From the initial idea to the final delivery, everything was perfect. They understood my vision and took it to another level. Amazing team!' },
        { name: 'Havana Club', title: 'Brand, Art Direction', quote: 'Collaborating with them on our latest campaign was a success. Their art direction brought freshness and authenticity, perfectly reflecting our brand spirit.' },
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'We resolve your doubts so you only worry about enjoying the experience.',
      items: [
        { question: 'What type of photo sessions do you offer?', answer: 'We offer a wide range of photo sessions: Quinceañeras, weddings, kids, maternity, professional portraits, product photography, event and sports coverage, custom photo experiences in Havana. Tell us your idea and we make it happen!' },
        { question: 'How can I book a session?', answer: 'It\'s easy. Fill out our contact form with your project details. We will contact you in less than 24 hours to schedule an initial call, understand your needs, and send you a personalized proposal.' },
        { question: 'What do the final deliverables include?', answer: 'Each package is different, but generally includes an agreed amount of high-resolution digital photos, professionally edited, which you can download and share. We also offer printed products like conventional photos, photobooks, magazines, canvases, billboards, and personalized souvenirs.' },
        { question: 'Do you work only in Havana or also in other locations?', answer: 'Our base and specialty is Havana; we know its secret corners like no one else. However, we are available for projects elsewhere in Cuba and even internationally. Travel costs are quoted separately.' },
        { question: 'I have no posing experience, will you help me during the session?', answer: 'Of course! It is our job to make you feel comfortable and guide you at all times. We create a relaxed and fun environment so your personality shines. Most of our clients are not professional models.' },
      ]
    },
    contact: {
      title: 'Let\'s Make Something Amazing',
      subtitle: 'Ready to bring your project to life? Contact us and let\'s start creating.',
      formTitle: 'Start the Conversation',
      formSubtitle: 'Fill out the form and send us your project details directly via WhatsApp.',
      labelName: 'Your Name',
      placeholderName: 'Ex: Ana de Armas',
      labelEmail: 'Your Email',
      placeholderEmail: 'ana@email.com',
      labelService: 'Service of Interest',
      selectDefault: 'Select an option...',
      serviceOptions: ['Photography', 'Web Editing', 'Graphic Design', 'Sublimation', 'Other'],
      labelMessage: 'Tell us your idea',
      placeholderMessage: 'Briefly describe your project, important dates, etc.',
      button: 'Send via WhatsApp',
      whatsappMessage: {
        header: '🚨 *WEB SERVICE* 🚨',
        subheader: '✨ *New Client Request* ✨',
        name: '👤 *Name:*',
        email: '📧 *Email:*',
        interest: '🛠️ *Interest:*',
        message: '📝 *Message:*',
        footer: '🚀 *Sent from Havana MiniMax Studio*'
      },
      workflowTitle: 'Workflow',
      workflowSteps: [
        '1. Initial contact and briefing.',
        '2. Personalized proposal and booking.',
        '3. Shooting day! The magic happens.'
      ],
      contactTitle: 'Direct Contact',
      address: '48th Street between 247 and 245, Punta Brava, La Lisa, Havana, Cuba',
      addressNote: '(By appointment only)'
    },
    footer: {
      description: 'Photography and design with Cuban soul. We tell your story with a unique and avant-garde perspective from the heart of Havana.',
      followUs: 'Follow Us',
      rights: 'All rights reserved.'
    }
  }
};
