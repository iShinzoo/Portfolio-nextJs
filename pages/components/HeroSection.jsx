"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownloadCV = () => {
    window.open("https://drive.google.com/uc?export=download&id=1scnLV8hzf1xUdkkPDvqV96OUtTZBAuxi", "_blank");
  };

  const handleSocialClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      <div className="w-full max-w-4xl mx-auto px-4 py-8 relative z-10">
        
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center relative"
            >
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400/80">
                  Hello, I&apos;m
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-purple-400/80"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
              
              <div className="h-20 md:h-24 lg:h-32 mt-8">
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
                  className="text-white inline-block text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400/80"
                />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mb-12 text-center leading-relaxed"
            >
              Android & Blockchain Developer, Tech Enthusiast Building Future Innovations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row gap-6 justify-center items-center w-full md:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSocialClick}
                className="group relative w-full md:w-48 px-8 py-4 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-purple-400/80 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
                <span className="relative text-white font-semibold tracking-wider">
                  Socials
                </span>
                <div className="absolute inset-0 rounded-xl ring-1 ring-purple-500/50 group-hover:ring-purple-500 transition-all duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="group relative w-full md:w-48 px-8 py-4 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
                <span className="relative text-white font-semibold tracking-wider">
                  Download CV
                </span>
                <div className="absolute inset-0 rounded-xl ring-1 ring-gray-500/50 group-hover:ring-purple-500 transition-all duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
};

export default HeroSection;