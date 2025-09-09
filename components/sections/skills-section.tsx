"use client";

import { motion } from "framer-motion";
import { TechSkillsIconGrid } from "@/components/skills/tech-skills-icon-grid";
import { SectionTitle } from "@/components/utils/section-title";
import { SectionTransition } from "@/components/utils/section-transition";

export function SkillsSection() {
  return (
    <SectionTransition
      id="skills"
      className="py-20 my-8 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionTitle title="Stack Tecnológico" />
        
        {/* Subtitle with animation - exact copy from experience section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-center mb-16 relative"
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />
          
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-6">
            </div>
            
            <div className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Tecnologías que domino para{" "}
              <span className="relative">
                <span className="text-red-600 font-bold">
                  crear experiencias digitales excepcionales
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: false }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
                />
              </span>{" "}
              y soluciones innovadoras
            </div>
          </div>
        </motion.div>

        <TechSkillsIconGrid />
      </div>
    </SectionTransition>
  );
}
