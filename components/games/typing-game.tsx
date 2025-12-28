"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

const words = [
  "blockchain",
  "ethereum",
  "solidity",
  "smart contract",
  "web3",
  "defi",
  "nft",
  "token",
  "wallet",
  "consensus",
  "mining",
  "staking",
  "liquidity",
  "dapp",
  "metamask",
  "hardhat",
  "foundry",
  "ipfs",
  "polygon",
  "arbitrum",
]

export default function TypingGame() {
  const [currentWord, setCurrentWord] = useState("")
  const [input, setInput] = useState("")
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [isPlaying, setIsPlaying] = useState(false)
  const [highScore, setHighScore] = useState(0)

  const getNewWord = useCallback(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    setCurrentWord(randomWord)
    setInput("")
  }, [])

  const startGame = () => {
    setScore(0)
    setTimeLeft(30)
    setIsPlaying(true)
    getNewWord()
  }

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setIsPlaying(false)
      if (score > highScore) {
        setHighScore(score)
      }
    }
  }, [isPlaying, timeLeft, score, highScore])

  useEffect(() => {
    if (input.toLowerCase() === currentWord.toLowerCase() && isPlaying) {
      setScore((prev) => prev + 1)
      getNewWord()
    }
  }, [input, currentWord, isPlaying, getNewWord])

  const getLetterClass = (index: number) => {
    if (index >= input.length) return "text-gray-400"
    if (input[index].toLowerCase() === currentWord[index].toLowerCase()) {
      return "text-green-500"
    }
    return "text-red-500"
  }

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Code Typer</h3>
      <p className="text-gray-600 mb-6">Type blockchain terms as fast as you can!</p>

      {!isPlaying ? (
        <div className="space-y-6">
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#7C6CEB]">{score}</p>
              <p className="text-sm text-gray-500">Last Score</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">{highScore}</p>
              <p className="text-sm text-gray-500">High Score</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="px-8 py-3 bg-gray-900 text-white rounded-xl font-medium"
          >
            Start Game
          </motion.button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#7C6CEB]">{score}</p>
              <p className="text-sm text-gray-500">Score</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">{timeLeft}s</p>
              <p className="text-sm text-gray-500">Time Left</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="text-4xl font-mono font-bold mb-6 tracking-wider">
              {currentWord.split("").map((letter, index) => (
                <span key={index} className={getLetterClass(index)}>
                  {letter}
                </span>
              ))}
            </div>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full max-w-md px-6 py-4 text-xl font-mono text-center border-2 border-gray-200 rounded-xl focus:border-[#7C6CEB] focus:outline-none"
              placeholder="Type here..."
              autoFocus
            />
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-[#7C6CEB]"
              initial={{ width: "100%" }}
              animate={{ width: `${(timeLeft / 30) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
