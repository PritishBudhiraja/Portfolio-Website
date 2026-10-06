import { ArrowUpRight } from "lucide-react"
import { MarginNote } from "@/components/margin-note"
import { projects } from "@/lib/projects"
import { SOCIAL_LINKS } from "@/lib/site-config"

export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-14 px-4 py-8 sm:px-6">
      <MarginNote side="left" rotate={7} className="top-8">
        built, not mocked
      </MarginNote>
      <div className="mb-5 flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
          Projects
          <span className="ml-1.5 font-mono text-sm font-normal text-muted-foreground">
            ({projects.length})
          </span>
        </h2>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          GitHub
        </a>
      </div>

      <div className="divide-y divide-dashed divide-border border-y border-dashed border-border">
        {projects.map((project) => (
          <article key={project.title} className="py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-medium">{project.title}</h3>
              <p className="font-mono text-[11px] text-muted-foreground">{project.context}</p>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.links.length > 0 ? (
              <div className="mt-2.5 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
