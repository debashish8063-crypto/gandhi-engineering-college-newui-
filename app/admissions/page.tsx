"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/button-primary"
import { SectionTitle } from "@/components/ui/section-title"
import { CheckCircle, Calendar } from "lucide-react"

export default function AdmissionsPage() {
  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Fill the online application form with your basic details and academic records",
    },
    {
      number: "02",
      title: "Submit Documents",
      description: "Upload required documents including mark sheets, certificates, and identification",
    },
    {
      number: "03",
      title: "Merit Evaluation",
      description: "Your application will be evaluated based on merit and eligibility criteria",
    },
    {
      number: "04",
      title: "Selection & Admission",
      description: "Selected candidates will receive admission offer and enrollment instructions",
    },
  ]

  const feeStructure = [
    {
      program: "B.Tech",
      semester: "₹1,25,000",
      year: "₹2,50,000",
      total: "₹10,00,000",
    },
    {
      program: "MBA",
      semester: "₹1,50,000",
      year: "₹3,00,000",
      total: "₹6,00,000",
    },
    {
      program: "M.Tech",
      semester: "₹80,000",
      year: "₹1,60,000",
      total: "₹3,20,000",
    },
  ]

  const scholarships = [
    {
      name: "Merit Scholarship",
      eligibility: "70% average or above in qualifying exam",
      benefit: "50% tuition fee waiver for first year",
    },
    {
      name: "Merit-cum-Means Scholarship",
      eligibility: "60% average + annual family income below ₹8 LPA",
      benefit: "75% tuition fee waiver",
    },
    {
      name: "Sports Excellence Scholarship",
      eligibility: "National or state-level sports achievement",
      benefit: "Full tuition fee waiver + stipend",
    },
    {
      name: "Minority Scholarship",
      eligibility: "Minority community students with minimum 55% marks",
      benefit: "50% tuition fee waiver",
    },
  ]

  const importantDates = [
    { event: "Online Application Opens", date: "December 15, 2024" },
    { event: "Application Deadline", date: "January 15, 2025" },
    { event: "Merit List Announcement", date: "January 25, 2025" },
    { event: "Counseling Begins", date: "February 1, 2025" },
    { event: "Admission Confirmation", date: "February 15, 2025" },
    { event: "Classes Begin", date: "March 1, 2025" },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Admissions</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Join Gandhi Engineering College and build your future in engineering and management
          </p>
          <Button variant="secondary" size="lg" className="mt-6">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Why Choose GEC */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Why Choose GEC?" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎓", title: "Quality Education", desc: "Industry-aligned curriculum by experienced faculty" },
              { icon: "💼", title: "Placements", desc: "95% placement rate with top companies" },
              { icon: "🔬", title: "Facilities", desc: "State-of-the-art labs and modern infrastructure" },
              { icon: "🌟", title: "Campus Life", desc: "Vibrant culture with clubs and activities" },
            ].map((item, idx) => (
              <div key={idx} className="bg-secondary rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-4xl mb-3">{item.icon}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Admission Process" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-md h-full">
                  <div className="text-4xl font-bold text-primary mb-3">{step.number}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-primary text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Fee Structure */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Eligibility & Fee Structure" centered />

          {/* Eligibility */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Eligibility Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "B.Tech Programs",
                  points: [
                    "10+2 with Physics, Chemistry & Mathematics",
                    "Minimum 50% aggregate marks",
                    "JEE Main qualified or Merit-based",
                  ],
                },
                {
                  title: "MBA Program",
                  points: [
                    "Bachelor's degree in any discipline",
                    "Minimum 50% marks in graduation",
                    "CAT/MAT/CMAT Score or Merit-based",
                  ],
                },
                {
                  title: "M.Tech Program",
                  points: [
                    "B.Tech in relevant discipline",
                    "Minimum 60% marks in B.Tech",
                    "GATE qualified or Merit-based",
                  ],
                },
              ].map((category, idx) => (
                <div key={idx} className="bg-secondary rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-success-green mt-1 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Structure Table */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Fee Structure</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-primary p-4 text-left font-semibold">Program</th>
                    <th className="border border-primary p-4 text-left font-semibold">Per Semester</th>
                    <th className="border border-primary p-4 text-left font-semibold">Per Year</th>
                    <th className="border border-primary p-4 text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-secondary"}>
                      <td className="border border-border p-4 font-semibold text-foreground">{row.program}</td>
                      <td className="border border-border p-4 text-foreground">{row.semester}</td>
                      <td className="border border-border p-4 text-foreground">{row.year}</td>
                      <td className="border border-border p-4 font-semibold text-primary">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Scholarship Opportunities" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map((scholarship, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-success-green">
                <h3 className="text-lg font-bold text-primary mb-3">{scholarship.name}</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Eligibility:</span>{" "}
                    <span className="text-muted-foreground">{scholarship.eligibility}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Benefit:</span>{" "}
                    <span className="text-success-green font-medium">{scholarship.benefit}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Important Dates" centered />
          <div className="max-w-2xl mx-auto space-y-3">
            {importantDates.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-secondary rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <Calendar className="text-primary flex-shrink-0" size={24} />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{item.event}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Join GEC?</h2>
          <p className="text-lg text-white/80 mb-8">
            Start your journey towards excellence. Apply today and build a successful career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Apply Now
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
