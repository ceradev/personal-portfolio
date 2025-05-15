"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useDJMode } from "@/components/dj-mode-context"

export function AudioVisualizer() {
  const { isDJMode } = useDJMode()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!isDJMode) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar tamaño del canvas
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Crear un AudioContext para analizar el audio ambiente
    let audioContext: AudioContext
    let analyser: AnalyserNode
    let dataArray: Uint8Array
    let source: MediaStreamAudioSourceNode

    // Función para inicializar el audio
    const initAudio = async () => {
      try {
        // Crear un stream de audio silencioso para evitar permisos
        audioContext = new AudioContext()
        analyser = audioContext.createAnalyser()
        analyser.fftSize = 256

        // Crear un oscilador para simular audio
        const oscillator = audioContext.createOscillator()
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime)

        const gainNode = audioContext.createGain()
        gainNode.gain.setValueAtTime(0.001, audioContext.currentTime) // Casi silencioso

        oscillator.connect(gainNode)
        gainNode.connect(analyser)
        oscillator.start()

        const bufferLength = analyser.frequencyBinCount
        dataArray = new Uint8Array(bufferLength)

        // Iniciar la animación
        animate()
      } catch (error) {
        console.error("Error initializing audio:", error)
        // Fallback: animar sin audio
        animateFallback()
      }
    }

    // Función para animar con datos de audio
    const animate = () => {
      if (!ctx || !canvas || !isDJMode) return

      analyser.getByteFrequencyData(dataArray)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar visualizador
      const barWidth = (canvas.width / dataArray.length) * 2.5
      let barHeight
      let x = 0

      for (let i = 0; i < dataArray.length; i++) {
        barHeight = dataArray[i] / 2

        // Gradiente basado en la frecuencia
        const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height)
        gradient.addColorStop(0, `rgba(236, 72, 153, ${barHeight / 200})`) // pink-500
        gradient.addColorStop(1, `rgba(147, 51, 234, ${barHeight / 200})`) // purple-600

        ctx.fillStyle = gradient
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

        x += barWidth + 1
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Animación de respaldo sin audio
    const animateFallback = () => {
      if (!ctx || !canvas || !isDJMode) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() / 1000
      const barCount = 64
      const barWidth = canvas.width / barCount

      for (let i = 0; i < barCount; i++) {
        // Crear una onda sinusoidal que varía con el tiempo
        const height = Math.sin(i * 0.2 + time) * 50 + Math.sin(i * 0.1 + time * 0.5) * 30 + 60

        // Gradiente
        const gradient = ctx.createLinearGradient(0, canvas.height - height, 0, canvas.height)
        gradient.addColorStop(0, `rgba(236, 72, 153, ${height / 200})`)
        gradient.addColorStop(1, `rgba(147, 51, 234, ${height / 200})`)

        ctx.fillStyle = gradient
        ctx.fillRect(i * barWidth, canvas.height - height, barWidth - 1, height)
      }

      animationRef.current = requestAnimationFrame(animateFallback)
    }

    // Iniciar audio o fallback
    if (isDJMode) {
      initAudio()
    }

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      // Limpiar recursos de audio
      if (audioContext && audioContext.state !== "closed") {
        audioContext.close()
      }
    }
  }, [isDJMode])

  if (!isDJMode) return null

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  )
}
