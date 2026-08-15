import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ResumeActions } from "@/components/resume/resume-actions"
import { ResumeDocument } from "@/components/resume/resume-document"

export default function ResumePage() {
  return (
    <div className="resume-page min-h-screen flex flex-col bg-background">
      <div className="print:hidden">
        <Navbar />
      </div>
      <main className="flex-1 w-full px-4 sm:px-6 pt-28 pb-16 print:pt-0 print:pb-0 print:px-0">
        <ResumeActions />
        <ResumeDocument />
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  )
}
