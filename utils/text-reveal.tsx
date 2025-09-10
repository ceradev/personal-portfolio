"use client"

import type React from "react"

import { motion } from "framer-motion"

interface TextRevealProps {
  children: React.ReactNode
  className?: string
}

export function TextReveal({ children, className = "" }: TextRevealProps) {
  return (
    <motion.p
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, margin: "-50px" }}
    >
      {children}
    </motion.p>
  )
}
