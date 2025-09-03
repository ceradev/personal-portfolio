"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ScrollDownArrowProps {
  targetSection: string
}

export function ScrollDownArrow({ targetSection = "about" }: ScrollDownArrowProps) {
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
    <motion.div
      className="w-full flex justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 cursor-pointer z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        onClick={handleClick}
        className="flex flex-col items-center justify-center text-primary hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="p-3 sm:p-4 rounded-full bg-primary/10 border border-primary/30 hover:border-primary/50 backdrop-blur-sm shadow-md mb-4 sm:mb-0">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
