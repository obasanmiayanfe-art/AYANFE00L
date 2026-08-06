import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Eye, Star, Zap, Layers, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onOpenHireModal: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenHireModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [modalMode, setModalMode] = useState<'case-study' | 'live-preview' | null>(null);

  const categories = ['All', 'WordPress', 'WooCommerce', 'Shopify', 'Wix', 'Squarespace'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory || p.platform.includes(selectedCategory));

  const handleOpenModal = (project: PortfolioProject, mode: 'case-study' | 'live-preview') => {
    setActiveProject(project);
    setModalMode(mode);
  };

  const handleCloseModal = () => {
    setActiveProject(null);
    setModalMode(null);
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>Featured Case Studies</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            High-Converting <span className="text-[#0B3D91]">Client Projects</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore recent websites delivered for global brands, local businesses, and e-commerce stores engineered for speed and conversion.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-500 font-bold mr-2">
            <Filter className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#0B3D91] text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#0F172A] border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-[#0B3D91]/40 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview & Category Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0B3D91] font-extrabold text-xs border border-slate-200 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Top Right Live Quick Action */}
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => handleOpenModal(project, 'live-preview')}
                      className="p-2.5 rounded-xl bg-white/90 hover:bg-[#0B3D91] hover:text-white text-slate-700 backdrop-blur-md transition-colors shadow-md"
                      title="Visit Project Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Client Info Overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">
                      Client: {project.client}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#0B3D91] transition-colors font-display">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Metrics Pills */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-center">
                        <p className="text-[10px] text-slate-500 font-bold uppercase truncate">{m.label}</p>
                        <p className="text-xs font-black text-[#0B3D91] font-display">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technology.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 border border-slate-200">
                        {tech}
                      </span>
                    ))}
                    {project.technology.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-blue-50 text-[10px] font-extrabold text-[#0B3D91] border border-blue-100">
                        +{project.technology.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3 mt-4">
                <button
                  onClick={() => handleOpenModal(project, 'live-preview')}
                  className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] border border-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#0B3D91]" />
                  <span>Visit Project</span>
                </button>

                <button
                  onClick={() => handleOpenModal(project, 'case-study')}
                  className="w-full py-2.5 rounded-full bg-[#0B3D91] hover:bg-[#0F172A] text-white text-xs font-bold shadow-md shadow-blue-900/15 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Case Study</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Guarantee Footer */}
        <div className="mt-16 text-center">
          <p className="text-xs font-bold text-slate-500">
            All projects are engineered with <span className="text-[#0F172A]">100% WCAG accessibility, 90+ PageSpeed score guarantee</span>, and custom mobile layouts.
          </p>
        </div>

      </div>

      {/* Case Study & Live Preview Modal */}
      <ProjectModal
        project={activeProject}
        mode={modalMode}
        onClose={handleCloseModal}
        onOpenHireModal={onOpenHireModal}
      />
    </section>
  );
};
