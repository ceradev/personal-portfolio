"use client";

import { motion } from "framer-motion";

interface ProfessionalGoalProps {
  readonly goal: string;
  readonly index: number;
}

export function ProfessionalGoal({ goal, index }: ProfessionalGoalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
      viewport={{ once: false }}
      whileHover={{ x: 3, scale: 1.02 }}
      className="flex items-start p-3 bg-background/5 rounded-lg border border-border/10 hover:bg-background/10 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
      <span className="text-foreground/90 leading-relaxed">{goal}</span>
    </motion.div>
  );
}

export function AboutSubtitle() {
  return (
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
        <div className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed font-medium">
          Conoce más sobre mi{" "}
          <span className="relative">
            <span className="text-red-600 font-bold">trayectoria personal</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
            />
          </span>{" "}
          y profesional como desarrollador
        </div>
      </div>
    </motion.div>
  );
}