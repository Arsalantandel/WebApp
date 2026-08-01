import React, { useState, useRef, useEffect } from 'react';
import { HERO_VIDEO_URL } from '../data/content';

interface HeroSectionProps {
  onSubmitPerspective: (perspectiveText: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSubmitPerspective }) => {
  const [perspective, setPerspective] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (perspective.trim()) {
      onSubmitPerspective(perspective.trim());
      setPerspective('');
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-16">
        <h1 className="font-display text-5xl sm:text-7xl md:text-[80px] text-white mb-12 tracking-tight leading-[1.1]">
          Know it then <em className="italic font-display font-normal">all</em>.
        </h1>

        {/* Perspective Input */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto liquid-glass rounded-full p-1.5 flex items-center shadow-2xl transition-all duration-300 focus-within:border-white/30 focus-within:bg-white/5"
        >
          <input
            type="text"
            value={perspective}
            onChange={(e) => setPerspective(e.target.value)}
            placeholder="Your perspective"
            className="bg-transparent border-none focus:outline-none focus:ring-0 text-white px-6 w-full placeholder:text-white/40 font-sans-custom text-base"
            aria-label="Your perspective"
          />
          <button
            type="submit"
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-95 active:scale-90 transition-transform shrink-0 cursor-pointer shadow-md"
            aria-label="Submit Perspective"
          >
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </form>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <a href="#approach" className="flex flex-col items-center gap-2">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </a>
      </div>
    </section>
  );
};
