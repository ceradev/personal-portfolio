"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ChevronUp, ChevronDown, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  impact?: string
  category: string | string[]
  featured: boolean
  duration?: string
}

export function ProjectsSpotifyList() {
  const [activeTab, setActiveTab] = useState("all")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

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
      impact: "Reduced book checkout time by 70% and improved inventory management efficiency by 45%.",
      category: ["Web", "API"],
      featured: true,
      duration: "3:45",
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
      impact: "Attracted over 500 users in the first month with an average session duration of 25 minutes.",
      category: "Web",
      featured: true,
      duration: "4:20",
    },
    {
      id: "task-dashboard",
      title: "Task Management Dashboard",
      description:
        "A collaborative task management tool for teams with real-time updates, task assignment, and progress tracking.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "/task-management-app-interface.png",
      demoUrl: "https://tasks.ceradev.com",
      githubUrl: "https://github.com/ceradev/task-manager",
      impact: "Improved team productivity by 35% and reduced project completion time by 20%.",
      category: ["Web", "Mobile"],
      featured: false,
      duration: "2:55",
    },
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Redux"],
      image: "/modern-ecommerce-website.png",
      demoUrl: "https://shop.ceradev.com",
      githubUrl: "https://github.com/ceradev/ecommerce",
      impact: "Increased conversion rate by 25% and reduced cart abandonment by 30%.",
      category: "Web",
      featured: false,
      duration: "3:12",
    },
    {
      id: "mobile-fitness",
      title: "Fitness Tracking App",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.",
      technologies: ["React Native", "Firebase", "Redux", "Health APIs"],
      image: "/fitness-tracker-app-interface.png",
      demoUrl: "https://fitness.ceradev.com",
      githubUrl: "https://github.com/ceradev/fitness-app",
      impact: "Users reported 40% better adherence to fitness goals compared to other apps.",
      category: "Mobile",
      featured: false,
      duration: "3:30",
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
      impact: "Provides accurate weather forecasts with a 95% accuracy rate.",
      category: ["Web", "API"],
      featured: true,
      duration: "2:48",
    },
    {
      id: "recipe-finder",
      title: "Recipe Finder App",
      description:
        "A recipe discovery application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.",
      technologies: ["React", "Node.js", "MongoDB", "Spoonacular API"],
      image: "/recipe-app.png",
      demoUrl: "https://recipes.ceradev.com",
      githubUrl: "https://github.com/ceradev/recipe-finder",
      impact: "Helped users reduce food waste by 30% by suggesting recipes with available ingredients.",
      category: ["Web", "Mobile"],
      featured: false,
      duration: "3:05",
    },
  ]

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => {
          if (Array.isArray(project.category)) {
            return project.category.includes(activeTab)
          }
          return project.category === activeTab
        })

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  return (
    <div className="w-full">
      {/* Playlist header */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-end mb-8">
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          <Image src="/code-projects-portfolio.png" alt="Projects Playlist" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
          <div className="absolute bottom-3 left-3 text-white font-bold text-xs">PLAYLIST</div>
        </div>

        <div className="flex flex-col md:pb-6">
          <span className="text-foreground/70 text-xs font-medium">PLAYLIST</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-2 mb-4">Mis Proyectos</h2>
          <div className="flex items-center text-foreground/70 text-xs">
            <span className="font-semibold text-foreground/90">César A. Suárez</span>
            <span className="mx-1">•</span>
            <span>{projects.length} proyectos</span>
          </div>
        </div>
      </div>

      {/* Controls and Tabs */}
      <div className="flex items-center gap-4 mb-6">
        <Button size="icon" className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white">
          <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
        </Button>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="border-b border-border w-full justify-start gap-4 bg-transparent p-0">
            <TabsTrigger
              value="all"
              className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-2 py-1 text-xs"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="Web"
              className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-2 py-1 text-xs"
            >
              Web
            </TabsTrigger>
            <TabsTrigger
              value="Mobile"
              className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-2 py-1 text-xs"
            >
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value="API"
              className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-2 py-1 text-xs"
            >
              API
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Project list */}
      <div className="space-y-1">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`group flex items-center gap-3 p-1.5 hover:bg-background/10 rounded-md transition-colors ${
                expandedProject === project.id ? "bg-background/5" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="text-foreground/50 w-5 text-center text-xs">{index + 1}</div>

              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="flex-grow min-w-0">
                <h3 className="font-medium text-xs text-foreground truncate">{project.title}</h3>
                <p className="text-[10px] text-foreground/70 truncate">{project.description.substring(0, 60)}...</p>
              </div>

              <div className="text-foreground/50 text-[10px]">{project.duration}</div>

              <motion.button
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleExpand(project.id)}
              >
                {expandedProject === project.id ? (
                  <ChevronUp className="h-4 w-4 text-foreground/70" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-foreground/70" />
                )}
              </motion.button>
            </motion.div>

            <AnimatePresence>
              {expandedProject === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-3 py-2 ml-8 bg-background/5 rounded-md mb-2"
                >
                  <p className="text-xs text-foreground/90 mb-2">{project.description}</p>

                  {project.impact && (
                    <div className="bg-background/10 p-2 rounded-md text-[10px] text-foreground/80 mb-2">
                      <span className="font-medium text-red-400">Impacto:</span> {project.impact}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-background/20 text-foreground/80 hover:bg-background/30 text-[10px] px-2 py-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] text-foreground/70 hover:text-foreground/90"
                      >
                        <ExternalLink className="h-3 w-3" /> Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] text-foreground/70 hover:text-foreground/90"
                      >
                        <Github className="h-3 w-3" /> Código
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
