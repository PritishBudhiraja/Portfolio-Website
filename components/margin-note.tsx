import { cn } from "@/lib/utils"

function Arrow({ toward }: { toward: "left" | "right" }) {
  if (toward === "right") {
    return (
      <svg
        width="40"
        height="26"
        viewBox="0 0 40 26"
        fill="none"
        aria-hidden
        className="text-current"
      >
        <path
          d="M3.5 5.5c9.5 1.2 16 14.5 32 13.2"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <path
          d="M29.5 13.8 35.7 18.6l-7.2 3.4"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg
      width="40"
      height="26"
      viewBox="0 0 40 26"
      fill="none"
      aria-hidden
      className="text-current"
    >
      <path
        d="M36.5 6.2C27 7.8 20.2 20.4 4.4 18.6"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M10.8 14.2 4.3 18.7l7.4 3.1"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MarginNote({
  children,
  side = "right",
  className,
  rotate = -8,
}: {
  children: string
  side?: "left" | "right"
  className?: string
  rotate?: number
}) {
  return (
    <aside
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-6 z-10 hidden w-28 text-muted-foreground xl:block",
        side === "right"
          ? "right-0 translate-x-[calc(100%+0.85rem)]"
          : "left-0 -translate-x-[calc(100%+0.85rem)]",
        className,
      )}
    >
      <p
        className={cn(
          "font-hand text-[15px] leading-tight",
          side === "right" ? "text-left" : "text-right",
        )}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {children}
      </p>
      <div className={cn("mt-0.5", side === "left" && "flex justify-end")}>
        <Arrow toward={side === "right" ? "left" : "right"} />
      </div>
    </aside>
  )
}
