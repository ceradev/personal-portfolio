"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/form/input";
import { Textarea } from "@/components/ui/form/textarea";
import { Label } from "@/components/ui/form/label";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder: string;
  value: string;
  error?: string;
  isFocused: boolean;
  rows?: number;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  error,
  isFocused,
  rows = 4,
  onChange,
  onFocus,
  onBlur,
}: Readonly<FormFieldProps>) {
  const InputComponent = type === "textarea" ? Textarea : Input;
  
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-foreground font-medium text-base">
        {label}
      </Label>
      <div className="relative">
        <InputComponent
          id={id}
          type={type === "textarea" ? undefined : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          rows={type === "textarea" ? rows : undefined}
          className={`bg-background/50 dark:bg-background/60 border-border/40 focus:border-primary/60 text-foreground placeholder:text-foreground/70 dark:placeholder:text-foreground/60 ${
            error ? "border-destructive" : ""
          } ${isFocused ? "ring-2 ring-primary/30" : ""} ${
            type === "textarea" ? "resize-none" : ""
          }`}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-primary/60 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isFocused ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {error && (
        <motion.p
          className="text-destructive text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
