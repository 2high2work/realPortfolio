import {
  ABOUT_DATA as ABOUT_DATA_EN,
  ABOUT_SECTION_TEXT as ABOUT_SECTION_TEXT_EN,
  ARIA_TEXT as ARIA_TEXT_EN,
  CONTACT_API_TEXT as CONTACT_API_TEXT_EN,
  CONTACT_SECTION_TEXT as CONTACT_SECTION_TEXT_EN,
  COOKIE_TEXT as COOKIE_TEXT_EN,
  EXPERIENCE_SECTION_TEXT as EXPERIENCE_SECTION_TEXT_EN,
  EXPERIENCE_TEXTS as EXPERIENCE_TEXTS_EN,
  FOOTER_TEXT as FOOTER_TEXT_EN,
  HEADER_TEXT as HEADER_TEXT_EN,
  LANDING_TEXT as LANDING_TEXT_EN,
  NAV_ITEMS as NAV_ITEMS_EN,
  PROJECT_TEXTS as PROJECT_TEXTS_EN,
  PROJECT_SECTION_TEXT as PROJECT_SECTION_TEXT_EN,
  PORTRAIT_TEXT as PORTRAIT_TEXT_EN,
  SKILL_SECTION_TEXT as SKILL_SECTION_TEXT_EN,
  SKILL_TEXTS as SKILL_TEXTS_EN,
  STAT_GRID_TEXT as STAT_GRID_TEXT_EN,
  TOWER_TEXT as TOWER_TEXT_EN,
  MESSAGE_TEXT as MESSAGE_TEXT_EN,
} from './portfolioDataEN.js';
import {
  ABOUT_DATA as ABOUT_DATA_ES,
  ABOUT_SECTION_TEXT as ABOUT_SECTION_TEXT_ES,
  ARIA_TEXT as ARIA_TEXT_ES,
  CONTACT_API_TEXT as CONTACT_API_TEXT_ES,
  CONTACT_SECTION_TEXT as CONTACT_SECTION_TEXT_ES,
  COOKIE_TEXT as COOKIE_TEXT_ES,
  EXPERIENCE_SECTION_TEXT as EXPERIENCE_SECTION_TEXT_ES,
  EXPERIENCE_TEXTS as EXPERIENCE_TEXTS_ES,
  FOOTER_TEXT as FOOTER_TEXT_ES,
  HEADER_TEXT as HEADER_TEXT_ES,
  LANDING_TEXT as LANDING_TEXT_ES,
  NAV_ITEMS as NAV_ITEMS_ES,
  PROJECT_TEXTS as PROJECT_TEXTS_ES,
  PROJECT_SECTION_TEXT as PROJECT_SECTION_TEXT_ES,
  PORTRAIT_TEXT as PORTRAIT_TEXT_ES,
  SKILL_SECTION_TEXT as SKILL_SECTION_TEXT_ES,
  SKILL_TEXTS as SKILL_TEXTS_ES,
  STAT_GRID_TEXT as STAT_GRID_TEXT_ES,
  TOWER_TEXT as TOWER_TEXT_ES,
  MESSAGE_TEXT as MESSAGE_TEXT_ES,
} from './portfolioDataES.js';

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

export type Language = 'EN' | 'ES';
export const DEFAULT_LANGUAGE: Language = 'EN';
export const LANGUAGE_STORAGE_KEY = 'preferredLanguage';

const PROJECT_MEDIA: Record<string, { externalUrl: string; asciiArt: string; imageUrl: string }> = {
  'proj-1': {
    externalUrl: 'https://store.steampowered.com/app/2393490/Night_of_Wolves/',
    asciiArt: String.raw`
 _______  .__       .__     __    ________   _____   __      __      .__                      
 \      \ |__| ____ |  |___/  |_  \_____  \_/ ____\ /  \    /  \____ |  |___  __ ____   ______
 /   |   \|  |/ ___\|  |  \   __\  /   |   \   __\  \   \/\/   /  _ \|  |\  \/ // __ \ /  ___/
/    |    \  / /_/  >   Y  \  |   /    |    \  |     \        (  <_> )  |_\   /\  ___/ \___ \ 
\____|__  /__\___  /|___|  /__|   \_______  /__|      \__/\  / \____/|____/\_/  \___  >____  >
        \/  /_____/      \/               \/               \/                       \/     \/ 
    `,
    imageUrl: '/images/project1.webp',
  },
  'proj-2': {
    externalUrl: 'http://gooblinstudio.com',
    asciiArt: String.raw`
  ________             ___.   .__  .__          _________ __             ___  __        
 /  _____/  ____   ____\_ |__ |  | |__| ____   /   _____//  |_ __ __  __| _/ |__| ____  
/   \  ___ /  _ \ /  _ \| __ \|  | |  |/    \  \_____  \\\   __\  |  \/ __ | |  |/  _ \ 
\    \_\  (  <_> |  <_> ) \_\ \  |_|  |   |  \  ____/ __ \|  | |  |  / /_/ | |  (  <_> )
 \______  /\____/ \____/|___  /____/__|___|  / /_______  /|__| |____/\____ | |__|\____/ 
        \/                  \/             \/          \/                 \/            
    `,
    imageUrl: '/images/project2.webp',
  },
  'proj-3': {
    externalUrl: 'https://van-life-rentals.vercel.app/',
    asciiArt: String.raw`
____   ____               .____    .__  _____        __________               __         .__          
\   \ /   /____    ____   |    |   |__|/ ____\____   \______   \ ____   _____/  |______  |  |   ______
 \   Y   /\__  \  /    \  |    |   |  \   __\/ __ \   |       _// __ \ /    \   __\__  \ |  |  /  ___/
  \     /  / __ \|   |  \ |    |___|  ||  | \  ___/   |    |   \  ___/|   |  \  |  / __ \|  |__\___ \ 
   \___/  (____  /___|  / |_______ \__||__|  \___  >  |____|_  /\___  >___|  /__| (____  /____/____  >
               \/     \/          \/             \/          \/     \/     \/          \/          \/ 
    `,
    imageUrl: '/images/project3.webp',
  },
  'proj-4': {
    externalUrl: 'https://shopify-liquid-academy.onrender.com/',
    asciiArt: String.raw`
  _________.__                  .__  _____       
 /   _____/|  |__   ____ ______ |__|/ ____\__.__.
 \_____  \ |  |  \ /  _ \\____ \|  \   __<   |  |
 /        \|   Y  (  <_> )  |_> >  ||  |  \___  |
/_______  /|___|  /\____/|   __/|__||__|  / ____|
        \/      \/       |__|             \/     
    `,
    imageUrl: '/images/project4.webp',
  },
  'proj-5': {
    externalUrl: 'https://2high2work.itch.io/pong-in-caroteo',
    asciiArt: String.raw`
__________                       .__         _________                      __                
\______   \____   ____    ____   |__| ____   \_   ___ \_____ _______  _____/  |_  ____  ____  
 |     ___/  _ \ /    \  / ___\  |  |/    \  /    \  \\__  \\_  __ \/  _ \   __\/ __ \/  _ \ 
 |    |  (  <_> )   |  \/ /_/  > |  |   |  \ \     \____/ __ \|  | \(  <_> )  | \  ___(  <_> )
 |____|   \____/|___|  /\___  /  |__|___|  /  \______  (____  /__|   \____/|__|  \___  >____/ 
                     \//_____/           \/          \/                  \/       \/       \/ 
    `,
    imageUrl: '/images/project5.webp',
  },
};

const PROJECTS_EN: Project[] = PROJECT_TEXTS_EN.map((projectText) => ({
  ...projectText,
  externalUrl: PROJECT_MEDIA[projectText.id]?.externalUrl ?? '',
  asciiArt: PROJECT_MEDIA[projectText.id]?.asciiArt ?? '',
  imageUrl: PROJECT_MEDIA[projectText.id]?.imageUrl ?? '',
}));

const PROJECTS_ES: Project[] = PROJECT_TEXTS_ES.map((projectText) => ({
  ...projectText,
  externalUrl: PROJECT_MEDIA[projectText.id]?.externalUrl ?? '',
  asciiArt: PROJECT_MEDIA[projectText.id]?.asciiArt ?? '',
  imageUrl: PROJECT_MEDIA[projectText.id]?.imageUrl ?? '',
}));

const SKILL_MEDIA: Record<string, string> = {
  'skill-1': String.raw`
 ____ ___      .__  __          
|    |   \____ |__|/  |_ ___.__.
|    |   /    \|  \   __<   |  |
|    |  /   |  \  ||  |  \___  |
|______/|___|  /__||__|  / ____|
             \/          \/     
    `,
  'skill-2': String.raw`
___________    .__  .__            __                 __    
\_   _____/_ __|  | |  |   _______/  |______    ____ |  | __
 |    __)|  |  \  | |  |  /  ___/\   __\__  \ _/ ___\|  |/ /
 |     \ |  |  /  |_|  |__\___ \  |  |  / __ \\  \___|    < 
 \___  / |____/|____/____/____  > |__| (____  /\___  >__|_ \
     \/                       \/            \/     \/     \/
    `,
  'skill-3': String.raw`
________      _____       _____          __                         __  .__               
\_____  \    /  _  \     /  _  \  __ ___/  |_  ____   _____ _____ _/  |_|__| ____   ____  
 /  / \  \  /  /_\  \   /  /_\  \|  |  \   __\/  _ \ /     \\__  \\   __\  |/  _ \ /    \ 
/   \_/.  \/    |    \ /    |    \  |  /|  | (  <_> )  Y Y  \/ __ \|  | |  (  <_> )   |  \
\_____\ \_/\____|__  / \____|__  /____/ |__|  \____/|__|_|  (____  /__| |__|\____/|___|  /
       \__>        \/          \/                         \/                    \/ 
    `,
  'skill-4': String.raw`
___________                     __                     .___
\_   _____/______  ____   _____/  |_  ____   ____    __| _/
 |    __) \_  __ \/  _ \ /    \   __\/ __ \ /    \  / __ | 
 |     \   |  | \(  <_> )   |  \  | \  ___/|   |  \/ /_/ | 
 \___  /   |__|   \____/|___|  /__|  \___  >___|  /\____ | 
     \/                      \/          \/     \/      \/ 
    `,
  'skill-5': String.raw`
      10101010
    `,
};

const SKILLS_EN: Skill[] = SKILL_TEXTS_EN.map((skillText) => ({
  ...skillText,
  asciiIcon: SKILL_MEDIA[skillText.id] ?? '',
}));

const SKILLS_ES: Skill[] = SKILL_TEXTS_ES.map((skillText) => ({
  ...skillText,
  asciiIcon: SKILL_MEDIA[skillText.id] ?? '',
}));

const EXPERIENCE_MEDIA: Record<string, string> = {
  'exp-1': String.raw`
.______________    _________  
|   \__    ___/___ \_   ___ \ 
|   | |    |_/ __ \/    \  \/ 
|   | |    |\  ___/\     \____
|___| |____| \___  >\______  /
                 \/        \/ 
    `,
  'exp-2': String.raw`
  ________             ___.   .__  .__           _________ __            .___.__        
 /  _____/  ____   ____\_ |__ |  | |__| ____    /   _____//  |_ __ __  __| _/|__| ____  
/   \  ___ /  _ \ /  _ \| __ \|  | |  |/    \   \_____  \\\   __\  |  \/ __ | |  |/  _ \ 
\    \_\  (  <_> |  <_> ) \_\ \  |_|  |   |  \ \     \____/ __ \|  | |  |  / /_/ | |  (  <_> )
 \______  /\____/ \____/|___  /____/__|___|  / /_______  /|__| |____/\____ | |__|\____/ 
        \/                  \/             \/          \/                 \/            
    `,
  'exp-3': String.raw`
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
    `,
};

const EXPERIENCE_EN: Experience[] = EXPERIENCE_TEXTS_EN.map((item) => ({
  ...item,
  asciiBadge: EXPERIENCE_MEDIA[item.id] ?? '',
}));

const EXPERIENCE_ES: Experience[] = EXPERIENCE_TEXTS_ES.map((item) => ({
  ...item,
  asciiBadge: EXPERIENCE_MEDIA[item.id] ?? '',
}));

export const PORTFOLIO_DATA_BY_LANGUAGE = {
  EN: {
    ABOUT_DATA: ABOUT_DATA_EN,
    ABOUT_SECTION_TEXT: ABOUT_SECTION_TEXT_EN,
    ARIA_TEXT: ARIA_TEXT_EN,
    CONTACT_API_TEXT: CONTACT_API_TEXT_EN,
    CONTACT_SECTION_TEXT: CONTACT_SECTION_TEXT_EN,
    COOKIE_TEXT: COOKIE_TEXT_EN,
    EXPERIENCE_SECTION_TEXT: EXPERIENCE_SECTION_TEXT_EN,
    EXPERIENCE_TEXTS: EXPERIENCE_TEXTS_EN,
    FOOTER_TEXT: FOOTER_TEXT_EN,
    HEADER_TEXT: HEADER_TEXT_EN,
    LANDING_TEXT: LANDING_TEXT_EN,
    NAV_ITEMS: NAV_ITEMS_EN,
    PROJECT_TEXTS: PROJECT_TEXTS_EN,
    PROJECT_SECTION_TEXT: PROJECT_SECTION_TEXT_EN,
    PORTRAIT_TEXT: PORTRAIT_TEXT_EN,
    SKILL_SECTION_TEXT: SKILL_SECTION_TEXT_EN,
    SKILL_TEXTS: SKILL_TEXTS_EN,
    STAT_GRID_TEXT: STAT_GRID_TEXT_EN,
    TOWER_TEXT: TOWER_TEXT_EN,
    MESSAGE_TEXT: MESSAGE_TEXT_EN,
    PROJECTS: PROJECTS_EN,
    SKILLS: SKILLS_EN,
    EXPERIENCE: EXPERIENCE_EN,
  },
  ES: {
    ABOUT_DATA: ABOUT_DATA_ES,
    ABOUT_SECTION_TEXT: ABOUT_SECTION_TEXT_ES,
    ARIA_TEXT: ARIA_TEXT_ES,
    CONTACT_API_TEXT: CONTACT_API_TEXT_ES,
    CONTACT_SECTION_TEXT: CONTACT_SECTION_TEXT_ES,
    COOKIE_TEXT: COOKIE_TEXT_ES,
    EXPERIENCE_SECTION_TEXT: EXPERIENCE_SECTION_TEXT_ES,
    EXPERIENCE_TEXTS: EXPERIENCE_TEXTS_ES,
    FOOTER_TEXT: FOOTER_TEXT_ES,
    HEADER_TEXT: HEADER_TEXT_ES,
    LANDING_TEXT: LANDING_TEXT_ES,
    NAV_ITEMS: NAV_ITEMS_ES,
    PROJECT_TEXTS: PROJECT_TEXTS_ES,
    PROJECT_SECTION_TEXT: PROJECT_SECTION_TEXT_ES,
    PORTRAIT_TEXT: PORTRAIT_TEXT_ES,
    SKILL_SECTION_TEXT: SKILL_SECTION_TEXT_ES,
    SKILL_TEXTS: SKILL_TEXTS_ES,
    STAT_GRID_TEXT: STAT_GRID_TEXT_ES,
    TOWER_TEXT: TOWER_TEXT_ES,
    MESSAGE_TEXT: MESSAGE_TEXT_ES,
    PROJECTS: PROJECTS_ES,
    SKILLS: SKILLS_ES,
    EXPERIENCE: EXPERIENCE_ES,
  },
} as const;

export type PortfolioLanguageData = typeof PORTFOLIO_DATA_BY_LANGUAGE[Language];
