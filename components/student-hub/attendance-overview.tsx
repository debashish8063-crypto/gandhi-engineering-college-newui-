"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface AttendanceOverviewProps {
  data: Array<{ month: string; percentage: number }>
}

export function AttendanceOverview({ data }: AttendanceOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Attendance Trend</CardTitle>
        <CardDescription>Last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e7eb" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="percentage"
              stroke="#0a2f5a"
              strokeWidth={2}
              dot={{ fill: "#0a2f5a", r: 4 }}
              name="Attendance %"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
