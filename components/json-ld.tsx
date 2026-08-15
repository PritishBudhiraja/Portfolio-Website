export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")

  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, not user input
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  )
}
