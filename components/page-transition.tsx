"use client"

import type React from "react"

import { motion } from "framer-motion"

const variants = {
  initial: { opacity: 0, x: -200, y: 0 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: 0 },
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.75,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

