"use client";

import { motion } from "framer-motion";
import { ChevronDown, BadgeCheck } from "lucide-react";

export function MobileHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="mt-12 text-center md:hidden"
    >
      <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-100 to-white border border-gray-200 backdrop-blur-sm shadow-sm">
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
          <ChevronDown className="h-4 w-4 text-red-500" />
        </motion.div>
        <p className="text-sm text-gray-700 font-medium">
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
          <BadgeCheck className="h-3 w-3 text-red-500" />
        </motion.div>
      </div>
    </motion.div>
  );
}
