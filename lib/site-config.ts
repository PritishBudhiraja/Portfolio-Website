import { resumeMeta } from "@/lib/resume-data"

const RESUME_FILE_ID = "1GNGLw3cp3A5yEju0Yepr8z4jJXVVS_dg"

export const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`

export const RESUME_SHARE_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view?usp=sharing`

/** Public Spotify playlist URL or ID. Listening section hides if empty. */
export const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/3nUYIsIF0cdcVTZgYEX5Pq"

export const SITE_URL = resumeMeta.website
export const SITE_NAME = resumeMeta.name
export const SITE_JOB_TITLE = resumeMeta.title
export const SITE_TITLE = `${resumeMeta.name} | ${resumeMeta.title}`
export const SITE_DESCRIPTION =
  "Pritish Budhiraja is a Senior Software Engineer specializing in React, TypeScript, AI testing, payments, and cloud infrastructure. Currently at TestZeus, previously at Juspay."
export const SITE_IMAGE = "/images/profile.png"
export const SITE_OG_IMAGES = [
  {
    url: SITE_IMAGE,
    alt: `${SITE_NAME}, ${SITE_JOB_TITLE}`,
  },
]

export const SOCIAL_LINKS = {
  linkedin: resumeMeta.linkedin,
  github: resumeMeta.github,
  email: resumeMeta.email,
} as const

export function getSpotifyPlaylistId(urlOrId: string) {
  const trimmed = urlOrId.trim()
  if (!trimmed) return ""

  const fromUrl = trimmed.match(/playlist\/([a-zA-Z0-9]+)/)
  if (fromUrl?.[1]) return fromUrl[1]

  return trimmed
}
