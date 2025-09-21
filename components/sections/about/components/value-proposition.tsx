"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { TextParagraph } from "@/components/ui/display/text-paragraph";
import { aboutData } from "@/data/about-data";

export function ValueProposition() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-4 md:p-6 hover:border-primary/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="p-1.5 md:p-2 bg-primary/10 rounded-lg">
          <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary" />
        </div>
        <h3 className="text-base md:text-xl font-semibold text-foreground">
          Propuesta de valor
        </h3>
      </div>

      {/* Content */}
      <div className="space-y-3 md:space-y-5">
        {aboutData.aboutText.map((text, index) => (
          <TextParagraph key={text.slice(0, 20)} text={text} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
