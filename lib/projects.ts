type ProjectLink = {
  label: string
  href: string
}

export type ProjectFrame =
  | "agent"
  | "checkout"
  | "dashboard"
  | "npm"
  | "api"
  | "gateway"
  | "integrations"
  | "studio"

export type Project = {
  title: string
  context: string
  summary: string
  tags: string[]
  links: ProjectLink[]
  featured?: boolean
  frame: ProjectFrame
  colSpan: 1 | 2 | 3
}

export const projects: Project[] = [
  {
    title: "Teach Agent",
    context: "TestZeus · 2025",
    summary:
      "Record a browser session and get Gherkin scenarios plus executable Python tests — async artifact processing, not a prompt in a box.",
    tags: ["React", "Steel Dev", "Python", "Async pipelines"],
    links: [{ label: "Live", href: "https://www.testzeus.com/" }],
    featured: true,
    frame: "agent",
    colSpan: 1,
  },
  {
    title: "Hyperswitch Web SDK",
    context: "Juspay · OSS",
    summary:
      "Checkout SDK used by merchants. Dynamic fields per payment method, faster first load, and safe CloudFront rollouts.",
    tags: ["ReScript", "React", "CloudFront", "CI/CD"],
    links: [
      { label: "GitHub", href: "https://github.com/juspay/hyperswitch-web" },
      { label: "Docs", href: "https://hyperswitch.io/" },
    ],
    featured: true,
    frame: "checkout",
    colSpan: 1,
  },
  {
    title: "Hyperswitch Dashboard",
    context: "Juspay",
    summary:
      "Merchant ops dashboard from zero — configure 25+ processors without a backend change for common cases.",
    tags: ["ReScript", "Recoil", "React"],
    links: [{ label: "Live", href: "https://app.hyperswitch.io/" }],
    frame: "dashboard",
    colSpan: 1,
  },
  {
    title: "Composio integrations",
    context: "TestZeus · 2025",
    summary:
      "An extensible integration layer for 15+ apps — connect an account, build a knowledge base, generate tests. New connectors drop in without a rewrite.",
    tags: ["Composio", "React", "Integrations"],
    links: [{ label: "Live", href: "https://www.testzeus.com/" }],
    frame: "integrations",
    colSpan: 1,
  },
  {
    title: "HyperStudio",
    context: "Juspay",
    summary:
      "Layout and UI customization for Hyperswitch checkout — white-label the SDK with reusable ReScript components and Recoil state.",
    tags: ["ReScript", "Recoil", "SDK"],
    links: [{ label: "Docs", href: "https://hyperswitch.io/" }],
    frame: "studio",
    colSpan: 1,
  },
  {
    title: "react-hyper-js",
    context: "Juspay · npm",
    summary:
      "React wrapper for Hyper JS — about 4k weekly npm downloads. The package merchants reach for when they want Hyperswitch in a React app.",
    tags: ["React", "npm", "Payments"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/@juspay-tech/react-hyper-js" },
      { label: "GitHub", href: "https://github.com/juspay/react-hyper-js" },
    ],
    frame: "npm",
    colSpan: 1,
  },
  {
    title: "URL shortener",
    context: "Personal",
    summary:
      "Short links and click analytics as a production-style API — Fastify, TypeScript, Redis.",
    tags: ["Fastify", "TypeScript", "Redis"],
    links: [{ label: "GitHub", href: "https://github.com/PritishBudhiraja/url-shortener" }],
    frame: "api",
    colSpan: 1,
  },
  {
    title: "Rate limiter gateway",
    context: "Personal",
    summary:
      "An API gateway with three Redis algorithms and comments on every command — token bucket, sliding window, and fixed window.",
    tags: ["Express", "Redis", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/PritishBudhiraja/rate-limiter-gateway" }],
    frame: "gateway",
    colSpan: 1,
  },
]
