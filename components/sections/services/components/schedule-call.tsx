"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Video, Phone, MessageSquare, ArrowRight } from "lucide-react";

export function ScheduleCall() {
  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-background rounded-2xl p-6 border-2 border-border/20 shadow-lg hover:shadow-lg transition-all duration-300 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Header with animated icons */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-4"
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
              className="p-3 rounded-xl bg-gradient-to-br from-red-500/30 to-red-500/20 shadow-md shadow-red-500/20"
            >
              <Calendar className="h-6 w-6 text-red-500" />
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
              className="p-2 rounded-full bg-gradient-to-br from-red-500/40 to-red-500/30"
            >
              <Clock className="h-5 w-5 text-red-500" />
            </motion.div>
          </motion.div>

          <motion.h3
            className="text-xl font-bold text-foreground mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Agenda una llamada conmigo
          </motion.h3>

          <motion.p
            className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            viewport={{ once: true }}
          >
            ¿Prefieres una conversación directa? Agenda una llamada de 30 minutos para discutir tu proyecto.
          </motion.p>

          {/* Call options grid - Compact version */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            {/* Video call option */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group/option relative"
            >
              <div className="relative p-4 rounded-lg bg-background border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex p-2 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-500/20 shadow-md shadow-blue-500/20 mb-2"
                >
                  <Video className="h-4 w-4 text-blue-500" />
                </motion.div>
                <h4 className="font-bold text-foreground text-sm mb-1">Videollamada</h4>
                <p className="text-xs text-muted-foreground mb-1">Google Meet o Zoom</p>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs text-blue-500 font-medium">Recomendado</span>
                </div>
              </div>
            </motion.div>

            {/* Phone call option */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group/option relative"
            >
              <div className="relative p-4 rounded-lg bg-background border border-green-500/20 hover:border-green-500/40 transition-all duration-300 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex p-2 rounded-lg bg-gradient-to-br from-green-500/30 to-green-500/20 shadow-md shadow-green-500/20 mb-2"
                >
                  <Phone className="h-4 w-4 text-green-500" />
                </motion.div>
                <h4 className="font-bold text-foreground text-sm mb-1">Llamada telefónica</h4>
                <p className="text-xs text-muted-foreground mb-1">Conversación directa</p>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-500 font-medium">Disponible</span>
                </div>
              </div>
            </motion.div>

            {/* Consultation option */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group/option relative"
            >
              <div className="relative p-4 rounded-lg bg-background border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex p-2 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-500/20 shadow-md shadow-purple-500/20 mb-2"
                >
                  <MessageSquare className="h-4 w-4 text-purple-500" />
                </motion.div>
                <h4 className="font-bold text-foreground text-sm mb-1">Consulta inicial</h4>
                <p className="text-xs text-muted-foreground mb-1">Evaluación gratuita</p>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-xs text-purple-500 font-medium">Gratis</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://calendly.com/suarezorizondocesararamis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-6 py-2.5 rounded-lg font-semibold text-center w-full sm:w-auto border-2 border-red-500 hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              style={{ 
                backgroundColor: '#ef4444', 
                color: '#ffffff',
                borderColor: '#ef4444'
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                backgroundColor: '#dc2626',
                borderColor: '#dc2626'
              }}
              whileTap={{ 
                scale: 0.95,
                backgroundColor: '#ffffff',
                color: '#ef4444',
                borderColor: '#ef4444'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <Calendar className="h-4 w-4" />
              Agendar llamada
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.a>
            
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="h-3 w-3 text-red-500" />
                <span className="text-xs font-medium">Disponible Lun-Vie, 9:00-18:00</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-500 font-medium">Respuesta en 24h</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

