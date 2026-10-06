const BODY = [
  "Contact: mailto:pritish.budhiraja@gmail.com",
  "Expires: 2027-10-06T23:59:59.000Z",
  "Preferred-Languages: en",
  "Canonical: https://www.pritishbudhiraja.com/.well-known/security.txt",
].join("\n")

export function GET() {
  return new Response(`${BODY}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
