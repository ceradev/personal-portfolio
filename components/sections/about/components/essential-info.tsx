"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Globe, GraduationCap } from "lucide-react";

export function EssentialInfo() {
  const essentialData = [
    {
      icon: <Briefcase className="h-4 w-4" />,
      label: "Experiencia",
      value: "1+ años",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Ubicación",
      value: "Tenerife, España",
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      icon: <Globe className="h-4 w-4" />,
      label: "Disponibilidad",
      value: "Remoto / Presencial",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      icon: <GraduationCap className="h-4 w-4" />,
      label: "Educación",
      value: "Desarrollo Web",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: false, margin: "-50px" }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8"
    >
      {essentialData.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: false }}
          whileHover={{ y: -2, scale: 1.02 }}
          className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 p-2 md:p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
        >
          <div className={`p-1.5 md:p-2 rounded-lg ${item.color} flex-shrink-0`}>
            {item.icon}
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <p className="text-xs text-foreground/60 font-medium">{item.label}</p>
            <p className="text-xs md:text-sm font-semibold text-foreground truncate">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
