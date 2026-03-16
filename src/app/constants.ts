import { Project, SkillCategory, SocialLink, ExperienceEvent } from './types';
// import { Github, Twitter, Linkedin } from 'lucide';

export const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  greeting: "Hello, I'm Jolande.",
  headline: "Turning complex data into usable digital products.",
  subtext: "Junior Web Developer (Angular) with a 6-year background in Corporate Finance. Specializing in data dashboards, internal tools, and structured problem solving.",
};

export const PROJECTS: Project[] = [
  {
    id: 'MDR-001',
    title: 'Angular Data Dashboard',
    category: 'Personal Project',
    description: 'A reusable Angular + TypeScript dashboard focused on data visualization and admin/analytics use cases. Supports modular UI components and light/dark theming.',
    problem: 'Data teams often struggle with inconsistent UI patterns for complex internal metrics.',
    solution: 'Implemented a scalable layout pattern with an emphasis on clean UX and real-world dashboard workflows.',
    impact: 'Ready-to-deploy architecture for high-density data environments.',
    stack: ['Angular', 'TypeScript', 'TailwindCSS'],
    image: 'https://picsum.photos/800/600?random=1',
    link: '#',
    github: 'https://github.com/js-bytebybyte'
  },
  {
    id: 'MDR-002',
    title: 'ft_transcendence',
    category: 'School Project (42)',
    description: 'Real-time Pong web application with a focus on live game state synchronization and tournament management.',
    problem: 'Managing concurrent state and low-latency communication in a browser-based multiplayer environment.',
    solution: 'Developed a robust client/server coordination system using TypeScript and WebSockets for real-time sync.',
    impact: 'Successfully implemented full tournament flow, match logic, and player progression under concurrency.',
    stack: ['TypeScript', 'WebSockets', 'Node.js', 'PostgreSQL'],
    image: 'images/ft_transcendence-pong-game-start.png',
    github: 'https://github.com/js-bytebybyte/ft_transcendence'
  },
  {
    id: 'MDR-003',
    title: 'Webserv',
    category: 'School Project (42)',
    description: 'Custom non-blocking HTTP server built from the ground up in C++98, including request parsing and response handling.',
    problem: 'Understanding low-level networking and system I/O without high-level library abstractions.',
    solution: 'Implemented a select/poll based event loop to handle multiple connections efficiently close to the protocol level.',
    impact: 'Strengthened deep understanding of networking fundamentals and server-side architecture.',
    stack: ['C++98', 'Networking', 'Systems Programming'],
    image: 'https://picsum.photos/800/600?random=3',
    github: 'https://github.com/js-bytebybyte/webserv'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: 'JS/TypeScript', level: 'Proficient' },
      { name: 'C', level: 'Proficient' },
      { name: 'C++', level: 'Proficient' },
      { name: 'Python', level: 'Beginner' },
    ]
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: 'Angular', level: 'Intermediate' },
      { name: 'PrimeNG', level: 'Proficient' },
      { name: 'TailwindCSS', level: 'Proficient' },
      { name: 'Sass (SCSS)', level: 'Intermediate' },
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Proficient' },
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: 'REST APIs', level: 'Proficient' },
      { name: 'OpenAPI / Swagger', level: 'Proficient' },
      { name: 'Node.js', level: 'Intermediate' },
    ]
  },
  {
    title: "DevOps & Systems",
    skills: [
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Linux', level: 'Proficient' },
      { name: 'Bash', level: 'Intermediate' },
      { name: 'Vim', level: 'Intermediate' },
      { name: 'Git / GitHub', level: 'Proficient' },
    ]
  },
  {
    title: "E-commerce & Scripting",
    skills: [
      { name: 'Shopify (Liquid)', level: 'Proficient' },
      { name: 'Metafields', level: 'Intermediate' },
    ]
  },
  {
    title: "AI & Collaboration",
    skills: [
      { name: 'GitHub Copilot', level: 'Proficient' },
      { name: 'Prompt Engineering', level: 'Proficient' },
      { name: 'Confluence', level: 'Beginner' },
    ]
  }
];

export const ABOUT_TEXT = [
  "Hi ! I am a career switcher from Corporate Finance (7 years) to Software Development, currently refining my skills as a Web Developer. My experience at Proximus involves building data dashboards and internal tools using Angular and Python APIs.",
  "My background in finance taught me the importance of structured problem-solving and translating complex data into clear, actionable insights—skills I now apply directly to software engineering. I am a student at 42 Belgium, where peer-to-peer learning and project-based curriculum are fundamental.",
  "When I am not in the 'severed' state of deep work, I enjoy dancing and sports like mat pilates and running, reading, and watching series like Severance and The 3 Body Problem. This website was inspired by Severance and built using Angular and TailwindCSS."
];

export const SOCIALS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/js-bytebybyte',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/jolandesteenput',
    icon: 'linkedin',
  }
];

export const EXPERIENCE: ExperienceEvent[] = [
  {
    id: '1',
    date: '2016-2020',
    role: 'FP&A / Controlling',
    companyName: 'Publicis Groupe & Deloitte',
    tasks: 'Controlling & Bugeting'
  },
  {
    id: '2',
    date: '2020 – 2023',
    role: 'Corporate Finance Officer',
    companyName: 'ECDPM | Brussels',
    tasks: 'Monthly reporting, budgeting/forecasting cycles, and variance analysis for multiple cost centers/projects.'
  },
  {
    id: '3',
    date: '04/2023-07/2025',
    role: 'Transition To Software Developer',
    companyName: '19/42 Belgium',
    tasks: 'Project based peer-to-peer learning'
  },
  {
    id: '4',
    date: '02/2025-05/2025',
    role: 'Shopify Web Developer',
    companyName: 'Fantail part of Vadigran Group | Brussels',
    tasks: "Redesigned Fantail's Shopify website for premium dog beds and cat furniture."
  },
];