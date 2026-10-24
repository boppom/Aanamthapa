export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Spatial UI' | 'Design Systems' | 'Creative Direction' | 'Full-Stack';
  year: string;
  client: string;
  role: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  externalUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  focus: string;
  skills: {
    name: string;
    level: string;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string;
}
