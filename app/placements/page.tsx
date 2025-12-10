"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/ui/section-title"
import { RecruiterLogo } from "@/components/ui/recruiter-logo"
import { TrendingUp } from "lucide-react"

export default function PlacementsPage() {
  const stats = [
    { label: "Highest Package", value: "₹12 LPA" },
    { label: "Average Package", value: "₹8.5 LPA" },
    { label: "Placement Rate", value: "95%" },
    { label: "Companies Visited", value: "80+" },
  ]

  const recruiters = [
    "Infosys",
    "Wipro",
    "TCS",
    "Cognizant",
    "Capgemini",
    "Accenture",
    "HCL Tech",
    "Tech Mahindra",
    "Amazon",
    "Google",
    "Microsoft",
    "Adobe",
  ]

  const trainingPrograms = [
    {
      title: "Technical Training",
      description: "Programming languages, DSA, databases, and modern frameworks",
    },
    {
      title: "Soft Skills Development",
      description: "Communication, leadership, team work, and problem solving",
    },
    {
      title: "Mock Interviews",
      description: "Regular mock interviews and aptitude tests for preparation",
    },
    {
      title: "Industry Mentorship",
      description: "Guidance from professionals working at leading companies",
    },
  ]

  const alumni = [
    {
      name: "Arvind Sharma",
      batch: "2018",
      company: "Google",
      position: "Senior Software Engineer",
      message: "GEC provided me with solid fundamentals and exposure to industry practices.",
    },
    {
      name: "Neha Verma",
      batch: "2019",
      company: "Microsoft",
      position: "Program Manager",
      message: "The faculty guidance and placement support at GEC were instrumental in my career.",
    },
    {
      name: "Rajeev Patel",
      batch: "2017",
      company: "Amazon",
      position: "Software Development Manager",
      message: "I started as an SDE at Amazon and now lead a team of 10 engineers.",
    },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Placements & Career Services</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Strong industry partnerships and comprehensive placement support for our students
          </p>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Placement Statistics" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <TrendingUp className="text-success-green mx-auto mb-4" size={32} />
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Year-wise Placement Data */}
          <div className="bg-gradient-to-r from-primary/10 to-success-green/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Placement Trends (Last 3 Years)</h3>
            <div className="space-y-4">
              {[
                { year: "2024", placed: "95%", avg: "₹8.5 LPA", highest: "₹12 LPA" },
                { year: "2023", placed: "92%", avg: "₹7.8 LPA", highest: "₹11 LPA" },
                { year: "2022", placed: "90%", avg: "₹7.2 LPA", highest: "₹10 LPA" },
              ].map((data) => (
                <div key={data.year} className="flex flex-wrap gap-6 pb-4 border-b border-border last:border-b-0">
                  <div className="flex-1 min-w-32">
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="text-lg font-semibold text-foreground">{data.year}</p>
                  </div>
                  <div className="flex-1 min-w-32">
                    <p className="text-sm text-muted-foreground">Placement Rate</p>
                    <p className="text-lg font-semibold text-success-green">{data.placed}</p>
                  </div>
                  <div className="flex-1 min-w-32">
                    <p className="text-sm text-muted-foreground">Average Package</p>
                    <p className="text-lg font-semibold text-primary">{data.avg}</p>
                  </div>
                  <div className="flex-1 min-w-32">
                    <p className="text-sm text-muted-foreground">Highest Package</p>
                    <p className="text-lg font-semibold text-primary">{data.highest}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Recruiters" centered />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recruiters.map((recruiter) => (
              <RecruiterLogo key={recruiter} name={recruiter} />
            ))}
          </div>
        </div>
      </section>

      {/* Training & Development */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Training & Skill Development" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingPrograms.map((program, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-secondary to-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Alumni Success Stories" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumni.map((alum, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{alum.name}</h3>
                    <p className="text-sm text-muted-foreground">Batch {alum.batch}</p>
                  </div>
                  <span className="px-3 py-1 bg-success-green/20 text-success-green text-xs font-semibold rounded-full">
                    {alum.company}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground mb-3">{alum.position}</p>
                <p className="text-sm text-muted-foreground italic">"{alum.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Placement Cell */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Placement Support</h2>
          <p className="text-lg text-white/80 mb-8">
            For inquiries about placements or industry partnerships, contact our placement cell
          </p>
          <div className="space-y-2">
            <p className="text-white">
              <span className="font-semibold">Email:</span> placements@gec.edu.in
            </p>
            <p className="text-white">
              <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
