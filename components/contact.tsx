"use client"

import { Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { MarginNote } from "@/components/margin-note"
import { getSpotifyPlaylistId, SOCIAL_LINKS, SPOTIFY_PLAYLIST_URL } from "@/lib/site-config"

function ListeningAside() {
  const playlistId = getSpotifyPlaylistId(SPOTIFY_PLAYLIST_URL)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!playlistId) return null

  const isLight = mounted && resolvedTheme === "light"
  const embedTheme = isLight ? 1 : 0
  const src = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=${embedTheme}`

  return (
    <aside id="listening" className="mt-6">
      <p className="mb-2 text-xs text-muted-foreground">Now playing</p>
      {mounted ? (
        <div
          className="spotify-embed"
          style={{ backgroundColor: isLight ? "#ffffff" : "#121212" }}
        >
          <iframe
            key={src}
            title="Overthinking Thoughts on Spotify"
            src={src}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{
              backgroundColor: isLight ? "#ffffff" : "#121212",
              colorScheme: isLight ? "light" : "dark",
            }}
          />
        </div>
      ) : (
        <div className="h-[152px] animate-pulse rounded-[12px] bg-muted/60" />
      )}
      <p className="mt-2 text-xs text-muted-foreground">Overthinking Thoughts — on while I ship.</p>
    </aside>
  )
}

export default function Contact() {
  const hasPlaylist = Boolean(getSpotifyPlaylistId(SPOTIFY_PLAYLIST_URL))

  return (
    <section id="contact" className="relative scroll-mt-14 px-4 py-8 sm:px-6">
      <MarginNote side="right" rotate={6} className="top-auto bottom-10">
        say hello
      </MarginNote>
      <h2 className="mb-3 text-lg font-semibold tracking-tight sm:text-xl">Get in touch</h2>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Work, a question, or just hello — I read everything. Open to roles and interesting frontend
        systems problems.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={`mailto:${SOCIAL_LINKS.email}`}
          className="inline-flex h-9 items-center gap-1.5 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground"
        >
          <Mail className="h-3.5 w-3.5" />
          Email
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm hover:bg-muted"
        >
          <LinkedinIcon className="h-3.5 w-3.5" />
          LinkedIn
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm hover:bg-muted"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          GitHub
        </a>
      </div>
      {hasPlaylist ? <ListeningAside /> : null}
    </section>
  )
}
