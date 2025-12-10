"use client"

interface CourseCardProps {
  name: string
  duration: string
  intake: string
  description?: string
  onViewDetails?: () => void
}

export function CourseCard({ name, duration, intake, description, onViewDetails }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer border border-border">
      <h3 className="text-xl font-bold text-primary mb-3">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="space-y-2 mb-4">
        <p className="text-sm">
          <span className="font-semibold text-foreground">Duration:</span> {duration}
        </p>
        <p className="text-sm">
          <span className="font-semibold text-foreground">Intake:</span> {intake}
        </p>
      </div>
      <button
        onClick={onViewDetails}
        className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-academic-blue-light transition-colors"
      >
        View Details
      </button>
    </div>
  )
}
