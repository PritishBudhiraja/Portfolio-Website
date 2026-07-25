"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { SectionLabel } from "@/components/ui/section-label"
import { OriginButton, OriginButtonOutline } from "@/components/ui/origin-button"

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "pritish.budhiraja@gmail.com",
    href: "mailto:pritish.budhiraja@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-897-9984-894",
    href: "tel:+918979984894",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
  },
]

export default function Contact() {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <SectionLabel>Let's Connect</SectionLabel>
          <FadeIn>
            <h2 className="text-section font-display font-bold mb-6 text-center">Get In Touch</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-center max-w-3xl text-muted-foreground leading-relaxed">
              Feel free to reach out to me for any inquiries, opportunities, or just to say hello!
            </p>
          </FadeIn>
        </div>

        <motion.div
          ref={cardRef}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="border-none shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div
                className="bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4">Contact Information</h3>
                  <p className="text-primary-foreground/80 mb-10 leading-relaxed">
                    I'm currently open to new opportunities and collaborations. Let's connect!
                  </p>

                  <div className="space-y-6">
                    {contactItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="bg-primary-foreground/10 p-3 rounded-xl">
                          <item.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium text-primary-foreground/90 text-sm uppercase tracking-wide">
                            {item.label}
                          </h4>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-primary-foreground/80">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="mt-12 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="font-medium text-primary-foreground/90 mb-4 text-sm uppercase tracking-wide">
                    Connect with me
                  </h4>
                  <div className="flex gap-3">
                    <motion.a
                      href="https://linkedin.com/in/pritish-budhiraja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-foreground/10 p-3 rounded-xl hover:bg-primary-foreground/20 transition-colors"
                      aria-label="LinkedIn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LinkedinIcon className="h-5 w-5 text-primary-foreground" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/PritishBudhiraja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-foreground/10 p-3 rounded-xl hover:bg-primary-foreground/20 transition-colors"
                      aria-label="GitHub"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <GithubIcon className="h-5 w-5 text-primary-foreground" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="p-8 md:p-10 flex flex-col justify-center"
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center space-y-6">
                  <motion.div
                    className="inline-block mx-auto bg-primary/10 p-5 rounded-2xl mb-2"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Mail className="h-10 w-10 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold">Let's Work Together</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in hearing about new projects and opportunities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <OriginButton href="mailto:pritish.budhiraja@gmail.com">
                      Send Email <ExternalLink className="h-4 w-4" />
                    </OriginButton>
                    <OriginButtonOutline href="https://linkedin.com/in/pritish-budhiraja" target="_blank" rel="noopener noreferrer">
                      LinkedIn <LinkedinIcon className="h-4 w-4" />
                    </OriginButtonOutline>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
