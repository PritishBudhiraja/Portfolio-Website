import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import Navbar from "@/components/navbar"
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
    <div className="min-h-screen bg-background">
      <JsonLd data={breadcrumbJsonLd} />
      <Navbar />
      <main className="pt-28 pb-24 md:pt-36 md:pb-32">
        <article className="container mx-auto px-4">
          <header className="mx-auto max-w-2xl mb-16 md:mb-20">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About
            </p>
            <h1 className="font-serif font-medium tracking-tight text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.1]">
              About Pritish Budhiraja
            </h1>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              Senior Software Engineer in Bangalore. React, TypeScript, AI testing, payments, and
              the cloud path that ships them.
            </p>
          </header>

          <div className="mx-auto max-w-2xl space-y-12 text-lg leading-relaxed text-muted-foreground md:text-xl">
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
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
              >
                TestZeus
              </a>
              . Before that I spent a few years at{" "}
              <a
                href="https://juspay.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
              >
                Juspay
              </a>{" "}
              on Hyperswitch — checkout SDKs, merchant dashboards, and the pipelines that put them
              in production.
            </p>

            <section>
              <h2 className="mb-5 font-display text-2xl font-bold text-foreground md:text-3xl">
                Currently at TestZeus
              </h2>
              <div className="space-y-5">
                <p>
                  At TestZeus I own the frontend architecture end-to-end: feature-sliced modules,
                  the Vite build, Docker, and Kubernetes on GKE. The job is making the codebase
                  something a team can keep changing without it falling apart — including repo-wide
                  formatting and structure with Biome, so reviews stay about the change, not the
                  style.
                </p>
                <p>
                  A large part of that work is the Teach Agent. You record a browser session; the
                  platform turns it into Gherkin scenarios and executable Python tests. That only
                  works if artifact processing is asynchronous and generation is progressive — not a
                  single prompt dumped into a box. I also built the Composio-based integration layer
                  so connecting GitHub, Jira, or another source of truth is an extension, not a
                  rewrite. Fifteen-plus apps sit on that path today: connect an account, build a
                  knowledge base, generate tests.
                </p>
                <p>
                  On the commercial side I implemented usage-based billing and quota enforcement
                  with Flexprice and Redis — real-time events, per-user metrics, cancelled-run
                  recovery, and clear feedback when a quota is exhausted. Security and reliability
                  sit next to that: JWT revocation, tenant-derived auth, login audit trails,
                  deployment health checks, and Sentry.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 font-display text-2xl font-bold text-foreground md:text-3xl">
                Previously at Juspay
              </h2>
              <div className="space-y-5">
                <p>
                  I joined Juspay as an Associate Software Development Engineer in late 2022 and
                  left as an SDE I in 2025. Most of that time was{" "}
                  <a
                    href="https://hyperswitch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                  >
                    Hyperswitch
                  </a>
                  .
                </p>
                <p>
                  I led the Hyperswitch Dashboard from zero to production in ReScript and React, so
                  merchants could configure 25+ payment processors without a backend change for
                  common cases. I also built HyperStudio for layout and white-labeling, and owned
                  the Web SDK across six merchants: dynamic fields per payment method, faster first
                  load via tree-shaking and lazy-loading, and CloudFront Functions for
                  version-pinned rollouts. CI/CD went through Jenkins to S3 and CloudFront, with
                  GitHub Actions as PR gates.
                </p>
                <p>
                  The Web SDK is open source. I triaged production defects from merchants on that
                  repo, and I mentored five engineers through design reviews and onboarding.
                </p>
                <p>
                  Before Juspay I shipped seller-side purchase journeys at ZFunds — health insurance
                  and fixed deposits — and interned at HighRadius on ML-assisted billing and
                  collections: Spring on the back end, React dashboards, and Python scoring
                  services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 font-display text-2xl font-bold text-foreground md:text-3xl">
                Frontend, cloud, and the path between them
              </h2>
              <div className="space-y-5">
                <p>
                  The work I like most sits at the boundary. React and TypeScript for the product.
                  AWS, Docker, and Kubernetes for how it ships. Redis when usage or rate limits have
                  to be correct, not approximate. I care about the boring parts: lint and format
                  consistency, PR checks that catch regressions, and rollouts that don&apos;t
                  surprise merchants.
                </p>
                <p>
                  On the side I&apos;ve built a Fastify URL shortener with Redis analytics, and an
                  API gateway that implements token bucket, sliding window, and fixed window in
                  Redis — with comments on every command, because I wanted the code to teach the
                  algorithm, not just run it.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 font-display text-2xl font-bold text-foreground md:text-3xl">
                Open source
              </h2>
              <p>
                At Juspay I worked on the Hyperswitch Web SDK in the open, and on{" "}
                <a
                  href="https://www.npmjs.com/package/@juspay-tech/react-hyper-js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                  react-hyper-js
                </a>
                , a React wrapper for Hyper JS that merchants use to drop Hyperswitch into a React
                app. That package sees on the order of four thousand weekly downloads on npm.
              </p>
            </section>

            <section>
              <h2 className="mb-5 font-display text-2xl font-bold text-foreground md:text-3xl">
                Education
              </h2>
              <p>
                I studied Computer Science Engineering at Kalinga Institute of Industrial Technology
                (KIIT) in Bhubaneswar from 2018 to 2022, graduating with a 9.60 CGPA. Bangalore is
                home now.
              </p>
            </section>

            <section>
              <h2 className="mb-5 font-display text-2xl font-bold text-foreground md:text-3xl">
                Get in touch
              </h2>
              <p>
                If you want the compressed version, the{" "}
                <Link
                  href="/resume"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                  resume
                </Link>{" "}
                is here. If you want to talk about frontend systems, AI testing, payments, or cloud
                delivery, email me or find me on LinkedIn and GitHub.
              </p>
            </section>
          </div>

          <div className="mx-auto mt-14 flex max-w-2xl flex-wrap gap-4">
            <OriginButton href="/resume">View resume</OriginButton>
            <OriginButtonOutline href="/#contact">Get in touch</OriginButtonOutline>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
