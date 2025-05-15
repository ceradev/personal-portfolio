"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export function EnhancedThemeTransition() {
  const { theme } = useTheme()
  const [prevTheme, setPrevTheme] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
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
      }, 1000)
    }
  }, [theme, prevTheme])

  // Don't render until we have both current and previous theme
  if (!theme || !prevTheme) return null

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="theme-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 pointer-events-none z-[100]"
        >
          <motion.div
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ scale: 1.5, borderRadius: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute inset-0 ${
              theme === "light"
                ? "bg-gradient-to-br from-zinc-100 to-zinc-200"
                : "bg-gradient-to-br from-black to-zinc-900"
            }`}
            style={{
              transformOrigin: "center center",
            }}
          />

          {/* Decorative elements for transition */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, Math.random() * 2 + 1, 0],
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                }}
                transition={{ duration: Math.random() * 1 + 0.5, ease: "easeOut" }}
                className={`absolute w-2 h-2 rounded-full ${
                  theme === "light" ? "bg-primary/40" : "bg-primary/60"
                } blur-[2px]`}
              />
            ))}
          </div>

          {/* Central logo or icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center ${
                theme === "light" ? "bg-white text-primary" : "bg-black text-primary"
              } shadow-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                <path d="m6 17 3.13-5.78c.53-.97.43-2.22-.26-3.07A4 4 0 0 1 22 7c-.01.7-.2 1.4-.57 2"></path>
                <path d="m18 7-3.13 5.78c-.53.97-.43 2.22.26 3.07"></path>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
