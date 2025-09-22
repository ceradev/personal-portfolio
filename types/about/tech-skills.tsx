import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiSpring,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiJest,
  SiWebpack,
  SiVite,
  SiFigma,
} from "react-icons/si";

export interface TechSkill {
  readonly name: string;
  readonly icon: React.ReactNode;
  readonly category: 'frontend' | 'backend' | 'tools';
}

export interface CompactTechSkillsProps {
  readonly maxSkills?: number;
}

export const COMPACT_SKILLS: TechSkill[] = [
  // Frontend
  {
    name: "React",
    icon: <FaReact className="h-5 w-5 text-cyan-400" />,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-5 w-5 text-foreground" />,
    category: "frontend",
  },
  {
    name: "Angular",
    icon: <SiAngular className="h-5 w-5 text-primary" />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-5 w-5 text-info-600" />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="h-5 w-5 text-yellow-400" />,
    category: "frontend",
  },
  {
    name: "Redux",
    icon: <SiRedux className="h-5 w-5 text-purple-500" />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-5 w-5 text-cyan-400" />,
    category: "frontend",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="h-5 w-5 text-orange-500" />,
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="h-5 w-5 text-info-500" />,
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs className="h-5 w-5 text-success-500" />,
    category: "backend",
  },
  {
    name: "Express",
    icon: <SiExpress className="h-5 w-5 text-muted-foreground" />,
    category: "backend",
  },
  {
    name: "Spring Boot",
    icon: <SiSpring className="h-5 w-5 text-success-600" />,
    category: "backend",
  },
  {
    name: "Python",
    icon: <SiPython className="h-5 w-5 text-yellow-600" />,
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="h-5 w-5 text-info-500" />,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="h-5 w-5 text-success-500" />,
    category: "backend",
  },

  // Tools & Testing
  {
    name: "Git",
    icon: <FaGitAlt className="h-5 w-5 text-orange-600" />,
    category: "tools",
  },
  {
    name: "Docker",
    icon: <FaDocker className="h-5 w-5 text-info-400" />,
    category: "tools",
  },
  {
    name: "AWS",
    icon: <FaAws className="h-5 w-5 text-yellow-500" />,
    category: "tools",
  },
  {
    name: "Jest",
    icon: <SiJest className="h-5 w-5 text-primary" />,
    category: "tools",
  },
  {
    name: "Webpack",
    icon: <SiWebpack className="h-5 w-5 text-info-400" />,
    category: "tools",
  },
  {
    name: "Vite",
    icon: <SiVite className="h-5 w-5 text-purple-500" />,
    category: "tools",
  },
  {
    name: "Figma",
    icon: <SiFigma className="h-5 w-5 text-purple-400" />,
    category: "tools",
  },
];
