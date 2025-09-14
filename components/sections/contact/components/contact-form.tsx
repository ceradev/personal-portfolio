"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
      className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-4 sm:p-6"
    >
      {renderFormContent()}
    </motion.div>
  );
}