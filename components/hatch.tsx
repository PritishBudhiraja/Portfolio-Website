"use client"

import { CopyButton as BaseCopyButton, type CopyButtonProps, toast } from "@pritish.budhiraja/ui"

export { Toaster } from "@pritish.budhiraja/ui"
export { OriginButton, OriginButtonOutline, ScrollProgress } from "@pritish.budhiraja/ui/motion"

export function CopyButton(props: Omit<CopyButtonProps, "onCopied" | "onCopyError">) {
  return (
    <BaseCopyButton
      {...props}
      onCopied={() => toast({ title: `${props.label} copied` })}
      onCopyError={() =>
        toast({
          variant: "destructive",
          title: `Could not copy the ${props.label.toLowerCase()}`,
          description:
            "Your browser blocked clipboard access. Select the text and copy it instead.",
        })
      }
    />
  )
}
