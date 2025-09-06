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

interface Skill {
  readonly name: string
  readonly icon: React.ReactNode
  readonly color: string
}

interface SkillCategory {
  readonly title: string
  readonly skills: Skill[]
}

// Componente para skill individual con animaciones mejoradas
interface SkillItemProps {
  readonly skill: Skill
  readonly index: number
  readonly categoryIndex: number
}

function SkillItem({ skill, index, categoryIndex }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05 + categoryIndex * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: false, margin: "-50px" }}
      whileHover={{ 
        y: -12, 
        scale: 1.15,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative cursor-pointer"
    >
      {/* Enhanced Glow effect background */}
      <motion.div
        className={`absolute -inset-3 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 ${skill.color}`}
        whileHover={{ 
          scale: 1.3,
          opacity: 0.8
        }}
      />
      
      {/* Secondary glow layer for more intensity */}
      <motion.div
        className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-60 blur-md transition-all duration-300 ${skill.color}`}
        whileHover={{ 
          scale: 1.1,
          opacity: 0.7
        }}
      />
      
      {/* Main skill container with enhanced shadow */}
      <div className="relative flex flex-col items-center gap-3 p-4 rounded-xl bg-background/30 dark:bg-background/40 border border-border/20 group-hover:border-primary/60 backdrop-blur-sm transition-all duration-300 group-hover:bg-background/60 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/25">
        <motion.div 
          className="flex items-center justify-center"
          whileHover={{ 
            rotate: [0, -15, 15, 0],
            scale: 1.1
          }}
          transition={{ duration: 0.6 }}
        >
          {skill.icon}
        </motion.div>
        <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground text-center transition-colors duration-300">
          {skill.name}
        </span>
        
        {/* Enhanced bottom glow line */}
        <motion.div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full ${skill.color} shadow-lg`}
          initial={{ width: 0 }}
          whileHover={{ width: "90%" }}
          transition={{ duration: 0.4, type: "spring" }}
        />
        
        {/* Additional highlight effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        />
      </div>
    </motion.div>
  )
}

// Componente para categoría de skills
interface SkillCategoryProps {
  readonly category: SkillCategory
  readonly categoryIndex: number
}

function SkillCategoryCard({ category, categoryIndex }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
      viewport={{ once: false, margin: "-50px" }}
      whileHover={{ 
        scale: 1.03,
        y: -8
      }}
      className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-2xl border border-border/30 dark:border-border/40 p-6 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/30 group relative overflow-hidden cursor-pointer"
    >
      {/* Background glow effect for category cards */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        whileHover={{ opacity: 1 }}
      />
      
      {/* Enhanced border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
        whileHover={{ opacity: 0.6 }}
      />

      <div className="relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-foreground mb-8 text-center group-hover:text-primary transition-colors duration-300 relative"
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 20px rgba(220, 38, 38, 0.5)"
          }}
        >
          {category.title}
          {/* Underline effect */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"
            initial={{ width: 0 }}
            whileHover={{ width: "60%" }}
            transition={{ duration: 0.4, type: "spring" }}
          />
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              index={skillIndex}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Datos de skills con colores de glow
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="h-8 w-8 text-orange-500" />, color: "bg-orange-500/20" },
      { name: "CSS3", icon: <FaCss3Alt className="h-8 w-8 text-blue-500" />, color: "bg-blue-500/20" },
      { name: "JavaScript", icon: <FaJs className="h-8 w-8 text-yellow-400" />, color: "bg-yellow-400/20" },
      { name: "TypeScript", icon: <SiTypescript className="h-8 w-8 text-blue-600" />, color: "bg-blue-600/20" },
      { name: "React", icon: <FaReact className="h-8 w-8 text-cyan-400" />, color: "bg-cyan-400/20" },
      { name: "Next.js", icon: <SiNextdotjs className="h-8 w-8 text-foreground" />, color: "bg-foreground/20" },
      { name: "Angular", icon: <FaAngular className="h-8 w-8 text-red-600" />, color: "bg-red-600/20" },
      { name: "Vue.js", icon: <FaVuejs className="h-8 w-8 text-green-500" />, color: "bg-green-500/20" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-cyan-400" />, color: "bg-cyan-400/20" },
      { name: "Framer Motion", icon: <SiFramer className="h-8 w-8 text-purple-500" />, color: "bg-purple-500/20" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="h-8 w-8 text-green-500" />, color: "bg-green-500/20" },
      { name: "Express", icon: <SiExpress className="h-8 w-8 text-muted-foreground" />, color: "bg-muted-foreground/20" },
      { name: "NestJS", icon: <SiNestjs className="h-8 w-8 text-red-600" />, color: "bg-red-600/20" },
      { name: "Spring Boot", icon: <SiSpringboot className="h-8 w-8 text-green-600" />, color: "bg-green-600/20" },
      { name: "REST API", icon: <FaNodeJs className="h-8 w-8 text-blue-500" />, color: "bg-blue-500/20" },
      { name: "GraphQL", icon: <SiGraphql className="h-8 w-8 text-pink-600" />, color: "bg-pink-600/20" },
      { name: "PostgreSQL", icon: <SiPostgresql className="h-8 w-8 text-blue-500" />, color: "bg-blue-500/20" },
      { name: "MongoDB", icon: <SiMongodb className="h-8 w-8 text-green-500" />, color: "bg-green-500/20" },
      { name: "Redis", icon: <SiRedis className="h-8 w-8 text-red-500" />, color: "bg-red-500/20" },
      { name: "Firebase", icon: <SiFirebase className="h-8 w-8 text-yellow-500" />, color: "bg-yellow-500/20" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt className="h-8 w-8 text-orange-600" />, color: "bg-orange-600/20" },
      { name: "GitHub Actions", icon: <SiGithubactions className="h-8 w-8 text-blue-500" />, color: "bg-blue-500/20" },
      { name: "Docker", icon: <FaDocker className="h-8 w-8 text-blue-400" />, color: "bg-blue-400/20" },
      { name: "Kubernetes", icon: <SiKubernetes className="h-8 w-8 text-blue-600" />, color: "bg-blue-600/20" },
      { name: "AWS", icon: <FaAws className="h-8 w-8 text-yellow-500" />, color: "bg-yellow-500/20" },
      { name: "Jenkins", icon: <FaJenkins className="h-8 w-8 text-red-500" />, color: "bg-red-500/20" },
    ],
  },
] as const

export function TechSkillsIconGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {SKILL_CATEGORIES.map((category, categoryIndex) => (
        <SkillCategoryCard
          key={category.title}
          category={category}
          categoryIndex={categoryIndex}
        />
      ))}
    </div>
  )
}
