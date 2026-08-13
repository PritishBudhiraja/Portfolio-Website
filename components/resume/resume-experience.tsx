import type { ReactNode } from "react"
import { Calendar } from "lucide-react"
import type { ResumeCompany } from "@/lib/resume-data"
import { ResumeRichText } from "@/components/resume/resume-rich-text"

function ExperienceItem({ company }: { company: ResumeCompany }) {
  const [primary, ...rest] = company.roles

  return (
    <div className="mb-5 flex gap-3">
      <div className="w-12 shrink-0 pt-0.5">
        <a
          href={company.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-border bg-white p-1.5"
        >
          <img
            src={company.logo}
            alt={`${company.company} logo`}
            className="h-full w-full object-contain"
          />
        </a>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="m-0 text-[0.95rem] font-semibold tracking-normal text-[var(--resume-text)]">
            {primary.title},{" "}
            <a
              href={company.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--resume-link)] hover:underline underline-offset-2"
            >
              {company.company}
            </a>
          </h3>
          <span className="text-[var(--resume-text-light)] hidden sm:inline" aria-hidden>
            •
          </span>
          <p className="m-0 text-[0.9rem] font-normal text-[var(--resume-text-medium)] inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 shrink-0 opacity-70" />
            <span>{primary.period}</span>
          </p>
        </div>
        <ul className="mt-1 mb-0 pl-3 list-disc space-y-1.5 marker:text-[var(--resume-text-light)]">
          {primary.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-[0.875rem] leading-[1.45] text-[var(--resume-text)] pl-0.5"
            >
              <ResumeRichText parts={bullet} />
            </li>
          ))}
        </ul>

        {rest.map((role) => (
          <div key={role.title + role.period} className="mt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <p className="m-0 text-[0.95rem] italic text-[var(--resume-text)]">
                {role.title}
              </p>
              <p className="m-0 text-[0.9rem] italic text-[var(--resume-text-medium)]">
                {role.period}
              </p>
            </div>
            <ul className="mt-1 mb-0 pl-3 list-disc space-y-1.5 marker:text-[var(--resume-text-light)]">
              {role.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-[0.875rem] leading-[1.45] text-[var(--resume-text)] pl-0.5"
                >
                  <ResumeRichText parts={bullet} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="resume-section-title m-0 mb-4 text-base font-normal tracking-normal font-resume text-[var(--resume-section)]">
      {children}
    </h2>
  )
}

export function ResumeExperience({
  professional,
  early,
}: {
  professional: ResumeCompany[]
  early: ResumeCompany[]
}) {
  return (
    <div className="space-y-8">
      <section>
        <SectionTitle>Professional Experience</SectionTitle>
        <div>
          {professional.map((company) => (
            <ExperienceItem key={company.company} company={company} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Early Experience</SectionTitle>
        <div>
          {early.map((company) => (
            <ExperienceItem key={company.company} company={company} />
          ))}
        </div>
      </section>
    </div>
  )
}
