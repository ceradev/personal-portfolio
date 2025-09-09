"use client";

import { motion } from "framer-motion";
import { TimelineNode } from "./timeline-node";
import { Experience } from "@/data/experiences";

interface TimelineSectionProps {
  readonly experiences: Experience[];
  readonly activeExperience: string | null;
  readonly onNodeClick: (experienceId: string) => void;
}

export function TimelineSection({ experiences, activeExperience, onNodeClick }: Readonly<TimelineSectionProps>) {
  return (
    <div className="relative">
      {/* Enhanced Timeline line */}
      <motion.div
        className="absolute top-10 left-4 right-4 md:left-8 md:right-8 h-1 bg-gradient-to-r from-gray-300 via-red-500 to-gray-300 rounded-full shadow-lg shadow-gray-400/20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ 
          duration: 1.5, 
          delay: 0.5,
          ease: "easeInOut"
        }}
        viewport={{ once: true }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute top-10 left-4 right-4 md:left-8 md:right-8 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Timeline nodes */}
      <div className="flex justify-between items-start relative px-2 md:px-0 overflow-x-auto scrollbar-hide">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className="flex-1 flex justify-center min-w-[120px] md:min-w-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TimelineNode
              experience={experience}
              index={index}
              isActive={activeExperience === experience.id}
              onClick={() => onNodeClick(experience.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
