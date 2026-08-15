"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  letterDelay?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function TextReveal({
  children,
  className,
  delay = 0,
  letterDelay = 0.03,
  once = true,
  as: Component = "p",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  const words = children.split(" ")

  let letterIndex = 0

  const MotionComponent = motion[Component]

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: letterDelay,
            delayChildren: delay,
          },
        },
      }}
      aria-label={children}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((letter) => {
            const currentIndex = letterIndex++
            return (
              <motion.span
                key={currentIndex}
                className="inline-block"
                variants={{
                  hidden: {
                    y: "100%",
                    opacity: 0,
                  },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {letter}
              </motion.span>
            )
          })}
          {wordIndex < words.length - 1 && (
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </MotionComponent>
  )
}
