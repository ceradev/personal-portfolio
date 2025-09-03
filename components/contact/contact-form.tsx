"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof FormData) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    })

    // Clear error when user types
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: undefined,
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    } else if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormStatus("submitting")

    // Simulación de envío de formulario
    try {
      // Aquí iría la lógica real de envío del formulario a un backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setFormStatus("error")

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }
  }

  const handleFocus = (field: keyof FormData) => {
    setFocusedField(field)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  // Animation variants
  const formContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={formContainerVariants}
      className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-4 sm:p-6"
    >
      {formStatus === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-8 sm:py-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, times: [0, 0.8, 1] }}
          >
            <CheckCircle className="h-12 sm:h-16 w-12 sm:w-16 text-green-500 mb-4" />
          </motion.div>
          <h3 className="text-xl font-semibold text-foreground drop-shadow-sm mb-2">¡Mensaje enviado con éxito!</h3>
          <p className="text-foreground/90 dark:text-foreground/95 mb-6">
            Gracias por contactarme. Te responderé lo antes posible.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setFormStatus("idle")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Enviar otro mensaje
            </Button>
          </motion.div>
        </motion.div>
      ) : formStatus === "error" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-8 sm:py-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, times: [0, 0.6, 0.8, 1] }}
          >
            <AlertCircle className="h-12 sm:h-16 w-12 sm:w-16 text-destructive mb-4" />
          </motion.div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Error al enviar el mensaje</h3>
          <p className="text-foreground/80 mb-6">Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setFormStatus("idle")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Intentar de nuevo
            </Button>
          </motion.div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div className="space-y-2" variants={formItemVariants}>
                <Label htmlFor="name" className="text-foreground font-medium text-base">
                  Nombre
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => handleChange(e, "name")}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    className={`bg-background/50 dark:bg-background/60 border-border/40 focus:border-primary/60 text-foreground placeholder:text-foreground/70 dark:placeholder:text-foreground/60 ${
                      errors.name ? "border-destructive" : ""
                    } ${focusedField === "name" ? "ring-2 ring-primary/30" : ""}`}
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-primary/60 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === "name" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {errors.name && (
                  <motion.p
                    className="text-destructive text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              <motion.div className="space-y-2" variants={formItemVariants}>
                <Label htmlFor="email" className="text-foreground font-medium text-base">
                  Email
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange(e, "email")}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className={`bg-background/50 dark:bg-background/60 border-border/40 focus:border-primary/60 text-foreground placeholder:text-foreground/70 dark:placeholder:text-foreground/60 ${
                      errors.email ? "border-destructive" : ""
                    } ${focusedField === "email" ? "ring-2 ring-primary/30" : ""}`}
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-primary/60 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === "email" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {errors.email && (
                  <motion.p
                    className="text-destructive text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>
            </div>

            <motion.div className="space-y-2" variants={formItemVariants}>
              <Label htmlFor="subject" className="text-foreground font-medium text-base">
                Asunto
              </Label>
              <div className="relative">
                <Input
                  id="subject"
                  placeholder="Asunto del mensaje"
                  value={formData.subject}
                  onChange={(e) => handleChange(e, "subject")}
                  onFocus={() => handleFocus("subject")}
                  onBlur={handleBlur}
                  className={`bg-background/50 dark:bg-background/60 border-border/40 focus:border-primary/60 text-foreground placeholder:text-foreground/70 dark:placeholder:text-foreground/60 ${
                    errors.subject ? "border-destructive" : ""
                  } ${focusedField === "subject" ? "ring-2 ring-primary/30" : ""}`}
                />
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary/60 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === "subject" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              {errors.subject && (
                <motion.p
                  className="text-destructive text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {errors.subject}
                </motion.p>
              )}
            </motion.div>

            <motion.div className="space-y-2" variants={formItemVariants}>
              <Label htmlFor="message" className="text-foreground font-medium text-base">
                Mensaje
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange(e, "message")}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  className={`bg-background/50 dark:bg-background/60 border-border/40 focus:border-primary/60 text-foreground placeholder:text-foreground/70 dark:placeholder:text-foreground/60 resize-none ${
                    errors.message ? "border-destructive" : ""
                  } ${focusedField === "message" ? "ring-2 ring-primary/30" : ""}`}
                />
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary/60 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === "message" ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              {errors.message && (
                <motion.p
                  className="text-destructive text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>
          </div>

          <motion.div variants={formItemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group"
              disabled={formStatus === "submitting"}
            >
              <motion.span
                className="absolute inset-0 bg-white/20 rounded-md"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.3 }}
                transition={{ duration: 0.4 }}
              />

              {formStatus === "submitting" ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Enviar Mensaje
                </div>
              )}
            </Button>
          </motion.div>
        </form>
      )}
    </motion.div>
  )
}
