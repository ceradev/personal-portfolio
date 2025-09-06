"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Download, FolderOpen, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollDownArrow } from "@/components/utils/scroll-down-arrow"
import { FaReact, FaPython, FaNodeJs, FaAws } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiDocker, SiGit } from "react-icons/si"

interface HeroSectionProps {
  readonly isMobile: boolean
}

export function HeroSection({ isMobile }: HeroSectionProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const techWords = [
    "dev",
    "stack", 
    "code",
    "build",
    "tech",
    "full"
  ]

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const typeWriter = () => {
      const currentWord = techWords[currentWordIndex]
      
      if (!isDeleting) {
        // Fase de escritura
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1))
          timeoutId = setTimeout(typeWriter, 100) // 0,1 segundos por letra
        } else {
          // Palabra completa, esperar antes de borrar
          timeoutId = setTimeout(() => setIsDeleting(true), 300) // 0,3 segundos para leer
        }
      } else if (displayedText.length > 0) {
        // Fase de borrado
        setDisplayedText(displayedText.substring(0, displayedText.length - 1))
        timeoutId = setTimeout(typeWriter, 50) // Borrado más rápido
      } else {
        // Cambiar a siguiente palabra
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % techWords.length)
      }
    }

    // Iniciar después de un delay inicial
    timeoutId = setTimeout(typeWriter, 500) // Empezar después de 1 segundo
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [currentWordIndex, displayedText, isDeleting, techWords])

  const handleDownloadCV = () => {
    // Crear un enlace para descargar el CV
    const link = document.createElement("a")
    link.href = "/cv-cesar-suarez.pdf"
    link.download = "CV-Cesar-Suarez.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-start pt-6">

      {/* Split content layout with improved mobile spacing */}
      <div className="container mx-auto px-4 md:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side - Text content with improved mobile typography */}
        <motion.div
          className="text-left order-2 lg:order-1 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/25 dark:border-primary/40 text-primary dark:text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
              className="inline-block h-2 w-2 rounded-full bg-primary mr-2"
            ></motion.span>
            Disponible para proyectos
          </div>

          {/* Nombre cambiante con efecto mejorado */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <motion.span 
              className="block text-foreground drop-shadow-sm dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hola, soy
            </motion.span>
            <div className="mt-1 relative drop-shadow-sm dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-gradient group cursor-pointer inline-block">
              <motion.span 
                className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                cera
              </motion.span>
              <div className="inline-block ml-1 relative">
                <motion.span
                  className="inline-block text-primary font-bold"
                  whileHover={{ scale: 1.05, color: "#ef4444" }}
                >
                  {displayedText}
                </motion.span>
                
                {/* Cursor parpadeante */}
                <motion.span
                  className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </div>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-red-500 to-primary rounded-full group-hover:shadow-lg group-hover:shadow-primary/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/30 to-transparent rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: [0, 0.6, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  delay: 2.2, 
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </h1>

          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl text-foreground/90 dark:text-foreground/95 mb-6 font-light drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.2 }}
            >
              D
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.25 }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.3 }}
            >
              s
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.35 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.4 }}
            >
              r
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.45 }}
            >
              r
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.5 }}
            >
              o
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.55 }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.6 }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.65 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.7 }}
            >
              d
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.75 }}
            >
              o
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.8 }}
            >
              r
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.85 }}
            >
              &nbsp;
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.9 }}
            >
              F
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.95 }}
            >
              u
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.0 }}
            >
              l
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.05 }}
            >
              l
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.1 }}
            >
              &nbsp;
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.15 }}
            >
              S
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.2 }}
            >
              t
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.25 }}
            >
              a
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.3 }}
            >
              c
            </motion.span>
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.35 }}
            >
              k
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.4 }}
            >
              &nbsp;con pasión por crear&nbsp;
            </motion.span>
            <motion.span
              className="text-gradient bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.6 }}
            >
              experiencias digitales excepcionales
            </motion.span>
          </motion.h2>

          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Button
              onClick={() => {
                const aboutSection = document.getElementById("about")
                if (aboutSection) {
                  window.scrollTo({
                    top: aboutSection.offsetTop,
                    behavior: "smooth",
                  })
                }
              }}
                className="bg-gradient-to-r from-primary via-red-500 to-primary hover:from-primary/90 hover:via-red-500/90 hover:to-primary/90 text-primary-foreground rounded-full px-8 py-3 group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <span className="relative z-10 flex items-center gap-2 font-medium">
                <FolderOpen className="h-4 w-4" />
                Conoce Más
              </span>
              <motion.span
                  className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-red-500/50 to-primary/50 rounded-full blur"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
              />
            </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Button
              variant="outline"
              onClick={handleDownloadCV}
                className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary rounded-full px-8 py-3 font-medium relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/50"
            >
                <span className="relative z-10 flex items-center gap-2">
                <Download className="h-4 w-4" />
                Descargar CV
              </span>
              <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-red-500/10 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute -inset-1 bg-primary/20 rounded-full blur"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
              />
            </Button>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3 ml-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
            >
              <Link href="https://linkedin.com/in/césar-aramis-suárez-orizondo/" target="_blank" className="group relative">
                <motion.div
                  className="p-3 rounded-full backdrop-blur-sm bg-background/30 dark:bg-background/40 border border-border hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-5 w-5 text-foreground/70 group-hover:text-blue-500 transition-colors duration-300" />
                  <motion.div
                    className="absolute -inset-1 bg-blue-500/20 rounded-full blur"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
              
              <Link href="https://github.com" target="_blank" className="group relative">
                <motion.div
                  className="p-3 rounded-full backdrop-blur-sm bg-background/30 dark:bg-background/40 border border-border hover:border-gray-600/50 hover:bg-gray-600/10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.15, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-5 w-5 text-foreground/70 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
                  <motion.div
                    className="absolute -inset-1 bg-gray-600/20 rounded-full blur"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
              
              <Link href="mailto:suarezorizondocesararamis@gmail.com" className="group relative">
                <motion.div
                  className="p-3 rounded-full backdrop-blur-sm bg-background/30 dark:bg-background/40 border border-border hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-5 w-5 text-foreground/70 group-hover:text-red-500 transition-colors duration-300" />
                  <motion.div
                    className="absolute -inset-1 bg-red-500/20 rounded-full blur"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Profile image with enhanced 3D effect and mobile optimization */}
        <motion.div
          className="relative order-1 lg:order-2 flex justify-center mx-auto max-w-[280px] md:max-w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Enhanced decorative elements with glow effect */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/50 shadow-lg shadow-primary/20"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/50 shadow-lg shadow-primary/20"
              animate={{ rotate: [0, -5, 0, 5, 0] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            ></motion.div>

            {/* Enhanced animated rings with glow */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 shadow-lg shadow-primary/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            ></motion.div>

            <motion.div
              className="absolute inset-4 rounded-full border-2 border-dashed border-primary/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            ></motion.div>

            {/* Additional orbital ring for more tech badges */}
            <motion.div
              className="absolute inset-[-20px] rounded-full border border-dashed border-primary/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            ></motion.div>

            {/* Dynamic light halo behind profile */}
            <motion.div
              className="absolute inset-6 rounded-full bg-gradient-to-r from-primary/30 via-red-500/20 to-primary/30 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Enhanced profile image with interactive effects */}
            <motion.div
              className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/50 shadow-xl shadow-primary/30 bg-gradient-to-br from-primary/5 to-transparent"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(220, 38, 38, 0.8)",
                boxShadow: "0 0 40px rgba(220, 38, 38, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/profile-portrait.jpg" alt="César Suárez" fill className="object-cover" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Animated overlay with pulse effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

            </motion.div>
          </div>

          {/* Floating tech stack badges - Outside profile image */}
          
          {/* React - Top Right */}
              <motion.div
            className="absolute -top-8 -right-8 md:-top-12 md:-right-12 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-3 border border-border hover:border-blue-400/50 group"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
              >
            <FaReact className="h-4 w-4 md:h-5 md:w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </motion.div>

          {/* TypeScript - Right */}
              <motion.div
            className="absolute top-1/2 -right-12 md:-right-16 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-3 border border-border hover:border-blue-600/50 group"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(37, 99, 235, 0.6)" }}
              >
            <SiTypescript className="h-4 w-4 md:h-5 md:w-5 text-blue-600 group-hover:text-blue-500 transition-colors" />
              </motion.div>

          {/* Next.js - Bottom Right */}
              <motion.div
            className="absolute -bottom-12 -right-12 md:-bottom-16 md:-right-16 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-3 border border-border hover:border-foreground/50 group"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)" }}
          >
            <SiNextdotjs className="h-4 w-4 md:h-5 md:w-5 text-foreground group-hover:text-gray-600 transition-colors" />
          </motion.div>

          {/* JavaScript - Top Left */}
          <motion.div
            className="absolute -top-8 -left-8 md:-top-12 md:-left-12 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-3 border border-border hover:border-yellow-500/50 group"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(245, 158, 11, 0.6)" }}
          >
            <SiJavascript className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
          </motion.div>

          {/* Python - Left */}
          <motion.div
            className="absolute top-1/2 -left-12 md:-left-16 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-3 border border-border hover:border-green-500/50 group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
          >
            <FaPython className="h-4 w-4 md:h-5 md:w-5 text-green-500 group-hover:text-green-400 transition-colors" />
          </motion.div>

          {/* Node.js - Bottom Left */}
          <motion.div
            className="absolute -bottom-12 -left-12 md:-bottom-16 md:-left-16 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-3 border border-border hover:border-green-600/50 group"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(22, 163, 74, 0.6)" }}
          >
            <FaNodeJs className="h-4 w-4 md:h-5 md:w-5 text-green-600 group-hover:text-green-500 transition-colors" />
          </motion.div>

          {/* Tailwind CSS - Top Center */}
          <motion.div
            className="absolute -top-10 md:-top-14 left-1/2 transform -translate-x-1/2 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-3 border border-border hover:border-cyan-500/50 group"
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(6, 182, 212, 0.6)" }}
          >
            <SiTailwindcss className="h-4 w-4 md:h-5 md:w-5 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
          </motion.div>

          {/* MongoDB - Bottom Center */}
          <motion.div
            className="absolute -bottom-16 md:-bottom-20 left-1/2 transform -translate-x-1/2 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-3 border border-border hover:border-green-700/50 group"
            animate={{ x: [5, -5, 5] }}
            transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.5 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(21, 128, 61, 0.6)" }}
          >
            <SiMongodb className="h-4 w-4 md:h-5 md:w-5 text-green-700 group-hover:text-green-600 transition-colors" />
          </motion.div>

          {/* AWS - Far Top Right */}
          <motion.div
            className="absolute -top-14 -right-14 md:-top-18 md:-right-18 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-2.5 border border-border hover:border-orange-500/50 group"
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 10, 0, -10, 0]
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.2 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(251, 146, 60, 0.6)" }}
          >
            <FaAws className="h-4 w-4 text-orange-500 group-hover:text-orange-400 transition-colors" />
          </motion.div>

          {/* Docker - Far Left */}
          <motion.div
            className="absolute top-1/4 -left-14 md:-left-18 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-2.5 border border-border hover:border-blue-500/50 group"
            animate={{ 
              x: [0, -6, 0],
              y: [0, 4, 0]
            }}
            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3.5 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
          >
            <SiDocker className="h-4 w-4 text-blue-500 group-hover:text-blue-400 transition-colors" />
              </motion.div>

          {/* Git - Far Bottom Right */}
          <motion.div
            className="absolute -bottom-20 -right-6 md:-bottom-24 md:-right-8 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-lg rounded-full p-2 md:p-2.5 border border-border hover:border-red-600/50 group"
            animate={{ 
              y: [0, 6, 0],
              rotate: [0, -15, 0, 15, 0]
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(220, 38, 38, 0.6)" }}
          >
            <SiGit className="h-4 w-4 text-red-600 group-hover:text-red-500 transition-colors" />
            </motion.div>

        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <ScrollDownArrow targetSection="about" />
    </section>
  )
}
