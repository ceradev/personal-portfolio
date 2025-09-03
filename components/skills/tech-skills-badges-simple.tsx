"use client"

import { motion } from "framer-motion"

// Definición de las habilidades técnicas
const techSkills = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3/SCSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 92, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Angular", level: 80, category: "frontend" },
  { name: "Vue.js", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },
  { name: "Framer Motion", level: 82, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 82, category: "backend" },
  { name: "NestJS", level: 78, category: "backend" },
  { name: "Spring Boot", level: 70, category: "backend" },
  { name: "REST API", level: 88, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },

  // Databases
  { name: "PostgreSQL", level: 83, category: "database" },
  { name: "MongoDB", level: 80, category: "database" },
  { name: "Redis", level: 75, category: "database" },
  { name: "Firebase", level: 78, category: "database" },
  { name: "SQL", level: 85, category: "database" },

  // DevOps
  { name: "Git", level: 90, category: "devops" },
  { name: "GitHub Actions", level: 82, category: "devops" },
  { name: "Docker", level: 78, category: "devops" },
  { name: "Kubernetes", level: 65, category: "devops" },
  { name: "AWS", level: 75, category: "devops" },
  { name: "CI/CD", level: 80, category: "devops" },
]

// Función para determinar la variante de la etiqueta según el nivel de habilidad
const getBadgeVariant = (level: number) => {
  if (level >= 90) return "advanced"
  if (level >= 80) return "intermediate"
  if (level >= 70) return "basic"
  return "beginner"
}

export function TechSkillsBadgesSimple() {
  // Agrupar habilidades por categoría
  const categories = {
    frontend: techSkills.filter((skill) => skill.category === "frontend"),
    backend: techSkills.filter((skill) => skill.category === "backend"),
    database: techSkills.filter((skill) => skill.category === "database"),
    devops: techSkills.filter((skill) => skill.category === "devops"),
  }

  // Obtener nombre de categoría en español
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

  return (
    <div className="space-y-8">
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-medium text-foreground flex items-center">
            <span className="inline-block w-2 h-6 bg-primary/80 rounded-full mr-2"></span>
            {getCategoryName(category)}
          </h3>

          <div className="flex flex-wrap gap-3 justify-start">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                level={skill.level}
                variant={getBadgeVariant(skill.level)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

interface SkillBadgeProps {
  name: string
  level: number
  variant: "beginner" | "basic" | "intermediate" | "advanced"
}

function SkillBadge({ name, level, variant }: SkillBadgeProps) {
  // Definir estilos de variante basados en la paleta de colores de la aplicación
  const variantStyles = {
    beginner: "bg-primary/10 dark:bg-primary/15 border-primary/20 text-foreground/80",
    basic: "bg-primary/15 dark:bg-primary/20 border-primary/30 text-foreground/90",
    intermediate: "bg-primary/20 dark:bg-primary/30 border-primary/40 text-foreground",
    advanced: "bg-primary/30 dark:bg-primary/40 border-primary/50 text-foreground font-medium",
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${variantStyles[variant]} shadow-sm hover:shadow-md hover:shadow-primary/10 transition-all duration-300`}
    >
      {name}
      <span className="ml-1.5 text-xs opacity-70">{level}%</span>
    </motion.span>
  )
}
