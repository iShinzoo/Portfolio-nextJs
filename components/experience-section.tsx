"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const experiences = [
  {
    period: "JUN 2025 – AUG 2025",
    title: "Blockchain Developer Intern",
    company: "Artificial Blockchain Intelligence (ABCI)",
    description:
      "Engineered Solidity smart contracts for Bridge Order and limit-order workflows. Built on-chain limit-order system achieving 25% faster execution.",
    type: "work",
  },
  {
    period: "APR 2025 – MAY 2025",
    title: "Blockchain Developer Intern",
    company: "QuadB Technologies",
    description:
      "Designed and launched on-chain Tap-to-Earn mechanic, increasing daily active users by 15%. Delivered modular UI components in React and Tailwind CSS, cutting UI assembly time by 20%.",
    type: "work",
  },
]

const education = [
  {
    period: "2022 – 2026",
    title: "B.Tech in Computer Science",
    company: "Jaypee University of Engineering & Technology",
    description:
      "Currently pursuing Computer Science with focus on blockchain technology, distributed systems, and full-stack development. Active member of coding clubs and blockchain research groups.",
    type: "education",
  },
]

type TabType = "experience" | "education"

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<TabType>("experience")

  const activeData = activeTab === "experience" ? experiences : education

  return (
    <section id="experience" className="py-24 px-6 bg-[#e3e3ff] w-full border-b-2 border-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - title and description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">My experiences</h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              {
                "I have had the pleasure to work with innovative blockchain companies. I'm always interested in new, exciting and challenging adventures in the Web3 space."
              }
            </p>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("experience")}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === "experience"
                    ? "bg-gray-900 text-white"
                    : "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                Experience
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("education")}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === "education"
                    ? "bg-gray-900 text-white"
                    : "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                Education
              </motion.button>
            </div>

            {/* Decorative arrow */}
            <svg className="w-24 h-24 mt-8 text-gray-800" viewBox="0 0 100 100" fill="none">
              <path d="M30 20 Q50 40 50 60 T70 90" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M70 90 L65 80 M70 90 L60 88" stroke="currentColor" strokeWidth="2" />
            </svg>
          </motion.div>

          <div className="space-y-0">
            {activeData.map((exp, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pb-12 last:pb-0"
              >
                {/* Timeline container */}
                <div className="flex gap-6">
                  {/* Date column */}
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap min-w-[160px] pt-1">
                    {exp.period}
                  </div>

                  {/* Timeline line and dot */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        index === 0 ? "border-gray-400 bg-white" : "border-[#7DD3B4] bg-[#D4F5E9]"
                      }`}
                    />
                    {index < activeData.length - 1 && (
                      <div className="w-px bg-gray-400 flex-1 absolute top-4 bottom-[-48px]" />
                    )}
                  </div>

                  {/* Content column */}
                  <div className="flex-1 pb-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {exp.title} at {exp.company}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-[15px]">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
