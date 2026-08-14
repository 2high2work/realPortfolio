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
  { id: 'LANDING', label: '01 // HOME' },
  { id: 'PROJECTS', label: '02 // PROJECTS' },
  { id: 'ABOUT', label: '03 // ABOUT ME' },
  { id: 'CONTACT', label: '04 // CONTACT' },
];

export const HEADER_TEXT = {
  siteName: '2HIGH2WORK',
  siteSubtitle: 'PROGRAMMER // GAMEDEV // QA AUTOMATION',
  footerTitle: '2HIGH2WORK PORTFOLIO',
  footerCredit: 'Designed and developed by 2.2',
  skipToMain: 'Skip to main content',
  mainNavigationLabel: 'Main Navigation',
  openNavigationMenu: 'Open navigation menu',
  closeNavigationMenu: 'Close navigation menu',
};

export const LANDING_TEXT = {
  landingAria: 'Landing Page',
  welcome: 'Welcome to 2High2Work — personal portfolio, development archive, and creative outlet of 2.2.',
  overview: 'I specialize in fullstack web development, QA automation engineering, and indie game development, primarily through Gooblin Studio and independent 2High2Work projects.',
  note: 'My approach centers on clean, maintainable architecture, accessible interfaces, responsive gameplay systems, and disciplined automated testing.',
  aboutThisSiteTitle: 'ABOUT THIS SITE',
  aboutThisSiteDescription: 'A direct, focused portfolio designed for clarity, contrast, and performance — presenting projects and engineering work without unnecessary fluff.',
  navigationTitle: 'NAVIGATION',
  navigationHint: 'Explore the sections above to view featured projects, professional background, and contact channels.',
  exploreProjects: 'EXPLORE PROJECTS',
  getInTouch: 'GET IN TOUCH',
  founderLabel: 'FOUNDER // LEAD DEVELOPER',
};

export const PROJECT_SECTION_TEXT = {
  headingAria: 'Projects Portfolio',
  detailBackButton: '← BACK TO PROJECTS',
  openProjectWebPage: 'OPEN LIVE PROJECT',
  systemOverviewHeading: 'PROJECT OVERVIEW',
  projectListTitle: 'FEATURED PROJECTS',
  projectListDescription: 'Explore selected engineering and game development projects. Click a card for full details or access the live project directly.',
  viewDetailBadge: 'DETAILS',
  openPage: 'VIEW PROJECT',
  openPageAria: (title: string) => `Open external webpage for ${title} in new window`,
  backToProjects: 'Back to Projects List',
  performanceMetricsAriaLabel: 'Key Highlights',
  technologiesUsedAriaLabel: 'Technologies used',
  skillsHeading: 'KEY HIGHLIGHTS',
  techStackHeading: 'TECHNICAL STACK',
};

export const ABOUT_SECTION_TEXT = {
  headingAria: 'About 2High2Work',
  telemetryHeading: 'CORE PROFILE',
  philosophyHeading: 'ENGINEERING PRINCIPLES',
  philosophyAriaLabel: 'Core engineering tenets',
  vectorPortraitLabel: 'PORTRAIT // 2.2',
};

export const CONTACT_SECTION_TEXT = {
  headingAria: 'Contact Details',
  contactTitle: 'CONTACT',
  contactSubtitle: 'Available for professional inquiries, fullstack development, QA automation, and game dev collaborations.',
  formSectionTitle: 'SEND A MESSAGE',
  nameLabel: 'NAME',
  emailLabel: 'EMAIL',
  messageLabel: 'MESSAGE',
  namePlaceholder: 'Your name',
  emailPlaceholder: 'your.email@domain.com',
  messagePlaceholder: 'Write your message here...',
  successMessage: 'Message sent successfully. Thank you for reaching out!',
  transmittingMessage: 'SENDING...',
  transmitPayload: 'SEND MESSAGE',
  errorPrefix: 'FAILED TO SEND:',
  submitFailed: 'Failed to send message',
  unknownError: 'Unknown error',
  directChannelsTitle: 'DIRECT CHANNELS',
  directEmailLabel: 'EMAIL',
  githubLabel: 'GITHUB',
  contactPortraitLabel: 'PORTRAIT // 2.2',
};

export const PORTRAIT_TEXT = {
  defaultLabel: 'PORTRAIT',
  imagePlaceholderAria: 'Portrait image',
};

export const ABOUT_DATA: AboutText = {
  header: 'ABOUT 2HIGH2WORK',
  tagline: 'SOFTWARE ENGINEER — GAME DEVELOPMENT, WEB, AND QA AUTOMATION',
  bioParagraphs: [
    'I am 2.2, creator of 2High2Work. I view software engineering as both a technical discipline and an iterative craft, balancing robust architecture with intuitive design.',
    'My professional work spans gameplay engineering in Unity (C#), fullstack web development with TypeScript/Next.js, and end-to-end QA automation using Playwright and K6 with CI/CD integration.',
    'As co-founder of Gooblin Studio, I oversee technical direction, gameplay logic design, and public web infrastructure, while publishing independent prototypes under 2High2Work.',
  ],
  stats: [
    { label: 'PRIMARY STACK', value: 'UNITY // TS // PLAYWRIGHT' },
    { label: 'ENGINEERING FOCUS', value: 'FULLSTACK & GAMEDEV' },
    { label: 'TESTING & QA', value: 'PLAYWRIGHT & K6' },
    { label: 'DESIGN PHILOSOPHY', value: 'CLARITY & PRECISION' },
  ],
  philosophy: [
    'Consistent and modular project architecture',
    'Accessibility and performance as foundational baselines',
    'Disciplined testing, CI/CD, and quality assurance',
    'Long-term maintainability and clear documentation',
  ],
};

export const PROJECT_TEXTS: ProjectText[] = [
  {
    id: 'proj-1',
    title: 'NIGHT_OF_WOLVES',
    subtitle: '2D Action Game // Gooblin Studio // WIP',
    description: 'Commercial 2D action videogame developed by Gooblin Studio set in the Ciudad De Las Nubes universe.',
    longDescription: 'Night Of Wolves is an atmospheric 2D action game currently in active development at Gooblin Studio. My role centers on core gameplay logic, combat balancing, encounter timing, technical design documentation, and quality assurance. Every mechanic is planned with rigorous specifications to ensure responsive feedback, fluid controls, and tight combat feel.',
    techStack: ['Unity', 'C#', 'Git', 'Game Design', 'QA'],
    metrics: ['Gameplay Logic Design', 'Combat Balancing & Timing', 'Technical Planning & Architecture'],
    placeholderText: 'Night of Wolves Screenshot',
  },
  {
    id: 'proj-2',
    title: 'GOOBLINSTUDIO.COM',
    subtitle: 'Official Studio Website',
    description: 'Official web portal and project showcase for Gooblin Studio games and announcements.',
    longDescription: 'Developed as the central digital presence for Gooblin Studio to showcase our games, updates, and studio identity. Built with modern web standards, responsive design principles, and optimized static asset delivery.',
    techStack: ['Next.js', 'TypeScript', 'HTML5', 'CSS3'],
    metrics: ['Studio Hub', 'Responsive UI/UX', 'Static Web Architecture'],
    placeholderText: 'Gooblin Studio Website',
  },
  {
    id: 'proj-5',
    title: 'PONG_IN_CAROTEO',
    subtitle: 'Arcade Game',
    description: 'Arcade game developed in collaboration between Gooblin Studio and 2High2Work.',
    longDescription: 'Pong In Caroteo is an arcade game reimagining classic paddle mechanics with original lore and art. Developed as a collaboration where Gooblin Studio created art and lore while 2High2Work authored all gameplay programming and system architecture in Unity.',
    techStack: ['Unity', 'C#'],
    metrics: ['Complete Gameplay Programming', 'Custom Physics & Controls', 'Arcade Game Architecture'],
    placeholderText: 'Pong in Caroteo Game',
  },
];

export const TOWER_TEXT = {
  accessGranted: 'SECRET ACCESS GRANTED',
  title: 'THE TOWER',
  description: 'This page is currently quiet. Check back when the tower awakens.',
};

export const FOOTER_TEXT = {
  title: HEADER_TEXT.footerTitle,
  credit: HEADER_TEXT.footerCredit,
  ariaLabel: 'Site Footer',
};

export const ARIA_TEXT = {
  navButton: (label: string) => `Navigate to ${label}`,
  projectListBack: 'Back to Projects List',
  projectExternalLink: (title: string) => `Open external webpage for ${title} in new window`,
  projectDetailExternalLink: (title: string) => `Open external webpage for ${title} in new tab`,
};

export const CONTACT_API_TEXT = {
  methodNotAllowed: 'Method not allowed',
  missingFields: 'Name, email, and message are required.',
  emailSent: 'Email sent successfully.',
  emailFailed: 'Failed to send email.',
};
