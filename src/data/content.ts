import { ServiceItem, ManifestoPrinciple } from '../types';

export const HERO_VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";
export const FEATURED_VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4";
export const PHILOSOPHY_VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";
export const STRATEGY_VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
export const CRAFT_VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'strategy',
    title: 'Strategy',
    subtitle: 'Algorithmic positioning & narrative architecture',
    description: 'Defining the roadmap for high-impact brand evolution. Market analysis, product positioning, and ecosystem design.',
    iconName: 'insights',
    videoUrl: STRATEGY_VIDEO_URL,
    deliverables: [
      'Brand Narrative Architecture',
      'Digital Ecosystem Mapping',
      'Future-Proof Product Positioning',
      'Market Frequency Analysis',
      'Executive Vision Alignment'
    ],
    caseStudyTitle: 'Project Horizon: Redefining High-Luxury Tech Architecture',
    caseStudyExcerpt: 'How Studio Alpha structured the positioning for a $500M Autonomous AI Platform, transforming complex mathematical models into an emotive, aspirational brand identity.'
  },
  {
    id: 'craft',
    title: 'Craft',
    subtitle: 'Artisanal digital production & atmospheric design',
    description: 'Artisanal digital production. UX/UI design, interactive development, and atmospheric storytelling at scale.',
    iconName: 'auto_fix_high',
    videoUrl: CRAFT_VIDEO_URL,
    deliverables: [
      'Liquid Glass Interface Systems',
      'WebGL & Motion Performance Engineering',
      'Bespoke Typography & Layout Mechanics',
      'Spatial & Audio-Visual Storytelling',
      'Full-Stack Ultra-Low Latency Runtime'
    ],
    caseStudyTitle: 'Aetheria: Liquid UI & Kinetic Motion Canvas',
    caseStudyExcerpt: 'Constructing an immersive interactive canvas that responds dynamically to user cursor velocity, emotion cues, and atmospheric soundscapes.'
  },
  {
    id: 'architecture',
    title: 'Spatial Architecture',
    subtitle: '3D Environments & Immersive Web Standards',
    description: 'Sculpting virtual spaces and dimensional brand touchpoints that transcend flat two-dimensional viewports.',
    iconName: 'architecture',
    videoUrl: FEATURED_VIDEO_URL,
    deliverables: [
      'Interactive 3D Environments',
      'Real-Time Raytraced Lighting Models',
      'Spatial Computing & AR Frameworks',
      'Ultra-HD Shader Optimization'
    ],
    caseStudyTitle: 'Monolith: Virtual Exhibition for Haute Horlogerie',
    caseStudyExcerpt: 'Creating a web-native 3D gallery where visitors inspect micro-mechanical watch movements with sub-millimeter precision.'
  },
  {
    id: 'sound',
    title: 'Atmospheric Audio',
    subtitle: 'Generative Soundscapes & Acoustic Identity',
    description: 'Synthesizing organic and synthesized auditory feedback to ground users in a state of hyper-focused immersion.',
    iconName: 'graphic_eq',
    videoUrl: HERO_VIDEO_URL,
    deliverables: [
      'Generative Ambient Sound Engines',
      'Micro-UI Acoustic Haptics',
      'Brand Acoustic Fingerprinting',
      'Adaptive Audio Frequency Curves'
    ],
    caseStudyTitle: 'Obsidian Sonics: Acoustic Feedback Engine',
    caseStudyExcerpt: 'Engineering a web audio synthesis node that transforms UI state transitions into subtle, soothing sub-bass acoustic notes.'
  }
];

export const MANIFESTO_PRINCIPLES: ManifestoPrinciple[] = [
  {
    number: '01',
    title: 'Uncompromising Quality',
    subtitle: 'Absolute focus on sub-pixel precision',
    content: 'Studio Alpha operates on a frequency of absolute focus. We believe that the smallest detail is the foundation of the grandest experience. Every optical baseline, every margin, and every micro-transition must have mathematical harmony.'
  },
  {
    number: '02',
    title: 'Future Proofing',
    subtitle: 'Anticipating tomorrow’s paradigm shifts',
    content: 'Our strategies don’t just solve for today; they anticipate the tectonic shifts of tomorrow’s digital landscape. We build systems designed to withstand technological decay and remain relevant for decades.'
  },
  {
    number: '03',
    title: 'Radical Restraint',
    subtitle: 'Power through structural silence',
    content: 'True luxury lies in what is omitted. By purging visual noise, artificial gradients, and unneeded ornament, we allow core narrative intelligence and pure form to resonate without distraction.'
  },
  {
    number: '04',
    title: 'Emotional Resonance',
    subtitle: 'Bridging silicon and human sentiment',
    content: 'Technology without emotion is cold utility. We weave narrative depth, kinetic warmth, and atmospheric light into every digital fabric to forge deep instinctual connections with the user.'
  },
  {
    number: '05',
    title: 'Obsidian Liquid Glass',
    subtitle: 'Depth through subtle luminosity',
    content: 'We discard heavy drop shadows and harsh borders in favor of low-opacity glass, ambient back-light glows, and depth-based spatial layering that floating naturally over dark void space.'
  }
];
