"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TypeWriterProps } from "@/data/hero";

export function TypeWriter({ words }: Readonly<TypeWriterProps>) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const typeWriter = () => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // Fase de escritura
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
          timeoutId = setTimeout(typeWriter, 100); // 0.1 segundos por letra
        } else {
          // Palabra completa, esperar antes de borrar
          timeoutId = setTimeout(() => setIsDeleting(true), 300); // 0.3 segundos para leer
        }
      } else if (displayedText.length > 0) {
        // Fase de borrado
        setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        timeoutId = setTimeout(typeWriter, 50); // Borrado más rápido
      } else {
        // Cambiar a siguiente palabra
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    // Iniciar después de un delay inicial
    timeoutId = setTimeout(typeWriter, 500); // Empezar después de 0.5 segundos
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentWordIndex, displayedText, isDeleting, words]);

  return (
    <div className="inline-block ml-1 relative">
      <motion.span
        className="inline-block text-primary font-bold"
        whileHover={{ scale: 1.05, color: "#ef4444" }}
      >
        {displayedText}
      </motion.span>
      
      {/* Cursor parpadeante */}
      <motion.span
        className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ 
          duration: 1, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
