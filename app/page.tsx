import type { Metadata } from "next"
import About from "@/components/about"
import Contact from "@/components/contact"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import Footer from "@/components/footer"
import { GithubContributions } from "@/components/github-contributions"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import { Hatch, SiteFrame } from "@/components/site-frame"
import { Stack } from "@/components/stack"
import { getGithubContributions } from "@/lib/github-contributions"
import { SITE_DESCRIPTION, SITE_OG_IMAGES, SITE_TITLE } from "@/lib/site-config"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: SITE_OG_IMAGES,
  },
}

export default async function Home() {
  const contributions = await getGithubContributions()

  return (
    <SiteFrame>
      <Navbar />
      <main>
        <Hero />
        {contributions ? <GithubContributions data={contributions} /> : null}
        <Hatch />
        <About />
        <Hatch />
        <Stack />
        <Hatch />
        <Experience />
        <Hatch />
        <Education />
        <Hatch />
        <Projects />
        <Hatch />
        <Contact />
      </main>
      <Footer />
    </SiteFrame>
  )
}
