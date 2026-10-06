import { cn } from "@/lib/utils"

export function CompanyLogo({
  src,
  alt = "",
  className,
}: {
  src: string
  alt?: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white p-[3px]",
        className,
      )}
    >
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </span>
  )
}
