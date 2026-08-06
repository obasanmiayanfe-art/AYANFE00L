import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  ShoppingBag,
  RefreshCw,
  Store,
  Layout,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-6 h-6 text-[#0B3D91]" />;
    case 'ShoppingBag':
      return <ShoppingBag className="w-6 h-6 text-[#0B3D91]" />;
    case 'RefreshCw':
      return <RefreshCw className="w-6 h-6 text-[#0B3D91]" />;
    case 'Store':
      return <Store className="w-6 h-6 text-[#0B3D91]" />;
    case 'Layout':
      return <Layout className="w-6 h-6 text-[#0B3D91]" />;
    case 'Layers':
      return <Layers className="w-6 h-6 text-[#0B3D91]" />;
    default:
      return <Code2 className="w-6 h-6 text-[#0B3D91]" />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-blue-100/40 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>Specialized Development Services</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            High-Performance <span className="text-[#0B3D91]">Web Solutions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Strategic web development solutions that strengthen your brand, improve website performance, and turn visitors into loyal customers.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#0B3D91]/50 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Card Glow */}
              <div className="absolute -top-24 -right-24 w-40 h-40 bg-blue-100/40 rounded-full blur-2xl group-hover:bg-blue-200/50 transition-all duration-500" />

              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0B3D91] transition-all duration-300 [&_svg]:group-hover:text-white">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-blue-50 text-[#0B3D91] border border-blue-100">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#0B3D91] transition-colors font-display">
                  {service.title}
                </h3>
                <p className="text-xs font-bold text-[#0B3D91] mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Feature Checkmarks */}
                <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Price & CTA Trigger */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">Starting From</span>
                  <p className="text-lg font-black text-[#0F172A] font-display">{service.startingPrice}</p>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="px-5 py-2.5 rounded-full bg-[#0B3D91] hover:bg-[#0F172A] text-white text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-blue-900/15"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Project Box Notice */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#0F172A] font-display">Need a Custom Web Application or Enterprise Setup?</h4>
              <p className="text-xs text-slate-600 font-medium">I handle complex custom REST API integrations, headless WordPress, custom plugins, and enterprise migrations.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('Custom Enterprise Scope')}
            className="px-6 py-3 rounded-full bg-[#0B3D91] text-white font-bold text-xs whitespace-nowrap shadow-lg shadow-blue-900/20 hover:bg-[#0F172A] transition-all hover:-translate-y-0.5"
          >
            Discuss Custom Scope
          </button>
        </div>

      </div>
    </section>
  );
};
