"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

interface CallToActionProps {
  title?: string;
  description?: string;
  email?: string;
}

export function CallToAction({
  title = "¿Listo para dar el siguiente paso?",
  description = "Cada proyecto es único. Trabajemos juntos para crear algo extraordinario que impulse tu negocio hacia el futuro.",
  email = "suarezorizondocesararamis@gmail.com",
}: CallToActionProps) {
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
          className="bg-white rounded-2xl p-8 border-2 border-red-300/40 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          whileHover={{
            scale: 1.02,
            boxShadow:
              "0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={`mailto:${email}?subject=Solicitud de Presupuesto&body=Hola César,%0D%0A%0D%0AMe interesa solicitar un presupuesto para mi proyecto. Por favor, contáctame para discutir los detalles.%0D%0A%0D%0ASaludos`}
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold text-center w-full sm:w-auto border-2 border-red-500 hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2"
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
              transition={{ duration: 0.5, delay: 1.3 }}
              viewport={{ once: true }}
            >
              <Mail className="h-4 w-4" />
              Solicitar Presupuesto
            </motion.a>

            <motion.span 
              className="text-gray-500 font-bold text-lg hidden sm:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.35 }}
              viewport={{ once: true }}
            >
              O
            </motion.span>

            <motion.a
              href={`mailto:${email}?subject=Agendar Llamada&body=Hola César,%0D%0A%0D%0AMe gustaría agendar una llamada para discutir mi proyecto. Por favor, indícame qué horarios tienes disponibles.%0D%0A%0D%0ASaludos`}
              className="bg-white hover:bg-red-50 text-red-500 hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center w-full sm:w-auto border-2 border-red-500 hover:border-red-600 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 20px rgba(239, 68, 68, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <Phone className="h-4 w-4" />
              Agendar Llamada
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
