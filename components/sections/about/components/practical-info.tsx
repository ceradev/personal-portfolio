"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Globe, Clock } from "lucide-react";

export function PracticalInfo() {
  const practicalInfo = [
    {
      icon: <Briefcase className="h-4 w-4" />,
      label: "Carnet de Conducir",
      value: "B1, B",
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Vehículo Propio",
      value: "Disponible",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Globe className="h-4 w-4" />,
      label: "Disponibilidad",
      value: "Remoto / Presencial",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Movilidad",
      value: "Para viajar",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Información Práctica</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
        {practicalInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="flex items-center gap-3 p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
          >
            <div className={`p-2 rounded-lg ${info.color} flex-shrink-0`}>
              {info.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-foreground/60 font-medium">{info.label}</p>
              <p className="text-sm font-semibold text-foreground truncate">{info.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
