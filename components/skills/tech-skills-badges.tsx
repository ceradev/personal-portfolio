"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
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
  FaCode,
  FaServer,
  FaCog,
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

export function TechSkillsBadges() {
  const [activeTab, setActiveTab] = useState("all")

  const skills: Record<string, Skill[]> = {
    frontend: [
      { name: "HTML5", level: 95, category: "frontend", icon: <FaHtml5 className="h-4 w-4" /> },
      { name: "CSS3/SCSS", level: 90, category: "frontend", icon: <FaCss3Alt className="h-4 w-4" /> },
      { name: "JavaScript", level: 92, category: "frontend", icon: <FaJs className="h-4 w-4" /> },
      { name: "TypeScript", level: 88, category: "frontend", icon: <SiTypescript className="h-4 w-4" /> },
      { name: "React", level: 90, category: "frontend", icon: <FaReact className="h-4 w-4" /> },
      { name: "Next.js", level: 85, category: "frontend", icon: <SiNextdotjs className="h-4 w-4" /> },
      { name: "Angular", level: 80, category: "frontend", icon: <FaAngular className="h-4 w-4" /> },
      { name: "Vue.js", level: 75, category: "frontend", icon: <FaVuejs className="h-4 w-4" /> },
      { name: "Tailwind CSS", level: 88, category: "frontend", icon: <SiTailwindcss className="h-4 w-4" /> },
      { name: "Framer Motion", level: 82, category: "frontend", icon: <SiFramer className="h-4 w-4" /> },
    ],
    backend: [
      { name: "Node.js", level: 85, category: "backend", icon: <FaNodeJs className="h-4 w-4" /> },
      { name: "Express", level: 82, category: "backend", icon: <SiExpress className="h-4 w-4" /> },
      { name: "NestJS", level: 78, category: "backend", icon: <SiNestjs className="h-4 w-4" /> },
      { name: "Spring Boot", level: 70, category: "backend", icon: <SiSpringboot className="h-4 w-4" /> },
      { name: "REST API Design", level: 88, category: "backend", icon: <FaServer className="h-4 w-4" /> },
      { name: "GraphQL", level: 75, category: "backend", icon: <SiGraphql className="h-4 w-4" /> },
    ],
    database: [
      { name: "PostgreSQL", level: 83, category: "database", icon: <SiPostgresql className="h-4 w-4" /> },
      { name: "MongoDB", level: 80, category: "database", icon: <SiMongodb className="h-4 w-4" /> },
      { name: "Redis", level: 75, category: "database", icon: <SiRedis className="h-4 w-4" /> },
      { name: "Firebase", level: 78, category: "database", icon: <SiFirebase className="h-4 w-4" /> },
      { name: "SQL", level: 85, category: "database", icon: <FaDatabase className="h-4 w-4" /> },
    ],
    devops: [
      { name: "Git", level: 90, category: "devops", icon: <FaGitAlt className="h-4 w-4" /> },
      { name: "GitHub Actions", level: 82, category: "devops", icon: <SiGithubactions className="h-4 w-4" /> },
      { name: "Docker", level: 78, category: "devops", icon: <FaDocker className="h-4 w-4" /> },
      { name: "Kubernetes", level: 65, category: "devops", icon: <SiKubernetes className="h-4 w-4" /> },
      { name: "AWS", level: 75, category: "devops", icon: <FaAws className="h-4 w-4" /> },
      { name: "Jenkins", level: 70, category: "devops", icon: <FaJenkins className="h-4 w-4" /> },
    ],
  }

  // Combine all skills for the "all" tab
  const allSkills = Object.values(skills).flat()

  // Get skills for the active tab
  const getSkillsForTab = () => {
    if (activeTab === "all") return allSkills
    return skills[activeTab] || []
  }

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <FaCode className="h-5 w-5" />
      case "backend":
        return <FaServer className="h-5 w-5" />
      case "database":
        return <FaDatabase className="h-5 w-5" />
      case "devops":
        return <FaCog className="h-5 w-5" />
      default:
        return <FaCode className="h-5 w-5" />
    }
  }

  // Get category name in Spanish
  const getCategoryName = (category: string) => {
    switch (category) {
      case "frontend":
        return "Frontend"
      case "backend":
        return "Backend"
      case "database":
        return "Bases de Datos"
      case "devops":
        return "DevOps"
      default:
        return category
    }
  }

  // Badge variants based on skill level
  const getBadgeVariant = (level: number) => {
    if (level >= 90) return "advanced"
    if (level >= 80) return "intermediate"
    if (level >= 70) return "basic"
    return "beginner"
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 backdrop-blur-md bg-background/40 dark:bg-background/50 border border-border/30 dark:border-border/40 rounded-lg p-1 shadow-sm">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-primary/60 data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-foreground/80 font-medium"
          >
            Todas
          </TabsTrigger>
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
            Bases de Datos
          </TabsTrigger>
          <TabsTrigger
            value="devops"
            className="data-[state=active]:bg-primary/60 data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-foreground/80 font-medium"
          >
            DevOps
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {activeTab === "all" ? (
              // Group by category for "all" tab
              Object.keys(skills).map((category) => (
                <div key={category} className="w-full mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center shadow-sm">
                      {getCategoryIcon(category)}
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{getCategoryName(category)}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills[category].map((skill) => (
                      <SkillBadge key={skill.name} skill={skill} variant={getBadgeVariant(skill.level)} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              // Show skills for specific category
              <>
                <div className="w-full mb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center shadow-sm">
                      {getCategoryIcon(activeTab)}
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{getCategoryName(activeTab)}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3 w-full">
                  {getSkillsForTab().map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} variant={getBadgeVariant(skill.level)} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface SkillBadgeProps {
  skill: Skill
  variant: "beginner" | "basic" | "intermediate" | "advanced"
}

function SkillBadge({ skill, variant }: SkillBadgeProps) {
  // Define variant styles based on the application's color palette
  const variantStyles = {
    beginner: "bg-background/50 dark:bg-background/40 border-primary/20 text-foreground/80",
    basic: "bg-primary/10 dark:bg-primary/20 border-primary/30 text-foreground/90",
    intermediate: "bg-primary/20 dark:bg-primary/30 border-primary/40 text-foreground",
    advanced: "bg-primary/30 dark:bg-primary/40 border-primary/50 text-foreground font-medium",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border ${variantStyles[variant]} shadow-sm hover:shadow-md hover:shadow-primary/10 transition-all duration-300`}
    >
      <span className="text-primary/90 dark:text-primary/80">{skill.icon}</span>
      <span>{skill.name}</span>
      <span className="ml-1 text-xs opacity-70">{skill.level}%</span>
    </motion.div>
  )
}
