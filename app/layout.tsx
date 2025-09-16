import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Ceradev | Desarrollador Freelancer",
  description:
    "Portfolio profesional de Ceradev, Desarrollador Full Stack con experiencia en React, Java, Python, entre otras tecnologías.",
  keywords: [
    "César Suárez",
    "Desarrollador Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Git",
    "Figma",
    "Node.js",
    "Portfolio",
    "Full Stack",
    "Freelancer",
    "Desarrollador Web"
  ],
  authors: [{ name: "César Suárez", url: "https://linkedin.com/in/césar-aramis-suárez-orizondo/" }],
  creator: "César Suárez",
  metadataBase: new URL('https://cesarsuarez.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ceradev.com',
    title: 'Ceradev | Desarrollador Full Stack',
    description: 'Portfolio profesional de Ceradev, Desarrollador Full Stack con experiencia en React, Java, Python, entre otras tecnologías.',
    siteName: 'Ceradev Portfolio',
    images: [
      {
        url: '/images/avatar-profile.png',
        width: 1200,
        height: 630,
        alt: 'Ceradev - Desarrollador Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceradev | Desarrollador Full Stack',
    description: 'Portfolio profesional de Ceradev, Desarrollador Full Stack con experiencia en React, Java, Python, entre otras tecnologías.',
    images: ['/images/avatar-profile.png'],
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/icons/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
