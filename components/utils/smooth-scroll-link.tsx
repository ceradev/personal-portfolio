"use client"

import type React from "react"

import type { ReactNode } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  onClick?: () => void
}

export function SmoothScrollLink({ href, children, onClick }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }

    if (onClick) {
      onClick()
    }
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
