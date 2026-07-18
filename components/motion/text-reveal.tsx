"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  wordDelay?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function TextReveal({
  children,
  className,
  delay = 0,
  wordDelay = 0.05,
  once = true,
  as: Component = "p",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  const words = children.split(" ")

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
            staggerChildren: wordDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
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
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </MotionComponent>
  )
}

interface LineRevealProps {
  children: string
  className?: string
  delay?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function LineReveal({
  children,
  className,
  delay = 0,
  once = true,
  as: Component = "p",
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })

  const MotionComponent = motion[Component]

  return (
    <span className="inline-block overflow-hidden" ref={ref}>
      <MotionComponent
        className={className}
        initial={{ y: "100%", opacity: 0 }}
        animate={
          isInView
            ? { y: 0, opacity: 1 }
            : { y: "100%", opacity: 0 }
        }
        transition={{
          duration: 0.6,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </MotionComponent>
    </span>
  )
}
