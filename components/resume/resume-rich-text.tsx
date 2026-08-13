import type { TextPart } from "@/lib/resume-data"

export function ResumeRichText({ parts }: { parts: TextPart[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === "string") {
          return <span key={i}>{part}</span>
        }
        if ("bold" in part) {
          return (
            <strong key={i} className="font-semibold text-[var(--resume-text)]">
              {part.bold}
            </strong>
          )
        }
        if ("italic" in part) {
          return (
            <em key={i} className="italic">
              {part.italic}
            </em>
          )
        }
        return (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--resume-link)] underline-offset-2 hover:underline"
          >
            {part.link}
          </a>
        )
      })}
    </>
  )
}
