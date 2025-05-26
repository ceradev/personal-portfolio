"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Search,
  Filter,
  Grid,
  List,
  LayoutGrid,
  Layers,
  X,
  Info,
  Star,
  Calendar,
  Tag,
  Code,
  Server,
  Database,
  Monitor,
  Smartphone,
  Cloud,
  Users,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMobile } from "@/hooks/use-mobile"

// Tipos
interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  impact?: string
  category: string | string[]
  type: string | string[]
  featured: boolean
  status: "completed" | "in-progress" | "planned"
  date: string
  client?: string
  role?: string
  teamSize?: number
  duration?: string
  highlights?: string[]
}

type ViewMode = "grid" | "list" | "carousel" | "compact"
type SortOption = "newest" | "oldest" | "alphabetical" | "featured"

// Componente principal
export function EnhancedProjectsSection() {
  const isMobile = useMobile()

  // Estados
  const [activeTab, setActiveTab] = useState("all")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("newest")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<{
    types: string[]
    technologies: string[]
    status: string[]
  }>({
    types: [],
    technologies: [],
    status: [],
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Referencias
  const searchInputRef = useRef<HTMLInputElement>(null)
  const projectsPerPage = isMobile ? 6 : 9

  // Datos de proyectos
  const projects: Project[] = [
    {
      id: "library-system",
      title: "Online Library System",
      description: "A comprehensive online library management system built with Angular, Spring Boot, and PostgreSQL.",
      longDescription:
        "A comprehensive online library management system built with Angular, Spring Boot, and PostgreSQL. Implemented security with Keycloak and containerized with Docker. The system allows librarians to manage books, patrons, and loans, while providing a user-friendly interface for patrons to browse, search, and check out books.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Keycloak", "Docker"],
      image: "/modern-ecommerce-website.png",
      demoUrl: "https://library-demo.ceradev.com",
      githubUrl: "https://github.com/ceradev/library-system",
      impact: "Reduced book checkout time by 70% and improved inventory management efficiency by 45%.",
      category: ["Web", "API"],
      type: ["Full Stack", "Enterprise"],
      featured: true,
      status: "completed",
      date: "2023-05-15",
      client: "Public Library",
      role: "Lead Developer",
      teamSize: 3,
      duration: "4 months",
      highlights: [
        "Implemented real-time availability updates",
        "Integrated with payment gateway for late fees",
        "Developed comprehensive reporting system",
        "Created mobile-responsive design",
      ],
    },
    {
      id: "music-app",
      title: "Music Streaming App",
      description:
        "A Spotify-inspired music streaming application with user authentication, playlist creation, and music visualization features.",
      longDescription:
        "A Spotify-inspired music streaming application with user authentication, playlist creation, and music visualization features. The app allows users to discover new music, create and share playlists, and enjoy a personalized listening experience with recommendations based on their preferences.",
      technologies: ["React", "Node.js", "MongoDB", "Web Audio API"],
      image: "/social-media-app-interface.png",
      demoUrl: "https://music-app.ceradev.com",
      githubUrl: "https://github.com/ceradev/music-app",
      impact: "Attracted over 500 users in the first month with an average session duration of 25 minutes.",
      category: "Web",
      type: ["Full Stack", "Entertainment"],
      featured: true,
      status: "completed",
      date: "2023-02-10",
      role: "Full Stack Developer",
      teamSize: 2,
      duration: "3 months",
      highlights: [
        "Implemented audio visualization with Web Audio API",
        "Created recommendation algorithm",
        "Developed offline playback functionality",
        "Built responsive UI with dark mode support",
      ],
    },
    {
      id: "task-dashboard",
      title: "Task Management Dashboard",
      description:
        "A collaborative task management tool for teams with real-time updates, task assignment, and progress tracking.",
      longDescription:
        "A collaborative task management tool for teams with real-time updates, task assignment, and progress tracking. The dashboard provides a visual representation of project progress, allows for easy task assignment and prioritization, and includes features for time tracking and reporting.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "/task-management-app-interface.png",
      demoUrl: "https://tasks.ceradev.com",
      githubUrl: "https://github.com/ceradev/task-manager",
      impact: "Improved team productivity by 35% and reduced project completion time by 20%.",
      category: ["Web", "Mobile"],
      type: ["Frontend", "Productivity"],
      featured: false,
      status: "completed",
      date: "2022-11-20",
      client: "Internal Tool",
      role: "Frontend Developer",
      teamSize: 2,
      duration: "2 months",
      highlights: [
        "Implemented drag-and-drop interface",
        "Created real-time collaboration features",
        "Developed customizable dashboard widgets",
        "Built comprehensive reporting system",
      ],
    },
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management.",
      longDescription:
        "A full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management. The platform includes features for inventory management, customer accounts, order tracking, and analytics, providing a complete solution for online retail businesses.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Redux"],
      image: "/modern-ecommerce-website.png",
      demoUrl: "https://shop.ceradev.com",
      githubUrl: "https://github.com/ceradev/ecommerce",
      impact: "Increased conversion rate by 25% and reduced cart abandonment by 30%.",
      category: "Web",
      type: ["Full Stack", "E-commerce"],
      featured: false,
      status: "completed",
      date: "2022-08-05",
      client: "Retail Client",
      role: "Lead Developer",
      teamSize: 4,
      duration: "6 months",
      highlights: [
        "Implemented secure payment processing",
        "Created inventory management system",
        "Developed customer account portal",
        "Built analytics dashboard for business insights",
      ],
    },
    {
      id: "mobile-fitness",
      title: "Fitness Tracking App",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.",
      longDescription:
        "A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations. The app allows users to create custom workout plans, track their nutrition intake, set goals, and monitor their progress over time with detailed analytics and visualizations.",
      technologies: ["React Native", "Firebase", "Redux", "Health APIs"],
      image: "/fitness-tracker-app-interface.png",
      demoUrl: "https://fitness.ceradev.com",
      githubUrl: "https://github.com/ceradev/fitness-app",
      impact: "Users reported 40% better adherence to fitness goals compared to other apps.",
      category: "Mobile",
      type: ["Mobile", "Health"],
      featured: false,
      status: "completed",
      date: "2022-06-15",
      client: "Health & Fitness Company",
      role: "Mobile Developer",
      teamSize: 3,
      duration: "4 months",
      highlights: [
        "Integrated with health tracking devices",
        "Implemented personalized workout recommendations",
        "Created nutrition tracking and meal planning",
        "Developed progress visualization charts",
      ],
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      description:
        "An interactive weather application with real-time updates, forecasts, and location-based weather information.",
      longDescription:
        "An interactive weather application with real-time updates, forecasts, and location-based weather information. The dashboard provides detailed weather data, including temperature, precipitation, wind, and air quality, along with hourly and 10-day forecasts for any location worldwide.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      image: "/weather-dashboard.png",
      demoUrl: "https://weather.ceradev.com",
      githubUrl: "https://github.com/ceradev/weather-app",
      impact: "Provides accurate weather forecasts with a 95% accuracy rate.",
      category: ["Web", "API"],
      type: ["Frontend", "Utility"],
      featured: true,
      status: "completed",
      date: "2022-04-10",
      role: "Frontend Developer",
      teamSize: 1,
      duration: "1 month",
      highlights: [
        "Implemented real-time weather updates",
        "Created interactive weather maps",
        "Developed location-based forecasting",
        "Built responsive design for all devices",
      ],
    },
    {
      id: "recipe-finder",
      title: "Recipe Finder App",
      description:
        "A recipe discovery application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.",
      longDescription:
        "A recipe discovery application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types. The app includes features for saving favorite recipes, creating shopping lists, and sharing recipes with friends and family.",
      technologies: ["React", "Node.js", "MongoDB", "Spoonacular API"],
      image: "/recipe-app.png",
      demoUrl: "https://recipes.ceradev.com",
      githubUrl: "https://github.com/ceradev/recipe-finder",
      impact: "Helped users reduce food waste by 30% by suggesting recipes with available ingredients.",
      category: ["Web", "Mobile"],
      type: ["Full Stack", "Lifestyle"],
      featured: false,
      status: "completed",
      date: "2022-02-20",
      client: "Food Blog",
      role: "Full Stack Developer",
      teamSize: 2,
      duration: "3 months",
      highlights: [
        "Implemented ingredient-based search algorithm",
        "Created dietary restriction filtering",
        "Developed shopping list generator",
        "Built recipe sharing functionality",
      ],
    },
    {
      id: "ai-chatbot",
      title: "AI Customer Service Chatbot",
      description:
        "An intelligent chatbot for customer service that uses natural language processing to understand and respond to customer inquiries.",
      longDescription:
        "An intelligent chatbot for customer service that uses natural language processing to understand and respond to customer inquiries. The chatbot can handle common customer questions, process returns and exchanges, and escalate complex issues to human agents when necessary.",
      technologies: ["Python", "TensorFlow", "NLP", "FastAPI", "React"],
      image: "/data-analytics-dashboard.png",
      demoUrl: "https://chatbot.ceradev.com",
      githubUrl: "https://github.com/ceradev/ai-chatbot",
      impact: "Reduced customer service response time by 60% and handled 70% of inquiries without human intervention.",
      category: ["Web", "AI"],
      type: ["AI/ML", "Enterprise"],
      featured: true,
      status: "completed",
      date: "2023-07-05",
      client: "E-commerce Company",
      role: "AI Developer",
      teamSize: 3,
      duration: "5 months",
      highlights: [
        "Implemented natural language understanding",
        "Created context-aware conversation flow",
        "Developed sentiment analysis for customer satisfaction",
        "Built integration with CRM systems",
      ],
    },
    {
      id: "inventory-system",
      title: "Inventory Management System",
      description:
        "A comprehensive inventory management system for retail businesses with barcode scanning, stock tracking, and automated reordering.",
      longDescription:
        "A comprehensive inventory management system for retail businesses with barcode scanning, stock tracking, and automated reordering. The system provides real-time inventory visibility, tracks product movement, generates reports, and integrates with point-of-sale systems.",
      technologies: ["Angular", "Node.js", "MySQL", "Express", "Socket.io"],
      image: "/task-management-board.png",
      demoUrl: "https://inventory.ceradev.com",
      githubUrl: "https://github.com/ceradev/inventory-system",
      impact: "Reduced inventory discrepancies by 85% and improved stock turnover by 25%.",
      category: ["Web", "API"],
      type: ["Full Stack", "Enterprise"],
      featured: false,
      status: "completed",
      date: "2022-09-15",
      client: "Retail Chain",
      role: "Full Stack Developer",
      teamSize: 4,
      duration: "7 months",
      highlights: [
        "Implemented barcode scanning functionality",
        "Created automated reordering system",
        "Developed comprehensive reporting dashboard",
        "Built integration with accounting software",
      ],
    },
    {
      id: "virtual-classroom",
      title: "Virtual Classroom Platform",
      description:
        "An online learning platform with live video classes, interactive whiteboards, assignment submission, and progress tracking.",
      longDescription:
        "An online learning platform with live video classes, interactive whiteboards, assignment submission, and progress tracking. The platform provides tools for educators to create and deliver engaging content, assess student performance, and provide personalized feedback.",
      technologies: ["React", "WebRTC", "Firebase", "Node.js", "Socket.io"],
      image: "/creative-portfolio-layout.png",
      demoUrl: "https://classroom.ceradev.com",
      githubUrl: "https://github.com/ceradev/virtual-classroom",
      impact: "Increased student engagement by 45% and improved assignment completion rates by 30%.",
      category: ["Web", "Education"],
      type: ["Full Stack", "Education"],
      featured: true,
      status: "in-progress",
      date: "2023-08-10",
      client: "Educational Institution",
      role: "Lead Developer",
      teamSize: 5,
      duration: "Ongoing",
      highlights: [
        "Implementing real-time video conferencing",
        "Creating interactive whiteboard functionality",
        "Developing assignment submission and grading system",
        "Building analytics for student performance tracking",
      ],
    },
    {
      id: "smart-home",
      title: "Smart Home Control System",
      description:
        "A centralized control system for smart home devices with automation rules, voice commands, and energy usage monitoring.",
      longDescription:
        "A centralized control system for smart home devices with automation rules, voice commands, and energy usage monitoring. The system integrates with various smart home devices, allowing users to control lights, thermostats, security systems, and appliances from a single interface.",
      technologies: ["React Native", "Node.js", "MQTT", "GraphQL", "IoT Protocols"],
      image: "/weather-scene.png",
      demoUrl: "https://smarthome.ceradev.com",
      githubUrl: "https://github.com/ceradev/smart-home",
      impact: "Reduced energy consumption by 25% through intelligent automation and monitoring.",
      category: ["Mobile", "IoT"],
      type: ["IoT", "Mobile"],
      featured: false,
      status: "in-progress",
      date: "2023-09-20",
      client: "Home Automation Company",
      role: "IoT Developer",
      teamSize: 3,
      duration: "Ongoing",
      highlights: [
        "Implementing device discovery and integration",
        "Creating automation rule engine",
        "Developing energy usage analytics",
        "Building voice command interface",
      ],
    },
    {
      id: "blockchain-voting",
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology for elections and organizational decision-making.",
      longDescription:
        "A secure and transparent voting system built on blockchain technology for elections and organizational decision-making. The system ensures vote integrity, provides anonymity for voters, and creates an immutable record of election results that can be independently verified.",
      technologies: ["Solidity", "Ethereum", "React", "Web3.js", "MetaMask"],
      image: "/e-commerce-concept.png",
      demoUrl: "https://voting.ceradev.com",
      githubUrl: "https://github.com/ceradev/blockchain-voting",
      impact: "Increased voter participation by 40% and eliminated disputes over vote counting.",
      category: ["Web", "Blockchain"],
      type: ["Blockchain", "Security"],
      featured: true,
      status: "planned",
      date: "2023-12-01",
      client: "Government Agency",
      role: "Blockchain Developer",
      teamSize: 4,
      duration: "Planned",
      highlights: [
        "Planning secure voter authentication",
        "Designing transparent vote counting mechanism",
        "Developing audit trail functionality",
        "Building user-friendly voting interface",
      ],
    },
  ]

  // Obtener todas las categorías, tipos y tecnologías únicas
  const allCategories = [
    "all",
    ...new Set(
      projects.flatMap((project) => (Array.isArray(project.category) ? project.category : [project.category])),
    ),
  ]

  const allTypes = [
    ...new Set(projects.flatMap((project) => (Array.isArray(project.type) ? project.type : [project.type]))),
  ]

  const allTechnologies = [...new Set(projects.flatMap((project) => project.technologies))]

  const allStatuses = ["completed", "in-progress", "planned"]

  // Filtrar proyectos
  const filterProjects = () => {
    return projects.filter((project) => {
      // Filtro por categoría
      if (activeTab !== "all") {
        if (Array.isArray(project.category)) {
          if (!project.category.includes(activeTab)) return false
        } else {
          if (project.category !== activeTab) return false
        }
      }

      // Filtro por búsqueda
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = project.title.toLowerCase().includes(query)
        const matchesDescription = project.description.toLowerCase().includes(query)
        const matchesTechnologies = project.technologies.some((tech) => tech.toLowerCase().includes(query))

        if (!matchesTitle && !matchesDescription && !matchesTechnologies) return false
      }

      // Filtro por tipo
      if (selectedFilters.types.length > 0) {
        const projectTypes = Array.isArray(project.type) ? project.type : [project.type]
        if (!selectedFilters.types.some((type) => projectTypes.includes(type))) return false
      }

      // Filtro por tecnologías
      if (selectedFilters.technologies.length > 0) {
        if (!selectedFilters.technologies.some((tech) => project.technologies.includes(tech))) return false
      }

      // Filtro por estado
      if (selectedFilters.status.length > 0) {
        if (!selectedFilters.status.includes(project.status)) return false
      }

      return true
    })
  }

  // Ordenar proyectos
  const sortProjects = (filteredProjects: Project[]) => {
    return [...filteredProjects].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "alphabetical":
          return a.title.localeCompare(b.title)
        case "featured":
          return b.featured === a.featured ? 0 : b.featured ? 1 : -1
        default:
          return 0
      }
    })
  }

  // Obtener proyectos para la página actual
  const getCurrentPageProjects = () => {
    const filteredProjects = filterProjects()
    const sortedProjects = sortProjects(filteredProjects)

    // Para el modo carrusel, devolvemos todos los proyectos
    if (viewMode === "carousel") return sortedProjects

    // Para otros modos, paginamos
    const startIndex = (currentPage - 1) * projectsPerPage
    return sortedProjects.slice(startIndex, startIndex + projectsPerPage)
  }

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filterProjects().length / projectsPerPage)

  // Manejar cambio de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Manejar cambio de filtros
  const handleFilterChange = (type: "types" | "technologies" | "status", value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev }

      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter((item) => item !== value)
      } else {
        newFilters[type] = [...newFilters[type], value]
      }

      return newFilters
    })

    // Resetear a la primera página cuando cambian los filtros
    setCurrentPage(1)
  }

  // Limpiar todos los filtros
  const clearAllFilters = () => {
    setSelectedFilters({
      types: [],
      technologies: [],
      status: [],
    })
    setSearchQuery("")
    if (searchInputRef.current) {
      searchInputRef.current.value = ""
    }
    setCurrentPage(1)
  }

  // Manejar cambio de pestaña
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setCurrentPage(1)
  }

  // Manejar navegación del carrusel
  const handleCarouselNavigation = (direction: "next" | "prev") => {
    if (isAnimating) return

    const filteredProjects = filterProjects()
    if (filteredProjects.length <= 1) return

    setIsAnimating(true)

    if (direction === "next") {
      setCurrentCarouselIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1))
    } else {
      setCurrentCarouselIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1))
    }

    setTimeout(() => setIsAnimating(false), 500)
  }

  // Manejar clic en punto del carrusel
  const handleCarouselDotClick = (index: number) => {
    if (isAnimating || index === currentCarouselIndex) return

    setIsAnimating(true)
    setCurrentCarouselIndex(index)

    setTimeout(() => setIsAnimating(false), 500)
  }

  // Efecto para resetear el índice del carrusel cuando cambian los filtros
  useEffect(() => {
    setCurrentCarouselIndex(0)
  }, [activeTab, selectedFilters, searchQuery])

  // Obtener proyectos actuales
  const currentProjects = getCurrentPageProjects()
  const filteredProjects = filterProjects()
  const totalFilteredProjects = filteredProjects.length

  // Renderizar el icono de categoría
  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case "Web":
        return <Monitor className="h-4 w-4" />
      case "Mobile":
        return <Smartphone className="h-4 w-4" />
      case "API":
        return <Server className="h-4 w-4" />
      case "IoT":
        return <Cloud className="h-4 w-4" />
      case "Blockchain":
        return <Database className="h-4 w-4" />
      case "AI":
        return <Code className="h-4 w-4" />
      case "Education":
        return <Code className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  // Renderizar el indicador de estado
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-600/20 text-green-600 hover:bg-green-600/30 border-green-600/30">Completado</Badge>
        )
      case "in-progress":
        return (
          <Badge className="bg-blue-600/20 text-blue-600 hover:bg-blue-600/30 border-blue-600/30">En Progreso</Badge>
        )
      case "planned":
        return (
          <Badge className="bg-amber-600/20 text-amber-600 hover:bg-amber-600/30 border-amber-600/30">
            Planificado
          </Badge>
        )
      default:
        return null
    }
  }

  // Renderizar la vista de cuadrícula
  const renderGridView = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/30 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full"
          >
            {/* Imagen con overlay */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Badges de estado y destacado */}
              <div className="absolute top-2 left-2 flex gap-2">
                {renderStatusBadge(project.status)}
                {project.featured && (
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <Star className="h-3 w-3 mr-1" /> Destacado
                  </Badge>
                )}
              </div>

              {/* Título y descripción */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{project.title}</h3>
                <p className="text-sm text-zinc-300 line-clamp-2">{project.description}</p>
              </div>
            </div>

            {/* Contenido inferior */}
            <div className="flex-grow flex flex-col p-4">
              {/* Tecnologías */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs bg-background/50 hover:bg-background">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs bg-background/50 hover:bg-background">
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>

              {/* Categorías y tipo */}
              <div className="flex flex-wrap gap-2 mb-4 text-xs text-foreground/70">
                {Array.isArray(project.category) ? (
                  project.category.map((cat, i) => (
                    <div key={i} className="flex items-center gap-1">
                      {renderCategoryIcon(cat)}
                      <span>{cat}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-1">
                    {renderCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                )}

                <span className="text-foreground/40">•</span>

                {Array.isArray(project.type) ? project.type[0] : project.type}
              </div>

              {/* Fecha */}
              <div className="text-xs text-foreground/60 flex items-center mb-4">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(project.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "short",
                })}
              </div>

              {/* Botones de acción */}
              <div className="mt-auto flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90"
                  onClick={() => setSelectedProject(project)}
                >
                  <Info className="h-4 w-4 mr-2" />
                  Detalles
                </Button>

                <div className="flex gap-1">
                  {project.demoUrl && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-9 w-9"
                            onClick={() => window.open(project.demoUrl, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Ver demo</p>
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
                            variant="outline"
                            className="h-9 w-9"
                            onClick={() => window.open(project.githubUrl, "_blank")}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Ver código</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  // Renderizar la vista de lista
  const renderListView = () => {
    return (
      <div className="space-y-4">
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group flex flex-col md:flex-row gap-4 p-4 rounded-lg border border-border hover:border-primary/30 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            {/* Imagen */}
            <div className="relative w-full md:w-48 h-32 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>

              {/* Badges de estado */}
              <div className="absolute top-2 left-2">{renderStatusBadge(project.status)}</div>

              {/* Badge de destacado */}
              {project.featured && (
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <Star className="h-3 w-3 mr-1" /> Destacado
                  </Badge>
                </div>
              )}
            </div>

            {/* Contenido */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-foreground/70 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(project.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                      })}
                    </div>

                    <span className="text-foreground/40">•</span>

                    {Array.isArray(project.category) ? (
                      project.category.map((cat, i) => (
                        <div key={i} className="flex items-center gap-1">
                          {renderCategoryIcon(cat)}
                          <span>{cat}</span>
                          {i < project.category.length - 1 && ", "}
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center gap-1">
                        {renderCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>
                    )}

                    <span className="text-foreground/40">•</span>

                    {Array.isArray(project.type) ? project.type.join(", ") : project.type}
                  </div>
                </div>

                <div className="flex gap-1 md:self-start">
                  {project.demoUrl && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => window.open(project.demoUrl, "_blank")}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Ver demo</p>
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
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => window.open(project.githubUrl, "_blank")}
                          >
                            <Github className="h-3 w-3" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Ver código</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>

              <p className="text-sm text-foreground/80 mb-3 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex flex-wrap gap-1 mr-2">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs bg-background/50 hover:bg-background">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge variant="outline" className="text-xs bg-background/50 hover:bg-background">
                      +{project.technologies.length - 5}
                    </Badge>
                  )}
                </div>

                <Button
                  size="sm"
                  variant="ghost"
                  className="text-xs h-7 px-2"
                  onClick={() => setSelectedProject(project)}
                >
                  Ver detalles
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  // Renderizar la vista compacta
  const renderCompactView = () => {
    return (
      <div className="space-y-2">
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="group flex items-center gap-3 p-2 rounded-md hover:bg-primary/5 transition-colors duration-200"
          >
            {/* Miniatura */}
            <div className="relative w-10 h-10 rounded overflow-hidden flex-shrink-0">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            {/* Título y categoría */}
            <div className="flex-grow min-w-0">
              <div className="flex items-center">
                <h3 className="text-sm font-medium truncate">{project.title}</h3>
                {project.featured && <Star className="h-3 w-3 ml-1 text-primary" />}
              </div>
              <div className="flex items-center text-xs text-foreground/60">
                <span className="truncate">
                  {Array.isArray(project.category) ? project.category.join(", ") : project.category}
                </span>
                <span className="mx-1">•</span>
                <span>{project.technologies.slice(0, 2).join(", ")}</span>
                {project.technologies.length > 2 && <span>...</span>}
              </div>
            </div>

            {/* Estado */}
            <div className="flex-shrink-0">{renderStatusBadge(project.status)}</div>

            {/* Acciones */}
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setSelectedProject(project)}>
                <Info className="h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  // Renderizar la vista de carrusel
  const renderCarouselView = () => {
    if (filteredProjects.length === 0) return null

    return (
      <div className="relative overflow-hidden rounded-xl border border-border backdrop-blur-md">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
          {filteredProjects.map((project, index) => {
            const isActive = index === currentCarouselIndex
            const isPrev =
              index === (currentCarouselIndex === 0 ? filteredProjects.length - 1 : currentCarouselIndex - 1)
            const isNext =
              index === (currentCarouselIndex === filteredProjects.length - 1 ? 0 : currentCarouselIndex + 1)

            return (
              <motion.div
                key={project.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, x: index > currentCarouselIndex ? 100 : -100 }}
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
                    priority={index === currentCarouselIndex}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    {renderStatusBadge(project.status)}
                    {project.featured && (
                      <Badge className="bg-primary/20 text-primary-foreground border-primary/30">
                        <Star className="h-3 w-3 mr-1" /> Destacado
                      </Badge>
                    )}
                  </div>

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
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            className="bg-red-600 hover:bg-red-700 text-white"
                            size={isMobile ? "sm" : "default"}
                            onClick={() => setSelectedProject(project)}
                          >
                            <Info className="h-4 w-4 mr-2" />
                            Ver Detalles
                          </Button>
                        </motion.div>

                        {project.demoUrl && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              className="bg-red-600 hover:bg-red-700 text-white"
                              size={isMobile ? "sm" : "default"}
                              onClick={() => window.open(project.demoUrl, "_blank")}
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
                              onClick={() => window.open(project.githubUrl, "_blank")}
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

        {/* Botones de navegación */}
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
                onClick={() => handleCarouselNavigation("prev")}
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
                onClick={() => handleCarouselNavigation("next")}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </>
        )}

        {/* Indicadores de puntos */}
        {filteredProjects.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {filteredProjects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentCarouselIndex ? "bg-red-500 w-6" : "bg-zinc-600 hover:bg-zinc-500"
                }`}
                onClick={() => handleCarouselDotClick(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={index === currentCarouselIndex ? { scale: [1, 1.2, 1] } : {}}
                transition={index === currentCarouselIndex ? { duration: 1, repeat: Number.POSITIVE_INFINITY } : {}}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Renderizar mensaje de no hay resultados
  const renderNoResults = () => {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-4xl mb-4">🔍</div>
        <h3 className="text-xl font-bold mb-2">No se encontraron proyectos</h3>
        <p className="text-foreground/70 max-w-md mb-6">
          No hay proyectos que coincidan con los filtros seleccionados. Prueba con otros criterios de búsqueda.
        </p>
        <Button className="bg-primary hover:bg-primary/90" onClick={clearAllFilters}>
          Limpiar filtros
        </Button>
      </div>
    )
  }

  // Renderizar paginación
  const renderPagination = () => {
    if (totalPages <= 1 || viewMode === "carousel") return null

    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1

          // Mostrar solo páginas cercanas a la actual
          if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
            return (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className="h-8 w-8"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            )
          }

          // Mostrar puntos suspensivos
          if (
            (page === currentPage - 2 && currentPage > 3) ||
            (page === currentPage + 2 && currentPage < totalPages - 2)
          ) {
            return (
              <span key={page} className="text-foreground/60">
                ...
              </span>
            )
          }

          return null
        })}

        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  // Renderizar diálogo de detalles del proyecto
  const renderProjectDetailsDialog = () => {
    if (!selectedProject) return null

    return (
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-bold">{selectedProject.title}</DialogTitle>
              <div className="flex items-center gap-2">
                {renderStatusBadge(selectedProject.status)}
                {selectedProject.featured && (
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <Star className="h-3 w-3 mr-1" /> Destacado
                  </Badge>
                )}
              </div>
            </div>
            <DialogDescription className="text-foreground/70">
              {Array.isArray(selectedProject.category) ? selectedProject.category.join(", ") : selectedProject.category}{" "}
              • {Array.isArray(selectedProject.type) ? selectedProject.type.join(", ") : selectedProject.type}
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-grow pr-4">
            <div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-2">Descripción</h4>
                <p className="text-foreground/80">{selectedProject.longDescription || selectedProject.description}</p>
              </div>

              {selectedProject.impact && (
                <div className="p-4 rounded-lg bg-primary/10">
                  <h4 className="text-lg font-bold mb-2">Impacto</h4>
                  <p className="text-foreground/80">{selectedProject.impact}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold mb-2">Detalles</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 mt-0.5 text-foreground/70" />
                      <div>
                        <span className="text-foreground/70 text-sm">Fecha:</span>
                        <div>
                          {new Date(selectedProject.date).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                          })}
                        </div>
                      </div>
                    </li>

                    {selectedProject.client && (
                      <li className="flex items-start gap-2">
                        <Tag className="h-4 w-4 mt-0.5 text-foreground/70" />
                        <div>
                          <span className="text-foreground/70 text-sm">Cliente:</span>
                          <div>{selectedProject.client}</div>
                        </div>
                      </li>
                    )}

                    {selectedProject.role && (
                      <li className="flex items-start gap-2">
                        <Code className="h-4 w-4 mt-0.5 text-foreground/70" />
                        <div>
                          <span className="text-foreground/70 text-sm">Rol:</span>
                          <div>{selectedProject.role}</div>
                        </div>
                      </li>
                    )}

                    {selectedProject.teamSize && (
                      <li className="flex items-start gap-2">
                        <Users className="h-4 w-4 mt-0.5 text-foreground/70" />
                        <div>
                          <span className="text-foreground/70 text-sm">Tamaño del equipo:</span>
                          <div>{selectedProject.teamSize} personas</div>
                        </div>
                      </li>
                    )}

                    {selectedProject.duration && (
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 text-foreground/70" />
                        <div>
                          <span className="text-foreground/70 text-sm">Duración:</span>
                          <div>{selectedProject.duration}</div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-primary/20 text-primary border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {selectedProject.highlights && (
                    <div className="mt-6">
                      <h4 className="text-lg font-bold mb-2">Aspectos destacados</h4>
                      <ul className="space-y-1">
                        {selectedProject.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full mt-1.5 bg-primary" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>

          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0 mt-6">
            <div className="flex gap-2 sm:mr-auto">
              {selectedProject.demoUrl && (
                <Button variant="outline" onClick={() => window.open(selectedProject.demoUrl, "_blank")}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Demo
                </Button>
              )}

              {selectedProject.githubUrl && (
                <Button variant="outline" onClick={() => window.open(selectedProject.githubUrl, "_blank")}>
                  <Github className="h-4 w-4 mr-2" />
                  Ver Código
                </Button>
              )}
            </div>

            <DialogClose asChild>
              <Button variant="secondary">Cerrar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="space-y-8">
      {/* Barra superior con pestañas de categorías */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full md:w-auto">
          <TabsList
            className={`bg-background/60 border border-border rounded-lg p-1 mb-0 ${
              isMobile ? "w-full overflow-x-auto" : ""
            }`}
          >
            {allCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary text-foreground/70 text-xs rounded-md px-3 py-1.5"
              >
                {category === "all" ? "Todos" : category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Controles de vista, ordenación y búsqueda */}
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0 md:w-60">
            <Input
              ref={searchInputRef}
              placeholder="Buscar proyectos..."
              className="h-9 pl-8 pr-8 bg-background/60 border-border"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <Search
              className={`absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 ${
                isSearchFocused ? "text-primary" : "text-foreground/50"
              } transition-colors duration-200`}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  if (searchInputRef.current) {
                    searchInputRef.current.value = ""
                  }
                }}
              >
                <X className="h-3 w-3 text-foreground/70" />
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            {/* Botón de filtros */}
            <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`h-9 ${
                    Object.values(selectedFilters).some((arr) => arr.length > 0) ? "border-primary text-primary" : ""
                  }`}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                  {Object.values(selectedFilters).some((arr) => arr.length > 0) && (
                    <Badge className="ml-2 bg-primary text-primary-foreground">
                      {selectedFilters.types.length +
                        selectedFilters.technologies.length +
                        selectedFilters.status.length}
                    </Badge>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Filtrar proyectos</DialogTitle>
                  <DialogDescription>Selecciona los filtros para encontrar proyectos específicos</DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                  {/* Filtro por tipo */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Tipo de proyecto</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {allTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={`type-${type}`}
                            checked={selectedFilters.types.includes(type)}
                            onCheckedChange={() => handleFilterChange("types", type)}
                          />
                          <Label htmlFor={`type-${type}`} className="text-sm cursor-pointer">
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Filtro por tecnologías */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Tecnologías</h4>
                    <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-2">
                      {allTechnologies.map((tech) => (
                        <div key={tech} className="flex items-center space-x-2">
                          <Checkbox
                            id={`tech-${tech}`}
                            checked={selectedFilters.technologies.includes(tech)}
                            onCheckedChange={() => handleFilterChange("technologies", tech)}
                          />
                          <Label htmlFor={`tech-${tech}`} className="text-sm cursor-pointer">
                            {tech}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Filtro por estado */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Estado</h4>
                    <div className="flex flex-wrap gap-2">
                      {allStatuses.map((status) => (
                        <div key={status} className="flex items-center space-x-2">
                          <Checkbox
                            id={`status-${status}`}
                            checked={selectedFilters.status.includes(status)}
                            onCheckedChange={() => handleFilterChange("status", status)}
                          />
                          <Label htmlFor={`status-${status}`} className="text-sm cursor-pointer">
                            {status === "completed"
                              ? "Completado"
                              : status === "in-progress"
                                ? "En progreso"
                                : "Planificado"}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <DialogFooter className="flex justify-between">
                  <Button variant="outline" onClick={clearAllFilters}>
                    Limpiar filtros
                  </Button>
                  <DialogClose asChild>
                    <Button>Aplicar filtros</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Selector de ordenación */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <Layers className="h-4 w-4 mr-2" />
                  Ordenar
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className={sortBy === "newest" ? "bg-accent" : ""}
                  onClick={() => setSortBy("newest")}
                >
                  Más recientes
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={sortBy === "oldest" ? "bg-accent" : ""}
                  onClick={() => setSortBy("oldest")}
                >
                  Más antiguos
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={sortBy === "alphabetical" ? "bg-accent" : ""}
                  onClick={() => setSortBy("alphabetical")}
                >
                  Alfabético
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={sortBy === "featured" ? "bg-accent" : ""}
                  onClick={() => setSortBy("featured")}
                >
                  Destacados
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Selector de vista */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  {viewMode === "grid" && <Grid className="h-4 w-4" />}
                  {viewMode === "list" && <List className="h-4 w-4" />}
                  {viewMode === "carousel" && <LayoutGrid className="h-4 w-4" />}
                  {viewMode === "compact" && <Layers className="h-4 w-4" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Tipo de vista</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className={viewMode === "grid" ? "bg-accent" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4 mr-2" />
                  Cuadrícula
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={viewMode === "list" ? "bg-accent" : ""}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4 mr-2" />
                  Lista
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={viewMode === "carousel" ? "bg-accent" : ""}
                  onClick={() => setViewMode("carousel")}
                >
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Carrusel
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={viewMode === "compact" ? "bg-accent" : ""}
                  onClick={() => setViewMode("compact")}
                >
                  <Layers className="h-4 w-4 mr-2" />
                  Compacta
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Indicadores de filtros activos */}
      {(Object.values(selectedFilters).some((arr) => arr.length > 0) || searchQuery) && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-foreground/70">Filtros activos:</span>

          {searchQuery && (
            <Badge variant="outline" className="flex items-center gap-1 bg-background/60">
              <Search className="h-3 w-3" />
              {searchQuery}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                onClick={() => {
                  setSearchQuery("")
                  if (searchInputRef.current) {
                    searchInputRef.current.value = ""
                  }
                }}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}

          {selectedFilters.types.map((type) => (
            <Badge key={`type-${type}`} variant="outline" className="flex items-center gap-1 bg-background/60">
              <Tag className="h-3 w-3" />
              {type}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                onClick={() => handleFilterChange("types", type)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}

          {selectedFilters.technologies.map((tech) => (
            <Badge key={`tech-${tech}`} variant="outline" className="flex items-center gap-1 bg-background/60">
              <Code className="h-3 w-3" />
              {tech}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                onClick={() => handleFilterChange("technologies", tech)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}

          {selectedFilters.status.map((status) => (
            <Badge key={`status-${status}`} variant="outline" className="flex items-center gap-1 bg-background/60">
              <Tag className="h-3 w-3" />
              {status}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                onClick={() => handleFilterChange("status", status)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}

      {/* Renderizar vista según el modo seleccionado */}
      {totalFilteredProjects === 0
        ? renderNoResults()
        : viewMode === "grid"
          ? renderGridView()
          : viewMode === "list"
            ? renderListView()
            : viewMode === "compact"
              ? renderCompactView()
              : renderCarouselView()}

      {/* Renderizar paginación */}
      {renderPagination()}

      {/* Renderizar diálogo de detalles del proyecto */}
      {renderProjectDetailsDialog()}
    </div>
  )
}
