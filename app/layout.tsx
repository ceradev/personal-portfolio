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
  title: "Ceradev | Desarrollador Freelancer Full Stack",
  description:
    "Portfolio profesional de César Suárez, Desarrollador Full Stack con experiencia en React, Next.js y más.",
  keywords: [
    "César Suárez",
    "Desarrollador Freelancer Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Portfolio",
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
    url: 'https://cesarsuarez.dev',
    title: 'Ceradev | Desarrollador Freelancer Full Stack',
    description: 'Portfolio profesional de Ceradev, Desarrollador Freelancer Full Stack con experiencia en React, Next.js y más.',
    siteName: 'Ceradev Portfolio',
    images: [
      {
        url: '/avatar-profile.png',
        width: 1200,
        height: 630,
        alt: 'Ceradev - Desarrollador Freelancer Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceradev | Desarrollador Freelancer Full Stack',
    description: 'Portfolio profesional de César Suárez, Desarrollador Full Stack con experiencia en React, Next.js y más.',
    images: ['/avatar-profile.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
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
