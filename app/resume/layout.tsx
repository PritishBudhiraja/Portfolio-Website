import type { Metadata } from "next"
import { SITE_JOB_TITLE, SITE_NAME, SITE_OG_IMAGES } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${SITE_NAME} — ${SITE_JOB_TITLE} and full-stack AI builder. TestZeus, previously Juspay.`,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: `Resume | ${SITE_NAME}`,
    description: `Resume of ${SITE_NAME} — ${SITE_JOB_TITLE} and full-stack AI builder.`,
    url: "/resume",
    images: SITE_OG_IMAGES,
  },
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children
}
