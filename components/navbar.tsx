"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Faculty", href: "/faculty" },
    { label: "Admissions", href: "/admissions" },
    { label: "Placements", href: "/placements" },
    { label: "Campus Life", href: "/campus-life" },
    { label: "News & Events", href: "/news" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">GEC</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="ml-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-academic-blue-light transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground hover:text-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="block px-3 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-academic-blue-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
