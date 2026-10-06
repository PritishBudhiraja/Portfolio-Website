import { cn } from "@/lib/utils"

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md border border-foreground/80 font-mono text-[11px] font-semibold tracking-tight",
        className,
      )}
      aria-hidden
    >
      PB
    </span>
  )
}
