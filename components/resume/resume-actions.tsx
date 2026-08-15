import { ExternalLink, FileDown } from "lucide-react"
import { OriginButton, OriginButtonOutline } from "@/components/ui/origin-button"
import { RESUME_DOWNLOAD_URL, RESUME_SHARE_URL } from "@/lib/site-config"

export function ResumeActions() {
  return (
    <div className="resume-actions flex flex-wrap items-center justify-center gap-3 mb-8 print:hidden">
      <OriginButton href={RESUME_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
        <FileDown className="h-4 w-4" />
        Download PDF
      </OriginButton>
      <OriginButtonOutline href={RESUME_SHARE_URL} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="h-4 w-4" />
        View PDF
      </OriginButtonOutline>
    </div>
  )
}
