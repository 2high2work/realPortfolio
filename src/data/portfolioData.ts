import {
  ABOUT_DATA as ABOUT_DATA_EN,
  ABOUT_SECTION_TEXT as ABOUT_SECTION_TEXT_EN,
  ARIA_TEXT as ARIA_TEXT_EN,
  CONTACT_API_TEXT as CONTACT_API_TEXT_EN,
  CONTACT_SECTION_TEXT as CONTACT_SECTION_TEXT_EN,
  FOOTER_TEXT as FOOTER_TEXT_EN,
  HEADER_TEXT as HEADER_TEXT_EN,
  LANDING_TEXT as LANDING_TEXT_EN,
  NAV_ITEMS as NAV_ITEMS_EN,
  PROJECT_TEXTS as PROJECT_TEXTS_EN,
  PROJECT_SECTION_TEXT as PROJECT_SECTION_TEXT_EN,
  PORTRAIT_TEXT as PORTRAIT_TEXT_EN,
  TOWER_TEXT as TOWER_TEXT_EN,
} from './portfolioDataEN.js';
import {
  ABOUT_DATA as ABOUT_DATA_ES,
  ABOUT_SECTION_TEXT as ABOUT_SECTION_TEXT_ES,
  ARIA_TEXT as ARIA_TEXT_ES,
  CONTACT_API_TEXT as CONTACT_API_TEXT_ES,
  CONTACT_SECTION_TEXT as CONTACT_SECTION_TEXT_ES,
  FOOTER_TEXT as FOOTER_TEXT_ES,
  HEADER_TEXT as HEADER_TEXT_ES,
  LANDING_TEXT as LANDING_TEXT_ES,
  NAV_ITEMS as NAV_ITEMS_ES,
  PROJECT_TEXTS as PROJECT_TEXTS_ES,
  PROJECT_SECTION_TEXT as PROJECT_SECTION_TEXT_ES,
  PORTRAIT_TEXT as PORTRAIT_TEXT_ES,
  TOWER_TEXT as TOWER_TEXT_ES,
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
  placeholderText: string;
  imageUrl: string;
}

export type Language = 'EN' | 'ES';
export const DEFAULT_LANGUAGE: Language = 'EN';
export const LANGUAGE_STORAGE_KEY = 'preferredLanguage';

const PROJECT_MEDIA: Record<string, { externalUrl: string; imageUrl: string }> = {
  'proj-1': {
    externalUrl: 'https://store.steampowered.com/app/2393490/Night_of_Wolves/',
    imageUrl: '/images/project1.webp',
  },
  'proj-2': {
    externalUrl: 'http://gooblinstudio.com',
    imageUrl: '/images/project2.webp',
  },
  'proj-5': {
    externalUrl: 'https://2high2work.itch.io/pong-in-caroteo',
    imageUrl: '/images/project5.webp',
  },
};

const PROJECTS_EN: Project[] = PROJECT_TEXTS_EN.map((projectText) => ({
  ...projectText,
  externalUrl: PROJECT_MEDIA[projectText.id]?.externalUrl ?? '',
  imageUrl: PROJECT_MEDIA[projectText.id]?.imageUrl ?? '',
}));

const PROJECTS_ES: Project[] = PROJECT_TEXTS_ES.map((projectText) => ({
  ...projectText,
  externalUrl: PROJECT_MEDIA[projectText.id]?.externalUrl ?? '',
  imageUrl: PROJECT_MEDIA[projectText.id]?.imageUrl ?? '',
}));

export const PORTFOLIO_DATA_BY_LANGUAGE = {
  EN: {
    ABOUT_DATA: ABOUT_DATA_EN,
    ABOUT_SECTION_TEXT: ABOUT_SECTION_TEXT_EN,
    ARIA_TEXT: ARIA_TEXT_EN,
    CONTACT_API_TEXT: CONTACT_API_TEXT_EN,
    CONTACT_SECTION_TEXT: CONTACT_SECTION_TEXT_EN,
    FOOTER_TEXT: FOOTER_TEXT_EN,
    HEADER_TEXT: HEADER_TEXT_EN,
    LANDING_TEXT: LANDING_TEXT_EN,
    NAV_ITEMS: NAV_ITEMS_EN,
    PROJECT_TEXTS: PROJECT_TEXTS_EN,
    PROJECT_SECTION_TEXT: PROJECT_SECTION_TEXT_EN,
    PORTRAIT_TEXT: PORTRAIT_TEXT_EN,
    TOWER_TEXT: TOWER_TEXT_EN,
    PROJECTS: PROJECTS_EN,
  },
  ES: {
    ABOUT_DATA: ABOUT_DATA_ES,
    ABOUT_SECTION_TEXT: ABOUT_SECTION_TEXT_ES,
    ARIA_TEXT: ARIA_TEXT_ES,
    CONTACT_API_TEXT: CONTACT_API_TEXT_ES,
    CONTACT_SECTION_TEXT: CONTACT_SECTION_TEXT_ES,
    FOOTER_TEXT: FOOTER_TEXT_ES,
    HEADER_TEXT: HEADER_TEXT_ES,
    LANDING_TEXT: LANDING_TEXT_ES,
    NAV_ITEMS: NAV_ITEMS_ES,
    PROJECT_TEXTS: PROJECT_TEXTS_ES,
    PROJECT_SECTION_TEXT: PROJECT_SECTION_TEXT_ES,
    PORTRAIT_TEXT: PORTRAIT_TEXT_ES,
    TOWER_TEXT: TOWER_TEXT_ES,
    PROJECTS: PROJECTS_ES,
  },
} as const;

export type PortfolioLanguageData = typeof PORTFOLIO_DATA_BY_LANGUAGE[Language];
