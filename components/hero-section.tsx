"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="w-full border-b-2 border-black min-h-screen pt-24 pb-16 px-6 relative overflow-hidden bg-[#e3e3ff]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium border-2 border-black"
            >
              <span className="text-lg">✦</span> HELLO!
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {"I'm Krishna Thakur,"}
              <br />
              {"a "}
              <span className="relative">
                <span className="text-gray-900">Software</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#7C6CEB" strokeWidth="4" strokeLinecap="round" />
                  <path d="M2 10C50 4 150 4 198 10" stroke="#7C6CEB" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              {" Developer."}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-120 md:w-96 md:h-120 bg-[#9B8CD8] rounded-t-full relative overflow-hidden border-2 border-black">
                <img src="/port.jpeg" alt="Krishna Thakur" className="w-full h-full object-cover" />
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 md:w-28 md:h-28"
              >
                <div className="w-full h-full rounded-full bg-[#D4F5E9] flex items-center justify-center relative border-2 border-black">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text className="text-[8px] fill-gray-700 font-medium tracking-widest">
                      <textPath href="#circlePath">★ AVAILABLE ★ FOR FREELANCE ★</textPath>
                    </text>
                  </svg>
                  <ArrowUpRight className="w-6 h-6 text-gray-700" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-8 right-0 translate-x-full"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="#1a1a1a" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute top-20 right-0 translate-x-[120%]"
              >
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                  <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="#1a1a1a" />
                </svg>
              </motion.div>
            </div>

            <svg className="absolute -bottom-8 -left-8 w-32 h-32 text-gray-800" viewBox="0 0 100 100" fill="none">
              <path d="M10 50 Q30 30 50 50 T90 50" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M90 50 L85 45 M90 50 L85 55" stroke="currentColor" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
