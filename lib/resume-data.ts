export type TextPart =
  | string
  | { bold: string }
  | { link: string; href: string }
  | { italic: string }

type ResumeBullet = TextPart[]

type ResumeRole = {
  title: string
  period: string
  bullets: ResumeBullet[]
}

export type ResumeCompany = {
  company: string
  companyUrl: string
  logo: string
  location: string
  /** Primary role shown in the heading row */
  title: string
  period: string
  roles: ResumeRole[]
}

export type SkillGroup = {
  label: string
  items: string[]
}

export const resumeMeta = {
  name: "Pritish Budhiraja",
  title: "Senior Software Engineer",
  tagline: "Full-stack AI builder",
  location: "Bangalore, India",
  email: "pritish.budhiraja@gmail.com",
  phone: "+91-897-9984-894",
  phoneDisplay: "+91-897-9984-894",
  website: "https://www.pritishbudhiraja.com",
  websiteLabel: "pritishbudhiraja.com",
  linkedin: "https://www.linkedin.com/in/pritish-budhiraja/",
  linkedinLabel: "pritish-budhiraja",
  github: "https://github.com/PritishBudhiraja",
  githubLabel: "PritishBudhiraja",
} as const

export const professionalExperience: ResumeCompany[] = [
  {
    company: "TestZeus",
    companyUrl: "https://www.testzeus.com/",
    logo: "/images/logos/testzeus.png",
    location: "Bangalore",
    title: "Senior Software Engineer",
    period: "August 2025 – Present",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "August 2025 – Present",
        bullets: [
          [
            "Owned the frontend architecture end-to-end for the platform — from feature-sliced module design to the build and deployment pipeline (",
            { bold: "Vite" },
            ", ",
            { bold: "Docker" },
            ", ",
            { bold: "Kubernetes/GKE" },
            ") — enabling scalable, reliable delivery as the product grew.",
          ],
          [
            "Standardized code structure and formatting repo-wide using ",
            { bold: "Biome" },
            ", improving consistency, review quality, and maintainability across the codebase.",
          ],
          [
            "Built the end-to-end ",
            { bold: "Teach Agent" },
            " workflow, using ",
            { bold: "Steel Dev" },
            " (self-hosted, open-source browser automation) to record browser sessions and convert them into AI-generated Gherkin scenarios and executable Python tests through asynchronous artifact processing and progressive generation.",
          ],
          [
            "Architected the ",
            { bold: "Composio" },
            "-based integration service to be extensible by design, enabling 15+ connected-app integrations across source control and enterprise tools with new connectors added easily; powers the end-to-end flow from account connection to knowledge-base creation to AI-generated test cases.",
          ],
          [
            "Implemented usage-based billing and quota enforcement using ",
            { bold: "Flexprice and Redis" },
            ", adding real-time event monitoring and per-user usage-metric tracking alongside pre-execution validation, cancelled-run slot recovery, and quota-exhaustion feedback.",
          ],
          [
            "Strengthened platform security and reliability through JWT revocation, tenant-derived authentication, login audit trails, deployment health checks, stale-chunk recovery, and Sentry-based observability — reducing unauthorized access and incident response time.",
          ],
        ],
      },
    ],
  },
  {
    company: "Juspay",
    companyUrl: "https://juspay.in/",
    logo: "/images/logos/juspay.svg",
    location: "Bangalore",
    title: "Software Development Engineer I",
    period: "April 2024 – August 2025",
    roles: [
      {
        title: "Software Development Engineer I",
        period: "April 2024 – August 2025",
        bullets: [
          [
            "Owned technical delivery for the ",
            { link: "Hyperswitch", href: "https://hyperswitch.io/" },
            " Web SDK across ",
            { bold: "6 merchants" },
            ", building dynamic UI rendering that adapted required fields per payment method and surfacing clear error messages for malformed or missing payment data to speed up merchant-side debugging.",
          ],
          [
            "Reduced SDK initial load time through tree-shaking and lazy-loading of components, with version pinning enforced via ",
            { bold: "AWS CloudFront Functions" },
            " for safe, predictable rollouts.",
          ],
          [
            "Owned the SDK's path to production: Jenkins-based CI/CD to S3 + CloudFront across ",
            { bold: "3 environments" },
            ", hardened by ",
            { bold: "GitHub Actions" },
            " PR gates (lint, tests, build checks) that caught regressions before they shipped.",
          ],
          [
            "Triaged and resolved production defects reported by merchants on the open-source Web SDK repo, keeping enterprise integrations unblocked.",
          ],
          [
            "Mentored ",
            { bold: "5" },
            " engineers through design reviews and structured on-boarding; raised the bar on reviews, testing, and operational readiness for Web SDK changes.",
          ],
        ],
      },
      {
        title: "Associate Software Development Engineer",
        period: "December 2022 – April 2024",
        bullets: [
          [
            "Led development of the ",
            { link: "Hyperswitch Dashboard", href: "https://app.hyperswitch.io/" },
            " (ReScript, React) from zero to production, enabling configuration and operations across 25+ global payment processors; owned UX and connector-configuration flows so merchants could onboard without backend changes for common cases.",
          ],
          [
            "Built HyperStudio (layout and UI customization) to extend SDK white-labeling; paired reusable ReScript components with Recoil-backed state for predictable performance.",
          ],
        ],
      },
    ],
  },
  {
    company: "ZFunds",
    companyUrl: "https://zfunds.in/",
    logo: "/images/logos/zfunds.jpg",
    location: "Gurugram",
    title: "Software Development Engineer",
    period: "August 2022 – December 2022",
    roles: [
      {
        title: "Software Development Engineer",
        period: "August 2022 – December 2022",
        bullets: [
          [
            "Shipped seller-side purchase journeys for health insurance and fixed deposits (two of ZFunds's top-selling lines); debugged post-release data mismatches across advisor, investor, and web flows; and rebuilt cart validation/payout logic for advisor-assisted and self-checkout bookings.",
          ],
        ],
      },
    ],
  },
]

export const earlyExperience: ResumeCompany[] = [
  {
    company: "HighRadius Technologies",
    companyUrl: "https://www.highradius.com/",
    logo: "/images/logos/highradius.png",
    location: "Remote",
    title: "Software Engineer Intern",
    period: "January 2021 – July 2022",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "January 2021 – July 2022",
        bullets: [
          [
            "Contributed to ML-assisted billing and the autonomous collections workstation (",
            { italic: "Autonomous Call Workboard" },
            ") — dialing lists, timelines, debounced lookups — with back-end work in Spring (Hibernate/Struts), React/Material UI dashboards with Highcharts, and Python/Flask/Scikit-learn scoring services on MySQL; mentored interns on reviews and task breakdown.",
          ],
        ],
      },
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "ReScript", "Python", "SQL"],
  },
  {
    label: "Frontend engineering",
    items: [
      "React",
      "Component architecture",
      "State management",
      "Bundle / performance optimization",
    ],
  },
  {
    label: "Infra & delivery",
    items: ["Docker", "Kubernetes", "CI/CD (Jenkins)", "AWS (S3/CloudFront)", "Vite", "Webpack"],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "REST", "FastAPI", "MongoDB", "MySQL", "DynamoDB"],
  },
]

export const education = {
  school: "Kalinga Institute of Industrial Technology (KIIT)",
  schoolUrl: "https://kiit.ac.in",
  logo: "/images/logos/KIIT-logo.png",
  location: "Bhubaneswar, India",
  degree: "B.Tech in Computer Science Engineering",
  gpa: "CGPA: 9.60/10.0",
  period: "2018 – 2022",
} as const
