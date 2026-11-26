"use client"

import { Button, EditorialAnnotation, EditorialHeading } from "@pritish.budhiraja/ui"
import { FileDown, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import {
  getSpotifyPlaylistId,
  RESUME_SHARE_URL,
  SOCIAL_LINKS,
  SPOTIFY_PLAYLIST_URL,
} from "@/lib/site-config"

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
        <div className="spotify-embed" style={{ backgroundColor: isLight ? "#ffffff" : "#121212" }}>
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
      <EditorialAnnotation side="right" rotate={6} className="top-auto bottom-10">
        say hello
      </EditorialAnnotation>
      <EditorialHeading className="mb-3 text-2xl">Get in touch</EditorialHeading>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Work, a question, or just hello — I read everything. Open to roles and interesting frontend
        systems problems.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button asChild size="sm">
          <a href={`mailto:${SOCIAL_LINKS.email}`}>
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-3.5 w-3.5" />
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={RESUME_SHARE_URL} target="_blank" rel="noopener noreferrer">
            <FileDown className="h-3.5 w-3.5" />
            Resume PDF
          </a>
        </Button>
      </div>
      {hasPlaylist ? <ListeningAside /> : null}
    </section>
  )
}
