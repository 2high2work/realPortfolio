import React, { useState, useEffect } from 'react';
import {
  Project,
  PORTFOLIO_DATA_BY_LANGUAGE,
  Language,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
} from './data/portfolioData';
import { PortraitOutline } from './components/PortraitOutline';
import { VantaBackground } from './components/VantaBackground';
import {
  ExternalLink,
  ArrowLeft,
  Home,
  FileText,
  User as UserIcon,
  Mail,
  ChevronRight,
  Menu,
  X,
  Code2,
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

type Tab = 'LANDING' | 'PROJECTS' | 'ABOUT' | 'CONTACT' | 'TOWER';

const VALID_TABS: Tab[] = ['LANDING', 'PROJECTS', 'ABOUT', 'CONTACT', 'TOWER'];

const parseRouteHash = (): { tab: Tab; detailId: string | null } => {
  if (typeof window === 'undefined') {
    return { tab: 'LANDING', detailId: null };
  }

  const rawHash = window.location.hash.replace('#', '').trim();
  if (!rawHash) {
    return { tab: 'LANDING', detailId: null };
  }

  const [tabPart, detailPart] = rawHash.split('/');
  const tab = tabPart?.toUpperCase() as Tab | undefined;

  if (!tab || !VALID_TABS.includes(tab)) {
    return { tab: 'LANDING', detailId: null };
  }

  return {
    tab,
    detailId: detailPart?.trim() || null,
  };
};

const getInitialTab = (): Tab => {
  return parseRouteHash().tab;
};

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(getInitialTab);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [contactError, setContactError] = useState<string | null>(null);

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    if (savedLanguage === 'EN' || savedLanguage === 'ES') {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
  };

  const languageData = PORTFOLIO_DATA_BY_LANGUAGE[language];
  const {
    ABOUT_DATA,
    ABOUT_SECTION_TEXT,
    HEADER_TEXT,
    NAV_ITEMS,
    LANDING_TEXT,
    PROJECT_SECTION_TEXT,
    ARIA_TEXT,
    CONTACT_SECTION_TEXT,
    FOOTER_TEXT,
    PORTRAIT_TEXT,
    TOWER_TEXT,
    PROJECTS,
  } = languageData;

  const findProjectById = (id: string | null) => {
    if (!id) return null;
    return PROJECTS.find((project) => project.id === id) ?? null;
  };

  useEffect(() => {
    if (selectedProject) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [selectedProject]);

  // Listen for hash changes
  useEffect(() => {
    const syncRouteState = () => {
      const { tab, detailId } = parseRouteHash();
      setActiveTab(tab);

      if (tab === 'PROJECTS') {
        setSelectedProject(findProjectById(detailId));
      } else {
        setSelectedProject(null);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    syncRouteState();
    window.addEventListener('hashchange', syncRouteState);
    return () => window.removeEventListener('hashchange', syncRouteState);
  }, [PROJECTS]);

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus('sending');
    setContactError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
          language,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody?.message || CONTACT_SECTION_TEXT.submitFailed);
      }

      setContactStatus('success');
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    } catch (error) {
      console.error('Contact submit failed', error);
      setContactError(error instanceof Error ? error.message : CONTACT_SECTION_TEXT.unknownError);
      setContactStatus('error');
    }
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSelectedProject(null);
    window.location.hash = tab.toLowerCase();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectSelect = (project: Project) => {
    setActiveTab('PROJECTS');
    setSelectedProject(project);
    window.location.hash = `projects/${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectBack = () => {
    setSelectedProject(null);
    window.location.hash = 'projects';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent text-white font-mono flex flex-col selection:bg-white selection:text-black">
      <VantaBackground />

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:p-2 focus:z-50 font-bold"
      >
        {HEADER_TEXT.skipToMain}
      </a>

      {/* Clean Top Header Banner */}
      <header className="border-b-2 border-white px-4 py-5 sm:py-6 bg-black/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <button
                  type="button"
                  onClick={() => handleTabChange('LANDING')}
                  aria-label={HEADER_TEXT.skipToMain}
                  className="text-left text-2xl sm:text-4xl font-extrabold tracking-tighter uppercase leading-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white transition-opacity hover:opacity-90"
                >
                  {HEADER_TEXT.siteName}
                </button>
                <p className="text-xs sm:text-sm tracking-widest text-zinc-400 mt-1.5 font-bold">
                  {HEADER_TEXT.siteSubtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="inline-flex items-center rounded border border-white bg-black/80 p-0.5 text-xs uppercase text-white font-bold">
                <button
                  type="button"
                  onClick={() => handleLanguageChange('EN')}
                  aria-pressed={language === 'EN'}
                  className={`px-2.5 py-1 transition-colors cursor-pointer ${
                    language === 'EN' ? 'bg-white text-black font-extrabold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <span className="text-zinc-600">/</span>
                <button
                  type="button"
                  onClick={() => handleLanguageChange('ES')}
                  aria-pressed={language === 'ES'}
                  className={`px-2.5 py-1 transition-colors cursor-pointer ${
                    language === 'ES' ? 'bg-white text-black font-extrabold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  ES
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                className="sm:hidden inline-flex items-center justify-center border border-white bg-black px-3 py-2 text-sm font-bold text-white transition hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-white"
              >
                {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
                <span className="sr-only">
                  {mobileMenuOpen ? HEADER_TEXT.closeNavigationMenu : HEADER_TEXT.openNavigationMenu}
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav
            className="hidden sm:flex flex-wrap gap-2 sm:gap-3 border-t border-zinc-800 pt-3"
            aria-label={HEADER_TEXT.mainNavigationLabel}
          >
            {NAV_ITEMS.map((item) => {
              const iconMap = {
                LANDING: Home,
                PROJECTS: FileText,
                ABOUT: UserIcon,
                CONTACT: Mail,
                TOWER: Code2,
              } as const;
              const Icon = iconMap[item.id] || FileText;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  aria-label={ARIA_TEXT.navButton(item.label)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2 border border-white text-xs sm:text-sm font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white ${
                    isActive
                      ? 'bg-white text-black font-extrabold -translate-y-0.5 shadow-[2px_2px_0px_rgba(255,255,255,0.4)]'
                      : 'bg-black text-white hover:bg-zinc-900'
                  }`}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div id="mobile-navigation" className="mt-2 flex flex-col gap-2 sm:hidden border-t border-zinc-800 pt-3">
              {NAV_ITEMS.map((item) => {
                const iconMap = {
                  LANDING: Home,
                  PROJECTS: FileText,
                  ABOUT: UserIcon,
                  CONTACT: Mail,
                  TOWER: Code2,
                } as const;
                const Icon = iconMap[item.id] || FileText;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleTabChange(item.id);
                      setMobileMenuOpen(false);
                    }}
                    aria-label={ARIA_TEXT.navButton(item.label)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full text-left px-4 py-3 border border-white text-sm font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white ${
                      isActive
                        ? 'bg-white text-black font-extrabold shadow-[2px_2px_0px_rgba(255,255,255,0.4)]'
                        : 'bg-black text-white hover:bg-zinc-900'
                    }`}
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* ==================== 1. LANDING PAGE ==================== */}
        {activeTab === 'LANDING' && (
          <section className="space-y-8 animate-fade-in" aria-labelledby="landing-heading">
            <h2 id="landing-heading" className="sr-only">
              {LANDING_TEXT.landingAria}
            </h2>

            {/* Clean Hero Presentation */}
            <div className="border-2 border-white p-6 sm:p-10 bg-black/90 backdrop-blur-md text-white shadow-2xl">
              <div className="space-y-5 max-w-4xl">
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  {LANDING_TEXT.welcome}
                </h3>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-mono">
                  {LANDING_TEXT.overview}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed border-l-2 border-white/60 pl-4 py-1">
                  {LANDING_TEXT.note}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-8 border-t border-zinc-800 mt-8">
                <button
                  onClick={() => handleTabChange('PROJECTS')}
                  className="bg-white text-black font-extrabold px-6 py-3 text-xs tracking-widest hover:bg-zinc-200 transition-colors flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white shadow-md"
                >
                  <span>{LANDING_TEXT.exploreProjects}</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => handleTabChange('CONTACT')}
                  className="border-2 border-white text-white font-extrabold px-6 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span>{LANDING_TEXT.getInTouch}</span>
                </button>
              </div>
            </div>

            {/* About This Site & Portrait Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 border-2 border-white p-6 sm:p-8 space-y-6 bg-black/90 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                  <Code2 size={20} className="text-white" />
                  <h3 className="font-extrabold text-base sm:text-lg tracking-widest uppercase">
                    {LANDING_TEXT.aboutThisSiteTitle}
                  </h3>
                </div>
                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                  {LANDING_TEXT.aboutThisSiteDescription}
                </p>

                <div className="border border-white/40 bg-zinc-950 p-4 space-y-1.5">
                  <p className="font-extrabold text-xs uppercase tracking-widest text-zinc-400">
                    {LANDING_TEXT.navigationTitle}
                  </p>
                  <p className="text-sm text-zinc-200 font-bold">
                    {LANDING_TEXT.navigationHint}
                  </p>
                </div>
              </div>

              {/* Founder Portrait */}
              <div>
                <PortraitOutline
                  label={LANDING_TEXT.founderLabel}
                  height="min-h-[320px]"
                  imageUrl="/images/founder.webp"
                  text={PORTRAIT_TEXT}
                />
              </div>
            </div>
          </section>
        )}

        {/* ==================== 2. PROJECTS PAGE ==================== */}
        {activeTab === 'PROJECTS' && (
          <section className="animate-fade-in" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">
              {PROJECT_SECTION_TEXT.headingAria}
            </h2>

            {selectedProject ? (
              // Project Detail View
              <article className="space-y-8 border-2 border-white p-6 sm:p-10 bg-black/90 backdrop-blur-md shadow-2xl">
                {/* Back button and Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                  <button
                    onClick={handleProjectBack}
                    aria-label={ARIA_TEXT.projectListBack}
                    className="bg-white text-black px-4 py-2 font-bold text-xs tracking-widest flex items-center gap-2 hover:bg-zinc-200 transition-colors self-start cursor-pointer focus:outline-none focus:ring-2 focus:ring-white shadow-md"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    <span>{PROJECT_SECTION_TEXT.detailBackButton}</span>
                  </button>

                  <a
                    href={selectedProject.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ARIA_TEXT.projectDetailExternalLink(selectedProject.title)}
                    className="bg-white text-black px-4 py-2 font-extrabold text-xs tracking-widest flex items-center gap-2 hover:bg-zinc-200 transition-colors self-start sm:self-center border border-white"
                  >
                    <span>{PROJECT_SECTION_TEXT.openProjectWebPage}</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tighter">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-zinc-300 border-l-2 border-white pl-3 py-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Screenshot Frame */}
                <div className="border-2 border-white p-4 sm:p-6 bg-zinc-950 text-center">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.placeholderText}
                    className="mx-auto max-h-96 max-w-full object-contain rounded-sm"
                  />
                </div>

                {/* Description */}
                <div className="space-y-4 text-sm sm:text-base leading-relaxed border-t border-zinc-800 pt-6">
                  <h4 className="font-extrabold text-xs tracking-widest text-zinc-400 uppercase">
                    {PROJECT_SECTION_TEXT.systemOverviewHeading}
                  </h4>
                  <p className="text-zinc-200 leading-relaxed font-mono">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Metrics & Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white pt-6">
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-xs tracking-widest text-zinc-400 uppercase">
                      {PROJECT_SECTION_TEXT.skillsHeading}
                    </h4>
                    <ul className="space-y-2.5" aria-label={PROJECT_SECTION_TEXT.performanceMetricsAriaLabel}>
                      {selectedProject.metrics.map((m, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs font-bold">
                          <span className="text-white font-extrabold">[+]</span>
                          <span className="bg-white text-black px-2.5 py-1">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-extrabold text-xs tracking-widest text-zinc-400 uppercase">
                      {PROJECT_SECTION_TEXT.techStackHeading}
                    </h4>
                    <div className="flex flex-wrap gap-2" aria-label={PROJECT_SECTION_TEXT.technologiesUsedAriaLabel}>
                      {selectedProject.techStack.map((tech, index) => (
                        <span key={index} className="border border-white px-3 py-1 text-xs font-bold bg-black text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ) : (
              // Projects List View
              <div className="space-y-8 border-2 border-white p-6 sm:p-10 bg-black/90 backdrop-blur-md text-white shadow-2xl">
                <div className="border-b border-zinc-800 pb-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
                    {PROJECT_SECTION_TEXT.projectListTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {PROJECT_SECTION_TEXT.projectListDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PROJECTS.map((proj) => (
                    <div
                      key={proj.id}
                      className="border-2 border-white p-5 bg-black flex flex-col justify-between hover:border-zinc-300 transition-all group cursor-pointer shadow-lg hover:-translate-y-1"
                      onClick={() => handleProjectSelect(proj)}
                      role="article"
                      aria-labelledby={`proj-title-${proj.id}`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-3 border-b border-zinc-800 pb-3">
                          <div className="space-y-1">
                            <h4
                              id={`proj-title-${proj.id}`}
                              className="text-lg font-extrabold tracking-tight group-hover:underline"
                            >
                              {proj.title}
                            </h4>
                            <p className="text-xs text-zinc-400 font-bold">{proj.subtitle}</p>
                          </div>
                          <span className="text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase tracking-widest shrink-0">
                            {PROJECT_SECTION_TEXT.viewDetailBadge}
                          </span>
                        </div>

                        {/* Image preview */}
                        <div className="border border-zinc-700 overflow-hidden bg-zinc-950">
                          <div className="relative h-40 w-full overflow-hidden">
                            <img
                              src={proj.imageUrl}
                              alt={proj.placeholderText}
                              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>

                        <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                          {proj.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-bold">
                        <div className="flex flex-wrap gap-1.5">
                          {proj.techStack.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="border border-zinc-700 px-1.5 py-0.5 text-[10px] text-zinc-300">
                              {t}
                            </span>
                          ))}
                          {proj.techStack.length > 3 && (
                            <span className="text-[10px] text-zinc-500">+{proj.techStack.length - 3}</span>
                          )}
                        </div>
                        <span className="text-white group-hover:translate-x-1 transition-transform font-bold inline-flex items-center gap-1">
                          <span>{PROJECT_SECTION_TEXT.openPage}</span>
                          <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ==================== 3. ABOUT PAGE ==================== */}
        {activeTab === 'ABOUT' && (
          <section className="animate-fade-in space-y-8" aria-labelledby="about-heading">
            <h2 id="about-heading" className="sr-only">
              {ABOUT_SECTION_TEXT.headingAria}
            </h2>

            {/* Header section */}
            <div className="border-2 border-white p-6 sm:p-8 bg-black/90 backdrop-blur-md text-white shadow-xl space-y-2">
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {ABOUT_DATA.header}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-bold">
                // {ABOUT_DATA.tagline}
              </p>
            </div>

            {/* Split layout: Bio + Portrait */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-2 border-white p-6 sm:p-8 bg-black/90 backdrop-blur-md text-white shadow-xl">
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-200 font-mono">
                  {ABOUT_DATA.bioParagraphs.map((para, index) => (
                    <p key={index} className="border-l-2 border-zinc-600 pl-4 py-1">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Core Tenets */}
                <div className="border-2 border-white p-6 bg-black space-y-4 mt-8">
                  <h4 className="font-extrabold text-xs tracking-widest text-white uppercase border-b border-zinc-800 pb-2">
                    {ABOUT_SECTION_TEXT.philosophyHeading}
                  </h4>
                  <ul className="space-y-3" aria-label={ABOUT_SECTION_TEXT.philosophyAriaLabel}>
                    {ABOUT_DATA.philosophy.map((tenet, idx) => (
                      <li key={idx} className="text-xs sm:text-sm font-bold text-zinc-200 flex items-start gap-2">
                        <span className="text-white font-extrabold">&gt;</span>
                        <span>{tenet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Portrait */}
              <div>
                <PortraitOutline
                  label={ABOUT_SECTION_TEXT.vectorPortraitLabel}
                  height="min-h-[340px]"
                  aspectRatio="aspect-[3/4]"
                  imageUrl="/images/portrait1.webp"
                  text={PORTRAIT_TEXT}
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="border-2 border-white p-6 bg-black/90 backdrop-blur-md shadow-xl">
              <h4 className="font-extrabold text-xs tracking-widest text-zinc-400 uppercase mb-4">
                {ABOUT_SECTION_TEXT.telemetryHeading}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ABOUT_DATA.stats.map((stat, idx) => (
                  <div key={idx} className="border border-white p-4 text-center bg-black">
                    <div className="text-sm sm:text-base font-extrabold text-white tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== 4. CONTACT PAGE ==================== */}
        {activeTab === 'CONTACT' && (
          <section className="animate-fade-in space-y-8" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="sr-only">
              {CONTACT_SECTION_TEXT.headingAria}
            </h2>

            <div className="border-2 border-white p-6 sm:p-8 bg-black/90 backdrop-blur-md text-white shadow-xl space-y-2">
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {CONTACT_SECTION_TEXT.contactTitle}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-bold">
                {CONTACT_SECTION_TEXT.contactSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Contact Form */}
              <div className="border-2 border-white p-6 sm:p-8 bg-black/90 backdrop-blur-md space-y-6 shadow-xl">
                <div className="border-b border-zinc-800 pb-3">
                  <span className="font-extrabold text-xs tracking-widest text-white uppercase">
                    {CONTACT_SECTION_TEXT.formSectionTitle}
                  </span>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-xs font-bold text-zinc-300">
                      {CONTACT_SECTION_TEXT.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(event) => setContactName(event.target.value)}
                      disabled={contactStatus === 'sending'}
                      placeholder={CONTACT_SECTION_TEXT.namePlaceholder}
                      className="w-full bg-black text-white border border-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white font-mono disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="block text-xs font-bold text-zinc-300">
                      {CONTACT_SECTION_TEXT.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(event) => setContactEmail(event.target.value)}
                      disabled={contactStatus === 'sending'}
                      placeholder={CONTACT_SECTION_TEXT.emailPlaceholder}
                      className="w-full bg-black text-white border border-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white font-mono disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="block text-xs font-bold text-zinc-300">
                      {CONTACT_SECTION_TEXT.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={contactMessage}
                      onChange={(event) => setContactMessage(event.target.value)}
                      disabled={contactStatus === 'sending'}
                      placeholder={CONTACT_SECTION_TEXT.messagePlaceholder}
                      className="w-full bg-black text-white border border-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white font-mono resize-none disabled:opacity-50"
                    />
                  </div>

                  {contactStatus === 'success' && (
                    <div className="rounded border border-emerald-500 bg-emerald-950/40 p-3 text-emerald-200 text-xs font-bold">
                      {CONTACT_SECTION_TEXT.successMessage}
                    </div>
                  )}

                  {contactStatus === 'error' && contactError && (
                    <div className="rounded border border-rose-500 bg-rose-950/40 p-3 text-rose-200 text-xs font-bold">
                      {CONTACT_SECTION_TEXT.errorPrefix} {contactError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactStatus === 'sending'}
                    className="w-full bg-white text-black font-extrabold py-3 text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {contactStatus === 'sending'
                      ? CONTACT_SECTION_TEXT.transmittingMessage
                      : CONTACT_SECTION_TEXT.transmitPayload}
                  </button>
                </form>
              </div>

              {/* Direct Channels */}
              <div className="space-y-6">
                <div className="border-2 border-white p-6 bg-black/90 backdrop-blur-md space-y-6 shadow-xl">
                  <h4 className="font-extrabold text-xs tracking-widest text-white uppercase border-b border-zinc-800 pb-2">
                    {CONTACT_SECTION_TEXT.directChannelsTitle}
                  </h4>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <span className="text-zinc-400 font-bold">{CONTACT_SECTION_TEXT.directEmailLabel}</span>
                      <a
                        href="mailto:info.2high2work@gmail.com"
                        className="font-extrabold text-white underline hover:text-zinc-300"
                      >
                        info.2high2work@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between pb-1">
                      <span className="text-zinc-400 font-bold">{CONTACT_SECTION_TEXT.githubLabel}</span>
                      <a
                        href="https://github.com/2high2work"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-extrabold text-white underline hover:text-zinc-300 flex items-center gap-1.5"
                      >
                        <span>github.com/2high2work</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <PortraitOutline
                    label={CONTACT_SECTION_TEXT.contactPortraitLabel}
                    height="min-h-[240px]"
                    imageUrl="/images/portrait2.webp"
                    text={PORTRAIT_TEXT}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== 5. SECRET TOWER PAGE ==================== */}
        {activeTab === 'TOWER' && (
          <section className="animate-fade-in min-h-[50vh] border-2 border-white p-8 bg-black/90 backdrop-blur-md text-white flex items-center justify-center">
            <div className="text-center space-y-4">
              <p className="text-xs uppercase text-zinc-400 tracking-widest">{TOWER_TEXT.accessGranted}</p>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{TOWER_TEXT.title}</h2>
              <p className="text-sm text-zinc-400">{TOWER_TEXT.description}</p>
            </div>
          </section>
        )}
      </main>

      {/* Clean Footer Area */}
      <footer className="border-t-2 border-white mt-16 p-6 bg-black text-xs text-zinc-400" aria-label={FOOTER_TEXT.ariaLabel}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-extrabold text-white tracking-widest">{FOOTER_TEXT.title}</p>
            <p className="mt-1">{FOOTER_TEXT.credit}</p>
          </div>
        </div>
      </footer>

      <Analytics />
    </div>
  );
};

export default App;
