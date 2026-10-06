"use client"

import { Clock } from "lucide-react"
import { useEffect, useState } from "react"

const TIME_ZONE = "Asia/Kolkata"

function formatClock(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date)
}

function zoneOffsetMinutes(timeZone: string, date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date)

  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  const asUtc = Date.UTC(
    Number(value.year),
    Number(value.month) - 1,
    Number(value.day),
    Number(value.hour),
    Number(value.minute),
    Number(value.second),
  )

  return (asUtc - date.getTime()) / 60_000
}

function offsetLabel(date: Date) {
  const visitor = -date.getTimezoneOffset()
  const kolkata = zoneOffsetMinutes(TIME_ZONE, date)
  const diffHours = (kolkata - visitor) / 60

  if (Math.abs(diffHours) < 0.05) return "same time"

  const abs = Math.abs(diffHours)
  const rounded = Number.isInteger(abs) ? String(abs) : abs.toFixed(1)
  return diffHours > 0 ? `${rounded}h ahead` : `${rounded}h behind`
}

export function LocalTime() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(id)
  }, [])

  if (!now) {
    return (
      <span
        suppressHydrationWarning
        className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground"
      >
        <Clock className="h-3.5 w-3.5" />
        --:--
      </span>
    )
  }

  return (
    <span suppressHydrationWarning className="inline-flex items-center gap-1.5 font-mono text-sm">
      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
      {formatClock(now)}
      <span className="text-muted-foreground">/ {offsetLabel(now)}</span>
    </span>
  )
}
