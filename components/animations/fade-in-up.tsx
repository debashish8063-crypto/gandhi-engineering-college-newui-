"use client"

import { motion } from "framer-motion"
import type React from "react"

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeInUp({ children, delay = 0, duration = 0.5, className }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
