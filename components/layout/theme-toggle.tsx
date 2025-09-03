"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, SunMoon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/layout/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Effect to handle mounting state
  useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted, don't render anything to avoid hydration mismatch
  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 border-primary/50 hover:bg-background/80 hover:border-primary text-foreground backdrop-blur-sm"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "light" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : theme === "dark" ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <SunMoon className="h-5 w-5 text-foreground" />
              )}
            </motion.div>
          </AnimatePresence>
          <span className="sr-only">Cambiar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 border-border backdrop-blur-sm">
        <DropdownMenuItem
          className="flex items-center gap-2 text-foreground hover:text-foreground focus:text-foreground cursor-pointer hover:bg-muted focus:bg-muted"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-4 w-4 text-yellow-400" />
          <span>Claro</span>
          {theme === "light" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 text-foreground hover:text-foreground focus:text-foreground cursor-pointer hover:bg-muted focus:bg-muted"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4 text-foreground" />
          <span>Oscuro</span>
          {theme === "dark" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 text-foreground hover:text-foreground focus:text-foreground cursor-pointer hover:bg-muted focus:bg-muted"
          onClick={() => setTheme("system")}
        >
          <SunMoon className="h-4 w-4 text-foreground" />
          <span>Sistema</span>
          {theme === "system" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
