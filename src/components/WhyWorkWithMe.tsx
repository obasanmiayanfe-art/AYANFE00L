import React from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  Search,
  Smartphone,
  Code,
  Sliders,
  Sparkles,
  ShieldCheck,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

const getWhyIcon = (iconName: string) => {
  switch (iconName) {
    case 'Zap':
      return <Zap className="w-6 h-6 text-[#0B3D91]" />;
    case 'Search':
      return <Search className="w-6 h-6 text-[#0B3D91]" />;
    case 'Smartphone':
      return <Smartphone className="w-6 h-6 text-[#0B3D91]" />;
    case 'Code':
      return <Code className="w-6 h-6 text-[#0B3D91]" />;
    case 'Sliders':
      return <Sliders className="w-6 h-6 text-[#0B3D91]" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-[#0B3D91]" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-[#0B3D91]" />;
    case 'Headphones':
      return <Headphones className="w-6 h-6 text-[#0B3D91]" />;
    default:
      return <Zap className="w-6 h-6 text-[#0B3D91]" />;
  }
};

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-blue-100/40 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>Why Clients Choose BELOVED</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            Why Work <span className="text-[#0B3D91]">With Me?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            I don't just build websites, I create high-converting digital assets tailored to maximize your business revenue, search rankings, and brand trust.
          </p>
        </div>

        {/* 8 Modern Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#0B3D91]/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0B3D91] transition-all [&_svg]:group-hover:text-white">
                    {getWhyIcon(item.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-blue-50 text-[#0B3D91] border border-blue-100">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-1 font-display group-hover:text-[#0B3D91] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#0B3D91] mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
