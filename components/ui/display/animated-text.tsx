"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimatedText({ 
  text, 
  delay = 0, 
  duration = 0.1, 
  className = "" 
}: AnimatedTextProps) {
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration, 
            delay: delay + (index * duration) 
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}

interface AnimatedWordProps {
  words: string[];
  delay?: number;
  className?: string;
}

export function AnimatedWord({ words, delay = 0, className = "" }: AnimatedWordProps) {
  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
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
