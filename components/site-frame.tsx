import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SiteFrame({
  children,
  wide = false,
  className,
}: {
  children: ReactNode
  wide?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "site-frame min-h-screen overflow-x-clip xl:overflow-x-visible print:bg-background",
        wide && "site-frame--wide",
        className,
      )}
    >
      <div
        className={cn(
          "site-frame-column mx-auto min-h-screen border-x border-dashed border-border print:border-0 print:max-w-none",
          wide ? "max-w-[1120px]" : "max-w-[720px]",
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function Hatch() {
  return <div className="section-hatch" aria-hidden />
}
