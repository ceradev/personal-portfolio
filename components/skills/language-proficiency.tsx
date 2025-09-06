"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface Language {
  readonly name: string
  readonly level: string
  readonly percentage: number
  readonly color: string
}

const LANGUAGES: Language[] = [
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
    name: "Sueco",
    level: "Básico",
    percentage: 30,
    color: "bg-purple-500",
  },
] as const

interface LanguageItemProps {
  readonly language: Language
  readonly index: number
}

function LanguageItem({ language, index }: LanguageItemProps) {
  return (
    <motion.div
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
  )
}

export function LanguageProficiency() {
  return (
    <div className="space-y-4">
      {LANGUAGES.map((language, index) => (
        <LanguageItem
          key={language.name}
          language={language}
          index={index}
        />
      ))}
    </div>
  )
}
