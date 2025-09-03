"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionTransitionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export function SectionTransition({ children, id, className }: SectionTransitionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  // Detectar si es la sección de proyectos
  const isProjectsSection = id === "projects"

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
      className={`relative ${isProjectsSection ? "pb-40 md:pb-52" : "pb-16 md:pb-24"} ${className}`}
    >
      <div className={`container mx-auto px-4 md:px-8 ${isProjectsSection ? "max-w-[90vw]" : ""}`}>
        <motion.div
          variants={childVariants}
          className={`relative z-10 w-full mx-auto 
            ${
              isProjectsSection
                ? "max-w-[2200px] px-3 md:px-10 py-8 md:py-16 scale-100 md:scale-110"
                : "max-w-[1600px] px-4 md:px-6 py-4 md:py-8 scale-105"
            }`}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  )
}
