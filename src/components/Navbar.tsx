import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Projects', href: '#projects' },
    { label: 'Education & Skills', href: '#skills-education' },
    { label: 'Work Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? isDark
            ? 'bg-[#0A0A0D]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-md'
          : isDark
            ? 'bg-transparent border-b border-white/5 py-4'
            : 'bg-transparent border-b border-black/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Left Eyebrow / Brand: AA STUDIO & AANAM THAPA */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group flex items-center gap-3 font-display"
          >
            {/* AA Studio Monogram Badge */}
            <div className="w-9 h-9 bg-[#E11D48] text-white flex items-center justify-center font-bebas text-xl font-bold tracking-wider shadow-md shadow-red-950/30 group-hover:scale-105 transition-transform">
              AA
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#E11D48] font-bold leading-tight">
                AA STUDIO
              </span>
              <span className={`text-base md:text-lg font-bold tracking-tight uppercase font-sans transition-colors ${
                isDark ? 'text-white group-hover:text-[#E11D48]' : 'text-gray-900 group-hover:text-[#E11D48]'
              }`}>
                AANAM THAPA
              </span>
            </div>
          </a>
        </div>

        {/* Center navigation links */}
        <nav className={`hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest ${
          isDark ? 'text-zinc-400' : 'text-gray-600'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors relative py-1 hover:text-[#E11D48] ${
                isDark ? 'hover:text-white' : 'hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions: Theme toggle, Availability & Contact */}
        <div className="flex items-center gap-3">
          <div className={`hidden xl:flex items-center gap-2 text-xs font-mono tracking-wider uppercase ${
            isDark ? 'text-zinc-400' : 'text-gray-500'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse"></span>
            <span>AVAILABLE FOR COLLABORATION</span>
            <span className="text-[#E11D48]">✦</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle light or dark theme"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors cursor-pointer ${
              isDark
                ? 'bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border-zinc-700/80 hover:text-white'
                : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-300 shadow-2xs hover:text-black'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-semibold">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#E11D48]" />
                <span className="text-[11px] font-semibold">Dark</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-white bg-[#E11D48] hover:bg-[#BE123C] transition-colors shadow-xs cursor-pointer border border-[#E11D48]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-6 py-5 space-y-3 shadow-lg ${
          isDark ? 'bg-[#0F0F14] border-zinc-800' : 'bg-white border-gray-200'
        }`}>
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-mono uppercase tracking-wider py-1 hover:text-[#E11D48] ${
                  isDark ? 'text-zinc-300' : 'text-gray-800'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className={`pt-3 border-t flex flex-col gap-2 ${
            isDark ? 'border-zinc-800' : 'border-gray-200'
          }`}>
            <button
              onClick={() => {
                onToggleTheme();
                setMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between py-1.5 text-xs font-mono uppercase tracking-wider ${
                isDark ? 'text-zinc-300' : 'text-gray-800'
              }`}
            >
              <span>Color Theme</span>
              <span className="flex items-center gap-1.5 text-[#E11D48] font-bold">
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
                {isDark ? 'Switch to Light' : 'Switch to Dark'}
              </span>
            </button>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className={`flex items-center gap-2 text-xs font-mono py-1 ${
                isDark ? 'text-zinc-400' : 'text-gray-600'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>Call: {PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
