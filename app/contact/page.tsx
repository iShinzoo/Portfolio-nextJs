"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import PageTransition from "@/components/page-transition"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState("")

  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(formRef, { once: false, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormError("Please fill in all required fields.")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formState.email)) {
      setFormError("Please enter a valid email address.")
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setFormError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.5)" },
    blur: { scale: 1, boxShadow: "none" },
  }

  return (
    <PageTransition>
      <div className="container px-4 mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            onMouseEnter={() => window.enterTextCursor?.()}
            onMouseLeave={() => window.leaveTextCursor?.()}
          >
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill out the
            form below or reach out directly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2
              className="text-2xl font-bold mb-6"
              onMouseEnter={() => window.enterTextCursor?.()}
              onMouseLeave={() => window.leaveTextCursor?.()}
            >
              Contact Information
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a
                    href="mailto:krishe7t8rr@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                    onMouseEnter={() => window.enterTextCursor?.()}
                    onMouseLeave={() => window.leaveTextCursor?.()}
                  >
                    krishe7t8rr@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="font-medium">Guna, India</div>
                  <div className="text-sm text-muted-foreground mt-1">Available for remote work worldwide</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/iShinzoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors"
                  onMouseEnter={() => window.enterTextCursor?.()}
                  onMouseLeave={() => window.leaveTextCursor?.()}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/krishnathakur1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors"
                  onMouseEnter={() => window.enterTextCursor?.()}
                  onMouseLeave={() => window.leaveTextCursor?.()}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/i_krsna4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors"
                  onMouseEnter={() => window.enterTextCursor?.()}
                  onMouseLeave={() => window.leaveTextCursor?.()}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`bg-card/50 backdrop-blur-sm rounded-xl p-6 border relative ${isSubmitted ? "opacity-50" : ""}`}
            >
              <h3
                className="text-xl font-bold mb-6"
                onMouseEnter={() => window.enterTextCursor?.()}
                onMouseLeave={() => window.leaveTextCursor?.()}
              >
                Send Me a Message
              </h3>

              {formError && (
                <div className="mb-6 p-3 bg-destructive/10 border border-destructive/30 rounded-lg flex items-center text-sm">
                  <AlertCircle className="h-4 w-4 text-destructive mr-2" />
                  {formError}
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <motion.div whileFocus="focus" animate="blur" variants={inputVariants}>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="transition-all duration-300 focus:border-primary"
                        disabled={isSubmitting || isSubmitted}
                        required
                      />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <motion.div whileFocus="focus" animate="blur" variants={inputVariants}>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="transition-all duration-300 focus:border-primary"
                        disabled={isSubmitting || isSubmitted}
                        required
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </Label>
                  <motion.div whileFocus="focus" animate="blur" variants={inputVariants}>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="transition-all duration-300 focus:border-primary"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <motion.div whileFocus="focus" animate="blur" variants={inputVariants}>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      className="transition-all duration-300 focus:border-primary resize-none"
                      disabled={isSubmitting || isSubmitted}
                      required
                    />
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full rounded-full relative overflow-hidden group"
                    disabled={isSubmitting || isSubmitted}
                    onMouseEnter={() => window.enterTextCursor?.()}
                    onMouseLeave={() => window.leaveTextCursor?.()}
                  >
                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 group-hover:opacity-0 transition-opacity duration-300"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </motion.div>
              </div>
            </form>

            {/* Success message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-card rounded-xl p-8 border shadow-lg text-center max-w-md">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="rounded-full">
                    Send Another Message
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

