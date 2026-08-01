import type { Metadata } from "next"
import { ExternalLink, FileDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { RESUME_DOWNLOAD_URL, RESUME_SHARE_URL, RESUME_VIEW_URL } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Resume | Pritish Budhiraja",
  description: "Resume of Pritish Budhiraja — Full-stack AI builder.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-2">
              Resume
            </p>
            <h1 className="text-section font-display font-bold">Pritish Budhiraja</h1>
            <p className="text-muted-foreground mt-1">Full-stack AI builder</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={RESUME_SHARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-primary/40 hover:bg-muted/50 transition-colors"
            >
              Open in Drive <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Download PDF <FileDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-card shadow-lg">
          <iframe
            src={RESUME_VIEW_URL}
            title="Pritish Budhiraja Resume"
            className="w-full h-[calc(100vh-16rem)] min-h-[600px] bg-background"
            allow="autoplay"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
