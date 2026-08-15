"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/motion/fade-in"
import { SectionLabel } from "@/components/ui/section-label"

export default function About() {
  return (
    <section id="about" className="py-28 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <SectionLabel>About</SectionLabel>
          <FadeIn>
            <h2 className="text-section font-display font-bold mb-8">A bit about me</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I&apos;m a Senior Software Engineer who likes owning the path from UI to infra. These
              days that means AI-powered testing at TestZeus. Before that I spent a few years on
              Hyperswitch at Juspay — checkout SDKs, merchant dashboards, and the pipelines that
              ship them.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 mt-10 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Full background on the resume
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
