"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
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
}

export function ProjectsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const featuredProjects: Project[] = [
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
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      description:
        "An interactive weather application with real-time updates, forecasts, and location-based weather information.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      image: "/weather-dashboard.png",
      demoUrl: "https://weather.ceradev.com",
      githubUrl: "https://github.com/ceradev/weather-app",
      featured: true,
    },
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

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

  return (
    <div className="relative overflow-hidden rounded-xl border border-border backdrop-blur-md">
      <div
        ref={carouselRef}
        className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {featuredProjects.map((project, index) => {
          const isActive = index === currentIndex
          const isPrev = index === (currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1)
          const isNext = index === (currentIndex === featuredProjects.length - 1 ? 0 : currentIndex + 1)

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
                          <Button className="bg-red-600 hover:bg-red-700 text-white" size={isMobile ? "sm" : "default"}>
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

      {/* Navigation buttons with enhanced animations */}
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

      {/* Dots indicator with enhanced animations */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {featuredProjects.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-red-500 w-6" : "bg-zinc-600 hover:bg-zinc-500"
            }`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={index === currentIndex ? { scale: [1, 1.2, 1] } : {}}
            transition={index === currentIndex ? { duration: 1, repeat: Number.POSITIVE_INFINITY } : {}}
          />
        ))}
      </div>
    </div>
  )
}
