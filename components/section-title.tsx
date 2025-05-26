"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title?: string
}

export function SectionTitle({ title = "" }: SectionTitleProps) {
  // Función para simplificar títulos relacionados con habilidades
  const displayTitle = title.toLowerCase().includes("habilidades") ? "Habilidades" : title

  return (
    <div className="flex justify-center mb-12 w-full">
      <motion.h2
        className="text-center font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight px-4 py-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-800 drop-shadow-md">
          {displayTitle}
        </span>
      </motion.h2>
    </div>
  )
}
