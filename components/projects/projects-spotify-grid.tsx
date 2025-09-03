"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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
}

export function ProjectsSpotifyGrid() {
  const [activeTab, setActiveTab] = useState("all")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

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
    },
  ]

  const filteredProjects =
    activeTab === "all"
      ? projects.filter((project) => !project.featured)
      : projects.filter((project) => {
          if (Array.isArray(project.category)) {
            return project.category.includes(activeTab) && !project.featured
          }
          return project.category === activeTab && !project.featured
        })

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-1 mb-6">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-red-900/50 data-[state=active]:text-zinc-100 text-zinc-400 text-xs"
          >
            Todos
          </TabsTrigger>
          <TabsTrigger
            value="Web"
            className="data-[state=active]:bg-red-900/50 data-[state=active]:text-zinc-100 text-zinc-400 text-xs"
          >
            Web
          </TabsTrigger>
          <TabsTrigger
            value="Mobile"
            className="data-[state=active]:bg-red-900/50 data-[state=active]:text-zinc-100 text-zinc-400 text-xs"
          >
            Mobile
          </TabsTrigger>
          <TabsTrigger
            value="API"
            className="data-[state=active]:bg-red-900/50 data-[state=active]:text-zinc-100 text-zinc-400 text-xs"
          >
            API
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-zinc-900/80 rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg hover:shadow-red-900/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                whileHover={{ borderColor: "rgba(239, 68, 68, 0.5)" }}
              >
                <div className="relative aspect-square">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4 className="text-xs font-semibold text-white truncate">{project.title}</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <Badge
                          key={i}
                          className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 text-[10px] px-1.5 py-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge className="bg-zinc-800/30 text-zinc-400 hover:bg-zinc-700/30 text-[10px] px-1.5 py-0">
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-2 flex justify-between items-center">
                  <div className="flex gap-1">
                    {project.demoUrl && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-6 w-6 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-[10px]">Ver demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    {project.githubUrl && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-6 w-6 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                            >
                              <Github className="h-3 w-3" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-[10px]">Ver código</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 h-6 w-6 p-0"
                    onClick={() => toggleExpand(project.id)}
                  >
                    {expandedProject === project.id ? (
                      <ChevronUp className="h-3 w-3" />
                    ) : (
                      <ChevronDown className="h-3 w-3" />
                    )}
                  </Button>
                </div>

                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-3 pb-3"
                    >
                      <p className="text-[10px] text-zinc-300/90 mb-2">{project.description}</p>

                      {project.impact && (
                        <div className="bg-zinc-800/50 p-1.5 rounded-md text-[10px] text-zinc-300 mb-2">
                          <span className="font-medium text-red-400">Impacto:</span> {project.impact}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 text-[10px] px-1.5 py-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
