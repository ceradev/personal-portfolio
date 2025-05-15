"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export function OptimizedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar tamaño del canvas
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawPattern()
    }

    // Dibujar patrón geométrico simple
    const drawPattern = () => {
      if (!ctx) return

      const isDarkTheme = document.documentElement.classList.contains("dark")

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = isDarkTheme ? "#000000" : "#ffffff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Reducir la cantidad de elementos para mejorar el rendimiento
      const gridSize = 80 // Aumentado para reducir la cantidad de elementos
      const dotRadius = 1

      // Color based on theme
      const dotColor = isDarkTheme ? "rgba(220, 20, 60, 0.2)" : "rgba(220, 20, 60, 0.1)"
      const lineColor = isDarkTheme ? "rgba(220, 20, 60, 0.1)" : "rgba(220, 20, 60, 0.05)"
      const shapeColor = isDarkTheme ? "rgba(220, 20, 60, 0.05)" : "rgba(220, 20, 60, 0.03)"

      // Dibujar puntos con menos frecuencia
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          // Variación basada en la posición
          const offsetX = Math.sin(y * 0.01) * 5
          const offsetY = Math.cos(x * 0.01) * 5

          ctx.beginPath()
          ctx.arc(x + offsetX, y + offsetY, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = dotColor
          ctx.fill()

          // Conectar algunos puntos con líneas (reducido al 5%)
          if (Math.random() > 0.95) {
            ctx.beginPath()
            ctx.moveTo(x + offsetX, y + offsetY)
            ctx.lineTo(x + gridSize + Math.random() * 20, y + Math.random() * 20)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Reducir la cantidad de formas geométricas
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 100 + 50

        ctx.beginPath()
        ctx.rect(x, y, size, size)
        ctx.strokeStyle = shapeColor
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    setCanvasDimensions()

    // Usar ResizeObserver en lugar de event listener para mejor rendimiento
    const resizeObserver = new ResizeObserver(setCanvasDimensions)
    resizeObserver.observe(document.body)

    // Redraw when theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          drawPattern()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => {
      resizeObserver.disconnect()
      observer.disconnect()
    }
  }, [theme])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
    />
  )
}
