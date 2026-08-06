import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Sparkles, Award, CheckCircle2 } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'CMS & E-commerce', 'Design & Page Builders', 'Frontend Code', 'Optimization & SEO'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>Technical Mastery</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            Skills & <span className="text-[#0B3D91]">Proficiency</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Tested expertise across modern content management systems, page builders, frontend code standards, and technical SEO.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#0B3D91] text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#0F172A] border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Skill Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0B3D91]/40 shadow-md hover:shadow-lg transition-all space-y-3"
            >
              {/* Skill Title & Percentage */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91] text-xs font-black">
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] font-display">{skill.name}</h3>
                    <p className="text-[11px] text-slate-500 font-semibold">{skill.category} • {skill.experienceYears}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-[#0B3D91] font-display">{skill.percentage}%</span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden p-0.5 border border-slate-200 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="h-full rounded-full bg-[#0B3D91] relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/40 blur-[2px] rounded-full" />
                </motion.div>
              </div>

              {/* Subtitle / Highlight */}
              <p className="text-xs text-slate-600 font-medium pt-1">
                {skill.highlight}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skill Summary Badge */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto flex items-center justify-center gap-3 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <p className="text-xs text-slate-600 font-semibold">
            <strong className="text-[#0F172A]">100% Commitment to Performance:</strong> Zero bloated code, optimized assets, and 100% responsive cross-device testing.
          </p>
        </div>

      </div>
    </section>
  );
};
