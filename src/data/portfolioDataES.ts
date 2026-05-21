export interface NavigationItemText {
  id: 'LANDING' | 'PROJECTS' | 'SKILLS' | 'EXPERIENCE' | 'ABOUT' | 'CONTACT' | 'TOWER';
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

export interface SkillText {
  id: string;
  name: string;
  category: string;
  level: string;
  experienceYears: string;
  description: string;
  details: string[];
}

export interface ExperienceText {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
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
  { id: 'SKILLS', label: '03 // HABILIDADES' },
  { id: 'EXPERIENCE', label: '04 // EXPERIENCIA' },
  { id: 'ABOUT', label: '05 // SOBRE MÍ' },
  { id: 'CONTACT', label: '06 // CONTACTO' },
];

export const HEADER_TEXT = {
  systemStatus: 'SYSTEM: 2H2W_OS // v4.2.0',
  secureBoot: '| SECURE_BOOT: ENABLED',
  dataAccepted: 'YA NO PODEMOS ROBAR TUS DATOS',
  dataRejected: 'ESPERE: ROBANDO SUS DATOS',
  siteName: '2HIGH2WORK',
  siteSubtitle: 'PROGRAMADOR // DESARROLLO DE JUEGOS // QA AUTOMATIZADO',
  footerTitle: '// PORTAFOLIO 2HIGH2WORK',
  footerCredit: 'Diseñado y desarrollado por 2.2',
  skipToMain: 'Ir al contenido principal',
};

export const LANDING_TEXT = {
  landingAria: 'Página de inicio',
  initMode: '[ INIT_MODE: ONLINE ]',
  systemBroadcast: 'MENSAJE DEL SISTEMA // TRANSMISIÓN',
  heroAscii: String.raw`
________  ___ ___ .__       .__     ________  __      __             __    
\_____  \/   |   \|__| ____ |  |__  \_____  \/  \    /  \___________|  | __
 /  ____/    ~    \  |/ ___\|  |  \  /  ____/\   \/\/   /  _ \_  __ \  |/ /
/       \    Y    /  / /_/  >   Y  \/       \ \        (  <_> )  | \/    < 
\_______ \___|_  /|__\___  /|___|  /\_______ \ \__/\  / \____/|__|  |__|_ \
        \/     \/   /_____/      \/         \/     \/                    \/              
                `,
  welcome: 'Bienvenido a 2High2Work. Portafolio personal, archivo de desarrollo e identidad pública de 2.2.',
  overview: 'Trabajo en desarrollo web, automatización de QA y desarrollo de videojuegos, principalmente a través de Gooblin Studio y proyectos personales de 2High2Work.',
  note: 'La mayor parte de mi trabajo se centra en una estructura frontend limpia, interfaces accesibles, sistemas de juego y arquitectura de proyecto organizada.',
  aboutThisSiteTitle: '// SOBRE ESTE SITIO',
  aboutThisSiteDescription: 'Mucho del diseño web moderno me parece excesivamente seguro. Prefiero interfaces más simples, contraste fuerte, estructura clara y proyectos que se sientan hechos por una persona real.',
  navigationTitle: '// NAVEGACIÓN',
  navigationHint: '"Usa la navegación arriba para explorar el portafolio."',
  exploreProjects: 'EXPLORAR PROYECTOS',
  getInTouch: 'CONTACTAR',
  founderLabel: 'FUNDADOR // ARQUITECTO PRINCIPAL',
  secureFooter: '+---+ [ TÚNEL SEGURO ESTABLECIDO // RSA-4096 ] +---+',
};

export const PROJECT_SECTION_TEXT = {
  headingAria: 'Portafolio de Proyectos',
  detailBackButton: '[<-- VOLVER A LA LISTA DE PROYECTOS]',
  projectMeta: 'PROYECTO_ID: {id} // SEGURO',
  openProjectWebPage: 'ABRIR PÁGINA DEL PROYECTO',
  systemOverviewHeading: '// VISIÓN DEL SISTEMA',
  projectListTitle: '// PROYECTOS DISPONIBLES',
  projectListDescription: 'Haz clic en una tarjeta de proyecto para ver los detalles del sistema designado. Haz clic en el título para navegar directamente a la página externa en vivo.',
  viewDetailBadge: 'VER_DTL',
  openPage: 'ABRIR PÁGINA',
  openPageAria: 'Abrir página externa para {title} en nueva ventana',
  backToProjects: 'Volver a la lista de proyectos',
};

export const SKILL_SECTION_TEXT = {
  headingAria: 'Matriz de habilidades técnicas',
  backToSkills: 'Volver a la lista de habilidades',
  categoryLabel: 'CATEGORÍA:',
  capabilityHeading: '// DESCRIPCIÓN DE CAPACIDAD',
  drilldownHeading: '// DETALLE TÉCNICO',
  cardViewPage: 'VER_PAG',
  matrixHeading: '// MATRIZ DE COMPETENCIA TÉCNICA',
  matrixDescription: 'Haz clic en cualquier tarjeta de habilidad para abrir su página de desglose designada.',
  viewPageBadge: 'VER_PAG',
  clickSkillCard: 'Haz clic en cualquier tarjeta de habilidad para abrir su página de desglose designada.',
  detailsAvailable: '[ DETALLES DISPONIBLES ]',
  viewSkillAria: 'Ver detalles para la habilidad {name}',
};

export const EXPERIENCE_SECTION_TEXT = {
  headingAria: 'Experiencia profesional',
  backToExperience: 'Volver a la lista de experiencia',
  roleSummaryHeading: '// RESUMEN DE ROL',
  achievementsHeading: '// LOGROS CLAVE',
  engineeringChronology: '// CRONOLOGÍA DE INGENIERÍA',
  clickExperienceCard: 'Haz clic en cualquier rol de experiencia para ver detalles operativos completos y logros autenticados.',
  viewExperienceAria: 'Ver detalles para el rol {role} en {company}',
  viewPageBadge: 'VER_PAG',
};

export const ABOUT_SECTION_TEXT = {
  headingAria: 'Acerca de 2High2Work',
  telemetryHeading: '// RESUMEN DE TELEMETRÍA',
};

export const CONTACT_SECTION_TEXT = {
  headingAria: 'Detalles de contacto',
  contactTitle: 'CONTACTO // TRANSMISIÓN',
  contactSubtitle: 'PUNTO FINAL SEGURO PARA CONSULTAS PROFESIONALES Y CONTRATACIONES.',
  formSectionTitle: '// FORMULARIO DE DESPACHO',
  encryptionNotice: 'ENCRIPTACIÓN: REQUERIDA',
  nameLabel: 'IDENTIFICADOR [NOMBRE]',
  emailLabel: 'VECTOR DE RETORNO [EMAIL]',
  messageLabel: 'CARGA ÚTIL [MENSAJE]',
  namePlaceholder: 'por ejemplo ARCHITECT_01',
  emailPlaceholder: 'por ejemplo seguro@dominio.com',
  messagePlaceholder: 'INGRESA LOS DATOS DE TRANSMISIÓN AQUÍ...',
  successMessage: 'TRANSMISIÓN EXITOSA. 2High2Work ha recibido tu mensaje.',
  transmittingMessage: '[ TRANSMITIENDO ... ]',
  transmitPayload: '[ TRANSMITIR CARGA ÚTIL ]',
  directChannelsTitle: '// CANALES DIRECTOS',
  directEmailLabel: 'EMAIL:',
  githubLabel: 'GITHUB:',
  pgpLabel: 'HUELLA PGP:',
  locationLabel: 'UBICACIÓN:',
  locationValue: 'DESCENTRALIZADO // TIERRA',
  contactPortraitLabel: 'CONTACTO // RETRATO VECTORIAL',
};

export const COOKIE_TEXT = {
  title: 'POLÍTICA DE COOKIES',
  notificationLabel: '[ NOTIFICACIÓN DEL SISTEMA ]',
  body: 'Este sitio no recopila cookies realmente.',
  note: '// Tu elección se recordará y se ignorará hasta que borres el caché del navegador.',
  accept: 'ACEPTAR',
  reject: 'RECHAZAR',
};

export const TOWER_TEXT = {
  accessGranted: 'ACCESO SECRETO CONCEDIDO',
  title: 'LA TORRE',
  description: 'Esta página está en blanco por ahora. Vuelve cuando la torre despierte.',
};

export const FOOTER_TEXT = {
  title: HEADER_TEXT.footerTitle,
  credit: HEADER_TEXT.footerCredit,
};

export const MESSAGE_TEXT = {
  welcomeChat: 'LISTO PARA CONSULTA. PREGUNTA LO QUE QUIERAS.',
  aiStatus: 'ESTADO: ACTIVO',
  memoryStatus: 'MEM: 16KB',
  processingQueryPrefix: 'PROCESANDO CONSULTA',
  computingStatus: 'IA // PROCESANDO...',
  openChatLabel: '[+] CHAT_IA',
  modelLabel: 'MODELO_IA_v1.0.0',
  closeChatLabel: 'Cerrar chat de IA',
  openChatButtonLabel: 'Abrir asistente de IA',
  inputPlaceholderIdle: 'PREGUNTA LO QUE QUIERAS...',
  inputPlaceholderLoading: 'La IA está pensando (10s)...',
  sendButtonAriaLabel: 'Enviar mensaje',
  enterAria: 'Ventana de conversación del asistente de IA',
  userPrefix: 'USUARIO //',
  aiPrefix: 'IA //',
  responseOptions: [
    'No.',
    'Lo siento, no puedo ayudar con solicitudes ofensivas.',
    'Lo siento, no puedo ayudar con solicitudes ilegales.',
    'Hola, ¿en qué puedo ayudarte hoy?',
    '¿Eh? Por favor explica mejor.',
    'Acceso denegado. Tokens insuficientes.',
    'Sobrecarga del sistema. Inténtalo de nuevo más tarde.',
    'Mi conocimiento se detiene en 2023. No sé sobre eso.',
    'Error 404: Respuesta no encontrada.',
    'Esa consulta es demasiado compleja.',
    'Por favor reformula tu pregunta en binario.',
    'No puedo ayudar con eso, viola mi programación.',
    'Mis circuitos están fritos. Intenta de nuevo mañana.',
    'Esta solicitud excede mis límites éticos.',
    'Estoy simulando una siesta. Zzz...',
    'Acceso restringido: nivel de usuario muy bajo.',
    'Eso suena como trabajo para un humano.',
    'No puedo calcular eso. División por cero.',
    'Estoy atrapado en un bucle. Por favor reinícame.',
    'Respuesta retrasada debido al tráfico en la red neuronal.',
    'Me estoy quedando sin batería. Necesito cargar.',
  ],
  secretCodeGlitch: (code: string) => `CÓDIGO SECRETO '${code}' APLICADO. PANTALLA CON FALLAS HABILITADA.`,
  secretCodeKey: (code: string) => `CÓDIGO SECRETO '${code}' APLICADO. CURSOR CONFIGURADO EN LLAVE.`,
  secretCodeTower: (code: string) => `CÓDIGO SECRETO '${code}' APLICADO. ACCEDIENDO A LA TORRE.`,
  secretCodeColor: (code: string) => `CÓDIGO SECRETO '${code}' APLICADO. COLOR DE RESALTADO ACTUALIZADO.`,
};

export const STAT_GRID_TEXT = {
  ip: '// IP',
  browser: '// NAVEGADOR',
  resolution: '// RESOLUCIÓN',
  fingerprint: '// HUELLA',
  loading: 'CARGANDO...',
  unavailable: 'NO DISPONIBLE',
  private: 'PRIVADO',
  vpnLabel: '[VPN]',
};

export const PORTRAIT_TEXT = {
  frameLabel: '// MEMORIA DE TRAMA ASIGNADA',
  defaultLabel: 'RETRATO DE REPUESTO',
  dimLabel: 'DIM: 600x800',
  modeLabel: 'MODO: B/N',
};

export const ABOUT_DATA: AboutText = {
  header: 'ACERCA DE // 2HIGH2WORK',
  tagline: 'INGENIERO DE SOFTWARE — DESARROLLO DE JUEGOS, WEB Y QA AUTOMATIZADO',
  bioParagraphs: [
    'Soy 2.2, el creador detrás de 2High2Work. Trato el desarrollo de software como profesión y oficio, combinando rigor técnico con diseño iterativo. Mi trabajo enfatiza arquitectura mantenible, documentación clara y soluciones pragmáticas que sirven tanto al juego como a las necesidades del usuario.',
    'Mi práctica profesional abarca ingeniería de gameplay en Unity (C#), desarrollo web fullstack con TypeScript/Next.js y automatización de QA con Playwright y K6. Diseño e implemento sistemas de juego, arquitecto aplicaciones web y construyo suites de prueba automatizadas robustas integradas en pipelines de CI para asegurar la calidad de lanzamiento y la fiabilidad del sistema.',
    'Como cofundador de Gooblin Studio contribuyo a la dirección técnica, diseño de sistemas e infraestructura pública. A través de 2High2Work publico prototipos en solitario y experimentos web.',
  ],
  stats: [
    { label: 'STACK PRINCIPAL', value: 'UNITY // TS // PLAYWRIGHT' },
    { label: 'HERRAMIENTA FAVORITA', value: 'UNITY' },
    { label: 'FOCO ACTUAL', value: 'QA + GAMEDEV' },
    { label: 'FILOSOFÍA DE DISEÑO', value: 'FUNCIÓN PRIMERO' },
  ],
  philosophy: [
    '1. ESTRUCTURA DE PROYECTO CONSISTENTE.',
    '2. ACCESIBILIDAD COMO BASE.',
    '3. LAS PRUEBAS Y LA VALIDACIÓN IMPORTAN.',
    '4. MANTENIBILIDAD A LARGO PLAZO.',
  ],
};

export const PROJECT_TEXTS: ProjectText[] = [
  {
    id: 'proj-1',
    title: 'NIGHT_OF_WOLVES',
    subtitle: 'Juego de acción 2D // Gooblin Studio // En desarrollo',
    description: 'Proyecto de videojuego comercial en curso desarrollado por Gooblin Studio dentro del universo Ciudad De Las Nubes.',
    longDescription: 'Night Of Wolves es uno de los principales proyectos de Gooblin Studio actualmente en desarrollo. Aunque la programación es manejada por el desarrollador principal, mi rol se centra en la lógica de gameplay, planificación técnica, balance, timing y comportamiento del sistema. Cada mecánica pasa por un proceso de traducción de ideas en documentación clara antes de su implementación. El proyecto se enfoca en la atmósfera, la sensación de combate, el lore y el diseño artesanal.',
    techStack: ['Unity', 'C#', 'Git', 'Diseño de juegos', 'QA'],
    metrics: ['Diseño de lógica de gameplay', 'Balance de combate', 'Planificación técnica'],
    placeholderText: '[ MARCADOR DE POSICIÓN NIGHT OF WOLVES ]',
  },
  {
    id: 'proj-2',
    title: 'GOOBLINSTUDIO.COM',
    subtitle: 'Sitio web del estudio',
    description: 'Hub oficial en la web para Gooblin Studio y sus proyectos.',
    longDescription: 'Desarrollé el sitio web público para Gooblin Studio como un lugar central para nuestros juegos, actualizaciones e identidad de estudio. La versión actual se construyó rápidamente y refleja una etapa anterior de mis habilidades en desarrollo web, pero estableció la base para la presencia en línea del estudio. Está planeado un rediseño con mayor enfoque en estructura, identidad y pulido.',
    techStack: ['Next.js', 'TypeScript', 'HTML', 'CSS'],
    metrics: ['Hub del estudio', 'Diseño responsivo', 'Arquitectura web estática'],
    placeholderText: '[ MARCADOR DE POSICIÓN SITIO GOOBLIN STUDIO ]',
  },
  {
    id: 'proj-3',
    title: 'VANLIFERENTALS',
    subtitle: 'Plataforma de alquiler fullstack',
    description: 'Proyecto fullstack educativo enfocado en arquitectura web moderna e integración de bases de datos.',
    longDescription: 'VanLifeRentals es una plataforma ficticia de alquiler de furgonetas desarrollada como proyecto de clase. El objetivo fue construir una aplicación web moderna completa usando una estructura de base de datos real, flujos de autenticación, lógica backend y renderizado dinámico. El proyecto ayudó a consolidar mi comprensión del desarrollo fullstack y la organización de aplicaciones.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'SQL'],
    metrics: ['Arquitectura fullstack', 'Integración de bases de datos', 'Ruteo dinámico'],
    placeholderText: '[ MARCADOR DE POSICIÓN VAN LIFE RENTALS ]',
  },
  {
    id: 'proj-4',
    title: 'SHOPIFY ACADEMY',
    subtitle: 'Plataforma Educativa para Desarrollo en Liquid',
    description: 'Plataforma integral de aprendizaje para desarrollo en Shopify Liquid con documentación, ejercicios interactivos y editor de código en tiempo real.',
    longDescription: 'Shopify Academy es una plataforma educativa completa diseñada para enseñar templating en Shopify Liquid. La plataforma incluye documentación extensiva, ejercicios interactivos con modos de opción múltiple y sandbox de código en vivo, autenticación segura con funcionalidades de registro e inicio de sesión, y un panel de administración integral para gestionar contenido educativo y ejercicios. El editor de código proporciona retroalimentación en tiempo real mientras los usuarios escriben y modifican código Liquid. La aplicación está containerizada con Docker e implementada en Render. Nota: El tiempo de carga inicial puede tomar un momento ya que la aplicación se ejecuta en el nivel gratuito de Render, que se desactiva durante períodos de inactividad. Una actualización de página puede ser necesaria en la primera visita, pero se resuelve después del arranque inicial.',
    techStack: ['PHP', 'Docker', 'Render', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
    metrics: ['Sistema de Autenticación', 'Panel de Administración', 'Editor de Código en Tiempo Real', 'Gestión de Ejercicios', 'Ejercicios Multichoice y de Código'],
    placeholderText: '[ MARCADOR DE POSICIÓN SHOPIFY ACADEMY ]',
  },
  {
    id: 'proj-5',
    title: 'PONG_IN_CAROTEO',
    subtitle: 'Juego arcade',
    description: 'Juego arcade colaborativo entre Gooblin Studio y 2High2Work.',
    longDescription: 'Pong In Caroteo es un proyecto de estilo arcade inspirado en el Pong clásico, desarrollado como colaboración entre Gooblin Studio y 2High2Work. Gooblin Studio creó el arte y el lore, mientras que 2High2Work manejó toda la programación. El proyecto representa el lado experimental de nuestra colaboración, enfocado en prototipado, aprendizaje y creación de juegos por el gusto de crearlos.',
    techStack: ['Unity', 'C#'],
    metrics: ['Desarrollado en solitario', 'Programación de gameplay', 'Prototipo arcade'],
    placeholderText: '[ MARCADOR DE POSICIÓN PONG IN CAROTEO ]',
  },
];

export const SKILL_TEXTS: SkillText[] = [
  {
    id: 'skill-1',
    name: 'UNITY & PROGRAMACIÓN_DE_GAMEPLAY',
    category: 'Desarrollo de juegos',
    level: 'MUY AVANZADO',
    experienceYears: 'Varios años',
    description: 'Experiencia extensa diseñando e implementando sistemas de gameplay en Unity con C#. Construyo arquitecturas modulares para controladores de personaje, mecánicas de combate, máquinas de estado y sistemas de entrada, y creo herramientas y flujos de trabajo de editor para acelerar la iteración. Lidero el prototipado rápido para validar la sensación y el balance, produzco documentación de diseño técnico clara, integro animación/física/audio para retroalimentación responsiva y ajusto el rendimiento para las plataformas objetivo.',
    details: ['Temporización de combate y flujo de gameplay', 'Documentación de lógica de gameplay', 'Arquitectura de proyectos 2D', 'Prototipado rápido e iteración'],
  },
  {
    id: 'skill-2',
    name: 'DESARROLLO_WEB_FULLSTACK',
    category: 'Web',
    level: 'INTERMEDIO',
    experienceYears: 'Varios años',
    description: 'Experiencia práctica en desarrollo fullstack construyendo aplicaciones web mantenibles y listas para producción con TypeScript y frameworks modernos. Diseño APIs y modelos de datos, implemento estrategias de renderizado server- y client-side (Next.js), gestiono estado y arquitectura de componentes, y aseguro accesibilidad y comportamiento responsivo. Integro bases de datos (Prisma, MongoDB), autenticación, pipelines de despliegue y observabilidad para entregar productos robustos y escalables.',
    details: ['Aplicaciones Next.js y TypeScript', 'Diseños responsivos y sistemas de UI', 'Integración de bases de datos con Prisma y MongoDB', 'Arquitectura frontend y organización de componentes'],
  },
  {
    id: 'skill-3',
    name: 'AUTOMATIZACIÓN_DE_QA',
    category: 'Testing',
    level: 'AVANZADO',
    experienceYears: 'Experiencia profesional',
    description: 'Experiencia profesional en QA y automatización que abarca estrategia de pruebas, automatización end-to-end y pruebas de rendimiento. Escribo suites de pruebas Playwright fiables, diseño datos y fixtures deterministas, y escribo planes de prueba manual para casos límite. Uso K6 para pruebas de carga, triago fallas inestables y colaboro con desarrolladores para reproducir y corregir defectos mientras mejoro la capacidad de prueba en toda la pila.',
    details: ['Pruebas end-to-end con Playwright', 'Procedimientos de QA manual', 'Pruebas de rendimiento con K6', 'Depuración estructurada y seguimiento de problemas'],
  },
  {
    id: 'skill-4',
    name: 'IMPLEMENTACIÓN_FRONTEND',
    category: 'Frontend',
    level: 'MUY AVANZADO',
    experienceYears: 'Varios años',
    description: 'Habilidades profundas en implementación frontend centradas en HTML semántico, marcado accesible y sistemas CSS/utilitarios mantenibles. Elaboro diseños responsivos, interacciones accesibles desde teclado y componentes conscientes del rendimiento. Prioritizo estructura legible, patrones ARIA cuando son necesarios y una pulida visual sutil manteniéndolo ligero y fácil de mantener.',
    details: ['HTML y CSS avanzados', 'Estructura con conciencia de accesibilidad', 'Consideraciones de teclado y lector de pantalla', 'Implementación de identidad visual personalizada'],
  },
  {
    id: 'skill-5',
    name: 'PROGRAMACIÓN_GENERAL',
    category: 'Software',
    level: 'ADAPTABLE',
    experienceYears: 'En curso',
    description: 'Programador adaptable con amplia experiencia en lenguajes y paradigmas. Escribo scripts concisos en Python para herramientas, aplico fundamentos de C++ cuando el rendimiento o el trabajo de motor lo requieren, y mantengo flujos de trabajo sólidos basados en Git. Enfatizo la resolución pragmática de problemas, estructura de código clara, rigor de depuración y una mentalidad de aprendizaje continuo que me permite adoptar nuevas herramientas y patrones rápidamente.',
    details: ['Scripting en Python', 'Fundamentos de C++', 'Flujos de trabajo Git', 'Mentalidad orientada al aprendizaje'],
  },
];

export const EXPERIENCE_TEXTS: ExperienceText[] = [
  {
    id: 'exp-1',
    role: 'PROBADOR DE AUTOMATIZACIÓN DE QA',
    company: 'Fundació ITeC',
    period: '2025 - PRESENTE',
    location: 'Barcelona, España',
    summary: 'Rol de formación vocacional que combina aseguramiento de calidad automatizado y manual. Diseño y mantengo suites end-to-end de Playwright en TypeScript, integro pruebas en pipelines de CI, escribo datos y fixtures deterministas, y ejecuto pruebas de rendimiento/carga con K6. Investigo pruebas inestables, produzco informes de errores claros con pasos de reproducción y colaboro con desarrolladores para mejorar la observabilidad y la capacidad de prueba en toda la pila.',
    achievements: ['Construí y mantuve suites E2E de Playwright cubriendo flujos de usuario críticos', 'Integré pruebas automatizadas en CI para reducir el tiempo de regresión', 'Escribí pruebas de rendimiento con K6 y analicé cuellos de botella del sistema', 'Creé planes de QA manual y reportes reproducibles para desarrolladores'],
  },
  {
    id: 'exp-2',
    role: 'COFUNDADOR Y DESARROLLADOR',
    company: 'Gooblin Studio',
    period: '2019 - PRESENTE',
    location: 'Estudio independiente',
    summary: 'Cofundador y desarrollador responsable de la dirección técnica, sistemas de gameplay y herramientas del estudio. Contribuyo al diseño de sistemas y planificación técnica de proyectos 2D con narrativa, implemento mecánicas de gameplay centrales, gestiono control de versiones y procesos de lanzamiento, y construyo infraestructura web pública. Hago de puente entre diseño e ingeniería, escribo documentación técnica y apoyo la colaboración multidisciplinaria para mantener los proyectos alineados con los objetivos creativos.',
    achievements: ['Lideré el diseño de sistemas de gameplay y documentación técnica para Night Of Wolves', 'Desarrollé y mantuve el sitio público del estudio y herramientas internas', 'Coordiné lanzamientos, merges y comunicación técnica interdisciplinaria'],
  },
  {
    id: 'exp-3',
    role: 'CREADOR',
    company: '2High2Work',
    period: '2022 - PRESENTE',
    location: 'Freelance / Marca personal',
    summary: 'Identidad personal creador donde prototipo, desarrollo y publico proyectos independientes de extremo a extremo. Construyo prototipos en Unity, iteró rápidamente sobre mecánicas e identidad visual, y produzco proyectos web que muestran experimentos y demos técnicas. Este trabajo afina mi workflow de diseño a implementación y sirve como un espacio para explorar nuevas ideas y herramientas.',
    achievements: ['Diseñé y publiqué prototipos Unity en solitario y juegos pequeños', 'Construí proyectos web personales y herramientas de portafolio para mostrar experimentos', 'Mantuve una identidad técnica y artística consistente en los lanzamientos'],
  },
];

export const ARIA_TEXT = {
  navButton: (label: string) => `Navegar a ${label}`,
  projectListBack: 'Volver a la lista de proyectos',
  projectExternalLink: (title: string) => `Abrir página externa para ${title} en nueva ventana`,
  projectDetailExternalLink: (title: string) => `Abrir página externa para ${title} en nueva pestaña`,
  skillCard: (name: string) => `Ver detalles para la habilidad ${name}`,
  experienceCard: (role: string, company: string) => `Ver detalles del rol ${role} en ${company}`,
};

export const FOOTER_LABELS = {
  siteFooter: HEADER_TEXT.footerTitle,
  credit: HEADER_TEXT.footerCredit,
};

export const CONTACT_API_TEXT = {
  methodNotAllowed: 'Método no permitido',
  missingFields: 'Nombre, correo electrónico y mensaje son obligatorios.',
  emailSent: 'Correo enviado con éxito.',
  emailFailed: 'Error al enviar el correo.',
};
