export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
  category: 'web' | 'hardware' | 'fullstack';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}
