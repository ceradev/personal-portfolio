"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
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
  color: string
}

export function TechSkillsGrid() {
  const [activeTab, setActiveTab] = useState("frontend")

  const skills: Record<string, Skill[]> = {
    frontend: [
      {
        name: "HTML5",
        level: 95,
        category: "frontend",
        icon: <FaHtml5 className="h-8 w-8" />,
        color: "text-orange-500",
      },
      {
        name: "CSS3/SCSS",
        level: 90,
        category: "frontend",
        icon: <FaCss3Alt className="h-8 w-8" />,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        level: 92,
        category: "frontend",
        icon: <FaJs className="h-8 w-8" />,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        level: 88,
        category: "frontend",
        icon: <SiTypescript className="h-8 w-8" />,
        color: "text-blue-600",
      },
      { name: "React", level: 90, category: "frontend", icon: <FaReact className="h-8 w-8" />, color: "text-cyan-400" },
      {
        name: "Next.js",
        level: 85,
        category: "frontend",
        icon: <SiNextdotjs className="h-8 w-8" />,
        color: "text-foreground",
      },
      {
        name: "Angular",
        level: 80,
        category: "frontend",
        icon: <FaAngular className="h-8 w-8" />,
        color: "text-red-600",
      },
      {
        name: "Vue.js",
        level: 75,
        category: "frontend",
        icon: <FaVuejs className="h-8 w-8" />,
        color: "text-green-500",
      },
      {
        name: "Tailwind CSS",
        level: 88,
        category: "frontend",
        icon: <SiTailwindcss className="h-8 w-8" />,
        color: "text-cyan-400",
      },
      {
        name: "Framer Motion",
        level: 82,
        category: "frontend",
        icon: <SiFramer className="h-8 w-8" />,
        color: "text-purple-500",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 85,
        category: "backend",
        icon: <FaNodeJs className="h-8 w-8" />,
        color: "text-green-500",
      },
      {
        name: "Express",
        level: 82,
        category: "backend",
        icon: <SiExpress className="h-8 w-8" />,
        color: "text-muted-foreground",
      },
      { name: "NestJS", level: 78, category: "backend", icon: <SiNestjs className="h-8 w-8" />, color: "text-red-600" },
      {
        name: "Spring Boot",
        level: 70,
        category: "backend",
        icon: <SiSpringboot className="h-8 w-8" />,
        color: "text-green-600",
      },
      {
        name: "REST API Design",
        level: 88,
        category: "backend",
        icon: <FaNodeJs className="h-8 w-8" />,
        color: "text-blue-500",
      },
      {
        name: "GraphQL",
        level: 75,
        category: "backend",
        icon: <SiGraphql className="h-8 w-8" />,
        color: "text-pink-600",
      },
    ],
    database: [
      {
        name: "PostgreSQL",
        level: 83,
        category: "database",
        icon: <SiPostgresql className="h-8 w-8" />,
        color: "text-blue-500",
      },
      {
        name: "MongoDB",
        level: 80,
        category: "database",
        icon: <SiMongodb className="h-8 w-8" />,
        color: "text-green-500",
      },
      { name: "Redis", level: 75, category: "database", icon: <SiRedis className="h-8 w-8" />, color: "text-red-500" },
      {
        name: "Firebase",
        level: 78,
        category: "database",
        icon: <SiFirebase className="h-8 w-8" />,
        color: "text-yellow-500",
      },
      {
        name: "SQL",
        level: 85,
        category: "database",
        icon: <FaDatabase className="h-8 w-8" />,
        color: "text-blue-400",
      },
    ],
    devops: [
      { name: "Git", level: 90, category: "devops", icon: <FaGitAlt className="h-8 w-8" />, color: "text-orange-600" },
      {
        name: "GitHub Actions",
        level: 82,
        category: "devops",
        icon: <SiGithubactions className="h-8 w-8" />,
        color: "text-blue-500",
      },
      { name: "Docker", level: 78, category: "devops", icon: <FaDocker className="h-8 w-8" />, color: "text-blue-400" },
      {
        name: "Kubernetes",
        level: 65,
        category: "devops",
        icon: <SiKubernetes className="h-8 w-8" />,
        color: "text-blue-600",
      },
      { name: "AWS", level: 75, category: "devops", icon: <FaAws className="h-8 w-8" />, color: "text-yellow-500" },
      {
        name: "Jenkins",
        level: 70,
        category: "devops",
        icon: <FaJenkins className="h-8 w-8" />,
        color: "text-red-500",
      },
    ],
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 backdrop-blur-md bg-background/40 dark:bg-background/50 border border-border/30 dark:border-border/40 rounded-lg p-1 shadow-sm">
          <TabsTrigger
            value="frontend"
            className="data-[state=active]:bg-primary/60 data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-foreground/80 font-medium"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            value="backend"
            className="data-[state=active]:bg-primary/60 data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-foreground/80 font-medium"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger
            value="database"
            className="data-[state=active]:bg-primary/60 data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-foreground/80 font-medium"
          >
            Database
          </TabsTrigger>
          <TabsTrigger
            value="devops"
            className="data-[state=active]:bg-primary/60 data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-foreground/80 font-medium"
          >
            DevOps
          </TabsTrigger>
        </TabsList>

        {Object.keys(skills).map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
              >
                {skills[category].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="backdrop-blur-md bg-background/50 dark:bg-background/60 p-4 rounded-lg border border-border/30 dark:border-border/40 flex flex-col items-center hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/15 shadow-sm"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`mb-3 ${skill.color}`}>{skill.icon}</div>
                    <h3 className="font-medium text-foreground drop-shadow-sm text-center text-base">{skill.name}</h3>
                    <div className="mt-2 w-full h-2 bg-background/40 dark:bg-background/50 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary/80 to-primary/60"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <span className="text-xs text-foreground/85 dark:text-foreground/90 font-medium mt-1.5">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
