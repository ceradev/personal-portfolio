"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Disc3, Volume2, VolumeX } from "lucide-react"
import { useDJMode } from "@/components/dj-mode-context"
import { useTheme } from "@/components/theme-provider"

export function DJModeToggle() {
  const { isDJMode, toggleDJMode } = useDJMode()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Efecto para manejar el montaje
  useEffect(() => {
    setMounted(true)

    // Recuperar preferencia de sonido
    const savedSoundPref = localStorage.getItem("djSoundEnabled")
    if (savedSoundPref) {
      setSoundEnabled(savedSoundPref === "true")
    }
  }, [])

  // Guardar preferencia de sonido
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("djSoundEnabled", soundEnabled.toString())
    }
  }, [soundEnabled, mounted])

  // Función para reproducir sonido al activar/desactivar
  const playToggleSound = () => {
    if (soundEnabled && mounted) {
      const audio = new Audio(isDJMode ? "/sounds/dj-mode-on.mp3" : "/sounds/dj-mode-off.mp3")
      audio.volume = 0.3
      audio.play().catch((error) => console.log("Audio play failed:", error))
    }
  }

  // Función para reproducir sonido al hacer hover
  const playHoverSound = () => {
    if (soundEnabled && mounted && !isHovering) {
      const audio = new Audio("/sounds/hover.mp3")
      audio.volume = 0.1
      audio.play().catch((error) => console.log("Audio play failed:", error))
    }
  }

  const handleToggle = () => {
    toggleDJMode()
    playToggleSound()
  }

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSoundEnabled(!soundEnabled)
  }

  // Si no está montado, no renderizar nada para evitar problemas de hidratación
  if (!mounted) return null

  return (
    <motion.div
      className="fixed md:bottom-6 md:right-6 bottom-20 right-4 z-[60] flex items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Botón de sonido */}
      <motion.button
        className={`rounded-full p-2 ${
          isDJMode
            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            : "bg-background/80 backdrop-blur-md border border-border text-foreground"
        } shadow-lg`}
        onClick={toggleSound}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </motion.button>

      {/* Botón principal de DJ Mode */}
      <motion.button
        className={`relative flex items-center gap-2 rounded-full px-4 py-2 shadow-lg ${
          isDJMode
            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            : "bg-background/80 backdrop-blur-md border border-border text-foreground"
        }`}
        onClick={handleToggle}
        onMouseEnter={() => {
          setIsHovering(true)
          playHoverSound()
        }}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDJMode ? "dj-on" : "dj-off"}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <Disc3 className={`h-5 w-5 mr-2 ${isDJMode ? "animate-spin" : ""}`} style={{ animationDuration: "3s" }} />
            <span className="font-medium text-sm">DJ Mode</span>
          </motion.div>
        </AnimatePresence>

        {/* Indicador de estado */}
        <div className="ml-2 relative">
          <div className={`w-4 h-4 rounded-full ${isDJMode ? "bg-green-400" : "bg-gray-400"}`} />
          {isDJMode && (
            <motion.div
              className="absolute inset-0 rounded-full bg-green-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          )}
        </div>

        {/* Efecto de ondas cuando está activado */}
        {isDJMode && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-500/30"
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-pink-500/20"
              animate={{ scale: [1, 1.8], opacity: [1, 0] }}
              transition={{ duration: 2, delay: 0.3, repeat: Number.POSITIVE_INFINITY }}
            />
          </>
        )}
      </motion.button>
    </motion.div>
  )
}
