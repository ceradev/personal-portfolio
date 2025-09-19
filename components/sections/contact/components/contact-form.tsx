"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles, CheckCircle, Clock } from "lucide-react";
import { ContactFormFields } from "./contact-form-fields";
import { ContactFormActions } from "./contact-form-actions";
import { FormStatusMessage } from "@/components/ui/feedback/form-status-message";
import { ErrorBoundary } from "@/components/ui/feedback/error-boundary";

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

  const handleSubmit = async (e?: React.FormEvent) => {
    // Prevenir el comportamiento por defecto del formulario
    if (e) {
      e.preventDefault();
    }
    
    if (!validateForm()) return;

    setFormStatus("submitting");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Verificar si la respuesta es válida antes de intentar parsearla
      if (!response.ok) {
        let errorMessage = 'Error al enviar el mensaje';
        try {
          const errorResult = await response.json();
          errorMessage = errorResult.error || errorMessage;
        } catch (parseError) {
          console.warn("No se pudo parsear el error del servidor:", parseError);
          errorMessage = `Error del servidor: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      // Intentar parsear la respuesta exitosa
      try {
        await response.json();
      } catch (parseError) {
        console.warn("No se pudo parsear la respuesta exitosa:", parseError);
        // Continuar con éxito aunque no se pueda parsear la respuesta
      }
      
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Ya no reseteamos automáticamente - el usuario decide cuándo enviar otro mensaje
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      
      // Manejar diferentes tipos de errores
      let errorMessage = "Ha ocurrido un error inesperado";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      // Log del error para debugging
      console.error("Error details:", {
        message: errorMessage,
        type: typeof error,
        stack: error instanceof Error ? error.stack : undefined
      });
      
      setFormStatus("error");
      // Ya no reseteamos automáticamente - el usuario decide cuándo intentar de nuevo
    }
  };

  const resetForm = () => setFormStatus("idle");

  const renderFormContent = () => {
    if (formStatus === "success") {
      return (
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
          <h3 className="text-xl font-semibold text-foreground drop-shadow-sm mb-2">
            ¡Mensaje enviado con éxito!
          </h3>
          <p className="text-foreground/90 dark:text-foreground/95 mb-6">
            Gracias por contactarme. He recibido tu mensaje y te responderé lo antes posible, generalmente en menos de 24 horas.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Revisa tu email para mi respuesta</span>
          </div>
        </motion.div>
      );
    }

    if (formStatus === "error") {
      return (
        <FormStatusMessage
          type="error"
          title="Error al enviar el mensaje"
          message="Ha ocurrido un error al enviar tu mensaje. Por favor, revisa tu conexión a internet e inténtalo de nuevo."
          buttonText="Intentar de nuevo"
          onButtonClick={resetForm}
          showAutoReset={false}
        />
      );
    }

    return (
      <form className="space-y-4" onSubmit={handleSubmit}>
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
    <ErrorBoundary>
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
          className="max-w-2xl mx-auto mt-12 p-8 rounded-2xl border border-border/30 bg-background/50 backdrop-blur-sm shadow-lg shadow-primary/10 transition-all duration-300"
        >
          {renderFormContent()}
        </motion.div>
      </motion.div>
    </ErrorBoundary>
  );
}