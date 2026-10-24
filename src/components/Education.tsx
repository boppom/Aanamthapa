import React from 'react';
import { SCHOOL_EDUCATION } from '../data/portfolioData';
import { GraduationCap, Award, BookCheck, Star } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 border-b border-gray-200 bg-[#FBFBFA] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E11D48] mb-2 font-bold">
              <span>04</span>
              <span className="w-4 h-[1px] bg-[#E11D48]"></span>
              <span>SCHOOLING & STUDIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-[#18181B]">
              Education
            </h2>
          </div>

          <span className="text-xs font-mono text-gray-500">
            CLASS 4 (STANDARD IV) STUDENT
          </span>
        </div>

        {/* Clean resume cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 p-6 md:p-8 bg-white border border-gray-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[#E11D48] font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>CURRENT ACADEMIC STATUS</span>
            </div>

            <h3 className="text-2xl font-bold font-display text-gray-900">
              {SCHOOL_EDUCATION.grade}
            </h3>

            <p className="text-sm font-medium text-gray-600">
              {SCHOOL_EDUCATION.school}
            </p>

            <div className="pt-4 border-t border-gray-100">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                Favorite Subjects:
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {SCHOOL_EDUCATION.favoriteSubjects.map((sub) => (
                  <span
                    key={sub}
                    className="px-2.5 py-1 bg-gray-100 text-gray-800 border border-gray-200"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-6 p-6 md:p-8 bg-white border border-gray-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[#E11D48] font-bold">
              <Award className="w-4 h-4" />
              <span>KEY HIGHLIGHTS & MILESTONES</span>
            </div>

            <h3 className="text-xl font-bold font-display text-gray-900">
              Self-Taught Junior Milestones
            </h3>

            <div className="space-y-3 pt-2">
              {SCHOOL_EDUCATION.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                  <Star className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5 fill-[#E11D48]/20" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
