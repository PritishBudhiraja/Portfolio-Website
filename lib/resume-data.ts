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
  phone: "+91-8979984894",
  phoneDisplay: "+91-8979984894",
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
            "Owned the ",
            { bold: "React" },
            " and ",
            { bold: "TypeScript" },
            " frontend for TestZeus's AI testing product: how screens are structured, a shared design system so UI stays consistent, and automated checks that cleared ~500 structural issues and now block messy changes from shipping.",
          ],
          [
            "Made the product open faster by cutting the first-load JavaScript and CSS from ",
            { bold: "3.65 MB to 644 KB (82% smaller)" },
            ", then to ",
            { bold: "338.5 KB" },
            ", and added build budgets so that size cannot creep back unnoticed.",
          ],
          [
            "Built in-product browser recording: users record a session on a test, the platform turns it into readable scenarios and runnable tests in the background, and other runs wait until that work is finished.",
          ],
          [
            "Built the integration layer so teams can connect tools (issue trackers, source control, and similar apps) without mixing one customer's data with another's, and so \"connected\" accounts that have actually expired get flagged instead of failing silently.",
          ],
          [
            "Shipped nested folders across seven major lists — tests, runs, knowledge bases, and related pages — in both the interface and the API, so large workspaces stay organized the same way everywhere.",
          ],
          [
            "Closed gaps in usage billing and quotas so limits apply when a connection is actually in use, exhausted capacity recovers correctly, and the product shows a clear error instead of failing with no explanation.",
          ],
          [
            "Set up ",
            { bold: "Sentry" },
            " across TestZeus services so error reports come only from real deployed environments, not laptops or internal clusters — production incidents stand out instead of getting buried in noise.",
          ],
          [
            "Owned backend work on the ",
            { bold: "Node.js / PocketBase" },
            " gateway: faster list APIs under load (skip expensive full counts, cached totals, database indexes), cheaper status checks, and clear errors the product can show — so the app is not sitting on a slow or leaking API.",
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
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "ReScript", "Python", "SQL"],
  },
  {
    label: "Frontend engineering",
    items: ["React", "Next.js", "Vite", "Webpack", "Tailwind CSS", "Design systems"],
  },
  {
    label: "Infra & delivery",
    items: [
      "Docker",
      "Kubernetes",
      "nginx",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "AWS",
      "S3",
      "CloudFront",
      "Git",
    ],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "PocketBase", "Redis", "REST", "Sentry"],
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
