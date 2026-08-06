import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenHireModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'portfolio', 'skills', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/70 backdrop-blur-sm py-4 border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B3D91] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-900/15">
              <span className="text-xl font-extrabold tracking-wider text-white">
                B
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#0F172A] font-display">
                {BRAND_INFO.name}
              </span>
              <span className="text-[10px] font-bold text-[#0B3D91] tracking-wider uppercase -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                WordPress Specialist
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-[#0B3D91] hover:bg-slate-200/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navActiveTab"
                      className="absolute inset-0 bg-[#0B3D91] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenHireModal}
              className="relative group overflow-hidden rounded-full px-6 py-2.5 bg-[#0B3D91] text-white font-bold text-sm shadow-lg shadow-blue-900/20 hover:bg-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-blue-200 animate-spin-slow" />
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenHireModal}
              className="px-4 py-2 rounded-full bg-[#0B3D91] text-white font-bold text-xs shadow-md shadow-blue-900/15"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-[#0B3D91] border border-slate-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/98 border-b border-slate-200 backdrop-blur-xl px-4 pt-3 pb-6 mt-2 shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#0B3D91] text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#0B3D91]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHireModal();
                  }}
                  className="w-full py-3 rounded-full bg-[#0B3D91] text-white font-bold text-center shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Hire BELOVED Now</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Available for New Projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
