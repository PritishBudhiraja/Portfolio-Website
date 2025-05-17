import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from "lucide-react"

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
                      <Linkedin className="h-5 w-5 text-primary-foreground" />
                    </a>
                    <a
                      href="https://github.com/PritishBudhiraja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-primary-foreground" />
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
                        Connect on LinkedIn <Linkedin className="h-4 w-4" />
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
