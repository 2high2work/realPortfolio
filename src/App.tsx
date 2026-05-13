import React, { useState, useEffect } from 'react';
import { 
  PROJECTS, 
  SKILLS, 
  EXPERIENCE, 
  ABOUT_DATA,
  Project,
  Skill,
  Experience 
} from './data/portfolioData';
import { FakeAiChat } from './components/FakeAiChat';
import { PortraitOutline } from './components/PortraitOutline';
import { 
  ExternalLink, 
  ArrowLeft, 
  Terminal, 
  FileText, 
  Cpu, 
  Briefcase, 
  User as UserIcon, 
  Mail, 
  ChevronRight,
  Code2
} from 'lucide-react';

type Tab = 'LANDING' | 'PROJECTS' | 'SKILLS' | 'EXPERIENCE' | 'ABOUT' | 'CONTACT';
type CookieConsent = 'accepted' | 'rejected' | null;

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('LANDING');

  // State for designated detail pages
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  // Cookie consent state
  const [cookieConsent, setCookieConsent] = useState<CookieConsent>(null);
  const [showCookieDialog, setShowCookieDialog] = useState(false);

  // Load cookie consent from localStorage on mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent') as CookieConsent;
    if (savedConsent) {
      setCookieConsent(savedConsent);
    } else {
      setShowCookieDialog(true);
    }
  }, []);

  // Load initial tab from URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toUpperCase();
    if (['LANDING', 'PROJECTS', 'SKILLS', 'EXPERIENCE', 'ABOUT', 'CONTACT'].includes(hash)) {
      setActiveTab(hash as Tab);
    }
  }, []);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toUpperCase();
      if (['LANDING', 'PROJECTS', 'SKILLS', 'EXPERIENCE', 'ABOUT', 'CONTACT'].includes(hash)) {
        setActiveTab(hash as Tab);
        setSelectedProject(null);
        setSelectedSkill(null);
        setSelectedExperience(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle cookie consent
  const handleCookieAccept = () => {
    setCookieConsent('accepted');
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieDialog(false);
  };

  const handleCookieReject = () => {
    setCookieConsent('rejected');
    localStorage.setItem('cookieConsent', 'rejected');
    setShowCookieDialog(false);
  };

  // Helper to switch tabs and reset selected detail views
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSelectedProject(null);
    setSelectedSkill(null);
    setSelectedExperience(null);
    window.location.hash = tab.toLowerCase();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="theme-highlight-root min-h-screen bg-black text-white font-mono flex flex-col selection:bg-white selection:text-black">
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:p-2 focus:z-50 font-bold"
      >
        Skip to main content
      </a>

      {/* ASCII Top Header Banner */}
      <header className="border-b-2 border-white px-4 py-6 sm:py-8 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs text-gray-400 mb-1 tracking-widest flex items-center gap-2" aria-hidden="true">
              <span>SYSTEM: 2H2W_OS // v4.2.0</span>
              <span className="hidden sm:inline">| SECURE_BOOT: ENABLED</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter uppercase whitespace-pre-line leading-none">
              2HIGH2WORK
            </h1>
            <p className="text-sm sm:text-base tracking-widest text-gray-300 mt-2 font-bold">
              // JACK OF ALL TRADES, MASTER OF ALL
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white text-black px-3 py-1 text-xs font-bold self-start sm:self-auto shadow-md">
            <span className="inline-block w-2 h-2 bg-black animate-ping" />
            <span>
              {cookieConsent === 'rejected' 
                ? "WE CAN'T STEAL YOUR DATA ANYMORE" 
                : 'PLEASE STAND BY: STEALING YOUR DATA'}
            </span>
          </div>
        </div>

        {/* Top Navigation Menu */}
        <nav 
          className="max-w-6xl mx-auto mt-6 pt-4 border-t border-gray-800"
          aria-label="Main Navigation"
        >
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              { id: 'LANDING', label: '01 // LANDING', icon: Terminal },
              { id: 'PROJECTS', label: '02 // PROJECTS', icon: FileText },
              { id: 'SKILLS', label: '03 // SKILLS', icon: Cpu },
              { id: 'EXPERIENCE', label: '04 // EXPERIENCE', icon: Briefcase },
              { id: 'ABOUT', label: '05 // ABOUT ME', icon: UserIcon },
              { id: 'CONTACT', label: '06 // CONTACT', icon: Mail },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id as Tab)}
                  aria-label={`Navigate to ${item.label.split(' // ')[1]}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 sm:px-4 py-2 border border-white text-xs sm:text-sm font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white ${
                    isActive 
                      ? 'bg-white text-black font-extrabold translate-x-1 sm:translate-x-0 sm:-translate-y-1 shadow-[2px_2px_0px_rgba(255,255,255,0.4)]' 
                      : 'bg-black text-white hover:bg-gray-900'
                  }`}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* ==================== 1. LANDING PAGE ==================== */}
        {activeTab === 'LANDING' && (
          <section className="space-y-8 animate-fade-in" aria-labelledby="landing-heading">
            <h2 id="landing-heading" className="sr-only">Landing Page</h2>
            
            {/* Terminal Hero Banner */}
            <div className="border-2 border-white p-6 sm:p-8 bg-black text-white relative shadow-xl overflow-hidden">
              <div className="absolute top-2 right-2 text-xs text-gray-500 font-bold tracking-widest hidden sm:block">
                [ INIT_MODE: ONLINE ]
              </div>
              
              <div className="text-gray-400 text-xs mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">
                SYSTEM MESSAGE // BROADCAST
              </div>

              {/* ASCII Header Art */}
              <div className="text-xs sm:text-sm font-mono whitespace-pre text-white overflow-x-auto select-none py-2 leading-none font-bold">
                {String.raw`
________  ___ ___ .__       .__     ________  __      __             __    
\_____  \/   |   \|__| ____ |  |__  \_____  \/  \    /  \___________|  | __
 /  ____/    ~    \  |/ ___\|  |  \  /  ____/\   \/\/   /  _ \_  __ \  |/ /
/       \    Y    /  / /_/  >   Y  \/       \ \        (  <_> )  | \/    < 
\_______ \___|_  /|__\___  /|___|  /\_______ \ \__/\  / \____/|__|  |__|_ \
        \/     \/   /_____/      \/         \/      \/                   \/
                `}
              </div>

              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed max-w-4xl border-t border-white pt-6">
                <p className="font-bold text-white tracking-wide">
                  Welcome to <span className="bg-white text-black px-1 py-0.5">2High2Work</span>'s Portfolio.
                </p>
                <p className="text-gray-300">
                  We engineer uncompromising software systems designed to run without failure, garbage collection latency, or modern UI fluff. Pure high-contrast execution.
                </p>
                <p className="text-sm text-gray-400 font-normal">
                  Our architecture guarantees strict responsiveness, absolute WCAG accessibility compliance for screen readers, and zero gradient pollution.
                </p>
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-800 text-xs">
                <div className="border border-white p-3">
                  <span className="text-gray-400 block mb-1">// STATUS</span>
                  <span className="font-extrabold text-white text-sm">ONLINE</span>
                </div>
                <div className="border border-white p-3">
                  <span className="text-gray-400 block mb-1">// DESIGN</span>
                  <span className="font-extrabold text-white text-sm">PURE ASCII</span>
                </div>
                <div className="border border-white p-3">
                  <span className="text-gray-400 block mb-1">// SPEED</span>
                  <span className="font-extrabold text-white text-sm">&lt; 16 MS</span>
                </div>
                <div className="border border-white p-3">
                  <span className="text-gray-400 block mb-1">// ACCESSIBILITY</span>
                  <span className="font-extrabold text-white text-sm">WCAG AAA</span>
                </div>
              </div>
            </div>

            {/* Featured Portrait & Intro Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pt-4">
              <div className="lg:col-span-2 border border-white p-6 space-y-6 bg-black">
                <div className="flex items-center gap-2 border-b border-white pb-3">
                  <Code2 size={20} />
                  <h3 className="font-bold text-lg tracking-widest">// CORE MISSION</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  In an era where websites download megabytes of unnecessary JavaScript to render a simple article, 2High2Work takes the opposite path. We build bare-metal, socket-driven micro-architectures that prioritize absolute utility, privacy, and speed.
                </p>
                
                <div className="bg-white text-black p-4 space-y-2">
                  <p className="font-extrabold text-xs uppercase tracking-widest">// DIRECTIVE</p>
                  <p className="font-bold text-sm">
                    &quot;Use the navigation buttons above to explore our Projects, Technical Skills, Engineering Experience, and Contact Vectors.&quot;
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => handleTabChange('PROJECTS')}
                    className="bg-white text-black font-extrabold px-6 py-3 text-xs tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span>EXPLORE PROJECTS</span>
                    <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={() => handleTabChange('CONTACT')}
                    className="border border-white text-white font-extrabold px-6 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span>INITIALIZE CONTACT</span>
                  </button>
                </div>
              </div>

              {/* Portrait Placeholder Outline */}
              <div className="space-y-2">
                <PortraitOutline 
                  label="FOUNDER // LEAD ARCHITECT" 
                  height="min-h-[340px]" 
                  imageUrl='/images/founder.webp'
                />
              </div>
            </div>

            {/* ASCII System Footer Accent */}
            <div className="border border-white p-4 text-center text-xs tracking-widest text-gray-400">
              +---+ [ SECURE TUNNEL ESTABLISHED // RSA-4096 ] +---+
            </div>
          </section>
        )}

        {/* ==================== 2. PROJECT LIST & DESIGNATED PAGE ==================== */}
        {activeTab === 'PROJECTS' && (
          <section className="animate-fade-in" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">Projects Portfolio</h2>

            {/* If a project is selected, show its designated page */}
            {selectedProject ? (
              <article className="space-y-6 border-2 border-white p-6 sm:p-8 bg-black">
                {/* Back button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white pb-6">
                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Back to Projects List"
                    className="bg-white text-black px-4 py-2 font-bold text-xs tracking-widest flex items-center gap-2 hover:bg-gray-200 transition-colors self-start cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    <span>{'[<-- BACK TO PROJECT LIST]'}</span>
                  </button>

                  <div className="text-xs text-gray-400">
                    PROJECT_ID: {selectedProject.id} // SECURE
                  </div>
                </div>

                {/* Title & External Link */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-4">
                    <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tighter">
                      {selectedProject.title}
                    </h3>
                    <a
                      href={selectedProject.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open external webpage for ${selectedProject.title} in new tab`}
                      className="bg-white text-black px-3 py-1 font-bold text-xs tracking-widest flex items-center gap-2 hover:bg-gray-200 transition-colors self-center border border-white"
                    >
                      <span>OPEN PROJECT WEBPAGE</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-gray-300 border-l-2 border-white pl-3 py-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* ASCII Art Representation (lets center the ASCII) */}
                <div className="bg-black border border-white p-4 font-mono text-xs overflow-x-auto whitespace-pre select-none text-white">
                  <span className="sr-only">ASCII diagram representation of {selectedProject.title}</span>
                  <div className="flex justify-center">
                    {selectedProject.asciiArt}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 text-sm sm:text-base leading-relaxed border-t border-gray-800 pt-6">
                  <h4 className="font-bold text-xs tracking-widest text-gray-400 uppercase">// SYSTEM OVERVIEW</h4>
                  <p className="text-gray-200">{selectedProject.longDescription}</p>
                </div>

                {/* Picture Outline Placeholder */}
                <div className="border border-dashed border-white p-6 bg-black text-center my-6">
                  <div className="font-bold text-xs tracking-widest uppercase mb-2">
                    {selectedProject.placeholderText}
                  </div>
                  <p className="text-xs text-gray-400">
                    [ Outline provided to embed live product screenshot or demo clip ]
                  </p>
                </div>

                {/* Metrics & Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white pt-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-xs tracking-widest text-gray-400 uppercase">// SKILLS</h4>
                    <ul className="space-y-2" aria-label="Performance Metrics">
                      {selectedProject.metrics.map((m, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs font-bold">
                          <span className="text-white font-extrabold">[+]</span>
                          <span className="bg-white text-black px-2 py-0.5">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-xs tracking-widest text-gray-400 uppercase">// TECHNICAL STACK</h4>
                    <div className="flex flex-wrap gap-2" aria-label="Technologies used">
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
              // Project List View
              <div className="space-y-8">
                <div className="border-b border-white pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                    // DEPLOYED PROJECTS
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Click a project card to view designated system details. Click the Title to navigate directly to the external live webpage.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {PROJECTS.map((proj) => (
                    <div
                      key={proj.id}
                      className="border-2 border-white p-6 bg-black flex flex-col justify-between hover:border-gray-300 transition-colors group cursor-pointer relative shadow-lg"
                      onClick={() => setSelectedProject(proj)}
                      role="article"
                      aria-labelledby={`proj-title-${proj.id}`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4 border-b border-gray-800 pb-3">
                          {/* Title link (Stops propagation so it doesn't open detail view, but goes to URL) */}
                          <div className="space-y-1">
                            <a
                              id={`proj-title-${proj.id}`}
                              href={proj.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`Open external webpage for ${proj.title} in new window`}
                              className="inline-flex items-center gap-2 text-lg sm:text-xl font-extrabold tracking-tight underline hover:bg-white hover:text-black p-0.5 transition-colors"
                            >
                              <span>{proj.title}</span>
                              <ExternalLink size={16} aria-hidden="true" />
                            </a>
                            <p className="text-xs text-gray-400 font-bold">{proj.subtitle}</p>
                          </div>

                          <span className="text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase tracking-widest shrink-0">
                            VIEW_DTL
                          </span>
                        </div>

                        {/* Picture Outline */}
                        <div className="border border-white p-4 bg-black text-center text-xs group-hover:bg-gray-900 transition-colors">
                          <p className="font-bold tracking-widest text-[11px] text-gray-300">
                            {proj.placeholderText}
                          </p>
                          <p className="text-[10px] text-gray-500 mt-1">
                            [ Image Outline / Click card for designated page ]
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                          {proj.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-bold">
                        <div className="flex flex-wrap gap-1.5">
                          {proj.techStack.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="border border-gray-700 px-1.5 py-0.5 text-[10px]">
                              {t}
                            </span>
                          ))}
                          {proj.techStack.length > 3 && <span className="text-[10px] text-gray-500">+{proj.techStack.length - 3}</span>}
                        </div>
                        <span className="text-white group-hover:translate-x-1 transition-transform font-bold inline-flex items-center gap-1">
                          <span>OPEN PAGE</span>
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

        {/* ==================== 3. SKILLS LIST & DESIGNATED PAGE ==================== */}
        {activeTab === 'SKILLS' && (
          <section className="animate-fade-in" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="sr-only">Technical Skills Matrix</h2>

            {selectedSkill ? (
              <article className="space-y-6 border-2 border-white p-6 sm:p-8 bg-black">
                <div className="flex items-center justify-between border-b border-white pb-6">
                  <button
                    onClick={() => setSelectedSkill(null)}
                    aria-label="Back to Skills List"
                    className="bg-white text-black px-4 py-2 font-bold text-xs tracking-widest flex items-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    <span>{'[<-- BACK TO SKILLS LIST]'}</span>
                  </button>
                  <span className="text-xs text-gray-400">CATEGORY: {selectedSkill.category.toUpperCase()}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tighter">
                    {selectedSkill.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-xs font-bold">
                    <span className="bg-white text-black px-3 py-1">{selectedSkill.level}</span>
                    <span className="border border-white px-3 py-1 text-gray-300">{selectedSkill.experienceYears}</span>
                  </div>
                </div>

                <div className="bg-black border border-white p-4 font-mono text-xs overflow-x-auto whitespace-pre select-none text-white">
                  <span className="sr-only">ASCII Icon for {selectedSkill.name}</span>
                  {selectedSkill.asciiIcon}
                </div>

                <div className="space-y-4 border-t border-gray-800 pt-6">
                  <h4 className="font-bold text-xs tracking-widest text-gray-400 uppercase">// CAPABILITY DESCRIPTION</h4>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>

                <div className="space-y-3 border-t border-white pt-6">
                  <h4 className="font-bold text-xs tracking-widest text-gray-400 uppercase">// TECHNICAL DRILLDOWN</h4>
                  <ul className="space-y-2" aria-label="Skill drilldown points">
                    {selectedSkill.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <span className="text-white font-extrabold mt-0.5">[&gt;]</span>
                        <span className="text-gray-300 leading-normal">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ) : (
              <div className="space-y-8">
                <div className="border-b border-white pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                    // TECHNICAL COMPETENCY MATRIX
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Click any skill card to open its designated breakdown page.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {SKILLS.map((skill) => (
                    <div
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedSkill(skill); }}
                      aria-label={`View details for skill ${skill.name}`}
                      className="border-2 border-white p-6 bg-black hover:border-gray-300 transition-all group cursor-pointer flex flex-col justify-between shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                          <span className="text-xs text-gray-400 font-bold uppercase">{skill.category}</span>
                          <span className="text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase tracking-widest">
                            VIEW_PAGE
                          </span>
                        </div>

                        <h4 className="text-lg font-extrabold tracking-tight group-hover:underline">
                          {skill.name}
                        </h4>

                        <div className="flex items-center gap-2 text-xs font-bold">
                          <span className="border border-white px-2 py-0.5 text-white">{skill.level}</span>
                          <span className="text-gray-400">{skill.experienceYears}</span>
                        </div>

                        <p className="text-xs text-gray-300 line-clamp-2 pt-2">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                        <span>[ DETAILS AVAILABLE ]</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ==================== 4. EXPERIENCE LIST & DESIGNATED PAGE ==================== */}
        {activeTab === 'EXPERIENCE' && (
          <section className="animate-fade-in" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="sr-only">Professional Experience</h2>

            {selectedExperience ? (
              <article className="space-y-6 border-2 border-white p-6 sm:p-8 bg-black">
                <div className="flex items-center justify-between border-b border-white pb-6">
                  <button
                    onClick={() => setSelectedExperience(null)}
                    aria-label="Back to Experience List"
                    className="bg-white text-black px-4 py-2 font-bold text-xs tracking-widest flex items-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    <span>{'[<-- BACK TO EXPERIENCE LIST]'}</span>
                  </button>
                  <span className="text-xs text-gray-400">{selectedExperience.period}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tighter">
                    {selectedExperience.role}
                  </h3>
                  <div className="flex items-center gap-3 font-bold text-sm">
                    <span className="bg-white text-black px-3 py-1 font-extrabold">{selectedExperience.company}</span>
                    <span className="text-gray-300">// {selectedExperience.location}</span>
                  </div>
                </div>

                <div className="bg-black border border-white p-4 font-mono text-xs overflow-x-auto whitespace-pre select-none text-white">
                  <span className="sr-only">ASCII badge for {selectedExperience.company}</span>
                  {selectedExperience.asciiBadge}
                </div>

                <div className="space-y-4 border-t border-gray-800 pt-6">
                  <h4 className="font-bold text-xs tracking-widest text-gray-400 uppercase">// ROLE SUMMARY</h4>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    {selectedExperience.summary}
                  </p>
                </div>

                <div className="space-y-3 border-t border-white pt-6">
                  <h4 className="font-bold text-xs tracking-widest text-gray-400 uppercase">// KEY ACHIEVEMENTS</h4>
                  <ul className="space-y-3" aria-label="Professional achievements">
                    {selectedExperience.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <span className="text-white font-extrabold mt-0.5">[+]</span>
                        <span className="text-gray-200 leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ) : (
              <div className="space-y-8">
                <div className="border-b border-white pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                    // ENGINEERING CHRONOLOGY
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Click any experience role to view full operational details and authenticated achievements.
                  </p>
                </div>

                <div className="space-y-6">
                  {EXPERIENCE.map((exp) => (
                    <div
                      key={exp.id}
                      onClick={() => setSelectedExperience(exp)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedExperience(exp); }}
                      aria-label={`View details for role ${exp.role} at ${exp.company}`}
                      className="border-2 border-white p-6 bg-black hover:border-gray-300 transition-all group cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3 text-xs text-gray-400 font-bold">
                          <span>{exp.period}</span>
                          <span>|</span>
                          <span>{exp.location}</span>
                        </div>

                        <div className="flex flex-wrap items-baseline gap-3 pt-1">
                          <h4 className="text-lg sm:text-xl font-extrabold tracking-tight group-hover:underline">
                            {exp.role}
                          </h4>
                          <span className="bg-white text-black px-2 py-0.5 text-xs font-extrabold">
                            {exp.company}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2 pt-1 max-w-3xl">
                          {exp.summary}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0 bg-white text-black px-3 py-2 text-xs font-bold">
                        <span>VIEW_PAGE</span>
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ==================== 5. ABOUT ME ==================== */}
        {activeTab === 'ABOUT' && (
          <section className="animate-fade-in space-y-12" aria-labelledby="about-heading">
            <h2 id="about-heading" className="sr-only">About 2High2Work</h2>

            {/* Header section */}
            <div className="border-b-2 border-white pb-6 space-y-2">
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {ABOUT_DATA.header}
              </h3>
              <p className="text-base sm:text-lg text-gray-300 font-bold">
                // {ABOUT_DATA.tagline}
              </p>
            </div>

            {/* Split layout: Bio + Portraits */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-200 font-mono">
                  {ABOUT_DATA.bioParagraphs.map((para, index) => (
                    <p key={index} className="border-l border-gray-600 pl-4 py-1">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Core Philosophy */}
                <div className="border-2 border-white p-6 bg-black space-y-4 mt-8">
                  <h4 className="font-extrabold text-xs tracking-widest text-white uppercase border-b border-gray-800 pb-2">
                    // ENGINEERING TENETS
                  </h4>
                  <ul className="space-y-3" aria-label="Core philosophy tenets">
                    {ABOUT_DATA.philosophy.map((tenet, idx) => (
                      <li key={idx} className="text-xs sm:text-sm font-bold text-gray-200 flex items-start gap-2">
                        <span className="text-white">&gt;</span>
                        <span>{tenet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Portrait Stack - RIGHT SIDE */}
              <div className="space-y-6">
                <div className="border-2 border-white overflow-hidden bg-black aspect-[3/4] group">
                  <img 
                    src="/images/portrait1.webp" 
                    alt="Portrait 1 - Terminal View" 
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="border-t-2 border-white pt-8">
              <h4 className="font-bold text-xs tracking-widest text-gray-400 uppercase mb-6">
                // TELEMETRY SUMMARY
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {ABOUT_DATA.stats.map((stat, idx) => (
                  <div key={idx} className="border border-white p-4 text-center bg-black">
                    <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tighter mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== 6. CONTACT PAGE ==================== */}
        {activeTab === 'CONTACT' && (
          <section className="animate-fade-in space-y-10" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="sr-only">Contact Details</h2>

            <div className="border-b-2 border-white pb-6 space-y-2">
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                CONTACT // TRANSMISSION
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-bold">
                SECURE ENDPOINT FOR PROFESSIONAL INQUIRIES AND CONTRACT DEPLOYMENTS.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="border-2 border-white p-6 sm:p-8 bg-black space-y-6 shadow-xl">
                <div className="border-b border-gray-800 pb-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">// DISPATCH FORM</span>
                  <span className="text-gray-400">ENCRYPTION: REQUIRED</span>
                </div>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("TRANSMISSION LOGGED. WE WILL RESPOND VIA SECURE CHANNELS.");
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-xs font-bold text-gray-300">
                      IDENTIFIER [NAME]
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. ARCHITECT_01"
                      className="w-full bg-black text-white border border-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="block text-xs font-bold text-gray-300">
                      RETURN VECTOR [EMAIL]
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. secure@domain.com"
                      className="w-full bg-black text-white border border-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="block text-xs font-bold text-gray-300">
                      PAYLOAD [MESSAGE]
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="ENTER TRANSMISSION DATA HERE..."
                      className="w-full bg-black text-white border border-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-extrabold py-3 text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white cursor-pointer shadow-md"
                  >
                    [ TRANSMIT PAYLOAD ]
                  </button>
                </form>
              </div>

              {/* Direct Vitals & ASCII Business Card */}
              <div className="space-y-8">
                <div className="border border-white p-6 bg-black space-y-6">
                  <h4 className="font-extrabold text-xs tracking-widest text-white uppercase border-b border-gray-800 pb-2">
                    // DIRECT CHANNELS
                  </h4>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-400">EMAIL:</span>
                      <a href="mailto:info.2high2work@gmail.com" className="font-extrabold text-white underline hover:text-gray-300">
                        info.2high2work@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-400">GITHUB:</span>
                      <a href="https://github.com/2high2work" target="_blank" rel="noopener noreferrer" className="font-extrabold text-white underline hover:text-gray-300 flex items-center gap-1">
                        <span>github.com/2high2work</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                      <span className="text-gray-400">PGP FINGERPRINT:</span>
                      <span className="font-mono text-[11px] text-gray-300">4F9A 82E1 C30B 77D2</span>
                    </div>
                    <div className="flex items-center justify-between pb-1">
                      <span className="text-gray-400">LOCATION:</span>
                      <span className="font-extrabold text-white">DECENTRALIZED // EARTH</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <PortraitOutline 
                    label="CONTACT // VECTOR PORTRAIT" 
                    height="min-h-[220px]" 
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer Area */}
      <footer className="border-t-2 border-white mt-16 p-6 bg-black text-xs text-gray-400" aria-label="Site Footer">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-extrabold text-white tracking-widest">// 2HIGH2WORK PORTFOLIO</p>
            <p className="mt-1">Crafted with pure black & white colors. Fully accessible & scalable.</p>
          </div>

          <div className="flex items-center gap-4 font-bold text-[11px] tracking-widest">
            <span className="text-white">STATUS: E2EE SECURED</span>
            <span>|</span>
            <span className="bg-white text-black px-2 py-0.5">WCAG AAA COMPLIANT</span>
          </div>
        </div>
      </footer>

      {/* Fake AI Chat Widget (Bottom Right Box) */}
      <FakeAiChat />

      {/* Cookie Consent Dialog */}
      {showCookieDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="border-2 border-white bg-black p-6 sm:p-8 max-w-md w-full space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                COOKIE POLICY
              </h2>
              <p className="text-xs text-gray-400 tracking-widest">
                [ SYSTEM NOTIFICATION ]
              </p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p className="text-gray-300">
                This site does not actually collect cookies.
              </p>
              <p className="text-gray-400 text-xs font-mono">
                // Your choice will be remembered and promptly ignored until you clear your browser cache.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCookieAccept}
                className="flex-1 bg-white text-black px-4 py-3 font-bold text-xs tracking-widest hover:bg-gray-200 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              >
                ACCEPT
              </button>
              <button
                onClick={handleCookieReject}
                className="flex-1 border border-white text-white px-4 py-3 font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              >
                REJECT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
