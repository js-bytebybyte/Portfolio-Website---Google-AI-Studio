export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Proficient' | 'Expert';

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}

export interface ExperienceEvent{
  id: string;
  date: string;
  role: string;
  companyName: string;
  tasks: string;
}