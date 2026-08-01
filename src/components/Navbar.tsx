import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenConnect: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect, isAudioPlaying, onToggleAudio }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pb-2 transition-all duration-500 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-[1280px] rounded-full liquid-glass shadow-2xl flex justify-between items-center px-6 md:px-10 py-3.5 transition-all duration-500 ${
          isScrolled ? 'scale-[0.98] py-3 bg-black/60 backdrop-blur-2xl border-white/15' : ''
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="material-symbols-outlined text-white scale-110 fill-1 transition-transform group-hover:rotate-45 duration-700">
            language
          </span>
          <span className="font-display text-2xl md:text-3xl text-white tracking-tight leading-none">
            Studio Alpha
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#approach"
            onClick={(e) => scrollToSection(e, 'approach')}
            className="text-white/70 hover:text-white transition-colors text-base font-normal tracking-wide"
          >
            Our Approach
          </a>
          <a
            href="#philosophy"
            onClick={(e) => scrollToSection(e, 'philosophy')}
            className="text-white/70 hover:text-white transition-colors text-base font-normal tracking-wide"
          >
            Philosophy
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="text-white/70 hover:text-white transition-colors text-base font-normal tracking-wide"
          >
            Services
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Audio Ambient Toggle */}
          <button
            onClick={onToggleAudio}
            title={isAudioPlaying ? "Mute Ambient Soundscape" : "Play Ambient Soundscape"}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Toggle Sound"
          >
            <span className="material-symbols-outlined text-sm">
              {isAudioPlaying ? 'volume_up' : 'volume_off'}
            </span>
          </button>

          {/* Connect Button */}
          <button
            onClick={onOpenConnect}
            className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-95 active:scale-90 transition-transform cursor-pointer shadow-lg hover:bg-white/90"
          >
            Connect
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-lg">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-0 top-20 bg-black/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center gap-8 md:hidden p-8 animate-fadeIn">
          <a
            href="#approach"
            onClick={(e) => scrollToSection(e, 'approach')}
            className="font-display text-4xl text-white hover:text-white/80"
          >
            Our Approach
          </a>
          <a
            href="#philosophy"
            onClick={(e) => scrollToSection(e, 'philosophy')}
            className="font-display text-4xl text-white hover:text-white/80"
          >
            Philosophy
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="font-display text-4xl text-white hover:text-white/80"
          >
            Services
          </a>
          <div className="w-16 h-px bg-white/20 my-2"></div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConnect();
            }}
            className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-widest"
          >
            Connect With Us
          </button>
        </div>
      )}
    </header>
  );
};
