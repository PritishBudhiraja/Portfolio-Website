import { education, resumeMeta } from "@/lib/resume-data"
import {
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_JOB_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site-config"

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}${SITE_IMAGE}`,
        jobTitle: SITE_JOB_TITLE,
        email: `mailto:${resumeMeta.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressCountry: "IN",
        },
        worksFor: {
          "@type": "Organization",
          name: "TestZeus",
          url: "https://www.testzeus.com/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education.school,
          url: education.schoolUrl,
        },
        sameAs: [resumeMeta.linkedin, resumeMeta.github],
        knowsAbout: [
          "React",
          "TypeScript",
          "JavaScript",
          "Frontend Engineering",
          "Cloud Infrastructure",
          "AWS",
          "Payment Systems",
          "AI Testing",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en",
      },
    ],
  }
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
