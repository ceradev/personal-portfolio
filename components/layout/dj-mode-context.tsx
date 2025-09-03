"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface DJModeContextType {
  isDJMode: boolean
  toggleDJMode: () => void
}

const DJModeContext = createContext<DJModeContextType | undefined>(undefined)

export function DJModeProvider({ children }: { children: ReactNode }) {
  const [isDJMode, setIsDJMode] = useState(false)

  const toggleDJMode = () => {
    setIsDJMode(!isDJMode)
  }

  return (
    <DJModeContext.Provider value={{ isDJMode, toggleDJMode }}>
      {children}
    </DJModeContext.Provider>
  )
}

export function useDJMode() {
  const context = useContext(DJModeContext)
  if (context === undefined) {
    throw new Error("useDJMode must be used within a DJModeProvider")
  }
  return context
}
