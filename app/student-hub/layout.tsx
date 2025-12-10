import type React from "react"
import Link from "next/link"
import { Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StudentHubLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: "Student Hub - Gandhi Engineering College",
  description: "Student dashboard for attendance, results, announcements, and more.",
}

const navItems = [
  { href: "/student-hub", label: "Dashboard", icon: "📊" },
  { href: "/student-hub/attendance", label: "Attendance", icon: "✓" },
  { href: "/student-hub/results", label: "Results", icon: "📈" },
  { href: "/student-hub/announcements", label: "Announcements", icon: "📢" },
  { href: "/student-hub/fees", label: "Fees", icon: "💳" },
  { href: "/student-hub/profile", label: "Profile", icon: "👤" },
  { href: "/student-hub/documents", label: "Documents", icon: "📄" },
]

export default function StudentHubLayout({ children }: StudentHubLayoutProps) {
  return (
    <>
      <nav className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/student-hub" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">SH</span>
              </div>
              <span className="hidden sm:inline font-semibold text-foreground">Student Hub</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button variant="ghost" className="gap-2">
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </>
  )
}
