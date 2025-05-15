"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TextRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
  highlight?: boolean
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = false,
  threshold = 0.1,
  highlight = false,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      if (once) {
        setHasAnimated(true)
      }
    } else if (!isInView && !once && hasAnimated) {
      controls.start("hidden")
    }
  }, [isInView, controls, hasAnimated, once])

  // Dividir el texto en palabras para animar cada una
  const renderWords = () => {
    // Si children no es un string, devolver como está
    if (typeof children !== "string") {
      return (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration, delay },
            },
            hidden: { opacity: 0, y: 20 },
          }}
          className={className}
        >
          {children}
        </motion.div>
      )
    }

    // Dividir el texto en palabras
    const words = children.split(" ")

    return (
      <motion.div ref={ref} className={`inline-block ${className}`}>
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className={`inline-block ${highlight ? "hover:text-primary transition-colors duration-300" : ""} mx-0.5`}
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: duration * 0.8,
                  delay: delay + i * 0.05,
                },
              },
              hidden: { opacity: 0, y: 10 },
            }}
            whileHover={highlight ? { scale: 1.05, color: "var(--primary)" } : {}}
          >
            {word}
            {i !== words.length - 1 && " "}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return renderWords()
}
