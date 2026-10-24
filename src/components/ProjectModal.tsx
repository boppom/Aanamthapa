import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Play } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#101015] border border-zinc-700 text-white overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#101015]/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E11D48] font-bold">
              {project.category}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-mono text-zinc-400">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h2 id="project-modal-title" className="text-3xl sm:text-4xl font-bebas tracking-wide text-white uppercase mb-2">
              {project.title}
            </h2>
            <p className="text-sm font-sans text-zinc-300 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Media preview */}
          <div className="relative aspect-video w-full overflow-hidden bg-black border border-zinc-800 shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Impact points */}
          <div className="p-5 bg-[#14141B] border border-zinc-800 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#E11D48] font-bold">
              Key Features & Performance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.impact.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                The Engineering Challenge
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                My Solution & Code
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 border-t border-zinc-800 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Technologies & Tools
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-zinc-900 border border-zinc-700 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Sticky CTA */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#101015]/95 backdrop-blur-md border-t border-zinc-800">
          <div className="text-xs font-mono text-zinc-400">
            Live Web App ready to test
          </div>

          <div className="flex items-center gap-3">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-[#E11D48] hover:bg-[#BE123C] transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Launch Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors cursor-pointer"
            >
              <span>Feedback</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
