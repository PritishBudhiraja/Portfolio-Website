"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"
import { BrandMark } from "@/components/brand-mark"
import { CommandMenu } from "@/components/command-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { scrollToHash } from "@/lib/utils"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/#work" },
  { name: "Contact", href: "/#contact" },
  { name: "Resume", href: "/resume" },
]

function NavItem({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className: string
  children: ReactNode
  onClick?: () => void
}) {
  const isHash = href.includes("#")
  const prefetch = href === "/about" || href === "/resume" ? true : undefined

  if (isHash) {
    return (
      <a
        href={href}
        className={className}
        onClick={(event) => {
          if (window.location.pathname === "/" && scrollToHash(href)) {
            event.preventDefault()
          }
          onClick?.()
        }}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} prefetch={prefetch} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    router.prefetch("/about")
    router.prefetch("/resume")
  }, [router])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-dashed border-border bg-background/80 backdrop-blur-xl">
      <div className="flex h-12 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <BrandMark />
          <span className="text-sm font-medium">Pritish</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              href={item.href}
              className="px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </NavItem>
          ))}
          <CommandMenu />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <CommandMenu />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="h-8 w-8"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {isOpen ? (
        <nav className="border-t border-dashed border-border px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              href={item.href}
              className="block py-2 text-sm"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavItem>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
