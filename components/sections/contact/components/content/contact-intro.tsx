"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Users, BadgeCheck } from "lucide-react";
import { TextReveal } from "@/utils/text-reveal";

export function ContactIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Fondo con gradiente y efectos */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-lg shadow-primary/10" />
      
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
  );
}

