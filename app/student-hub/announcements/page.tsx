"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Search } from "lucide-react"

const allAnnouncements = [
  {
    id: 1,
    title: "Semester Exam Schedule Released",
    category: "Exam",
    date: "2024-01-15",
    priority: "high",
    content:
      "The final semester exam schedule has been released. Please check the attached document for the complete timetable.",
    author: "Academic Affairs",
  },
  {
    id: 2,
    title: "Winter Holiday Notification",
    category: "Holiday",
    date: "2024-01-10",
    priority: "medium",
    content: "College will remain closed from January 20 to February 2 for winter holidays.",
    author: "Administration",
  },
  {
    id: 3,
    title: "Placement Drive - TCS Hiring",
    category: "Event",
    date: "2024-01-05",
    priority: "high",
    content: "TCS will be conducting campus placements on January 25, 2024. Registration closes on January 20.",
    author: "Placement Cell",
  },
  {
    id: 4,
    title: "Campus Maintenance Notice",
    category: "Notice",
    date: "2024-01-01",
    priority: "low",
    content: "Water supply will be suspended on January 5 from 8 AM to 5 PM for maintenance work.",
    author: "Facilities",
  },
  {
    id: 5,
    title: "Library Extended Hours",
    category: "Notice",
    date: "2023-12-28",
    priority: "low",
    content: "During exam season, the library will remain open till 10 PM on weekdays.",
    author: "Library",
  },
  {
    id: 6,
    title: "Hostel Fee Submission",
    category: "Notice",
    date: "2023-12-20",
    priority: "medium",
    content: "All hostel students must submit their fees by December 31, 2023.",
    author: "Hostel Administration",
  },
  {
    id: 7,
    title: "Annual Tech Fest Announcement",
    category: "Event",
    date: "2023-12-15",
    priority: "medium",
    content: "Register now for the annual tech fest. Last date for registration: January 10, 2024.",
    author: "Student Activities",
  },
  {
    id: 8,
    title: "Internship Opportunities",
    category: "Exam",
    date: "2023-12-10",
    priority: "high",
    content: "Multiple summer internship opportunities are available. Check the placement portal for details.",
    author: "Placement Cell",
  },
]

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredAnnouncements = allAnnouncements.filter((ann) => {
    const matchesCategory = selectedCategory === "all" || ann.category === selectedCategory
    const matchesSearch = ann.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categories = ["Exam", "Holiday", "Event", "Notice"]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Announcements</h1>
        <p className="text-muted-foreground">Stay updated with college news and important notices</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search announcements..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((ann) => (
            <Card key={ann.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-base leading-tight">{ann.title}</h3>
                      <div className="flex gap-2 flex-shrink-0">
                        <Badge
                          className={
                            ann.priority === "high"
                              ? "bg-error-red"
                              : ann.priority === "medium"
                                ? "bg-primary"
                                : "bg-secondary"
                          }
                        >
                          {ann.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{ann.content}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground">
                      <span>
                        {ann.author} • {ann.date}
                      </span>
                      <Button variant="ghost" className="w-full sm:w-auto text-xs h-8 bg-transparent">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-muted-foreground">No announcements found</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Newsletter Signup */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Subscribe to Notifications</CardTitle>
          <CardDescription>Get important announcements via email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Enter your email" type="email" className="bg-background" />
            <Button className="bg-primary">Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
