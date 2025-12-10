"use client"

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
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-border">
      {image && <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-cover bg-secondary" />}
      <div className="p-6">
        {category && (
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColors[category]}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        )}
        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{date}</span>
          <button
            onClick={onReadMore}
            className="text-sm font-semibold text-primary hover:text-academic-blue-light transition-colors"
          >
            Read More →
          </button>
        </div>
      </div>
    </div>
  )
}
