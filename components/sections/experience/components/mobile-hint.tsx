"use client";

import { motion } from "framer-motion";
import { ChevronDown, BadgeCheck } from "lucide-react";

export function MobileHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="mt-6 sm:mt-8 text-center md:hidden"
    >
      <div className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl bg-background/90 backdrop-blur-sm border-2 border-gray-200/60 dark:border-gray-600/60 shadow-sm hover:shadow-md transition-all duration-300">
        <motion.div
          animate={{ 
            y: [0, -2, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
        </motion.div>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
        Toca cualquier experiencia para ver los detalles
      </p>
        <motion.div
          animate={{ 
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <BadgeCheck className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
}
