import Link from "next/link"
import { MarginNote } from "@/components/margin-note"
import type { ContributionData } from "@/lib/github-contributions"
import { SOCIAL_LINKS } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const LEVEL_CLASS = [
  "bg-foreground/10",
  "bg-foreground/25",
  "bg-foreground/45",
  "bg-foreground/70",
  "bg-foreground",
] as const

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function weeksFromDays(days: ContributionData["days"]) {
  if (days.length === 0) return []

  const weeks: Array<Array<ContributionData["days"][number] | null>> = []
  let week: Array<ContributionData["days"][number] | null> = []

  const first = new Date(`${days[0].date}T00:00:00Z`)
  const pad = first.getUTCDay()
  for (let i = 0; i < pad; i++) week.push(null)

  for (const day of days) {
    week.push(day)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null)
    weeks.push(week)
  }
  return weeks
}

function monthLabels(weeks: Array<Array<ContributionData["days"][number] | null>>) {
  const labels: Array<{ index: number; label: string }> = []
  let last = -1
  weeks.forEach((week, index) => {
    const day = week.find(Boolean)
    if (!day) return
    const month = new Date(`${day.date}T00:00:00Z`).getUTCMonth()
    if (month !== last) {
      labels.push({ index, label: MONTHS[month] })
      last = month
    }
  })
  return labels
}

function formatRange(from: string, to: string) {
  const fmt = (value: string) => {
    const [year, month, day] = value.split("-").map(Number)
    if (!year || !month || !day) return value
    return `${day} ${MONTHS[month - 1]} ${year}`
  }
  if (!from || !to) return ""
  return `${fmt(from)} – ${fmt(to)}`
}

export function GithubContributions({ data }: { data: ContributionData }) {
  const weeks = weeksFromDays(data.days)
  const labels = monthLabels(weeks)

  return (
    <section id="contributions" className="relative scroll-mt-14 px-4 py-6 sm:px-6">
      <MarginNote side="right" rotate={-9}>
        shipped in the open
      </MarginNote>
      <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="min-w-max">
          <div className="relative mb-1 h-4 text-[10px] text-muted-foreground">
            {labels.map((item) => (
              <span
                key={`${item.label}-${item.index}`}
                className="absolute"
                style={{ left: `${(item.index / Math.max(weeks.length, 1)) * 100}%` }}
              >
                {item.label}
              </span>
            ))}
          </div>
          <div className="flex gap-0.5">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.5">
                {week.map((day, di) => (
                  <div
                    key={`${wi}-${di}`}
                    title={
                      day
                        ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                        : undefined
                    }
                    className={cn(
                      "h-2.5 w-2.5 rounded-[2px]",
                      day ? LEVEL_CLASS[day.level] : "bg-transparent",
                    )}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>
          {data.total.toLocaleString("en-US")} contributions, {formatRange(data.from, data.to)}.{" "}
          <Link
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-foreground hover:underline"
          >
            GitHub
          </Link>
          .
        </p>
        <p className="flex items-center gap-1">
          Less
          {LEVEL_CLASS.map((cls) => (
            <span key={cls} className={cn("h-2.5 w-2.5 rounded-[2px]", cls)} />
          ))}
          More
        </p>
      </div>
    </section>
  )
}
