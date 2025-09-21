"use client";

import { motion } from "framer-motion";

interface AnimatedHighlightProps {
  readonly text: string;
  readonly delay?: number;
  readonly className?: string;
}

export function AnimatedHighlight({ 
  text, 
  delay = 0, 
  className = "text-primary font-bold" 
}: AnimatedHighlightProps) {
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={index + text}
          className={`${className} hover:text-red-800 dark:hover:text-red-300 hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.6)] dark:hover:drop-shadow-[0_0_15px_rgba(252,165,165,0.6)] transition-all duration-300 cursor-pointer`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.3, 
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          transition={{ 
            opacity: { duration: 0.3, delay: delay + (index * 0.05) },
            y: { duration: 0.3, delay: delay + (index * 0.05) }
          }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}
