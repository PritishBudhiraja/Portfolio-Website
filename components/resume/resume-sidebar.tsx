import type { ReactNode } from "react"
import type { SkillGroup } from "@/lib/resume-data"
import { education } from "@/lib/resume-data"

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="resume-section-title m-0 mb-4 text-base font-normal tracking-normal font-resume text-[var(--resume-section)]">
      {children}
    </h2>
  )
}

export function ResumeSkills({ skills }: { skills: SkillGroup[] }) {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.label}>
            <p className="m-0 mb-2 text-[0.8rem] font-semibold text-[var(--resume-text)]">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 text-[0.8rem] leading-none text-muted-foreground"
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

export function ResumeEducation() {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      <div className="flex gap-3">
        <a
          href={education.schoolUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white p-1.5"
        >
          <img
            src={education.logo}
            alt="KIIT logo"
            className="h-full w-full object-contain"
          />
        </a>
        <div className="min-w-0 flex-1 text-[0.875rem] leading-[1.5]">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="m-0 font-semibold text-[var(--resume-text)]">
              <a
                href={education.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--resume-link)] transition-colors"
              >
                {education.school}
              </a>
            </p>
            <p className="m-0 text-[var(--resume-text-medium)]">{education.period}</p>
          </div>
          <p className="m-0 mt-1 text-[var(--resume-text-medium)]">
            {education.degree}; {education.gpa}
          </p>
          <p className="m-0 mt-0.5 text-[var(--resume-text-medium)]">
            {education.location}
          </p>
        </div>
      </div>
    </section>
  )
}
