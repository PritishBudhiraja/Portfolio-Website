"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { SectionLabel } from "@/components/ui/section-label"
import { OriginButton, OriginButtonOutline } from "@/components/ui/origin-button"
import { getSpotifyPlaylistId, SPOTIFY_PLAYLIST_URL } from "@/lib/site-config"

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

function ListeningAside() {
  const playlistId = getSpotifyPlaylistId(SPOTIFY_PLAYLIST_URL)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!playlistId) return null

  const embedTheme = mounted && resolvedTheme === "light" ? 1 : 0
  const src = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=${embedTheme}`

  return (
    <aside id="listening" className="lg:pt-16">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Now playing
      </p>
      <div className="overflow-hidden rounded-xl border border-border/50 bg-card">
        {mounted ? (
          <iframe
            key={src}
            title="Overthinking Thoughts on Spotify"
            src={src}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block border-0"
          />
        ) : (
          <div className="h-[152px] animate-pulse bg-muted/60" />
        )}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Overthinking Thoughts — on while I ship.
      </p>
    </aside>
  )
}

export default function Contact() {
  const hasPlaylist = Boolean(getSpotifyPlaylistId(SPOTIFY_PLAYLIST_URL))

  return (
    <section id="contact" className="relative overflow-hidden bg-muted/30 py-24 md:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel>Let&apos;s connect</SectionLabel>
            <FadeIn>
              <h2 className="mb-5 font-display text-section font-bold">Get in touch</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-lg text-lg text-muted-foreground leading-relaxed md:text-xl">
                Work, a question, or just hello — I read everything. Open to roles and
                interesting frontend-systems problems.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
                href="mailto:pritish.budhiraja@gmail.com"
                className="group mt-10 inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight transition-colors hover:text-primary md:text-3xl"
              >
                pritish.budhiraja@gmail.com
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <a
                  href="tel:+918979984894"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +91-8979984894
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Bangalore, India
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <OriginButton href="mailto:pritish.budhiraja@gmail.com">
                  Send email <Mail className="h-4 w-4" />
                </OriginButton>
                <OriginButtonOutline
                  href="https://linkedin.com/in/pritish-budhiraja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <LinkedinIcon className="h-4 w-4" />
                </OriginButtonOutline>
                <OriginButtonOutline
                  href="https://github.com/PritishBudhiraja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 px-0"
                >
                  <span className="sr-only">GitHub</span>
                  <GithubIcon className="h-4 w-4" />
                </OriginButtonOutline>
              </div>
            </FadeIn>
          </div>

          {hasPlaylist ? (
            <div className="lg:col-span-5">
              <ListeningAside />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
