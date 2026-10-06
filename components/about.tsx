import Link from "next/link"
import { MarginNote } from "@/components/margin-note"

function greetingInKolkata() {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      hourCycle: "h23",
    }).format(new Date()),
  )

  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-14 px-4 py-8 sm:px-6">
      <MarginNote side="left" rotate={-10} className="top-4">
        the short version
      </MarginNote>
      <h2 className="mb-3 font-serif text-2xl italic tracking-tight">{greetingInKolkata()}</h2>
      <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
        <li>
          I&apos;m Pritish Budhiraja — a Senior Software Engineer who likes owning the path from UI
          to infra. React and TypeScript for the product; Docker, Kubernetes, and AWS for how it
          ships.
        </li>
        <li>
          Currently building AI-powered testing at{" "}
          <a
            href="https://www.testzeus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-2 hover:underline"
          >
            TestZeus
          </a>
          . Previously at{" "}
          <a
            href="https://juspay.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-2 hover:underline"
          >
            Juspay
          </a>{" "}
          on Hyperswitch — checkout SDKs, merchant dashboards, and the pipelines that put them in
          production.
        </li>
        <li>
          The work I care about is not a screen in isolation — it&apos;s the modules, the build, the
          deploy, and the services that keep a product reliable as a team keeps changing it.
        </li>
      </ul>
      <Link
        href="/about"
        className="mt-4 inline-block text-sm text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
      >
        More about me
      </Link>
    </section>
  )
}
