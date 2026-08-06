import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, Star, Zap, Code, Layout, ShieldCheck, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  mode: 'case-study' | 'live-preview' | null;
  onClose: () => void;
  onOpenHireModal: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  mode,
  onClose,
  onOpenHireModal
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'results'>('overview');

  if (!project || !mode) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-900 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-[#0B3D91] border border-blue-100">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-[#0F172A] font-display truncate">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-[#0F172A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content - Case Study Mode */}
          {mode === 'case-study' && (
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
              
              {/* Hero Image & Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 rounded-2xl overflow-hidden border border-slate-200 relative aspect-video shadow-sm">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#0B3D91] border border-slate-200 shadow-sm">
                    Client: {project.client}
                  </div>
                </div>

                <div className="md:col-span-5 space-y-3">
                  <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Key Impact Metrics</p>
                  <div className="grid grid-cols-1 gap-3">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-600">{metric.label}</span>
                        <span className="text-lg font-black text-[#0B3D91] font-display">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-200 gap-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-3 text-sm font-bold border-b-2 transition-colors px-2 ${
                    activeTab === 'overview'
                      ? 'border-[#0B3D91] text-[#0B3D91]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Project Overview
                </button>
                <button
                  onClick={() => setActiveTab('challenge')}
                  className={`pb-3 text-sm font-bold border-b-2 transition-colors px-2 ${
                    activeTab === 'challenge'
                      ? 'border-[#0B3D91] text-[#0B3D91]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Challenge & Solution
                </button>
                <button
                  onClick={() => setActiveTab('results')}
                  className={`pb-3 text-sm font-bold border-b-2 transition-colors px-2 ${
                    activeTab === 'results'
                      ? 'border-[#0B3D91] text-[#0B3D91]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Deliverables & Results
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                  <p className="text-base text-slate-700 font-medium">{project.fullDescription}</p>
                  <div className="pt-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technology.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'challenge' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-rose-50 border border-rose-100 space-y-2">
                    <h4 className="text-sm font-bold text-rose-700 flex items-center gap-2">
                      <span>⚠️ The Business Challenge</span>
                    </h4>
                    <p className="text-xs text-rose-950/80 leading-relaxed font-medium">{project.challenge}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-2">
                    <h4 className="text-sm font-bold text-emerald-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>The Engineering Solution</span>
                    </h4>
                    <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">{project.solution}</p>
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Verified Client Results</h4>
                  <div className="space-y-2">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-[#0B3D91] shrink-0">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-slate-700">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Modal Content - Live Preview Simulated Mode */}
          {mode === 'live-preview' && (
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B3D91] mx-auto">
                <Layout className="w-8 h-8 text-[#0B3D91]" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h4 className="text-2xl font-black text-[#0F172A] font-display">{project.title}</h4>
                <p className="text-xs text-slate-600 font-medium">
                  Interactive Live Showcase for {project.client}. Engineered on {project.platform} with 90+ PageSpeed score.
                </p>
              </div>

              {/* Mock Browser Frame */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-xl text-left">
                <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-3 py-1 text-[11px] text-slate-600 font-mono flex items-center justify-between border border-slate-200">
                    <span>https://{project.id}.beloved-showcase.com</span>
                    <span className="text-emerald-600 font-bold">🔒 SSL Secure</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-80 object-cover object-top rounded-lg border border-slate-200 shadow-inner"
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-xl mx-auto flex items-center justify-between font-medium">
                <span>Want a website built to this exact standard?</span>
                <span className="font-extrabold text-[#0B3D91]">7-14 Day Turnaround</span>
              </div>
            </div>
          )}

          {/* Footer Bar */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="text-xs text-slate-500 font-medium">
              Built by <strong className="text-[#0F172A]">BELOVED</strong> • WordPress Specialist
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenHireModal();
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-[#0B3D91] text-white font-bold text-xs shadow-md hover:bg-[#0F172A] transition-all flex items-center justify-center gap-2"
              >
                <span>Hire BELOVED for a Similar Site</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
