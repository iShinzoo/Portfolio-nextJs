"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGit, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiKotlin, SiSolidity, SiFirebase, SiSupabase, SiMysql, SiAndroidstudio, SiPostman, SiRemix } from "react-icons/si";

const SKILLS_DATA = [
  {
    name: "Programming Languages",
    items: [
      { name: "Kotlin", icon: <SiKotlin className="w-12 h-12 text-purple-500" /> },
      { name: "Solidity", icon: <SiSolidity className="w-12 h-12 text-gray-400" /> },
      { name: "HTML", icon: <FaHtml5 className="w-12 h-12 text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
      { name: "Java", icon: <FaJava className="w-12 h-12 text-red-500" /> },
      { name: "Python", icon: <FaPython className="w-12 h-12 text-yellow-500" /> },
      { name: "JavaScript", icon: <FaJs className="w-12 h-12 text-yellow-400" /> },
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      { name: "React Js", icon: <FaReact className="w-12 h-12 text-blue-500" /> },
      { name: "Node Js", icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
    ],
  },
  {
    name: "Database & Tools",
    items: [
      { name: "Firebase", icon: <SiFirebase className="w-12 h-12 text-yellow-500" /> },
      // { name: "Supabase", icon: <SiSupabase className="w-12 h-12 text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="w-12 h-12 text-blue-600" /> },
      { name: "Git", icon: <FaGit className="w-12 h-12 text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="w-12 h-12 text-white" /> }, // Fixed GitHub icon color
      { name: "Android Studio", icon: <SiAndroidstudio className="w-12 h-12 text-green-500" /> },
      { name: "Postman", icon: <SiPostman className="w-12 h-12 text-orange-500" /> },
      { name: "Remix IDE", icon: <SiRemix className="w-12 h-12 text-blue-400" /> },
    ],
  },
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="space-y-12">
          {SKILLS_DATA.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-900 rounded-lg p-8" // Increased width to match education box
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-6">{category.name}</h3>
              <div className="flex flex-wrap gap-4">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="flex flex-col items-center justify-center p-10 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                  >
                    <div className="mb-3">
                      {skill.name === "GitHub" ? (
                        <FaGithub className="w-12 h-12 text-white" /> // Fixed GitHub icon visibility
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;