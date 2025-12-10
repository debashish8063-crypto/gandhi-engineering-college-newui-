"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Calendar, Download, Eye, Clock, CheckCircle2, FileText, BookOpen, LinkIcon } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function StudentHubDashboard() {
  const [studentData, setStudentData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStudentData = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (user) {
          // Fetch student profile
          const { data: student } = await supabase.from("students").select("*").eq("id", user.id).single()

          setStudentData({
            name: student?.first_name + " " + student?.last_name,
            enrollmentNo: student?.student_id,
            branch: student?.department,
            year: `${student?.year} Year`,
            semester: student?.semester,
            cgpa: student?.cgpa,
            presentToday: true,
            email: user.email,
          })
        }
      } catch (error) {
        console.error("Error loading student data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadStudentData()
  }, [])

  // Mock data for charts and announcements
  const attendanceData = [
    { month: "Jul", percentage: 82 },
    { month: "Aug", percentage: 85 },
    { month: "Sep", percentage: 88 },
    { month: "Oct", percentage: 90 },
    { month: "Nov", percentage: 87 },
    { month: "Dec", percentage: 87 },
  ]

  const resultsData = [
    { semester: "Sem 3", sgpa: 8.2 },
    { semester: "Sem 4", sgpa: 8.5 },
    { semester: "Sem 5", sgpa: 8.8 },
    { semester: "Sem 6", sgpa: 8.9 },
  ]

  const announcements = [
    { id: 1, title: "Semester Exam Schedule Released", tag: "Exam", date: "2024-01-15", urgent: true },
    { id: 2, title: "Winter Holiday Notification", tag: "Holiday", date: "2024-01-10", urgent: false },
    { id: 3, title: "Placement Drive - TCS Hiring", tag: "Event", date: "2024-01-05", urgent: false },
    { id: 4, title: "Campus Maintenance Notice", tag: "Notice", date: "2024-01-01", urgent: false },
  ]

  const feesData = {
    outstanding: 45000,
    dueDate: "2024-02-15",
    lastPayment: "2024-01-10",
    lastAmount: 50000,
  }

  const todayTimetable = [
    { subject: "Data Structures", faculty: "Dr. Rajesh Kumar", time: "09:00 AM", duration: "1 hour" },
    { subject: "Web Development", faculty: "Prof. Priya Singh", time: "10:30 AM", duration: "1.5 hours" },
    { subject: "DBMS Lab", faculty: "Mr. Vikram Patel", time: "02:00 PM", duration: "2 hours" },
  ]

  const quickLinks = [
    { label: "Library Portal", icon: BookOpen },
    { label: "Hostel Portal", icon: FileText },
    { label: "Placement Cell", icon: LinkIcon },
    { label: "Exam Cell", icon: Calendar },
    { label: "Academic Calendar", icon: Clock },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-border p-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex gap-4 items-start">
            <div className="w-20 h-20 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center font-bold text-2xl">
              {studentData?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{studentData?.name || "Student"}</h1>
              <p className="text-sm text-muted-foreground">{studentData?.enrollmentNo}</p>
              <div className="flex gap-4 mt-2">
                <span className="text-sm font-medium">{studentData?.branch}</span>
                <span className="text-sm text-muted-foreground">{studentData?.year}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-success-green">Present Today</Badge>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Attendance Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>Current semester</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg className="transform -rotate-90 w-40 h-40">
                  <circle cx="80" cy="80" r="70" stroke="#e6e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#0a2f5a"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(87 * 440) / 100} 440`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">87%</span>
                  <span className="text-xs text-muted-foreground">Overall</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div>
                <p className="font-semibold">156</p>
                <p className="text-xs text-muted-foreground">Total Classes</p>
              </div>
              <div>
                <p className="font-semibold text-success-green">136</p>
                <p className="text-xs text-muted-foreground">Attended</p>
              </div>
              <div>
                <p className="font-semibold text-error-red">20</p>
                <p className="text-xs text-muted-foreground">Absent</p>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              <Eye className="w-4 h-4 mr-2" />
              View Full Attendance
            </Button>
          </CardContent>
        </Card>

        {/* Daily Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Status</CardTitle>
            <CardDescription>{new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-success-green/10 rounded-lg border border-success-green/20">
              <CheckCircle2 className="w-6 h-6 text-success-green flex-shrink-0" />
              <div>
                <p className="font-semibold text-success-green">Present</p>
                <p className="text-xs text-muted-foreground">Marked at 09:00 AM</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Today's Subjects</p>
              {todayTimetable.slice(0, 2).map((item, idx) => (
                <div key={idx} className="text-xs p-2 bg-secondary rounded">
                  <p className="font-medium">{item.subject}</p>
                  <p className="text-muted-foreground">
                    {item.time} - {item.faculty}
                  </p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full text-xs bg-transparent">
              View Today's Timetable
            </Button>
          </CardContent>
        </Card>

        {/* Results Summary Card */}
        <Card>
          <CardHeader>
            <CardTitle>Results Summary</CardTitle>
            <CardDescription>Semester {studentData?.semester}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-primary/5 rounded-lg">
                <p className="text-xs text-muted-foreground">SGPA</p>
                <p className="text-2xl font-bold text-primary">8.9</p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg">
                <p className="text-xs text-muted-foreground">CGPA</p>
                <p className="text-2xl font-bold text-primary">{studentData?.cgpa || "8.7"}</p>
              </div>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resultsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e6e7eb" />
                  <XAxis dataKey="semester" fontSize={12} />
                  <YAxis fontSize={12} domain={[0, 10]} />
                  <Tooltip />
                  <Bar dataKey="sgpa" fill="#0a2f5a" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <Button variant="outline" className="w-full text-xs bg-transparent">
              View Detailed Results
            </Button>
          </CardContent>
        </Card>

        {/* Announcements Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Latest Announcements</CardTitle>
            <CardDescription>Recent updates and notices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {announcements.map((ann) => (
              <div
                key={ann.id}
                className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-sm">{ann.title}</p>
                    <Badge variant={ann.urgent ? "destructive" : "secondary"} className="text-xs">
                      {ann.tag}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{ann.date}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full text-xs bg-transparent">
              View All Announcements
            </Button>
          </CardContent>
        </Card>

        {/* Fees Card */}
        <Card>
          <CardHeader>
            <CardTitle>Fees & Payments</CardTitle>
            <CardDescription>Payment status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-error-red/10 border border-error-red/20 rounded-lg">
              <p className="text-xs text-muted-foreground">Outstanding</p>
              <p className="text-xl font-bold text-error-red">₹{feesData.outstanding.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">Due: {feesData.dueDate}</p>
            </div>
            <div className="text-xs">
              <p className="text-muted-foreground">Last Payment</p>
              <p className="font-semibold">
                ₹{feesData.lastAmount.toLocaleString()} on {feesData.lastPayment}
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1 text-xs bg-primary">Pay Now</Button>
              <Button variant="outline" className="flex-1 text-xs bg-transparent">
                <Download className="w-3 h-3 mr-1" />
                Receipt
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents Card */}
        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
            <CardDescription>Certificates & declarations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              {[
                { name: "Bonafide Certificate", status: "Available" },
                { name: "ID Card", status: "Available" },
                { name: "TC Request", status: "Pending" },
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-secondary rounded text-xs">
                  <span>{doc.name}</span>
                  <Badge variant={doc.status === "Available" ? "default" : "secondary"}>{doc.status}</Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full text-xs bg-transparent">
              <FileText className="w-3 h-3 mr-1" />
              View All Documents
            </Button>
          </CardContent>
        </Card>

        {/* Timetable Card */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Timetable</CardTitle>
            <CardDescription>Class schedule</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayTimetable.map((item, idx) => (
              <div key={idx} className="flex gap-3 p-2 border-l-4 border-primary bg-primary/5 rounded">
                <div className="flex-1">
                  <p className="text-sm font-semibold">{item.subject}</p>
                  <p className="text-xs text-muted-foreground">{item.faculty}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full text-xs bg-transparent">
              <Calendar className="w-3 h-3 mr-1" />
              Full Timetable
            </Button>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {quickLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <Button key={idx} variant="outline" className="h-auto flex flex-col gap-2 p-4 bg-transparent">
                    <Icon className="w-5 h-5" />
                    <span className="text-xs text-center">{link.label}</span>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
