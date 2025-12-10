"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/ui/section-title"
import { Download } from "lucide-react"

export default function MandatoryDisclosuresPage() {
  const disclosures = [
    {
      title: "AICTE Approval",
      content: [
        "Institution: Gandhi Engineering College",
        "Approval Year: 2006",
        "Permanent Approval Status",
        "AICTE Approval Valid Till: 31-07-2026",
        "All programs are duly approved by AICTE",
      ],
    },
    {
      title: "BPUT Affiliation",
      content: [
        "Affiliation ID: BPUT/GEC/2006",
        "Affiliated Institution since: 2006",
        "Affiliation Status: Active",
        "Academic Department: Engineering & Technology",
        "Affiliation renewed regularly as per BPUT guidelines",
      ],
    },
    {
      title: "Fee Structure",
      content: [
        "B.Tech Annual Fee: ₹2,50,000 (Semester-wise: ₹1,25,000)",
        "MBA Annual Fee: ₹3,00,000 (Semester-wise: ₹1,50,000)",
        "M.Tech Annual Fee: ₹1,60,000 (Semester-wise: ₹80,000)",
        "All fees are transparent and published on the official website",
        "Additional charges for hostel, mess, and activities as per norms",
      ],
    },
    {
      title: "Anti-Ragging Cell",
      content: [
        "Anti-Ragging Cell established as per Supreme Court directives",
        "Cell Committee: Faculty members, students, and parent representatives",
        "Grievance redressal system in place",
        "Toll-free Helpline: 1800-425-7888",
        "Email: antiraggin@gec.edu.in",
        "Zero tolerance policy strictly implemented",
      ],
    },
    {
      title: "Governing Body",
      content: [
        "Registered Society under Societies Registration Act, 1860",
        "Governing Body constituted as per guidelines",
        "Members include: Management, Principal, Faculty, Students, Industry Experts, Alumni",
        "Meets regularly to oversee institutional governance",
        "Ensures compliance with regulatory requirements",
      ],
    },
    {
      title: "Infrastructure Details",
      content: [
        "Total Land Area: 15 Acres",
        "Built-up Area: 45,000 sq.ft.",
        "Computer Labs: 5 (200+ computers)",
        "Classrooms: 45 with multimedia facilities",
        "Library: 15,000+ books and online resources",
        "Hostels: Boys and Girls hostels with capacity of 500+ students",
      ],
    },
  ]

  const downloads = [
    { name: "AICTE Approval Certificate", file: "aicte-approval.pdf" },
    { name: "BPUT Affiliation Certificate", file: "bput-affiliation.pdf" },
    { name: "Fee Structure Document", file: "fee-structure.pdf" },
    { name: "Institutional Information", file: "institutional-info.pdf" },
    { name: "Academic Regulations", file: "academic-regulations.pdf" },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Mandatory Disclosures</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Transparent information about institutional governance and compliance
          </p>
        </div>
      </section>

      {/* Disclosure Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disclosures.map((disclosure, idx) => (
              <div key={idx} className="bg-secondary rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">{disclosure.title}</h3>
                <ul className="space-y-2">
                  {disclosure.content.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="text-success-green font-bold mt-1 flex-shrink-0">✓</span>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Documents */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Downloadable Documents" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {downloads.map((doc, idx) => (
              <a
                key={idx}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  alert(`Downloading: ${doc.file}`)
                }}
                className="bg-white rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary transition-all flex items-center justify-between group"
              >
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {doc.name}
                </span>
                <Download className="text-primary group-hover:scale-110 transition-transform" size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Regulatory Compliance" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">ISO 9001:2015 Certified for Quality Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">Regular Internal and External Audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">IQAC reviews and institutional self-evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">Annual Academic Audit Reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Academic Standards</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">Curriculum aligned with BPUT and industry standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">Regular faculty development programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">Research and innovation initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">Industry partnerships and collaborations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Grievances */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Grievance Redressal</h2>
          <p className="text-lg text-white/80 mb-8">
            We are committed to resolving any grievances promptly. Please contact the relevant cell for assistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Student Grievance Cell</h3>
              <p className="text-white/80">grievance@gec.edu.in</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Anti-Ragging Helpline</h3>
              <p className="text-white/80">1800-425-7888 (Toll Free)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
