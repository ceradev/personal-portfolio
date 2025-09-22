"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/layout/theme-provider"

export function EnhancedThemeTransition() {
  const { theme } = useTheme()
  const [prevTheme, setPrevTheme] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Initialize theme
    if (!prevTheme) {
      setPrevTheme(theme)
      return
    }

    // If theme changed, trigger transition
    if (theme !== prevTheme) {
      setPrevTheme(theme)
      setIsTransitioning(true)

      // Reset transition state after animation
      setTimeout(() => {
        setIsTransitioning(false)
      }, 600)
    }
  }, [theme, prevTheme, mounted])

  // Don't render until we have both current and previous theme and component is mounted
  if (!mounted || !theme || !prevTheme) return null

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="theme-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 pointer-events-none z-[100]"
        >
          <motion.div
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ scale: 1.5, borderRadius: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`absolute inset-0 ${
              theme === "light"
                ? "bg-gradient-to-br from-zinc-100 to-zinc-200"
                : "bg-gradient-to-br from-black to-zinc-900"
            }`}
            style={{
              transformOrigin: "center center",
            }}
          />

          {/* Subtle decorative elements for transition */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`particle-${i}` + i}
                initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0, Math.random() * 1.5 + 0.5, 0],
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`absolute w-1 h-1 rounded-full ${
                  theme === "light" ? "bg-primary/20" : "bg-primary/30"
                } blur-sm`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
