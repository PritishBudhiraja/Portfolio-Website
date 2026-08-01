"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, Mail } from "lucide-react"
import { TextReveal } from "@/components/motion/text-reveal"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container"
import { OriginButton, OriginButtonOutline } from "@/components/ui/origin-button"
import { SectionLabel } from "@/components/ui/section-label"

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 md:pt-0 md:pb-0 overflow-hidden grid-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <div className="w-full md:w-3/5 space-y-8">
            <div className="space-y-4">
              <SectionLabel>Software Engineer</SectionLabel>

              <div className="overflow-hidden pb-2">
                <TextReveal
                  as="h1"
                  className="text-hero font-serif font-medium tracking-tight"
                  delay={0.2}
                  letterDelay={0.03}
                >
                  Hi, I'm Pritish Budhiraja
                </TextReveal>
              </div>

              <FadeIn delay={0.6} direction="up">
                <h2 className="text-subsection font-display font-medium text-foreground/70">
                  Building scalable products with modern web technologies
                </h2>
              </FadeIn>
            </div>

            <FadeIn delay={0.8} direction="up">
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Full-stack engineer specializing in React, TypeScript, and cloud infrastructure. 
                Currently building AI-powered testing platforms at TestZeus, previously shipping 
                payment solutions at Juspay.
              </p>
            </FadeIn>

            <FadeIn delay={1} direction="up">
              <div className="flex flex-wrap gap-4 pt-2">
                <OriginButton href="#contact">
                  Contact Me <ArrowRight className="h-5 w-5" />
                </OriginButton>
                <OriginButtonOutline href="/resume">
                  View Resume <FileText className="h-5 w-5" />
                </OriginButtonOutline>
                <OriginButtonOutline href="#experience">
                  View Experience
                </OriginButtonOutline>
              </div>
            </FadeIn>

            <StaggerContainer delay={1.2} staggerDelay={0.1} className="pt-4">
              <div className="flex items-center gap-5">
                <StaggerItem>
                  <a
                    href="https://linkedin.com/in/pritish-budhiraja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                  </a>
                </StaggerItem>
                <StaggerItem>
                  <a
                    href="https://github.com/PritishBudhiraja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                  </a>
                </StaggerItem>
                <StaggerItem>
                  <a
                    href="mailto:pritish.budhiraja@gmail.com"
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-300"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                  </a>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>

          <FadeIn delay={0.8} direction="left" className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent animate-glow-pulse" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/15 to-transparent" />
                <div className="absolute inset-8 rounded-full overflow-hidden bg-slate-100 dark:bg-black border-2 border-primary/30 shadow-2xl shadow-primary/20">
                  <img
                    src="/images/profile.png"
                    alt="Pritish Budhiraja"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full -z-10" />
    </section>
  )
}
