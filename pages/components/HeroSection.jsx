"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I&apos;m
          </span>
          <div className="h-20 md:h-24 lg:h-32 mt-4">
            <TypeAnimation
              sequence={[
                "Krishna Thakur",
                2000,
                "@i_krsna4",
                2000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="text-white inline-block text-4xl md:text-5xl lg:text-6xl"
            />
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-8"
        >
          Android & Blockchain Developer, Tech Enthusiast Building Future Innovations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300"
          >
            Socials
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300"
          >
            Download CV
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;