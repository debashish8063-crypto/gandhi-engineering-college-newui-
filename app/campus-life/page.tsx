"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/ui/section-title"
import { Home, BookOpen, Cpu, Dumbbell, Users, Camera } from "lucide-react"

export default function CampusLifePage() {
  const facilities = [
    {
      icon: Home,
      title: "Hostel Facilities",
      description:
        "Well-maintained hostels with 24/7 security, wifi, common areas, and recreational facilities. Separate hostels for boys and girls.",
      features: ["AC Rooms", "Study Halls", "WiFi Network", "Dining", "Security"],
    },
    {
      icon: BookOpen,
      title: "Central Library",
      description:
        "Well-stocked library with over 15,000 books, journals, and online resources. Comfortable reading areas and study zones.",
      features: ["Books & Journals", "Online Resources", "Study Areas", "Computer Lab", "24/7 Access"],
    },
    {
      icon: Cpu,
      title: "Laboratories",
      description:
        "Advanced labs for each discipline with latest equipment and software. Regular lab sessions for practical learning.",
      features: ["CS Labs", "ECE Labs", "ME Labs", "Networks", "Latest Software"],
    },
    {
      icon: Dumbbell,
      title: "Sports Facilities",
      description:
        "Comprehensive sports infrastructure including grounds, courts, gymnasium, and swimming pool with professional coaching.",
      features: ["Cricket Ground", "Courts", "Gym", "Pool", "Coaching"],
    },
    {
      icon: Users,
      title: "Clubs & Societies",
      description:
        "Active student clubs covering technical, cultural, and sports interests. Regular events and competitions throughout the year.",
      features: ["Tech Clubs", "Cultural Societies", "Sports Teams", "Events", "Workshops"],
    },
    {
      icon: Camera,
      title: "Events & Festivals",
      description:
        "Annual techfest, cultural fest, sports week, and various other events that celebrate talent and foster community spirit.",
      features: ["Techfest", "Cultural Fest", "Sports Week", "Guest Talks", "Competitions"],
    },
  ]

  const clubs = [
    "Coding Club",
    "Robotics Club",
    "AI & ML Club",
    "Web Development Club",
    "Photography Club",
    "Music Society",
    "Drama Club",
    "Sports Society",
    "Entrepreneurship Club",
    "Social Service Club",
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Campus Life</h1>
          <p className="text-lg text-white/80 max-w-2xl">Experience a vibrant learning environment beyond academics</p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Campus Facilities"
            centered
            subtitle="State-of-the-art infrastructure for holistic development"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-secondary to-white rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{facility.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, fidx) => (
                      <span
                        key={fidx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Clubs & Societies"
            centered
            subtitle="Join clubs aligned with your interests and passions"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clubs.map((club, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                <p className="font-semibold text-primary">{club}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Campus Gallery" centered subtitle="Glimpses from our vibrant campus life" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, idx) => (
              <div
                key={idx}
                className="bg-secondary rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-success-green/20 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={`/campus-event-.jpg?height=300&width=300&query=campus+event+${idx}`}
                    alt={`Campus event ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Student Experiences" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Arjun Kumar",
                year: "3rd Year CSE",
                message:
                  "The campus life at GEC is amazing! Beyond academics, the clubs and sports activities have helped me grow as a person.",
              },
              {
                name: "Priya Patel",
                year: "2nd Year ECE",
                message:
                  "I love the vibrant culture here. The annual techfest and cultural fest are highlights of my college journey.",
              },
              {
                name: "Rohan Singh",
                year: "Final Year ME",
                message:
                  "The facilities and infrastructure are world-class. The hostel life has given me lifelong friendships and memories.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"{testimonial.message}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
