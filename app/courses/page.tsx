"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CourseCard } from "@/components/ui/course-card"
import { SectionTitle } from "@/components/ui/section-title"

export default function CoursesPage() {
  const [filter, setFilter] = useState<"all" | "ug" | "pg">("all")

  const programs = [
    {
      id: 1,
      name: "B.Tech Computer Science & Engineering",
      duration: "4 Years",
      intake: "120",
      type: "ug",
      description: "Industry-focused curriculum covering data structures, algorithms, databases, and web technologies",
      eligibility: "10+2 with Physics, Chemistry & Mathematics",
      outcomes: ["Software Development", "Data Science", "Cloud Computing", "Cybersecurity"],
    },
    {
      id: 2,
      name: "B.Tech Electronics & Communication Engineering",
      duration: "4 Years",
      intake: "60",
      type: "ug",
      description: "Specialization in signal processing, communication systems, and VLSI design",
      eligibility: "10+2 with Physics, Chemistry & Mathematics",
      outcomes: ["Telecom", "Signal Processing", "Embedded Systems", "IoT"],
    },
    {
      id: 3,
      name: "B.Tech Mechanical Engineering",
      duration: "4 Years",
      intake: "60",
      type: "ug",
      description: "Advanced mechanical design, manufacturing, and thermal engineering expertise",
      eligibility: "10+2 with Physics, Chemistry & Mathematics",
      outcomes: ["Design Engineering", "Manufacturing", "Automotive", "Thermal Systems"],
    },
    {
      id: 4,
      name: "B.Tech Civil Engineering",
      duration: "4 Years",
      intake: "60",
      type: "ug",
      description: "Infrastructure design, construction technology, and structural analysis",
      eligibility: "10+2 with Physics, Chemistry & Mathematics",
      outcomes: ["Construction", "Structural Design", "Infrastructure", "Project Management"],
    },
    {
      id: 5,
      name: "B.Tech Electrical Engineering",
      duration: "4 Years",
      intake: "60",
      type: "ug",
      description: "Power systems, renewable energy, and electrical machines specialization",
      eligibility: "10+2 with Physics, Chemistry & Mathematics",
      outcomes: ["Power Systems", "Renewable Energy", "Industrial Drives", "Electrical Design"],
    },
    {
      id: 6,
      name: "MBA",
      duration: "2 Years",
      intake: "60",
      type: "pg",
      description: "Business management and leadership development for industry professionals",
      eligibility: "Bachelor's degree with minimum 50% marks",
      outcomes: ["General Management", "Finance", "Marketing", "Operations"],
    },
    {
      id: 7,
      name: "M.Tech Computer Science",
      duration: "2 Years",
      intake: "30",
      type: "pg",
      description: "Advanced computing including AI, machine learning, and distributed systems",
      eligibility: "B.Tech in Computer Science or related field",
      outcomes: ["AI & ML", "Cloud Computing", "Research", "Advanced Development"],
    },
  ]

  const filtered = filter === "all" ? programs : programs.filter((p) => p.type === filter)

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Academic Programs</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Comprehensive undergraduate and postgraduate programs designed to meet industry requirements
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === "all"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setFilter("ug")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === "ug"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
              }`}
            >
              Undergraduate
            </button>
            <button
              onClick={() => setFilter("pg")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === "pg"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
              }`}
            >
              Postgraduate
            </button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((program) => (
              <CourseCard
                key={program.id}
                name={program.name}
                duration={program.duration}
                intake={program.intake}
                description={program.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Program Information" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Admission Eligibility</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold mt-1">✓</span>
                  <span>
                    <strong>B.Tech Programs:</strong> 10+2 with Physics, Chemistry & Mathematics (minimum 50% aggregate)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold mt-1">✓</span>
                  <span>
                    <strong>MBA:</strong> Bachelor's degree in any discipline with minimum 50% marks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold mt-1">✓</span>
                  <span>
                    <strong>M.Tech:</strong> B.Tech in relevant discipline with minimum 60% marks
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Program Structure</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold mt-1">✓</span>
                  <span>Comprehensive curriculum aligned with industry standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold mt-1">✓</span>
                  <span>Hands-on labs and project-based learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold mt-1">✓</span>
                  <span>Internship and industrial training programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold mt-1">✓</span>
                  <span>Seminars and guest lectures from industry experts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
