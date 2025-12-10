"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/ui/section-title"
import { Award, Users, Zap, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Gandhi Engineering College</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            A premier institution dedicated to nurturing engineering excellence and innovation
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our History" centered />
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Gandhi Engineering College was established in 2006 with a vision to provide quality engineering education
              to aspiring students. Starting with a handful of programs, the college has grown exponentially over the
              years and now stands as a premier institution in Odisha.
            </p>
            <p>
              The college was named after Mahatma Gandhi, reflecting our commitment to values of integrity,
              sustainability, and social responsibility. Over the past 18 years, GEC has built a strong reputation for
              academic excellence and industry partnerships.
            </p>
            <p>
              Today, GEC is recognized by AICTE and affiliated with BPUT, offering multiple undergraduate and
              postgraduate programs. Our alumni are working with leading companies globally, contributing significantly
              to the industry and society.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-primary" size={28} />
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized institution that creates competent engineers and managers equipped with
                technical expertise, ethical values, and a commitment to societal development.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-success-green" size={28} />
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive engineering education that balances theoretical knowledge with practical
                skills, fostering innovation, entrepreneurship, and lifelong learning among our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Values" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Excellence", description: "Pursuing highest standards in education and research" },
              { title: "Integrity", description: "Upholding honesty and ethical principles in all endeavors" },
              { title: "Innovation", description: "Encouraging creative thinking and technological advancement" },
              { title: "Inclusivity", description: "Creating an environment welcoming to all students" },
            ].map((value, idx) => (
              <div key={idx} className="bg-secondary rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Leadership" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Suresh Mishra",
                title: "Chairman",
                message:
                  "Education is the foundation of a developed society. We are committed to providing world-class engineering education.",
              },
              {
                name: "Dr. Ramesh Kumar Mohanty",
                title: "Principal",
                message:
                  "Our mission is to develop engineers who can solve real-world problems and contribute to society's progress.",
              },
              {
                name: "Prof. Anjali Mohanty",
                title: "Dean - Academics",
                message:
                  "We focus on holistic development of students through innovative teaching and industry partnerships.",
              },
            ].map((leader, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-md text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
                <p className="text-sm font-medium text-success-green mb-4">{leader.title}</p>
                <p className="text-muted-foreground italic">"{leader.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Accreditations & Recognition" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "AICTE Approved", desc: "Approved by All India Council for Technical Education" },
              { icon: Users, title: "BPUT Affiliated", desc: "Affiliated to Biju Patnaik University of Technology" },
              { icon: Award, title: "ISO Certified", desc: "Quality Management System ISO 9001:2015 Certified" },
              {
                icon: Zap,
                title: "Industry Recognized",
                desc: "Recognized by leading companies for quality placements",
              },
            ].map((acc, idx) => {
              const Icon = acc.icon
              return (
                <div key={idx} className="bg-secondary rounded-2xl p-6 text-center">
                  <Icon className="mx-auto text-primary mb-3" size={32} />
                  <h3 className="text-lg font-bold text-primary mb-2">{acc.title}</h3>
                  <p className="text-sm text-muted-foreground">{acc.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
