import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black w-full py-28 md:py-36 border-t border-white/10 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Brand Column */}
        <div className="text-center md:text-left">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-display text-4xl sm:text-5xl text-white tracking-tight hover:opacity-80 transition-opacity"
          >
            Arslan Tandel
          </a>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-xs leading-relaxed">
            Founder & Designer of Studio Alpha, a minimalist design studio focused on creating obsidian-inspired digital experiences.
          </p>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8 md:gap-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Studio Alpha. ALL RIGHTS RESERVED.
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
