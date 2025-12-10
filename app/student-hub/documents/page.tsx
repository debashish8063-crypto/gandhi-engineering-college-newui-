"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, AlertCircle } from "lucide-react"

const documents = [
  { id: 1, name: "Bonafide Certificate", status: "Available", downloadable: true, requestDate: "2024-01-10" },
  { id: 2, name: "ID Card", status: "Available", downloadable: true, requestDate: "2023-09-01" },
  { id: 3, name: "Transfer Certificate (TC)", status: "Pending", downloadable: false, requestDate: "2024-01-15" },
  { id: 4, name: "Degree Certificate", status: "Pending", downloadable: false, requestDate: "-" },
  { id: 5, name: "Transcript", status: "Available", downloadable: true, requestDate: "2023-12-20" },
  { id: 6, name: "Character Certificate", status: "Available", downloadable: true, requestDate: "2023-11-15" },
]

const declarations = [
  { id: 1, name: "Declaration Form", description: "Annual declaration form for academic year", status: "Completed" },
  { id: 2, name: "Anti-Ragging Declaration", description: "Anti-ragging undertaking", status: "Completed" },
  { id: 3, name: "Fee Payment Declaration", description: "Confirmation of fee payment", status: "Pending" },
]

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Documents</h1>
        <p className="text-muted-foreground">Download certificates and manage declarations</p>
      </div>

      {/* Available Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Downloadable Certificates</CardTitle>
          <CardDescription>Click to download your documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div key={doc.id} className="p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <Badge className={doc.status === "Available" ? "bg-success-green" : "bg-error-red"}>
                    {doc.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-sm mb-1">{doc.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {doc.status === "Available" ? `Downloaded on ${doc.requestDate}` : "Will be available soon"}
                </p>
                {doc.downloadable ? (
                  <Button className="w-full text-xs gap-2 bg-primary">
                    <Download className="w-3 h-3" />
                    Download PDF
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full text-xs bg-transparent">
                    Not Available
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Declarations */}
      <Card>
        <CardHeader>
          <CardTitle>Declarations</CardTitle>
          <CardDescription>Submit required declaration forms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {declarations.map((decl) => (
              <div
                key={decl.id}
                className="p-4 border border-border rounded-lg flex items-start justify-between hover:bg-secondary/50"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{decl.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{decl.description}</p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <Badge className={decl.status === "Completed" ? "bg-success-green" : "bg-error-red"}>
                    {decl.status}
                  </Badge>
                  {decl.status === "Pending" && <Button className="text-xs bg-primary">Submit</Button>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Document Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Upload External Documents</CardTitle>
          <CardDescription>Upload any additional documents required by the institution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-10 h-10 text-muted-foreground" />
              <p className="font-medium">Drag and drop files here</p>
              <p className="text-xs text-muted-foreground">or click to browse (Max 5MB)</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-primary/5 rounded-lg">
            <p className="text-xs text-muted-foreground">Supported formats: PDF, JPG, PNG. Maximum file size: 5MB</p>
          </div>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Card className="border-warning bg-warning/5">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm mb-1">Important Note</p>
              <p className="text-xs text-muted-foreground">
                All documents are issued by the Academic Affairs Office. For any discrepancies or corrections, please
                contact the office directly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
