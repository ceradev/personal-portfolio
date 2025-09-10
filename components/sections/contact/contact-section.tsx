"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, Briefcase, Code, Users, ArrowRight, Copy, Calendar, Clock, Video, Phone, MessageSquare, Sparkles, Star, Zap, TriangleAlert, SearchCheck, BadgeCheck } from "lucide-react"
import { ContactForm } from "@/components/sections/contact/components/contact-form"
import { TextReveal } from "@/utils/text-reveal"
import { SectionTitle } from "@/utils/section-title"
import { SectionTransition } from "@/utils/section-transition"

export function ContactSection() {

  return (
    <SectionTransition id="contact" className="py-20 my-8">
      <SectionTitle title="Contáctame" />
      
      {/* Subtitle with animation and enhanced design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, margin: "-50px" }}
        className="text-center mb-16 relative"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />
        
        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-6">
          </div>
          
          <div className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
            Conectemos y hagamos realidad tu próximo{" "}
            <span className="relative">
              <span className="text-red-600 font-bold">
                proyecto digital
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
              />
            </span>
          </div>
        </div>
      </motion.div>

      <div className="space-y-10">
      {/* Sección de introducción mejorada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="relative group"
      >
        {/* Fondo con gradiente y efectos */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10" />
        
        <div className="relative p-8 sm:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 mb-4"
              >
                <BadgeCheck className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Disponible para nuevos proyectos</span>
                <BadgeCheck className="h-4 w-4 text-primary" />
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            ¿Buscando un desarrollador para tu próximo proyecto?
          </h3>

              <TextReveal className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Estoy abierto a nuevas oportunidades profesionales, colaboraciones en proyectos interesantes y ofertas de
            trabajo. Mi objetivo es crear experiencias digitales excepcionales que combinen diseño atractivo y
            funcionalidad sólida.
          </TextReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group/card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20"
                    >
                      <Briefcase className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">Ofertas de trabajo</h4>
                      <p className="text-sm text-foreground/70 mb-2">Full-time, part-time o freelance</p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-500 font-medium">Disponible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group/card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20"
                    >
                      <Code className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">Proyectos</h4>
                      <p className="text-sm text-foreground/70 mb-2">Colaboraciones y desarrollo</p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs text-blue-500 font-medium">Activo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group/card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20"
                    >
                      <Users className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">Networking</h4>
                      <p className="text-sm text-foreground/70 mb-2">Conectar con profesionales</p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-xs text-purple-500 font-medium">Abierto</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sección de agendamiento de llamadas mejorada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: false }}
        className="relative group overflow-hidden"
      >
        {/* Fondo con efectos visuales */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90 backdrop-blur-2xl rounded-3xl border-2 border-primary/30 shadow-2xl shadow-primary/20" />

        <div className="relative p-8 sm:p-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/20 shadow-2xl shadow-primary/30"
                >
                  <Calendar className="h-10 w-10 text-primary" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="p-3 rounded-full bg-gradient-to-br from-primary/40 to-primary/30"
                >
                  <Clock className="h-8 w-8 text-primary" />
                </motion.div>
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
              >
                Agenda una llamada conmigo
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-foreground/80 text-xl max-w-3xl mx-auto leading-relaxed"
              >
                ¿Prefieres una conversación directa? Agenda una llamada de 30 minutos para discutir tu proyecto, 
                hacer preguntas o simplemente conocernos mejor.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group/option relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover/option:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-2 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 shadow-md shadow-blue-500/20 mb-4"
                  >
                    <Video className="h-8 w-8 text-blue-500" />
                  </motion.div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Videollamada</h4>
                  <p className="text-foreground/70 mb-2">Google Meet o Zoom</p>
                  <p className="text-sm text-foreground/60">Ideal para proyectos complejos</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs text-blue-500 font-medium">Recomendado</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group/option relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl blur-xl opacity-0 group-hover/option:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-2 border-green-500/30 hover:border-green-500/50 transition-all duration-300 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500/30 to-green-600/20 shadow-md shadow-green-500/20 mb-4"
                  >
                    <Phone className="h-8 w-8 text-green-500" />
                  </motion.div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Llamada telefónica</h4>
                  <p className="text-foreground/70 mb-2">Conversación directa</p>
                  <p className="text-sm text-foreground/60">Rápido y personal</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-500 font-medium">Disponible</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group/option relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover/option:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 shadow-md shadow-purple-500/20 mb-4"
                  >
                    <MessageSquare className="h-8 w-8 text-purple-500" />
                  </motion.div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Consulta inicial</h4>
                  <p className="text-foreground/70 mb-2">Evaluación gratuita</p>
                  <p className="text-sm text-foreground/60">Sin compromiso</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs text-purple-500 font-medium">Gratis</span>
              </div>
              </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="https://calendly.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden"
              >
                <div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-2xl font-bold text-lg transition-all duration-300">
                  <Calendar className="h-6 w-6 mr-3" />
                  Agendar llamada
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5 ml-3" />
                  </motion.div>
                </div>
              </motion.a>
              
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-foreground/80">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">Disponible Lun-Vie, 9:00-18:00 (GMT+1)</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-green-500 font-medium">Respuesta garantizada en 24h</span>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Formulario y datos de contacto */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna de información de contacto mejorada */}
        <div className="lg:col-span-1 space-y-8">
          {/* Tarjeta de Email mejorada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-background/80 to-background/60 rounded-2xl border-2 border-primary/30 p-6 shadow-2xl shadow-primary/20 hover:shadow-primary/30 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20 mr-4"
                >
                  <Mail className="h-7 w-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Email</h3>
                  <p className="text-sm text-foreground/70">Contacto directo</p>
              </div>
            </div>

              <div className="space-y-4">
                <motion.a
                href="mailto:suarezorizondocesararamis@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="group/email block p-3 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium text-sm truncate pr-2">
                      suarezorizondocesararamis@gmail.com
                </span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="p-1.5 rounded-full bg-primary/20 group-hover/email:bg-primary/30 transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </motion.div>
            </div>
                </motion.a>

                <motion.button
                onClick={() => {
                  navigator.clipboard.writeText("suarezorizondocesararamis@gmail.com")
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-background/60 to-background/40 border border-border hover:border-primary/30 text-foreground/80 hover:text-foreground transition-all duration-300"
                >
                  <Copy className="h-4 w-4" />
                  <span className="font-medium">Copiar email</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta de Redes Sociales mejorada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-background/80 to-background/60 rounded-2xl border-2 border-primary/30 p-6 shadow-2xl shadow-primary/20 hover:shadow-primary/30 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20 mr-4"
                >
                  <Users className="h-7 w-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Redes Sociales</h3>
                  <p className="text-sm text-foreground/70">Conecta conmigo</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/social flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-500/10 to-gray-600/5 hover:from-gray-500/20 hover:to-gray-600/10 border border-gray-500/20 hover:border-gray-500/40 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 rounded-full bg-gradient-to-br from-gray-500/30 to-gray-600/20 shadow-md shadow-gray-500/20"
                  >
                    <Github className="h-5 w-5 text-gray-500" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground">GitHub</span>
                    <p className="text-xs text-foreground/60">Mis repositorios</p>
                </div>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="p-1 rounded-full bg-gray-500/20"
                  >
                    <ArrowRight className="h-3 w-3 text-gray-500" />
                  </motion.div>
                </motion.a>

                <motion.a
                href="https://linkedin.com/in/césar-aramis-suárez-orizondo/"
                target="_blank"
                rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/social flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 shadow-md shadow-blue-500/20"
                  >
                    <Linkedin className="h-5 w-5 text-blue-500" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground">LinkedIn</span>
                    <p className="text-xs text-foreground/60">Perfil profesional</p>
                </div>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="p-1 rounded-full bg-blue-500/20"
                  >
                    <ArrowRight className="h-3 w-3 text-blue-500" />
                  </motion.div>
                </motion.a>

                <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/social flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-sky-500/10 to-sky-600/5 hover:from-sky-500/20 hover:to-sky-600/10 border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 rounded-full bg-gradient-to-br from-sky-500/30 to-sky-600/20 shadow-md shadow-sky-500/20"
                  >
                    <Twitter className="h-5 w-5 text-sky-500" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground">Twitter</span>
                    <p className="text-xs text-foreground/60">Últimas noticias</p>
                </div>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="p-1 rounded-full bg-sky-500/20"
                  >
                    <ArrowRight className="h-3 w-3 text-sky-500" />
                  </motion.div>
                </motion.a>
            </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/20">
                <p className="text-foreground/70 text-sm leading-relaxed">
                  <Sparkles className="inline h-4 w-4 text-primary mr-1" />
                  Sígueme en redes sociales para estar al día de mis últimos proyectos y publicaciones sobre desarrollo web.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Disponibilidad mejorada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-green-500/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-background/80 to-background/60 rounded-2xl border-2 border-green-500/30 p-6 shadow-2xl shadow-green-500/20 hover:shadow-green-500/30 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-green-500/30 to-green-500/20 shadow-md shadow-green-500/20 mr-4"
                >
                  <Clock className="h-7 w-7 text-green-500" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Disponibilidad</h3>
                  <p className="text-sm text-foreground/70">Estado actual</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-md shadow-green-500/50" />
                    <span className="font-medium text-foreground">Proyectos freelance</span>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs bg-gradient-to-r from-green-500/30 to-green-500/20 text-green-500 font-bold border border-green-500/30">
                    Disponible
                  </span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-md shadow-blue-500/50" />
                    <span className="font-medium text-foreground">Tiempo completo</span>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs bg-gradient-to-r from-blue-500/30 to-blue-500/20 text-blue-500 font-bold border border-blue-500/30">
                    Disponible
                  </span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 rounded-full bg-primary shadow-md shadow-primary/50"
                    />
                    <span className="font-medium text-foreground">Tiempo de respuesta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-primary font-bold">24-48h</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">Respuesta rápida garantizada</span>
                </div>
                <p className="text-foreground/70 text-sm">
                  Respondo a todos los mensajes dentro de 24-48 horas. Para consultas urgentes, utiliza el agendamiento de llamadas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Columna del formulario de contacto mejorada */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="group relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-background/90 to-background/70 rounded-3xl border-2 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-primary/30 hover:border-primary/50 transition-all duration-300 h-full">
              
              {/* Header del formulario */}
              <div className="p-8 pb-6 border-b border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20"
                  >
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      Envíame un mensaje
                    </h3>
                    <p className="text-foreground/70">¿Tienes un proyecto en mente?</p>
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed">
              Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.
                  Cuéntame sobre tu proyecto y cómo puedo ayudarte a hacerlo realidad.
                </p>
                
                <div className="flex items-center gap-4 mt-4 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-500 font-medium">Respuesta garantizada en 24h</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">Consulta gratuita</span>
                  </div>
                </div>
              </div>
              
              {/* Formulario */}
              <div className="p-8">
            <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </SectionTransition>
  )
}
