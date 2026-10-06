import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToHash(href: string) {
  if (typeof document === "undefined") return false
  const hash = href.includes("#") ? href.slice(href.indexOf("#") + 1) : ""
  if (!hash) return false
  const el = document.getElementById(hash)
  if (!el) return false
  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(el, { offset: -8 })
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  window.history.replaceState(null, "", `#${hash}`)
  return true
}
