interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
    </div>
  )
}
