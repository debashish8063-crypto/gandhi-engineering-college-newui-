import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gandhi Engineering College | AICTE Approved | Bhubaneswar",
  description:
    "Gandhi Engineering College is a premier AICTE approved engineering institution in Bhubaneswar, offering B.Tech and MBA programs with excellent placements and industry partnerships.",
  keywords: ["engineering college", "bhubaneswar", "AICTE", "B.Tech", "MBA", "placements"],
  authors: [{ name: "Gandhi Engineering College" }],
  openGraph: {
    title: "Gandhi Engineering College | AICTE Approved",
    description: "Premier engineering institution in Bhubaneswar with 18+ years of excellence",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2F5A",
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
