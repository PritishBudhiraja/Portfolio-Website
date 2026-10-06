"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

export function CopyButton({
  value,
  label,
  className,
}: {
  value: string
  label: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      toast({ title: "Copied", description: label })
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      toast({ title: "Could not copy", description: label, variant: "destructive" })
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className={cn(
        "inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className,
      )}
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
    </button>
  )
}
