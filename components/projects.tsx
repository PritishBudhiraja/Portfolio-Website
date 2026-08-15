"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { SectionLabel } from "@/components/ui/section-label"
import { cn } from "@/lib/utils"
import { projects, type Project, type ProjectFrame } from "@/lib/projects"

function ProductFrame({ variant, featured }: { variant: ProjectFrame; featured?: boolean }) {
  const height = featured ? "h-36 md:h-40" : "h-20"

  return (
    <div
      className={cn(
        "relative mb-5 overflow-hidden rounded-xl border border-border/60 bg-muted/40",
        height
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

      <div className="relative flex items-center gap-1.5 border-b border-border/50 bg-background/60 px-3 py-1.5 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
        <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground">
          {frameLabel(variant)}
        </span>
        {variant === "agent" && (
          <span className="ml-auto flex items-center gap-1 text-[10px] font-medium text-red-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            REC
          </span>
        )}
      </div>

      <div className="relative p-3 md:p-4">
        <FrameBody variant={variant} featured={featured} />
      </div>
    </div>
  )
}

function frameLabel(variant: ProjectFrame) {
  switch (variant) {
    case "agent":
      return "teach-agent"
    case "checkout":
      return "checkout"
    case "dashboard":
      return "dashboard"
    case "npm":
      return "@juspay-tech/react-hyper-js"
    case "api":
      return "POST /shorten"
    case "gateway":
      return "rate-limiter"
    case "integrations":
      return "composio"
    case "studio":
      return "hyperstudio"
  }
}

function FrameBody({ variant, featured }: { variant: ProjectFrame; featured?: boolean }) {
  if (variant === "agent") {
    return (
      <div className="space-y-1.5 font-mono text-[11px] leading-relaxed text-muted-foreground">
        <p>
          <span className="text-primary/80">Given</span> a recorded checkout session
        </p>
        <p>
          <span className="text-primary/80">When</span> artifacts finish processing
        </p>
        {featured && (
          <p>
            <span className="text-primary/80">Then</span> Gherkin and Python tests exist
          </p>
        )}
      </div>
    )
  }

  if (variant === "checkout") {
    return (
      <div className="space-y-2">
        <div className="h-6 rounded-md border border-border/70 bg-background/70" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-6 rounded-md border border-border/70 bg-background/70" />
          <div className="h-6 rounded-md border border-border/70 bg-background/70" />
        </div>
        {featured && <div className="h-6 w-24 rounded-md bg-primary/70" />}
      </div>
    )
  }

  if (variant === "dashboard") {
    return (
      <div className="grid grid-cols-3 gap-1.5">
        <div className="col-span-1 h-8 rounded bg-primary/15" />
        <div className="col-span-2 h-8 rounded bg-background/70 border border-border/60" />
      </div>
    )
  }

  if (variant === "npm") {
    return (
      <p className="font-mono text-[11px] text-muted-foreground">
        npm i <span className="text-foreground/80">@juspay-tech/react-hyper-js</span>
      </p>
    )
  }

  if (variant === "api") {
    return (
      <p className="font-mono text-[11px] text-muted-foreground">
        <span className="text-primary/80">201</span> {"{"} shortUrl, clicks {"}"}
      </p>
    )
  }

  if (variant === "integrations") {
    return (
      <div className="flex flex-wrap gap-1.5">
        {["GitHub", "Jira", "Slack", "Linear"].map((app) => (
          <span
            key={app}
            className="rounded-md border border-border/60 bg-background/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            {app}
          </span>
        ))}
      </div>
    )
  }

  if (variant === "studio") {
    return (
      <div className="grid grid-cols-4 gap-1.5">
        <div className="h-8 rounded bg-primary/20" />
        <div className="col-span-2 h-8 rounded border border-border/60 bg-background/70" />
        <div className="h-8 rounded bg-primary/10" />
      </div>
    )
  }

  return (
    <div className="flex gap-1.5">
      {["token", "sliding", "fixed"].map((algo) => (
        <span
          key={algo}
          className="rounded-md border border-border/60 bg-background/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
        >
          {algo}
        </span>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const number = String(index + 1).padStart(2, "0")
  const colSpanClass =
    project.colSpan === 3
      ? "md:col-span-2 lg:col-span-6"
      : project.featured
        ? "lg:col-span-3"
        : "lg:col-span-2"

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.97 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card p-6 md:p-7",
        "transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        colSpanClass
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="font-mono text-xs text-muted-foreground/70">{number}</span>
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            {project.context}
          </span>
        </div>

        <ProductFrame variant={project.frame} featured={project.featured} />

        <h3 className="font-display text-xl font-semibold tracking-tight md:text-[1.35rem]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-5">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-primary md:translate-y-1 md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center">
          <SectionLabel>Selected work</SectionLabel>
          <FadeIn>
            <h2 className="mb-6 text-center font-display text-section font-bold">Work</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
              Product systems I&apos;ve owned — from AI testing workflows to payment SDKs,
              plus a couple of focused personal builds.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/PritishBudhiraja"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              More on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
