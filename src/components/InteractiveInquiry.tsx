import React, { useState } from 'react';

interface InteractiveInquiryProps {
  onOpenConnectWithPreload: (selectedServices: string[]) => void;
}

export const InteractiveInquiry: React.FC<InteractiveInquiryProps> = ({ onOpenConnectWithPreload }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Strategy', 'Craft']);
  const [budgetTier, setBudgetTier] = useState<string>('$50k – $100k');
  const [timeline, setTimeline] = useState<string>('6-8 Weeks');

  const capabilities = [
    { id: 'Strategy', label: 'Strategy & Brand Narrative' },
    { id: 'Craft', label: 'Interactive Craft & Liquid UI' },
    { id: 'Spatial Architecture', label: 'Spatial Architecture (3D/WebGL)' },
    { id: 'Atmospheric Audio', label: 'Atmospheric Audio Synthesis' }
  ];

  const budgetTiers = ['$25k – $50k', '$50k – $100k', '$100k – $250k', '$250k+'];
  const timelines = ['Rapid Sprint (3 Wks)', '6-8 Weeks', 'Quarterly Engagement', 'Long-term Retainer'];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  return (
    <section className="py-28 md:py-36 bg-black relative border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="liquid-glass rounded-3xl p-8 md:p-16 border-white/15 bg-black/60 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow background */}
          <div className="ambient-glow absolute -top-20 -left-20 w-96 h-96 opacity-30 pointer-events-none"></div>

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] block mb-3">
              Matrix Dossier
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Configure Your <em className="italic font-display font-normal">Engagement</em>
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Select desired capabilities and timelines to generate a custom project briefing for Studio Alpha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Capability Selection */}
            <div className="space-y-4 md:col-span-1">
              <label className="text-xs font-semibold text-white/60 uppercase tracking-widest block">
                1. Select Capabilities
              </label>
              <div className="space-y-2">
                {capabilities.map((cap) => {
                  const isSelected = selectedServices.includes(cap.id);
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => toggleService(cap.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-300 flex justify-between items-center cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black border-white font-medium shadow-md'
                          : 'bg-white/5 text-white/80 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <span>{cap.label}</span>
                      <span className="material-symbols-outlined text-sm">
                        {isSelected ? 'check_circle' : 'add'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Tier */}
            <div className="space-y-4 md:col-span-1">
              <label className="text-xs font-semibold text-white/60 uppercase tracking-widest block">
                2. Target Budget Tier
              </label>
              <div className="space-y-2">
                {budgetTiers.map((tier) => {
                  const isSelected = budgetTier === tier;
                  return (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setBudgetTier(tier)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-300 flex justify-between items-center cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black border-white font-medium shadow-md'
                          : 'bg-white/5 text-white/80 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <span>{tier}</span>
                      {isSelected && (
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4 md:col-span-1">
              <label className="text-xs font-semibold text-white/60 uppercase tracking-widest block">
                3. Timeline Expectation
              </label>
              <div className="space-y-2">
                {timelines.map((time) => {
                  const isSelected = timeline === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setTimeline(time)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-300 flex justify-between items-center cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black border-white font-medium shadow-md'
                          : 'bg-white/5 text-white/80 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <span>{time}</span>
                      {isSelected && (
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dossier Summary Banner */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Dossier Summary</div>
              <div className="text-white font-display text-xl">
                {selectedServices.join(', ')} • {budgetTier} • {timeline}
              </div>
            </div>
            <button
              onClick={() => onOpenConnectWithPreload(selectedServices)}
              className="bg-white text-black px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform cursor-pointer shrink-0 shadow-lg"
            >
              Request Formal Dossier →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
