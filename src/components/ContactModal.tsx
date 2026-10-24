import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Feedback on ASHLINE Game',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'Feedback on ASHLINE Game',
      message: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-[#101015] border border-zinc-700 text-white shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 bg-red-950/60 border border-[#E11D48] text-[#E11D48] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bebas tracking-wide text-white uppercase">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto font-sans leading-relaxed">
                Thank you for reaching out to Aanam Thapa! Your note has been received, and he will check it after school.
              </p>
            </div>

            <div className="p-3 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
              Direct Contact: {PERSONAL_INFO.email} · +91 {PERSONAL_INFO.phone}
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2 text-xs font-mono uppercase tracking-wider text-white bg-[#E11D48] hover:bg-[#BE123C] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E11D48] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AA STUDIO &bull; GET IN TOUCH</span>
              </div>
              <h3 id="contact-modal-title" className="text-2xl font-bebas tracking-wide text-white uppercase">
                Send Aanam Thapa A Message
              </h3>
              <p className="text-xs text-zinc-400 font-sans">
                Leave your feedback, project inquiry, or say hello.
              </p>
            </div>

            {/* Quick contact shortcuts */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-[#E11D48] flex items-center gap-2 text-zinc-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
                <span className="truncate">{PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-[#E11D48] flex items-center gap-2 text-zinc-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#E11D48]" />
                <span className="truncate">Email Aanam</span>
              </a>
            </div>

            <div className="space-y-4 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 focus:border-[#E11D48] text-xs text-white placeholder-zinc-500 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 focus:border-[#E11D48] text-xs text-white placeholder-zinc-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                  Regarding Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 focus:border-[#E11D48] text-xs text-white outline-none transition-colors"
                >
                  <option value="Feedback on ASHLINE Game">Feedback on ASHLINE 3D Game</option>
                  <option value="Feedback on Barbershop.Pokhara">Feedback on Barbershop.Pokhara</option>
                  <option value="Feedback on The New Barber">Feedback on The New Barber</option>
                  <option value="Feedback on Bowler's Academy">Feedback on Bowler's Academy</option>
                  <option value="Feedback on Aria Voice App">Feedback on Aria Voice App</option>
                  <option value="School Coding Project Collaboration">School Coding Project Collaboration</option>
                  <option value="General Hello & Appreciation">General Hello & Appreciation</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your thoughts, suggestions, or collaboration proposal..."
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 focus:border-[#E11D48] text-xs text-white placeholder-zinc-500 outline-none transition-colors resize-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-zinc-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider text-white bg-[#E11D48] hover:bg-[#BE123C] disabled:opacity-50 transition-colors shadow-xs"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Note</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
