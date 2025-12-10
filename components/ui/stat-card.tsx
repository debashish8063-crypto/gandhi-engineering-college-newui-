"use client"

import { motion } from "framer-motion"

interface StatCardProps {
  number: string | number
  label: string
  suffix?: string
}

export function StatCard({ number, label, suffix }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-primary mb-2"
      >
        {number}
        {suffix && <span className="text-2xl">{suffix}</span>}
      </motion.div>
      <p className="text-center text-muted-foreground font-medium">{label}</p>
    </motion.div>
  )
}
