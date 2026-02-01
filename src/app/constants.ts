import { Project, SkillCategory, SocialLink } from './types';
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
    image: 'https://picsum.photos/800/600?random=2',
    github: 'https://github.com/js-bytebybyte'
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
    github: 'https://github.com/js-bytebybyte'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Development Core",
    skills: ["Angular", "TypeScript", "JavaScript", "C / C++", "Python APIs", "PrimeNG"]
  },
  {
    title: "Web & Systems",
    skills: ["REST APIs", "OpenAPI / Swagger", "TailwindCSS", "Docker", "Linux / Bash", "Liquid (Shopify)"]
  },
  {
    title: "Finance Refinement",
    skills: ["Variance Analysis", "Budgeting & Forecasting", "Monthly Reporting", "Stakeholder Management", "Audit Readiness"]
  }
];

export const ABOUT_TEXT = [
  "I am a career switcher from Corporate Finance (+6 years) to Web Development, currently refining my skills as a Junior Web Developer. My experience at Proximus involves building data dashboards and internal tools using Angular and Python APIs.",
  "My background in finance taught me the importance of structured problem-solving and translating complex data into clear, actionable insights—skills I now apply directly to software engineering. I am a student at 42 Belgium, where peer-to-peer learning and project-based curriculum are fundamental.",
  "When I am not in the 'severed' state of deep work, I enjoy sports like Pilates and Running at Animo, reading motivational literature, and following series like Severance and The 3 Body Problem."
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