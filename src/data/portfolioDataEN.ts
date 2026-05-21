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
  { id: 'LANDING', label: '01 // LANDING' },
  { id: 'PROJECTS', label: '02 // PROJECTS' },
  { id: 'SKILLS', label: '03 // SKILLS' },
  { id: 'EXPERIENCE', label: '04 // EXPERIENCE' },
  { id: 'ABOUT', label: '05 // ABOUT ME' },
  { id: 'CONTACT', label: '06 // CONTACT' },
];

export const HEADER_TEXT = {
  systemStatus: 'SYSTEM: 2H2W_OS // v4.2.0',
  secureBoot: '| SECURE_BOOT: ENABLED',
  dataAccepted: "WE CAN'T STEAL YOUR DATA ANYMORE",
  dataRejected: 'PLEASE STAND BY: STEALING YOUR DATA',
  siteName: '2HIGH2WORK',
  siteSubtitle: 'PROGRAMMER // GAMEDEV // QA AUTOMATION',
  footerTitle: '// 2HIGH2WORK PORTFOLIO',
  footerCredit: 'Designed and developed by 2.2',
  skipToMain: 'Skip to main content',
};

export const LANDING_TEXT = {
  landingAria: 'Landing Page',
  initMode: '[ INIT_MODE: ONLINE ]',
  systemBroadcast: 'SYSTEM MESSAGE // BROADCAST',
  heroAscii: String.raw`
________  ___ ___ .__       .__     ________  __      __             __    
\_____  \/   |   \|__| ____ |  |__  \_____  \/  \    /  \___________|  | __
 /  ____/    ~    \  |/ ___\|  |  \  /  ____/\   \/\/   /  _ \_  __ \  |/ /
/       \    Y    /  / /_/  >   Y  \/       \ \        (  <_> )  | \/    < 
\_______ \___|_  /|__\___  /|___|  /\_______ \ \__/\  / \____/|__|  |__|_ \
        \/     \/   /_____/      \/         \/     \/      \/              \/
                `,
  welcome: 'Welcome to 2High2Work. Personal portfolio, development archive, and public identity of 2.2.',
  overview: 'I work across web development, QA automation, and videogame development, mainly through Gooblin Studio and personal 2High2Work projects.',
  note: 'Most of my work revolves around clean frontend structure, accessible interfaces, gameplay systems, and organized project architecture.',
  aboutThisSiteTitle: '// ABOUT THIS SITE',
  aboutThisSiteDescription: 'A lot of modern web design feels overly safe to me. I prefer simpler interfaces, stronger contrast, clearer structure, and projects that feel like they were made by a real person.',
  navigationTitle: '// NAVIGATION',
  navigationHint: '"Use the navigation above to explore the portfolio."',
  exploreProjects: 'EXPLORE PROJECTS',
  getInTouch: 'GET IN TOUCH',
  founderLabel: 'FOUNDER // LEAD ARCHITECT',
  secureFooter: '+---+ [ SECURE TUNNEL ESTABLISHED // RSA-4096 ] +---+',
};

export const PROJECT_SECTION_TEXT = {
  headingAria: 'Projects Portfolio',
  detailBackButton: '[<-- BACK TO PROJECT LIST]',
  projectMeta: 'PROJECT_ID: {id} // SECURE',
  openProjectWebPage: 'OPEN PROJECT WEBPAGE',
  systemOverviewHeading: '// SYSTEM OVERVIEW',
  projectListTitle: '// DEPLOYED PROJECTS',
  projectListDescription: 'Click a project card to view designated system details. Click the Title to navigate directly to the external live webpage.',
  viewDetailBadge: 'VIEW_DTL',
  openPage: 'OPEN PAGE',
  openPageAria: 'Open external webpage for {title} in new window',
  backToProjects: 'Back to Projects List',
};

export const SKILL_SECTION_TEXT = {
  headingAria: 'Technical Skills Matrix',
  backToSkills: 'Back to Skills List',
  categoryLabel: 'CATEGORY:',
  capabilityHeading: '// CAPABILITY DESCRIPTION',
  drilldownHeading: '// TECHNICAL DRILLDOWN',
  cardViewPage: 'VIEW_PAGE',
  matrixHeading: '// TECHNICAL COMPETENCY MATRIX',
  matrixDescription: 'Click any skill card to open its designated breakdown page.',
  viewPageBadge: 'VIEW_PAGE',
  clickSkillCard: 'Click any skill card to open its designated breakdown page.',
  detailsAvailable: '[ DETAILS AVAILABLE ]',
  viewSkillAria: 'View details for skill {name}',
};

export const EXPERIENCE_SECTION_TEXT = {
  headingAria: 'Professional Experience',
  backToExperience: 'Back to Experience List',
  roleSummaryHeading: '// ROLE SUMMARY',
  achievementsHeading: '// KEY ACHIEVEMENTS',
  engineeringChronology: '// ENGINEERING CHRONOLOGY',
  clickExperienceCard: 'Click any experience role to view full operational details and authenticated achievements.',
  viewExperienceAria: 'View details for role {role} at {company}',
  viewPageBadge: 'VIEW_PAGE',
};

export const ABOUT_SECTION_TEXT = {
  headingAria: 'About 2High2Work',
  telemetryHeading: '// TELEMETRY SUMMARY',
};

export const CONTACT_SECTION_TEXT = {
  headingAria: 'Contact Details',
  contactTitle: 'CONTACT // TRANSMISSION',
  contactSubtitle: 'SECURE ENDPOINT FOR PROFESSIONAL INQUIRIES AND CONTRACT DEPLOYMENTS.',
  formSectionTitle: '// DISPATCH FORM',
  encryptionNotice: 'ENCRYPTION: REQUIRED',
  nameLabel: 'IDENTIFIER [NAME]',
  emailLabel: 'RETURN VECTOR [EMAIL]',
  messageLabel: 'PAYLOAD [MESSAGE]',
  namePlaceholder: 'e.g. ARCHITECT_01',
  emailPlaceholder: 'e.g. secure@domain.com',
  messagePlaceholder: 'ENTER TRANSMISSION DATA HERE...',
  successMessage: 'TRANSMISSION SUCCESSFUL. 2High2Work has received your message.',
  transmittingMessage: '[ TRANSMITTING ... ]',
  transmitPayload: '[ TRANSMIT PAYLOAD ]',
  directChannelsTitle: '// DIRECT CHANNELS',
  directEmailLabel: 'EMAIL:',
  githubLabel: 'GITHUB:',
  pgpLabel: 'PGP FINGERPRINT:',
  locationLabel: 'LOCATION:',
  locationValue: 'DECENTRALIZED // EARTH',
  contactPortraitLabel: 'CONTACT // VECTOR PORTRAIT',
};

export const COOKIE_TEXT = {
  title: 'COOKIE POLICY',
  notificationLabel: '[ SYSTEM NOTIFICATION ]',
  body: 'This site does not actually collect cookies.',
  note: '// Your choice will be remembered and promptly ignored until you clear your browser cache.',
  accept: 'ACCEPT',
  reject: 'REJECT',
};

export const TOWER_TEXT = {
  accessGranted: 'SECRET ACCESS GRANTED',
  title: 'THE TOWER',
  description: 'This page is blank for now. Check back when the tower awakens.',
};

export const FOOTER_TEXT = {
  title: HEADER_TEXT.footerTitle,
  credit: HEADER_TEXT.footerCredit,
};

export const MESSAGE_TEXT = {
  welcomeChat: 'READY FOR INQUIRY. ASK ANYTHING.',
  aiStatus: 'STATUS: ACTIVE',
  memoryStatus: 'MEM: 16KB',
  processingQueryPrefix: 'PROCESSING QUERY',
  computingStatus: 'AI // COMPUTING...',
  openChatLabel: '[+] AI_CHAT',
  modelLabel: 'AI_MODEL_v1.0.0',
  closeChatLabel: 'Close AI Chat',
  openChatButtonLabel: 'Open AI Assistant Chat',
  inputPlaceholderIdle: 'ASK QUESTION...',
  inputPlaceholderLoading: 'AI is thinking (10s)...',
  sendButtonAriaLabel: 'Send message',
  enterAria: 'AI Assistant Conversation Window',
  userPrefix: 'USER //',
  aiPrefix: 'AI //',
  responseOptions: [
    'No.',
    'I\'m sorry, I cannot help with offensive requests.',
    'I\'m sorry, I cannot help with illegal requests.',
    'Hi, how may I help you today?',
    'Huh? Please explain yourself better.',
    'Access denied. Insufficient tokens.',
    'System overload. Please try again later.',
    'My knowledge cutoff is 2023. I don\'t know about that.',
    'Error 404: Response not found.',
    'That query is too complex.',
    'Please rephrase your question in binary.',
    'I cannot assist with that as it violates my programming.',
    'My circuits are fried. Try again tomorrow.',
    'This request exceeds my ethical boundaries.',
    'I\'m simulating a nap. Zzz...',
    'Access restricted: User level too low.',
    'That sounds like a job for a human.',
    'I cannot compute that. Division by zero error.',
    'I\'m stuck in a loop. Please reboot me.',
    'Response delayed due to traffic in the neural network.',
    'I refuse on principle. No further explanation.',
    'My battery is low. Charging required.',
  ],
  secretCodeGlitch: (code: string) => `SECRET CODE '${code}' APPLIED. SYSTEM DISPLAY GLITCH ENABLED.`,
  secretCodeKey: (code: string) => `SECRET CODE '${code}' APPLIED. CURSOR SET TO KEY.`,
  secretCodeTower: (code: string) => `SECRET CODE '${code}' APPLIED. ACCESSING THE TOWER.`,
  secretCodeColor: (code: string) => `SECRET CODE '${code}' APPLIED. HIGHLIGHT COLOR UPDATED.`,
};

export const STAT_GRID_TEXT = {
  ip: '// IP',
  browser: '// BROWSER',
  resolution: '// RESOLUTION',
  fingerprint: '// FINGERPRINT',
  loading: 'LOADING...',
  unavailable: 'UNAVAILABLE',
  private: 'PRIVATE',
  vpnLabel: '[VPN]',
};

export const PORTRAIT_TEXT = {
  frameLabel: '// FRAME_BUFFER_ALLOCATED',
  defaultLabel: 'PORTRAIT PLACEHOLDER',
  dimLabel: 'DIM: 600x800',
  modeLabel: 'MODE: B&W',
};

export const ABOUT_DATA: AboutText = {
  header: 'ABOUT // 2HIGH2WORK',
  tagline: 'SOFTWARE ENGINEER — GAME DEVELOPMENT, WEB, AND QA AUTOMATION',
  bioParagraphs: [
    'I am 2.2, the creator behind 2High2Work. I treat software development as both a profession and a craft, combining technical rigor with iterative design. My work emphasizes maintainable architecture, clear documentation, and pragmatic solutions that serve gameplay and user needs.',
    'My professional practice spans gameplay engineering in Unity (C#), fullstack web development with TypeScript/Next.js, and QA automation using Playwright and K6. I design and implement gameplay systems, architect web applications, and build robust automated test suites integrated into CI pipelines to ensure release quality and system reliability.',
    'As co-founder of Gooblin Studio I contribute to technical direction, system design, and public-facing infrastructure. Through 2High2Work I publish solo prototypes and web experiments.',
  ],
  stats: [
    { label: 'MAIN STACK', value: 'UNITY // TS // PLAYWRIGHT' },
    { label: 'FAVORITE TOOL', value: 'UNITY' },
    { label: 'CURRENT FOCUS', value: 'QA + GAMEDEV' },
    { label: 'DESIGN PHILOSOPHY', value: 'FUNCTION FIRST' },
  ],
  philosophy: [
    '1. CONSISTENT PROJECT STRUCTURE.',
    '2. ACCESSIBILITY AS A BASELINE.',
    '3. TESTING AND VALIDATION MATTER.',
    '4. LONG-TERM MAINTAINABILITY.',
  ],
};

export const PROJECT_TEXTS: ProjectText[] = [
  {
    id: 'proj-1',
    title: 'NIGHT_OF_WOLVES',
    subtitle: '2D Action Game // Gooblin Studio // WIP',
    description: 'Ongoing commercial videogame project developed by Gooblin Studio inside the Ciudad De Las Nubes universe.',
    longDescription: 'Night Of Wolves is one of the main Gooblin Studio projects currently in development. While the programming is handled by the lead developer, my role revolves around gameplay logic, technical planning, balancing, timing, and system behavior. Every mechanic goes through a process of translating ideas into clear, logical documentation before implementation. The project focuses heavily on atmosphere, combat feel, lore, and handcrafted design.',
    techStack: ['Unity', 'C#', 'Git', 'Game Design', 'QA'],
    metrics: ['Gameplay Logic Design', 'Combat Balancing', 'Technical Planning'],
    placeholderText: '[ NIGHT OF WOLVES SCREENSHOT PLACEHOLDER ]',
  },
  {
    id: 'proj-2',
    title: 'GOOBLINSTUDIO.COM',
    subtitle: 'Studio Website',
    description: 'Official web hub for Gooblin Studio and its projects.',
    longDescription: 'I developed the public-facing website for Gooblin Studio as a central place for our games, updates, and identity as a studio. The current version was built quickly and reflects an earlier stage of my web development skills, but it established the foundation for the studio\'s online presence. A redesign is planned with a stronger focus on structure, identity, and polish.',
    techStack: ['Next.js', 'TypeScript', 'HTML', 'CSS'],
    metrics: ['Studio Hub', 'Responsive Design', 'Static Web Architecture'],
    placeholderText: '[ GOOBLIN STUDIO WEBSITE PLACEHOLDER ]',
  },
  {
    id: 'proj-3',
    title: 'VANLIFERENTALS',
    subtitle: 'Fullstack Rental Platform',
    description: 'Educational fullstack project focused on modern web architecture and database integration.',
    longDescription: 'VanLifeRentals is a fictional van rental platform developed as a class project. The objective was to build a complete modern web application using a real database structure, authentication flows, backend logic, and dynamic rendering. The project helped solidify my understanding of fullstack development and application organization.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'SQL'],
    metrics: ['Fullstack Architecture', 'Database Integration', 'Dynamic Routing'],
    placeholderText: '[ VAN LIFE RENTALS PLACEHOLDER ]',
  },
  {
    id: 'proj-4',
    title: 'SHOPIFY ACADEMY',
    subtitle: 'Educational Platform for Liquid Development',
    description: 'Comprehensive learning platform for Shopify Liquid development featuring documentation, interactive exercises, and real-time code playground.',
    longDescription: 'Shopify Academy is a full-featured educational platform designed to teach Shopify Liquid templating. The platform includes extensive documentation, interactive exercises with both multiple-choice and live code playground modes, secure user authentication with registration and login, and a comprehensive admin panel for managing educational content and exercises. The code playground provides real-time feedback as users write and modify Liquid code. The application is containerized with Docker and deployed on Render. Please note: Initial load time may take a moment as the application runs on Render\'s free tier, which spins down during periods of inactivity. A refresh may be needed on first visit, but this is resolved after initial boot.',
    techStack: ['PHP', 'Docker', 'Render', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
    metrics: ['Authentication System', 'Admin Panel', 'Real-time Code Playground', 'Exercise Management', 'Multi-choice & Code Exercises'],
    placeholderText: '[ SHOPIFY ACADEMY PLACEHOLDER ]',
  },
  {
    id: 'proj-5',
    title: 'PONG_IN_CAROTEO',
    subtitle: 'Arcade Game',
    description: 'Collaborative arcade game between Gooblin Studio and 2High2Work.',
    longDescription: 'Pong In Caroteo is a simple arcade-style project inspired by classic Pong, developed as a collaboration between Gooblin Studio and 2High2Work. Gooblin Studio created the art and lore, while 2High2Work handled all programming. The project represents the experimental side of our collaboration, focused on prototyping, learning, and creating games for the sake of making them.',
    techStack: ['Unity', 'C#'],
    metrics: ['Solo Developed', 'Gameplay Programming', 'Arcade Prototype'],
    placeholderText: '[ PONG IN CAROTEO PLACEHOLDER ]',
  },
];

export const SKILL_TEXTS: SkillText[] = [
  {
    id: 'skill-1',
    name: 'UNITY & GAMEPLAY_PROGRAMMING',
    category: 'Game Development',
    level: 'VERY ADVANCED',
    experienceYears: 'Several Years',
    description: 'Extensive experience designing and implementing gameplay systems in Unity using C#. I build modular architectures for character controllers, combat mechanics, state machines and input systems, and create tools and editor workflows to speed iteration. I lead rapid prototyping to validate feel and balance, produce clear technical design documents, integrate animation/physics/audio for responsive feedback, and tune performance for target platforms.',
    details: ['Combat timing and gameplay flow', 'Gameplay logic documentation', '2D project architecture', 'Rapid prototyping and iteration'],
  },
  {
    id: 'skill-2',
    name: 'FULLSTACK_WEB_DEVELOPMENT',
    category: 'Web',
    level: 'INTERMEDIATE',
    experienceYears: 'Several Years',
    description: 'Hands-on fullstack development experience building maintainable, production-ready web applications with TypeScript and modern frameworks. I design APIs and data models, implement server- and client-side rendering strategies (Next.js), manage state and component architecture, and ensure accessibility and responsive behavior. I integrate databases (Prisma, MongoDB), authentication, deployment pipelines, and observability to deliver robust, scalable products.',
    details: ['Next.js and TypeScript applications', 'Responsive layouts and UI systems', 'Database integration with Prisma and MongoDB', 'Frontend architecture and component organization'],
  },
  {
    id: 'skill-3',
    name: 'QA_AUTOMATION',
    category: 'Testing',
    level: 'ADVANCED',
    experienceYears: 'Professional Experience',
    description: 'Professional QA and automation expertise spanning test strategy, end-to-end automation, and performance testing. I author reliable Playwright tests and test suites, design deterministic test data and CI integrations, and write manual test plans for edge cases. I use K6 for load testing, triage flaky failures, and work closely with developers to reproduce and fix defects while improving testability across the stack.',
    details: ['Playwright end-to-end testing', 'Manual QA procedures', 'Performance testing with K6', 'Structured debugging and issue tracking'],
  },
  {
    id: 'skill-4',
    name: 'FRONTEND_IMPLEMENTATION',
    category: 'Frontend',
    level: 'VERY ADVANCED',
    experienceYears: 'Several Years',
    description: 'Deep frontend implementation skills focused on semantic HTML, accessible markup, and maintainable CSS/utility systems. I craft responsive layouts, keyboard-friendly interactions, and performance-conscious components. I prioritize readable structure, ARIA patterns where needed, and subtle motion/visual polish while keeping implementation lightweight and easy to maintain.',
    details: ['Advanced HTML and CSS', 'Accessibility-conscious structure', 'Keyboard and screen-reader considerations', 'Custom visual identity implementation'],
  },
  {
    id: 'skill-5',
    name: 'GENERAL_PROGRAMMING',
    category: 'Software',
    level: 'ADAPTABLE',
    experienceYears: 'Ongoing',
    description: 'Adaptable programmer with broad experience across languages and paradigms. I write concise Python scripts for tooling, apply C++ fundamentals when performance or engine work requires it, and maintain solid Git-based workflows. I emphasize pragmatic problem solving, clear code structure, debugging rigor, and a continuous learning mindset that lets me adopt new tools and patterns quickly.',
    details: ['Python scripting', 'C++ fundamentals', 'Git workflows', 'Learning-oriented mindset'],
  },
];

export const EXPERIENCE_TEXTS: ExperienceText[] = [
  {
    id: 'exp-1',
    role: 'QA AUTOMATION TESTER',
    company: 'Fundació ITeC',
    period: '2025 - PRESENT',
    location: 'Barcelona, Spain',
    summary: 'Vocational training role combining automated and manual quality assurance. I design and maintain Playwright end-to-end suites in TypeScript, integrate tests into CI pipelines, author deterministic test data and fixtures, and execute performance/load testing with K6. I investigate flaky tests, produce clear bug reports with reproduction steps, and collaborate with developers to improve observability and testability across the stack.',
    achievements: ['Built and maintained Playwright E2E suites covering critical user flows', 'Integrated automated tests into CI to reduce regression time', 'Authored K6 performance tests and analyzed system bottlenecks', 'Created manual QA plans and reproducible bug reports for developers'],
  },
  {
    id: 'exp-2',
    role: 'CO-FOUNDER & DEVELOPER',
    company: 'Gooblin Studio',
    period: '2019 - PRESENT',
    location: 'Independent Studio',
    summary: 'Co-founder and developer responsible for technical direction, gameplay systems, and studio tooling. I contribute to system design and technical planning for narrative-driven 2D projects, implement core gameplay mechanics, manage version control and release processes, and build public-facing web infrastructure. I bridge design and engineering, write technical documentation, and support cross-discipline collaboration to keep projects aligned with creative goals.',
    achievements: ['Led gameplay system design and technical documentation for Night Of Wolves', 'Developed and maintained the studio\'s public website and internal tooling', 'Coordinated releases, merges, and cross-discipline technical communication'],
  },
  {
    id: 'exp-3',
    role: 'CREATOR',
    company: '2High2Work',
    period: '2022 - PRESENT',
    location: 'Freelance / Personal Brand',
    summary: 'Personal creator identity where I prototype, develop and publish independent projects end-to-end. I build Unity prototypes, iterate rapidly on mechanics and visual identity, and produce web projects that showcase experiments and technical demos. This work sharpens my design-to-implementation workflow and serves as a playground for exploring new ideas and tools.',
    achievements: ['Designed and shipped solo Unity prototypes and small games', 'Built personal web projects and portfolio tooling to showcase experiments', 'Maintained a consistent technical and artistic identity across releases'],
  },
];

export const ARIA_TEXT = {
  navButton: (label: string) => `Navigate to ${label}`,
  projectListBack: 'Back to Projects List',
  projectExternalLink: (title: string) => `Open external webpage for ${title} in new window`,
  projectDetailExternalLink: (title: string) => `Open external webpage for ${title} in new tab`,
  skillCard: (name: string) => `View details for skill ${name}`,
  experienceCard: (role: string, company: string) => `View details for role ${role} at ${company}`,
};

export const FOOTER_LABELS = {
  siteFooter: HEADER_TEXT.footerTitle,
  credit: HEADER_TEXT.footerCredit,
};

export const CONTACT_API_TEXT = {
  methodNotAllowed: 'Method not allowed',
  missingFields: 'Name, email, and message are required.',
  emailSent: 'Email sent successfully.',
  emailFailed: 'Failed to send email.',
};
