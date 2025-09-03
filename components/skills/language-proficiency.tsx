"use client"

import { motion } from "framer-motion"
import { Globe, Check } from "lucide-react"

interface Language {
  name: string
  level: string
  percentage: number
  color: string
}

export function LanguageProficiency() {
  const languages: Language[] = [
    {
      name: "Español",
      level: "Nativo",
      percentage: 100,
      color: "bg-green-500",
    },
    {
      name: "Inglés",
      level: "Avanzado",
      percentage: 85,
      color: "bg-blue-500",
    },
    {
      name: "Francés",
      level: "Básico",
      percentage: 30,
      color: "bg-purple-500",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, margin: "-50px" }}
      className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
    >
      <div className="flex items-center mb-6">
        <Globe className="h-6 w-6 text-primary mr-3" />
        <h3 className="text-xl font-semibold text-foreground">Idiomas</h3>
      </div>

      <div className="space-y-4">
        {languages.map((language, index) => (
          <motion.div
            key={language.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-foreground">{language.name}</h4>
                <p className="text-sm text-foreground/70">{language.level}</p>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-foreground/80">
                  {language.percentage}%
                </span>
              </div>
            </div>
            <div className="w-full bg-background/50 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${language.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${language.percentage}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: false }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
