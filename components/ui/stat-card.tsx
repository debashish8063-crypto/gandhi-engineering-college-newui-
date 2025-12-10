interface StatCardProps {
  number: string | number
  label: string
  suffix?: string
}

export function StatCard({ number, label, suffix }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {number}
        {suffix && <span className="text-2xl">{suffix}</span>}
      </div>
      <p className="text-center text-muted-foreground font-medium">{label}</p>
    </div>
  )
}
