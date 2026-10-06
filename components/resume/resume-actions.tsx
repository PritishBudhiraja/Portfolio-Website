import { ExternalLink, FileDown } from "lucide-react"
import { OriginButton, OriginButtonOutline } from "@/components/ui/origin-button"
import { RESUME_DOWNLOAD_URL, RESUME_SHARE_URL } from "@/lib/site-config"

export function ResumeActions() {
  return (
    <div className="resume-actions mb-8 flex flex-nowrap items-center justify-center gap-2 print:hidden sm:gap-3">
      <OriginButton
        href={RESUME_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 min-w-0 flex-1 px-3 text-sm sm:h-12 sm:flex-none sm:px-8 sm:text-base"
      >
        <FileDown className="h-4 w-4 shrink-0" />
        Download PDF
      </OriginButton>
      <OriginButtonOutline
        href={RESUME_SHARE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 min-w-0 flex-1 px-3 text-sm sm:h-12 sm:flex-none sm:px-8 sm:text-base"
      >
        <ExternalLink className="h-4 w-4 shrink-0" />
        View PDF
      </OriginButtonOutline>
    </div>
  )
}
