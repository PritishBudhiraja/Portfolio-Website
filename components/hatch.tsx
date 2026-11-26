"use client"

import { CopyButton as BaseCopyButton, type CopyButtonProps, toast } from "@pritish.budhiraja/ui"

export { Toaster } from "@pritish.budhiraja/ui"
export { OriginButton, OriginButtonOutline, ScrollProgress } from "@pritish.budhiraja/ui/motion"

export function CopyButton(props: Omit<CopyButtonProps, "onCopied">) {
  return <BaseCopyButton {...props} onCopied={() => toast({ title: `${props.label} copied` })} />
}
