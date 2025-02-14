import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaNodeJs,
  FaHardHat,
} from "react-icons/fa";
import {
  SiKotlin,
  SiSolidity,
  SiFirebase,
  SiMysql,
  SiAndroidstudio,
  SiPostman,
  SiRemix,
  SiJetpackcompose,
  SiXml,
} from "react-icons/si";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const SKILLS_DATA = [
    {
      name: "Programming Languages",
      orbits: [
        {
          radius: 130,
          speed: 20,
          items: [
            {
              name: "Kotlin",
              icon: <SiKotlin className="w-12 h-12 text-purple-500" />,
            },
            {
              name: "JavaScript",
              icon: <FaJs className="w-12 h-12 text-yellow-400" />,
            },
            {
              name: "Java",
              icon: <FaJava className="w-12 h-12 text-red-500" />,
            },
          ],
        },
        {
          radius: 220,
          speed: 20,
          items: [
            {
              name: "HTML",
              icon: <FaHtml5 className="w-12 h-12 text-orange-500" />,
            },
            {
              name: "CSS",
              icon: <FaCss3Alt className="w-12 h-12 text-blue-500" />,
            },
            {
              name: "Solidity",
              icon: <SiSolidity className="w-12 h-12 text-gray-400" />,
            },
          ],
        },
      ],
    },
    {
      name: "Frameworks & Libraries",
      orbits: [
        {
          radius: 150,
          speed: 20,
          items: [
            {
              name: "React Js",
              icon: <FaReact className="w-12 h-12 text-blue-500" />,
            },
            {
              name: "Node Js",
              icon: <FaNodeJs className="w-12 h-12 text-green-500" />,
            },
          ],
        },
        {
          radius: 240,
          speed: 20,
          items: [
            {
              name: "Jetpack Compose",
              icon: <SiJetpackcompose className="w-12 h-12 text-blue-500" />,
            },
            {
              name: "XML",
              icon: <SiXml className="w-12 h-12 text-green-500" />,
            },
          ],
        },
      ],
    },
    {
      name: "Database & Tools",
      orbits: [
        {
          radius: 140,
          speed: 20,
          items: [
            {
              name: "Firebase",
              icon: <SiFirebase className="w-12 h-12 text-yellow-500" />,
            },
            {
              name: "MySQL",
              icon: <SiMysql className="w-12 h-12 text-blue-600" />,
            },
            { name: "Git", icon: <FaGit className="w-12 h-12 text-red-500" /> },
          ],
        },
        {
          radius: 230,
          speed: 20,
          items: [
            {
              name: "GitHub",
              icon: <FaGithub className="w-12 h-12 text-white" />,
            },
            {
              name: "Android Studio",
              icon: <SiAndroidstudio className="w-12 h-12 text-green-500" />,
            },
            {
              name: "Postman",
              icon: <SiPostman className="w-12 h-12 text-orange-500" />,
            },
          ],
        },
        {
          radius: 320,
          speed: 20,
          items: [
            {
              name: "Remix IDE",
              icon: <SiRemix className="w-12 h-12 text-blue-400" />,
            },
            {
              name: "Hardhat",
              icon: <FaHardHat className="w-12 h-12 text-green-500" />,
            },
          ],
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-[#0000] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Tech Stack
        </motion.h2>

        <div className="flex justify-center gap-4 mb-16">
          {SKILLS_DATA.map((category, idx) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                activeCategory === idx
                  ? "bg-purple-500/20 border-2 border-purple-500 shadow-lg shadow-purple-500/20"
                  : "bg-gray-800/30 border border-purple-500/30 hover:bg-purple-500/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="relative h-[700px] flex items-center justify-center"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Orbit rings */}
          {SKILLS_DATA[activeCategory].orbits.map((orbit, idx) => (
            <div
              key={`orbit-${idx}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
                       border border-purple-500/30 transition-all duration-500"
              style={{
                width: orbit.radius * 2,
                height: orbit.radius * 2,
                boxShadow: `0 0 20px rgba(168, 85, 247, 0.1)`,
                background: `radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)`,
              }}
            />
          ))}

          {/* Central core */}
          <motion.div
            className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-600/80 to-purple-400/80 
                       flex items-center justify-center backdrop-blur-sm z-10 border-4 border-purple-500/30
                       shadow-lg shadow-purple-500/30"
            animate={{
              scale: [1, 1.05, 1],
              rotate: 360,
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          >
            <div className="text-2xl font-bold text-white text-center p-4">
              {SKILLS_DATA[activeCategory].name}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {SKILLS_DATA[activeCategory].orbits.map((orbit, orbitIdx) => (
                <React.Fragment key={`orbit-group-${orbitIdx}`}>
                  {orbit.items.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      className="absolute left-1/2 top-1/2"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: orbit.speed,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        width: orbit.radius * 2,
                        height: orbit.radius * 2,
                        marginLeft: -orbit.radius,
                        marginTop: -orbit.radius,
                        rotate: (360 / orbit.items.length) * idx,
                      }}
                    >
                      <motion.div
                        className="absolute"
                        style={{
                          left: "100%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          zIndex: 10,
                        }}
                      >
                        <motion.div
                          className="p-4 rounded-xl backdrop-blur-md border-2 border-purple-500/30
                                     bg-gray-900/40 transition-all duration-300 relative"
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: orbit.speed,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            transformOrigin: "center center",
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
