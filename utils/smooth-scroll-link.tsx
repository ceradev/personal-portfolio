"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function SmoothScrollLink({ href, children, className, onClick }: Readonly<SmoothScrollLinkProps>) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn("transition-colors duration-200", className)}
    >
      {children}
    </a>
  )
}
