import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

interface FAQProps {
  onOpenHireModal: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenHireModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string>('faq-1');

  const categories = ['All', 'Timelines & Delivery', 'WordPress & Technical', 'Maintenance & Ownership', 'Workflow & Payments'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            Frequently Asked <span className="text-[#0B3D91]">Questions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about turnaround times, platform options, code ownership, and working with BELOVED.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0B3D91] text-white shadow-md shadow-blue-900/15 scale-105'
                    : 'bg-white text-slate-600 hover:text-[#0B3D91] hover:bg-blue-50/50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#0B3D91] shadow-lg shadow-blue-900/5'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-50 text-[#0B3D91]' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-[#0F172A] font-display">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-blue-50 text-[#0B3D91]' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line pl-17">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#0B3D91] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Support</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Have a question that's not listed here?
            </h3>
            <p className="text-sky-100/80 text-sm max-w-lg">
              Get in touch directly with BELOVED for a free consultation or custom proposal tailored to your exact business needs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={onOpenHireModal}
              className="px-6 py-3.5 rounded-full bg-white text-[#0F172A] font-bold text-sm hover:bg-slate-100 transition-all shadow-lg flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-[#0B3D91]" />
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0B3D91]" />
            </button>
            <button
              onClick={handleScrollToContact}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-sky-300" />
              <span>Send Message</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
