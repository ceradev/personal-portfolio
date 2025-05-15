"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Code, GraduationCap, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"

interface SideNavigationProps {
  activeSection: string
}

export function SideNavigation({ activeSection }: SideNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Reordenado para coincidir con el orden de las secciones en la página
  const navItems = [
    { id: "home", label: "Inicio", icon: <Home className="h-4 w-4" /> },
    { id: "about", label: "Sobre Mí", icon: <User className="h-4 w-4" /> },
    { id: "skills", label: "Habilidades", icon: <Code className="h-4 w-4" /> },
    { id: "experience", label: "Experiencia", icon: <Briefcase className="h-4 w-4" /> },
    { id: "education", label: "Educación", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "projects", label: "Proyectos", icon: <Code className="h-4 w-4" /> },
    { id: "location", label: "Ubicación", icon: <MapPin className="h-4 w-4" /> },
    { id: "contact", label: "Contacto", icon: <Mail className="h-4 w-4" /> },
  ]

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <motion.div
          className="fixed top-4 left-4 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/80 border-red-500/50 text-zinc-200"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </motion.div>
      )}

      {/* Desktop side navigation */}
      {!isMobile && (
        <motion.div
          className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col items-center space-y-2 bg-zinc-900/80 backdrop-blur-md py-4 px-2 rounded-full border border-zinc-800">
            {navItems.map((item) => (
              <SmoothScrollLink key={item.id} href={`#${item.id}`}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full w-10 h-10 transition-colors duration-300 ${
                    activeSection === item.id
                      ? "bg-red-900/50 text-zinc-100"
                      : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200"
                  }`}
                  title={item.label}
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Button>
              </SmoothScrollLink>
            ))}
          </div>
        </motion.div>
      )}

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SmoothScrollLink href={`#${item.id}`} onClick={closeMenu}>
                    <Button
                      variant="ghost"
                      className={`flex items-center gap-3 text-lg px-6 py-3 rounded-full transition-colors duration-300 ${
                        activeSection === item.id
                          ? "bg-red-900/50 text-zinc-100"
                          : "text-zinc-400 hover:bg-zinc-900/30 hover:text-zinc-200"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </Button>
                  </SmoothScrollLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
