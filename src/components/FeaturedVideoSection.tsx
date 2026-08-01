import React from 'react';
import { FEATURED_VIDEO_URL } from '../data/content';

interface FeaturedVideoSectionProps {
  onExploreMore: () => void;
}

export const FeaturedVideoSection: React.FC<FeaturedVideoSectionProps> = ({ onExploreMore }) => {
  return (
    <section className="relative w-full h-[650px] md:h-[880px] overflow-hidden">
      {/* Background Featured Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src={FEATURED_VIDEO_URL}
        className="w-full h-full object-cover"
      />

      {/* Floating Liquid Glass Overlay Card */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 flex justify-center z-10">
        <div className="liquid-glass w-full max-w-[1280px] p-8 md:p-14 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 backdrop-blur-3xl bg-black/40 border-white/15 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
              Our Approach
            </h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              We look beyond the visible, weaving narrative intelligence into every digital fabric. A synthesis of meticulous craft and radical foresight.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="liquid-glass px-8 py-4 rounded-full text-white border-white/20 hover:bg-white/10 transition-all flex items-center gap-3 shrink-0 cursor-pointer group hover:scale-105 active:scale-95"
          >
            <span className="text-xs font-semibold uppercase tracking-widest">
              Explore More
            </span>
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              open_in_new
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
