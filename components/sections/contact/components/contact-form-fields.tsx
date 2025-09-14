"use client";

import { motion } from "framer-motion";
import { FormField } from "@/components/ui/form/form-field";

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  errors: Partial<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>;
  focusedField: string | null;
  onFieldChange: (field: keyof ContactFormFieldsProps['formData'], value: string) => void;
  onFieldFocus: (field: keyof ContactFormFieldsProps['formData']) => void;
  onFieldBlur: () => void;
}

export function ContactFormFields({
  formData,
  errors,
  focusedField,
  onFieldChange,
  onFieldFocus,
  onFieldBlur,
}: Readonly<ContactFormFieldsProps>) {
  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="space-y-4">
      {/* Primera fila: Nombre y Email lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div variants={formItemVariants}>
          <FormField
            id="name"
            label="Nombre"
            placeholder="Tu nombre"
            value={formData.name}
            error={errors.name}
            isFocused={focusedField === "name"}
            onChange={(value) => onFieldChange("name", value)}
            onFocus={() => onFieldFocus("name")}
            onBlur={onFieldBlur}
          />
        </motion.div>

        <motion.div variants={formItemVariants}>
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            error={errors.email}
            isFocused={focusedField === "email"}
            onChange={(value) => onFieldChange("email", value)}
            onFocus={() => onFieldFocus("email")}
            onBlur={onFieldBlur}
          />
        </motion.div>
      </div>

      {/* Segunda fila: Asunto ocupa todo el ancho */}
      <motion.div variants={formItemVariants}>
        <FormField
          id="subject"
          label="Asunto"
          placeholder="Asunto del mensaje"
          value={formData.subject}
          error={errors.subject}
          isFocused={focusedField === "subject"}
          onChange={(value) => onFieldChange("subject", value)}
          onFocus={() => onFieldFocus("subject")}
          onBlur={onFieldBlur}
        />
      </motion.div>

      {/* Tercera fila: Mensaje ocupa todo el ancho con más altura */}
      <motion.div variants={formItemVariants}>
        <FormField
          id="message"
          label="Mensaje"
          type="textarea"
          placeholder="Escribe tu mensaje aquí..."
          rows={5}
          value={formData.message}
          error={errors.message}
          isFocused={focusedField === "message"}
          onChange={(value) => onFieldChange("message", value)}
          onFocus={() => onFieldFocus("message")}
          onBlur={onFieldBlur}
        />
      </motion.div>
    </div>
  );
}
