"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Software Development Engineer I",
    company: "JUSPAY",
    location: "Bangalore",
    period: "April 2024 - Present",
    responsibilities: [
      "Led a team of 5-6 engineers working on Hyperswitch Web SDK, implementing new payment methods and refactoring codebase for scalability.",
      "Optimized SDK build process and introduced versioning, improving performance metrics and reducing load times by 30%.",
      "Established complete CI/CD pipeline with Jenkins for automated builds and deployments to AWS S3 with CloudFront integration.",
      "Gained deep expertise in AWS infrastructure, refining S3 structures to ensure optimal scalability and content delivery.",
      "Managed all merchant support queries related to Web SDK, delivering requirements on schedule with clear communication.",
      "Conducted thorough code reviews, enforced best practices, and maintained high code quality standards across the team.",
      "Successfully onboarded new team members with structured tasks and clear guidance, enhancing team productivity.",
    ],
  },
  {
    title: "Associate Software Development Engineer",
    company: "JUSPAY",
    location: "Bangalore",
    period: "December 2022 - April 2024",
    responsibilities: [
      "Built the foundational architecture of Hyperswitch Dashboard from scratch using ReScript and React, supporting integration with 25+ global payment processors.",
      "Led multiple UI revamps of the merchant-facing dashboard, enabling businesses to configure and manage payment connectors seamlessly.",
      "Contributed to HyperStudio development, creating flexible layout configurations and UI customization tools for the SDK.",
      "Designed and developed responsive, reusable UI components in ReScript that ensure consistent experience across devices.",
      "Implemented state management using Recoil for efficient data flow and optimized application performance.",
    ],
  },
  {
    title: "Software Development Engineer-1",
    company: "ZFunds",
    location: "Gurugram",
    period: "August 2022 - December 2022",
    responsibilities: [
      "Building various Product Based Requirement Changes in the ZFunds Website, Advisor & User App.",
      "Performed Speed Search Optimisation for the Web Pages.",
      "Created APIs in Fast API in Python with MongoDB & in Node JS with AWS DynamoDB.",
      "Created Various Screen & Fixed Bugs in the Existing screens of both Zfunds User App & Advisor App.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Highradius Technologies",
    location: "Remote",
    period: "June 2021 - July 2022",
    responsibilities: [
      "Built various Client Based Requirement Applications for the Autonomous Collections Team.",
      "Build React Components from Scratch worked on various screens and implementation.",
      "Build Backend APIs in Java Servlets, Struts, Hibernate, and Spring framework.",
      "Performed full life cycle of a User story: Documentation, Building the components, Writing Unit Test Cases.",
      "Performed Regression Testing and Peer Testing apart from the Development part.",
      "Learnt about the CI/CD process & Agents.",
      "Managed, Guided, and Led New Interns in their Winter Intern Training phase as a POD Lead. Helped and guided in both their Front-end and Back-end.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Highradius Technologies",
    location: "Remote",
    period: "April 2021 - May 2021",
    responsibilities: [
      "Built an Autonomous Call Work board: This is used to help the B2B companies to track and Analyze when the Payment of their Due Amount will be paid and how much delay will be there in a graphical manner.",
      "Performed the Create, Read, Update, Delete, Analysis with Highcharts & Search functionality (Debouncing) with all edge case Error Handling with Loading Skeletons.",
      "Technologies: MYSQL, Java Servlets, Java Hibernate, Spring MVC, React-JS, Material-UI, Redux, Redux Sagas, Highcharts.",
    ],
  },
  {
    title: "Software Engineer Intern (Part-time)",
    company: "Highradius Technologies",
    location: "Remote",
    period: "January 2021 - March 2021",
    responsibilities: [
      "Built an AI-Enabled Fin-tech Bill Management Application: This is used to help B2B companies to track and predict the payment of their Due Amount by Sellers.",
      "Made a prediction model and packetization strategy for power prediction.",
      "Wrote APIs for CRUD and Search along with UI: including debounced search, Skeletons.",
      "Technologies: Python (AI/ML), Java Servlets, MySQL, ReactJS, Material-UI, Redux.",
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
            My professional journey as a software developer, from internships to leading development teams.
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

function ExperienceCard({ experience }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                <div className="flex items-center text-primary">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span>{experience.company}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{experience.period}</span>
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
            "px-6 overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "max-h-[1000px] pb-6" : "max-h-0",
          )}
        >
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
