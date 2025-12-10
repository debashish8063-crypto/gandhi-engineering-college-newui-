"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { BookOpen, Clock, Users } from "lucide-react"

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const supabase = createClient()
        const { data } = await supabase.from("courses").select("*").eq("semester", 6)
        setCourses(data || [])
      } catch (error) {
        console.error("Error loading courses:", error)
      } finally {
        setLoading(false)
      }
    }

    loadCourses()
  }, [])

  if (loading) {
    return <div className="text-center py-12">Loading courses...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-muted-foreground mt-2">Semester 6 - Current courses and materials</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => (
            <Card key={course.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{course.course_name}</CardTitle>
                    <CardDescription>{course.course_code}</CardDescription>
                  </div>
                  <Badge variant="secondary">{course.credits} Credits</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span>{course.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>Semester {course.semester}</span>
                  </div>
                </div>
                {course.description && <p className="text-xs text-muted-foreground">{course.description}</p>}
                <div className="pt-2 flex gap-2">
                  <Button variant="outline" className="flex-1 text-xs bg-transparent">
                    Materials
                  </Button>
                  <Button variant="outline" className="flex-1 text-xs bg-transparent">
                    Assignments
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="md:col-span-2 lg:col-span-3">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No courses found for this semester.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
