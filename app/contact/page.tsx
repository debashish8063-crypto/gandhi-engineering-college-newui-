"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you for reaching out! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Badaraghunathpur, PO Madanpur, Bhubaneswar, Odisha 752054",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@gec.edu.in",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 9:00 AM - 5:00 PM IST",
    },
  ]

  const departments = [
    { name: "Admissions", email: "admissions@gec.edu.in", phone: "+91 98765 43211" },
    { name: "Placements", email: "placements@gec.edu.in", phone: "+91 98765 43212" },
    { name: "Academics", email: "academics@gec.edu.in", phone: "+91 98765 43213" },
    { name: "Student Affairs", email: "student@gec.edu.in", phone: "+91 98765 43214" },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-academic-blue-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Get in touch with us for any queries or information about our programs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="mx-auto text-primary mb-4" size={32} />
                  <h3 className="text-lg font-bold text-primary mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Department Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Subject</option>
                    <option value="admissions">Admissions</option>
                    <option value="placements">Placements</option>
                    <option value="academics">Academics</option>
                    <option value="facilities">Facilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-academic-blue-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Department Contacts</h2>
              <div className="space-y-4">
                {departments.map((dept, idx) => (
                  <div key={idx} className="bg-secondary rounded-xl p-4 border border-border">
                    <h3 className="font-bold text-foreground mb-2">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                        {dept.email}
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                        {dept.phone}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Find Us on Map</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.8626848854547!2d85.84532099999999!3d20.106437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909f8d5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sBadaraghunathpur%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
