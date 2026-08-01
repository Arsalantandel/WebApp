import React from 'react';

interface PerspectiveToastProps {
  perspectiveText: string | null;
  onClose: () => void;
}

export const PerspectiveToast: React.FC<PerspectiveToastProps> = ({ perspectiveText, onClose }) => {
  if (!perspectiveText) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl animate-fadeIn">
      <div className="liquid-glass-heavy w-full max-w-md rounded-3xl p-8 border-white/20 text-center relative shadow-2xl text-white space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>

        <div className="w-14 h-14 rounded-full bg-white text-black mx-auto flex items-center justify-center shadow-lg">
          <span className="material-symbols-outlined text-2xl">auto_awesome</span>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-white/50 block mb-2">
            Perspective Recorded
          </span>
          <h3 className="font-display text-2xl text-white mb-3">
            "<em>{perspectiveText}</em>"
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Your vision has been recorded in Studio Alpha's narrative index. Thank you for shaping our collective intelligence.
          </p>
        </div>

        <button
          onClick={onClose}
          className="bg-white text-black px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform cursor-pointer"
        >
          Continue Exploring
        </button>
      </div>
    </div>
  );
};
