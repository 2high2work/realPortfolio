export interface Project {
  id: string;
  title: string;
  subtitle: string;
  externalUrl: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics: string[];
  asciiArt: string;
  placeholderText: string;
  imageUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: string;
  experienceYears: string;
  description: string;
  details: string[];
  asciiIcon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  asciiBadge: string;
}

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "NIGHT_OF_WOLVES",
    subtitle: "2D Action Game // Gooblin Studio // WIP",
    externalUrl: "https://store.steampowered.com/app/2393490/Night_of_Wolves/",
    description:
      "Ongoing commercial videogame project developed by Gooblin Studio inside the Ciudad De Las Nubes universe.",
    longDescription:
      "Night Of Wolves is one of the main Gooblin Studio projects currently in development. While the programming is handled by the lead developer, my role revolves around gameplay logic, technical planning, balancing, timing, and system behavior. Every mechanic goes through a process of translating ideas into clear, logical documentation before implementation. The project focuses heavily on atmosphere, combat feel, lore, and handcrafted design.",
    techStack: ["Unity", "C#", "Git", "Game Design", "QA"],
    metrics: [
      "Gameplay Logic Design",
      "Combat Balancing",
      "Technical Planning"
    ],
    asciiArt: String.raw`
 _______  .__       .__     __    ________   _____   __      __      .__                      
 \      \ |__| ____ |  |___/  |_  \_____  \_/ ____\ /  \    /  \____ |  |___  __ ____   ______
 /   |   \|  |/ ___\|  |  \   __\  /   |   \   __\  \   \/\/   /  _ \|  |\  \/ // __ \ /  ___/
/    |    \  / /_/  >   Y  \  |   /    |    \  |     \        (  <_> )  |_\   /\  ___/ \___ \ 
\____|__  /__\___  /|___|  /__|   \_______  /__|      \__/\  / \____/|____/\_/  \___  >____  >
        \/  /_____/      \/               \/               \/                       \/     \/ 
    `,
    placeholderText: "[ NIGHT OF WOLVES SCREENSHOT PLACEHOLDER ]",
    imageUrl: "/images/project1.webp"
  },

  {
    id: "proj-2",
    title: "GOOBLINSTUDIO.COM",
    subtitle: "Studio Website",
    externalUrl: "http://gooblinstudio.com",
    description:
      "Official web hub for Gooblin Studio and its projects.",
    longDescription:
      "I developed the public-facing website for Gooblin Studio as a central place for our games, updates, and identity as a studio. The current version was built quickly and reflects an earlier stage of my web development skills, but it established the foundation for the studio's online presence. A redesign is planned with a stronger focus on structure, identity, and polish.",
    techStack: ["Next.js", "TypeScript", "HTML", "CSS"],
    metrics: [
      "Studio Hub",
      "Responsive Design",
      "Static Web Architecture"
    ],
    asciiArt: String.raw`
  ________             ___.   .__  .__           _________ __            .___.__        
 /  _____/  ____   ____\_ |__ |  | |__| ____    /   _____//  |_ __ __  __| _/|__| ____  
/   \  ___ /  _ \ /  _ \| __ \|  | |  |/    \   \_____  \\   __\  |  \/ __ | |  |/  _ \ 
\    \_\  (  <_> |  <_> ) \_\ \  |_|  |   |  \  /        \|  | |  |  / /_/ | |  (  <_> )
 \______  /\____/ \____/|___  /____/__|___|  / /_______  /|__| |____/\____ | |__|\____/ 
        \/                  \/             \/          \/                 \/            
    `,
    placeholderText: "[ GOOBLIN STUDIO WEBSITE PLACEHOLDER ]",
    imageUrl: "/images/project2.webp"
  },

  {
    id: "proj-3",
    title: "VANLIFERENTALS",
    subtitle: "Fullstack Rental Platform",
    externalUrl: "",
    description:
      "Educational fullstack project focused on modern web architecture and database integration.",
    longDescription:
      "VanLifeRentals is a fictional van rental platform developed as a class project. The objective was to build a complete modern web application using a real database structure, authentication flows, backend logic, and dynamic rendering. The project helped solidify my understanding of fullstack development and application organization.",
    techStack: ["Next.js", "TypeScript", "Prisma", "SQL"],
    metrics: [
      "Fullstack Architecture",
      "Database Integration",
      "Dynamic Routing"
    ],
    asciiArt: String.raw`
____   ____               .____    .__  _____        __________               __         .__          
\   \ /   /____    ____   |    |   |__|/ ____\____   \______   \ ____   _____/  |______  |  |   ______
 \   Y   /\__  \  /    \  |    |   |  \   __\/ __ \   |       _// __ \ /    \   __\__  \ |  |  /  ___/
  \     /  / __ \|   |  \ |    |___|  ||  | \  ___/   |    |   \  ___/|   |  \  |  / __ \|  |__\___ \ 
   \___/  (____  /___|  / |_______ \__||__|  \___  >  |____|_  /\___  >___|  /__| (____  /____/____  >
               \/     \/          \/             \/          \/     \/     \/          \/          \/ 
    `,
    placeholderText: "[ VAN LIFE RENTALS PLACEHOLDER ]",
    imageUrl: "/images/project3.webp"
  },

  {
    id: "proj-4",
    title: "VINOTECA",
    subtitle: "Database-Driven Storefront",
    externalUrl: "",
    description:
      "Mock ecommerce platform centered around wines and beers.",
    longDescription:
      "Vinoteca is a school project focused on building a complete store experience with frontend, backend, database management, and product handling. The project uses MongoDB and modern web technologies to simulate a real online shop while emphasizing clean organization and maintainable structure.",
    techStack: ["MongoDB", "Next.js", "TypeScript", "Node.js"],
    metrics: [
      "MongoDB Backend",
      "Store Logic",
      "Full CRUD Operations"
    ],
    asciiArt: String.raw`
____   ____.__               __                        
\   \ /   /|__| ____   _____/  |_  ____   ____ _____   
 \   Y   / |  |/    \ /  _ \   __\/ __ \_/ ___\\__  \  
  \     /  |  |   |  (  <_> )  | \  ___/\  \___ / __ \_
   \___/   |__|___|  /\____/|__|  \___  >\___  >____  /
                   \/                 \/     \/     \/ 
    `,
    placeholderText: "[ VINOTECA PLACEHOLDER ]",
    imageUrl: "/images/project4.webp"
  },

  {
    id: "proj-5",
    title: "PONG_IN_CAROTEO",
    subtitle: "Arcade Game",
    externalUrl: "https://2high2work.itch.io/pong-in-caroteo",
    description:
      "Small Unity game developed entirely under the 2High2Work identity.",
    longDescription:
      "Pong In Caroteo is a simple arcade-style project inspired by classic Pong. I programmed the entire game myself as a smaller-scale but fully personal project. While casual in scope, it represents the side of 2High2Work focused on experimentation, learning, and creating games for the sake of making them.",
    techStack: ["Unity", "C#"],
    metrics: [
      "Solo Developed",
      "Gameplay Programming",
      "Arcade Prototype"
    ],
    asciiArt: String.raw`
__________                       .__         _________                      __                
\______   \____   ____    ____   |__| ____   \_   ___ \_____ _______  _____/  |_  ____  ____  
 |     ___/  _ \ /    \  / ___\  |  |/    \  /    \  \/\__  \\_  __ \/  _ \   __\/ __ \/  _ \ 
 |    |  (  <_> )   |  \/ /_/  > |  |   |  \ \     \____/ __ \|  | \(  <_> )  | \  ___(  <_> )
 |____|   \____/|___|  /\___  /  |__|___|  /  \______  (____  /__|   \____/|__|  \___  >____/ 
                     \//_____/           \/          \/     \/                       \/       
    `,
    placeholderText: "[ PONG IN CAROTEO PLACEHOLDER ]",
    imageUrl: "/images/project5.webp"
  }
];

export const SKILLS: Skill[] = [
  {
    id: "skill-1",
    name: "UNITY & GAMEPLAY_PROGRAMMING",
    category: "Game Development",
    level: "VERY ADVANCED",
    experienceYears: "Several Years",
    description:
      "Extensive experience designing and implementing gameplay systems in Unity using C#. I build modular architectures for character controllers, combat mechanics, state machines and input systems, and create tools and editor workflows to speed iteration. I lead rapid prototyping to validate feel and balance, produce clear technical design documents, integrate animation/physics/audio for responsive feedback, and tune performance for target platforms.",
    details: [
      "Combat timing and gameplay flow",
      "Gameplay logic documentation",
      "2D project architecture",
      "Rapid prototyping and iteration"
    ],
    asciiIcon: String.raw`
 ____ ___      .__  __          
|    |   \____ |__|/  |_ ___.__.
|    |   /    \|  \   __<   |  |
|    |  /   |  \  ||  |  \___  |
|______/|___|  /__||__|  / ____|
             \/          \/     
    `
  },

  {
    id: "skill-2",
    name: "FULLSTACK_WEB_DEVELOPMENT",
    category: "Web",
    level: "INTERMEDIATE",
    experienceYears: "Several Years",
    description:
      "Hands-on fullstack development experience building maintainable, production-ready web applications with TypeScript and modern frameworks. I design APIs and data models, implement server- and client-side rendering strategies (Next.js), manage state and component architecture, and ensure accessibility and responsive behavior. I integrate databases (Prisma, MongoDB), authentication, deployment pipelines, and observability to deliver robust, scalable products.",
    details: [
      "Next.js and TypeScript applications",
      "Responsive layouts and UI systems",
      "Database integration with Prisma and MongoDB",
      "Frontend architecture and component organization"
    ],
    asciiIcon: String.raw`
___________    .__  .__            __                 __    
\_   _____/_ __|  | |  |   _______/  |______    ____ |  | __
 |    __)|  |  \  | |  |  /  ___/\   __\__  \ _/ ___\|  |/ /
 |     \ |  |  /  |_|  |__\___ \  |  |  / __ \\  \___|    < 
 \___  / |____/|____/____/____  > |__| (____  /\___  >__|_ \
     \/                       \/            \/     \/     \/
    `
  },

  {
    id: "skill-3",
    name: "QA_AUTOMATION",
    category: "Testing",
    level: "ADVANCED",
    experienceYears: "Professional Experience",
    description:
      "Professional QA and automation expertise spanning test strategy, end-to-end automation, and performance testing. I author reliable Playwright tests and test suites, design deterministic test data and CI integrations, and write manual test plans for edge cases. I use K6 for load testing, triage flaky failures, and work closely with developers to reproduce and fix defects while improving testability across the stack.",
    details: [
      "Playwright end-to-end testing",
      "Manual QA procedures",
      "Performance testing with K6",
      "Structured debugging and issue tracking"
    ],
    asciiIcon: String.raw`
________      _____       _____          __                         __  .__               
\_____  \    /  _  \     /  _  \  __ ___/  |_  ____   _____ _____ _/  |_|__| ____   ____  
 /  / \  \  /  /_\  \   /  /_\  \|  |  \   __\/  _ \ /     \\__  \\   __\  |/  _ \ /    \ 
/   \_/.  \/    |    \ /    |    \  |  /|  | (  <_> )  Y Y  \/ __ \|  | |  (  <_> )   |  \
\_____\ \_/\____|__  / \____|__  /____/ |__|  \____/|__|_|  (____  /__| |__|\____/|___|  /
       \__>        \/          \/                         \/     \/                    \/ 
    `
  },

  {
    id: "skill-4",
    name: "FRONTEND_IMPLEMENTATION",
    category: "Frontend",
    level: "VERY ADVANCED",
    experienceYears: "Several Years",
    description:
      "Deep frontend implementation skills focused on semantic HTML, accessible markup, and maintainable CSS/utility systems. I craft responsive layouts, keyboard-friendly interactions, and performance-conscious components. I prioritize readable structure, ARIA patterns where needed, and subtle motion/visual polish while keeping implementation lightweight and easy to maintain.",
    details: [
      "Advanced HTML and CSS",
      "Accessibility-conscious structure",
      "Keyboard and screen-reader considerations",
      "Custom visual identity implementation"
    ],
    asciiIcon: String.raw`
___________                     __                     .___
\_   _____/______  ____   _____/  |_  ____   ____    __| _/
 |    __) \_  __ \/  _ \ /    \   __\/ __ \ /    \  / __ | 
 |     \   |  | \(  <_> )   |  \  | \  ___/|   |  \/ /_/ | 
 \___  /   |__|   \____/|___|  /__|  \___  >___|  /\____ | 
     \/                      \/          \/     \/      \/ 
    `
  },

  {
    id: "skill-5",
    name: "GENERAL_PROGRAMMING",
    category: "Software",
    level: "ADAPTABLE",
    experienceYears: "Ongoing",
    description:
      "Adaptable programmer with broad experience across languages and paradigms. I write concise Python scripts for tooling, apply C++ fundamentals when performance or engine work requires it, and maintain solid Git-based workflows. I emphasize pragmatic problem solving, clear code structure, debugging rigor, and a continuous learning mindset that lets me adopt new tools and patterns quickly.",
    details: [
      "Python scripting",
      "C++ fundamentals",
      "Git workflows",
      "Learning-oriented mindset"
    ],
    asciiIcon: String.raw`
      10101010
    `
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "QA AUTOMATION TESTER",
    company: "Fundació ITeC",
    period: "2025 - PRESENT",
    location: "Barcelona, Spain",
    summary:
      "Vocational training role combining automated and manual quality assurance. I design and maintain Playwright end-to-end suites in TypeScript, integrate tests into CI pipelines, author deterministic test data and fixtures, and execute performance/load testing with K6. I investigate flaky tests, produce clear bug reports with reproduction steps, and collaborate with developers to improve observability and testability across the stack.",
    achievements: [
      "Built and maintained Playwright E2E suites covering critical user flows",
      "Integrated automated tests into CI to reduce regression time",
      "Authored K6 performance tests and analyzed system bottlenecks",
      "Created manual QA plans and reproducible bug reports for developers"
    ],
    asciiBadge: String.raw`
.______________    _________  
|   \__    ___/___ \_   ___ \ 
|   | |    |_/ __ \/    \  \/ 
|   | |    |\  ___/\     \____
|___| |____| \___  >\______  /
                 \/        \/ 
    `
  },

  {
    id: "exp-2",
    role: "CO-FOUNDER & DEVELOPER",
    company: "Gooblin Studio",
    period: "2019 - PRESENT",
    location: "Independent Studio",
    summary:
      "Co-founder and developer responsible for technical direction, gameplay systems, and studio tooling. I contribute to system design and technical planning for narrative-driven 2D projects, implement core gameplay mechanics, manage version control and release processes, and build public-facing web infrastructure. I bridge design and engineering, write technical documentation, and support cross-discipline collaboration to keep projects aligned with creative goals.",
    achievements: [
      "Led gameplay system design and technical documentation for Night Of Wolves",
      "Developed and maintained the studio's public website and internal tooling",
      "Coordinated releases, merges, and cross-discipline technical communication"
    ],
    asciiBadge: String.raw`
  ________             ___.   .__  .__           _________ __            .___.__        
 /  _____/  ____   ____\_ |__ |  | |__| ____    /   _____//  |_ __ __  __| _/|__| ____  
/   \  ___ /  _ \ /  _ \| __ \|  | |  |/    \   \_____  \\   __\  |  \/ __ | |  |/  _ \ 
\    \_\  (  <_> |  <_> ) \_\ \  |_|  |   |  \  /        \|  | |  |  / /_/ | |  (  <_> )
 \______  /\____/ \____/|___  /____/__|___|  / /_______  /|__| |____/\____ | |__|\____/ 
        \/                  \/             \/          \/                 \/            
    `
  },

  {
    id: "exp-3",
    role: "CREATOR",
    company: "2High2Work",
    period: "2022 - PRESENT",
    location: "Freelance / Personal Brand",
    summary:
      "Personal creator identity where I prototype, develop and publish independent projects end-to-end. I build Unity prototypes, iterate rapidly on mechanics and visual identity, and produce web projects that showcase experiments and technical demos. This work sharpens my design-to-implementation workflow and serves as a playground for exploring new ideas and tools.",
    achievements: [
      "Designed and shipped solo Unity prototypes and small games",
      "Built personal web projects and portfolio tooling to showcase experiments",
      "Maintained a consistent technical and artistic identity across releases"
    ],
    asciiBadge: String.raw`
      ,----,           ,----,   
    .'   .' \        .'   .' \  
  ,----,'    |     ,----,'    | 
  |    :  .  ;     |    :  .  ; 
  ;    |.'  /      ;    |.'  /  
  '----'/  ;       '----'/  ;   
    /  ;  /          /  ;  /    
   ;  /  /-,        ;  /  /-,   
  /  /  /.'|       /  /  /.'|   
./__;      :___  ./__;      :   
|   :    .'/  .\ |   :    .'    
;   | .'   \  ; |;   | .'       
'---'       '--" '---'          
    `
  }
];

export const ABOUT_DATA = {
  header: "ABOUT // 2HIGH2WORK",
  tagline:
    "SOFTWARE ENGINEER — GAME DEVELOPMENT, WEB, AND QA AUTOMATION",

  bioParagraphs: [
    "I am 2.2, the creator behind 2High2Work. I treat software development as both a profession and a craft, combining technical rigor with iterative design. My work emphasizes maintainable architecture, clear documentation, and pragmatic solutions that serve gameplay and user needs.",

    "My professional practice spans gameplay engineering in Unity (C#), fullstack web development with TypeScript/Next.js, and QA automation using Playwright and K6. I design and implement gameplay systems, architect web applications, and build robust automated test suites integrated into CI pipelines to ensure release quality and system reliability.",

    "As co-founder of Gooblin Studio I contribute to technical direction, system design, and public-facing infrastructure. Through 2High2Work I publish solo prototypes and web experiments."
  ],

  stats: [
    { label: "MAIN STACK", value: "UNITY // TS // PLAYWRIGHT" },
    { label: "FAVORITE TOOL", value: "UNITY" },
    { label: "CURRENT FOCUS", value: "QA + GAMEDEV" },
    { label: "DESIGN PHILOSOPHY", value: "FUNCTION FIRST" }
  ],

  philosophy: [
    "1. CONSISTENT PROJECT STRUCTURE.",
    "2. ACCESSIBILITY AS A BASELINE.",
    "3. TESTING AND VALIDATION MATTER.",
    "4. LONG-TERM MAINTAINABILITY."
  ]
};