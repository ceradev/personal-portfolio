"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaVuejs,
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

interface SkillCategory {
  title: string
  skills: {
    name: string
    icon: React.ReactNode
  }[]
}

export function TechSkillsIconGrid() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="h-8 w-8 text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="h-8 w-8 text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="h-8 w-8 text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="h-8 w-8 text-blue-600" /> },
        { name: "React", icon: <FaReact className="h-8 w-8 text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="h-8 w-8 text-foreground" /> },
        { name: "Angular", icon: <FaAngular className="h-8 w-8 text-red-600" /> },
        { name: "Vue.js", icon: <FaVuejs className="h-8 w-8 text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-cyan-400" /> },
        { name: "Framer Motion", icon: <SiFramer className="h-8 w-8 text-purple-500" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="h-8 w-8 text-green-500" /> },
        { name: "Express", icon: <SiExpress className="h-8 w-8 text-muted-foreground" /> },
        { name: "NestJS", icon: <SiNestjs className="h-8 w-8 text-red-600" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="h-8 w-8 text-green-600" /> },
        { name: "REST API", icon: <FaNodeJs className="h-8 w-8 text-blue-500" /> },
        { name: "GraphQL", icon: <SiGraphql className="h-8 w-8 text-pink-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="h-8 w-8 text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-8 w-8 text-green-500" /> },
        { name: "Redis", icon: <SiRedis className="h-8 w-8 text-red-500" /> },
        { name: "Firebase", icon: <SiFirebase className="h-8 w-8 text-yellow-500" /> },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Git", icon: <FaGitAlt className="h-8 w-8 text-orange-600" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="h-8 w-8 text-blue-500" /> },
        { name: "Docker", icon: <FaDocker className="h-8 w-8 text-blue-400" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="h-8 w-8 text-blue-600" /> },
        { name: "AWS", icon: <FaAws className="h-8 w-8 text-yellow-500" /> },
        { name: "Jenkins", icon: <FaJenkins className="h-8 w-8 text-red-500" /> },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          viewport={{ once: false, margin: "-50px" }}
          className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border/30 dark:border-border/40 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/15"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">{category.title}</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                viewport={{ once: false, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="p-3 rounded-lg bg-background/30 dark:bg-background/40 flex items-center justify-center">
                  {skill.icon}
                </div>
                <span className="text-sm text-foreground/90 text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
