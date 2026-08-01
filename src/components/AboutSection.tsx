import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="approach" className="bg-black py-28 md:py-40 relative overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="ambient-glow absolute top-0 left-0 w-full h-full opacity-50"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          {/* Label Column */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-6">
              About Us
            </p>
            <div className="w-24 h-px bg-white/20 mb-8"></div>
          </div>

          {/* Core Vision Headline */}
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl sm:text-6xl md:text-[80px] text-white leading-[1.1] tracking-tight">
              Pioneering <span className="italic font-display font-normal">ideas</span> that redefine the intersection of technology and human <span className="italic font-display font-normal">emotion</span>.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
