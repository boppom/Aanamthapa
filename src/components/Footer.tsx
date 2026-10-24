import React from 'react';
import { ArrowUp, Phone, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  theme?: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-10 border-t text-xs font-mono transition-colors duration-200 ${
      isDark ? 'bg-[#0A0A0D] border-zinc-900 text-zinc-500' : 'bg-gray-100 border-gray-200 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[#E11D48] font-bold font-mono tracking-wider">
            AA STUDIO
          </span>
          <span className={isDark ? 'text-zinc-700' : 'text-gray-400'}>·</span>
          <span className={`font-display font-bold uppercase ${isDark ? 'text-white' : 'text-gray-900'}`}>
            AANAM THAPA
          </span>
          <span className={isDark ? 'text-zinc-700' : 'text-gray-400'}>·</span>
          <span>{PERSONAL_INFO.grade} Junior Creator</span>
          <span className={isDark ? 'text-zinc-700' : 'text-gray-400'}>·</span>
          <span>© 2026</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className={`flex items-center gap-1.5 transition-colors ${
              isDark ? 'text-zinc-400 hover:text-[#E11D48]' : 'text-gray-600 hover:text-[#E11D48]'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
          <span className={isDark ? 'text-zinc-700' : 'text-gray-400'}>·</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className={`flex items-center gap-1.5 transition-colors ${
              isDark ? 'text-zinc-400 hover:text-[#E11D48]' : 'text-gray-600 hover:text-[#E11D48]'
            }`}
          >
            <Mail className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
            isDark ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-black'
          }`}
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#E11D48]" />
        </button>
      </div>
    </footer>
  );
};
