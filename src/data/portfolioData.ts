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
    subtitle: "2D Action Game // Gooblin Studio",
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
    externalUrl: "https://gooblinstudio.com",
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
      "Gameplay systems, logic implementation, balancing, and game structure inside Unity projects.",
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
      "Building structured web applications with a strong focus on maintainability and identity.",
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
      "Automated and manual testing workflows for professional environments.",
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
      "Building clean and expressive interfaces without relying on trend-driven design systems.",
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
      "Comfortable working across different technologies depending on project needs.",
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
      "Dual vocational training position focused on automated and manual software testing.",
    achievements: [
      "Automating testing workflows using Playwright and TypeScript",
      "Performing manual QA and validation procedures",
      "Working with K6 for performance and stress testing"
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
      "Co-founder of Gooblin Studio, an independent game studio focused on lore-heavy 2D experiences connected through the Ciudad De Las Nubes universe.",
    achievements: [
      "Participated in the development planning of Night Of Wolves",
      "Built the studio's public website",
      "Helped shape gameplay systems and technical logic documentation"
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
      "2High2Work is my personal identity as a programmer, developer, and creator. It acts both as a portfolio and as a space for smaller, more personal projects outside the scope of larger Gooblin Studio productions.",
    achievements: [
      "Developed independent Unity projects",
      "Built personal and collaborative web projects",
      "Maintained a consistent technical and artistic identity"
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
    "PROGRAMMER AS A JOB AND AS A HOBBY",

  bioParagraphs: [
    "I'm 2.2, the person behind 2High2Work. Programming started as a hobby long before it became work, and even now I still approach it more like an artform than a career ladder. The name itself is intentionally unserious. It is a fast way of separating myself from the polished corporate image most portfolios try to imitate.",

    "I work across videogames, web development, and QA automation. Professionally, I currently work with automated and manual testing using Playwright, TypeScript, and K6. Outside of work, most of my time goes into Unity projects, gameplay systems, and web experiments. I care a lot about structure and maintainability because messy projects always become bigger problems later.",

    "I'm also co-founder of Gooblin Studio, where I work on gameplay logic, technical planning, and game development inside the shared universe of Ciudad De Las Nubes. Through 2High2Work, I release smaller and more personal projects that lean more into experimentation, learning, and creative freedom."
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