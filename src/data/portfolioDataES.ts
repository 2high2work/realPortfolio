export interface NavigationItemText {
  id: 'LANDING' | 'PROJECTS' | 'ABOUT' | 'CONTACT' | 'TOWER';
  label: string;
}

export interface ProjectText {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics: string[];
  placeholderText: string;
}

export interface AboutText {
  header: string;
  tagline: string;
  bioParagraphs: string[];
  stats: { label: string; value: string }[];
  philosophy: string[];
}

export const NAV_ITEMS: NavigationItemText[] = [
  { id: 'LANDING', label: '01 // INICIO' },
  { id: 'PROJECTS', label: '02 // PROYECTOS' },
  { id: 'ABOUT', label: '03 // SOBRE MÍ' },
  { id: 'CONTACT', label: '04 // CONTACTO' },
];

export const HEADER_TEXT = {
  siteName: '2HIGH2WORK',
  siteSubtitle: 'PROGRAMADOR // DESARROLLO DE VIDEOJUEGOS // QA AUTOMATIZADO',
  footerTitle: 'PORTAFOLIO 2HIGH2WORK',
  footerCredit: 'Diseñado y desarrollado por 2.2',
  skipToMain: 'Ir al contenido principal',
  mainNavigationLabel: 'Navegación principal',
  openNavigationMenu: 'Abrir menú de navegación',
  closeNavigationMenu: 'Cerrar menú de navegación',
};

export const LANDING_TEXT = {
  landingAria: 'Página de inicio',
  welcome: 'Bienvenido a 2High2Work — portafolio personal, archivo de desarrollo y espacio creativo de 2.2.',
  overview: 'Me especializo en desarrollo web fullstack, automatización de QA y desarrollo de videojuegos indie, principalmente a través de Gooblin Studio y proyectos independientes de 2High2Work.',
  note: 'Mi enfoque se centra en una arquitectura limpia y mantenible, interfaces accesibles, sistemas de juego fluidos y pruebas automatizadas rigurosas.',
  aboutThisSiteTitle: 'SOBRE ESTE SITIO',
  aboutThisSiteDescription: 'Un portafolio directo y enfocado en la claridad, el contraste y el rendimiento — presentando proyectos y desarrollo de software sin añadidos innecesarios.',
  navigationTitle: 'NAVEGACIÓN',
  navigationHint: 'Explora las secciones superiores para conocer proyectos destacados, trayectoria técnica y canales de contacto.',
  exploreProjects: 'EXPLORAR PROYECTOS',
  getInTouch: 'CONTACTAR',
  founderLabel: 'FUNDADOR // DESARROLLADOR PRINCIPAL',
};

export const PROJECT_SECTION_TEXT = {
  headingAria: 'Portafolio de Proyectos',
  detailBackButton: '← VOLVER A PROYECTOS',
  openProjectWebPage: 'ABRIR PROYECTO EN VIVO',
  systemOverviewHeading: 'VISIÓN DEL PROYECTO',
  projectListTitle: 'PROYECTOS DESTACADOS',
  projectListDescription: 'Explora proyectos seleccionados de ingeniería y desarrollo de videojuegos. Haz clic en una tarjeta para ver detalles o acceder al enlace en vivo.',
  viewDetailBadge: 'DETALLES',
  openPage: 'VER PROYECTO',
  openPageAria: (title: string) => `Abrir página externa para ${title} en nueva ventana`,
  backToProjects: 'Volver a la lista de proyectos',
  performanceMetricsAriaLabel: 'Aspectos destacados',
  technologiesUsedAriaLabel: 'Tecnologías usadas',
  skillsHeading: 'ASPECTOS DESTACADOS',
  techStackHeading: 'STACK TÉCNICO',
};

export const ABOUT_SECTION_TEXT = {
  headingAria: 'Acerca de 2High2Work',
  telemetryHeading: 'PERFIL PRINCIPAL',
  philosophyHeading: 'PRINCIPIOS DE INGENIERÍA',
  philosophyAriaLabel: 'Principios de ingeniería clave',
  vectorPortraitLabel: 'RETRATO // 2.2',
};

export const CONTACT_SECTION_TEXT = {
  headingAria: 'Detalles de Contacto',
  contactTitle: 'CONTACTO',
  contactSubtitle: 'Disponible para consultas profesionales, desarrollo fullstack, automatización de QA y colaboraciones de videojuegos.',
  formSectionTitle: 'ENVIAR UN MENSAJE',
  nameLabel: 'NOMBRE',
  emailLabel: 'CORREO ELECTRÓNICO',
  messageLabel: 'MENSAJE',
  namePlaceholder: 'Tu nombre',
  emailPlaceholder: 'tu.correo@dominio.com',
  messagePlaceholder: 'Escribe tu mensaje aquí...',
  successMessage: 'Mensaje enviado con éxito. ¡Gracias por ponerte en contacto!',
  transmittingMessage: 'ENVIANDO...',
  transmitPayload: 'ENVIAR MENSAJE',
  errorPrefix: 'ERROR AL ENVIAR:',
  submitFailed: 'Error al enviar el mensaje',
  unknownError: 'Error desconocido',
  directChannelsTitle: 'CANALES DIRECTOS',
  directEmailLabel: 'CORREO ELECTRÓNICO',
  githubLabel: 'GITHUB',
  contactPortraitLabel: 'RETRATO // 2.2',
};

export const PORTRAIT_TEXT = {
  defaultLabel: 'RETRATO',
  imagePlaceholderAria: 'Imagen de retrato',
};

export const ABOUT_DATA: AboutText = {
  header: 'SOBRE 2HIGH2WORK',
  tagline: 'INGENIERO DE SOFTWARE — DESARROLLO DE VIDEOJUEGOS, WEB Y QA AUTOMATIZADO',
  bioParagraphs: [
    'Soy 2.2, creador de 2High2Work. Entiendo el desarrollo de software como una disciplina técnica y un proceso iterativo, combinando arquitectura sólida con diseño intuitivo.',
    'Mi trabajo profesional abarca programación de mecánicas en Unity (C#), desarrollo web fullstack con TypeScript/Next.js, y automatización integral de QA usando Playwright y K6 integrados en flujos CI/CD.',
    'Como cofundador de Gooblin Studio, participo en la dirección técnica, diseño de lógica de gameplay e infraestructura web pública, además de publicar prototipos independientes en 2High2Work.',
  ],
  stats: [
    { label: 'STACK PRINCIPAL', value: 'UNITY // TS // PLAYWRIGHT' },
    { label: 'ENFOQUE TÉCNICO', value: 'FULLSTACK & GAMEDEV' },
    { label: 'TESTING & QA', value: 'PLAYWRIGHT & K6' },
    { label: 'FILOSOFÍA DE DISEÑO', value: 'CLARIDAD & PRECISIÓN' },
  ],
  philosophy: [
    'Arquitectura de proyecto consistente y modular',
    'Accesibilidad y rendimiento como bases esenciales',
    'Testing disciplinado, CI/CD y aseguramiento de calidad',
    'Mantenibilidad a largo plazo y documentación clara',
  ],
};

export const PROJECT_TEXTS: ProjectText[] = [
  {
    id: 'proj-1',
    title: 'NIGHT_OF_WOLVES',
    subtitle: 'Juego de Acción 2D // Gooblin Studio // En desarrollo',
    description: 'Videojuego comercial de acción en 2D desarrollado por Gooblin Studio dentro del universo Ciudad De Las Nubes.',
    longDescription: 'Night Of Wolves es un proyecto principal de Gooblin Studio actualmente en desarrollo activo. Mi rol se centra en la lógica de juego, equilibrio del combate, timing de encuentros, documentación técnica de diseño y control de calidad. Cada mecánica pasa por especificaciones claras para garantizar un control fluido y una experiencia de combate sólida y reactiva.',
    techStack: ['Unity', 'C#', 'Git', 'Game Design', 'QA'],
    metrics: ['Diseño de Lógica de Gameplay', 'Balance y Timing de Combate', 'Planificación Técnica y Arquitectura'],
    placeholderText: 'Captura de Night of Wolves',
  },
  {
    id: 'proj-2',
    title: 'GOOBLINSTUDIO.COM',
    subtitle: 'Sitio Web Oficial del Estudio',
    description: 'Portal web oficial y escaparate de proyectos para los juegos y anuncios de Gooblin Studio.',
    longDescription: 'Desarrollé el sitio web oficial de Gooblin Studio como punto central para nuestros juegos, actualizaciones e identidad como estudio independiente. Construido con estándares modernos de la web, principios de diseño responsivo y optimización de entrega estática.',
    techStack: ['Next.js', 'TypeScript', 'HTML5', 'CSS3'],
    metrics: ['Portal del Estudio', 'UI/UX Responsivo', 'Arquitectura Web Estática'],
    placeholderText: 'Sitio Web de Gooblin Studio',
  },
  {
    id: 'proj-5',
    title: 'PONG_IN_CAROTEO',
    subtitle: 'Juego Arcade',
    description: 'Videojuego arcade colaborativo entre Gooblin Studio y 2High2Work.',
    longDescription: 'Pong In Caroteo es un juego de estilo arcade inspirado en el clásico Pong con arte y trasfondo original. Proyecto desarrollado en colaboración donde Gooblin Studio creó el arte e historia y 2High2Work realizó toda la programación de mecánicas y arquitectura en Unity.',
    techStack: ['Unity', 'C#'],
    metrics: ['Programación Integral de Gameplay', 'Físicas y Controles Personalizados', 'Arquitectura de Juego Arcade'],
    placeholderText: 'Juego Pong in Caroteo',
  },
];

export const TOWER_TEXT = {
  accessGranted: 'ACCESO SECRETO CONCEDIDO',
  title: 'THE TOWER',
  description: 'Esta página permanece en calma por ahora. Vuelve cuando la torre despierte.',
};

export const FOOTER_TEXT = {
  title: HEADER_TEXT.footerTitle,
  credit: HEADER_TEXT.footerCredit,
  ariaLabel: 'Pie de página del sitio',
};

export const ARIA_TEXT = {
  navButton: (label: string) => `Navegar a ${label}`,
  projectListBack: 'Volver a la lista de proyectos',
  projectExternalLink: (title: string) => `Abrir página externa para ${title} en nueva ventana`,
  projectDetailExternalLink: (title: string) => `Abrir página externa para ${title} en nueva pestaña`,
};

export const CONTACT_API_TEXT = {
  methodNotAllowed: 'Método no permitido',
  missingFields: 'Nombre, correo electrónico y mensaje son obligatorios.',
  emailSent: 'Correo enviado con éxito.',
  emailFailed: 'Error al enviar el correo.',
};
