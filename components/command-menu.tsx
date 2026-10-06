"use client"

import { Command } from "cmdk"
import { FileText, FolderGit2, Mail, Search, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { SOCIAL_LINKS } from "@/lib/site-config"
import { scrollToHash } from "@/lib/utils"

const pages = [
  { name: "Home", href: "/#home", icon: User },
  { name: "About", href: "/about", icon: User },
  { name: "Experience", href: "/#experience", icon: FileText },
  { name: "Work", href: "/#work", icon: FolderGit2 },
  { name: "Contact", href: "/#contact", icon: Mail },
  { name: "Resume", href: "/resume", icon: FileText },
]

const links = [
  { name: "GitHub", href: SOCIAL_LINKS.github, icon: GithubIcon },
  { name: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon },
  { name: "Email", href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail },
]

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  function go(href: string) {
    setOpen(false)
    if (href.startsWith("mailto:")) {
      window.location.href = href
      return
    }
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer")
      return
    }
    if (href.includes("#") && window.location.pathname === "/" && scrollToHash(href)) {
      return
    }
    router.push(href)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
        aria-label="Search"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded border border-border bg-muted px-1 font-sans text-[10px] sm:inline">
          ⌘K
        </kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Site navigation"
        overlayClassName="fixed inset-0 z-[200] bg-background/70 backdrop-blur-sm"
        contentClassName="fixed left-1/2 top-[15vh] z-[201] w-[min(100%-2rem,32rem)] -translate-x-1/2 overflow-hidden rounded-lg border border-border bg-popover shadow-xl"
      >
        <Command.Input
          placeholder="Jump to a page or section…"
          className="h-11 w-full border-b border-border bg-transparent px-3 text-sm outline-none"
        />
        <Command.List className="max-h-72 overflow-y-auto p-1">
          <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
            No results.
          </Command.Empty>
          <Command.Group heading="Pages" className="px-1 py-1 text-xs text-muted-foreground">
            {pages.map((item) => (
              <Command.Item
                key={item.href}
                value={item.name}
                onSelect={() => go(item.href)}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-muted"
              >
                <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                {item.name}
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Links" className="px-1 py-1 text-xs text-muted-foreground">
            {links.map((item) => (
              <Command.Item
                key={item.href}
                value={item.name}
                onSelect={() => go(item.href)}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground data-[selected=true]:bg-muted"
              >
                <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                {item.name}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  )
}
