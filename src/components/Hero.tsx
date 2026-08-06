import React from 'react';
import { motion } from 'motion/react';
import {
  Star,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  Globe,
  Layers,
  ShoppingBag,
  Code
} from 'lucide-react';
import { BRAND_INFO, BRAND_LOGOS, CLIENT_AVATARS } from '../data/portfolioData';

interface HeroProps {
  onOpenHireModal: () => void;
  onNavigateToPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireModal, onNavigateToPortfolio }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50 text-slate-900">
      {/* Background Glows and Grids */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-100/60 via-blue-50/40 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Small Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs sm:text-sm font-bold shadow-sm backdrop-blur-md">
              <span className="flex text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              </span>
              <span className="font-bold text-[#0B3D91]">Trusted by Businesses Worldwide</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B3D91] animate-ping"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.1] font-display">
              Building High-Converting{' '}
              <span className="text-[#0B3D91]">
                WordPress Websites
              </span>{' '}
              That Help Businesses Grow.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              I specialize in <strong className="text-[#0F172A] font-semibold">WordPress</strong> and{' '}
              <strong className="text-[#0F172A] font-semibold">WooCommerce</strong> development, creating fast, responsive, SEO-optimized websites that generate leads, increase conversions, and elevate brands globally.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenHireModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0B3D91] text-white font-bold text-base shadow-xl shadow-blue-900/20 hover:bg-[#0F172A] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group"
              >
                <Sparkles className="w-5 h-5 text-blue-200" />
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onNavigateToPortfolio}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] font-bold text-base border border-slate-200 transition-all duration-300 hover:-translate-y-0.5 shadow-sm flex items-center justify-center gap-2"
              >
                <span>View Portfolio</span>
              </button>
            </div>

            {/* Client Avatars & Statistics */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
              {/* Circular Avatars + Trust text */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3 overflow-hidden">
                  {CLIENT_AVATARS.map((avatarUrl, idx) => (
                    <img
                      key={idx}
                      src={avatarUrl}
                      alt={`Satisfied Client Avatar ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-700 mt-0.5">
                    120+ Happy Global Clients
                  </p>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="flex items-center gap-6 divide-x divide-slate-200">
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-black text-[#0F172A] font-display">150+</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Websites Delivered</p>
                </div>
                <div className="pl-6 text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-black text-[#0B3D91] font-display">98%</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Satisfaction Rate</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Side Visual with Longer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Glow Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 via-sky-100/40 to-blue-300/30 rounded-3xl blur-2xl transform rotate-3 scale-95" />

            {/* Developer Workspace Main Frame - Full Fill Image */}
            <div className="relative z-10 w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl group">
              <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[580px] overflow-hidden flex items-center justify-center bg-slate-100">
                <img
                  src={BRAND_INFO.heroImage}
                  alt="BELOVED - Professional Web Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Glassmorphism Skill Badges */}
            {/* Top Left: WordPress Expert */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:-left-6 z-20 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-[#0B3D91]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#0F172A]">✔ WordPress Expert</span>
            </motion.div>

            {/* Top Right: WooCommerce Specialist */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-6 -right-2 sm:-right-4 z-20 px-4 py-2.5 rounded-2xl bg-[#0B3D91] text-white shadow-xl flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-blue-200 font-semibold uppercase">WooCommerce</p>
                <p className="text-xs font-bold text-white">Conversion King</p>
              </div>
            </motion.div>

            {/* Middle Left: Floating 5.0 Rating */}
            <motion.div
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -left-6 sm:-left-10 z-20 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-2.5"
            >
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0F172A]">★★★★★ 5.0 Rating</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase">150+ Completed</p>
              </div>
            </motion.div>

            {/* Bottom Left Floating Badge: Fast Delivery & SEO */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -bottom-6 left-4 sm:left-6 z-20 px-4 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-md flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Fast Delivery & 90+ PageSpeed</span>
            </motion.div>

          </motion.div>

        </div>

        {/* Continuous Infinite Scrolling Roll Ticker / Marquee */}
        <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8 border-y border-slate-200 bg-white py-4 overflow-hidden shadow-sm">
          <div className="animate-marquee flex items-center gap-8">
            {[
              { icon: Sparkles, text: 'Full-Stack WordPress Lead', highlight: '90+ PageSpeed' },
              { icon: Layers, text: 'Multi-Platform Suite', highlight: 'Shopify • Wix • Squarespace • WooCommerce' },
              { icon: Zap, text: 'Fast Delivery & Turnarounds', highlight: '7-14 Days' },
              { icon: ShoppingBag, text: 'WooCommerce E-Commerce Specialist', highlight: 'High Conversion' },
              { icon: Globe, text: 'Global Business Development', highlight: '120+ Clients' },
              { icon: Award, text: 'Guaranteed 5.0 Rating', highlight: '150+ Sites Built' },
              { icon: Code, text: 'Custom Themes & Plugins', highlight: 'Clean Code' },
              { icon: Sparkles, text: 'Full-Stack WordPress Lead', highlight: '90+ PageSpeed' },
              { icon: Layers, text: 'Multi-Platform Suite', highlight: 'Shopify • Wix • Squarespace • WooCommerce' },
              { icon: Zap, text: 'Fast Delivery & Turnarounds', highlight: '7-14 Days' },
              { icon: ShoppingBag, text: 'WooCommerce E-Commerce Specialist', highlight: 'High Conversion' },
              { icon: Globe, text: 'Global Business Development', highlight: '120+ Clients' },
              { icon: Award, text: 'Guaranteed 5.0 Rating', highlight: '150+ Sites Built' },
              { icon: Code, text: 'Custom Themes & Plugins', highlight: 'Clean Code' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <item.icon className="w-4 h-4 text-[#0B3D91]" />
                <span className="text-xs font-extrabold text-[#0F172A] tracking-tight">{item.text}</span>
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0B3D91] border border-blue-100">
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Guaranteed Development Standards */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-center text-xs font-extrabold uppercase tracking-widest text-[#0B3D91] mb-6">
            Guaranteed Development Standards
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0B3D91]/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0F172A]">90+ PageSpeed Score</h4>
                  <p className="text-[11px] text-emerald-600 font-bold">Guaranteed Performance</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Lightning-fast load times optimized for Google Core Web Vitals and higher SEO rankings.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0B3D91]/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91]">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0F172A]">Custom Theme Engine</h4>
                  <p className="text-[11px] text-[#0B3D91] font-bold">Zero Bloat Code</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Handcrafted, lightweight code structure engineered without heavy, slow page builders.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0B3D91]/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91]">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0F172A]">High Conversion Sales</h4>
                  <p className="text-[11px] text-indigo-600 font-bold">WooCommerce Optimized</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Streamlined checkout experiences designed to boost conversion rates and repeat purchases.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0B3D91]/40 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0F172A]">100% Quality Guarantee</h4>
                  <p className="text-[11px] text-amber-600 font-bold">7-14 Days Delivery</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Rigorous multi-device testing, security hardening, and dedicated post-launch support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
