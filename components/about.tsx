"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { AnimatedUnderline } from "@/components/motion/animated-underline"

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <FadeIn>
            <h2 className="text-display-md font-display font-bold mb-4 text-center">About Me</h2>
          </FadeIn>
          <AnimatedUnderline className="mb-8" />
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-center max-w-3xl text-muted-foreground leading-relaxed">
              I'm a Senior Software Engineer with expertise in building scalable web applications, AI-powered platforms,
              and payment solutions. With a strong foundation in computer science and hands-on experience in frontend
              architecture, cloud infrastructure, and full-stack development, I strive to create efficient and
              user-friendly digital experiences.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <StaggerItem>
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <a
                    href="https://kiit.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white border border-border/50 p-1.5 hover:border-primary/50 transition-colors overflow-hidden flex items-center justify-center shadow-sm">
                      <img
                        src="/images/logos/KIIT-logo.png"
                        alt="KIIT logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold mb-3">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <a
                          href="https://kiit.ac.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                        >
                          Kalinga Institute of Industrial Technology (KIIT)
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          B.Tech in Computer Science Engineering
                        </p>
                        <div className="flex justify-between mt-2">
                          <p className="text-sm text-muted-foreground">2018 - 2022</p>
                          <p className="text-sm font-semibold text-primary">CGPA: 9.60/10.0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <a
                    href="https://www.testzeus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white border border-border/50 p-2 hover:border-primary/50 transition-colors overflow-hidden flex items-center justify-center shadow-sm">
                      <img
                        src="/images/logos/testzeus.png"
                        alt="TestZeus logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold mb-3">Current Role</h3>
                    <div>
                      <a
                        href="https://www.testzeus.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                      >
                        Senior Software Engineer at TestZeus
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Owning frontend architecture and building AI-powered testing platform
                      </p>
                      <div className="flex justify-between mt-2">
                        <p className="text-sm text-muted-foreground">August 2025 - Present</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        Working on Kubernetes deployments, Composio integrations, usage-based billing, and platform security
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
