import React from 'react';
import { Search, Compass, Palette, Code2, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

interface UnifiedWorkProps {
  onOpenContact: () => void;
  theme?: 'dark' | 'light';
}

export const UnifiedWork: React.FC<UnifiedWorkProps> = ({ onOpenContact, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const skillsList = [
    'WEB DESIGN',
    'UI/UX DESIGN',
    'REACT',
    'TYPESCRIPT',
    'THREE.JS',
    'TAILWIND CSS',
    'WEB AUDIO API',
    'HTML5 CANVAS',
    'GAME DEV',
    'NETLIFY',
    'SCHEMA.ORG SEO',
    'PYTHON',
  ];

  const workProcess = [
    {
      step: '01',
      icon: Search,
      title: 'DISCOVER',
      desc: 'Understanding goals, audience, and project requirements.',
    },
    {
      step: '02',
      icon: Compass,
      title: 'IDEATE',
      desc: 'Planning, wireframing, and creating the right concept.',
    },
    {
      step: '03',
      icon: Palette,
      title: 'DESIGN',
      desc: 'Crafting visual design with a focus on user experience.',
    },
    {
      step: '04',
      icon: Code2,
      title: 'DEVELOP',
      desc: 'Building fast, responsive, and high-performing websites.',
    },
    {
      step: '05',
      icon: Rocket,
      title: 'DELIVER',
      desc: 'Testing, optimizing, and launching with perfection.',
    },
  ];

  return (
    <section id="skills-education" className={`py-20 md:py-28 border-b transition-colors duration-200 relative ${
      isDark ? 'bg-[#0A0A0D] text-white border-zinc-900' : 'bg-gray-50 text-gray-900 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* 3-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* COLUMN 1: EDUCATION & SKILLS */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className={`font-bebas text-2xl sm:text-3xl tracking-wide uppercase ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              EDUCATION & SKILLS
            </h3>

            {/* Education Block */}
            <div className="space-y-4">
              <div className="text-[11px] font-mono tracking-widest text-[#E11D48] uppercase font-bold">
                EDUCATION
              </div>

              <div className="space-y-4">
                <div className={`pb-3 border-b ${isDark ? 'border-zinc-800/80' : 'border-gray-200'}`}>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className={`font-sans font-bold text-sm sm:text-base ${
                      isDark ? 'text-zinc-100' : 'text-gray-900'
                    }`}>
                      Standard IV (Class 4)
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-400">
                      2024–Present
                    </span>
                  </div>
                  <p className={`text-xs mt-1 font-sans ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Elementary School Student & Junior Scholar
                  </p>
                </div>

                <div className={`pb-3 border-b ${isDark ? 'border-zinc-800/80' : 'border-gray-200'}`}>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className={`font-sans font-bold text-sm sm:text-base ${
                      isDark ? 'text-zinc-100' : 'text-gray-900'
                    }`}>
                      Web & Game Development
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-400">
                      2023–Present
                    </span>
                  </div>
                  <p className={`text-xs mt-1 font-sans ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Self-Taught Creator, WebGL & Audio APIs
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Tags Grid */}
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-mono tracking-widest text-[#E11D48] uppercase font-bold">
                SKILLS
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skillsList.map((skill) => (
                  <div
                    key={skill}
                    className={`px-2.5 py-2 border text-center text-[10px] font-mono tracking-wider transition-colors uppercase ${
                      isDark
                        ? 'bg-[#121217] border-zinc-800 hover:border-zinc-600 text-zinc-300'
                        : 'bg-white border-gray-300 hover:border-gray-400 text-gray-800 shadow-2xs'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: WORK PROCESS */}
          <div id="process" className="lg:col-span-5 space-y-8 lg:px-4">
            <h3 className={`font-bebas text-2xl sm:text-3xl tracking-wide uppercase ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              WORK PROCESS
            </h3>

            {/* Connected Vertical Pipeline */}
            <div className={`relative space-y-6 before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[1px] ${
              isDark ? 'before:bg-zinc-800' : 'before:bg-gray-300'
            }`}>
              {workProcess.map((proc, idx) => {
                const IconComponent = proc.icon;
                return (
                  <motion.div
                    key={proc.step}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="relative flex items-start gap-4 pl-1"
                  >
                    {/* Circle Node with Icon */}
                    <div className={`relative z-10 w-7 h-7 rounded-full border flex items-center justify-center shrink-0 shadow-md ${
                      isDark
                        ? 'bg-[#16161D] border-zinc-700 text-zinc-300'
                        : 'bg-white border-gray-300 text-gray-700'
                    }`}>
                      <IconComponent className="w-3.5 h-3.5 text-[#E11D48]" />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-0.5 pt-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bebas text-sm tracking-wider text-[#E11D48]">
                          {proc.step}
                        </span>
                        <span className={`font-mono text-xs tracking-wider uppercase font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {proc.title}
                        </span>
                      </div>
                      <p className={`text-xs font-sans leading-relaxed ${
                        isDark ? 'text-zinc-400' : 'text-gray-600'
                      }`}>
                        {proc.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* COLUMN 3: CRIMSON QUOTE & SIGNATURE CARD */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 bg-gradient-to-b from-[#B91C1C] via-[#991B1B] to-[#4C0519] border border-red-500/40 text-white shadow-2xl relative flex flex-col justify-between min-h-[460px]"
            >
              {/* Giant quotation marks */}
              <div>
                <span className="font-serif text-6xl sm:text-7xl leading-none text-red-300/40 block -mb-4 select-none">
                  “
                </span>
                <p className="font-sans text-base sm:text-lg font-medium leading-snug text-white/95 pt-2">
                  Good design and code is not just how it looks, but how it works and feels.
                </p>
              </div>

              {/* Handwritten Signature */}
              <div className="pt-8 space-y-4 border-t border-red-500/30">
                <div className="font-script text-4xl sm:text-5xl text-white tracking-wide">
                  Aanam
                </div>

                <div className="pt-2">
                  <div className="text-[10px] font-mono tracking-widest text-red-200 uppercase font-semibold">
                    LET'S CREATE
                  </div>
                  <div className="text-xs font-mono font-bold tracking-wider text-white uppercase flex items-center gap-1.5 pt-0.5">
                    <span>SOMETHING GREAT TOGETHER</span>
                    <span className="text-red-200">✦</span>
                  </div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full mt-3 py-2.5 px-4 text-xs font-mono uppercase tracking-wider text-[#991B1B] bg-white hover:bg-zinc-100 transition-colors font-bold text-center cursor-pointer shadow-md"
                >
                  Start A Conversation
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
