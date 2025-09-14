"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Target, Lightbulb, Clock, Brain } from "lucide-react";

export function ProfessionalSoftSkills() {
  const softSkills = [
    {
      icon: <Users className="h-4 w-4" />,
      name: "Trabajo en Equipo",
      description: "Colaboración efectiva en equipos multidisciplinarios",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <MessageCircle className="h-4 w-4" />,
      name: "Comunicación",
      description: "Comunicación clara con stakeholders técnicos y no técnicos",
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      icon: <Lightbulb className="h-4 w-4" />,
      name: "Resolución de Problemas",
      description: "Enfoque analítico para encontrar soluciones innovadoras",
      color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: <Target className="h-4 w-4" />,
      name: "Orientación a Resultados",
      description: "Enfoque en entregar valor y cumplir objetivos del negocio",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Brain className="h-4 w-4" />,
      name: "Aprendizaje Continuo",
      description: "Adaptabilidad y actualización constante de conocimientos",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    },
    {
      icon: <Clock className="h-4 w-4" />,
      name: "Gestión del Tiempo",
      description: "Organización eficiente para cumplir deadlines",
      color: "bg-red-500/10 text-red-600 dark:text-red-400"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Habilidades Profesionales</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="flex items-start gap-3 p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
          >
            <div className={`p-2 rounded-lg ${skill.color} flex-shrink-0`}>
              {skill.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground mb-1">{skill.name}</h4>
              <p className="text-xs text-foreground/70 leading-relaxed">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
