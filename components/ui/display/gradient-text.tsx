"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function GradientText({ text, delay = 0, className = "" }: GradientTextProps) {
  return (
    <motion.span 
      className={`inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {text}
    </motion.span>
  );
}
