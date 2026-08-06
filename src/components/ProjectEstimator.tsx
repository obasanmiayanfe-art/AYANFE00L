import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, Clock, Sparkles, ArrowRight, DollarSign, ShieldCheck } from 'lucide-react';
import { ESTIMATOR_PLATFORMS, ESTIMATOR_ADDONS } from '../data/portfolioData';

interface ProjectEstimatorProps {
  onEstimateSubmitted: (platform: string, addons: string[], price: number, timeframe: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onEstimateSubmitted }) => {
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>('wp');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['seo', 'speed']);

  const currentPlatform = ESTIMATOR_PLATFORMS.find(p => p.id === selectedPlatformId) || ESTIMATOR_PLATFORMS[0];

  const toggleAddon = (addonId: string) => {
    if (selectedAddonIds.includes(addonId)) {
      setSelectedAddonIds(selectedAddonIds.filter(id => id !== addonId));
    } else {
      setSelectedAddonIds([...selectedAddonIds, addonId]);
    }
  };

  const totalPrice = currentPlatform.basePrice + selectedAddonIds.reduce((sum, addonId) => {
    const found = ESTIMATOR_ADDONS.find(a => a.id === addonId);
    return sum + (found ? found.price : 0);
  }, 0);

  const selectedAddonNames = selectedAddonIds.map(id => {
    const found = ESTIMATOR_ADDONS.find(a => a.id === id);
    return found ? found.name : '';
  }).filter(Boolean);

  const handleSubmitEstimate = () => {
    onEstimateSubmitted(
      currentPlatform.name,
      selectedAddonNames,
      totalPrice,
      currentPlatform.time
    );
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>Interactive Estimator</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            Calculate Your <span className="text-[#0B3D91]">Project Budget</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Select your primary website platform and desired growth add-ons to get an instant cost and timeline estimate.
          </p>
        </div>

        {/* Estimator Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Select Platform */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0B3D91] border border-blue-100 flex items-center justify-center text-[10px] font-black">1</span>
                  <span>Select Primary Website Platform</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ESTIMATOR_PLATFORMS.map((plat) => {
                    const isSelected = plat.id === selectedPlatformId;
                    return (
                      <button
                        key={plat.id}
                        type="button"
                        onClick={() => setSelectedPlatformId(plat.id)}
                        className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-blue-50/80 border-[#0B3D91] text-[#0F172A] shadow-md'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold font-display">{plat.name}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#0B3D91]" />}
                        </div>
                        <div className="flex items-center justify-between mt-3 text-xs">
                          <span className="text-slate-500 font-semibold">{plat.time}</span>
                          <span className="font-black text-[#0B3D91]">${plat.basePrice}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Add-ons */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0B3D91] border border-blue-100 flex items-center justify-center text-[10px] font-black">2</span>
                  <span>Select Growth & Performance Add-ons</span>
                </label>
                <div className="space-y-2.5">
                  {ESTIMATOR_ADDONS.map((addon) => {
                    const isChecked = selectedAddonIds.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-full p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                          isChecked
                            ? 'bg-blue-50/60 border-[#0B3D91] text-[#0F172A]'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                            isChecked ? 'bg-[#0B3D91] border-[#0B3D91] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-xs sm:text-sm font-bold">{addon.name}</span>
                        </div>
                        <span className="text-xs font-black text-[#0B3D91]">+${addon.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6 lg:sticky lg:top-28 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-extrabold uppercase text-slate-400">Estimated Investment</p>
                  <p className="text-3xl font-black text-[#0F172A] font-display mt-1">${totalPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold uppercase text-slate-400">Estimated Timeline</p>
                  <p className="text-sm font-black text-[#0B3D91] flex items-center justify-end gap-1 mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentPlatform.time}</span>
                  </p>
                </div>
              </div>

              {/* Included Items List */}
              <div className="space-y-2 text-xs">
                <p className="font-extrabold text-slate-400 uppercase tracking-wider text-[10px]">Selected Scope:</p>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 space-y-1.5 shadow-sm">
                  <p className="font-bold text-[#0F172A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D91]" />
                    <span>{currentPlatform.name}</span>
                  </p>
                  {selectedAddonNames.map((name, i) => (
                    <p key={i} className="text-slate-600 font-semibold flex items-center gap-1.5 pl-2">
                      <span>+ {name}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-[11px] text-slate-600 space-y-1">
                <p className="font-bold text-[#0B3D91] flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Guaranteed Standards</span>
                </p>
                <p className="font-medium">Includes 100% Mobile Responsive Layouts, 30-Day Free Technical Support, and PageSpeed Optimization.</p>
              </div>

              <button
                onClick={handleSubmitEstimate}
                className="w-full py-4 rounded-full bg-[#0B3D91] text-white font-bold text-sm shadow-lg shadow-blue-900/20 hover:bg-[#0F172A] transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-sky-200" />
                <span>Submit Scope Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
