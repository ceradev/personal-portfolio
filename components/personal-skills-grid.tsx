"use client"

import { motion } from "framer-motion"
import { Brain, Users, Award, Lightbulb, Clock, Zap } from "lucide-react"

export function PersonalSkillsGrid() {
  const skills = [
    {
      name: "Autodidacta",
      description: "Capacidad para aprender de forma independiente y constante",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      name: "Trabajo en equipo",
      description: "Colaboración efectiva y comunicación con otros desarrolladores",
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: "Desarrollo de liderazgo",
      description: "Capacidad para guiar equipos y tomar decisiones",
      icon: <Award className="h-5 w-5" />,
    },
    {
      name: "Resolución de problemas",
      description: "Enfoque analítico para resolver desafíos técnicos",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      name: "Aprendizaje continuo",
      description: "Compromiso con la actualización constante de conocimientos",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      name: "Adaptabilidad",
      description: "Flexibilidad ante nuevas tecnologías y entornos",
      icon: <Zap className="h-5 w-5" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: false, margin: "-50px" }}
          className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground drop-shadow-sm mb-1">{skill.name}</h3>
              <p className="text-sm text-foreground/85 dark:text-foreground/90">{skill.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
