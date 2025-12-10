"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Download } from "lucide-react"

const monthlyData = [
  { month: "Jul", percentage: 82, attended: 15, total: 18 },
  { month: "Aug", percentage: 85, attended: 17, total: 20 },
  { month: "Sep", percentage: 88, attended: 22, total: 25 },
  { month: "Oct", percentage: 90, attended: 27, total: 30 },
  { month: "Nov", percentage: 87, attended: 26, total: 30 },
  { month: "Dec", percentage: 87, attended: 26, total: 30 },
]

const subjectWiseAttendance = [
  { subject: "Data Structures", percentage: 92, attended: 23, total: 25 },
  { subject: "Web Development", percentage: 88, attended: 22, total: 25 },
  { subject: "Database Systems", percentage: 85, attended: 21, total: 25 },
  { subject: "Operating Systems", percentage: 90, attended: 18, total: 20 },
  { subject: "Computer Networks", percentage: 78, attended: 19, total: 25 },
  { subject: "Software Engineering", percentage: 87, attended: 22, total: 25 },
]

const attendanceDetails = [
  { date: "2024-01-15", subject: "Data Structures", status: "Present", time: "09:00 AM" },
  { date: "2024-01-15", subject: "Web Development", status: "Present", time: "10:30 AM" },
  { date: "2024-01-14", subject: "Database Systems", status: "Absent", time: "02:00 PM" },
  { date: "2024-01-13", subject: "Operating Systems", status: "Present", time: "09:00 AM" },
  { date: "2024-01-12", subject: "Computer Networks", status: "Present", time: "10:30 AM" },
]

export default function AttendancePage() {
  const [selectedMonth, setSelectedMonth] = useState("Dec")
  const [selectedSubject, setSelectedSubject] = useState("all")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Attendance</h1>
        <p className="text-muted-foreground">View your attendance records and trends</p>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select Month" />
          </SelectTrigger>
          <SelectContent>
            {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            {subjectWiseAttendance.map((s) => (
              <SelectItem key={s.subject} value={s.subject}>
                {s.subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className="ml-auto gap-2 bg-primary">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Overall Attendance</p>
            <p className="text-3xl font-bold text-primary">87%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Total Classes</p>
            <p className="text-3xl font-bold">156</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Classes Attended</p>
            <p className="text-3xl font-bold text-success-green">136</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Classes Missed</p>
            <p className="text-3xl font-bold text-error-red">20</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Attendance Trend</CardTitle>
          <CardDescription>Last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6e7eb" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="percentage" stroke="#0a2f5a" strokeWidth={2} name="Attendance %" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Subject-wise Attendance */}
      <Card>
        <CardHeader>
          <CardTitle>Subject-wise Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4">Subject</th>
                  <th className="text-center py-3 px-4">Attendance %</th>
                  <th className="text-center py-3 px-4">Attended</th>
                  <th className="text-center py-3 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {subjectWiseAttendance.map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/50">
                    <td className="py-3 px-4 font-medium">{row.subject}</td>
                    <td className="text-center py-3 px-4">
                      <Badge className={row.percentage >= 85 ? "bg-success-green" : "bg-error-red"}>
                        {row.percentage}%
                      </Badge>
                    </td>
                    <td className="text-center py-3 px-4">{row.attended}</td>
                    <td className="text-center py-3 px-4">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Recent Attendance */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Attendance</CardTitle>
          <CardDescription>Last 5 recorded attendances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {attendanceDetails.map((record, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">{record.subject}</p>
                  <p className="text-xs text-muted-foreground">
                    {record.date} at {record.time}
                  </p>
                </div>
                <Badge className={record.status === "Present" ? "bg-success-green" : "bg-error-red"}>
                  {record.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
