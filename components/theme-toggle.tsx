"use client"

import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = async () => {
    const isDark = resolvedTheme === "dark"
    const newTheme = isDark ? "light" : "dark"
    
    // Check if View Transition API is supported
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      buttonRef.current
    ) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      
      // Calculate the radius to cover the entire screen
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )

      // Set transition direction attribute for CSS
      document.documentElement.setAttribute("data-theme-transition", isDark ? "to-light" : "to-dark")

      // Start the view transition
      const transition = (document as any).startViewTransition(async () => {
        setTheme(newTheme)
        // Small delay to ensure theme class is applied
        await new Promise(resolve => setTimeout(resolve, 0))
      })

      try {
        await transition.ready

        // Animate the clip-path on the new view
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 400,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        )

        await transition.finished
      } finally {
        document.documentElement.removeAttribute("data-theme-transition")
      }
    } else {
      // Fallback for browsers without View Transition API
      setTheme(newTheme)
    }
  }

  if (!mounted) {
    return (
      <button className="relative h-10 w-10 rounded-full bg-muted/50 flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <motion.button
      ref={buttonRef}
      className="relative h-10 w-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center overflow-hidden"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: -30, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 30, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Moon className="h-5 w-5 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 30, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -30, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sun className="h-5 w-5 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
