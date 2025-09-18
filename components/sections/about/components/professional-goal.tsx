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
      style={{ position: 'relative' }}
    >
      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
      <span className="text-foreground/90 leading-relaxed">{goal}</span>
    </motion.div>
  );
}
