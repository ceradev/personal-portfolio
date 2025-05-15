"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { LanguageProficiency } from "@/components/language-proficiency"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Globe,
  Heart,
  Coffee,
  Music,
  Code,
  BookOpen,
  Laptop,
  Car,
  Plane,
  CopyrightIcon as License,
} from "lucide-react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const y1 = useTransform(springScroll, [0, 1], [0, -50])
  const y2 = useTransform(springScroll, [0, 1], [0, -30])
  const rotate1 = useTransform(springScroll, [0, 1], [0, 5])
  const rotate2 = useTransform(springScroll, [0, 1], [0, -5])
  const scale = useTransform(springScroll, [0, 0.5, 1], [0.95, 1, 0.98])

  // Personal info items
  const personalInfo = [
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
  ]

  // Additional info
  const additionalInfo = [
    { icon: <License className="h-4 w-4" />, label: "Carnet de conducir" },
    { icon: <Car className="h-4 w-4" />, label: "Coche propio" },
    { icon: <Plane className="h-4 w-4" />, label: "Disponibilidad para viajar" },
  ]

  // Interests
  const interests = [
    { icon: <Code className="h-4 w-4" />, label: "Programación" },
    { icon: <Music className="h-4 w-4" />, label: "Música" },
    { icon: <BookOpen className="h-4 w-4" />, label: "Lectura" },
    { icon: <Laptop className="h-4 w-4" />, label: "Tecnología" },
    { icon: <Coffee className="h-4 w-4" />, label: "Café" },
    { icon: <Heart className="h-4 w-4" />, label: "Fitness" },
  ]

  return (
    <div className="w-full py-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
          >
            <CardHeader className="pb-2 px-0 pt-0">
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <Briefcase className="h-5 w-5 text-primary mr-3" />
                Sobre Mí
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-0 pt-4">
              <p className="text-foreground/90 leading-relaxed">
                Desarrollador full stack apasionado, con más de un año de experiencia profesional y un alto nivel de
                inglés.
              </p>

              <p className="text-foreground/90 leading-relaxed">
                Graduado de un programa intensivo de formación en desarrollo web, motivado por seguir ampliando mis
                conocimientos técnicos y profesionales.
              </p>

              <p className="text-foreground/90 leading-relaxed">
                Originario de Canarias y nacionalizado en Suecia, aporto una fuerte orientación a la innovación y un
                compromiso constante con el aprendizaje continuo. Estoy listo para contribuir a proyectos significativos
                y asumir nuevos desafíos en un entorno tecnológico dinámico.
              </p>
            </CardContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
          >
            <CardHeader className="pb-2 px-0 pt-0">
              <CardTitle className="text-xl font-semibold text-foreground">Información Personal</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pt-4">
              <div className="grid grid-cols-2 gap-6">
                {personalInfo.map((item, index) => (
                  <motion.div key={index} whileHover={{ y: -2 }} className="border-b border-border/30 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-primary bg-primary/10 p-2 rounded-full">{item.icon}</div>
                      <div>
                        <p className="text-sm text-foreground/70">{item.label}</p>
                        <p className="font-medium text-foreground mt-1">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
          >
            <CardHeader className="pb-2 px-0 pt-0">
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <Car className="h-5 w-5 text-primary mr-3" />
                Información Adicional
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pt-4">
              <div className="flex flex-wrap gap-3">
                {additionalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.4 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge className="bg-background/10 hover:bg-background/20 text-foreground/90 border-none px-4 py-2 flex items-center gap-2 text-base">
                      {info.icon}
                      {info.label}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
          >
            <CardHeader className="pb-2 px-0 pt-0">
              <CardTitle className="text-xl font-semibold text-foreground">Idiomas</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pt-4">
              <LanguageProficiency />
            </CardContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
          >
            <CardHeader className="pb-2 px-0 pt-0">
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <Heart className="h-5 w-5 text-primary mr-3" />
                Intereses
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.4 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-background/10 hover:bg-background/20 p-3 rounded-lg"
                  >
                    <div className="text-primary bg-primary/10 p-2 rounded-full">{interest.icon}</div>
                    <span className="text-foreground/90">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
          >
            <CardHeader className="pb-2 px-0 pt-0">
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <Briefcase className="h-5 w-5 text-primary mr-3" />
                Objetivos Profesionales
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pt-4">
              <ul className="space-y-4">
                {[
                  "Convertirme en desarrollador senior en los próximos 3 años",
                  "Especializarme en arquitecturas cloud y microservicios",
                  "Contribuir a proyectos de código abierto significativos",
                  "Mentorizar a nuevos desarrolladores en la comunidad",
                ].map((goal, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: false }}
                    whileHover={{ x: 3 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-3 text-lg">•</span>
                    <span className="text-foreground/90">{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
