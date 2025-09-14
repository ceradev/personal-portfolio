"use client";

import { motion } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";
import { ContactForm } from "./contact-form";

export function ContactFormSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="group relative overflow-hidden w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-background/90 to-background/70 rounded-3xl border-2 border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-primary/30 hover:border-primary/50 transition-all duration-300">
        
        {/* Header del formulario */}
        <div className="p-4 pb-3 border-b border-primary/20">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-xl bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20"
            >
              <MessageSquare className="h-5 w-5 text-primary" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Envíame un mensaje
              </h3>
              <p className="text-foreground/70 text-sm">¿Tienes un proyecto en mente?</p>
            </div>
          </div>
          
          <p className="text-foreground/80 text-sm leading-relaxed mb-3">
            Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.
            Cuéntame sobre tu proyecto y cómo puedo ayudarte a hacerlo realidad.
          </p>
          
          <div className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-500 font-medium">Respuesta garantizada en 24h</span>
            </div>
            <div className="w-px h-3 bg-border" />
            <div className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-xs text-primary font-medium">Consulta gratuita</span>
            </div>
          </div>
        </div>
        
        {/* Formulario */}
        <div className="p-4">
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
}