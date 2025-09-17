"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Briefcase, Mail, Settings, Quote, FolderKanban } from "lucide-react"
import { Button } from "@/components/ui/display/button"
import { AvatarButton } from "@/components/ui/display/avatar-button"
import { SmoothScrollLink } from "@/utils/smooth-scroll-link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/feedback/tooltip"

interface TopNavigationProps {
  activeSection: string
}

export function TopNavigation({ activeSection }: Readonly<TopNavigationProps>) {
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHomeActive = activeSection === "home"

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Reordenado para coincidir con el orden de las secciones en la página
  const navItems = [
    { id: "services", label: "Servicios", icon: <Settings className="h-4 w-4" /> },
    { id: "projects", label: "Proyectos", icon: <FolderKanban className="h-4 w-4" /> },
    { id: "testimonials", label: "Testimonios", icon: <Quote className="h-4 w-4" /> },
    { id: "about", label: "Sobre Mí", icon: <User className="h-4 w-4" /> },
    { id: "experience", label: "Experiencia", icon: <Briefcase className="h-4 w-4" /> },
    { id: "contact", label: "Contacto", icon: <Mail className="h-4 w-4" /> },
  ]

  // Para móvil, mostrar todos los elementos en la barra inferior
  const mobileNavItems = navItems

  return (
    <>
      {/* Avatar button - Top left */}
      <AnimatePresence>
        {!isHomeActive && (
          <motion.div
            className={`fixed z-[60] ${isMobile ? 'top-3 left-4' : 'top-6 left-6'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <AvatarButton className={isMobile ? "w-8 h-8" : ""} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centered navigation for desktop - Positioned absolutely to ensure perfect centering */}
      {!isMobile && (
        <AnimatePresence>
          {!isHomeActive && (
            <motion.div
              className="fixed top-4 left-0 right-0 z-50 flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <TooltipProvider>
                <motion.div
                  className={`flex items-center space-x-1 backdrop-blur-md ${
                    scrolled
                      ? "bg-background/70 dark:bg-background/80 shadow-md"
                      : "bg-background/20 dark:bg-background/30"
                  } py-2 px-3 rounded-full border border-border shadow-lg transition-all duration-300`}
                >
                  {navItems.map((item) => (
                    <Tooltip key={item.id}>
                      <TooltipTrigger asChild>
                        <div>
                          <SmoothScrollLink href={`#${item.id}`}>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`nav-item ${
                                  activeSection === item.id ? "nav-item-active" : "nav-item-inactive"
                                }`}
                              >
                                {item.icon}
                                <span className="sr-only">{item.label}</span>
                              </Button>
                            </motion.div>
                          </SmoothScrollLink>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        className="backdrop-blur-md bg-background/30 dark:bg-background/40 border-border text-foreground"
                      >
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </motion.div>
              </TooltipProvider>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Bottom navigation for mobile with enhanced animations */}
      {isMobile && (
        <AnimatePresence>
          {!isHomeActive && (
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 dark:bg-background/80 border-t border-border shadow-lg"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <div className="flex justify-around items-center py-2">
                {mobileNavItems.map((item) => (
                  <SmoothScrollLink key={item.id} href={`#${item.id}`}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full transition-colors duration-300 ${
                          activeSection === item.id
                            ? "bg-primary/50 text-primary-foreground"
                            : "text-foreground/70 hover:bg-background/30 dark:hover:bg-background/40 hover:text-foreground"
                        }`}
                      >
                        <div
                          className={`${activeSection === item.id ? "text-primary-foreground" : "text-foreground/70"}`}
                        >
                          {item.icon}
                        </div>
                        <span className="sr-only">{item.label}</span>
                      </Button>
                    </motion.div>
                  </SmoothScrollLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
