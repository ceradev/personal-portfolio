"use client"

import { motion } from "framer-motion"
import { useDJMode } from "@/components/dj-mode-context"

interface SectionTitleProps {
  title: string
}

export function DJModeSectionTitle({ title }: SectionTitleProps) {
  const { isDJMode } = useDJMode()

  // Estilo normal
  if (!isDJMode) {
    return (
      <div className="flex items-center justify-center mb-12">
        <motion.div
          className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/70"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        />

        <motion.h2
          className="mx-6 text-center font-sans font-medium text-2xl md:text-3xl px-4 py-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary to-primary-700 drop-shadow-sm">
            {title}
          </span>
        </motion.h2>

        <motion.div
          className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/70"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        />
      </div>
    )
  }

  // Estilo DJ Mode
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <motion.h2
        className="text-center font-space-grotesk font-bold text-3xl md:text-4xl uppercase tracking-wider mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg">
          {title}
        </span>
      </motion.h2>

      <div className="flex items-center w-full max-w-md">
        <motion.div
          className="h-1 flex-grow bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        />

        <motion.div
          className="mx-2 w-3 h-3 rounded-full bg-blue-500"
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false }}
        />

        <motion.div
          className="h-1 flex-grow bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        />
      </div>
    </div>
  )
}
