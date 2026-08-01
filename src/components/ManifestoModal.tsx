import React from 'react';
import { MANIFESTO_PRINCIPLES } from '../data/content';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConnect: () => void;
}

export const ManifestoModal: React.FC<ManifestoModalProps> = ({ isOpen, onClose, onOpenConnect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-3xl animate-fadeIn">
      <div className="liquid-glass-heavy w-full max-w-4xl rounded-3xl p-6 md:p-14 border-white/20 relative max-h-[90vh] overflow-y-auto shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          aria-label="Close Manifesto"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Header */}
        <div className="mb-12 border-b border-white/15 pb-8">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] block mb-2">
            The Codex
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white mb-4">
            The Studio Alpha <em className="italic font-display font-normal">Manifesto</em>
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            Tenets guiding our pursuit of radical minimalist design, algorithmic narrative intelligence, and uncompromising aesthetic craft.
          </p>
        </div>

        {/* Principles List */}
        <div className="space-y-12">
          {MANIFESTO_PRINCIPLES.map((principle) => (
            <div key={principle.number} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border-b border-white/10 pb-8">
              <div className="md:col-span-3">
                <span className="font-display text-4xl text-white/30 block">
                  {principle.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  {principle.subtitle}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-3xl text-white mb-3 italic">
                  {principle.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {principle.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-xs text-white/50 uppercase tracking-widest">
            PUBLISHED BY STUDIO ALPHA PARTNERS
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenConnect();
            }}
            className="bg-white text-black px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            Initiate Collaboration →
          </button>
        </div>
      </div>
    </div>
  );
};
