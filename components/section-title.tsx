"use client"

import { motion } from "framer-motion"
import { useDJMode } from "@/components/dj-mode-context"

interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  const { isDJMode } = useDJMode()

  // Función para simplificar títulos relacionados con habilidades
  const displayTitle = title.toLowerCase().includes("habilidades") ? "Habilidades" : title

  // Estilo DJ Mode
  if (isDJMode) {
    return (
      <div className="flex flex-col items-center justify-center mb-12">
        <motion.h2
          className="text-center font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg">
            {displayTitle}
          </span>
        </motion.h2>
      </div>
    )
  }

  // Estilo normal que coincide con la sección hero
  return (
    <div className="flex justify-center mb-12 w-full">
      <motion.h2
        className="text-center font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight px-4 py-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <span className="text-primary-800 dark:text-primary-200 drop-shadow-md">{displayTitle}</span>
      </motion.h2>
    </div>
  )
}
