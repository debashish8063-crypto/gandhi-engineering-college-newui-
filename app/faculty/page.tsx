"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FacultyCard } from "@/components/ui/faculty-card"
import { Search } from "lucide-react"

export default function FacultyPage() {
  const [selectedDept, setSelectedDept] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "cse", name: "Computer Science" },
    { id: "ece", name: "Electronics & Communication" },
    { id: "me", name: "Mechanical Engineering" },
    { id: "ce", name: "Civil Engineering" },
    { id: "ee", name: "Electrical Engineering" },
    { id: "sh", name: "Science & Humanities" },
  ]

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head",
      department: "cse",
      specialization: "Artificial Intelligence & Machine Learning",
      email: "rajesh.kumar@gec.edu.in",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      department: "cse",
      specialization: "Database Systems & Cloud Computing",
      email: "priya.sharma@gec.edu.in",
    },
    {
      name: "Prof. Amit Patel",
      designation: "Assistant Professor",
      department: "cse",
      specialization: "Web Development & Mobile Applications",
      email: "amit.patel@gec.edu.in",
    },
    {
      name: "Dr. Sunita Das",
      designation: "Professor & Head",
      department: "ece",
      specialization: "Signal Processing & VLSI Design",
      email: "sunita.das@gec.edu.in",
    },
    {
      name: "Dr. Vikram Singh",
      designation: "Associate Professor",
      department: "ece",
      specialization: "Embedded Systems & IoT",
      email: "vikram.singh@gec.edu.in",
    },
    {
      name: "Prof. Neha Gupta",
      designation: "Assistant Professor",
      department: "me",
      specialization: "Thermal Engineering & CAD",
      email: "neha.gupta@gec.edu.in",
    },
    {
      name: "Dr. Manoj Kumar",
      designation: "Professor & Head",
      department: "me",
      specialization: "Manufacturing & Design Engineering",
      email: "manoj.kumar@gec.edu.in",
    },
    {
      name: "Prof. Anjali Verma",
      designation: "Associate Professor",
      department: "ce",
      specialization: "Structural Analysis & Design",
      email: "anjali.verma@gec.edu.in",
    },
    {
      name: "Dr. Rohit Mishra",
      designation: "Professor & Head",
      department: "ce",
      specialization: "Construction Management & Infrastructure",
      email: "rohit.mishra@gec.edu.in",
    },
    {
      name: "Prof. Deepak Nair",
      designation: "Assistant Professor",
      department: "ee",
      specialization: "Power Systems & Renewable Energy",
      email: "deepak.nair@gec.edu.in",
    },
    {
      name: "Dr. Suresh Chandra",
      designation: "Professor & Head",
      department: "ee",
      specialization: "Electrical Machines & Drives",
      email: "suresh.chandra@gec.edu.in",
    },
    {
      name: "Prof. Kavya Reddy",
      designation: "Assistant Professor",
      department: "sh",
      specialization: "Applied Mathematics & Physics",
      email: "kavya.reddy@gec.edu.in",
    },
  ]

  const filtered = faculty.filter((f) => {
    const deptMatch = selectedDept === "all" || f.department === selectedDept
    const searchMatch =
      searchTerm === "" ||
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    return deptMatch && searchMatch
  })

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Faculty</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Distinguished academics and industry experts dedicated to excellence in education
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search faculty by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedDept === dept.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((member) => (
                <FacultyCard
                  key={member.email}
                  name={member.name}
                  designation={member.designation}
                  specialization={member.specialization}
                  email={member.email}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No faculty members found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
