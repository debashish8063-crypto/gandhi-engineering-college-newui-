"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsCard } from "@/components/ui/news-card"
import { SectionTitle } from "@/components/ui/section-title"

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "news" | "event" | "notice">("all")

  const newsItems = [
    {
      id: 1,
      title: "Campus Placements 2024: Record Breaking Performance",
      excerpt:
        "GEC achieves highest ever average package of ₹8.5 LPA with 95% placement rate. Major tech companies participated.",
      content:
        "The 2024 placement season has been exceptional with 95% of students placed. The average package reached ₹8.5 LPA, the highest in the college's history. 12 students received package above ₹10 LPA, including the highest at ₹12 LPA.",
      date: "Dec 8, 2024",
      category: "news" as const,
    },
    {
      id: 2,
      title: "Annual Techfest 2024 Successfully Concluded",
      excerpt:
        "Over 500 students participate in technical competitions and workshops. World-class technical exhibition.",
      content:
        "TechFest 2024 was a massive success with participation from students across all branches. Events included coding competitions, robotics challenges, hackathons, and technical workshops conducted by industry experts.",
      date: "Dec 1, 2024",
      category: "event" as const,
    },
    {
      id: 3,
      title: "Admission Portal Now Open",
      excerpt:
        "Apply now for B.Tech and MBA programs. Last date: January 15, 2025. Merit-based and entrance exam based admissions.",
      content:
        "The admission portal is now live for B.Tech and MBA programs. Candidates can apply online with their academic scores. Admissions are based on merit and entrance exam scores.",
      date: "Nov 25, 2024",
      category: "notice" as const,
    },
    {
      id: 4,
      title: "GEC Launches New AI & ML Center of Excellence",
      excerpt:
        "State-of-the-art AI lab inaugurated with focus on research and skill development in artificial intelligence.",
      content:
        "The new AI & ML center will focus on cutting-edge research, industry collaborations, and student skill development. The center is equipped with GPU clusters and AI tools.",
      date: "Nov 20, 2024",
      category: "news" as const,
    },
    {
      id: 5,
      title: "Cultural Fest 2024 - Celebration of Diversity",
      excerpt: "Three-day cultural extravaganza featuring music, dance, drama, and art from across the country.",
      content:
        "CulturalFest brought together students to celebrate their talents. The event featured performances from renowned artists and showcased the diverse talents of GEC students.",
      date: "Nov 15, 2024",
      category: "event" as const,
    },
    {
      id: 6,
      title: "Important: Semester Examination Schedule Released",
      excerpt:
        "Mid-semester exams scheduled from December 20 to January 10, 2025. Students must adhere to the schedule.",
      content:
        "The examination committee has released the mid-semester exam schedule. All students must follow the timetable strictly. Admit cards will be available 5 days before the exam.",
      date: "Nov 10, 2024",
      category: "notice" as const,
    },
    {
      id: 7,
      title: "Research Paper Published in IEEE Transactions",
      excerpt: "Faculty members from CSE department publish groundbreaking research on quantum computing applications.",
      content:
        "The research focuses on quantum computing applications in cryptography. The paper has been accepted for publication in IEEE Transactions with high impact factor.",
      date: "Nov 5, 2024",
      category: "news" as const,
    },
    {
      id: 8,
      title: "Industry Talk: Digital Transformation in 2025",
      excerpt:
        "Senior executives from Infosys and TCS share insights on emerging technologies and career opportunities.",
      content:
        "The industry talk session brought insights from senior leaders about digital transformation trends. Students got valuable insights into career paths and emerging opportunities.",
      date: "Oct 28, 2024",
      category: "event" as const,
    },
  ]

  const filtered =
    selectedCategory === "all" ? newsItems : newsItems.filter((item) => item.category === selectedCategory)

  const categories = [
    { value: "all", label: "All" },
    { value: "news", label: "News" },
    { value: "event", label: "Events" },
    { value: "notice", label: "Notices" },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">News & Events</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Stay updated with latest campus news, events, and important announcements
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value as any)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.value
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                category={item.category}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title="Stay Updated" centered subtitle="Subscribe to our newsletter for latest updates" />
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-academic-blue-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
