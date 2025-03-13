"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageTransition from "@/components/page-transition"

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const filteredProjects = allProjects.filter((project) => {
    // Filter by category
    if (filter !== "all" && project.category !== filter) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !project.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    return true
  })

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
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of my work across Web3, Android, and full-stack development. Browse through the projects to see
            my skills and experience in action.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="web3">Web3</SelectItem>
                <SelectItem value="android">Android</SelectItem>
                <SelectItem value="web">Web</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-12"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  )
}

// Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-card/50 backdrop-blur-sm border rounded-xl overflow-hidden h-full flex flex-col"
      onMouseEnter={() => window.enterTextCursor?.()}
      onMouseLeave={() => window.leaveTextCursor?.()}
    >
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={340}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-none text-white">
            {project.category === "web3" ? "Web3" : project.category === "android" ? "Android" : "Web"}
          </Badge>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <div className="flex gap-3 mt-auto pt-4">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="default" className="rounded-full">
              GitHub <Github className="ml-1 h-3 w-3" />
            </Button>
          </Link>
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="rounded-full">
                <ExternalLink className="mr-1 h-3 w-3" /> Live
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Sample Data
interface Project {
  title: string
  slug: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: "web3" | "android" | "web"
}

const allProjects: Project[] = [
  {
    title: "pump.flawk",
    slug: "pump.flwak",
    description:
      "A Memecoin Launchpad platform that allows users to create, launch and manage their own memecoins.",
    image: "/pumpMock.png",
    technologies: ["Solidity", "Next.js", "Hardhat", "RainbowKit", "Tailwind CSS"],
    liveUrl: "https://github.com/iShinzoo/Meme-Coin-Launchpad",
    githubUrl: "https://github.com/iShinzoo/Meme-Coin-Launchpad",
    category: "web3",
  },
  {
    title: "Buy Me Token",
    slug: "buy-me-token",
    description:
      "A decentralized tipping platform leveraging Solidity, Next.js, and Hardhat for Ethereum-based payments.",
    image: "/BuyMeMock.png",
    technologies: ["Solidity", "Next.js", "Hardhat", "RainbowKit", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/iShinzoo/BuyMeToken",
    category: "web3",
  },
  {
    title: "Supply Chain Management Dapp",
    slug: "supply-chain-dapp",
    description:
      "A blockchain-powered supply chain solution ensuring tamper-proof shipment tracking and transparent record-keeping.",
    image: "/images/projects/5.png",
    technologies: ["Solidity", "Next.js", "RainbowKit", "Ethers.js", "Hardhat"],
    liveUrl: "",
    githubUrl: "https://github.com/iShinzoo/SupplyChainDapp",
    category: "web3",
  },
  {
    title: "Cry Dape SVG",
    slug: "cry-dape-svg",
    description:
      "An NFT minting platform where users can generate unique, algorithmically designed SVG NFTs on the blockchain.",
    image: "/images/projects/CdpMock.png",
    technologies: ["Solidity", "ERC-721", "Next.js", "RainbowKit", "Vercel"],
    liveUrl: "",
    githubUrl: "https://github.com/iShinzoo/CryDapeSVG",
    category: "web3",
  },
  {
    title: "Trip Drop",
    slug: "trip-drop",
    description:
      "A peer-to-peer delivery platform empowering users to outsource deliveries and earn income, enhancing community-based logistics.",
    image: "/tripMock.png",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Hilt", "Coroutines"],
    liveUrl: "",
    githubUrl: "https://github.com/iShinzoo/TripDrop",
    category: "android",
  },
  {
    title: "Transcribe Genius",
    slug: "transcribe-genius",
    description:
      "An AI-powered transcription tool enabling users to extract high-accuracy YouTube transcriptions and generate tailored content.",
    image: "/images/projects/tgMock.png",
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "MVVM"],
    liveUrl: "",
    githubUrl: "https://github.com/iShinzoo/TranscribeGenius",
    category: "android",
  },
  {
    title: "Chatter Box",
    slug: "chatter-box",
    description:
      "A dynamic chat platform supporting instant messaging with Firestore Database, ensuring real-time data flow without delays.",
    image: "/images/projects/ChatMock.png",
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Hilt", "Coil"],
    liveUrl: "",
    githubUrl: "https://github.com/iShinzoo/ChattingApp",
    category: "android",
  },
  {
    title: "News Now",
    slug: "news-now",
    description: "App delivering real-time updates from around the world.",
    image: "/images/projects/NewMock.png",
    technologies: ["Kotlin", "Jetpack compose", "Hilt", "Retrofit"],
    liveUrl: "https://github.com/iShinzoo/NewsNow_app/releases/tag/V1.0",
    githubUrl: "https://github.com/iShinzoo/NewsNow_app",
    category: "android",
  },
  {
    title: "Song Recommendation",
    slug: "song-recommendation",
    description: "Song recommendation system using ML",
    image: "/images/projects/5.png",
    technologies: ["Python", "openCV", "Pandas", "tenserflow"],
    liveUrl: "https://github.com/iShinzoo/SongRecommendation",
    githubUrl: "https://github.com/iShinzoo/SongRecommendation",
    category: "web",
  },
]

