import type React from "react"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function Button({ variant = "primary", size = "md", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 font-medium"

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-academic-blue-light shadow-md hover:shadow-lg active:scale-95",
    secondary: "bg-secondary text-secondary-foreground hover:bg-border shadow-md hover:shadow-lg active:scale-95",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95",
  }

  return (
    <button className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
