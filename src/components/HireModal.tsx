import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle2, MessageSquare, Calendar, Mail, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const HireModal: React.FC<HireModalProps> = ({
  isOpen,
  onClose,
  prefilledService = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: prefilledService || 'WordPress Development',
    budget: '$1,200 - $2,500',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-900 my-8"
        >
          {/* Header */}
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0B3D91] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] font-display">Hire BELOVED</h3>
                <p className="text-[11px] text-[#0B3D91] font-bold">Fast Turnarounds • 90+ PageSpeed Guaranteed</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-[#0F172A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] font-display">Request Sent Directly to BELOVED!</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Thank you <strong className="text-[#0F172A]">{formData.name}</strong>. Your project request for <span className="text-[#0B3D91] font-bold">{formData.service}</span> has been received. I will review and send you a custom proposal within 2-4 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-bold transition-colors"
                >
                  Close Modal
                </button>
              </div>
            ) : (
              <>
                {/* Instant Quick Channels */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                  <span className="text-slate-600 font-semibold">Need instant response?</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={BRAND_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Brown"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-xs font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="michael@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-xs font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] text-xs font-medium"
                      >
                        <option value="WordPress Development">WordPress Development</option>
                        <option value="WooCommerce Store">WooCommerce Development</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Shopify Development">Shopify Store</option>
                        <option value="Wix Website Design">Wix Website</option>
                        <option value="Squarespace Site">Squarespace Website</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Target Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] text-xs font-medium"
                      >
                        <option value="$750 - $1,200">$750 - $1,200</option>
                        <option value="$1,200 - $2,500">$1,200 - $2,500</option>
                        <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                        <option value="$5,000+">$5,000+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Project Summary</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your goals, required features, or current website link..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-xs leading-relaxed font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#0B3D91] text-white font-extrabold text-xs shadow-lg shadow-blue-900/20 hover:bg-[#0F172A] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Hiring Inquiry</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
