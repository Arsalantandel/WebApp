import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-28 md:py-40 bg-[#0e0e0e] relative border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] block mb-3">
            Capabilities
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-[80px] text-white">
            Service <span className="italic font-display font-normal">Matrix</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative aspect-video md:aspect-[16/10] liquid-glass rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/30 border-white/10"
            >
              {/* Hover Video Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={service.videoUrl}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Card Content */}
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-between z-10">
                {/* Header Icon */}
                <div className="flex justify-between items-start">
                  <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <span className="material-symbols-outlined">{service.iconName}</span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                    Explore →
                  </span>
                </div>

                {/* Body Details */}
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base line-clamp-2 md:opacity-80 group-hover:opacity-100 transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
