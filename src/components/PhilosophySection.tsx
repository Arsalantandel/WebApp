import React from 'react';
import { PHILOSOPHY_VIDEO_URL } from '../data/content';

interface PhilosophySectionProps {
  onOpenManifesto: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onOpenManifesto }) => {
  return (
    <section id="philosophy" className="py-28 md:py-40 bg-black relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Main Section Heading */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-5xl sm:text-7xl md:text-[80px] text-white text-center md:text-left tracking-tight">
            Innovation <span className="text-white/40 italic font-display font-normal">x</span> Vision
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Left Media Canvas */}
          <div className="relative group rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              src={PHILOSOPHY_VIDEO_URL}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-white/10 pointer-events-none rounded-2xl"></div>
          </div>

          {/* Right Narrative Column */}
          <div className="space-y-12 md:space-y-16">
            {/* Core Principle 01 */}
            <div>
              <span className="text-xs font-semibold text-white/50 block mb-3 uppercase tracking-widest">
                01. THE CORE
              </span>
              <h4 className="font-display text-3xl md:text-4xl text-white italic mb-4">
                Uncompromising Quality
              </h4>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Studio Alpha operates on a frequency of absolute focus. We believe that the smallest detail is the foundation of the grandest experience.
              </p>
            </div>

            {/* Core Principle 02 */}
            <div>
              <span className="text-xs font-semibold text-white/50 block mb-3 uppercase tracking-widest">
                02. THE HORIZON
              </span>
              <h4 className="font-display text-3xl md:text-4xl text-white italic mb-4">
                Future Proofing
              </h4>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Our strategies don't just solve for today; they anticipate the tectonic shifts of tomorrow's digital landscape.
              </p>
            </div>

            {/* Read Manifesto Trigger */}
            <div>
              <button
                onClick={onOpenManifesto}
                className="inline-flex items-center gap-4 group cursor-pointer bg-transparent border-none text-left"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white group-hover:text-white/80 transition-colors">
                  Read the Manifesto
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
