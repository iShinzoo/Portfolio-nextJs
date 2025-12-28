"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function SectionDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="relative py-8 overflow-hidden w-full">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-px bg-gray-800 w-full"
        style={{ transformOrigin: "left" }}
      />
      {/* Simple full-width horizontal line like Meelo design */}
      {/* <motion.div
      //   initial={{ opacity: 0, scale: 0 }}
      //   animate={isInView ? { opacity: 1, scale: 1 } : {}}
      //   transition={{ duration: 0.4, delay: 0.5 }}
      //   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      // >
      //   <svg className="w-8 h-8 text-gray-400" viewBox="0 0 40 40" fill="none">
      //     <path d="M20 5 Q25 15 20 20 Q15 25 20 35" stroke="currentColor" strokeWidth="1.5" fill="none" />
      //   </svg>
      // </motion.div> */}
    </div>
  )
}
