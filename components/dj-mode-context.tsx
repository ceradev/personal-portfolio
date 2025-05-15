"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type DJModeContextType = {
  isDJMode: boolean
  toggleDJMode: () => void
}

const DJModeContext = createContext<DJModeContextType | undefined>(undefined)

export function DJModeProvider({ children }: { children: React.ReactNode }) {
  const [isDJMode, setIsDJMode] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Verificar si estamos en el cliente
    setIsClient(true)

    // Recuperar el estado del DJ Mode del localStorage
    const savedMode = localStorage.getItem("djMode")
    if (savedMode) {
      setIsDJMode(savedMode === "true")
    }
  }, [])

  useEffect(() => {
    // Solo guardar en localStorage si estamos en el cliente
    if (isClient) {
      localStorage.setItem("djMode", isDJMode.toString())

      // Añadir o quitar la clase al body para estilos globales
      if (isDJMode) {
        document.body.classList.add("dj-mode")
      } else {
        document.body.classList.remove("dj-mode")
      }
    }
  }, [isDJMode, isClient])

  const toggleDJMode = () => {
    setIsDJMode((prev) => !prev)
  }

  return <DJModeContext.Provider value={{ isDJMode, toggleDJMode }}>{children}</DJModeContext.Provider>
}

export function useDJMode() {
  const context = useContext(DJModeContext)
  if (context === undefined) {
    throw new Error("useDJMode must be used within a DJModeProvider")
  }
  return context
}
