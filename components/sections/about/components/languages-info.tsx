"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Badge } from "@/components/ui/display/badge";

export function LanguagesInfo() {
  const languages = [
    { label: "Español", level: "Nativo", flag: "🇪🇸", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
    { label: "Inglés", level: "Avanzado (C1)", flag: "🇬🇧", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
    { label: "Sueco", level: "Intermedio", flag: "🇸🇪", color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Globe className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Idiomas</h3>
      </div>
      
      <div className="space-y-3 flex-1">
        {languages.map((language, index) => (
          <motion.div
            key={language.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="flex items-center justify-between p-3 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{language.flag}</span>
              <span className="text-sm font-medium text-foreground">{language.label}</span>
            </div>
            <Badge className={`${language.color} text-xs px-3 py-1.5 font-medium`}>
              {language.level}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
