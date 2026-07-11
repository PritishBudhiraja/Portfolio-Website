import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
          <p className="text-lg text-center max-w-3xl text-muted-foreground">
            Feel free to reach out to me for any inquiries, opportunities, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info Side */}
              <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="text-primary-foreground/80 mb-8">
                    I'm currently open to new opportunities and collaborations. Let's connect!
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary-foreground/10 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-foreground/90">Email</h4>
                        <a
                          href="mailto:pritish.budhiraja@gmail.com"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          pritish.budhiraja@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary-foreground/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-foreground/90">Phone</h4>
                        <a
                          href="tel:+918979984894"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          +91-897-9984-894
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary-foreground/10 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-foreground/90">Location</h4>
                        <p className="text-primary-foreground/80">Bangalore, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-medium text-primary-foreground/90 mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/pritish-budhiraja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5 text-primary-foreground" />
                    </a>
                    <a
                      href="https://github.com/PritishBudhiraja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="h-5 w-5 text-primary-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to Action Side */}
              <div className="p-8 flex flex-col justify-center">
                <div className="text-center space-y-6">
                  <div className="inline-block mx-auto bg-primary/10 p-4 rounded-full mb-2">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Let's Work Together</h3>
                  <p className="text-muted-foreground">
                    I'm always interested in hearing about new projects and opportunities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button asChild size="lg" className="gap-2">
                      <a href="mailto:pritish.budhiraja@gmail.com">
                        Send Email <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="gap-2">
                      <a href="https://linkedin.com/in/pritish-budhiraja" target="_blank" rel="noopener noreferrer">
                        Connect on LinkedIn <LinkedinIcon className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
