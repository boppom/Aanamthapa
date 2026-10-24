import React from 'react';
import { ArrowUpRight, Play, Globe, Terminal, Sparkles, Code2, Layers, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  theme?: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden dark-grid-pattern border-b transition-colors duration-200 ${
      isDark ? 'bg-[#0A0A0D] text-white border-zinc-900' : 'bg-[#FAFAFA] text-gray-900 border-gray-200'
    }`}>
      {/* Ambient background glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] blur-[160px] pointer-events-none rounded-full ${
        isDark ? 'bg-[#E11D48]/15' : 'bg-[#E11D48]/10'
      }`} />
      <div className="absolute bottom-0 right-10 w-[400px] h-[350px] bg-red-900/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top Kicker Bar */}
        <div className={`flex items-center justify-between pb-6 border-b text-xs font-mono tracking-widest uppercase ${
          isDark ? 'border-zinc-800/60 text-zinc-400' : 'border-gray-200 text-gray-500'
        }`}>
          <div className="flex items-center gap-2.5 text-[#E11D48] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
            <span className="tracking-widest">AA STUDIO &bull; OFFICIAL CREATIVE PORTFOLIO</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span>AVAILABLE FOR COLLABORATION</span>
            <span className="text-[#E11D48] text-sm">✦</span>
          </div>
        </div>

        {/* Central Stage with Gigantic PORTFOLIO Backdrop Typography */}
        <div className="relative pt-8 sm:pt-12 pb-6">
          {/* Giant PORTFOLIO Backdrop Typography */}
          <div
            aria-hidden="true"
            className="absolute top-2 sm:top-4 left-0 right-0 text-center select-none pointer-events-none z-0 overflow-hidden"
          >
            <span className={`font-bebas font-black tracking-wider text-[22vw] sm:text-[20vw] lg:text-[18vw] leading-none block transform scale-y-105 transition-opacity ${
              isDark ? 'text-[#C51636] opacity-90' : 'text-[#E11D48] opacity-25'
            }`}>
              PORTFOLIO
            </span>
          </div>

          {/* Clean 2-Column High-Impact Editorial Layout without the photo */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Greeting, Big Bold Typography, Bio, and Buttons */}
            <div className="lg:col-span-7 space-y-6 pt-4 lg:pt-6">
              {/* Handwritten "Hello, I'm" script accent */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="font-script text-4xl sm:text-5xl text-[#E11D48] font-bold tracking-wide -rotate-3 inline-block">
                    Hello, I'm
                  </span>
                  <span className="px-2.5 py-0.5 text-[11px] font-mono tracking-widest uppercase bg-[#E11D48]/15 border border-[#E11D48]/40 text-[#E11D48] font-bold">
                    AA STUDIO
                  </span>
                </div>

                {/* Big Bold Headline: AANAM THAPA */}
                <h1 className={`font-bebas text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-wide leading-[0.88] uppercase ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  AANAM<br />THAPA
                </h1>

                {/* Subtitle Eyebrow in Crimson */}
                <div className="text-xs sm:text-sm font-mono tracking-widest text-[#E11D48] uppercase font-bold pt-2 flex items-center gap-2">
                  <span>WEB DEVELOPER</span>
                  <span>&bull;</span>
                  <span>JUNIOR CREATOR</span>
                  <span>&bull;</span>
                  <span>3D GAME BUILDER</span>
                </div>
              </motion.div>

              {/* Bio Statement */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-sm sm:text-base leading-relaxed max-w-xl font-sans ${
                  isDark ? 'text-zinc-300' : 'text-gray-600'
                }`}
              >
                I design and build stylish, user-focused web experiences that combine creativity with strategy. Passionate about clean code, 3D interactive games, modern business flagships, and details that make a difference.
              </motion.p>

              {/* Location and Grade Tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`flex flex-wrap items-center gap-4 text-xs font-mono tracking-wider uppercase ${
                  isDark ? 'text-zinc-400' : 'text-gray-500'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>MUMBAI, INDIA &bull; CLASS 4 STUDENT</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>SELF-TAUGHT DEVELOPER</span>
                </div>
              </motion.div>

              {/* CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-2 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-white bg-[#E11D48] hover:bg-[#BE123C] transition-colors border border-[#E11D48] shadow-lg shadow-red-950/40"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>Explore Projects</span>
                </a>

                <button
                  onClick={onOpenContact}
                  className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-wider border transition-colors cursor-pointer ${
                    isDark
                      ? 'text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border-zinc-700/80'
                      : 'text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 border-gray-300 shadow-2xs'
                  }`}
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E11D48]" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: Interactive Code & Metrics Showcase Card replacing the photo */}
            <div className="lg:col-span-5 space-y-6">
              {/* Mission Statement Box */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`p-6 border backdrop-blur-sm space-y-3 relative ${
                  isDark
                    ? 'bg-zinc-900/70 border-zinc-800 text-zinc-200'
                    : 'bg-white border-gray-200 text-gray-800 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#E11D48]">
                    <Sparkles className="w-4 h-4" />
                    <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
                      isDark ? 'text-zinc-400' : 'text-gray-500'
                    }`}>
                      CREATIVE PHILOSOPHY
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#E11D48] font-bold">2026</span>
                </div>

                <p className="text-sm sm:text-base leading-relaxed font-sans italic">
                  "Turning ideas into powerful, fast, and memorable digital experiences."
                </p>

                {/* Visual badge tags */}
                <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono">
                  <span className={`px-2 py-1 border ${
                    isDark ? 'bg-black/60 border-zinc-800 text-zinc-300' : 'bg-gray-100 border-gray-200 text-gray-700'
                  }`}>
                    REACT 19
                  </span>
                  <span className={`px-2 py-1 border ${
                    isDark ? 'bg-black/60 border-zinc-800 text-zinc-300' : 'bg-gray-100 border-gray-200 text-gray-700'
                  }`}>
                    THREE.JS
                  </span>
                  <span className={`px-2 py-1 border ${
                    isDark ? 'bg-black/60 border-zinc-800 text-zinc-300' : 'bg-gray-100 border-gray-200 text-gray-700'
                  }`}>
                    TYPESCRIPT
                  </span>
                  <span className={`px-2 py-1 border ${
                    isDark ? 'bg-black/60 border-zinc-800 text-zinc-300' : 'bg-gray-100 border-gray-200 text-gray-700'
                  }`}>
                    WEB AUDIO
                  </span>
                </div>
              </motion.div>

              {/* Vertical Metrics in 3 Clean Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {/* Metric 1 */}
                <div className={`p-4 border border-l-4 border-l-[#E11D48] space-y-1 ${
                  isDark ? 'bg-[#121217] border-zinc-800' : 'bg-white border-gray-200 shadow-xs'
                }`}>
                  <div className={`font-bebas text-4xl sm:text-5xl tracking-wide leading-none flex items-baseline gap-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <span className="text-[#E11D48]">8</span>
                    <span>+</span>
                  </div>
                  <div className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
                    isDark ? 'text-zinc-400' : 'text-gray-500'
                  }`}>
                    Live Web Apps
                  </div>
                </div>

                {/* Metric 2 */}
                <div className={`p-4 border border-l-4 border-l-[#E11D48] space-y-1 ${
                  isDark ? 'bg-[#121217] border-zinc-800' : 'bg-white border-gray-200 shadow-xs'
                }`}>
                  <div className="font-bebas text-4xl sm:text-5xl text-[#E11D48] tracking-wide leading-none">
                    100%
                  </div>
                  <div className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
                    isDark ? 'text-zinc-400' : 'text-gray-500'
                  }`}>
                    Code & Logic
                  </div>
                </div>

                {/* Metric 3 */}
                <div className={`p-4 border border-l-4 border-l-[#E11D48] space-y-1 ${
                  isDark ? 'bg-[#121217] border-zinc-800' : 'bg-white border-gray-200 shadow-xs'
                }`}>
                  <div className={`font-bebas text-4xl sm:text-5xl tracking-wide leading-none ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    CLASS 4
                  </div>
                  <div className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
                    isDark ? 'text-zinc-400' : 'text-gray-500'
                  }`}>
                    Std IV Student
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
