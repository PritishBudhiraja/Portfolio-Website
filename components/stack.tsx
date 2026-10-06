import { MarginNote } from "@/components/margin-note"
import { skillGroups } from "@/lib/resume-data"

export function Stack() {
  return (
    <section id="stack" className="relative scroll-mt-14 px-4 py-8 sm:px-6">
      <MarginNote side="right" rotate={8} className="top-10">
        what I reach for
      </MarginNote>
      <h2 className="mb-5 text-lg font-semibold tracking-tight sm:text-xl">Stack</h2>
      <div className="divide-y divide-dashed divide-border border-y border-dashed border-border">
        {skillGroups.map((group, index) => (
          <div
            key={group.label}
            className="grid grid-cols-1 gap-2 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4"
          >
            <p className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")} {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
