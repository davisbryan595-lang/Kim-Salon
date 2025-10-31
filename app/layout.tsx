import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kim's Salon — Family Hair & Beauty in Burbank",
  description:
    "Premium hair and beauty salon in Burbank, CA. Haircuts, coloring, waxing, threading, blowdries, and spa services. Book your appointment today.",
  keywords: "salon, hair salon, beauty salon, Burbank, haircut, coloring, waxing, blowdry",
  openGraph: {
    title: "Kim's Salon — Family Hair & Beauty in Burbank",
    description: "Premium hair and beauty salon in Burbank, CA.",
    url: "https://kimssalon.com",
    siteName: "Kim's Salon",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
