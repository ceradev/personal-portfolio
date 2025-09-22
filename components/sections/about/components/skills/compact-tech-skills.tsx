"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { COMPACT_SKILLS, CompactTechSkillsProps } from "@/types/about/tech-skills";

export function CompactTechSkills({ maxSkills = 18 }: Readonly<CompactTechSkillsProps>) {
  const frontendSkills = COMPACT_SKILLS.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = COMPACT_SKILLS.filter(
    (skill) => skill.category === "backend"
  );
  const toolsSkills = COMPACT_SKILLS.filter(
    (skill) => skill.category === "tools"
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-4 md:p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center gap-2 mb-4 md:mb-6 flex-shrink-0">
        <div className="p-1.5 md:p-2 bg-primary/10 rounded-lg">
          <FaReact className="h-4 w-4 md:h-5 md:w-5 text-primary" />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-foreground">
          Stack Tecnológico
        </h3>
      </div>

      <div className="flex-1 space-y-4 md:space-y-6">
        {/* Frontend */}
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 mb-2 md:mb-3">
            Frontend
          </h4>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-2 md:gap-3">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex flex-col items-center gap-1.5 md:gap-2 p-2 md:p-3 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 mb-2 md:mb-3">
            Backend
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2 md:gap-3">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex flex-col items-center gap-1.5 md:gap-2 p-2 md:p-3 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Testing */}
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 mb-2 md:mb-3">
            Herramientas & Testing
          </h4>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-2 md:gap-3">
            {toolsSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex flex-col items-center gap-1.5 md:gap-2 p-2 md:p-3 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
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
