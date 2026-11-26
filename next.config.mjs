/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    agentUpgrade: "security",
  },
  async rewrites() {
    return [{ source: "/security.txt", destination: "/.well-known/security.txt" }]
  },
}

export default nextConfig
