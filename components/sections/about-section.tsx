"use client"

import { motion } from "framer-motion"
import { LanguageProficiency } from "@/components/skills/language-proficiency"
import { Badge } from "@/components/ui/badge"
import { SectionTitle } from "@/components/utils/section-title"
import { SectionTransition } from "@/components/utils/section-transition"
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Globe,
  Car,
  Plane,
  User,
  CopyrightIcon as License,
  Users,
  Target,
  Lightbulb,
  MessageCircle,
  Clock,
  Brain,
} from "lucide-react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Componente reutilizable para tarjetas de información
interface InfoCardProps {
  readonly title: string
  readonly icon?: React.ReactNode
  readonly children: React.ReactNode
  readonly delay?: number
}

function InfoCard({ title, icon, children, delay = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: false, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
    >
      <CardHeader className="pb-2 px-0 pt-0">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 pt-4">
        {children}
      </CardContent>
    </motion.div>
  )
}

// Componente para elementos de información personal
interface PersonalInfoItemProps {
  readonly icon: React.ReactNode
  readonly label: string
  readonly value: string
}

function PersonalInfoItem({ icon, label, value }: PersonalInfoItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false }}
      whileHover={{ y: -2, scale: 1.02 }} 
      className="p-3 bg-background/5 rounded-lg border border-border/10 hover:bg-background/10 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-primary bg-primary/10 p-2 rounded-full flex-shrink-0">{icon}</div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-foreground/70 mb-1">{label}</p>
          <p className="font-medium text-foreground">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Componente para badges de información adicional
interface InfoBadgeProps {
  readonly icon: React.ReactNode
  readonly label: string
  readonly index: number
}

function InfoBadge({ icon, label, index }: InfoBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 + 0.4 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.05 }}
    >
      <Badge className="bg-background/10 hover:bg-background/20 text-foreground/90 border-none px-4 py-2 flex items-center gap-2 text-base">
        {icon}
        {label}
      </Badge>
    </motion.div>
  )
}

// Componente para habilidades sociales
interface SoftSkillItemProps {
  readonly icon: React.ReactNode
  readonly label: string
  readonly index: number
}

function SoftSkillItem({ icon, label, index }: SoftSkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 + 0.4 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 bg-background/10 hover:bg-background/20 p-3 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
    >
      <div className="text-primary bg-primary/10 p-2 rounded-full">{icon}</div>
      <span className="text-foreground/90 font-medium">{label}</span>
    </motion.div>
  )
}

// Componente para párrafos de texto (Sobre Mí)
interface TextParagraphProps {
  readonly text: string
  readonly index: number
}

function TextParagraph({ text, index }: TextParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: false }}
      className="text-foreground/90 leading-relaxed p-3 bg-background/5 rounded-lg border border-border/10 hover:bg-background/10 transition-all duration-300"
    >
      {text}
    </motion.p>
  )
}

// Componente para objetivos profesionales
interface ProfessionalGoalProps {
  readonly goal: string
  readonly index: number
}

function ProfessionalGoal({ goal, index }: ProfessionalGoalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
      viewport={{ once: false }}
      whileHover={{ x: 3, scale: 1.02 }}
      className="flex items-start p-3 bg-background/5 rounded-lg border border-border/10 hover:bg-background/10 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
      <span className="text-foreground/90 leading-relaxed">{goal}</span>
    </motion.div>
  )
}

// Datos de configuración - movidos fuera del componente para mejor performance
const PERSONAL_INFO = [
  {
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    label: "Experiencia",
    value: "1+ años",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
    label: "Educación",
    value: "Desarrollo de Aplicaciones Web",
  },
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    label: "Ubicación",
    value: "Tenerife, España",
  },
  {
    icon: <Globe className="h-5 w-5 text-primary" />,
    label: "Disponibilidad",
    value: "Remoto / Presencial",
  },
] as const

const ADDITIONAL_INFO = [
  { icon: <License className="h-4 w-4" />, label: "Carnet de conducir" },
  { icon: <Car className="h-4 w-4" />, label: "Coche propio" },
  { icon: <Plane className="h-4 w-4" />, label: "Disponibilidad para viajar" },
] as const

const SOFT_SKILLS = [
  { icon: <Users className="h-4 w-4" />, label: "Trabajo en Equipo" },
  { icon: <Target className="h-4 w-4" />, label: "Disciplina" },
  { icon: <Brain className="h-4 w-4" />, label: "Autodidacta" },
  { icon: <MessageCircle className="h-4 w-4" />, label: "Comunicación" },
  { icon: <Lightbulb className="h-4 w-4" />, label: "Resolución de Problemas" },
  { icon: <Clock className="h-4 w-4" />, label: "Gestión del Tiempo" },
] as const

const PROFESSIONAL_GOALS = [
  "Convertirme en desarrollador senior en los próximos 3 años",
  "Especializarme en arquitecturas cloud y microservicios",
  "Contribuir a proyectos de código abierto significativos",
  "Mentorizar a nuevos desarrolladores en la comunidad",
] as const

const ABOUT_TEXT = [
  "Desarrollador full stack con +1 año de experiencia creando soluciones digitales innovadoras. Especializado en tecnologías modernas como React, Next.js, Node.js y Python.",
  "Graduado en Desarrollo de Aplicaciones Web con enfoque en arquitecturas escalables y mejores prácticas. Dominio avanzado de inglés y mentalidad internacional.",
  "Canario con nacionalidad sueca, combino creatividad mediterránea con precisión nórdica. Apasionado por el aprendizaje continuo y la excelencia técnica en cada proyecto."
] as const

export function AboutSection() {
  return (
    <SectionTransition id="about" className="py-20 my-8">
      <SectionTitle title="Sobre Mí" />
      <div className="w-full py-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Columna izquierda */}
          <div className="space-y-8">
            {/* Información personal */}
            <InfoCard
              title="Sobre Mí"
              icon={<Briefcase className="h-5 w-5 text-primary" />}
            >
              <div className="space-y-4">
                {ABOUT_TEXT.map((text, index) => (
                  <TextParagraph
                    key={text.slice(0, 20)}
                    text={text}
                    index={index}
                  />
                ))}
              </div>
            </InfoCard>

            {/* Datos personales */}
            <InfoCard title="Información Personal" icon={<User className="h-5 w-5 text-primary" />} delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PERSONAL_INFO.map((item) => (
                  <PersonalInfoItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            </InfoCard>

            {/* Información adicional */}
            <InfoCard
              title="Información Adicional"
              icon={<Car className="h-5 w-5 text-primary" />}
              delay={0.2}
            >
              <div className="flex flex-wrap gap-3">
                {ADDITIONAL_INFO.map((info, index) => (
                  <InfoBadge
                    key={info.label}
                    icon={info.icon}
                    label={info.label}
                    index={index}
                  />
                ))}
              </div>
            </InfoCard>
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            {/* Idiomas */}
            <InfoCard 
              title="Idiomas" 
              icon={<Globe className="h-5 w-5 text-primary" />}
            >
              <LanguageProficiency />
            </InfoCard>

            {/* Habilidades Sociales */}
            <InfoCard
              title="Habilidades Sociales"
              icon={<Brain className="h-5 w-5 text-primary" />}
              delay={0.1}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SOFT_SKILLS.map((skill, index) => (
                  <SoftSkillItem
                    key={skill.label}
                    icon={skill.icon}
                    label={skill.label}
                    index={index}
                  />
                ))}
              </div>
            </InfoCard>

            {/* Objetivos profesionales */}
            <InfoCard
              title="Objetivos Profesionales"
              icon={<Target className="h-5 w-5 text-primary" />}
              delay={0.2}
            >
              <div className="space-y-3">
                {PROFESSIONAL_GOALS.map((goal, index) => (
                  <ProfessionalGoal key={goal.slice(0, 30)} goal={goal} index={index} />
                ))}
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </SectionTransition>
  )
}
