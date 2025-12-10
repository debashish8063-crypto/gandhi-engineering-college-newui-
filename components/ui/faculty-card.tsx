interface FacultyCardProps {
  name: string
  designation: string
  specialization: string
  email: string
  image?: string
}

export function FacultyCard({ name, designation, specialization, email, image }: FacultyCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-border">
      {image && <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover bg-secondary" />}
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary mb-1">{name}</h3>
        <p className="text-sm font-medium text-accent mb-2">{designation}</p>
        <p className="text-sm text-muted-foreground mb-3">{specialization}</p>
        <a href={`mailto:${email}`} className="text-sm text-primary hover:underline">
          {email}
        </a>
      </div>
    </div>
  )
}
