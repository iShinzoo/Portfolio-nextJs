"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 bg-white w-full border-b-2 border-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-96 mx-auto">
              <div className="w-full h-full bg-[#9B8CD8] rounded-full overflow-hidden border-2 border-black">
                <img src="/port.jpeg" alt="Krishna Thakur" className="w-full h-full object-cover" />
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-4 -right-8 w-24 h-24"
              >
                <div className="w-full h-full rounded-full bg-[#D4F5E9] flex items-center justify-center relative border-2 border-black">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path id="aboutCircle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text className="text-[7px] fill-gray-700 font-medium tracking-widest">
                      <textPath href="#aboutCircle">★ 2+ YEARS ★ OF EXPERIENCE ★</textPath>
                    </text>
                  </svg>
                  <ArrowUpRight className="w-5 h-5 text-gray-700" />
                </div>
              </motion.div>

              <svg className="absolute -bottom-4 -left-8 w-20 h-16 text-gray-800" viewBox="0 0 80 60" fill="none">
                <path d="M5 40 Q20 20 40 35 T75 25" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M5 50 Q20 30 40 45 T75 35" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M5 60 Q20 40 40 55 T75 45" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute top-0 right-8 space-y-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4.5C12 4.5 8 8 8 12C8 16 12 19.5 12 19.5C12 19.5 16 16 16 12C16 8 12 4.5 12 4.5Z" />
                <path d="M12 4.5C12 4.5 8 8 8 12C8 16 12 19.5 12 19.5" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4.5C12 4.5 8 8 8 12C8 16 12 19.5 12 19.5C12 19.5 16 16 16 12C16 8 12 4.5 12 4.5Z" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8E4F8] rounded-full text-sm font-medium border-2 border-black">
              <span className="text-lg">✦</span> ABOUT
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">More about me</h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              {
                "I'm Krishna Thakur, a blockchain developer and CS student at Jaypee University of Engineering and Technology. I'm very passionate about building decentralized applications."
              }
            </p>

            <p className="text-gray-600 leading-relaxed">
              My journey in blockchain development has been a testament to my passion for crafting secure smart
              contracts, leveraging cutting-edge technologies like Solidity, Hardhat, and Web3.js, and fearlessly
              pushing the boundaries of decentralized innovation. I thrive on transforming ideas into impactful
              blockchain solutions.
            </p>

            <Link target="_blank" href="https://drive.google.com/file/d/1E0oH08RgpfTIrPu7Kas0PECW5MITy9pd/view?usp=drive_link">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8E4F8] rounded-full text-sm font-medium border-2 border-black">
              <span className="text-lg">✦</span> RESUME
            </span>
            </Link>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
