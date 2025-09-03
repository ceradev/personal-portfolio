"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Github, Linkedin, Mail, Download, FolderOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TopNavigation } from "@/components/layout/top-navigation"
import { ScrollProgress } from "@/components/utils/scroll-progress"
import { SectionTransition } from "@/components/utils/section-transition"
import { ExperienceStepper } from "@/components/utils/experience-stepper"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { EnhancedThemeTransition } from "@/components/utils/enhanced-theme-transition"
import { TechSkillsIconGrid } from "@/components/skills/tech-skills-icon-grid"
import { SectionTitle } from "@/components/utils/section-title"
import { AboutSection } from "@/components/sections/about-section"
import { EducationTimeline } from "@/components/education/education-timeline"
import { ContactSection } from "@/components/sections/contact-section"
import { EnhancedProjectsSection } from "@/components/sections/enhanced-projects-section"
import { ScrollDownArrow } from "@/components/utils/scroll-down-arrow"

import { FaReact } from "react-icons/fa"
import { SiNextdotjs, SiTypescript } from "react-icons/si"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  useEffect(() => {
    setMounted(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleDownloadCV = () => {
    // Crear un enlace para descargar el CV
    const link = document.createElement("a")
    link.href = "/cv-cesar-suarez.pdf"
    link.download = "CV-Cesar-Suarez.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!mounted) return null

  return (
    <main ref={ref} className="min-h-screen relative overflow-hidden pt-16">
      {/* Global background for the entire application */}
      <div className="fixed inset-0 z-[-1]">
        {/* Dynamic background with 3D perspective */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background/90 dark:from-primary/10 dark:via-background/80 dark:to-background">
          {/* 3D Grid lines */}
          <div className="absolute inset-0 perspective-[1000px] opacity-30 dark:opacity-40">
            <div className="absolute h-full w-full transform-style-3d rotate-x-12 rotate-y-12">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`grid-x-${i}`}
                  className="absolute left-0 right-0 h-px bg-primary/20 dark:bg-primary/30"
                  style={{ top: `${i * 10}%`, transform: `translateZ(${i * 5}px)` }}
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`grid-y-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-primary/20 dark:bg-primary/30"
                  style={{ left: `${i * 10}%`, transform: `translateZ(${i * 5}px)` }}
                />
              ))}
            </div>
          </div>

          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/20 blur-[100px] animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-[80px] animate-float-slow animation-delay-2000"></div>
          <div className="absolute top-3/4 right-1/3 w-72 h-72 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-[90px] animate-float-slow animation-delay-1000"></div>
        </div>

        {/* Animated particles with parallax effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full bg-primary/30 dark:bg-primary/40 animate-float-parallax"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 15}s`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translateZ(${Math.random() * 100}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <ScrollProgress />
      <TopNavigation activeSection={activeSection} />
      <EnhancedThemeTransition />

      {/* Theme Toggle */}
      <div className={`fixed ${isMobile ? "top-3" : "top-6"} right-6 z-50`}>
        <ThemeToggle />
      </div>

      {/* Add padding to the bottom on mobile to account for the bottom navigation */}
      <div className={isMobile ? "pb-16" : ""}>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex flex-col items-start overflow-hidden">
          {/* Split content layout with improved mobile spacing */}
          <div className="container mx-auto px-4 md:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Text content with improved mobile typography */}
            <motion.div
              className="text-left order-2 lg:order-1 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/25 dark:border-primary/40 text-primary dark:text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
                  className="inline-block h-2 w-2 rounded-full bg-primary mr-2"
                ></motion.span>
                Disponible para proyectos
              </div>

              {/* Nombre cambiante con efecto */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                <span className="block text-foreground drop-shadow-sm dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                  Hola, soy
                </span>
                <div className="block mt-1 relative drop-shadow-sm dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-gradient group cursor-pointer">
                  <span className="inline-block">cera</span>
                  <span className="inline-block text-primary font-bold">dev</span>
                  <div className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full transition-all duration-500 ease-in-out w-[40%] group-hover:w-full" />
                </div>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl text-foreground/90 dark:text-foreground/95 mb-6 font-light drop-shadow-sm">
                Desarrollador Full Stack con pasión por crear experiencias digitales excepcionales
              </h2>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => {
                    const projectsSection = document.getElementById("projects")
                    if (projectsSection) {
                      window.scrollTo({
                        top: projectsSection.offsetTop,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 group relative overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FolderOpen className="h-4 w-4" />
                    Ver Proyectos
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <motion.span
                    className="absolute inset-0 bg-primary/80 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.2 }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>

                <Button
                  variant="outline"
                  onClick={handleDownloadCV}
                  className="border-primary/50 text-foreground hover:bg-primary/10 rounded-full px-6 transform hover:scale-105 transition-all duration-300 hover:border-primary"
                >
                  <span className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Descargar CV
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>

                <div className="flex items-center gap-2 ml-1">
                  <Link href="https://linkedin.com/in/césar-aramis-suárez-orizondo/" target="_blank" className="group">
                    <motion.div
                      className="p-2 rounded-full backdrop-blur-sm bg-background/20 dark:bg-background/30 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </Link>
                  <Link href="https://github.com" target="_blank" className="group">
                    <motion.div
                      className="p-2 rounded-full backdrop-blur-sm bg-background/20 dark:bg-background/30 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </Link>
                  <Link href="mailto:suarezorizondocesararamis@gmail.com" className="group">
                    <motion.div
                      className="p-2 rounded-full backdrop-blur-sm bg-background/20 dark:bg-background/30 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right side - Profile image with enhanced 3D effect and mobile optimization */}
            <motion.div
              className="relative order-1 lg:order-2 flex justify-center mx-auto max-w-[280px] md:max-w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Enhanced decorative elements */}
                <motion.div
                  className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/50"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/50"
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                ></motion.div>

                {/* Enhanced animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                ></motion.div>

                <motion.div
                  className="absolute inset-4 rounded-full border-2 border-dashed border-primary/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                ></motion.div>

                {/* Enhanced profile image with interactive effects */}
                <motion.div
                  className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(220, 38, 38, 0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src="/profile-portrait.jpg" alt="César Suárez" fill className="object-cover" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  {/* Enhanced tech stack floating badges with interactive animations */}
                  <motion.div
                    className="absolute -top-4 -right-4 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-md rounded-full p-2 border border-border"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                  >
                    <FaReact className="h-6 w-6 text-blue-400" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-8 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-md rounded-full p-2 border border-border"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)" }}
                  >
                    <SiNextdotjs className="h-6 w-6 text-foreground" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -right-4 backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-md rounded-full p-2 border border-border"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)" }}
                  >
                    <SiTypescript className="h-6 w-6 text-blue-600" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Arrow */}
          <ScrollDownArrow targetSection="about" />
        </section>

        {/* About Section */}
        <SectionTransition id="about" className="py-20 my-8">
          <SectionTitle title="Sobre Mí" />
          <AboutSection />
        </SectionTransition>

        {/* Skills Section - Solo habilidades técnicas */}
        <SectionTransition id="skills" className="py-20 my-8 relative overflow-hidden">
          <SectionTitle title="Habilidades Técnicas" />
          <TechSkillsIconGrid />
        </SectionTransition>

        {/* Experience Section */}
        <SectionTransition id="experience" className="py-20 my-8">
          <SectionTitle title="Experiencia" />
          <ExperienceStepper />
        </SectionTransition>

        {/* Education Section */}
        <SectionTransition id="education" className="py-20 my-8">
          <SectionTitle title="Formación" />
          <EducationTimeline />
        </SectionTransition>

        {/* Projects Section */}
        <SectionTransition id="projects" className="py-20 my-8">
          <SectionTitle title="Proyectos" />
          <EnhancedProjectsSection />
        </SectionTransition>

        {/* Contact Section */}
        <SectionTransition id="contact" className="py-20 my-8">
          <SectionTitle title="Contáctame" />
          <ContactSection />
        </SectionTransition>

        {/* Footer */}
        <footer className="py-8 border-t border-border/30 backdrop-blur-md">
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Code className="h-6 w-6 text-primary mr-2" />
              <span className="text-foreground/90 font-semibold">César Suárez Orizondo</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Todos los derechos reservados
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
