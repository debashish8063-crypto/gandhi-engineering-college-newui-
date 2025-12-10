interface RecruiterLogoProps {
  name: string
  logo?: string
}

export function RecruiterLogo({ name, logo }: RecruiterLogoProps) {
  return (
    <div className="flex items-center justify-center h-20 bg-white rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
      {logo ? (
        <img src={logo || "/placeholder.svg"} alt={name} className="h-12 object-contain" />
      ) : (
        <span className="text-sm font-semibold text-foreground text-center px-4">{name}</span>
      )}
    </div>
  )
}
