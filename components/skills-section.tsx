"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "Solidity", icon: "⟠" },
  { name: "Kotlin", icon: "K" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "N" },
  { name: "Hardhat", icon: "⛑" },
  { name: "Foundry", icon: "🔨" },
  { name: "Web3.js", icon: "W3" },
  { name: "Ethers.js", icon: "E" },
  { name: "IPFS", icon: "📦" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Firebase", icon: "🔥" },
  { name: "Supabase", icon: "⚡" },
  { name: "Git", icon: "⎇" },
  { name: "Vercel", icon: "▲" },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 bg-[#E8E4F8] w-full border-b-2 border-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium border-2 border-black mb-6">
            <span className="text-lg">✦</span> MY SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
            Technologies I work with
            <br />
            to build amazing products.
          </h2>
        </motion.div>

        <div className="relative overflow-hidden py-8">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...skills, ...skills].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 px-6 py-4 bg-[#E8E4F8] rounded-2xl cursor-default shrink-0 border-2 border-black"
              >
                <span className="text-2xl font-bold text-[#7C6CEB] ">{skill.icon}</span>
                <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Reverse direction marquee */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-black rounded-2xl cursor-default shrink-0"
              >
                <span className="text-2xl font-bold text-gray-700">{skill.icon}</span>
                <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
