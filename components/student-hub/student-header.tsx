"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface StudentHeaderProps {
  name: string
  enrollmentNo: string
  branch: string
  year: string
  presentToday: boolean
}

export function StudentHeader({ name, enrollmentNo, branch, year, presentToday }: StudentHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-border p-6">
      <div className="flex items-start justify-between gap-6">
        <div className="flex gap-4 items-start">
          <Avatar className="w-20 h-20 border-2 border-primary">
            <AvatarImage src={`/placeholder.svg?height=80&width=80&query=student profile`} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm text-muted-foreground">{enrollmentNo}</p>
            <div className="flex gap-4 mt-2">
              <span className="text-sm font-medium">{branch}</span>
              <span className="text-sm text-muted-foreground">{year}</span>
            </div>
          </div>
        </div>
        <Badge className={presentToday ? "bg-success-green" : "bg-error-red"}>
          {presentToday ? "Present Today" : "Absent Today"}
        </Badge>
      </div>
    </div>
  )
}
