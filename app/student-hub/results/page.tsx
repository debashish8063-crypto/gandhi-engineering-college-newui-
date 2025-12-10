"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Download } from "lucide-react"

const semesterResults = [
  { semester: 3, sgpa: 8.2, cgpa: 8.2, status: "Pass" },
  { semester: 4, sgpa: 8.5, cgpa: 8.35, status: "Pass" },
  { semester: 5, sgpa: 8.8, cgpa: 8.5, status: "Pass" },
  { semester: 6, sgpa: 8.9, cgpa: 8.65, status: "Pass" },
]

const currentSemesterMarks = [
  { subject: "Data Structures", internalMarks: 28, externalMarks: 65, total: 93, grade: "O" },
  { subject: "Web Development", internalMarks: 27, externalMarks: 62, total: 89, grade: "A+" },
  { subject: "Database Systems", internalMarks: 26, externalMarks: 60, total: 86, grade: "A+" },
  { subject: "Operating Systems", internalMarks: 29, externalMarks: 67, total: 96, grade: "O" },
  { subject: "Computer Networks", internalMarks: 24, externalMarks: 58, total: 82, grade: "A" },
  { subject: "Software Engineering", internalMarks: 25, externalMarks: 60, total: 85, grade: "A" },
]

const trendData = [
  { semester: "S3", sgpa: 8.2 },
  { semester: "S4", sgpa: 8.5 },
  { semester: "S5", sgpa: 8.8 },
  { semester: "S6", sgpa: 8.9 },
]

export default function ResultsPage() {
  const [selectedSemester, setSelectedSemester] = useState(6)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Results</h1>
        <p className="text-muted-foreground">View your academic performance and grades</p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Current SGPA</p>
            <p className="text-3xl font-bold text-primary">8.9</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">CGPA</p>
            <p className="text-3xl font-bold text-primary">8.65</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Status</p>
            <Badge className="bg-success-green mt-1">Passed</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trend */}
      <Card>
        <CardHeader>
          <CardTitle>SGPA Trend</CardTitle>
          <CardDescription>Performance across semesters</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6e7eb" />
              <XAxis dataKey="semester" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="sgpa" fill="#0a2f5a" radius={[4, 4, 0, 0]} name="SGPA" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Semester Results */}
      <Card>
        <CardHeader>
          <CardTitle>Semester Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4">Semester</th>
                  <th className="text-center py-3 px-4">SGPA</th>
                  <th className="text-center py-3 px-4">CGPA</th>
                  <th className="text-center py-3 px-4">Status</th>
                  <th className="text-center py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {semesterResults.map((result, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/50">
                    <td className="py-3 px-4 font-medium">Semester {result.semester}</td>
                    <td className="text-center py-3 px-4 font-semibold text-primary">{result.sgpa}</td>
                    <td className="text-center py-3 px-4 font-semibold text-primary">{result.cgpa}</td>
                    <td className="text-center py-3 px-4">
                      <Badge className="bg-success-green">{result.status}</Badge>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Current Semester Marks */}
      <Card>
        <CardHeader>
          <CardTitle>Semester 6 - Subject Marks</CardTitle>
          <CardDescription>Subject-wise performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4">Subject</th>
                  <th className="text-center py-3 px-4">Internal</th>
                  <th className="text-center py-3 px-4">External</th>
                  <th className="text-center py-3 px-4">Total</th>
                  <th className="text-center py-3 px-4">Grade</th>
                </tr>
              </thead>
              <tbody>
                {currentSemesterMarks.map((mark, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/50">
                    <td className="py-3 px-4 font-medium">{mark.subject}</td>
                    <td className="text-center py-3 px-4">{mark.internalMarks}</td>
                    <td className="text-center py-3 px-4">{mark.externalMarks}</td>
                    <td className="text-center py-3 px-4 font-bold">{mark.total}</td>
                    <td className="text-center py-3 px-4">
                      <Badge
                        className={
                          mark.grade === "O"
                            ? "bg-success-green"
                            : mark.grade.includes("A")
                              ? "bg-primary"
                              : "bg-secondary"
                        }
                      >
                        {mark.grade}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
