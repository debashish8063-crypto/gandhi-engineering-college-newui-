"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, AlertCircle } from "lucide-react"

const feeStructure = [
  { category: "Tuition Fee", amount: 120000, semester: "Per Semester" },
  { category: "Hostel Fee", amount: 80000, semester: "Per Semester" },
  { category: "Lab Fee", amount: 15000, semester: "Per Semester" },
  { category: "Library Fee", amount: 5000, semester: "Per Semester" },
  { category: "Registration Fee", amount: 10000, semester: "One-time" },
]

const paymentHistory = [
  {
    id: "INV001",
    date: "2024-01-10",
    amount: 120000,
    category: "Tuition Fee - Sem 6",
    status: "Paid",
    receipt: "REC001",
  },
  {
    id: "INV002",
    date: "2023-12-15",
    amount: 80000,
    category: "Hostel Fee - Sem 6",
    status: "Paid",
    receipt: "REC002",
  },
  {
    id: "INV003",
    date: "2023-11-20",
    amount: 45000,
    category: "Remaining Fees - Sem 5",
    status: "Pending",
    receipt: "-",
  },
  {
    id: "INV004",
    date: "2023-10-05",
    amount: 200000,
    category: "Tuition + Hostel Fee - Sem 5",
    status: "Paid",
    receipt: "REC003",
  },
]

export default function FeesPage() {
  const [selectedPayment, setSelectedPayment] = useState<(typeof paymentHistory)[0] | null>(null)

  const totalOutstanding = 45000
  const dueDate = "2024-02-15"
  const lastPaymentDate = "2024-01-10"
  const lastPaymentAmount = 120000

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Fees & Payments</h1>
        <p className="text-muted-foreground">Manage your fee payments and view payment history</p>
      </div>

      {/* Outstanding Balance Alert */}
      {totalOutstanding > 0 && (
        <div className="p-4 bg-error-red/10 border border-error-red/20 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-error-red flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-error-red">Outstanding Fees</h3>
            <p className="text-sm text-muted-foreground mt-1">
              You have ₹{totalOutstanding.toLocaleString()} pending. Due by {dueDate}
            </p>
          </div>
          <Button className="bg-primary">Pay Now</Button>
        </div>
      )}

      {/* Fee Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-2">Outstanding Balance</p>
            <p className="text-4xl font-bold text-error-red">₹{totalOutstanding.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-2">Due: {dueDate}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-2">Last Payment</p>
            <p className="text-2xl font-bold text-success-green">₹{lastPaymentAmount.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-2">On: {lastPaymentDate}</p>
          </CardContent>
        </Card>
      </div>

      {/* Fee Structure */}
      <Card>
        <CardHeader>
          <CardTitle>Fee Structure</CardTitle>
          <CardDescription>Semester-wise breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-right py-3 px-4">Amount</th>
                  <th className="text-right py-3 px-4">Period</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/50">
                    <td className="py-3 px-4 font-medium">{fee.category}</td>
                    <td className="text-right py-3 px-4 font-semibold">₹{fee.amount.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-muted-foreground">{fee.semester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-primary/5 rounded-lg">
            <p className="text-sm font-semibold">Total per Semester: ₹230,000</p>
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>View all your past payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4">Invoice</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-right py-3 px-4">Amount</th>
                  <th className="text-center py-3 px-4">Status</th>
                  <th className="text-center py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/50">
                    <td className="py-3 px-4 font-medium">{payment.id}</td>
                    <td className="py-3 px-4">{payment.date}</td>
                    <td className="py-3 px-4">{payment.category}</td>
                    <td className="text-right py-3 px-4 font-semibold">₹{payment.amount.toLocaleString()}</td>
                    <td className="text-center py-3 px-4">
                      <Badge
                        className={
                          payment.status === "Paid"
                            ? "bg-success-green"
                            : payment.status === "Pending"
                              ? "bg-error-red"
                              : "bg-secondary"
                        }
                      >
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="text-center py-3 px-4">
                      {payment.status === "Paid" && (
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Choose a payment method to proceed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Credit Card", icon: "💳" },
              { name: "Debit Card", icon: "💳" },
              { name: "Net Banking", icon: "🏦" },
            ].map((method, idx) => (
              <Button
                key={idx}
                variant="outline"
                className="h-auto flex flex-col gap-2 p-4 bg-transparent border-2 hover:border-primary hover:bg-primary/5"
              >
                <span className="text-2xl">{method.icon}</span>
                <span className="font-medium">{method.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
