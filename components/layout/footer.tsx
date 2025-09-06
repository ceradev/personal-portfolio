"use client"

import { Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/30 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Code className="h-6 w-6 text-primary mr-2" />
          <span className="text-foreground/90 font-semibold">César Suárez Orizondo</span>
        </div>
        <div className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}
