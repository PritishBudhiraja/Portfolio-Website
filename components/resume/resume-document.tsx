import { ResumeHeader } from "@/components/resume/resume-header"
import { ResumeExperience } from "@/components/resume/resume-experience"
import {
  ResumeEducation,
  ResumeSkills,
} from "@/components/resume/resume-sidebar"
import {
  earlyExperience,
  professionalExperience,
  skillGroups,
} from "@/lib/resume-data"

export function ResumeDocument() {
  return (
    <article className="resume-document font-resume mx-auto w-full max-w-[1120px] overflow-hidden rounded-2xl border border-border/60 bg-card text-foreground shadow-lg print:shadow-none print:rounded-none print:border-0 print:max-w-none">
      <ResumeHeader />

      <div className="space-y-8 px-6 sm:px-8 lg:px-12 py-6 pb-12">
        <ResumeExperience
          professional={professionalExperience}
          early={earlyExperience}
        />
        <ResumeSkills skills={skillGroups} />
        <ResumeEducation />
      </div>
    </article>
  )
}
