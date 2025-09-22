"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/display/button";
import { Card } from "@/components/ui/layout/card";
import { HomeIcon, ArrowLeftIcon, SearchIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          {/* Error Code */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary via-primary-600 to-primary-800 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 max-w-2xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¡Oops! Página no encontrada
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              La página que estás buscando no existe o ha sido movida. 
              No te preocupes, estos errores pasan hasta a los mejores desarrolladores.
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-primary/10 to-primary-600/10 dark:from-primary/20 dark:to-primary-600/20 rounded-full flex items-center justify-center border border-primary/20">
                <SearchIcon className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
              </div>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-warning-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs sm:text-sm font-bold">?</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link href="/">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary-600 text-primary-foreground px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Página Anterior
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-6 bg-card/50 border-border shadow-lg">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                ¿Necesitas ayuda?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <Link 
                  href="/#about" 
                  className="text-primary hover:text-primary-600 transition-colors duration-300 hover:underline"
                >
                  Sobre Mí
                </Link>
                <Link 
                  href="/#projects" 
                  className="text-primary hover:text-primary-600 transition-colors duration-300 hover:underline"
                >
                  Proyectos
                </Link>
                <Link 
                  href="/#contact" 
                  className="text-primary hover:text-primary-600 transition-colors duration-300 hover:underline"
                >
                  Contacto
                </Link>
              </div>
            </Card>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <p className="text-sm text-muted-foreground italic bg-muted/30 rounded-lg p-4 border border-border">
              💡 <strong>Dato curioso:</strong> El error 404 se llama así porque la sala 404 
              del CERN (donde se inventó la web) era donde se guardaban los archivos perdidos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
