import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Copy, Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, workspaceLaptopImg } from '../data/portfolioData';

interface ContactProps {
  onOpenContact: () => void;
  theme?: 'dark' | 'light';
}

export const Contact: React.FC<ContactProps> = ({ onOpenContact, theme = 'dark' }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const isDark = theme === 'dark';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className={`py-20 md:py-28 border-b transition-colors duration-200 relative ${
      isDark ? 'bg-[#0A0A0D] text-white border-zinc-900' : 'bg-white text-gray-900 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, description, and collaboration pill */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-[#E11D48] text-sm mb-2">
                <span className="text-base">✦</span>
                <span className={`text-xs font-mono uppercase tracking-widest ${
                  isDark ? 'text-zinc-400' : 'text-gray-500'
                }`}>
                  CONNECT & COLLABORATE
                </span>
              </div>
              <h2 className={`font-bebas text-3xl sm:text-4xl lg:text-4xl tracking-wide leading-tight uppercase ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                LET'S CONNECT &amp; COLLABORATE
              </h2>
            </div>

            <p className={`text-xs sm:text-sm font-sans leading-relaxed max-w-sm ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              I'm currently open for new projects and school coding collaborations. Let's create something amazing that drives results.
            </p>

            <div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-[#E11D48] hover:bg-[#BE123C] transition-colors border border-[#E11D48] shadow-lg shadow-red-950/40 cursor-pointer"
              >
                <span>Available for Collaboration</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Column: 4 Contact Cards with Icons */}
          <div className="lg:col-span-4 space-y-3">
            {/* Email Card */}
            <div
              onClick={handleCopyEmail}
              className={`p-3.5 border transition-colors flex items-center justify-between gap-3 cursor-pointer group ${
                isDark
                  ? 'bg-[#121217] border-zinc-800 hover:border-zinc-600'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-400 shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 text-[#E11D48] ${
                  isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-gray-300'
                }`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    EMAIL ADDRESS
                  </div>
                  <div className={`text-xs font-mono truncate transition-colors ${
                    isDark ? 'text-zinc-200 group-hover:text-white' : 'text-gray-800 group-hover:text-black'
                  }`}>
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </span>
            </div>

            {/* Website / Live Projects Card */}
            <a
              href="#projects"
              className={`p-3.5 border transition-colors flex items-center justify-between gap-3 group ${
                isDark
                  ? 'bg-[#121217] border-zinc-800 hover:border-zinc-600'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-400 shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 text-[#E11D48] ${
                  isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-gray-300'
                }`}>
                  <Globe className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    ONLINE CREATIONS
                  </div>
                  <div className={`text-xs font-mono truncate transition-colors ${
                    isDark ? 'text-zinc-200 group-hover:text-white' : 'text-gray-800 group-hover:text-black'
                  }`}>
                    aanamthapa.ai.studio
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#E11D48] transition-colors" />
            </a>

            {/* Phone Card */}
            <div
              onClick={handleCopyPhone}
              className={`p-3.5 border transition-colors flex items-center justify-between gap-3 cursor-pointer group ${
                isDark
                  ? 'bg-[#121217] border-zinc-800 hover:border-zinc-600'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-400 shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 text-[#E11D48] ${
                  isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-gray-300'
                }`}>
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    PHONE NUMBER
                  </div>
                  <div className={`text-xs font-mono truncate transition-colors ${
                    isDark ? 'text-zinc-200 group-hover:text-white' : 'text-gray-800 group-hover:text-black'
                  }`}>
                    +91 {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </span>
            </div>

            {/* Location Card */}
            <div className={`p-3.5 border flex items-center gap-3 ${
              isDark
                ? 'bg-[#121217] border-zinc-800'
                : 'bg-gray-50 border-gray-200 shadow-2xs'
            }`}>
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 text-[#E11D48] ${
                isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-gray-300'
              }`}>
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  LOCATION
                </div>
                <div className={`text-xs font-mono ${isDark ? 'text-zinc-200' : 'text-gray-800'}`}>
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Designer Laptop & Workspace Photo */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative overflow-hidden aspect-[4/3] border shadow-2xl group ${
                isDark ? 'border-zinc-800' : 'border-gray-300'
              }`}
            >
              <img
                src={workspaceLaptopImg}
                alt="Aanam Thapa Developer Workspace"
                className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                <span className="bg-black/80 backdrop-blur-xs px-2.5 py-1 border border-zinc-700">
                  STUDIO WORKSPACE
                </span>
                <span className="text-[#E11D48] font-bold">
                  READY TO BUILD
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
