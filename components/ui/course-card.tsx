"use client"

import { motion } from "framer-motion"

interface CourseCardProps {
  name: string
  duration: string
  intake: string
  description?: string
  onViewDetails?: () => void
}

export function CourseCard({ name, duration, intake, description, onViewDetails }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-md p-6 border border-border overflow-hidden"
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-primary mb-3">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2 mb-6">
          <p className="text-sm">
            <span className="font-semibold text-foreground">Duration:</span> {duration}
          </p>
          <p className="text-sm">
            <span className="font-semibold text-foreground">Intake:</span> {intake}
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewDetails}
          className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-academic-blue-light transition-colors active:scale-95"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  )
}
