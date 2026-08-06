import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>Structured Workflow</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            The Development <span className="text-[#0B3D91]">Process</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A transparent, 4-step engineering roadmap designed for speed, clarity, and zero surprise delays.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#0B3D91]/40 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Giant Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-black text-[#0B3D91] font-display">
                  {step.number}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#0B3D91]" />
                  <span>{step.duration}</span>
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 mb-6">
                <h3 className="text-xl font-bold text-[#0F172A] font-display group-hover:text-[#0B3D91] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-bold text-[#0B3D91]">
                  {step.subtitle}
                </p>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-2 mt-auto">
                <p className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Key Deliverables:</p>
                <ul className="space-y-1.5">
                  {step.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="text-[11px] text-slate-700 font-semibold flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
