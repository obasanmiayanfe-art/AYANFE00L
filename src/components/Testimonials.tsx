import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-blue-100/40 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#0B3D91] text-[#0B3D91]" />
            <span>Verified Client Feedback</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            What Clients Say About <span className="text-[#0B3D91]">BELOVED</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Read reviews from founders, marketing directors, and business leaders who scaled their brands with my custom web builds.
          </p>
        </div>

        {/* Featured Testimonial Hero Carousel */}
        <div className="relative max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          
          <Quote className="absolute top-6 right-6 w-16 h-16 text-blue-500/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 relative z-10"
            >
              {/* Stars & Project Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-[#0B3D91] border border-blue-100">
                  {current.projectType}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed italic">
                "{current.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[#0B3D91]/20"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-display flex items-center gap-1.5">
                    <span>{current.name}</span>
                    {current.verified && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" title="Verified Client" />
                    )}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    {current.role} • <strong className="text-[#0B3D91]">{current.company}</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-6">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-[#0B3D91]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#0F172A] border border-slate-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#0F172A] border border-slate-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
