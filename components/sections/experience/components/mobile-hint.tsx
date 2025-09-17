"use client";

import { motion } from "framer-motion";
import { ChevronDown, BadgeCheck } from "lucide-react";

export function MobileHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="mt-8 text-center md:hidden"
    >
      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-background border-2 border-gray-200/60 dark:border-gray-600/60 backdrop-blur-sm shadow-sm">
        <motion.div
          animate={{ 
            y: [0, -3, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="h-4 w-4 text-primary" />
        </motion.div>
        <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
        Desliza horizontalmente para ver todas las experiencias
      </p>
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <BadgeCheck className="h-3 w-3 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
}
