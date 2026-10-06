import { resumeMeta } from "@/lib/resume-data"

const USER = resumeMeta.githubLabel
const REVALIDATE = 60 * 60 * 6

type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export type ContributionData = {
  total: number
  from: string
  to: string
  days: ContributionDay[]
}

type GraphqlLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE"

const graphqlLevelMap: Record<GraphqlLevel, ContributionDay["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

export async function getGithubContributions(): Promise<ContributionData | null> {
  try {
    if (process.env.GITHUB_TOKEN) {
      return await fromGraphql()
    }
    return await fromPublicApi()
  } catch {
    return null
  }
}

async function fromGraphql(): Promise<ContributionData> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query($login: String!) {
          user(login: $login) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `,
      variables: { login: USER },
    }),
    next: { revalidate: REVALIDATE },
  })

  if (!response.ok) throw new Error("GitHub GraphQL failed")

  const json = (await response.json()) as {
    data?: {
      user?: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: number
            weeks: Array<{
              contributionDays: Array<{
                date: string
                contributionCount: number
                contributionLevel: GraphqlLevel
              }>
            }>
          }
        }
      }
    }
  }

  const calendar = json.data?.user?.contributionsCollection.contributionCalendar
  if (!calendar) throw new Error("Missing contribution calendar")

  const days = calendar.weeks.flatMap((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: graphqlLevelMap[day.contributionLevel] ?? 0,
    })),
  )

  return {
    total: calendar.totalContributions,
    from: days[0]?.date ?? "",
    to: days[days.length - 1]?.date ?? "",
    days,
  }
}

async function fromPublicApi(): Promise<ContributionData> {
  const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}`, {
    next: { revalidate: REVALIDATE },
  })

  if (!response.ok) throw new Error("Public contributions API failed")

  const json = (await response.json()) as {
    total: Record<string, number>
    contributions: Array<{ date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }>
  }

  const days = lastYearDays(json.contributions)
  const total = days.reduce((sum, day) => sum + day.count, 0)

  return {
    total,
    from: days[0]?.date ?? "",
    to: days[days.length - 1]?.date ?? "",
    days,
  }
}

function lastYearDays(all: ContributionDay[]): ContributionDay[] {
  const todayKey = new Date().toISOString().slice(0, 10)
  const sorted = [...all]
    .filter((day) => day.date <= todayKey)
    .sort((a, b) => a.date.localeCompare(b.date))
  const end = sorted.at(-1)
  if (!end) return []

  const endDate = new Date(`${end.date}T00:00:00Z`)
  const startDate = new Date(endDate)
  startDate.setUTCDate(startDate.getUTCDate() - 364)
  const startKey = startDate.toISOString().slice(0, 10)

  return sorted.filter((day) => day.date >= startKey)
}
