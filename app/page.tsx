"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/particle-background";
import tripMock from "../public/tripmock.png";
import pumpMock from "../public/pumpMock.png";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Particle background */}
      <ParticleBackground />

      {/* Floating background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black to-slate-950"
          style={{ y: backgroundY }}
        />
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/20"
              initial={{
                width: "200px", // Use static initial values
                height: "200px",
                left: "50%",
                top: "50%",
                filter: "blur(40px)",
                opacity: 0.3,
              }}
              animate={{
                x: [0, 10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              className="text-sm font-mono mb-4 text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, my name is
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block">Krishna Thakur</span>
              <span className="block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I build exceptional digital experiences with modern web
              technologies. Specializing in creating responsive, accessible
              applications with expertise in Web3 and Android development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/projects">
                <Button
                  size="lg"
                  className="group rounded-full relative overflow-hidden"
                >
                  <span className="relative z-10">View My Projects</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 group-hover:opacity-0 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full group"
                >
                  <span>About Me</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          className="fixed left-8 bottom-0 hidden md:flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Link
            href="https://github.com/iShinzoo"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-200"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/krishnathakur1"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-200"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/i_krsna4"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-200"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <div className="h-24 w-px bg-muted-foreground/50"></div>
        </motion.div>

        {/* Email link */}
        <motion.div
          className="fixed right-8 bottom-0 hidden md:flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Link
            href="mailto:krishe7t8rr@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors tracking-wider [writing-mode:vertical-lr] hover:-translate-y-1 duration-200"
          >
            krishe7t8rr@gmail.com
          </Link>
          <div className="h-24 w-px bg-muted-foreground/50"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ y: textY }}
        >
          <div className="flex flex-col items-center">
            <div className="text-sm font-mono mb-2">Scroll Down</div>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
              <motion.div
                className="w-1 h-1 bg-primary rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 md:py-32 relative">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <Link href="/projects">
              <Button variant="ghost" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary/10"
                  style={{
                    width: "200px",
                    height: "200px",
                    left: "50%",
                    top: "50%",
                    filter: "blur(60px)",
                  }}
                  animate={{
                    x: [0, 10, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Interested in working together?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full group relative overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 group-hover:opacity-0 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Mail className="ml-2 h-4 w-4 relative z-10" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Featured Project Card Component
function FeaturedProjectCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group bg-card/50 backdrop-blur-sm border rounded-xl overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={340}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.shortDescription}
            </p>
            <div className="flex gap-3">
              <Link href={`/projects/${project.slug}`}>
                <Button size="sm" variant="secondary" className="rounded-full">
                  View Details <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="outline" className="rounded-full">
                  Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Sample Data
interface FeaturedProject {
  title: string;
  slug: string;
  shortDescription: string;
  image: StaticImageData;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: "web3" | "android" | "web";
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "pump.flawk",
    slug: "pump.flwak",
    shortDescription:
      "A Memecoin Launchpad platform that allows users to create, launch and manage their own memecoins.",
    image: pumpMock,
    technologies: [
      "Solidity",
      "Next.js",
      "Hardhat",
      "RainbowKit",
      "Tailwind CSS",
    ],
    liveUrl: "https://github.com/iShinzoo/Meme-Coin-Launchpad",
    githubUrl: "https://github.com/iShinzoo/Meme-Coin-Launchpad",
    category: "web3",
  },
  {
    title: "Trip Drop",
    slug: "trip-drop",
    shortDescription:
      "A peer-to-peer delivery platform empowering users to outsource deliveries and earn income.",
    image: tripMock,
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "MVVM",
      "Hilt",
      "Coroutines",
    ],
    liveUrl: "https://github.com/iShinzoo/TripDrop",
    githubUrl: "https://github.com/iShinzoo/TripDrop",
    category: "android",
  },
];
