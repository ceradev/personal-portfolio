"use client"

import { useState, useEffect } from "react"

export function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Función para comprobar si la pantalla es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) // Consideramos móvil por debajo de 640px (sm en Tailwind)
    }

    // Comprobar al inicio
    checkMobile()

    // Añadir listener para cambios de tamaño
    window.addEventListener("resize", checkMobile)

    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return isMobile
}
