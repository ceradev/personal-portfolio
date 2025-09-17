"use client";

import { motion } from "framer-motion";

interface AnimatedUnderlineProps {
  delay?: number;
}

export function AnimatedUnderline({ delay = 1 }: AnimatedUnderlineProps) {
  return (
    <>
      <motion.div 
        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-500 to-primary rounded-full group-hover:shadow-md group-hover:shadow-primary/50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div 
        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/30 to-transparent rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: [0, 0.6, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          delay: delay + 1.2, 
          ease: "easeInOut"
        }}
        style={{ transformOrigin: "left" }}
      />
    </>
  );
}
