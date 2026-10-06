import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { SOCIAL_LINKS } from "@/lib/site-config"

const footerNav = [
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dashed border-border px-4 py-6 sm:px-6 print:hidden">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <BrandMark />
          <p className="text-xs text-muted-foreground">© {currentYear} Pritish Budhiraja</p>
        </div>
        <nav className="flex items-center gap-4 text-xs text-muted-foreground">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.name}
            </Link>
          ))}
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </footer>
  )
}
