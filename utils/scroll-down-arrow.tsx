"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ScrollDownArrowProps {
  targetSection: string
}

export function ScrollDownArrow({ targetSection = "about" }: Readonly<ScrollDownArrowProps>) {
  const handleClick = () => {
    const section = document.getElementById(targetSection)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Mobile: Positioned at bottom right of hero content */}
      <div className="md:hidden flex justify-end mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={handleClick}
          className="inline-flex items-center justify-center text-primary cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="p-3 rounded-full bg-primary/15 border border-primary/40 hover:border-primary/60 backdrop-blur-sm shadow-lg">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Centered below content */}
      <div className="hidden md:block w-full mt-6 lg:mt-12 z-10">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={handleClick}
            className="inline-flex items-center justify-center text-primary cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="p-4 rounded-full bg-primary/10 border border-primary/30 hover:border-primary/50 backdrop-blur-sm shadow-md">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-7 w-7" />
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </>
  )
}
