export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  videoUrl: string;
  deliverables: string[];
  caseStudyTitle: string;
  caseStudyExcerpt: string;
}

export interface ManifestoPrinciple {
  number: string;
  title: string;
  subtitle: string;
  content: string;
}

export interface InquiryFormState {
  name: string;
  email: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
}

export interface PerspectiveSubmission {
  id: string;
  text: string;
  timestamp: Date;
}
