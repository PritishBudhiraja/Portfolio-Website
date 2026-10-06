import { Briefcase, Mail, MapPin, Phone } from "lucide-react"
import { CopyButton } from "@/components/copy-button"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { LocalTime } from "@/components/local-time"
import { resumeMeta } from "@/lib/resume-data"
import { SOCIAL_LINKS } from "@/lib/site-config"

const socials = [
  { name: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon },
  { name: "GitHub", href: SOCIAL_LINKS.github, icon: GithubIcon },
  { name: "Email", href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail },
] as const

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-14 px-4 pb-2 pt-8 sm:px-6">
      <div className="flex items-start gap-4 sm:gap-5">
        <img
          src="/images/profile.png"
          alt={resumeMeta.name}
          className="h-20 w-20 shrink-0 rounded-full border border-border object-cover object-top sm:h-24 sm:w-24"
        />
        <div className="min-w-0 pt-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{resumeMeta.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            I build the frontend systems behind AI testing and payments.
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "Email" ? undefined : "_blank"}
                rel={item.name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={item.name}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <item.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 border-t border-dashed border-border pt-5 text-sm sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <Briefcase className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          <dt className="sr-only">Role</dt>
          <dd>
            {resumeMeta.title}{" "}
            <a
              href="https://www.testzeus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
            >
              @TestZeus
            </a>
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="sr-only">Local time</dt>
          <dd>
            <LocalTime />
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          <dt className="sr-only">Location</dt>
          <dd>{resumeMeta.location}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          <dt className="sr-only">Phone</dt>
          <dd className="flex min-w-0 items-center gap-1">
            <a href={`tel:${resumeMeta.phone}`} className="truncate hover:underline">
              {resumeMeta.phoneDisplay}
            </a>
            <CopyButton value={resumeMeta.phone} label="Phone number" />
          </dd>
        </div>
        <div className="flex items-center gap-2 sm:col-span-2">
          <Mail className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          <dt className="sr-only">Email</dt>
          <dd className="flex min-w-0 items-center gap-1">
            <a href={`mailto:${resumeMeta.email}`} className="truncate hover:underline">
              {resumeMeta.email}
            </a>
            <CopyButton value={resumeMeta.email} label="Email address" />
          </dd>
        </div>
      </dl>
    </section>
  )
}
