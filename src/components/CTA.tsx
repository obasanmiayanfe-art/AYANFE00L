import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

interface CTAProps {
  onOpenHireModal: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenHireModal }) => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Radiant Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-blue-100/40 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold shadow-sm">
          <Zap className="w-4 h-4 text-emerald-600 animate-pulse" />
          <span>Currently Accepting New Projects for This Quarter</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-tight font-display">
          Ready to Build Your <br className="hidden sm:inline" />
          <span className="text-[#0B3D91]">
            Next Website?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Let's create a website that grows your business. Fast turnarounds, 90+ PageSpeed score guarantee, and dedicated post-launch support.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenHireModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0B3D91] text-white font-extrabold text-base shadow-lg shadow-blue-900/20 hover:bg-[#0F172A] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-sky-200" />
            <span>Hire Me</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={BRAND_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold text-base border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-[#0B3D91]" />
            <span>Book a Call</span>
          </a>
        </div>

        {/* Trust Points */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-500 border-t border-slate-200 max-w-xl mx-auto">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero Lock-in Contract</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>30-Day Free Technical Support</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% On-Time Guarantee</span>
          </span>
        </div>

      </div>
    </section>
  );
};
