import { CalendarHeatmap, EditorialAnnotation } from "@pritish.budhiraja/ui"
import Link from "next/link"
import type { ContributionData } from "@/lib/github-contributions"
import { SOCIAL_LINKS } from "@/lib/site-config"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number)
  if (!year || !month || !day) return value
  return `${day} ${MONTHS[month - 1]} ${year}`
}

export function GithubContributions({ data }: { data: ContributionData }) {
  return (
    <section id="contributions" className="relative scroll-mt-14 px-4 py-6 sm:px-6">
      <EditorialAnnotation side="right" rotate={-9}>
        shipped in the open
      </EditorialAnnotation>
      <CalendarHeatmap
        days={data.days}
        from={formatDate(data.from)}
        to={formatDate(data.to)}
        total={data.total}
        getDayLabel={(day) =>
          `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
        }
      />
      <p className="mt-1 text-xs text-muted-foreground">
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
    </section>
  )
}
