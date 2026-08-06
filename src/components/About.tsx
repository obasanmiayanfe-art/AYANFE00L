import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Clock, Globe, Sparkles, Code2, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND_INFO, ABOUT_HIGHLIGHTS } from '../data/portfolioData';

interface AboutProps {
  onOpenHireModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenHireModal }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-sky-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>About The Developer</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            Meet <span className="text-[#0B3D91]">BELOVED</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Passionate WordPress & WooCommerce specialist committed to crafting digital experiences that turn visitors into loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait & Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-3 bg-slate-50 border border-slate-200 shadow-xl overflow-hidden group">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src={BRAND_INFO.aboutImage}
                  alt="BELOVED - Professional WordPress Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B3D91] flex items-center justify-center text-white shadow-md shadow-blue-900/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-[#0F172A] font-display">{BRAND_INFO.experience}</p>
                    <p className="text-xs font-bold text-slate-500">Development Excellence</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-emerald-600 flex items-center justify-end gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Quality
                  </p>
                  <p className="text-[11px] text-slate-400 font-semibold">Tested & Verified</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text & Specializations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display leading-snug">
                Websites That Turn Visitors Into Customers
              </h3>
              <p className="font-semibold text-slate-800 text-lg">
                Your website should be more than an online brochure, it should be your hardest-working sales tool.
              </p>
              <p>
                I'm <strong className="text-[#0F172A]">BELOVED</strong>, a WordPress & WooCommerce developer who helps businesses create modern, high-performing websites designed to attract customers, build trust, and drive measurable results. From custom business websites to powerful eCommerce stores, I develop digital experiences that are fast, mobile-friendly, SEO-ready, and built to scale.
              </p>
              <p>
                Whether you're launching a new brand, redesigning an outdated website, or expanding your online store, I deliver solutions that combine exceptional design with reliable functionality. I also specialize in Shopify, Wix, and Squarespace, helping businesses choose and maximize the right platform for their needs.
              </p>
            </div>

            {/* Core Specializations Checkmarks Grid */}
            <div className="pt-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                Core Specializations & Skillset
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ABOUT_HIGHLIGHTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0B3D91]/40 transition-all duration-200 flex items-center gap-2.5 group shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0B3D91] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-[#0F172A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenHireModal}
                className="px-8 py-3.5 rounded-full bg-[#0B3D91] text-white font-bold text-sm shadow-lg shadow-blue-900/20 hover:bg-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Work With BELOVED</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 font-semibold">
                <Globe className="w-4 h-4 text-[#0B3D91]" />
                <span>Remote Developer for USA, UK, Europe & Worldwide</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
