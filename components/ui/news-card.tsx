"use client"

import { motion } from "framer-motion"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category?: "news" | "event" | "notice"
  image?: string
  onReadMore?: () => void
}

export function NewsCard({ title, excerpt, date, category, image, onReadMore }: NewsCardProps) {
  const categoryColors = {
    news: "bg-blue-100 text-primary",
    event: "bg-green-100 text-success-green",
    notice: "bg-orange-100 text-orange-700",
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-border hover:shadow-xl transition-shadow"
    >
      {image && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden h-40"
        >
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover bg-secondary" />
        </motion.div>
      )}
      <div className="p-6">
        {category && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColors[category]}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.span>
        )}
        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{date}</span>
          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReadMore}
            className="text-sm font-semibold text-primary hover:text-academic-blue-light transition-colors"
          >
            Read More →
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
