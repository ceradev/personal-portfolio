"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDJMode } from "@/components/layout/dj-mode-context"

export function HomeButton() {
  const [activeSection, setActiveSection] = useState("home")
  const { isDJMode } = useDJMode()
  const isHomeActive = activeSection === "home"

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      // Si estamos en la parte superior de la página, consideramos que estamos en "home"
      if (scrollPosition < 300) {
        setActiveSection("home")
        return
      }

      // Verificamos cada sección para ver cuál está actualmente visible
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    // Ejecutamos la función una vez al inicio para establecer el estado inicial
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {!isHomeActive && (
        <motion.div
          className="fixed top-6 left-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className={`rounded-full h-10 w-10 backdrop-blur-sm bg-background/80 shadow-sm hover:shadow-md transition-all ${
              isDJMode
                ? "border border-pink-500/50 hover:border-pink-500 hover:bg-pink-950/20"
                : "border border-border hover:bg-background/50"
            }`}
            aria-label="Volver al inicio"
          >
            <Home className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
