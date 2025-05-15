"use client"

import { useScroll, motion, useSpring } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const { theme } = useTheme()

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/70 via-primary/60 to-primary/50 z-50 origin-left`}
      style={{ scaleX }}
    />
  )
}
