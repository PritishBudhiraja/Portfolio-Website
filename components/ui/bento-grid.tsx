"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
      className
    )}>
      {children}
    </div>
  )
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2
  index?: number
}

export function BentoCard({ 
  children, 
  className, 
  colSpan = 1, 
  rowSpan = 1,
  index = 0 
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const colSpanClasses = {
    1: "",
    2: "md:col-span-2",
    3: "md:col-span-2 lg:col-span-3",
  }

  const rowSpanClasses = {
    1: "",
    2: "md:row-span-2",
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 md:p-8",
        "bg-card border border-border/50",
        "hover:border-primary/30 transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary/5",
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

interface BentoCardHeaderProps {
  icon?: React.ReactNode
  title: string
  description?: string
}

export function BentoCardHeader({ icon, title, description }: BentoCardHeaderProps) {
  return (
    <div className="mb-4">
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-display font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
