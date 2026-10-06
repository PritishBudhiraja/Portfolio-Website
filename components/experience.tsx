import { ChevronDown } from "lucide-react"
import { CompanyLogo } from "@/components/company-logo"
import { MarginNote } from "@/components/margin-note"
import { ResumeRichText } from "@/components/resume/resume-rich-text"
import {
  earlyExperience,
  professionalExperience,
  type ResumeCompany,
  type TextPart,
} from "@/lib/resume-data"

function chipsFromParts(parts: TextPart[]) {
  return parts.flatMap((part) => (typeof part !== "string" && "bold" in part ? [part.bold] : []))
}

function chipsFromCompany(company: ResumeCompany) {
  const chips = new Set<string>()
  for (const role of company.roles) {
    for (const bullet of role.bullets) {
      for (const chip of chipsFromParts(bullet)) chips.add(chip)
    }
  }
  return [...chips]
}

function ExperienceItem({ company }: { company: ResumeCompany }) {
  const chips = chipsFromCompany(company)

  return (
    <article className="py-4">
      <div className="flex items-start gap-3">
        <CompanyLogo src={company.logo} className="mt-0.5" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <a
              href={company.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline-offset-2 hover:underline"
            >
              {company.company}
            </a>
            <p className="text-xs text-muted-foreground">{company.location}</p>
          </div>

          {company.roles.map((role) => (
            <details
              key={`${role.title}-${role.period}`}
              className="group mt-2"
              suppressHydrationWarning
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 [&::-webkit-details-marker]:hidden">
                <div>
                  <p className="text-sm font-medium">{role.title}</p>
                  <p className="text-xs text-muted-foreground">{role.period}</p>
                </div>
                <ChevronDown className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {role.bullets.map((bullet, i) => (
                  <li key={i}>
                    <ResumeRichText parts={bullet} />
                  </li>
                ))}
              </ul>
            </details>
          ))}

          {chips.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px]"
                >
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export function Experience() {
  const companies = [...professionalExperience, ...earlyExperience]

  return (
    <section id="experience" className="relative scroll-mt-14 px-4 py-8 sm:px-6">
      <MarginNote side="left" rotate={-7}>
        currently here
      </MarginNote>
      <h2 className="mb-1 text-lg font-semibold tracking-tight sm:text-xl">Experience</h2>
      <div className="divide-y divide-dashed divide-border">
        {companies.map((company) => (
          <ExperienceItem key={company.company} company={company} />
        ))}
      </div>
    </section>
  )
}
