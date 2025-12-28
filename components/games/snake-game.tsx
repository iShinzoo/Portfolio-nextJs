"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"

const GRID_SIZE = 20
const CELL_SIZE = 20
const INITIAL_SPEED = 150

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"
type Position = { x: number; y: number }

const cryptoTokens = ["⟠", "₿", "◎", "Ξ"]

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }])
  const [food, setFood] = useState<Position>({ x: 15, y: 10 })
  const [foodToken, setFoodToken] = useState(cryptoTokens[0])
  const [direction, setDirection] = useState<Direction>("RIGHT")
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null)
  const directionRef = useRef<Direction>("RIGHT")

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
    setFood(newFood)
    setFoodToken(cryptoTokens[Math.floor(Math.random() * cryptoTokens.length)])
  }, [])

  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }])
    setDirection("RIGHT")
    directionRef.current = "RIGHT"
    setGameOver(false)
    setScore(0)
    generateFood()
    setIsPlaying(true)
  }, [generateFood])

  const moveSnake = useCallback(() => {
    if (gameOver) return

    setSnake((prevSnake) => {
      const head = { ...prevSnake[0] }
      const currentDirection = directionRef.current

      switch (currentDirection) {
        case "UP":
          head.y -= 1
          break
        case "DOWN":
          head.y += 1
          break
        case "LEFT":
          head.x -= 1
          break
        case "RIGHT":
          head.x += 1
          break
      }

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true)
        setIsPlaying(false)
        setHighScore((prev) => Math.max(prev, score))
        return prevSnake
      }

      // Check self collision
      if (prevSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true)
        setIsPlaying(false)
        setHighScore((prev) => Math.max(prev, score))
        return prevSnake
      }

      const newSnake = [head, ...prevSnake]

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 10)
        generateFood()
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [food, gameOver, generateFood, score])

  useEffect(() => {
    if (isPlaying && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, INITIAL_SPEED)
    }
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current)
    }
  }, [isPlaying, gameOver, moveSnake])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return

      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (directionRef.current !== "DOWN") {
            directionRef.current = "UP"
            setDirection("UP")
          }
          break
        case "ArrowDown":
        case "s":
          if (directionRef.current !== "UP") {
            directionRef.current = "DOWN"
            setDirection("DOWN")
          }
          break
        case "ArrowLeft":
        case "a":
          if (directionRef.current !== "RIGHT") {
            directionRef.current = "LEFT"
            setDirection("LEFT")
          }
          break
        case "ArrowRight":
        case "d":
          if (directionRef.current !== "LEFT") {
            directionRef.current = "RIGHT"
            setDirection("RIGHT")
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isPlaying])

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-8">
        <div className="text-center">
          <div className="text-sm text-gray-500">Score</div>
          <div className="text-3xl font-bold text-gray-900">{score}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">High Score</div>
          <div className="text-3xl font-bold text-[#7C6CEB]">{highScore}</div>
        </div>
      </div>

      <div
        className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden"
        style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
            <div key={i} className="border border-gray-100" />
          ))}
        </div>

        {/* Snake */}
        {snake.map((segment, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute rounded-sm ${index === 0 ? "bg-[#7C6CEB]" : "bg-[#9B8CD8]"}`}
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE + 1,
              top: segment.y * CELL_SIZE + 1,
            }}
          />
        ))}

        {/* Food */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute flex items-center justify-center text-lg"
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
          }}
        >
          {foodToken}
        </motion.div>

        {/* Game Over / Start Overlay */}
        {(!isPlaying || gameOver) && (
          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center gap-4">
            {gameOver ? (
              <>
                <div className="text-2xl font-bold text-gray-900">Game Over!</div>
                <div className="text-gray-600">Score: {score}</div>
              </>
            ) : (
              <div className="text-xl font-bold text-gray-900">Crypto Snake</div>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
              className="px-6 py-3 bg-[#7C6CEB] text-white rounded-xl font-medium"
            >
              {gameOver ? "Play Again" : "Start Game"}
            </motion.button>
          </div>
        )}
      </div>

      {/* Mobile Controls */}
      <div className="grid grid-cols-3 gap-2 md:hidden">
        <div />
        <button
          onClick={() => {
            if (directionRef.current !== "DOWN") {
              directionRef.current = "UP"
              setDirection("UP")
            }
          }}
          className="p-4 bg-gray-100 rounded-xl active:bg-gray-200"
        >
          ↑
        </button>
        <div />
        <button
          onClick={() => {
            if (directionRef.current !== "RIGHT") {
              directionRef.current = "LEFT"
              setDirection("LEFT")
            }
          }}
          className="p-4 bg-gray-100 rounded-xl active:bg-gray-200"
        >
          ←
        </button>
        <button
          onClick={() => {
            if (directionRef.current !== "UP") {
              directionRef.current = "DOWN"
              setDirection("DOWN")
            }
          }}
          className="p-4 bg-gray-100 rounded-xl active:bg-gray-200"
        >
          ↓
        </button>
        <button
          onClick={() => {
            if (directionRef.current !== "LEFT") {
              directionRef.current = "RIGHT"
              setDirection("RIGHT")
            }
          }}
          className="p-4 bg-gray-100 rounded-xl active:bg-gray-200"
        >
          →
        </button>
      </div>

      <p className="text-gray-500 text-sm text-center">
        Use arrow keys or WASD to control the snake. Collect crypto tokens to grow!
      </p>
    </div>
  )
}
