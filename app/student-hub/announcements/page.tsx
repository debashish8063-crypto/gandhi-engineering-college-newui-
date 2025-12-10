"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Search } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<any[]>([])
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from("notices")
          .select("*")
          .eq("is_published", true)
          .order("created_at", { ascending: false })
        setAnnouncements(data || [])
      } catch (error) {
        console.error("Error loading announcements:", error)
      } finally {
        setLoading(false)
      }
    }

    loadAnnouncements()
  }, [])

  useEffect(() => {
    const filtered = announcements.filter((ann) => {
      const matchesCategory = selectedCategory === "all" || ann.category === selectedCategory
      const matchesSearch = ann.title.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    setFilteredAnnouncements(filtered)
  }, [announcements, selectedCategory, searchQuery])

  const categories = ["academic", "placement", "event", "urgent", "general"]

  if (loading) {
    return <div className="text-center py-12">Loading announcements...</div>
  }

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
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
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
                            ann.category === "urgent"
                              ? "bg-error-red"
                              : ann.category === "placement"
                                ? "bg-primary"
                                : "bg-secondary"
                          }
                        >
                          {ann.category.charAt(0).toUpperCase() + ann.category.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{ann.content}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground">
                      <span>
                        {ann.posted_by} • {new Date(ann.created_at).toLocaleDateString()}
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
