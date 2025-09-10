"use client";

import { motion } from "framer-motion";

interface TextParagraphProps {
  readonly text: string;
  readonly index: number;
}

export function TextParagraph({ text, index }: TextParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: false }}
      className="text-foreground/90 leading-relaxed p-3 bg-background/5 rounded-lg border border-border/10 hover:bg-background/10 transition-all duration-300"
    >
      {text}
    </motion.p>
  );
}
