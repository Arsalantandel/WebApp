import React from 'react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConnectWithPreload: (selectedServices: string[]) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConnectWithPreload
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-fadeIn">
      <div className="liquid-glass-heavy w-full max-w-3xl rounded-3xl p-6 sm:p-10 border-white/20 relative max-h-[90vh] overflow-y-auto shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-20"
          aria-label="Close Service Spec"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Video Preview */}
        <div className="relative rounded-2xl overflow-hidden aspect-video mb-8 border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={service.videoUrl}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-[0.2em] block mb-1">
              Capability Breakdown
            </span>
            <h3 className="font-display text-4xl text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-6 mb-8">
          <p className="text-white/80 text-lg leading-relaxed font-sans-custom">
            {service.description}
          </p>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
              Core Deliverables & Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="material-symbols-outlined text-sm text-white">check_circle</span>
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Case Study Excerpt */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-6">
            <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest block mb-2">
              Featured Case Study
            </span>
            <h5 className="font-display text-2xl text-white mb-2 italic">
              {service.caseStudyTitle}
            </h5>
            <p className="text-white/70 text-sm leading-relaxed">
              {service.caseStudyExcerpt}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4 border-t border-white/15">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConnectWithPreload([service.title]);
            }}
            className="bg-white text-black px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-lg"
          >
            Engage {service.title} Capability →
          </button>
        </div>
      </div>
    </div>
  );
};
