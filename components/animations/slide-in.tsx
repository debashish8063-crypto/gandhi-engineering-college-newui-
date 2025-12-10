"use client"

import { motion } from "framer-motion"
import type React from "react"

interface SlideInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: "left" | "right" | "up" | "down"
  className?: string
}

export function SlideIn({ children, delay = 0, duration = 0.5, direction = "left", className }: SlideInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -40, opacity: 0 }
      case "right":
        return { x: 40, opacity: 0 }
      case "up":
        return { y: 40, opacity: 0 }
      case "down":
        return { y: -40, opacity: 0 }
      default:
        return { x: -40, opacity: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
