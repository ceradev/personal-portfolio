"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Users, ArrowRight, Copy, Clock, Sparkles, Zap } from "lucide-react";

interface ContactInfoProps {
  availabilityOnly?: boolean;
}

export function ContactInfo({ availabilityOnly = false }: ContactInfoProps) {
  // Si solo queremos mostrar disponibilidad
  if (availabilityOnly) {
    return (
      <div className="w-full h-full">
        {/* Disponibilidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="group relative overflow-hidden h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-green-500/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-background/80 to-background/60 rounded-2xl border-2 border-green-500/30 p-6 shadow-2xl shadow-green-500/20 hover:shadow-green-500/30 hover:border-green-500/50 transition-all duration-300 w-full h-full flex flex-col">
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
            
            <div className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse shadow-md shadow-green-500/50" />
                    <span className="font-medium text-foreground text-base">Proyectos freelance</span>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-green-500/30 to-green-500/20 text-green-500 font-bold border border-green-500/30">
                    Disponible
                  </span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse shadow-md shadow-blue-500/50" />
                    <span className="font-medium text-foreground text-base">Tiempo completo</span>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-blue-500/30 to-blue-500/20 text-blue-500 font-bold border border-blue-500/30">
                    Disponible
                  </span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 rounded-full bg-primary shadow-md shadow-primary/50"
                    />
                    <span className="font-medium text-foreground text-base">Tiempo de respuesta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-primary font-bold text-base">24-48h</span>
                  </div>
                </motion.div>

                {/* Zona horaria y ubicación */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-purple-500 animate-pulse shadow-md shadow-purple-500/50" />
                    <span className="font-medium text-foreground text-base">Zona horaria</span>
                  </div>
                  <span className="text-purple-500 font-bold text-base">GMT-5 (Colombia)</span>
                </motion.div>

                {/* Consultoría gratuita */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-orange-500 animate-pulse shadow-md shadow-orange-500/50" />
                    <span className="font-medium text-foreground text-base">Consulta inicial</span>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-orange-500/30 to-orange-500/20 text-orange-500 font-bold border border-orange-500/30">
                    Gratuita
                  </span>
                </motion.div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground text-base">Respuesta rápida garantizada</span>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Respondo a todos los mensajes dentro de 24-48 horas. Para consultas urgentes, utiliza el agendamiento de llamadas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Si queremos mostrar solo Email y Redes Sociales (sin Disponibilidad)
  return (
    <div className="space-y-8">
      {/* Tarjeta de Email */}
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

      {/* Tarjeta de Redes Sociales */}
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
    </div>
  );
}

