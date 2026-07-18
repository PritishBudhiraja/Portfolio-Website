"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedUnderlineProps {
  className?: string
  delay?: number
  duration?: number
}

export function AnimatedUnderline({
  className = "",
  delay = 0.3,
  duration = 0.8,
}: AnimatedUnderlineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-1 w-20 bg-primary rounded-full"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </div>
  )
}
