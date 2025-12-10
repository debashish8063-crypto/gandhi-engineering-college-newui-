"use client"

import { motion } from "framer-motion"
import type React from "react"

interface HoverLiftProps {
  children: React.ReactNode
  className?: string
}

export function HoverLift({ children, className }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
