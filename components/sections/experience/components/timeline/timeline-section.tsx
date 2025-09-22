"use client";

import { motion } from "framer-motion";
import { TimelineNode } from "./timeline-node";
import { Experience } from "@/types/experiences";
import { useMobile } from "@/hooks/use-mobile";

interface TimelineSectionProps {
  readonly experiences: Experience[];
  readonly activeExperience: string | null;
  readonly onNodeClick: (experienceId: string) => void;
}

export function TimelineSection({ experiences, activeExperience, onNodeClick }: Readonly<TimelineSectionProps>) {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div className="relative">
        {/* Mobile Vertical Timeline */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Vertical line connector */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-gray-500/60 to-gray-300/40 dark:to-gray-600/40"
                  initial={{ height: 0 }}
                  whileInView={{ height: 48 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              )}
              
              {/* Mobile Timeline Node */}
              <div className="flex items-start gap-4">
                {/* Timeline dot */}
                <motion.div
                  className={`relative z-10 w-16 h-16 rounded-full border-3 cursor-pointer transition-all duration-500 backdrop-blur-sm flex-shrink-0 ${
                    activeExperience === experience.id
                      ? "border-red-500/80 dark:border-red-400/80 bg-background shadow-lg shadow-red-500/30 dark:shadow-red-400/30"
                      : "border-gray-300/60 dark:border-gray-600/60 bg-background hover:border-red-400/70 dark:hover:border-red-500/70 hover:bg-background shadow-md shadow-gray-400/20 dark:shadow-gray-600/20 hover:shadow-red-400/25 dark:hover:shadow-red-500/25"
                  }`}
                  onClick={() => onNodeClick(experience.id)}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {/* Company logo */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-gray-300/60 dark:border-gray-600/60 shadow-md backdrop-blur-sm">
                    <img
                      src={experience.logo || "/placeholders/placeholder.svg"}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Pulse effect for active state */}
                  {activeExperience === experience.id && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/50"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>

                {/* Experience info */}
                <motion.div
                  className="flex-1 min-w-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="bg-background/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className={`text-sm font-bold mb-1 transition-colors duration-300 ${
                      activeExperience === experience.id
                        ? "text-red-600 dark:text-red-400"
                        : "text-gray-800 dark:text-gray-200"
                    }`}>
                      {experience.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2">
                      {experience.company}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {experience.period}
                    </p>
                    
                    {/* Active indicator */}
                    {activeExperience === experience.id && (
                      <motion.div
                        className="w-full h-0.5 bg-gradient-to-r from-red-500 to-red-400 mt-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop horizontal timeline (original design)
  return (
    <div className="relative">
      {/* Enhanced Timeline line */}
      <motion.div
        className="absolute top-10 left-4 right-4 md:left-8 md:right-8 h-1 bg-gradient-to-r from-gray-300/40 dark:from-gray-600/40 via-gray-200/60 to-gray-300/40 dark:to-gray-600/40 rounded-full shadow-lg shadow-gray-400/15 dark:shadow-gray-600/15 backdrop-blur-sm"
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
        className="absolute top-10 left-4 right-4 md:left-8 md:right-8 h-1 bg-gradient-to-r from-transparent via-red-600/40 to-transparent rounded-full backdrop-blur-sm"
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 0.6, 0]
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
