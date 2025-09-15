"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Target, Users, Award, TrendingUp } from "lucide-react";

interface TextParagraphProps {
  readonly text: string;
  readonly index: number;
}

const paragraphIcons = [
  <Code key="code" className="h-5 w-5 text-primary" />,
  <Rocket key="rocket" className="h-5 w-5 text-primary" />,
  <Target key="target" className="h-5 w-5 text-primary" />,
  <Users key="users" className="h-5 w-5 text-primary" />,
  <Award key="award" className="h-5 w-5 text-primary" />,
  <TrendingUp key="trending" className="h-5 w-5 text-primary" />
];

const highlightKeywords = (text: string) => {
  const keywords = [
    'Full-Stack', 'React', 'Next.js', 'Angular', 'Spring Boot', 'PostgreSQL',
    'aprendizaje constante', 'innovación', 'valor real',
    'agencia digital', 'Inteligencia Artificial',
    'metodologías ágiles', 'equipos multidisciplinarios',
    'excelencia técnica', 'mejores prácticas',
    'transformación digital', 'competitividad'
  ];
  
  let highlightedText = text;
  keywords.forEach(keyword => {
    const regex = new RegExp(`(${keyword})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<span class="text-red-600 font-semibold">$1</span>');
  });
  
  return highlightedText;
};

export function TextParagraph({ text, index }: TextParagraphProps) {
  const icon = paragraphIcons[index] || <Code className="h-5 w-5 text-primary" />;
  const highlightedText = highlightKeywords(text);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: false }}
      className="flex items-start gap-4 p-4 bg-background/5 rounded-lg border-2 border-border/20 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <p 
        className="text-foreground/90 leading-relaxed text-base font-medium flex-1"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />
    </motion.div>
  );
}
