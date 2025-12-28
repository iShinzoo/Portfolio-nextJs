"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import MemoryGame from "./games/memory-game"
import SnakeGame from "./games/snake-game"
import TypingGame from "./games/typing-game"

type GameType = "memory" | "snake" | "typing" | null

export default function GamesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeGame, setActiveGame] = useState<GameType>(null)

  return (
    <section id="games" className="py-24 px-6 bg-white w-full border-b-2 border-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8E4F8] rounded-full text-sm font-medium mb-6 border-2 border-black">
            <span className="text-lg">✦</span> INTERACTIVE GAMES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">Take a break and have some fun!</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Try these mini-games while you explore my portfolio. They showcase my love for building interactive
            experiences.
          </p>
        </motion.div>

        {!activeGame ? (
          <div className="grid md:grid-cols-3 gap-6">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveGame("memory")}
              className="bg-[#E8E4F8] rounded-3xl p-8 text-left hover:shadow-lg transition-all border-2 border-black"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Memory Match</h3>
              <p className="text-gray-600">
                Test your memory by matching pairs of tech icons. Can you beat your best time?
              </p>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveGame("snake")}
              className="bg-[#D4F5E9] rounded-3xl p-8 text-left hover:shadow-lg transition-all border-2 border-black"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🐍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Crypto Snake</h3>
              <p className="text-gray-600">
                Classic snake game with a crypto twist! Collect tokens and grow your blockchain.
              </p>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveGame("typing")}
              className="bg-[#FDE8E8] rounded-3xl p-8 text-left hover:shadow-lg transition-all border-2 border-black"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">⌨️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Code Typer</h3>
              <p className="text-gray-600">
                Type blockchain terms as fast as you can! Test your typing speed and accuracy.
              </p>
            </motion.button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#E8E4F8] rounded-3xl p-8 border border-gray-200"
          >
            <button
              onClick={() => setActiveGame(null)}
              className="mb-6 px-4 py-2 bg-white rounded-xl font-medium hover:bg-gray-100 transition-colors border border-gray-200"
            >
              ← Back to Games
            </button>

            {activeGame === "memory" && <MemoryGame />}
            {activeGame === "snake" && <SnakeGame />}
            {activeGame === "typing" && <TypingGame />}
          </motion.div>
        )}
      </div>
    </section>
  )
}
