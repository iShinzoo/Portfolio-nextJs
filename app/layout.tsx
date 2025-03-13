"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Krishna Thakur</title>
        <meta
          name="description"
          content="Portfolio of Krishna Thakur, Full Stack Developer specializing in Web3 and Android development"
        />
        <link rel="icon" href="/images/projects/logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CustomCursor />

          <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16 md:h-20">
                <Link href="/" className="text-xl font-bold">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => window.enterTextCursor?.()}
                    onMouseLeave={() => window.leaveTextCursor?.()}
                  >
                    Krishna<span className="text-primary">Thakur</span>
                  </motion.div>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.path ? "text-primary" : ""}`}
                        onMouseEnter={() => window.enterTextCursor?.()}
                        onMouseLeave={() => window.leaveTextCursor?.()}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="md:hidden">
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
                    <Menu className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-background z-50 md:hidden"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-end p-4">
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full space-y-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        className={`text-2xl font-medium hover:text-primary transition-colors ${pathname === item.path ? "text-primary" : ""}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          <main>{children}</main>

          <footer className="py-8 border-t">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Krishna Thakur. All rights reserved.
                  </p>
                </div>
                <div className="flex space-x-6">
                  <Link
                    href="https://github.com/iShinzoo"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onMouseEnter={() => window.enterTextCursor?.()}
                    onMouseLeave={() => window.leaveTextCursor?.()}
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://linkedin.com/in/krishnathakur1"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onMouseEnter={() => window.enterTextCursor?.()}
                    onMouseLeave={() => window.leaveTextCursor?.()}
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://x.com/i_krsna4"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onMouseEnter={() => window.enterTextCursor?.()}
                    onMouseLeave={() => window.leaveTextCursor?.()}
                  >
                    X
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}




