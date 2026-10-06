import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import Navbar from "@/components/navbar"
import { ResumeActions } from "@/components/resume/resume-actions"
import { ResumeDocument } from "@/components/resume/resume-document"
import { SiteFrame } from "@/components/site-frame"
import { getBreadcrumbJsonLd } from "@/lib/json-ld"
import { SITE_NAME } from "@/lib/site-config"

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: `${SITE_NAME} Resume`, path: "/resume" },
])

export default function ResumePage() {
  return (
    <SiteFrame wide className="resume-page">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="print:hidden">
        <Navbar />
      </div>
      <main className="flex-1 w-full px-4 sm:px-6 pt-8 pb-12 print:pt-0 print:pb-0 print:px-0">
        <ResumeActions />
        <ResumeDocument />
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </SiteFrame>
  )
}
