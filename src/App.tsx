import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { UnifiedWork } from './components/UnifiedWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Theme state: defaults to dark matching poster aesthetic, with persistence in localStorage
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-200 selection:bg-[#E11D48] selection:text-white relative ${
      theme === 'dark' ? 'bg-[#0A0A0D] text-[#F3F4F6]' : 'bg-[#FAFAFA] text-[#111827]'
    }`}>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#E11D48] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Bar with Theme Toggle */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections with Theme Prop Passed */}
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} theme={theme} />
        <Projects onOpenContact={() => setIsContactOpen(true)} theme={theme} />
        <UnifiedWork onOpenContact={() => setIsContactOpen(true)} theme={theme} />
        <Contact onOpenContact={() => setIsContactOpen(true)} theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Contact / Note Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
