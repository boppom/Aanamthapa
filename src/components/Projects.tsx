import React, { useState } from 'react';
import { Play, ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onOpenContact: () => void;
  theme?: 'dark' | 'light';
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenContact, theme = 'dark' }) => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`py-20 md:py-28 border-b transition-colors duration-200 relative ${
      isDark ? 'bg-[#0A0A0D] text-white border-zinc-900' : 'bg-white text-gray-900 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-center justify-between pb-6 mb-12 border-b gap-4 ${
          isDark ? 'border-zinc-800' : 'border-gray-200'
        }`}>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E11D48] mb-1 font-bold">
              <span>01</span>
              <span className="w-4 h-[1px] bg-[#E11D48]" />
              <span>LIVE PRODUCTIONS</span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold font-bebas tracking-wide uppercase ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              SELECTED PROJECTS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 border ${
              isDark ? 'text-zinc-400 bg-zinc-900/90 border-zinc-800' : 'text-gray-600 bg-gray-50 border-gray-200'
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
              <span>{PROJECTS.length} FULLY FUNCTIONAL LIVE WEB APPS</span>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative border transition-all duration-300 shadow-2xl overflow-hidden ${
                  isDark
                    ? 'bg-[#101015] border-zinc-800 hover:border-zinc-600'
                    : 'bg-white border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual Media Container */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Corner index number badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                      <span className="font-bebas text-2xl tracking-wider text-[#E11D48] bg-black/80 px-2.5 py-0.5 border border-zinc-700">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-300 bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-zinc-700 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span>Interactive Live App</span>
                      <ExternalLink className="w-3 h-3 text-[#E11D48]" />
                    </div>
                  </div>

                  {/* Content details */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3.5">
                      <div>
                        <div className="text-[11px] font-mono text-[#E11D48] font-bold tracking-wider uppercase mb-1">
                          {project.id === 'pokedex-web-app'
                            ? 'LIVE POKÉ GO HUB · NETLIFY DEPLOYMENT'
                            : project.id === 'studymate-school-planner'
                            ? 'BILINGUAL STUDENT PLANNER & FOCUS TIMER'
                            : project.id === 'nova-ai-assistant'
                            ? 'FREE BROWSER-NATIVE AI ASSISTANT · 20M TOKENS'
                            : project.id === 'ashline-black-site'
                            ? 'PLAYABLE 3D FPS ARENA'
                            : project.id === 'barber-shop-pokhara'
                            ? 'FAST BARBERSHOP BOOKING PORTAL'
                            : project.id === 'the-new-barber'
                            ? 'PREMIUM BARBERSHOP DIGITAL FLAGSHIP'
                            : project.id === 'bowlers-academy'
                            ? 'CRICKET BOWLING TRAINING PLATFORM'
                            : 'VOICE AI & SOUND ALARM APP'}
                        </div>
                        <h3
                          onClick={() => setActiveModalProject(project)}
                          className={`text-2xl sm:text-3xl font-bold font-bebas tracking-wide group-hover:text-[#E11D48] transition-colors cursor-pointer uppercase ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>

                      <p className={`text-sm font-sans leading-snug ${
                        isDark ? 'text-zinc-300' : 'text-gray-700'
                      }`}>
                        {project.subtitle}
                      </p>

                      <p className={`text-xs leading-relaxed font-sans ${
                        isDark ? 'text-zinc-400' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>

                      {/* Feature points */}
                      <div className={`pt-2 space-y-1.5 border-t ${
                        isDark ? 'border-zinc-800/80' : 'border-gray-100'
                      }`}>
                        {project.impact.slice(0, 3).map((item, idx) => (
                          <div key={idx} className={`flex items-start gap-2 text-xs font-sans ${
                            isDark ? 'text-zinc-300' : 'text-gray-700'
                          }`}>
                            <span className="w-1.5 h-1.5 bg-[#E11D48] shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions and tech tags */}
                    <div className={`pt-4 border-t space-y-4 ${
                      isDark ? 'border-zinc-800/80' : 'border-gray-100'
                    }`}>
                      {/* Tech stack */}
                      <div className={`flex flex-wrap items-center gap-x-2 text-xs font-mono ${
                        isDark ? 'text-zinc-400' : 'text-gray-500'
                      }`}>
                        {project.technologies.map((tech, i) => (
                          <React.Fragment key={tech}>
                            <span className={isDark ? 'text-zinc-300' : 'text-gray-800'}>{tech}</span>
                            {i < project.technologies.length - 1 && (
                              <span className={isDark ? 'text-zinc-600' : 'text-gray-300'}>·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Direct launch button */}
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-[#E11D48] hover:bg-[#BE123C] transition-colors shadow-lg shadow-red-950/40"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>
                            {project.id === 'pokedex-web-app'
                              ? 'Launch Poké Go Hub'
                              : project.id === 'studymate-school-planner'
                              ? 'Launch StudyMate'
                              : project.id === 'nova-ai-assistant'
                              ? 'Try Nova Free'
                              : project.id === 'ashline-black-site'
                              ? 'Play ASHLINE Now'
                              : project.id === 'barber-shop-pokhara'
                              ? 'Open Barber.Pokhara'
                              : project.id === 'the-new-barber'
                              ? 'Visit The New Barber'
                              : project.id === 'bowlers-academy'
                              ? 'Open Bowler\'s Academy'
                              : 'Launch ARIA App'}
                          </span>
                          <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                        </a>

                        <button
                          onClick={() => setActiveModalProject(project)}
                          className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono uppercase tracking-wider border transition-colors cursor-pointer ${
                            isDark
                              ? 'text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border-zinc-700'
                              : 'text-gray-700 bg-gray-50 hover:bg-gray-100 border-gray-300'
                          }`}
                        >
                          <span>Case Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#E11D48]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onOpenContact={onOpenContact}
        />
      )}
    </section>
  );
};
