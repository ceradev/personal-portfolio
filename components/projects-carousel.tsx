"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  category: string | string[]
}

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const projects: Project[] = [
    {
      id: "library-system",
      title: "Online Library System",
      description:
        "A comprehensive online library management system built with Angular, Spring Boot, and PostgreSQL. Implemented security with Keycloak and containerized with Docker.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Keycloak", "Docker"],
      image: "/modern-ecommerce-website.png",
      demoUrl: "https://library-demo.ceradev.com",
      githubUrl: "https://github.com/ceradev/library-system",
      featured: true,
      category: ["Web", "API"],
    },
    {
      id: "music-app",
      title: "Music Streaming App",
      description:
        "A Spotify-inspired music streaming application with user authentication, playlist creation, and music visualization features.",
      technologies: ["React", "Node.js", "MongoDB", "Web Audio API"],
      image: "/social-media-app-interface.png",
      demoUrl: "https://music-app.ceradev.com",
      githubUrl: "https://github.com/ceradev/music-app",
      featured: true,
      category: "Web",
    },
    {
      id: "task-dashboard",
      title: "Task Management Dashboard",
      description:
        "A collaborative task management tool for teams with real-time updates, task assignment, and progress tracking.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "/task-management-board.png",
      demoUrl: "https://tasks.ceradev.com",
      githubUrl: "https://github.com/ceradev/task-manager",
      featured: false,
      category: ["Web", "Mobile"],
    },
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Redux"],
      image: "/e-commerce-concept.png",
      demoUrl: "https://shop.ceradev.com",
      githubUrl: "https://github.com/ceradev/ecommerce",
      featured: false,
      category: "Web",
    },
    {
      id: "mobile-fitness",
      title: "Fitness Tracking App",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.",
      technologies: ["React Native", "Firebase", "Redux", "Health APIs"],
      image: "/creative-portfolio-layout.png",
      demoUrl: "https://fitness.ceradev.com",
      githubUrl: "https://github.com/ceradev/fitness-app",
      featured: false,
      category: "Mobile",
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      description:
        "An interactive weather application with real-time updates, forecasts, and location-based weather information.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      image: "/weather-scene.png",
      demoUrl: "https://weather.ceradev.com",
      githubUrl: "https://github.com/ceradev/weather-app",
      featured: true,
      category: ["Web", "API"],
    },
    {
      id: "recipe-finder",
      title: "Recipe Finder App",
      description:
        "A recipe discovery application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.",
      technologies: ["React", "Node.js", "MongoDB", "Spoonacular API"],
      image: "/data-analytics-dashboard.png",
      demoUrl: "https://recipes.ceradev.com",
      githubUrl: "https://github.com/ceradev/recipe-finder",
      featured: false,
      category: ["Web", "Mobile"],
    },
  ]

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => {
          if (Array.isArray(project.category)) {
            return project.category.includes(activeFilter)
          }
          return project.category === activeFilter
        })

  // Obtener todas las categorías únicas
  const allCategories = [
    "all",
    ...new Set(
      projects.flatMap((project) => (Array.isArray(project.category) ? project.category : [project.category])),
    ),
  ]

  // Reiniciar el índice cuando cambia el filtro
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeFilter])

  const nextSlide = () => {
    if (isAnimating || filteredProjects.length <= 1) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating || filteredProjects.length <= 1) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Autoplay
  useEffect(() => {
    if (filteredProjects.length <= 1) return

    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex, filteredProjects.length])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  // Si no hay proyectos después de filtrar
  if (filteredProjects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] text-center">
        <div className="text-4xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold mb-2">No se encontraron proyectos</h3>
        <p className="text-foreground/70 max-w-md">
          No hay proyectos que coincidan con el filtro seleccionado. Prueba con otra categoría.
        </p>
        <Button className="mt-6 bg-primary hover:bg-primary/90" onClick={() => setActiveFilter("all")}>
          Ver todos los proyectos
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {allCategories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            className={`rounded-full ${
              activeFilter === category
                ? "bg-primary hover:bg-primary/90 text-white"
                : "hover:bg-background/20 border-primary/30 hover:border-primary/60"
            }`}
            onClick={() => setActiveFilter(category)}
          >
            {category === "all" ? "Todos" : category}
          </Button>
        ))}
      </div>

      {/* Carrusel */}
      <div className="relative overflow-hidden rounded-xl border border-border backdrop-blur-md">
        <div
          ref={carouselRef}
          className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {filteredProjects.map((project, index) => {
            const isActive = index === currentIndex
            const isPrev = index === (currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1)
            const isNext = index === (currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1)

            return (
              <motion.div
                key={project.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, x: index > currentIndex ? 100 : -100 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                  scale: isActive ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === currentIndex}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                        {project.title}
                      </h3>
                      <p className="text-zinc-300 mb-3 sm:mb-4 max-w-2xl text-sm sm:text-base">{project.description}</p>

                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            className="bg-red-900/50 hover:bg-red-800/50 text-zinc-200 border-none text-xs sm:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 sm:gap-3">
                        {project.demoUrl && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              className="bg-red-600 hover:bg-red-700 text-white"
                              size={isMobile ? "sm" : "default"}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Ver Demo
                            </Button>
                          </motion.div>
                        )}
                        {project.githubUrl && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              className="border-red-500/50 text-zinc-200 hover:bg-zinc-800/50"
                              size={isMobile ? "sm" : "default"}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Ver Código
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Navigation buttons */}
        {filteredProjects.length > 1 && (
          <>
            <motion.div
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50 text-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </motion.div>

            <motion.div
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50 text-white"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </>
        )}

        {/* Dots indicator */}
        {filteredProjects.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {filteredProjects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-500 w-6" : "bg-zinc-600 hover:bg-zinc-500"
                }`}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 500)
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={index === currentIndex ? { scale: [1, 1.2, 1] } : {}}
                transition={index === currentIndex ? { duration: 1, repeat: Number.POSITIVE_INFINITY } : {}}
              />
            ))}
          </div>
        )}
      </div>

      {/* Contador de proyectos */}
      <div className="text-center text-sm text-foreground/70">
        Mostrando {filteredProjects.length} de {projects.length} proyectos
        {activeFilter !== "all" && ` • Filtro: ${activeFilter}`}
      </div>
    </div>
  )
}
