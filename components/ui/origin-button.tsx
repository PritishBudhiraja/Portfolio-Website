"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { type ReactNode, startTransition, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface OriginButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

export function OriginButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
}: OriginButtonProps) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLElement>(null)
  const scale = useMotionValue(0)

  const smoothScale = useSpring(scale, {
    stiffness: 85,
    damping: 18,
    restDelta: 0.001,
  })

  const easedScale = useTransform(smoothScale, [0, 1], [0, 1])

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    startTransition(() => {
      setCursorPos({ x, y })
    })
    scale.set(1)
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    startTransition(() => {
      setCursorPos({ x, y })
    })
    scale.set(0)
  }

  const classNames = cn(
    "relative overflow-hidden cursor-pointer inline-flex items-center justify-center px-8 h-12 rounded-md font-medium text-base",
    "bg-primary text-primary-foreground",
    className,
  )

  const inner = (
    <>
      <motion.div
        className="absolute rounded-full pointer-events-none bg-primary-foreground/20"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: 400,
          height: 400,
          scale: easedScale,
          x: "-50%",
          y: "-50%",
        }}
      />
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">{children}</span>
    </>
  )

  if (href) {
    return (
      <a
        ref={containerRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={classNames}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      ref={containerRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames}
    >
      {inner}
    </button>
  )
}

interface OriginButtonOutlineProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

export function OriginButtonOutline({
  children,
  className,
  onClick,
  href,
  target,
  rel,
}: OriginButtonOutlineProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLElement>(null)
  const scale = useMotionValue(0)

  const smoothScale = useSpring(scale, {
    stiffness: 85,
    damping: 18,
    restDelta: 0.001,
  })

  const easedScale = useTransform(smoothScale, [0, 1], [0, 1])

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    startTransition(() => {
      setCursorPos({ x, y })
      setIsHovered(true)
    })
    scale.set(1)
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    startTransition(() => {
      setCursorPos({ x, y })
      setIsHovered(false)
    })
    scale.set(0)
  }

  const classNames = cn(
    "relative overflow-hidden cursor-pointer inline-flex items-center justify-center px-8 h-12 rounded-md font-medium text-base",
    "border border-input bg-background",
    className,
  )

  const inner = (
    <>
      <motion.div
        className="absolute rounded-full pointer-events-none bg-primary"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: 400,
          height: 400,
          scale: easedScale,
          x: "-50%",
          y: "-50%",
        }}
      />
      <span
        className={cn(
          "relative z-10 flex items-center gap-2 whitespace-nowrap transition-colors duration-200",
          isHovered ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <a
        ref={containerRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={classNames}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      ref={containerRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames}
    >
      {inner}
    </button>
  )
}
