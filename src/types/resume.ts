export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  socialLinks: SocialLinks;
  interests: string[];
  learning: string[];
  skills: Array<{
    category: string;
    items: string[];
  }>;
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

export interface ProjectsProps {
  projects: Project[];
}

export interface SkillsProps {
  skills: Skill[];
}

export interface AboutProps {
  interests: string[];
  learning: string[];
}

export interface HeaderProps {
  data: Pick<ResumeData, 'name' | 'title' | 'bio' | 'location'>;
}

export interface DockProps {
  socialLinks: SocialLinks;
  email: string;
}