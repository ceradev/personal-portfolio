"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

interface Language {
  name: string
  level: string
  proficiency: number
  flag: string
}

export function LanguageProficiency() {
  const languages: Language[] = [
    {
      name: "Español",
      level: "Nativo",
      proficiency: 100,
      flag: "🇪🇸",
    },
    {
      name: "Inglés",
      level: "B2",
      proficiency: 80,
      flag: "🇬🇧",
    },
    {
      name: "Sueco",
      level: "A1",
      proficiency: 20,
      flag: "🇸🇪",
    },
  ]

  return (
    <div className="space-y-4">
      {languages.map((language, index) => (
        <motion.div
          key={language.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl mr-2" aria-hidden="true">
                {language.flag}
              </span>
              <span className="font-medium text-foreground">{language.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">{language.level}</span>
          </div>

          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/70 to-primary/50"
              initial={{ width: 0 }}
              animate={{ width: `${language.proficiency}%` }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex items-center mt-6 pt-4 border-t border-border/50"
      >
        <Globe className="h-4 w-4 text-primary mr-2" />
        <span className="text-sm text-muted-foreground">
          Disponibilidad para trabajar en entornos multilingües y adaptarme a nuevos idiomas.
        </span>
      </motion.div>
    </div>
  )
}
