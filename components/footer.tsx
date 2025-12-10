import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Gandhi Engineering College</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              AICTE Approved, BPUT Affiliated institution committed to delivering industry-ready education since 2006.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="hover:text-white/80 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white/80 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-white/80 transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-white/80 transition-colors">
                  Campus Life
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p>Badaraghunathpur, PO Madanpur, Bhubaneswar, Odisha</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:info@gec.edu.in" className="hover:text-white/80 transition-colors">
                  info@gec.edu.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:+919876543210" className="hover:text-white/80 transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8 mt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <Link href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              Anti-Ragging Cell
            </Link>
            <Link href="/mandatory-disclosures" className="hover:text-white/80 transition-colors">
              Mandatory Disclosures
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-white/60">
            © {currentYear} Gandhi Engineering College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
