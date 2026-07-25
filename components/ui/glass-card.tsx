"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl p-6",
        "glass-card",
        "hover:border-primary/20 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function GlassCardLight({ children, className, delay = 0 }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl p-6",
        "glass-card-light dark:glass-card",
        "hover:border-primary/20 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
