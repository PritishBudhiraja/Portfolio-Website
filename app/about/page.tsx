import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import Navbar from "@/components/navbar"
import { Hatch, SiteFrame } from "@/components/site-frame"
import { OriginButton, OriginButtonOutline } from "@/components/ui/origin-button"
import { getBreadcrumbJsonLd } from "@/lib/json-ld"
import { SITE_DESCRIPTION, SITE_JOB_TITLE, SITE_NAME, SITE_OG_IMAGES } from "@/lib/site-config"

export const metadata: Metadata = {
  title: { absolute: `About ${SITE_NAME} | ${SITE_JOB_TITLE}` },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: "/about",
    type: "profile",
    firstName: "Pritish",
    lastName: "Budhiraja",
    images: SITE_OG_IMAGES,
  },
}

const breadcrumbJsonLd = getBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: `About ${SITE_NAME}`, path: "/about" },
])

export default function AboutPage() {
  return (
    <SiteFrame>
      <JsonLd data={breadcrumbJsonLd} />
      <Navbar />
      <main>
        <article className="px-4 py-8 sm:px-6">
          <header className="mb-8">
            <p className="mb-2 font-mono text-xs text-muted-foreground">About</p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              About Pritish Budhiraja
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Senior Software Engineer in Bangalore. React, TypeScript, AI testing, payments, and
              the cloud path that ships them.
            </p>
          </header>

          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Pritish Budhiraja, a Senior Software Engineer who likes owning the path from
              UI to infra. The work I care about is not a screen in isolation — it&apos;s the
              modules, the build, the deploy, and the services that keep a product reliable as a
              team keeps changing it.
            </p>
            <p>
              These days that means AI-powered testing at{" "}
              <a
                href="https://www.testzeus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                TestZeus
              </a>
              . Before that I spent a few years at{" "}
              <a
                href="https://juspay.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Juspay
              </a>{" "}
              on Hyperswitch — checkout SDKs, merchant dashboards, and the pipelines that put them
              in production.
            </p>
          </div>
        </article>

        <Hatch />

        <section className="space-y-4 px-4 py-8 text-sm leading-relaxed text-muted-foreground sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Currently at TestZeus</h2>
          <p>
            At TestZeus I own the frontend architecture end-to-end: feature-sliced modules, the Vite
            build, Docker, and Kubernetes on GKE. The job is making the codebase something a team
            can keep changing without it falling apart — including repo-wide formatting and
            structure with Biome, so reviews stay about the change, not the style.
          </p>
          <p>
            A large part of that work is the Teach Agent. You record a browser session; the platform
            turns it into Gherkin scenarios and executable Python tests. That only works if artifact
            processing is asynchronous and generation is progressive — not a single prompt dumped
            into a box. I also built the Composio-based integration layer so connecting GitHub,
            Jira, or another source of truth is an extension, not a rewrite. Fifteen-plus apps sit
            on that path today: connect an account, build a knowledge base, generate tests.
          </p>
          <p>
            On the commercial side I implemented usage-based billing and quota enforcement with
            Flexprice and Redis — real-time events, per-user metrics, cancelled-run recovery, and
            clear feedback when a quota is exhausted. Security and reliability sit next to that: JWT
            revocation, tenant-derived auth, login audit trails, deployment health checks, and
            Sentry.
          </p>
        </section>

        <Hatch />

        <section className="space-y-4 px-4 py-8 text-sm leading-relaxed text-muted-foreground sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Previously at Juspay</h2>
          <p>
            I joined Juspay as an Associate Software Development Engineer in late 2022 and left as
            an SDE I in 2025. Most of that time was{" "}
            <a
              href="https://hyperswitch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              Hyperswitch
            </a>
            .
          </p>
          <p>
            I led the Hyperswitch Dashboard from zero to production in ReScript and React, so
            merchants could configure 25+ payment processors without a backend change for common
            cases. I also built HyperStudio for layout and white-labeling, and owned the Web SDK
            across six merchants: dynamic fields per payment method, faster first load via
            tree-shaking and lazy-loading, and CloudFront Functions for version-pinned rollouts.
            CI/CD went through Jenkins to S3 and CloudFront, with GitHub Actions as PR gates.
          </p>
          <p>
            The Web SDK is open source. I triaged production defects from merchants on that repo,
            and I mentored five engineers through design reviews and onboarding.
          </p>
          <p>
            Before Juspay I shipped seller-side purchase journeys at ZFunds — health insurance and
            fixed deposits — and interned at HighRadius on ML-assisted billing and collections:
            Spring on the back end, React dashboards, and Python scoring services.
          </p>
        </section>

        <Hatch />

        <section className="space-y-4 px-4 py-8 text-sm leading-relaxed text-muted-foreground sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">
            Frontend, cloud, and the path between them
          </h2>
          <p>
            The work I like most sits at the boundary. React and TypeScript for the product. AWS,
            Docker, and Kubernetes for how it ships. Redis when usage or rate limits have to be
            correct, not approximate. I care about the boring parts: lint and format consistency, PR
            checks that catch regressions, and rollouts that don&apos;t surprise merchants.
          </p>
          <p>
            On the side I&apos;ve built a Fastify URL shortener with Redis analytics, and an API
            gateway that implements token bucket, sliding window, and fixed window in Redis — with
            comments on every command, because I wanted the code to teach the algorithm, not just
            run it.
          </p>
        </section>

        <Hatch />

        <section className="space-y-4 px-4 py-8 text-sm leading-relaxed text-muted-foreground sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Open source</h2>
          <p>
            At Juspay I worked on the Hyperswitch Web SDK in the open, and on{" "}
            <a
              href="https://www.npmjs.com/package/@juspay-tech/react-hyper-js"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              react-hyper-js
            </a>
            , a React wrapper for Hyper JS that merchants use to drop Hyperswitch into a React app.
            That package sees on the order of four thousand weekly downloads on npm.
          </p>
        </section>

        <Hatch />

        <section className="space-y-4 px-4 py-8 text-sm leading-relaxed text-muted-foreground sm:px-6">
          <h2 className="text-lg font-semibold text-foreground">Education</h2>
          <p>
            I studied Computer Science Engineering at Kalinga Institute of Industrial Technology
            (KIIT) in Bhubaneswar from 2018 to 2022, graduating with a 9.60 CGPA. Bangalore is home
            now.
          </p>
        </section>

        <Hatch />

        <section className="px-4 py-8 sm:px-6">
          <h2 className="mb-3 text-lg font-semibold">Get in touch</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you want the compressed version, the{" "}
            <Link
              href="/resume"
              className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              resume
            </Link>{" "}
            is here. If you want to talk about frontend systems, AI testing, payments, or cloud
            delivery, email me or find me on LinkedIn and GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <OriginButton href="/resume" className="h-10 px-5 text-sm">
              View resume
            </OriginButton>
            <OriginButtonOutline href="/#contact" className="h-10 px-5 text-sm">
              Get in touch
            </OriginButtonOutline>
          </div>
        </section>
      </main>
      <Footer />
    </SiteFrame>
  )
}
