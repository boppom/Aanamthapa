import React from 'react';
import { ArrowUpRight, Heart, Sparkles, BookOpen, Laptop, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-gray-200 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E11D48] mb-2 font-bold">
              <span>01</span>
              <span className="w-4 h-[1px] bg-[#E11D48]"></span>
              <span>STUDENT PROFILE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-[#18181B]">
              About Me
            </h2>
          </div>

          <p className="text-xs md:text-sm font-mono text-gray-500 max-w-sm">
            4th standard student who turns imagination into real clickable web games and voice apps.
          </p>
        </div>

        {/* 2-Column Clean Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Personal Story */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-editorial italic text-gray-900 leading-snug">
              "I love computers, video games, and figuring out how things work under the hood."
            </h3>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Hi, I'm <strong className="text-black font-semibold">Aanam Thapa</strong>! I am currently studying in <strong className="text-black font-semibold">Standard IV (Class 4)</strong>. Even though I am young and don't have corporate job experience, I have already built and deployed real 3D video games and voice tools on the web.
              </p>
              <p>
                When other kids just play games, I wanted to learn how to create them! That is why I built <span className="font-semibold text-[#E11D48]">ASHLINE // Black Site</span>—a full 3D action arena where you can walk with WASD, switch weapons, and challenge targets.
              </p>
              <p>
                I also created <span className="font-semibold text-[#E11D48]">Bowler's Academy</span>, an interactive cricket fast bowling training guide with pitch trajectory lessons, bowling strategy playbooks, and quizzes, as well as <span className="font-semibold text-[#E11D48]">Aria</span>, a smart voice reminder tool with talking speech synthesis.
              </p>
            </div>

            {/* Quick badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-800 flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-[#E11D48]" />
                Self-Taught Junior Coder
              </span>
              <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-800 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                Standard IV Student
              </span>
              <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-800 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                Gamer & Creator
              </span>
            </div>

            {/* Direct contact link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#E11D48] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Phone: {PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Traits */}
          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-gray-200 lg:pl-10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E11D48] font-bold">
              What Inspires My Coding
            </h4>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 border border-gray-200">
                <div className="text-sm font-display font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E11D48]" />
                  <span>Curiosity & Fast Learning</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  I love asking questions, reading tutorials, and experimenting with new code libraries every weekend.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200">
                <div className="text-sm font-display font-bold text-gray-900 flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-[#E11D48]" />
                  <span>Real Working Results</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Instead of just theoretical homework, I put my projects online on Netlify so anyone can play and try them right away.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200">
                <div className="text-sm font-display font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#E11D48]" />
                  <span>School & Coding Balance</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Balancing my Class 4 school syllabus, maths homework, and creative coding exploration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
