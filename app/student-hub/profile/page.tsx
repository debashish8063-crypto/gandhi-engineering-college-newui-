"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, Edit2 } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const profileData = {
    name: "Arjun Sharma",
    email: "arjun.sharma@gec.edu",
    phone: "+91 98765 43210",
    enrollmentNo: "GEC2021CS001",
    branch: "Computer Science & Engineering",
    year: "3rd Year",
    semester: 6,
    dob: "2003-05-15",
    address: "123 Main Street, Delhi, India",
    parentName: "Rajesh Sharma",
    parentPhone: "+91 90123 45678",
    parentOccupation: "Software Engineer",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Student Profile</h1>
          <p className="text-muted-foreground">View and manage your profile information</p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)} className="gap-2 bg-primary">
          <Edit2 className="w-4 h-4" />
          {isEditing ? "Done" : "Edit"}
        </Button>
      </div>

      {/* Profile Photo Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 border-2 border-primary">
              <AvatarImage src={`/placeholder.svg?height=96&width=96&query=student profile photo`} />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{profileData.name}</h3>
              <p className="text-muted-foreground text-sm">{profileData.enrollmentNo}</p>
              {isEditing && <Button className="mt-2 text-xs bg-primary">Upload Photo</Button>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-xs text-muted-foreground">Branch</Label>
              <p className="font-medium mt-1">{profileData.branch}</p>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Year</Label>
              <p className="font-medium mt-1">{profileData.year}</p>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Semester</Label>
              <p className="font-medium mt-1">{profileData.semester}</p>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Enrollment Number</Label>
              <p className="font-medium mt-1">{profileData.enrollmentNo}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>{isEditing ? "Edit your details" : "Your contact information"}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-xs text-muted-foreground">
                  Full Name
                </Label>
                <Input id="name" defaultValue={profileData.name} disabled={!isEditing} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="dob" className="text-xs text-muted-foreground">
                  Date of Birth
                </Label>
                <Input id="dob" type="date" defaultValue={profileData.dob} disabled={!isEditing} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs text-muted-foreground gap-2 flex items-center">
                  <Mail className="w-4 h-4" /> Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={profileData.email}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs text-muted-foreground gap-2 flex items-center">
                  <Phone className="w-4 h-4" /> Phone
                </Label>
                <Input id="phone" type="tel" defaultValue={profileData.phone} disabled={!isEditing} className="mt-1" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address" className="text-xs text-muted-foreground gap-2 flex items-center">
                  <MapPin className="w-4 h-4" /> Address
                </Label>
                <Input id="address" defaultValue={profileData.address} disabled={!isEditing} className="mt-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parent Information */}
      <Card>
        <CardHeader>
          <CardTitle>Parent / Guardian Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="parentName" className="text-xs text-muted-foreground">
                  Name
                </Label>
                <Input id="parentName" defaultValue={profileData.parentName} disabled={!isEditing} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="parentPhone" className="text-xs text-muted-foreground">
                  Phone Number
                </Label>
                <Input
                  id="parentPhone"
                  type="tel"
                  defaultValue={profileData.parentPhone}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="parentOccupation" className="text-xs text-muted-foreground">
                  Occupation
                </Label>
                <Input
                  id="parentOccupation"
                  defaultValue={profileData.parentOccupation}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      {isEditing && (
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={() => setIsEditing(false)} className="bg-transparent">
            Cancel
          </Button>
          <Button className="bg-primary">Save Changes</Button>
        </div>
      )}
    </div>
  )
}
