import type React from "react"
import type { Metadata } from "next"
import { Sora, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Krishna Thakur | Blockchain Developer",
  description:
    "Blockchain developer and CS student passionate about building decentralized applications, smart contracts, and Web3 solutions.",
  keywords: ["blockchain", "developer", "solidity", "web3", "ethereum", "smart contracts", "dapp"],
  authors: [{ name: "Krishna Thakur" }],
  openGraph: {
    title: "Krishna Thakur | Blockchain Developer",
    description: "Blockchain developer passionate about building decentralized applications.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
