import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  Globe,
  Clock,
  Github,
  Linkedin
} from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactProps {
  initialPlatform?: string;
  initialMessage?: string;
  initialServices?: string[];
}

export const Contact: React.FC<ContactProps> = ({
  initialPlatform = '',
  initialMessage = '',
  initialServices = []
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    platform: initialPlatform || 'WordPress Website',
    budgetRange: '$1,000 - $2,500',
    timeline: 'Within 2 Weeks',
    message: initialMessage || '',
    servicesNeeded: initialServices
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialPlatform) {
      setFormData(prev => ({ ...prev, platform: initialPlatform }));
    }
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialPlatform, initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>Start A Conversation</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            Get In Touch With <span className="text-[#0B3D91]">BELOVED</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have a project in mind or need a custom website consultation? Send a direct message and I'll respond within 2-4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-[#0F172A] font-display">Direct Contact Channels</h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-[#0B3D91]/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-[#0B3D91]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-extrabold text-slate-400">Email Address</p>
                    <p className="text-sm font-bold text-[#0F172A] group-hover:text-[#0B3D91] transition-colors">{BRAND_INFO.email}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={BRAND_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-500/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-extrabold text-slate-400">WhatsApp Instant Chat</p>
                    <p className="text-sm font-bold text-emerald-600">Click to Chat on WhatsApp</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-[#0B3D91]/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-[#0B3D91]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-extrabold text-slate-400">Phone Consultation</p>
                    <p className="text-sm font-bold text-[#0F172A]">{BRAND_INFO.phone}</p>
                  </div>
                </a>
              </div>

              {/* Social Media Row */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <p className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Social Profiles & Portfolios</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={BRAND_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-[#0B3D91] text-slate-700 hover:text-white border border-slate-200 transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={BRAND_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-[#0F172A] text-slate-700 hover:text-white border border-slate-200 transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={BRAND_INFO.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-[#0B3D91] text-slate-700 hover:text-white border border-slate-200 transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Behance</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91] shrink-0">
                <Clock className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <div className="text-xs text-slate-600">
                <p className="font-bold text-[#0F172A]">Guaranteed Response Time</p>
                <p className="text-slate-500 font-medium">All direct inquiries received Monday - Saturday are answered within 2 to 4 hours.</p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#0F172A] font-display">Inquiry Received Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0F172A]">{formData.fullName}</strong>. I have received your project details and will review your requirements. Expect a detailed email response at <span className="text-[#0B3D91] font-bold">{formData.email}</span> shortly!
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] border border-slate-200 text-xs font-bold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-[#0F172A] font-display">Send a Direct Project Brief</h3>
                  <p className="text-xs text-slate-500 font-medium">Fill in the fields below to schedule a call or request a custom proposal.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Johnson"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-sm font-medium"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-sm font-medium"
                    />
                  </div>

                  {/* Platform */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Target Platform *</label>
                    <select
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-sm font-medium"
                    >
                      <option value="WordPress Website">WordPress Development</option>
                      <option value="WooCommerce E-commerce">WooCommerce Store</option>
                      <option value="Full Website Redesign">Website Redesign</option>
                      <option value="Shopify Store">Shopify Store</option>
                      <option value="Wix Studio Site">Wix Website</option>
                      <option value="Squarespace Site">Squarespace Website</option>
                      <option value="Custom Scope">Custom Scope / Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Estimated Budget</label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-sm font-medium"
                    >
                      <option value="$750 - $1,200">$750 - $1,200</option>
                      <option value="$1,200 - $2,500">$1,200 - $2,500</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                      <option value="$5,000+">$5,000+ (Enterprise)</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Required Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-sm font-medium"
                    >
                      <option value="Urgent (7 Days)">Urgent (7 Days)</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="Flexible Schedule">Flexible Schedule</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Project Details & Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your business, current website URL, desired features, or design inspirations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0F172A] text-sm leading-relaxed font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#0B3D91] text-white font-extrabold text-sm shadow-lg shadow-blue-900/20 hover:bg-[#0F172A] transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending Brief...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Brief</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
