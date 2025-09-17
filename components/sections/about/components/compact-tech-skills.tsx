"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiAngular,
  SiSpring,
  SiRedux,
  SiJest,
  SiWebpack,
  SiVite,
  SiFigma,
} from "react-icons/si";

interface TechSkill {
  readonly name: string;
  readonly icon: React.ReactNode;
  readonly category: 'frontend' | 'backend' | 'tools';
}

const COMPACT_SKILLS: TechSkill[] = [
  // Frontend
  { name: "React", icon: <FaReact className="h-5 w-5 text-cyan-400" />, category: 'frontend' },
  { name: "Next.js", icon: <SiNextdotjs className="h-5 w-5 text-foreground" />, category: 'frontend' },
  { name: "Angular", icon: <SiAngular className="h-5 w-5 text-primary" />, category: 'frontend' },
  { name: "TypeScript", icon: <SiTypescript className="h-5 w-5 text-info-600" />, category: 'frontend' },
  { name: "JavaScript", icon: <FaJs className="h-5 w-5 text-yellow-400" />, category: 'frontend' },
  { name: "Redux", icon: <SiRedux className="h-5 w-5 text-purple-500" />, category: 'frontend' },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-5 w-5 text-cyan-400" />, category: 'frontend' },
  { name: "HTML5", icon: <FaHtml5 className="h-5 w-5 text-orange-500" />, category: 'frontend' },
  { name: "CSS3", icon: <FaCss3Alt className="h-5 w-5 text-info-500" />, category: 'frontend' },
  
  // Backend
  { name: "Node.js", icon: <FaNodeJs className="h-5 w-5 text-success-500" />, category: 'backend' },
  { name: "Express", icon: <SiExpress className="h-5 w-5 text-muted-foreground" />, category: 'backend' },
  { name: "Spring Boot", icon: <SiSpring className="h-5 w-5 text-success-600" />, category: 'backend' },
  { name: "Python", icon: <SiPython className="h-5 w-5 text-yellow-600" />, category: 'backend' },
  { name: "PostgreSQL", icon: <SiPostgresql className="h-5 w-5 text-info-500" />, category: 'backend' },
  { name: "MongoDB", icon: <SiMongodb className="h-5 w-5 text-success-500" />, category: 'backend' },
  
  // Tools & Testing
  { name: "Git", icon: <FaGitAlt className="h-5 w-5 text-orange-600" />, category: 'tools' },
  { name: "Docker", icon: <FaDocker className="h-5 w-5 text-info-400" />, category: 'tools' },
  { name: "AWS", icon: <FaAws className="h-5 w-5 text-yellow-500" />, category: 'tools' },
  { name: "Jest", icon: <SiJest className="h-5 w-5 text-primary" />, category: 'tools' },
  { name: "Webpack", icon: <SiWebpack className="h-5 w-5 text-info-400" />, category: 'tools' },
  { name: "Vite", icon: <SiVite className="h-5 w-5 text-purple-500" />, category: 'tools' },
  { name: "Figma", icon: <SiFigma className="h-5 w-5 text-purple-400" />, category: 'tools' },
];

interface CompactTechSkillsProps {
  readonly maxSkills?: number;
}

export function CompactTechSkills({ maxSkills = 18 }: CompactTechSkillsProps) {
  const frontendSkills = COMPACT_SKILLS.filter(skill => skill.category === 'frontend');
  const backendSkills = COMPACT_SKILLS.filter(skill => skill.category === 'backend');
  const toolsSkills = COMPACT_SKILLS.filter(skill => skill.category === 'tools');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center gap-2 mb-6 flex-shrink-0">
        <div className="p-2 bg-primary/10 rounded-lg">
          <FaReact className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Stack Tecnológico</h3>
      </div>
      
      <div className="flex-1 space-y-6">
        {/* Frontend */}
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 mb-3">Frontend</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-3 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 mb-3">Backend</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-3 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Testing */}
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 mb-3">Herramientas & Testing</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {toolsSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-3 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
