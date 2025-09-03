"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Search, Music, Code, Server, Database, Cog } from "lucide-react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaVuejs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaJenkins,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiKubernetes,
  SiGithubactions,
} from "react-icons/si"

interface Skill {
  name: string
  level: number
  category: string
  icon: React.ReactNode
}

export function TechSkillsSpotifyGrid() {
  const [activeTab, setActiveTab] = useState("all")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills: Record<string, Skill[]> = {
    frontend: [
      {
        name: "HTML5",
        level: 95,
        category: "frontend",
        icon: <FaHtml5 className="h-6 w-6" />,
      },
      {
        name: "CSS3/SCSS",
        level: 90,
        category: "frontend",
        icon: <FaCss3Alt className="h-6 w-6" />,
      },
      {
        name: "JavaScript",
        level: 92,
        category: "frontend",
        icon: <FaJs className="h-6 w-6" />,
      },
      {
        name: "TypeScript",
        level: 88,
        category: "frontend",
        icon: <SiTypescript className="h-6 w-6" />,
      },
      {
        name: "React",
        level: 90,
        category: "frontend",
        icon: <FaReact className="h-6 w-6" />,
      },
      {
        name: "Next.js",
        level: 85,
        category: "frontend",
        icon: <SiNextdotjs className="h-6 w-6" />,
      },
      {
        name: "Angular",
        level: 80,
        category: "frontend",
        icon: <FaAngular className="h-6 w-6" />,
      },
      {
        name: "Vue.js",
        level: 75,
        category: "frontend",
        icon: <FaVuejs className="h-6 w-6" />,
      },
      {
        name: "Tailwind CSS",
        level: 88,
        category: "frontend",
        icon: <SiTailwindcss className="h-6 w-6" />,
      },
      {
        name: "Framer Motion",
        level: 82,
        category: "frontend",
        icon: <SiFramer className="h-6 w-6" />,
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 85,
        category: "backend",
        icon: <FaNodeJs className="h-6 w-6" />,
      },
      {
        name: "Express",
        level: 82,
        category: "backend",
        icon: <SiExpress className="h-6 w-6" />,
      },
      {
        name: "NestJS",
        level: 78,
        category: "backend",
        icon: <SiNestjs className="h-6 w-6" />,
      },
      {
        name: "Spring Boot",
        level: 70,
        category: "backend",
        icon: <SiSpringboot className="h-6 w-6" />,
      },
      {
        name: "REST API",
        level: 88,
        category: "backend",
        icon: <FaNodeJs className="h-6 w-6" />,
      },
      {
        name: "GraphQL",
        level: 75,
        category: "backend",
        icon: <SiGraphql className="h-6 w-6" />,
      },
    ],
    database: [
      {
        name: "PostgreSQL",
        level: 83,
        category: "database",
        icon: <SiPostgresql className="h-6 w-6" />,
      },
      {
        name: "MongoDB",
        level: 80,
        category: "database",
        icon: <SiMongodb className="h-6 w-6" />,
      },
      {
        name: "Redis",
        level: 75,
        category: "database",
        icon: <SiRedis className="h-6 w-6" />,
      },
      {
        name: "Firebase",
        level: 78,
        category: "database",
        icon: <SiFirebase className="h-6 w-6" />,
      },
      {
        name: "SQL",
        level: 85,
        category: "database",
        icon: <FaDatabase className="h-6 w-6" />,
      },
    ],
    devops: [
      {
        name: "Git",
        level: 90,
        category: "devops",
        icon: <FaGitAlt className="h-6 w-6" />,
      },
      {
        name: "GitHub Actions",
        level: 82,
        category: "devops",
        icon: <SiGithubactions className="h-6 w-6" />,
      },
      {
        name: "Docker",
        level: 78,
        category: "devops",
        icon: <FaDocker className="h-6 w-6" />,
      },
      {
        name: "Kubernetes",
        level: 65,
        category: "devops",
        icon: <SiKubernetes className="h-6 w-6" />,
      },
      {
        name: "AWS",
        level: 75,
        category: "devops",
        icon: <FaAws className="h-6 w-6" />,
      },
      {
        name: "Jenkins",
        level: 70,
        category: "devops",
        icon: <FaJenkins className="h-6 w-6" />,
      },
    ],
  }

  // Combinar todas las habilidades para la pestaña "all"
  const allSkills = [...skills.frontend, ...skills.backend, ...skills.database, ...skills.devops]

  // Obtener las categorías para la vista "all"
  const categories = Object.keys(skills)

  // Filtrar habilidades según la pestaña activa
  const filteredSkills = activeTab === "all" ? allSkills : skills[activeTab]

  // Iconos para cada categoría
  const categoryIcons = {
    frontend: <Code className="h-5 w-5 mr-2" />,
    backend: <Server className="h-5 w-5 mr-2" />,
    database: <Database className="h-5 w-5 mr-2" />,
    devops: <Cog className="h-5 w-5 mr-2" />,
  }

  // Nombres de categorías en español
  const categoryNames = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Bases de Datos",
    devops: "DevOps",
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Tabs de navegación estilo Spotify */}
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList className="bg-transparent border-none p-0 space-x-2">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm text-white bg-zinc-800/80 hover:bg-zinc-700/80 rounded-full px-4 py-1.5 text-sm font-medium"
            >
              Todo
            </TabsTrigger>
            <TabsTrigger
              value="frontend"
              className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm text-white bg-zinc-800/80 hover:bg-zinc-700/80 rounded-full px-4 py-1.5 text-sm font-medium"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm text-white bg-zinc-800/80 hover:bg-zinc-700/80 rounded-full px-4 py-1.5 text-sm font-medium"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="database"
              className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm text-white bg-zinc-800/80 hover:bg-zinc-700/80 rounded-full px-4 py-1.5 text-sm font-medium"
            >
              Database
            </TabsTrigger>
            <TabsTrigger
              value="devops"
              className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm text-white bg-zinc-800/80 hover:bg-zinc-700/80 rounded-full px-4 py-1.5 text-sm font-medium"
            >
              DevOps
            </TabsTrigger>
          </TabsList>

          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar habilidad"
              className="bg-zinc-800/80 text-white rounded-full pl-9 pr-4 py-1.5 text-sm w-40 focus:w-56 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>
        </div>

        {/* Contenido de las pestañas individuales */}
        {Object.keys(skills).map((category) => (
          <TabsContent key={category} value={category} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="mb-4 flex items-center">
              <div className="flex items-center text-white">
                {categoryIcons[category as keyof typeof categoryIcons]}
                <h3 className="text-lg font-semibold">{categoryNames[category as keyof typeof categoryNames]}</h3>
              </div>
            </div>
            <SkillsGrid skills={skills[category]} />
          </TabsContent>
        ))}

        {/* Pestaña "all" con columnas por categoría */}
        <TabsContent value="all" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category} className="space-y-3">
                <div className="mb-2 flex items-center">
                  <div className="flex items-center text-white">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                    <h3 className="text-lg font-semibold">{categoryNames[category as keyof typeof categoryNames]}</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  {skills[category].map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Componente para la cuadrícula de habilidades (para pestañas individuales)
function SkillsGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  )
}

// Componente para cada tarjeta de habilidad
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-red-500/20 overflow-hidden h-14"
        style={{
          boxShadow: isHovered ? "0 4px 12px rgba(239, 68, 68, 0.15)" : "none",
          transform: isHovered ? "translateY(-2px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="flex items-center h-full px-3">
          {/* Icono a la izquierda */}
          <div className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-900/30 mr-3">
            <div className="text-red-500 dark:text-red-400">{skill.icon}</div>
          </div>

          {/* Nombre y nivel */}
          <div className="flex-grow overflow-hidden">
            <h3 className="font-medium text-foreground text-xs truncate">{skill.name}</h3>
            <div className="flex items-center">
              <div className="w-14 h-1 bg-primary/20 rounded-full overflow-hidden mr-2">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: false }}
                />
              </div>
              <span className="text-[10px] text-foreground/70">{skill.level}%</span>
            </div>
          </div>

          {/* Icono de música que aparece al hacer hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 ml-2"
          >
            <Music className="h-3 w-3 text-primary" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
