"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      mixBlendMode: "difference" as const,
    },
  }

  // Expose these functions to the global window object
  useEffect(() => {
    window.enterTextCursor = () => setCursorVariant("text")
    window.leaveTextCursor = () => setCursorVariant("default")

    return () => {
      // @ts-ignore
      delete window.enterTextCursor
      // @ts-ignore
      delete window.leaveTextCursor
    }
  }, [])

  return (
    <motion.div
      className="custom-cursor hidden md:block fixed top-0 left-0 rounded-full bg-primary/30 pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}

// Add these to the global Window interface
declare global {
  interface Window {
    enterTextCursor: () => void
    leaveTextCursor: () => void
  }
}

