import { FramedContainer, HatchDivider } from "@pritish.budhiraja/ui"
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
    <FramedContainer wide={wide} className={cn("print:bg-background", className)}>
      {children}
    </FramedContainer>
  )
}

export function Hatch() {
  return <HatchDivider />
}
