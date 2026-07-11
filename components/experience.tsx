"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ChevronDown, ChevronUp, MapPin, ExternalLink } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Role = {
  title: string
  period: string
  responsibilities: string[]
}

type Experience = {
  company: string
  companyUrl: string
  logo: string
  location: string
  totalPeriod: string
  roles: Role[]
}

const experiences: Experience[] = [
  {
    company: "TestZeus",
    companyUrl: "https://www.testzeus.com/",
    logo: "/images/logos/testzeus.png",
    location: "Bangalore",
    totalPeriod: "August 2025 - Present",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "August 2025 - Present",
        responsibilities: [
          "Leading frontend development and architecting next-generation testing automation platforms powered by Agentic AI, spanning UI architecture, performance optimization, and building frameworks that help teams test faster and smarter.",
          "Owned the frontend architecture end-to-end — from feature-sliced module design to the build and deployment pipeline (Vite, Docker, Kubernetes/GKE) — enabling scalable, reliable delivery as the product grew.",
          "Built the end-to-end Teach Agent workflow, using Steel Dev (self-hosted browser automation) to record browser sessions and convert them into AI-generated Gherkin scenarios and executable Python tests through asynchronous artifact processing.",
          "Architected the Composio-based integration service enabling 15+ connected-app integrations across source control and enterprise tools; powers the flow from account connection to knowledge-base creation to AI-generated test cases.",
          "Implemented usage-based billing and quota enforcement using Flexprice and Redis with real-time event monitoring, per-user usage-metric tracking, pre-execution validation, and quota-exhaustion feedback.",
          "Strengthened platform security through JWT revocation, tenant-derived authentication, login audit trails, and improved production reliability with deployment health checks, stale-chunk recovery, and Sentry-based observability.",
        ],
      },
    ],
  },
  {
    company: "JUSPAY",
    companyUrl: "https://juspay.in/",
    logo: "/images/logos/juspay.svg",
    location: "Bangalore",
    totalPeriod: "December 2022 - August 2025 · 2 yrs 8 mos",
    roles: [
      {
        title: "Software Development Engineer I",
        period: "April 2024 - August 2025",
        responsibilities: [
          "Led a team of 5-6 engineers working on Hyperswitch Web SDK, implementing new payment methods and refactoring codebase for scalability.",
          "Expanded Payment Integrations — Implemented support for multiple payment methods, ensuring a seamless checkout experience for merchants across 6+ enterprise integrations.",
          "Versioning & Build Optimization — Introduced versioning in the SDK, optimized the build process with tree-shaking and lazy-loading, reducing initial load times significantly.",
          "CI/CD & Deployment Automation — Set up the entire Jenkins pipeline for deployment, enabling automated builds pushed to S3 with CloudFront behavior updates across 3 environments.",
          "AWS & Scalability — Gained deep insights into AWS dynamics, refining S3 structures and implementing CloudFront Functions for version pinning to ensure safe, predictable rollouts.",
          "Thorough PR Reviews & Best Practices — Reviewed pull requests efficiently, motivating the team to follow best coding practices and maintaining high-quality standards.",
          "Onboarding & Mentorship — Successfully onboarded 5 new team members by providing structured tasks, clear guidance, and proper knowledge transfer.",
        ],
      },
      {
        title: "Associate Software Development Engineer",
        period: "December 2022 - April 2024",
        responsibilities: [
          "Core Member of Hyperswitch Dashboard — Built the Hyperswitch Dashboard from scratch using ReScript and React, leading multiple UI revamps to enhance user experience and performance.",
          "Merchant Dashboard Development — Designed and developed the merchant-facing dashboard, empowering businesses to configure, enable, and disable 25+ payment connectors seamlessly.",
          "HyperStudio & UI Customization — Contributed to HyperStudio, enabling flexible layout configurations and UI customization for SDK white-labeling.",
          "Reusable Components & Responsive UI — Developed multiple reusable UI components and mobile-responsive layouts in ReScript with Recoil-backed state management for predictable performance.",
        ],
      },
    ],
  },
  {
    company: "ZFunds",
    companyUrl: "https://zfunds.in/",
    logo: "/images/logos/zfunds.jpg",
    location: "Gurugram",
    totalPeriod: "August 2022 - December 2022 · 5 mos",
    roles: [
      {
        title: "Software Development Engineer",
        period: "August 2022 - December 2022",
        responsibilities: [
          "Enhanced User & Advisor Experiences — Played a key role in improving both the User and Advisor applications, along with the ZFunds Web Application, by developing new features and optimizing workflows.",
          "Feature Development — Designed and implemented core functionalities including Health Insurance and Fixed Deposits modules for the Advisor App, enabling advisors to offer diverse financial products efficiently.",
          "Cart Flow Optimization — Revamped and optimized the cart flow for both User and Advisor applications, ensuring a seamless and intuitive checkout experience.",
          "Backend API Development — Built robust APIs using FastAPI and Node.js with DynamoDB and MongoDB, ensuring efficient data fetching and real-time interactions.",
        ],
      },
    ],
  },
  {
    company: "HighRadius Technologies",
    companyUrl: "https://www.highradius.com/",
    logo: "/images/logos/highradius.png",
    location: "Remote",
    totalPeriod: "January 2021 - July 2022 · 1 yr 7 mos",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "January 2021 - July 2022",
        responsibilities: [
          "Full Stack Developer on Autonomous Collections Team — Designed and built multiple custom applications tailored to client requirements for automated collections workflows.",
          "Built the Autonomous Call Workboard — Designed a workboard for B2B companies to track and analyze payment timelines using interactive graphical representations with Highcharts.",
          "AI-Enabled Bill Management System — Built a smart financial application using Python (Scikit-learn) and Flask to help B2B fintech firms automate bill tracking with AI-driven predictions.",
          "Backend Development — Built RESTful APIs using Java (Struts, Spring, Hibernate) and Python (Flask), ensuring efficient data management and seamless service communication.",
          "Frontend Development — Developed React components with Material-UI and Redux from scratch, implementing debounced search, loading skeletons, and comprehensive error handling.",
          "Mentorship & Leadership — Led and mentored new interns during their Winter Intern Training Phase as a POD Lead, guiding them in both frontend and backend development.",
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
          <p className="text-lg text-center max-w-3xl text-muted-foreground">
            My professional journey as a software engineer, from internships to leading development teams.
          </p>
        </div>

        <div className="space-y-6 mt-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasMultipleRoles = experience.roles.length > 1

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-shrink-0 hidden sm:block"
              >
                <div className="w-14 h-14 rounded-xl bg-white border border-border/50 p-2 hover:border-primary/50 transition-colors overflow-hidden flex items-center justify-center shadow-sm">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>
              </a>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xl font-semibold text-primary hover:underline group flex items-center gap-1"
                  >
                    {experience.company}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
                {!hasMultipleRoles && (
                  <h3 className="text-lg font-medium mt-0.5">{experience.roles[0].title}</h3>
                )}
                {hasMultipleRoles && (
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {experience.roles.length} roles
                  </p>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{experience.totalPeriod}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="self-end md:self-center text-muted-foreground hover:text-primary transition-colors"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "max-h-[3000px]" : "max-h-0"
          )}
        >
          <div className="px-6 pb-6 pt-2 sm:pl-24 border-t border-border/30">
            {experience.roles.map((role, roleIdx) => (
              <div
                key={roleIdx}
                className={cn(
                  "relative",
                  hasMultipleRoles && "pl-6 border-l-2 border-primary/30",
                  roleIdx > 0 && "mt-8 pt-2"
                )}
              >
                {hasMultipleRoles && (
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                )}
                <div className={cn(hasMultipleRoles ? "pl-4" : "")}>
                  {(hasMultipleRoles || roleIdx > 0) && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                      <h4 className="font-semibold text-foreground text-base">{role.title}</h4>
                      <span className="text-sm text-muted-foreground">{role.period}</span>
                    </div>
                  )}
                  <ul className="list-disc pl-5 space-y-3 text-muted-foreground text-sm leading-relaxed">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
