"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  readonly text: string;
  readonly delay?: number;
  readonly duration?: number;
  readonly className?: string;
}

export function AnimatedText({ 
  text, 
  delay = 0, 
  duration = 0.1, 
  className = "" 
}: AnimatedTextProps) {
  const hasPrimaryClass = className.includes('text-primary');
  
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={index + text}
          className={`${className} ${hasPrimaryClass ? 'hover:text-red-800 dark:hover:text-red-300 hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.6)] dark:hover:drop-shadow-[0_0_15px_rgba(252,165,165,0.6)]' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration, 
            delay: delay + (index * duration) 
          }}
          whileHover={hasPrimaryClass ? { 
            scale: 1.3, 
            transition: { duration: 0.3, ease: "easeOut" }
          } : {}}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}

interface AnimatedWordProps {
  readonly words: string[];
  readonly delay?: number;
  readonly className?: string;
}

export function AnimatedWord({ words, delay = 0, className = "" }: AnimatedWordProps) {
  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index + words.join('')}
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.1, 
            delay: delay + (index * 0.1) 
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}
