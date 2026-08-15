const RESUME_FILE_ID = "1GNGLw3cp3A5yEju0Yepr8z4jJXVVS_dg"

export const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`

export const RESUME_SHARE_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view?usp=sharing`

/** Public Spotify playlist URL or ID. Listening section hides if empty. */
export const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/3nUYIsIF0cdcVTZgYEX5Pq"

export function getSpotifyPlaylistId(urlOrId: string) {
  const trimmed = urlOrId.trim()
  if (!trimmed) return ""

  const fromUrl = trimmed.match(/playlist\/([a-zA-Z0-9]+)/)
  if (fromUrl?.[1]) return fromUrl[1]

  return trimmed
}
