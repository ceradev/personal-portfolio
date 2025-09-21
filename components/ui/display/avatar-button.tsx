"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AvatarButtonProps {
  className?: string;
}

export function AvatarButton({ className = "" }: Readonly<AvatarButtonProps>) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      type="button"
      aria-label="Volver al inicio"
      className={`relative rounded-full overflow-hidden bg-background/80 border-2 border-primary/30 hover:border-primary/60 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer z-[70] ${className || 'w-10 h-10 md:w-12 md:h-12'}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src="/images/profile-icon.png"
        alt="Avatar - Volver al inicio"
        width={40}
        height={40}
        className="w-full h-full object-cover"
        priority
      />
    </motion.button>
  );
}
