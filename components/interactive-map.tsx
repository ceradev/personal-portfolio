"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function InteractiveMap() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    // Verificar si estamos en el cliente antes de cargar el mapa
    if (typeof window !== "undefined") {
      // Simular un tiempo de carga para el mapa
      const timer = setTimeout(() => {
        setMapLoaded(true)
      }, 1000)

      // Mostrar fallback si el mapa tarda demasiado
      const fallbackTimer = setTimeout(() => {
        if (!mapLoaded) {
          setShowFallback(true)
        }
      }, 3000)

      return () => {
        clearTimeout(timer)
        clearTimeout(fallbackTimer)
      }
    }
  }, [mapLoaded])

  // Coordenadas de San Miguel de Abona, Tenerife
  const latitude = 28.0997
  const longitude = -16.6127

  return (
    <div className="relative w-full h-full bg-zinc-900 overflow-hidden">
      {!mapLoaded || showFallback ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 p-6">
          {showFallback ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-4">
              <MapPin className="h-12 w-12 text-red-500 mx-auto" />
              <h3 className="text-xl font-semibold text-zinc-200">Ubicación</h3>
              <p className="text-zinc-400">San Miguel de Abona, Tenerife, Islas Canarias, España</p>
              <div className="mt-2 p-3 bg-zinc-800/50 rounded-lg text-sm text-zinc-300">
                <p>Latitud: {latitude}° N</p>
                <p>Longitud: {longitude}° W</p>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 rounded-full border-4 border-red-500 border-t-transparent animate-spin mx-auto"></div>
              <p className="text-zinc-400">Cargando mapa...</p>
            </div>
          )}
        </div>
      ) : (
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28095.927909936266!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9f4f53b4a9e5%3A0x270c12512e7d2d18!2sSan%20Miguel%20de%20Abona%2C%20Santa%20Cruz%20de%20Tenerife!5e0!3m2!1ses!2ses!4v1715209483788!5m2!1ses!2ses`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Ubicación en San Miguel de Abona, Tenerife"
        ></iframe>
      )}

      {/* Overlay con gradiente para mantener la estética del sitio */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

      {/* Pin de ubicación personalizado */}
      {mapLoaded && !showFallback && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
        >
          <div className="relative">
            <MapPin className="h-12 w-12 text-red-500 drop-shadow-lg" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
