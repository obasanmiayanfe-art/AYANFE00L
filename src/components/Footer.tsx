import React from 'react';
import { ArrowUp, Sparkles, Heart, Globe, Github, Linkedin, MessageSquare, Mail } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#0B3D91] p-[2px] shadow-md">
                <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                  <span className="text-xl font-extrabold text-white">
                    B
                  </span>
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                {BRAND_INFO.name}
              </span>
            </div>

            <p className="text-sm text-sky-400 font-bold">
              {BRAND_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-medium">
              Senior WordPress & WooCommerce Developer building fast, modern, conversion-focused websites for businesses worldwide. Tested PageSpeed 90+ score guarantee.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#0B3D91] text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#0B3D91] text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About BELOVED</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Case Studies & Portfolio</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Developer</a></li>
            </ul>
          </div>

          {/* Services Stack */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Core Specializations</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>✔ WordPress Theme & Plugin Engineering</li>
              <li>✔ WooCommerce E-commerce & Checkout Setup</li>
              <li>✔ Website Speed Optimization (90+ PageSpeed)</li>
              <li>✔ Shopify Store Development & Liquid Customization</li>
              <li>✔ Wix Studio & Squarespace Design</li>
              <li>✔ Local & Technical SEO Schema JSON-LD</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© 2026 BELOVED. All rights reserved. Built for global businesses.</p>

          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white border border-slate-700 transition-colors flex items-center gap-1 font-bold text-xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
