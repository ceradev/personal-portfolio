import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { DJModeProvider } from "@/components/dj-mode-context"
import { DJModeToggle } from "@/components/dj-mode-toggle"
import { AudioVisualizer } from "@/components/audio-visualizer"
import { HomeButton } from "@/components/home-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "César A. Suárez - Portfolio",
  description: "Full Stack Developer Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} ${inter.className}`}>
        <ThemeProvider defaultTheme="dark">
          <DJModeProvider>
            <AudioVisualizer />
            <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
              <DJModeToggle />
            </div>
            <HomeButton />
            {children}
          </DJModeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
