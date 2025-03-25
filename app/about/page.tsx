"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageTransition from "@/components/page-transition"

export default function AboutPage() {
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
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            I'm a passionate developer with expertise in Web3 and Android development. My journey in tech has led me to
            work on a diverse range of projects and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
              <Image
                src="/images/kk.jpg"
                alt="Krishna Thakur"
                width={400}
                height={400}
                className="rounded-lg relative z-10 object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              onMouseEnter={() => window.enterTextCursor?.()}
              onMouseLeave={() => window.leaveTextCursor?.()}
            >
              Who I Am
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm a full-stack developer with expertise in Web3 and Android development. Currently pursuing my Bachelor
              of Technology in Computer Science and Engineering at Jaypee University Of Engineering and Technology,
              Guna, India.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in Solidity, Kotlin, and modern JavaScript frameworks, with a strong focus on creating
              accessible, performant, and visually appealing user interfaces.
            </p>
            <p className="text-muted-foreground mb-8">
              When I'm not coding, you can find me exploring new technologies, participating in hackathons, and
              contributing to open-source projects.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">Guna, India</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">
                  B.Tech in CSE
                  <br />
                  JUET (2026)
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2
            className="text-3xl font-bold mb-8 text-center"
            onMouseEnter={() => window.enterTextCursor?.()}
            onMouseLeave={() => window.leaveTextCursor?.()}
          >
            Education
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-8 border-l border-muted pb-6"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              <h3 className="font-bold text-lg">Bachelor of Technology in Computer Science and Engineering</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-muted-foreground">Jaypee University Of Engineering and Technology</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full">2022 - 2026</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently pursuing my degree with a focus on software development, blockchain technology, and mobile
                application development.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2
            className="text-3xl font-bold mb-8 text-center"
            onMouseEnter={() => window.enterTextCursor?.()}
            onMouseLeave={() => window.leaveTextCursor?.()}
          >
            Tech Stack
          </h2>

          <Tabs defaultValue="web3" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="web3" className="text-lg">
                Web3
              </TabsTrigger>
              <TabsTrigger value="android" className="text-lg">
                Android
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web3" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {web3Technologies.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="android" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {androidTechnologies.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2
            className="text-3xl font-bold mb-8 text-center"
            onMouseEnter={() => window.enterTextCursor?.()}
            onMouseLeave={() => window.leaveTextCursor?.()}
          >
            Achievements
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card border rounded-lg p-6"
                onMouseEnter={() => window.enterTextCursor?.()}
                onMouseLeave={() => window.leaveTextCursor?.()}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{achievement.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}

// Tech Card Component
function TechCard({ tech, index }: { tech: Technology; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-card border rounded-lg p-6 flex flex-col items-center text-center group"
      onMouseEnter={() => window.enterTextCursor?.()}
      onMouseLeave={() => window.leaveTextCursor?.()}
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:from-primary/30 group-hover:to-purple-500/30 transition-all duration-300">
        <tech.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="font-medium">{tech.name}</h3>
    </motion.div>
  )
}

// Sample Data
interface Technology {
  name: string
  icon: any
}

interface Achievement {
  title: string
  description: string
  date: string
}

const web3Technologies: Technology[] = [
  { name: "Solidity", icon: (props: any) => <div {...props}>SOL</div> },
  { name: "Ethereum", icon: (props: any) => <div {...props}>ETH</div> },
  { name: "Web3.js", icon: (props: any) => <div {...props}>W3</div> },
  { name: "Ethers.js", icon: (props: any) => <div {...props}>EJS</div> },
  { name: "Hardhat", icon: (props: any) => <div {...props}>HH</div> },
  { name: "RainbowKit", icon: (props: any) => <div {...props}>RK</div> },
  { name: "IPFS", icon: (props: any) => <div {...props}>IPFS</div> },
  { name: "MetaMask", icon: (props: any) => <div {...props}>MM</div> },
]

const androidTechnologies: Technology[] = [
  { name: "Kotlin", icon: (props: any) => <div {...props}>KT</div> },
  { name: "Jetpack Compose", icon: (props: any) => <div {...props}>JC</div> },
  { name: "MVVM", icon: (props: any) => <div {...props}>MV</div> },
  { name: "Firebase", icon: (props: any) => <div {...props}>FB</div> },
  { name: "Hilt", icon: (props: any) => <div {...props}>HT</div> },
  { name: "Coroutines", icon: (props: any) => <div {...props}>CO</div> },
  { name: "Room DB", icon: (props: any) => <div {...props}>RM</div> },
  { name: "Retrofit", icon: (props: any) => <div {...props}>RT</div> },
]

const achievements: Achievement[] = [
  {
    title: "Finalist at RIDE Hack 2024",
    description: "Research, Innovation, Development and Entrepreneurship Hackathon",
    date: "2024",
  },
  {
    title: "Winner at Kodeathon 2022",
    description: "Competitive coding competition",
    date: "2022",
  },
]

