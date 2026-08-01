import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveInquiry } from './components/InteractiveInquiry';
import { Footer } from './components/Footer';
import { ConnectModal } from './components/ConnectModal';
import { ManifestoModal } from './components/ManifestoModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PerspectiveToast } from './components/PerspectiveToast';
import { ServiceItem } from './types';
import { SERVICES_DATA } from './data/content';

export default function App() {
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [manifestoModalOpen, setManifestoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [perspectiveText, setPerspectiveText] = useState<string | null>(null);
  const [connectPreloadServices, setConnectPreloadServices] = useState<string[]>([]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Web Audio Synth for Ambient Soundscape
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
        setTimeout(() => {
          setIsAudioPlaying(false);
        }, 1000);
      } else {
        setIsAudioPlaying(false);
      }
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContextClass();
        }
        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }

        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        // Soft, deep ambient drone (A = 108Hz / 216Hz sub harmonic)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(108, audioCtxRef.current.currentTime);

        gain.gain.setValueAtTime(0.0001, audioCtxRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.03, audioCtxRef.current.currentTime + 2); // Very subtle background drone

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        oscRef.current = osc;
        gainRef.current = gain;

        setIsAudioPlaying(true);
      } catch (err) {
        console.warn("Web Audio API not supported or blocked by browser policy", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, []);

  const handleOpenConnectWithPreload = (services: string[]) => {
    setConnectPreloadServices(services);
    setConnectModalOpen(true);
  };

  const handleExploreMore = () => {
    // Open the first or featured service detail
    setSelectedService(SERVICES_DATA[0]);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans-custom">
      {/* Top Fixed Liquid Navigation */}
      <Navbar
        onOpenConnect={() => {
          setConnectPreloadServices([]);
          setConnectModalOpen(true);
        }}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={toggleAudio}
      />

      {/* SECTION 1: HERO */}
      <HeroSection
        onSubmitPerspective={(text) => setPerspectiveText(text)}
      />

      {/* SECTION 2: ABOUT */}
      <AboutSection />

      {/* SECTION 3: FEATURED VIDEO */}
      <FeaturedVideoSection
        onExploreMore={handleExploreMore}
      />

      {/* SECTION 4: PHILOSOPHY */}
      <PhilosophySection
        onOpenManifesto={() => setManifestoModalOpen(true)}
      />

      {/* SECTION 5: SERVICES BENTO MATRIX */}
      <ServicesSection
        onSelectService={(srv) => setSelectedService(srv)}
      />

      {/* SECTION 6: INTERACTIVE DOSSIER & INQUIRY */}
      <InteractiveInquiry
        onOpenConnectWithPreload={handleOpenConnectWithPreload}
      />

      {/* FOOTER */}
      <Footer />

      {/* OVERLAY MODALS */}
      <ConnectModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
        initialServices={connectPreloadServices}
      />

      <ManifestoModal
        isOpen={manifestoModalOpen}
        onClose={() => setManifestoModalOpen(false)}
        onOpenConnect={() => {
          setConnectPreloadServices([]);
          setConnectModalOpen(true);
        }}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConnectWithPreload={handleOpenConnectWithPreload}
      />

      <PerspectiveToast
        perspectiveText={perspectiveText}
        onClose={() => setPerspectiveText(null)}
      />
    </div>
  );
}
