"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";
import { ContactFormFields } from "./contact-form-fields";
import { ContactFormActions } from "./contact-form-actions";
import { FormStatusMessage } from "@/components/ui/feedback/form-status-message";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setFormStatus("submitting");

    try {
      // Simulación de envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Resetear el estado después de 5 segundos
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const resetForm = () => setFormStatus("idle");

  const renderFormContent = () => {
    if (formStatus === "success") {
      return (
        <FormStatusMessage
          type="success"
          title="¡Mensaje enviado con éxito!"
          message="Gracias por contactarme. Te responderé lo antes posible."
          buttonText="Enviar otro mensaje"
          onButtonClick={resetForm}
        />
      );
    }

    if (formStatus === "error") {
      return (
        <FormStatusMessage
          type="error"
          title="Error al enviar el mensaje"
          message="Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde."
          buttonText="Intentar de nuevo"
          onButtonClick={resetForm}
        />
      );
    }

    return (
      <form className="space-y-4">
        <ContactFormFields
          formData={formData}
          errors={errors}
          focusedField={focusedField}
          onFieldChange={(field: keyof FormData, value: string) => handleFieldChange(field, value)}
          onFieldFocus={(field: keyof FormData) => setFocusedField(field)}
          onFieldBlur={() => setFocusedField(null)}
        />
        <ContactFormActions
          isSubmitting={formStatus === "submitting"}
          onSubmit={handleSubmit}
        />
      </form>
    );
  };

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
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={formContainerVariants}
      className="w-full"
    >
      {/* Header del formulario */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-md shadow-primary/20"
          >
            <MessageSquare className="h-6 w-6 text-primary" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Envíame un mensaje
            </h3>
            <p className="text-foreground/70">¿Tienes un proyecto en mente?</p>
          </div>
        </div>
        
        <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.
          Cuéntame sobre tu proyecto y cómo puedo ayudarte a hacerlo realidad.
        </p>
        
        <div className="flex items-center justify-center gap-6 p-4 rounded-xl bg-background border border-border/50 max-w-md mx-auto">
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
      </motion.div>

      {/* Formulario */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mt-12 p-8 rounded-2xl border border-border/30 bg-background/50 backdrop-blur-sm shadow-lg shadow-red-500/10 transition-all duration-300"
      >
        {renderFormContent()}
      </motion.div>
    </motion.div>
  );
}