"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    icon: GraduationCap,
    content: [
      {
        school: "Jaypee University of Engineering and Technology",
        degree: "Bachelor of Technology in Computer Science",
        duration: "2022 – 2026",
      },
    ],
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="min-h-screen text-white py-20 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg text-center mb-12"
        >
          I am a passionate Android Developer with expertise in crafting user-centric apps using Kotlin and Jetpack Compose. I am also expanding my skills into blockchain development, building smart contracts with Solidity, and developing decentralized apps (dApps) using React and Next.js. My goal is to merge cutting-edge technology with seamless user experiences.
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {TAB_DATA.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600/80 to-purple-400/80 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          {TAB_DATA.find((t) => t.id === activeTab).content.map((edu, idx) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold text-purple-400">{edu.school}</h3>
              <p className="text-gray-400 mt-2">{edu.degree}</p>
              <p className="text-gray-500 mt-1">{edu.duration}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;