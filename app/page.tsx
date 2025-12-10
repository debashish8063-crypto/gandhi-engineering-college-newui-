"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/button-primary"
import { SectionTitle } from "@/components/ui/section-title"
import { StatCard } from "@/components/ui/stat-card"
import { CourseCard } from "@/components/ui/course-card"
import { NewsCard } from "@/components/ui/news-card"
import { RecruiterLogo } from "@/components/ui/recruiter-logo"
import { FadeInUp } from "@/components/animations/fade-in-up"
import { ScaleIn } from "@/components/animations/scale-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { HoverLift } from "@/components/animations/hover-lift"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const stats = [
    { number: "18+", label: "Years of Excellence" },
    { number: "150+", label: "Experienced Faculty" },
    { number: "3000+", label: "Student Community" },
    { number: "80+", label: "Industry Partners" },
  ]

  const courses = [
    {
      name: "B.Tech Computer Science & Engineering",
      duration: "4 Years",
      intake: "120",
      description: "Industry-focused curriculum with cutting-edge technologies",
    },
    {
      name: "B.Tech Electronics & Communication",
      duration: "4 Years",
      intake: "60",
      description: "Specialization in signal processing and communication systems",
    },
    {
      name: "B.Tech Mechanical Engineering",
      duration: "4 Years",
      intake: "60",
      description: "Advanced mechanical design and manufacturing expertise",
    },
    {
      name: "B.Tech Civil Engineering",
      duration: "4 Years",
      intake: "60",
      description: "Infrastructure and construction technology focus",
    },
    {
      name: "B.Tech Electrical Engineering",
      duration: "4 Years",
      intake: "60",
      description: "Power systems and renewable energy specialization",
    },
    {
      name: "MBA",
      duration: "2 Years",
      intake: "60",
      description: "Business management and leadership development",
    },
  ]

  const news = [
    {
      title: "Campus Placements 2024: Record Breaking Performance",
      excerpt: "GEC achieves highest ever average package of ₹8.5 LPA with 95% placement rate",
      date: "Dec 8, 2024",
      category: "news" as const,
    },
    {
      title: "Annual Techfest 2024 Successfully Concluded",
      excerpt: "Over 500 students participate in technical competitions and workshops",
      date: "Dec 1, 2024",
      category: "event" as const,
    },
    {
      title: "Admission Portal Now Open",
      excerpt: "Apply now for B.Tech and MBA programs. Last date: January 15, 2025",
      date: "Nov 25, 2024",
      category: "notice" as const,
    },
  ]

  const recruiters = [
    { name: "Infosys" },
    { name: "Wipro" },
    { name: "TCS" },
    { name: "Cognizant" },
    { name: "Capgemini" },
    { name: "Accenture" },
    { name: "HCL Tech" },
    { name: "Tech Mahindra" },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Gandhi Engineering College</h1>
              <p className="text-xl md:text-2xl mb-2 text-white/90">AICTE Approved | BPUT Affiliated</p>
              <p className="text-lg md:text-xl text-white/80 mb-8">Establishing excellence since 2006</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Explore Courses
                </Button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <SectionTitle title="Our Impact" centered subtitle="Building leaders in engineering and management" />
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <ScaleIn key={stat.label} delay={idx * 0.1}>
                <StatCard number={stat.number} label={stat.label} />
              </ScaleIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <SectionTitle
              title="Our Programs"
              centered
              subtitle="Comprehensive academic offerings in engineering and management"
            />
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course, idx) => (
              <HoverLift key={course.name} className="h-full">
                <CourseCard
                  name={course.name}
                  duration={course.duration}
                  intake={course.intake}
                  description={course.description}
                />
              </HoverLift>
            ))}
          </StaggerContainer>
          <FadeInUp className="text-center">
            <Link href="/courses">
              <Button variant="primary" size="lg">
                View All Programs <ChevronRight className="inline ml-2" size={20} />
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <SectionTitle
              title="Placement Excellence"
              centered
              subtitle="Strong industry partnerships and career opportunities"
            />
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "₹12 LPA", label: "Highest Package" },
              { number: "₹8.5 LPA", label: "Average Package" },
              { number: "95%", label: "Placement Rate" },
            ].map((stat, idx) => (
              <ScaleIn key={stat.label} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </ScaleIn>
            ))}
          </StaggerContainer>

          <FadeInUp>
            <div>
              <h3 className="text-2xl font-bold text-primary text-center mb-8">Our Recruiters</h3>
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recruiters.map((recruiter) => (
                  <HoverLift key={recruiter.name}>
                    <RecruiterLogo name={recruiter.name} />
                  </HoverLift>
                ))}
              </StaggerContainer>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <SectionTitle
              title="Latest News & Events"
              centered
              subtitle="Stay updated with campus activities and announcements"
            />
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {news.map((item) => (
              <HoverLift key={item.title}>
                <NewsCard title={item.title} excerpt={item.excerpt} date={item.date} category={item.category} />
              </HoverLift>
            ))}
          </StaggerContainer>
          <FadeInUp className="text-center">
            <Link href="/news">
              <Button variant="primary" size="lg">
                View All News <ChevronRight className="inline ml-2" size={20} />
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </>
  )
}
