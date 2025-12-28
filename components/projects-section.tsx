"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "pump.flawk",
    description:
      "A Memecoin Launchpad platform that allows users to create, launch and manage their own memecoins.",
    tech: ["Solidity", "Next.js", "Hardhat", "RainbowKit", "Tailwind CSS"],
    github: "https://github.com/iShinzoo/pump.flawk",
    live: "https://pumpflawk.vercel.app/",
    image: "/pumpMock.png",
  },
  {
    title: "Buy Me Token",
    description:
      "A decentralized tipping platform leveraging Solidity, Next.js, and Hardhat for Ethereum-based payments.",
    tech: ["Solidity", "Next.js", "Hardhat", "RainbowKit", "Tailwind CSS"],
    github: "https://github.com/iShinzoo/BuyMeToken",
    live: "https://buy-me-token.vercel.app/",
    image: "/BuyMeMock.png",
  },
  {
    title: "Supply Chain Management Dapp",
    description:
      "A blockchain-powered supply chain solution ensuring tamper-proof shipment tracking and transparent record-keeping.",
    tech: ["Solidity", "Next.js", "RainbowKit", "Ethers.js", "Hardhat"],
    github: "https://github.com/iShinzoo/SupplyChainDapp",
    live: "",
    image: "/images/projects/5.png",
  },
  {
    title: "Cry Dape SVG",
    description:
      "An NFT minting platform where users can generate unique, algorithmically designed SVG NFTs on the blockchain.",
    tech: ["Solidity", "ERC-721", "Next.js", "RainbowKit", "Vercel"],
    github: "https://github.com/iShinzoo/CryDapeSVG",
    live: "https://crydapesvgnfts.vercel.app/",
    image: "/images/projects/CdpMock.png",
  },
  {
    title: "Trip Drop",
    description:
      "A peer-to-peer delivery platform empowering users to outsource deliveries and earn income, enhancing community-based logistics.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Hilt", "Coroutines"],
    github: "https://github.com/iShinzoo/TripDrop",
    live: "",
    image: "/tripmock.png",
  },
  {
    title: "Transcribe Genius",
    description:
      "An AI-powered transcription tool enabling users to extract high-accuracy YouTube transcriptions and generate tailored content.",
    tech: ["Kotlin", "Jetpack Compose", "Retrofit", "MVVM"],
    github: "https://github.com/iShinzoo/TranscribeGenius",
    live: "https://github.com/iShinzoo/TranscribeGenius/releases/tag/v1.0",
    image: "/images/projects/tgMock.png",
  },
  {
    title: "Chatter Box",
    description:
      "A dynamic chat platform supporting instant messaging with Firestore Database, ensuring real-time data flow without delays.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Hilt", "Coil"],
    github: "https://github.com/iShinzoo/ChattingApp",
    live: "https://github.com/iShinzoo/ChattingApp/releases/tag/v1.0",
    image: "/ChatMock.png",
  },
  {
    title: "News Now",
    description: "App delivering real-time updates from around the world.",
    tech: ["Kotlin", "Jetpack Compose", "Hilt", "Retrofit"],
    github: "https://github.com/iShinzoo/NewsNow_app",
    live: "https://github.com/iShinzoo/NewsNow_app/releases/tag/V1.0",
    image: "NewsMock.png",
  },
  {
    title: "Song Recommendation",
    description: "Song recommendation system using machine learning.",
    tech: ["Python", "OpenCV", "Pandas", "TensorFlow"],
    github: "https://github.com/iShinzoo/SongRecommendation",
    live: "https://github.com/iShinzoo/SongRecommendation",
    image: "/images/projects/5.png",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="py-24 px-6 bg-white w-full border-b-2 border-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <svg className="w-16 h-16 text-gray-800" viewBox="0 0 60 60" fill="none">
              <path d="M10 50 Q30 30 50 10" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium border-2 border-black">
              <span className="text-lg">✦</span> MY WORKS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
            Check out some of my awesome
            <br />
            projects with creative ideas.
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-3xl overflow-hidden border-2 border-black shadow-sm"
            >
              {/* Project Screenshot Preview */}
              <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <Image
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title}
                  fill
                  className="object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{currentProject.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-3xl">{currentProject.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#E8E4F8] rounded-full text-sm font-medium text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-4">

                  {currentProject.github && currentProject.github !== "#" && (
                    <Link
                      href={currentProject.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-medium">GitHub</span>
                    </Link>
                  )}

                  {currentProject.live && currentProject.live !== "#" && (
                    <Link
                      href={currentProject.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-medium">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevProject}
            className="absolute left-4 top-[200px] md:top-[250px] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextProject}
            className="absolute right-4 top-[200px] md:top-[250px] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-gray-900 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
