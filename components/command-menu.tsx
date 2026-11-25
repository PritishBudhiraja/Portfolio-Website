"use client"

import { CommandPalette, type CommandPaletteItem } from "@pritish.budhiraja/ui"
import { FileDown, FileText, FolderGit2, Mail, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { RESUME_SHARE_URL, SOCIAL_LINKS } from "@/lib/site-config"
import { scrollToHash } from "@/lib/utils"

const items: CommandPaletteItem[] = [
  {
    id: "home",
    label: "Home",
    group: "Pages",
    href: "/#home",
    icon: <User className="h-3.5 w-3.5 text-muted-foreground" />,
  },
  {
    id: "about",
    label: "About",
    group: "Pages",
    href: "/about",
    icon: <User className="h-3.5 w-3.5 text-muted-foreground" />,
  },
  {
    id: "experience",
    label: "Experience",
    group: "Pages",
    href: "/#experience",
    icon: <FileText className="h-3.5 w-3.5 text-muted-foreground" />,
  },
  {
    id: "work",
    label: "Work",
    group: "Pages",
    href: "/#work",
    icon: <FolderGit2 className="h-3.5 w-3.5 text-muted-foreground" />,
  },
  {
    id: "contact",
    label: "Contact",
    group: "Pages",
    href: "/#contact",
    icon: <Mail className="h-3.5 w-3.5 text-muted-foreground" />,
  },
  {
    id: "resume",
    label: "Resume",
    group: "Pages",
    href: "/resume",
    icon: <FileText className="h-3.5 w-3.5 text-muted-foreground" />,
  },
  {
    id: "resume-pdf",
    label: "Resume PDF",
    group: "Links",
    href: RESUME_SHARE_URL,
    icon: <FileDown className="h-3.5 w-3.5 text-muted-foreground" />,
  },
  {
    id: "github",
    label: "GitHub",
    group: "Links",
    href: SOCIAL_LINKS.github,
    icon: <GithubIcon className="h-3.5 w-3.5 text-muted-foreground" />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    group: "Links",
    href: SOCIAL_LINKS.linkedin,
    icon: <LinkedinIcon className="h-3.5 w-3.5 text-muted-foreground" />,
  },
  {
    id: "email",
    label: "Email",
    group: "Links",
    href: `mailto:${SOCIAL_LINKS.email}`,
    icon: <Mail className="h-3.5 w-3.5 text-muted-foreground" />,
  },
]

export function CommandMenu() {
  const router = useRouter()

  function go(href: string) {
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
    <CommandPalette
      items={items}
      label="Site navigation"
      placeholder="Jump to a page or section…"
      onSelect={(item) => {
        if (item.href) go(item.href)
      }}
    />
  )
}
