import { CompanyLogo } from "@/components/company-logo"
import { MarginNote } from "@/components/margin-note"
import { education } from "@/lib/resume-data"

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-14 px-4 py-8 sm:px-6">
      <MarginNote side="right" rotate={-6} className="top-8">
        the 9.60
      </MarginNote>
      <h2 className="mb-5 text-lg font-semibold tracking-tight sm:text-xl">Education</h2>
      <div className="flex items-start gap-3">
        <CompanyLogo src={education.logo} className="mt-0.5" />
        <div className="min-w-0">
          <a
            href={education.schoolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline-offset-2 hover:underline"
          >
            {education.school}
          </a>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {education.degree} · {education.gpa}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {education.period} · {education.location}
          </p>
        </div>
      </div>
    </section>
  )
}
