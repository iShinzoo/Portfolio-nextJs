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
import { Analytics } from '@vercel/analytics/next';

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
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" zoomAndPan="magnify" viewBox="0 0 150 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g /><clipPath id="947209f2a0"><path d="M 27 6 L 36 6 L 36 23 L 27 23 Z M 27 6 " clipRule="nonzero" /></clipPath><clipPath id="0e1ba94a01"><path d="M 23.890625 8.371094 L 35.457031 4.070312 L 40.769531 18.355469 L 29.203125 22.660156 Z M 23.890625 8.371094 " clipRule="nonzero" /></clipPath><clipPath id="33a82420df"><path d="M 23.890625 8.371094 L 35.457031 4.070312 L 40.769531 18.355469 L 29.203125 22.660156 Z M 23.890625 8.371094 " clipRule="nonzero" /></clipPath><clipPath id="94668bd4fa"><path d="M 10.105469 6.492188 L 23.898438 6.492188 L 23.898438 21.007812 L 10.105469 21.007812 Z M 10.105469 6.492188 " clipRule="nonzero" /></clipPath><clipPath id="4775e81bd2"><path d="M 67 0 L 147.578125 0 L 147.578125 29.03125 L 67 29.03125 Z M 67 0 " clipRule="nonzero" /></clipPath></defs><g clipPath="url(#947209f2a0)"><g clipPath="url(#0e1ba94a01)"><g clipPath="url(#33a82420df)"><path fill="#5e17eb" d="M 30.046875 6.085938 L 27.707031 14.78125 L 30.460938 14.6875 L 29.3125 22.941406 L 35.023438 12.0625 L 32.421875 12.121094 L 35.828125 6.011719 Z M 30.046875 6.085938 " fillOpacity="1" fillRule="nonzero" /></g></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(5.252861, 20.130079)"><g><path d="M 6.765625 -13.453125 L 5.890625 -7.90625 L 5.921875 -7.90625 L 11.03125 -13.453125 L 15.359375 -13.453125 L 9.015625 -7.078125 L 13.71875 0 L 9.1875 0 L 5.609375 -5.828125 L 5.5625 -5.828125 L 4.640625 0 L 1.140625 0 L 3.265625 -13.453125 Z M 6.765625 -13.453125 " /></g></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(16.884119, 20.130079)"><g><path d="M 8.578125 -13.453125 C 9.796875 -13.453125 10.769531 -13.164062 11.5 -12.59375 C 12.226562 -12.019531 12.59375 -11.203125 12.59375 -10.140625 C 12.59375 -8.992188 12.253906 -7.984375 11.578125 -7.109375 C 10.898438 -6.234375 10.03125 -5.703125 8.96875 -5.515625 L 12.328125 0 L 7.96875 0 L 5.5 -5.171875 L 5.453125 -5.171875 L 4.640625 0 L 1.140625 0 L 3.265625 -13.453125 Z M 5.8125 -7.421875 L 6.296875 -7.421875 C 7.117188 -7.421875 7.753906 -7.59375 8.203125 -7.9375 C 8.660156 -8.28125 8.890625 -8.785156 8.890625 -9.453125 C 8.890625 -10.335938 8.160156 -10.78125 6.703125 -10.78125 L 6.359375 -10.78125 Z M 5.8125 -7.421875 " /></g></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(27.123883, 20.130079)"><g /></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(31.351692, 20.130079)"><g><path d="M 7.890625 -13.8125 C 9.328125 -13.8125 10.675781 -13.441406 11.9375 -12.703125 L 10.125 -10 C 9.488281 -10.59375 8.757812 -10.890625 7.9375 -10.890625 C 7.507812 -10.890625 7.117188 -10.765625 6.765625 -10.515625 C 6.421875 -10.273438 6.25 -9.976562 6.25 -9.625 C 6.25 -9.351562 6.375 -9.117188 6.625 -8.921875 C 6.875 -8.734375 7.332031 -8.539062 8 -8.34375 C 8.894531 -8.070312 9.546875 -7.804688 9.953125 -7.546875 C 10.359375 -7.296875 10.671875 -6.984375 10.890625 -6.609375 C 11.117188 -6.234375 11.234375 -5.765625 11.234375 -5.203125 C 11.234375 -4.398438 11.023438 -3.546875 10.609375 -2.640625 C 10.203125 -1.734375 9.523438 -1.007812 8.578125 -0.46875 C 7.628906 0.0625 6.503906 0.335938 5.203125 0.359375 C 3.546875 0.359375 2.050781 -0.148438 0.71875 -1.171875 L 2.65625 -4 C 3.582031 -3.070312 4.539062 -2.609375 5.53125 -2.609375 C 6.082031 -2.609375 6.539062 -2.75 6.90625 -3.03125 C 7.28125 -3.320312 7.46875 -3.6875 7.46875 -4.125 C 7.46875 -4.695312 6.898438 -5.132812 5.765625 -5.4375 C 4.378906 -5.820312 3.484375 -6.226562 3.078125 -6.65625 C 2.679688 -7.09375 2.484375 -7.675781 2.484375 -8.40625 C 2.484375 -9.925781 3.003906 -11.207031 4.046875 -12.25 C 5.085938 -13.289062 6.367188 -13.8125 7.890625 -13.8125 Z M 7.890625 -13.8125 " /></g></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(40.431879, 20.130079)"><g><path d="M 6.765625 -13.453125 L 5.9375 -8.265625 L 10.984375 -8.265625 L 11.8125 -13.453125 L 15.3125 -13.453125 L 13.1875 0 L 9.6875 0 L 10.5625 -5.515625 L 5.515625 -5.515625 L 4.640625 0 L 1.140625 0 L 3.265625 -13.453125 Z M 6.765625 -13.453125 " /></g></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(52.865919, 20.130079)"><g><path d="M 6.765625 -13.453125 L 11.859375 -5.234375 L 11.90625 -5.234375 L 13.203125 -13.453125 L 16.703125 -13.453125 L 14.578125 0 L 11.078125 0 L 5.984375 -8.25 L 5.9375 -8.25 L 4.640625 0 L 1.140625 0 L 3.265625 -13.453125 Z M 6.765625 -13.453125 " /></g></g></g><g fill="#ffffff" fillOpacity="1"><g transform="translate(66.691452, 20.130079)"><g><path d="M 11.046875 -13.453125 L 13.984375 0 L 10.265625 0 L 9.765625 -2.34375 L 4.9375 -2.34375 L 3.640625 0 L -0.078125 0 L 7.234375 -13.453125 Z M 6.328125 -5.015625 L 9.25 -5.015625 L 8.5 -9.296875 L 8.453125 -9.296875 Z M 6.328125 -5.015625 " /></g></g></g><g clipPath="url(#94668bd4fa)"><path fill="#000000" d="M 23.894531 13.636719 L 21.863281 13.636719 C 18.378906 12.863281 17.605469 12.066406 16.851562 8.492188 L 16.851562 6.492188 L 16.59375 6.492188 L 16.59375 8.515625 C 15.84375 12.070312 15.066406 12.863281 11.589844 13.636719 L 10.105469 13.636719 L 10.105469 13.898438 L 11.589844 13.898438 C 15.066406 14.667969 15.84375 15.464844 16.59375 19.019531 L 16.59375 21.007812 L 16.851562 21.007812 L 16.851562 19.039062 C 17.605469 15.46875 18.378906 14.671875 21.863281 13.898438 L 23.894531 13.898438 Z M 23.894531 13.636719 " fillOpacity="1" fillRule="nonzero" /></g><g clipPath="url(#4775e81bd2)"><path strokeLinecap="butt" transform="matrix(0.316261, 0, 0, 0.316261, 73.87034, 2.248837)" fill="none" strokeLinejoin="miter" d="M 42.009368 15.121745 L 40.527205 24.570538 L 31.325439 24.570538 L 26.026705 58.005677 L 14.885775 58.005677 L 20.172159 24.570538 L 10.970393 24.570538 L 12.440205 15.121745 Z M 51.149377 15.121745 L 48.54324 31.672571 L 64.637066 31.672571 L 67.255555 15.121745 L 78.396484 15.121745 L 71.627937 58.005677 L 60.487008 58.005677 L 63.278416 40.417336 L 47.18459 40.417336 L 44.393182 58.005677 L 33.239901 58.005677 L 40.020799 15.121745 Z M 104.433157 15.121745 L 113.820193 58.005677 L 101.938182 58.005677 L 100.344856 50.545454 L 84.992112 50.545454 L 80.842054 58.005677 L 69.009448 58.005677 L 92.267065 15.121745 Z M 89.426251 42.023014 L 98.702125 42.023014 L 96.305961 28.374757 L 96.194798 28.374757 Z M 129.160586 15.121745 L 126.38153 32.796545 L 126.492692 32.796545 L 142.759437 15.121745 L 156.580612 15.121745 L 136.324377 35.427386 L 151.343634 58.005677 L 136.89254 58.005677 L 125.467529 39.404525 L 125.356367 39.404525 L 122.404391 58.005677 L 111.25111 58.005677 L 118.032008 15.121745 Z M 166.004702 15.121745 L 162.484564 37.761793 C 162.138726 39.799768 161.965807 41.467202 161.965807 42.751744 C 161.965807 44.925584 162.435158 46.568315 163.361511 47.679938 C 164.287863 48.791561 165.89354 49.347372 168.178542 49.347372 C 170.945248 49.347372 173.057331 48.458074 174.50244 46.654775 C 175.972252 44.851476 176.985064 42.010662 177.553227 38.144686 L 181.147474 15.121745 L 192.276052 15.121745 L 188.422426 39.799768 C 187.656642 44.80207 186.347397 48.618642 184.494693 51.23713 C 182.629637 53.843268 180.159364 55.819486 177.059172 57.153433 C 173.983683 58.475029 170.500599 59.142003 166.634622 59.142003 C 161.409995 59.142003 157.383451 58.005677 154.579692 55.745378 C 151.775932 53.49743 150.380228 50.211967 150.380228 45.88899 C 150.380228 45.098503 150.417282 44.221556 150.49139 43.282853 C 150.565499 42.331798 152.022959 32.944762 154.863773 15.121745 Z M 210.247285 15.121745 C 214.113262 15.121745 217.213454 16.035746 219.547861 17.863747 C 221.882269 19.679398 223.043297 22.285535 223.043297 25.694512 C 223.043297 29.338164 221.956377 32.549518 219.794889 35.340926 C 217.6334 38.132334 214.866695 39.824471 211.494773 40.417336 L 222.178702 58.005677 L 208.308121 58.005677 L 200.4156 41.504256 L 200.292086 41.504256 L 197.673597 58.005677 L 186.532668 58.005677 L 193.301215 15.121745 Z M 201.428412 34.340466 L 202.972332 34.340466 C 205.590821 34.340466 207.616445 33.784654 209.049203 32.685383 C 210.494312 31.586112 211.210691 29.980435 211.210691 27.856 C 211.210691 25.052241 208.900986 23.644185 204.269225 23.644185 L 203.1329 23.644185 Z M 201.428412 34.340466 " stroke="#000000" strokeWidth="5.758685" strokeOpacity="1" strokeMiterlimit="4" /></g><g fill="#5e17eb" fillOpacity="1"><g transform="translate(75.555416, 20.591954)"><g><path d="M 11.59375 -13.5625 L 11.125 -10.578125 L 8.21875 -10.578125 L 6.546875 0 L 3.015625 0 L 4.6875 -10.578125 L 1.78125 -10.578125 L 2.25 -13.5625 Z M 11.59375 -13.5625 " /></g></g></g><g fill="#5e17eb" fillOpacity="1"><g transform="translate(83.233359, 20.591954)"><g><path d="M 6.8125 -13.5625 L 5.984375 -8.328125 L 11.078125 -8.328125 L 11.90625 -13.5625 L 15.4375 -13.5625 L 13.296875 0 L 9.765625 0 L 10.640625 -5.5625 L 5.5625 -5.5625 L 4.671875 0 L 1.15625 0 L 3.296875 -13.5625 Z M 6.8125 -13.5625 " /></g></g></g><g fill="#5e17eb" fillOpacity="1"><g transform="translate(95.766555, 20.591954)"><g><path d="M 11.125 -13.5625 L 14.09375 0 L 10.34375 0 L 9.84375 -2.359375 L 4.984375 -2.359375 L 3.671875 0 L -0.078125 0 L 7.28125 -13.5625 Z M 6.390625 -5.046875 L 9.3125 -5.046875 L 8.5625 -9.375 L 8.53125 -9.375 Z M 6.390625 -5.046875 " /></g></g></g><g fill="#5e17eb" fillOpacity="1"><g transform="translate(107.904135, 20.591954)"><g><path d="M 6.8125 -13.5625 L 5.9375 -7.96875 L 5.96875 -7.96875 L 11.109375 -13.5625 L 15.484375 -13.5625 L 9.078125 -7.140625 L 13.828125 0 L 9.265625 0 L 5.640625 -5.875 L 5.609375 -5.875 L 4.671875 0 L 1.15625 0 L 3.296875 -13.5625 Z M 6.8125 -13.5625 " /></g></g></g><g fill="#5e17eb" fillOpacity="1"><g transform="translate(119.628125, 20.591954)"><g><path d="M 6.75 -13.5625 L 5.625 -6.40625 C 5.519531 -5.757812 5.46875 -5.226562 5.46875 -4.8125 C 5.46875 -4.132812 5.613281 -3.617188 5.90625 -3.265625 C 6.195312 -2.910156 6.703125 -2.734375 7.421875 -2.734375 C 8.296875 -2.734375 8.960938 -3.015625 9.421875 -3.578125 C 9.890625 -4.148438 10.210938 -5.050781 10.390625 -6.28125 L 11.53125 -13.5625 L 15.046875 -13.5625 L 13.828125 -5.75 C 13.585938 -4.164062 13.171875 -2.960938 12.578125 -2.140625 C 11.992188 -1.316406 11.210938 -0.691406 10.234375 -0.265625 C 9.265625 0.148438 8.164062 0.359375 6.9375 0.359375 C 5.28125 0.359375 4.007812 0.00390625 3.125 -0.703125 C 2.238281 -1.421875 1.796875 -2.460938 1.796875 -3.828125 C 1.796875 -4.078125 1.804688 -4.351562 1.828125 -4.65625 C 1.859375 -4.957031 2.320312 -7.925781 3.21875 -13.5625 Z M 6.75 -13.5625 " /></g></g></g><g fill="#5e17eb" fillOpacity="1"><g transform="translate(131.711756, 20.591954)"><g><path d="M 8.65625 -13.5625 C 9.875 -13.5625 10.851562 -13.269531 11.59375 -12.6875 C 12.332031 -12.113281 12.703125 -11.289062 12.703125 -10.21875 C 12.703125 -9.0625 12.359375 -8.039062 11.671875 -7.15625 C 10.984375 -6.28125 10.109375 -5.75 9.046875 -5.5625 L 12.421875 0 L 8.03125 0 L 5.546875 -5.21875 L 5.5 -5.21875 L 4.671875 0 L 1.15625 0 L 3.296875 -13.5625 Z M 5.859375 -7.484375 L 6.34375 -7.484375 C 7.175781 -7.484375 7.816406 -7.65625 8.265625 -8 C 8.722656 -8.351562 8.953125 -8.863281 8.953125 -9.53125 C 8.953125 -10.414062 8.222656 -10.859375 6.765625 -10.859375 L 6.40625 -10.859375 Z M 5.859375 -7.484375 " /></g></g></g></svg>
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

          <main>{children}
            <Analytics />
          </main>

          <footer className="py-8 border-t">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Krishna Thakur. All rights reserved.
                  </p>
                </div>
                <div className="flex gap-x-[60px]">
                  <Link
                    href="https://github.com/iShinzoo"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onMouseEnter={() => window.enterTextCursor?.()}
                    onMouseLeave={() => window.leaveTextCursor?.()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/krishnathakur1"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onMouseEnter={() => window.enterTextCursor?.()}
                    onMouseLeave={() => window.leaveTextCursor?.()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </Link>
                  <Link
                    href="https://x.com/i_krsna4"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onMouseEnter={() => window.enterTextCursor?.()}
                    onMouseLeave={() => window.leaveTextCursor?.()}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
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




