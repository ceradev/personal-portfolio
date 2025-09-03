"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"
import { useTheme } from "@/components/layout/theme-provider"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  const scaleX = useSpring(scrollProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/70 via-primary/60 to-primary/50 z-50 origin-left`}
      style={{ scaleX }}
    />
  )
}
