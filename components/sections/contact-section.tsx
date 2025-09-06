"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, Briefcase, Code, Users, ArrowRight, Copy } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"
import { TextReveal } from "@/components/utils/text-reveal"
import { SectionTitle } from "@/components/utils/section-title"
import { SectionTransition } from "@/components/utils/section-transition"

export function ContactSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <SectionTransition id="contact" className="py-20 my-8">
      <SectionTitle title="Contáctame" />
      <div className="space-y-10">
      {/* Sección de introducción */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-6 sm:p-8"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            ¿Buscando un desarrollador para tu próximo proyecto?
          </h3>

          <TextReveal className="text-foreground/90 text-lg mb-6">
            Estoy abierto a nuevas oportunidades profesionales, colaboraciones en proyectos interesantes y ofertas de
            trabajo. Mi objetivo es crear experiencias digitales excepcionales que combinen diseño atractivo y
            funcionalidad sólida.
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-primary/10 flex items-start space-x-3">
              <div className="p-2 rounded-full bg-primary/20">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Ofertas de trabajo</h4>
                <p className="text-sm text-foreground/70">Full-time, part-time o freelance</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 flex items-start space-x-3">
              <div className="p-2 rounded-full bg-primary/20">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Proyectos</h4>
                <p className="text-sm text-foreground/70">Colaboraciones y desarrollo</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 flex items-start space-x-3">
              <div className="p-2 rounded-full bg-primary/20">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Networking</h4>
                <p className="text-sm text-foreground/70">Conectar con profesionales</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Formulario y datos de contacto */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna de información de contacto */}
        <div className="lg:col-span-1 space-y-6">
          {/* Tarjeta de Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-4 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Email</h3>
            </div>

            <div className="w-full overflow-hidden">
              <a
                href="mailto:suarezorizondocesararamis@gmail.com"
                className="inline-flex items-center text-white hover:text-white/90 transition-all duration-200 font-medium text-sm hover:underline group"
              >
                <span className="truncate">suarezorizondocesararamis@gmail.com</span>
                <span className="ml-2 flex-shrink-0 bg-primary/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </a>
            </div>

            <div className="mt-3 flex items-center">
              <button
                onClick={() => {
                  navigator.clipboard.writeText("suarezorizondocesararamis@gmail.com")
                  // Aquí podrías añadir una notificación de "copiado" si tienes un sistema de notificaciones
                }}
                className="text-sm flex items-center gap-1 text-white/70 hover:text-white transition-colors"
              >
                <span>Copiar email</span>
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Tarjeta de Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-4 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Redes Sociales</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="bg-primary/10 p-3 rounded-full transition-colors group-hover:bg-background/40">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/césar-aramis-suárez-orizondo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="bg-primary/10 p-3 rounded-full transition-colors group-hover:bg-background/40">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="bg-primary/10 p-3 rounded-full transition-colors group-hover:bg-background/40">
                  <Twitter className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  Twitter
                </span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-foreground/70 text-sm">
                Sígueme en redes sociales para estar al día de mis últimos proyectos y publicaciones sobre desarrollo
                web.
              </p>
            </div>
          </motion.div>

          {/* Disponibilidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-4 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-foreground mb-3">Disponibilidad</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-foreground/80">Proyectos freelance:</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-primary/20 text-primary">Disponible</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground/80">Tiempo completo:</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-primary/20 text-primary">Disponible</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground/80">Tiempo de respuesta:</span>
                <span className="text-foreground/80">24-48h</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Columna del formulario de contacto */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Envíame un mensaje</h3>
            <p className="text-foreground/80 mb-6">
              Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  </SectionTransition>
  )
}
