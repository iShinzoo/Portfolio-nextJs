"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#E8E4F8] w-full border-b-2 border-black" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Decorative envelope icon */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:block">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-gray-700">
              <rect x="5" y="15" width="50" height="35" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M5 20L30 35L55 20" stroke="currentColor" strokeWidth="2" />
              <path d="M25 10L30 5L35 10" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Decorative clouds */}
          <div className="absolute -right-8 top-20 hidden lg:block">
            <svg width="60" height="40" viewBox="0 0 60 40" className="text-gray-800">
              <path
                d="M15 30C8 30 5 25 5 20C5 15 10 10 18 10C20 5 28 2 35 5C42 2 52 5 55 15C58 20 55 30 45 30Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute -right-4 top-32 hidden lg:block">
            <svg width="40" height="30" viewBox="0 0 60 40" className="text-gray-800">
              <path
                d="M15 30C8 30 5 25 5 20C5 15 10 10 18 10C20 5 28 2 35 5C42 2 52 5 55 15C58 20 55 30 45 30Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-black">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium mb-6">
                <span className="text-lg">✦</span> CONTACT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Got a project in mind?</h2>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{"Let's get in touch."}</h2>
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">{"Thanks for reaching out. I'll get back to you soon!"}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your name *"
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder:text-gray-400 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="Email address *"
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder:text-gray-400 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-500">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell me about your project *"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder:text-gray-400 resize-none outline-none"
                  />
                </div>

                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
