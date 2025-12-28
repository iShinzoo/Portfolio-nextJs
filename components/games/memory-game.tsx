"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const icons = ["⚛️", "🔷", "📦", "🔐", "💎", "🌐", "🔥", "⚡"]

interface Card {
  id: number
  icon: string
  isFlipped: boolean
  isMatched: boolean
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  const initializeGame = () => {
    const shuffled = [...icons, ...icons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon,
        isFlipped: false,
        isMatched: false,
      }))
    setCards(shuffled)
    setFlippedCards([])
    setMoves(0)
    setMatches(0)
    setGameComplete(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards
      if (cards[first].icon === cards[second].icon) {
        setCards((prev) => prev.map((card, i) => (i === first || i === second ? { ...card, isMatched: true } : card)))
        setMatches((m) => m + 1)
        setFlippedCards([])
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, i) => (i === first || i === second ? { ...card, isFlipped: false } : card)),
          )
          setFlippedCards([])
        }, 1000)
      }
      setMoves((m) => m + 1)
    }
  }, [flippedCards, cards])

  useEffect(() => {
    if (matches === icons.length && matches > 0) {
      setGameComplete(true)
    }
  }, [matches])

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].isFlipped || cards[index].isMatched) return

    setCards((prev) => prev.map((card, i) => (i === index ? { ...card, isFlipped: true } : card)))
    setFlippedCards((prev) => [...prev, index])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Memory Match</h3>
          <p className="text-gray-600">
            Moves: {moves} | Matches: {matches}/{icons.length}
          </p>
        </div>
        <button
          onClick={initializeGame}
          className="px-4 py-2 bg-[#7C6CEB] text-white rounded-xl font-medium hover:bg-[#6B5CE0] transition-colors"
        >
          Restart
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {cards.map((card, index) => (
          <motion.button
            key={card.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCardClick(index)}
            className={`aspect-square rounded-2xl text-3xl flex items-center justify-center transition-all ${
              card.isFlipped || card.isMatched ? "bg-[#E8E4F8]" : "bg-[#7C6CEB] hover:bg-[#6B5CE0]"
            } ${card.isMatched ? "opacity-60" : ""}`}
          >
            {card.isFlipped || card.isMatched ? card.icon : "?"}
          </motion.button>
        ))}
      </div>

      {gameComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-6 bg-[#D4F5E9] rounded-2xl"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-2">🎉 Congratulations!</h4>
          <p className="text-gray-700">You completed the game in {moves} moves!</p>
        </motion.div>
      )}
    </div>
  )
}
